import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Leaf, Target, Users, TrendingUp, CheckCircle, Lightbulb } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-primary/10 rounded-full">
                <Leaf className="w-12 h-12 text-primary" />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-accent to-primary-light bg-clip-text text-transparent">
              Biodiversity Pathfinder
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Discover if a career in <span className="text-primary font-semibold">Biodiversity Impact Assessment</span> is right for you
            </p>
            
            <p className="text-lg text-foreground/80 mb-10 max-w-2xl mx-auto">
              Take our comprehensive assessment to evaluate your psychological fit, technical readiness, 
              and career alignment with biodiversity conservation and environmental impact roles.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/assessment">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Start Assessment
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground">
                ⏱️ Takes 20-30 minutes
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* What You'll Discover Section */}
      <section className="py-16 bg-card/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground">
            What You'll Discover
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Target className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Your Fit Score</h3>
                <p className="text-muted-foreground">
                  Comprehensive evaluation of your psychological alignment, technical aptitude, and career readiness.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <TrendingUp className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Career Matches</h3>
                <p className="text-muted-foreground">
                  Personalized career recommendations from Environmental Consultant to Conservation Scientist.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-primary/20 hover:border-primary/40 transition-colors duration-300">
              <CardContent className="p-6 text-center">
                <Lightbulb className="w-12 h-12 text-primary-light mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Learning Path</h3>
                <p className="text-muted-foreground">
                  Customized roadmap with courses, skills, and next steps tailored to your results.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Assessment Covers Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-12 text-foreground">
              Comprehensive Assessment Framework
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Psychological Evaluation</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Big 5 Personality Assessment</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Environmental Ethics & Values</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Curiosity & Growth Mindset</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Grit & Persistence Evaluation</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-primary mb-4">Technical & Aptitude</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Ecology & Biology Foundations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Data Analysis & Statistics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Systems Thinking Ability</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span>Impact Assessment Knowledge</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="py-16 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4 text-foreground">
            Ready to Discover Your Biodiversity Career Path?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of environmental professionals who've used our assessment to find their ideal career fit.
          </p>
          <Link to="/assessment">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Start Your Assessment
            </Button>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Index;