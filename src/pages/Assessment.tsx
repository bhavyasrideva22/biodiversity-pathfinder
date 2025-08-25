import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { ArrowLeft, ArrowRight, Leaf } from 'lucide-react';
import { assessmentQuestions, Question, AssessmentData } from '@/lib/assessment-data';

const Assessment = () => {
  const navigate = useNavigate();
  const [currentSection, setCurrentSection] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [sectionProgress, setSectionProgress] = useState(0);
  
  const sections = Object.keys(assessmentQuestions);
  const currentSectionKey = sections[currentSection];
  const questions = assessmentQuestions[currentSectionKey];
  const totalQuestions = Object.values(assessmentQuestions).flat().length;
  const answeredQuestions = Object.keys(answers).length;
  
  useEffect(() => {
    const progress = (answeredQuestions / totalQuestions) * 100;
    setSectionProgress(progress);
  }, [answers, totalQuestions, answeredQuestions]);

  const handleAnswer = (questionId: string, value: number) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: value
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentSection < sections.length - 1) {
      setCurrentSection(currentSection + 1);
      setCurrentQuestion(0);
    } else {
      // Assessment complete - navigate to results
      const assessmentData: AssessmentData = {
        answers,
        completedAt: new Date().toISOString()
      };
      localStorage.setItem('assessmentData', JSON.stringify(assessmentData));
      navigate('/results');
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    } else if (currentSection > 0) {
      setCurrentSection(currentSection - 1);
      setCurrentQuestion(assessmentQuestions[sections[currentSection - 1]].length - 1);
    }
  };

  const currentQuestionData = questions[currentQuestion];
  const currentAnswer = answers[currentQuestionData.id];
  const canProceed = currentAnswer !== undefined;
  
  const getSectionTitle = (section: string) => {
    const titles: Record<string, string> = {
      psychometric: '🧠 Psychological Evaluation',
      technical: '🔬 Technical Aptitude',
      wiscar: '📊 WISCAR Framework'
    };
    return titles[section] || section;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="font-semibold text-lg">Biodiversity Assessment</span>
            </div>
            <div className="text-sm text-muted-foreground">
              {answeredQuestions} of {totalQuestions} questions
            </div>
          </div>
          <div className="mt-4">
            <Progress value={sectionProgress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold mb-2">
            {getSectionTitle(currentSectionKey)}
          </h1>
          <p className="text-muted-foreground">
            Section {currentSection + 1} of {sections.length} • Question {currentQuestion + 1} of {questions.length}
          </p>
        </div>

        {/* Question Card */}
        <Card className="mb-8 border-primary/20">
          <CardContent className="p-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-foreground leading-relaxed">
              {currentQuestionData.question}
            </h2>
            
            <RadioGroup 
              value={currentAnswer?.toString()} 
              onValueChange={(value) => handleAnswer(currentQuestionData.id, parseInt(value))}
              className="space-y-4"
            >
              {currentQuestionData.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border hover:border-primary/40 transition-colors cursor-pointer">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label 
                    htmlFor={`option-${index}`} 
                    className="flex-1 cursor-pointer text-base leading-relaxed"
                  >
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentSection === 0 && currentQuestion === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Previous
          </Button>

          <div className="text-sm text-muted-foreground">
            {currentSection === sections.length - 1 && currentQuestion === questions.length - 1
              ? 'Complete Assessment'
              : 'Next Question'
            }
          </div>

          <Button
            onClick={handleNext}
            disabled={!canProceed}
            className="flex items-center gap-2 bg-primary hover:bg-primary/90"
          >
            {currentSection === sections.length - 1 && currentQuestion === questions.length - 1
              ? 'View Results'
              : 'Next'
            }
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;