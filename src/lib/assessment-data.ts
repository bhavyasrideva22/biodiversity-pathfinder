// Assessment data structure and logic

export interface Question {
  id: string;
  question: string;
  options: string[];
  category: string;
  weight: number;
}

export interface AssessmentData {
  answers: Record<string, number>;
  completedAt: string;
}

export interface AssessmentResults {
  overallScore: number;
  psychometricScore: number;
  technicalScore: number;
  wiscarScore: number;
  recommendation: string;
  feedback: string;
  careerRecommendations: CareerRecommendation[];
  learningPath: LearningPhase[];
  completedAt: string;
}

export interface CareerRecommendation {
  title: string;
  description: string;
  matchPercent: number;
  salaryRange: string;
}

export interface LearningPhase {
  level: string;
  description: string;
  duration: string;
  skills: string[];
}

export const assessmentQuestions: Record<string, Question[]> = {
  psychometric: [
    {
      id: 'psych_001',
      question: 'I enjoy exploring ecosystems, species interactions, and biodiversity databases.',
      options: [
        'Strongly Disagree',
        'Disagree',
        'Neutral',
        'Agree', 
        'Strongly Agree'
      ],
      category: 'interest',
      weight: 1.2
    },
    {
      id: 'psych_002', 
      question: 'I am deeply motivated by the need to reduce human impacts on ecosystems.',
      options: [
        'Not at all motivated',
        'Slightly motivated',
        'Moderately motivated',
        'Highly motivated',
        'Extremely motivated'
      ],
      category: 'motivation',
      weight: 1.3
    },
    {
      id: 'psych_003',
      question: 'I remain consistent and persistent when faced with scientific setbacks or challenges.',
      options: [
        'Rarely',
        'Sometimes', 
        'Often',
        'Usually',
        'Always'
      ],
      category: 'grit',
      weight: 1.1
    },
    {
      id: 'psych_004',
      question: 'I prefer structured field research over ambiguous, creative projects.',
      options: [
        'Strongly prefer creative projects',
        'Prefer creative projects',
        'No preference',
        'Prefer structured research',
        'Strongly prefer structured research'
      ],
      category: 'working_style',
      weight: 1.0
    },
    {
      id: 'psych_005',
      question: 'Even if I\'m not good at statistics now, I believe I can learn and improve.',
      options: [
        'Strongly disagree',
        'Disagree',
        'Neutral',
        'Agree',
        'Strongly agree'
      ],
      category: 'growth_mindset',
      weight: 1.2
    },
    {
      id: 'psych_006',
      question: 'I find fulfillment in work that directly contributes to environmental conservation.',
      options: [
        'Not fulfilling at all',
        'Slightly fulfilling',
        'Moderately fulfilling', 
        'Very fulfilling',
        'Extremely fulfilling'
      ],
      category: 'purpose',
      weight: 1.3
    },
    {
      id: 'psych_007',
      question: 'I enjoy working both independently in the field and collaboratively with teams.',
      options: [
        'Strongly prefer working alone',
        'Prefer working alone',
        'No preference',
        'Prefer collaborative work',
        'Strongly prefer collaborative work'
      ],
      category: 'collaboration',
      weight: 1.0
    },
    {
      id: 'psych_008',
      question: 'I am comfortable with uncertainty and adapting to changing environmental conditions.',
      options: [
        'Very uncomfortable',
        'Uncomfortable',
        'Neutral',
        'Comfortable',
        'Very comfortable'
      ],
      category: 'adaptability',
      weight: 1.1
    }
  ],
  technical: [
    {
      id: 'tech_001',
      question: 'Biodiversity refers to the variety of life at which levels?',
      options: [
        'Only species level',
        'Species and genetic levels only',
        'Genetic, species, and ecosystem levels',
        'Only ecosystem level',
        'Cultural and social levels only'
      ],
      category: 'knowledge',
      weight: 1.0
    },
    {
      id: 'tech_002',
      question: 'The IUCN Red List is primarily used to:',
      options: [
        'Track pollution levels',
        'Classify climate zones',
        'Assess extinction risk of species',
        'Monitor deforestation rates',
        'Measure economic impacts'
      ],
      category: 'knowledge',
      weight: 1.0
    },
    {
      id: 'tech_003',
      question: 'In the mitigation hierarchy, what is the correct order of actions?',
      options: [
        'Offset, Restore, Minimize, Avoid',
        'Minimize, Avoid, Restore, Offset', 
        'Avoid, Minimize, Restore, Offset',
        'Restore, Avoid, Minimize, Offset',
        'Avoid, Restore, Minimize, Offset'
      ],
      category: 'knowledge',
      weight: 1.2
    },
    {
      id: 'tech_004',
      question: 'If a forest habitat loses 30% of its area, approximately what percentage of species might be lost according to species-area relationships?',
      options: [
        '5-10%',
        '10-15%',
        '15-20%',
        '25-30%',
        '30-35%'
      ],
      category: 'analytical',
      weight: 1.1
    },
    {
      id: 'tech_005',
      question: 'Which of the following is NOT typically a direct threat to biodiversity?',
      options: [
        'Habitat fragmentation',
        'Invasive species',
        'Climate change',
        'Renewable energy development',
        'Pollution'
      ],
      category: 'knowledge',
      weight: 1.0
    },
    {
      id: 'tech_006',
      question: 'Ecosystem services include:',
      options: [
        'Only provisioning services like food and water',
        'Only regulating services like climate control',
        'Only cultural services like recreation',
        'Provisioning, regulating, cultural, and supporting services',
        'Only supporting services like nutrient cycling'
      ],
      category: 'knowledge',
      weight: 1.1
    },
    {
      id: 'tech_007', 
      question: 'You need to assess biodiversity in two different sites. Which approach would be most appropriate?',
      options: [
        'Count only the largest, most visible species',
        'Use standardized sampling methods across multiple taxa',
        'Focus only on endangered species',
        'Sample only during one season',
        'Count species without considering abundance'
      ],
      category: 'methodology',
      weight: 1.2
    },
    {
      id: 'tech_008',
      question: 'Environmental Impact Assessments (EIAs) typically include biodiversity assessments to:',
      options: [
        'Meet legal requirements only',
        'Identify and mitigate potential impacts on species and ecosystems',
        'Increase project costs',
        'Delay project approval',
        'Satisfy public interest groups'
      ],
      category: 'application',
      weight: 1.2
    }
  ],
  wiscar: [
    {
      id: 'wiscar_001',
      question: 'When faced with complex ecological problems, I tend to:',
      options: [
        'Look for simple, quick solutions',
        'Get overwhelmed and avoid the problem',
        'Break it down into manageable components',
        'Wait for others to solve it',
        'Guess at solutions without analysis'
      ],
      category: 'cognitive',
      weight: 1.2
    },
    {
      id: 'wiscar_002',
      question: 'My ideal work environment would involve:',
      options: [
        'Only office-based computer work',
        'Only outdoor fieldwork',
        'A mix of fieldwork, lab analysis, and office tasks',
        'Only laboratory research',
        'Only policy and administrative work'
      ],
      category: 'real_world_alignment',
      weight: 1.3
    },
    {
      id: 'wiscar_003',
      question: 'When learning new concepts in ecology or conservation, I:',
      options: [
        'Struggle to understand and give up quickly',
        'Need extensive help and support',
        'Can learn with moderate effort and guidance',
        'Pick up concepts relatively easily',
        'Excel at rapid learning and application'
      ],
      category: 'ability_to_learn',
      weight: 1.2
    },
    {
      id: 'wiscar_004',
      question: 'My current skills in data analysis and statistics are:',
      options: [
        'Non-existent - I avoid numbers entirely',
        'Very basic - I can do simple calculations',
        'Moderate - I can handle basic statistical concepts',
        'Good - I\'m comfortable with statistical software',
        'Excellent - I can conduct complex analyses'
      ],
      category: 'skill',
      weight: 1.1
    },
    {
      id: 'wiscar_005',
      question: 'I would describe my dedication to environmental causes as:',
      options: [
        'Minimal - it\'s just a job consideration',
        'Casual - I care but it\'s not a priority',
        'Moderate - I try to make environmentally conscious choices',
        'Strong - Environmental issues are very important to me',
        'Passionate - I\'m willing to dedicate my career to this cause'
      ],
      category: 'will',
      weight: 1.4
    },
    {
      id: 'wiscar_006',
      question: 'When working on long-term projects (6+ months), I typically:',
      options: [
        'Lose interest after a few weeks',
        'Struggle to maintain focus',
        'Stay engaged with occasional motivation dips',
        'Maintain steady progress throughout',
        'Become more motivated as the project progresses'
      ],
      category: 'will',
      weight: 1.2
    }
  ]
};

