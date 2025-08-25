import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { ArrowLeft, Download, Share2, Target, TrendingUp, BookOpen, Users, Leaf, Star } from 'lucide-react';
import { AssessmentData, calculateResults, AssessmentResults } from '@/lib/assessment-data';

const Results = () => {
  const navigate = useNavigate();
  const [results, setResults] = useState<AssessmentResults | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedData = localStorage.getItem('assessmentData');
    if (!storedData) {
      navigate('/');
      return;
    }

    try {
      const assessmentData: AssessmentData = JSON.parse(storedData);
      const calculatedResults = calculateResults(assessmentData);
      setResults(calculatedResults);
    } catch (error) {
      console.error('Error processing assessment results:', error);
      navigate('/');
    } finally {
      setLoading(false);
    }
  }, [navigate]);

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-600';
    if (score >= 60) return 'text-yellow-600';
    return 'text-orange-600';
  };

  const getRecommendationBadge = (recommendation: string) => {
    const colors: Record<string, string> = {
      'Excellent Fit': 'bg-green-100 text-green-800 border-green-200',
      'Good Fit': 'bg-blue-100 text-blue-800 border-blue-200',
      'Moderate Fit': 'bg-yellow-100 text-yellow-800 border-yellow-200',
      'Limited Fit': 'bg-orange-100 text-orange-800 border-orange-200'
    };
    return colors[recommendation] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  if (loading || !results) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Analyzing your responses...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Header */}
      <header className="bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-primary" />
              <div>
                <h1 className="font-bold text-xl">Your Biodiversity Career Assessment</h1>
                <p className="text-sm text-muted-foreground">Completed on {new Date(results.completedAt).toLocaleDateString()}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Download className="w-4 h-4 mr-2" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Overall Score Card */}
        <Card className="mb-8 border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5">
          <CardContent className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-4 bg-primary/10 rounded-full">
                <Target className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h2 className="text-3xl font-bold mb-2">
              Overall Fit Score: <span className={getScoreColor(results.overallScore)}>{results.overallScore}%</span>
            </h2>
            <Badge className={`mb-4 ${getRecommendationBadge(results.recommendation)}`}>
              {results.recommendation}
            </Badge>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {results.feedback}
            </p>
          </CardContent>
        </Card>

        {/* Detailed Scores */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                Psychological Fit
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2 text-primary">
                {results.psychometricScore}%
              </div>
              <Progress value={results.psychometricScore} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Measures personality alignment, values, and motivation for biodiversity work.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-accent" />
                Technical Readiness
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2 text-accent">
                {results.technicalScore}%
              </div>
              <Progress value={results.technicalScore} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Assesses current knowledge and aptitude for ecological and analytical skills.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary-light" />
                WISCAR Score
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold mb-2 text-primary-light">
                {results.wiscarScore}%
              </div>
              <Progress value={results.wiscarScore} className="mb-3" />
              <p className="text-sm text-muted-foreground">
                Evaluates Will, Interest, Skill, Cognitive ability, Ability to learn, and Real-world alignment.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Career Recommendations */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Recommended Career Paths</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              {results.careerRecommendations.map((career, index) => (
                <div key={index} className="p-4 rounded-lg border border-border hover:border-primary/40 transition-colors">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-semibold text-lg">{career.title}</h3>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{career.matchPercent}%</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-3">{career.description}</p>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-primary font-medium">{career.salaryRange}</span>
                    <Badge variant="outline">{career.matchPercent}% Match</Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Path */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Your Personalized Learning Path</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {results.learningPath.map((phase, index) => (
                <div key={index} className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-2">{phase.level}</h3>
                    <p className="text-muted-foreground mb-3">{phase.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Duration: {phase.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Next Steps */}
        <Card>
          <CardHeader>
            <CardTitle>What's Next?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              <Button className="h-auto p-4 flex-col bg-primary hover:bg-primary/90">
                <BookOpen className="w-6 h-6 mb-2" />
                <span className="font-medium">Start Learning</span>
                <span className="text-xs opacity-90">Begin your educational journey</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
                <Users className="w-6 h-6 mb-2" />
                <span className="font-medium">Connect with Professionals</span>
                <span className="text-xs opacity-70">Network in the field</span>
              </Button>
              <Button variant="outline" className="h-auto p-4 flex-col">
                <Target className="w-6 h-6 mb-2" />
                <span className="font-medium">Explore Opportunities</span>
                <span className="text-xs opacity-70">Find internships and jobs</span>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-border">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Button>
          </Link>
          <Link to="/assessment">
            <Button variant="outline">
              Retake Assessment
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Results;