export function calculateResults(data: AssessmentData): AssessmentResults {
  const answers = data.answers;
  
  // Calculate section scores
  const psychometricQuestions = assessmentQuestions.psychometric;
  const technicalQuestions = assessmentQuestions.technical;
  const wiscarQuestions = assessmentQuestions.wiscar;
  
  // Psychometric score calculation
  let psychometricTotal = 0;
  let psychometricWeight = 0;
  psychometricQuestions.forEach(q => {
    if (answers[q.id] !== undefined) {
      psychometricTotal += (answers[q.id] * q.weight);
      psychometricWeight += q.weight;
    }
  });
  const psychometricScore = Math.round((psychometricTotal / (psychometricWeight * 4)) * 100);
  
  // Technical score calculation  
  let technicalTotal = 0;
  let technicalWeight = 0;
  technicalQuestions.forEach(q => {
    if (answers[q.id] !== undefined) {
      // For knowledge questions, correct answers get full points
      let score = answers[q.id];
      if (q.category === 'knowledge') {
        const correctAnswers: Record<string, number> = {
          'tech_001': 2, // Genetic, species, and ecosystem levels
          'tech_002': 2, // Assess extinction risk of species  
          'tech_003': 2, // Avoid, Minimize, Restore, Offset
          'tech_004': 1, // 10-15% species loss
          'tech_005': 3, // Renewable energy development
          'tech_006': 3, // All ecosystem services
          'tech_008': 1  // Identify and mitigate impacts
        };
        score = (answers[q.id] === correctAnswers[q.id]) ? 4 : answers[q.id] * 0.5;
      }
      technicalTotal += (score * q.weight);
      technicalWeight += q.weight;
    }
  });
  const technicalScore = Math.round((technicalTotal / (technicalWeight * 4)) * 100);
  
  // WISCAR score calculation
  let wiscarTotal = 0;
  let wiscarWeight = 0;
  wiscarQuestions.forEach(q => {
    if (answers[q.id] !== undefined) {
      wiscarTotal += (answers[q.id] * q.weight);
      wiscarWeight += q.weight;
    }
  });
  const wiscarScore = Math.round((wiscarTotal / (wiscarWeight * 4)) * 100);
  
  // Overall score (weighted average)
  const overallScore = Math.round(
    (psychometricScore * 0.4) + 
    (technicalScore * 0.3) + 
    (wiscarScore * 0.3)
  );
  
  // Generate recommendation
  let recommendation = '';
  let feedback = '';
  
  if (overallScore >= 80) {
    recommendation = 'Excellent Fit';
    feedback = 'You show exceptional alignment with biodiversity impact assessment careers. Your strong motivation, technical aptitude, and learning capacity make you an ideal candidate for this field.';
  } else if (overallScore >= 65) {
    recommendation = 'Good Fit';
    feedback = 'You demonstrate good alignment with biodiversity careers. With some focused learning and skill development, you can excel in environmental impact assessment roles.';
  } else if (overallScore >= 50) {
    recommendation = 'Moderate Fit';
    feedback = 'You show moderate potential for biodiversity careers. Consider strengthening your technical knowledge and exploring related fields that align with your interests.';
  } else {
    recommendation = 'Limited Fit';
    feedback = 'Your current profile suggests exploring adjacent environmental fields like policy, education, or communications might be better aligned with your strengths and interests.';
  }
  
  // Career recommendations
  const careerRecommendations: CareerRecommendation[] = [
    {
      title: 'Biodiversity Impact Assessor',
      description: 'Evaluate environmental impacts of development projects on species and ecosystems.',
      matchPercent: Math.min(95, overallScore + 10),
      salaryRange: '$55,000 - $85,000'
    },
    {
      title: 'Environmental Consultant',
      description: 'Advise organizations on nature-friendly practices and regulatory compliance.',
      matchPercent: Math.min(90, overallScore + 5),
      salaryRange: '$60,000 - $100,000'
    },
    {
      title: 'Conservation Scientist',
      description: 'Manage natural resources with focus on species and habitat conservation.',
      matchPercent: Math.max(60, overallScore - 5),
      salaryRange: '$55,000 - $88,000'
    },
    {
      title: 'Ecologist',
      description: 'Study relationships between organisms and their environment through field and lab work.',
      matchPercent: Math.max(65, overallScore),
      salaryRange: '$60,000 - $90,000'
    }
  ];
  
  // Learning path
  const learningPath: LearningPhase[] = [
    {
      level: 'Foundation',
      description: 'Build core knowledge in ecology, biodiversity concepts, and environmental science fundamentals.',
      duration: '3-4 weeks',
      skills: ['Basic Ecology', 'Ecosystem Services', 'Species Identification', 'Conservation Principles']
    },
    {
      level: 'Intermediate',
      description: 'Develop technical skills in impact assessment, GIS, and biodiversity monitoring methods.',
      duration: '6-8 weeks', 
      skills: ['EIA Frameworks', 'GIS Mapping', 'Data Collection', 'Statistical Analysis', 'Report Writing']
    },
    {
      level: 'Advanced',
      description: 'Gain practical experience through projects, internships, and specialized training programs.',
      duration: '3-6 months',
      skills: ['Mitigation Planning', 'Stakeholder Engagement', 'Policy Knowledge', 'Project Management']
    }
  ];
  
  return {
    overallScore,
    psychometricScore,
    technicalScore,
    wiscarScore,
    recommendation,
    feedback,
    careerRecommendations,
    learningPath,
    completedAt: data.completedAt
  };
}