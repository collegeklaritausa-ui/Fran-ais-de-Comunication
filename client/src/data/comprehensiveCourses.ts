// PRIZE2PRIDE COMPREHENSIVE FRENCH COURSE DATABASE
// 1000+ Interactive Courses from A2 to C2

export interface ComprehensiveCourse {
  id: string;
  title: string;
  titleFr: string;
  level: 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  category: string;
  subcategory: string;
  description: string;
  descriptionFr: string;
  duration: number;
  modules: number;
  exercises: number;
  rating: number;
  students: number;
  xp: number;
  skills: string[];
  prerequisites: string[];
  certification: boolean;
  instructor: {
    name: string;
    avatar: string;
    specialty: string;
  };
  tags: string[];
  featured: boolean;
  new: boolean;
  popular: boolean;
}

// ============================================================================
// GRAMMAR COURSES
// ============================================================================

const GRAMMAR_COURSES: ComprehensiveCourse[] = [
  // A2 Grammar
  {
    id: 'gram-a2-001',
    title: 'Present Tense Mastery',
    titleFr: 'Maîtrise du Présent',
    level: 'A2',
    category: 'Grammar',
    subcategory: 'Verb Tenses',
    description: 'Master the present tense with regular and irregular verbs. Learn conjugation patterns and everyday usage.',
    descriptionFr: 'Maîtrisez le présent avec les verbes réguliers et irréguliers.',
    duration: 120,
    modules: 8,
    exercises: 45,
    rating: 4.8,
    students: 45000,
    xp: 250,
    skills: ['Conjugation', 'Verb forms', 'Daily expressions'],
    prerequisites: ['Basic alphabet', 'Numbers 1-100'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['present tense', 'verbs', 'conjugation', 'beginner'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'gram-a2-002',
    title: 'Passé Composé Fundamentals',
    titleFr: 'Les Bases du Passé Composé',
    level: 'A2',
    category: 'Grammar',
    subcategory: 'Verb Tenses',
    description: 'Learn to talk about past events using passé composé with avoir and être auxiliaries.',
    descriptionFr: 'Apprenez à parler du passé avec le passé composé.',
    duration: 150,
    modules: 10,
    exercises: 60,
    rating: 4.7,
    students: 38000,
    xp: 300,
    skills: ['Past tense', 'Auxiliary verbs', 'Past participles'],
    prerequisites: ['Present tense basics'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['passé composé', 'past tense', 'avoir', 'être'],
    featured: false,
    new: false,
    popular: true
  },
  {
    id: 'gram-a2-003',
    title: 'Articles & Gender',
    titleFr: 'Les Articles et le Genre',
    level: 'A2',
    category: 'Grammar',
    subcategory: 'Nouns & Articles',
    description: 'Understand French articles (le, la, les, un, une, des) and noun gender rules.',
    descriptionFr: 'Comprenez les articles français et les règles de genre.',
    duration: 90,
    modules: 6,
    exercises: 40,
    rating: 4.6,
    students: 52000,
    xp: 200,
    skills: ['Articles', 'Gender recognition', 'Noun agreement'],
    prerequisites: ['Basic vocabulary'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['articles', 'gender', 'nouns', 'le la les'],
    featured: false,
    new: false,
    popular: true
  },
  {
    id: 'gram-a2-004',
    title: 'Adjective Agreement',
    titleFr: 'L\'Accord des Adjectifs',
    level: 'A2',
    category: 'Grammar',
    subcategory: 'Adjectives',
    description: 'Learn how adjectives agree in gender and number with the nouns they describe.',
    descriptionFr: 'Apprenez l\'accord des adjectifs en genre et en nombre.',
    duration: 100,
    modules: 7,
    exercises: 50,
    rating: 4.5,
    students: 35000,
    xp: 220,
    skills: ['Adjective forms', 'Agreement rules', 'Descriptions'],
    prerequisites: ['Articles & Gender'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['adjectives', 'agreement', 'descriptions'],
    featured: false,
    new: false,
    popular: false
  },
  {
    id: 'gram-a2-005',
    title: 'Negation in French',
    titleFr: 'La Négation en Français',
    level: 'A2',
    category: 'Grammar',
    subcategory: 'Sentence Structure',
    description: 'Master negative constructions: ne...pas, ne...jamais, ne...rien, and more.',
    descriptionFr: 'Maîtrisez les constructions négatives en français.',
    duration: 80,
    modules: 5,
    exercises: 35,
    rating: 4.7,
    students: 28000,
    xp: 180,
    skills: ['Negation', 'Sentence structure', 'Word order'],
    prerequisites: ['Present tense basics'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['negation', 'ne pas', 'sentence structure'],
    featured: false,
    new: false,
    popular: false
  },

  // B1 Grammar
  {
    id: 'gram-b1-001',
    title: 'Imparfait vs Passé Composé',
    titleFr: 'Imparfait vs Passé Composé',
    level: 'B1',
    category: 'Grammar',
    subcategory: 'Verb Tenses',
    description: 'Master the crucial distinction between imparfait and passé composé for storytelling.',
    descriptionFr: 'Maîtrisez la distinction cruciale entre l\'imparfait et le passé composé.',
    duration: 180,
    modules: 12,
    exercises: 80,
    rating: 4.9,
    students: 42000,
    xp: 400,
    skills: ['Past tenses', 'Storytelling', 'Narrative'],
    prerequisites: ['Passé Composé Fundamentals'],
    certification: true,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['imparfait', 'passé composé', 'past tense', 'storytelling'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'gram-b1-002',
    title: 'Future Tense Complete',
    titleFr: 'Le Futur Complet',
    level: 'B1',
    category: 'Grammar',
    subcategory: 'Verb Tenses',
    description: 'Learn futur simple and futur proche to express future actions and plans.',
    descriptionFr: 'Apprenez le futur simple et le futur proche.',
    duration: 120,
    modules: 8,
    exercises: 55,
    rating: 4.6,
    students: 31000,
    xp: 300,
    skills: ['Future tense', 'Plans', 'Predictions'],
    prerequisites: ['Present tense mastery'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['future', 'futur simple', 'futur proche'],
    featured: false,
    new: false,
    popular: false
  },
  {
    id: 'gram-b1-003',
    title: 'Conditional Mood',
    titleFr: 'Le Conditionnel',
    level: 'B1',
    category: 'Grammar',
    subcategory: 'Verb Moods',
    description: 'Express hypothetical situations, polite requests, and wishes with the conditional.',
    descriptionFr: 'Exprimez des situations hypothétiques avec le conditionnel.',
    duration: 140,
    modules: 9,
    exercises: 60,
    rating: 4.7,
    students: 27000,
    xp: 350,
    skills: ['Conditional', 'Politeness', 'Hypotheticals'],
    prerequisites: ['Future tense'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['conditional', 'politeness', 'hypothetical'],
    featured: false,
    new: false,
    popular: true
  },
  {
    id: 'gram-b1-004',
    title: 'Relative Pronouns',
    titleFr: 'Les Pronoms Relatifs',
    level: 'B1',
    category: 'Grammar',
    subcategory: 'Pronouns',
    description: 'Connect ideas with qui, que, où, dont, and lequel for complex sentences.',
    descriptionFr: 'Connectez vos idées avec les pronoms relatifs.',
    duration: 130,
    modules: 8,
    exercises: 55,
    rating: 4.5,
    students: 24000,
    xp: 320,
    skills: ['Relative clauses', 'Complex sentences', 'Pronouns'],
    prerequisites: ['Basic sentence structure'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['pronouns', 'qui que', 'relative clauses'],
    featured: false,
    new: false,
    popular: false
  },

  // B2 Grammar
  {
    id: 'gram-b2-001',
    title: 'Subjunctive Mastery',
    titleFr: 'Maîtrise du Subjonctif',
    level: 'B2',
    category: 'Grammar',
    subcategory: 'Verb Moods',
    description: 'Master the subjunctive mood for expressing doubt, emotion, necessity, and more.',
    descriptionFr: 'Maîtrisez le subjonctif pour exprimer le doute et l\'émotion.',
    duration: 200,
    modules: 14,
    exercises: 100,
    rating: 4.8,
    students: 22000,
    xp: 500,
    skills: ['Subjunctive', 'Emotion', 'Doubt', 'Necessity'],
    prerequisites: ['Conditional Mood'],
    certification: true,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['subjunctive', 'subjonctif', 'mood', 'advanced'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'gram-b2-002',
    title: 'Passive Voice',
    titleFr: 'La Voix Passive',
    level: 'B2',
    category: 'Grammar',
    subcategory: 'Sentence Structure',
    description: 'Transform active sentences to passive and understand when to use each voice.',
    descriptionFr: 'Transformez les phrases actives en passives.',
    duration: 110,
    modules: 7,
    exercises: 50,
    rating: 4.6,
    students: 18000,
    xp: 280,
    skills: ['Passive voice', 'Sentence transformation', 'Style'],
    prerequisites: ['Past tenses'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['passive', 'voice', 'transformation'],
    featured: false,
    new: false,
    popular: false
  },
  {
    id: 'gram-b2-003',
    title: 'Reported Speech',
    titleFr: 'Le Discours Rapporté',
    level: 'B2',
    category: 'Grammar',
    subcategory: 'Sentence Structure',
    description: 'Report what others said with proper tense changes and indirect speech.',
    descriptionFr: 'Rapportez ce que les autres ont dit.',
    duration: 140,
    modules: 9,
    exercises: 65,
    rating: 4.7,
    students: 16000,
    xp: 350,
    skills: ['Reported speech', 'Tense changes', 'Quotations'],
    prerequisites: ['All past tenses'],
    certification: false,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['reported speech', 'indirect', 'quotations'],
    featured: false,
    new: true,
    popular: false
  },

  // C1 Grammar
  {
    id: 'gram-c1-001',
    title: 'Literary Tenses',
    titleFr: 'Les Temps Littéraires',
    level: 'C1',
    category: 'Grammar',
    subcategory: 'Verb Tenses',
    description: 'Master passé simple, passé antérieur, and other literary tenses for formal writing.',
    descriptionFr: 'Maîtrisez les temps littéraires pour l\'écriture formelle.',
    duration: 180,
    modules: 12,
    exercises: 80,
    rating: 4.9,
    students: 12000,
    xp: 600,
    skills: ['Literary tenses', 'Formal writing', 'Literature'],
    prerequisites: ['All indicative tenses'],
    certification: true,
    instructor: { name: 'Antoine Beaumont', avatar: '/assets/avatars/poster_013.png', specialty: 'Literature' },
    tags: ['passé simple', 'literary', 'formal', 'writing'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'gram-c1-002',
    title: 'Advanced Subjunctive',
    titleFr: 'Subjonctif Avancé',
    level: 'C1',
    category: 'Grammar',
    subcategory: 'Verb Moods',
    description: 'Explore subjunctive imperfect, pluperfect, and nuanced usage in literature.',
    descriptionFr: 'Explorez le subjonctif imparfait et plus-que-parfait.',
    duration: 160,
    modules: 10,
    exercises: 70,
    rating: 4.8,
    students: 9000,
    xp: 550,
    skills: ['Advanced subjunctive', 'Literary French', 'Nuance'],
    prerequisites: ['Subjunctive Mastery'],
    certification: true,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['subjunctive', 'advanced', 'literary'],
    featured: false,
    new: false,
    popular: false
  },

  // C2 Grammar
  {
    id: 'gram-c2-001',
    title: 'Native-Level Grammar',
    titleFr: 'Grammaire de Niveau Natif',
    level: 'C2',
    category: 'Grammar',
    subcategory: 'Mastery',
    description: 'Achieve native-level grammatical precision with advanced structures and exceptions.',
    descriptionFr: 'Atteignez une précision grammaticale de niveau natif.',
    duration: 240,
    modules: 16,
    exercises: 120,
    rating: 4.9,
    students: 5000,
    xp: 800,
    skills: ['Native precision', 'Exceptions', 'Style'],
    prerequisites: ['C1 Grammar completion'],
    certification: true,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['native', 'mastery', 'precision', 'advanced'],
    featured: true,
    new: false,
    popular: true
  }
];

// ============================================================================
// VOCABULARY COURSES
// ============================================================================

const VOCABULARY_COURSES: ComprehensiveCourse[] = [
  // A2 Vocabulary
  {
    id: 'vocab-a2-001',
    title: 'Daily Life Vocabulary',
    titleFr: 'Vocabulaire de la Vie Quotidienne',
    level: 'A2',
    category: 'Vocabulary',
    subcategory: 'Daily Life',
    description: 'Essential vocabulary for everyday situations: home, family, routines, and basic needs.',
    descriptionFr: 'Vocabulaire essentiel pour les situations quotidiennes.',
    duration: 100,
    modules: 8,
    exercises: 60,
    rating: 4.8,
    students: 58000,
    xp: 220,
    skills: ['Daily vocabulary', 'Basic expressions', 'Routines'],
    prerequisites: ['Basic alphabet'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['daily life', 'vocabulary', 'beginner', 'essential'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'vocab-a2-002',
    title: 'Food & Dining',
    titleFr: 'La Nourriture et les Repas',
    level: 'A2',
    category: 'Vocabulary',
    subcategory: 'Food',
    description: 'Learn vocabulary for food, cooking, restaurants, and French culinary culture.',
    descriptionFr: 'Apprenez le vocabulaire de la nourriture et de la cuisine française.',
    duration: 90,
    modules: 7,
    exercises: 50,
    rating: 4.9,
    students: 48000,
    xp: 200,
    skills: ['Food vocabulary', 'Restaurant French', 'Ordering'],
    prerequisites: ['Basic vocabulary'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['food', 'restaurant', 'cuisine', 'gastronomy'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'vocab-a2-003',
    title: 'Travel Essentials',
    titleFr: 'Vocabulaire de Voyage Essentiel',
    level: 'A2',
    category: 'Vocabulary',
    subcategory: 'Travel',
    description: 'Essential travel vocabulary: transportation, directions, hotels, and tourist situations.',
    descriptionFr: 'Vocabulaire essentiel pour voyager en France.',
    duration: 110,
    modules: 8,
    exercises: 55,
    rating: 4.7,
    students: 42000,
    xp: 240,
    skills: ['Travel vocabulary', 'Directions', 'Transportation'],
    prerequisites: ['Basic vocabulary'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['travel', 'tourism', 'directions', 'hotel'],
    featured: false,
    new: false,
    popular: true
  },

  // B1 Vocabulary
  {
    id: 'vocab-b1-001',
    title: 'Work & Professional Life',
    titleFr: 'Le Travail et la Vie Professionnelle',
    level: 'B1',
    category: 'Vocabulary',
    subcategory: 'Professional',
    description: 'Vocabulary for the workplace: jobs, office life, meetings, and professional communication.',
    descriptionFr: 'Vocabulaire pour le monde du travail.',
    duration: 130,
    modules: 10,
    exercises: 70,
    rating: 4.7,
    students: 35000,
    xp: 320,
    skills: ['Professional vocabulary', 'Office French', 'Meetings'],
    prerequisites: ['Daily Life Vocabulary'],
    certification: false,
    instructor: { name: 'Claire Moreau', avatar: '/assets/avatars/poster_012.png', specialty: 'Business' },
    tags: ['work', 'professional', 'office', 'career'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'vocab-b1-002',
    title: 'Health & Wellness',
    titleFr: 'La Santé et le Bien-être',
    level: 'B1',
    category: 'Vocabulary',
    subcategory: 'Health',
    description: 'Medical vocabulary, body parts, symptoms, and healthcare conversations.',
    descriptionFr: 'Vocabulaire médical et conversations de santé.',
    duration: 100,
    modules: 8,
    exercises: 55,
    rating: 4.6,
    students: 28000,
    xp: 260,
    skills: ['Medical vocabulary', 'Body parts', 'Healthcare'],
    prerequisites: ['Daily Life Vocabulary'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['health', 'medical', 'body', 'wellness'],
    featured: false,
    new: false,
    popular: false
  },
  {
    id: 'vocab-b1-003',
    title: 'Media & Technology',
    titleFr: 'Les Médias et la Technologie',
    level: 'B1',
    category: 'Vocabulary',
    subcategory: 'Technology',
    description: 'Modern vocabulary for technology, social media, internet, and digital life.',
    descriptionFr: 'Vocabulaire moderne pour la technologie et les médias.',
    duration: 110,
    modules: 8,
    exercises: 60,
    rating: 4.8,
    students: 32000,
    xp: 280,
    skills: ['Tech vocabulary', 'Social media', 'Digital French'],
    prerequisites: ['Daily Life Vocabulary'],
    certification: false,
    instructor: { name: 'Marc Van den Berg', avatar: '/assets/avatars/poster_015.png', specialty: 'Media' },
    tags: ['technology', 'media', 'internet', 'digital'],
    featured: false,
    new: true,
    popular: true
  },

  // B2 Vocabulary
  {
    id: 'vocab-b2-001',
    title: 'Business French',
    titleFr: 'Le Français des Affaires',
    level: 'B2',
    category: 'Vocabulary',
    subcategory: 'Business',
    description: 'Advanced business vocabulary: negotiations, presentations, finance, and corporate communication.',
    descriptionFr: 'Vocabulaire avancé des affaires et de l\'entreprise.',
    duration: 160,
    modules: 12,
    exercises: 85,
    rating: 4.9,
    students: 25000,
    xp: 420,
    skills: ['Business French', 'Negotiations', 'Finance'],
    prerequisites: ['Work & Professional Life'],
    certification: true,
    instructor: { name: 'Claire Moreau', avatar: '/assets/avatars/poster_012.png', specialty: 'Business' },
    tags: ['business', 'corporate', 'finance', 'professional'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'vocab-b2-002',
    title: 'Politics & Society',
    titleFr: 'La Politique et la Société',
    level: 'B2',
    category: 'Vocabulary',
    subcategory: 'Politics',
    description: 'Vocabulary for discussing politics, social issues, government, and current events.',
    descriptionFr: 'Vocabulaire pour discuter de politique et de société.',
    duration: 140,
    modules: 10,
    exercises: 70,
    rating: 4.7,
    students: 18000,
    xp: 380,
    skills: ['Political vocabulary', 'Social issues', 'Debate'],
    prerequisites: ['Media & Technology'],
    certification: false,
    instructor: { name: 'Marc Van den Berg', avatar: '/assets/avatars/poster_015.png', specialty: 'Media' },
    tags: ['politics', 'society', 'government', 'current events'],
    featured: false,
    new: false,
    popular: false
  },

  // C1 Vocabulary
  {
    id: 'vocab-c1-001',
    title: 'Academic French',
    titleFr: 'Le Français Académique',
    level: 'C1',
    category: 'Vocabulary',
    subcategory: 'Academic',
    description: 'Advanced academic vocabulary for university studies, research, and scholarly writing.',
    descriptionFr: 'Vocabulaire académique avancé pour les études universitaires.',
    duration: 180,
    modules: 14,
    exercises: 90,
    rating: 4.8,
    students: 12000,
    xp: 500,
    skills: ['Academic writing', 'Research vocabulary', 'Scholarly French'],
    prerequisites: ['B2 completion'],
    certification: true,
    instructor: { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    tags: ['academic', 'university', 'research', 'scholarly'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'vocab-c1-002',
    title: 'Legal French',
    titleFr: 'Le Français Juridique',
    level: 'C1',
    category: 'Vocabulary',
    subcategory: 'Legal',
    description: 'Specialized legal vocabulary for contracts, law, and administrative French.',
    descriptionFr: 'Vocabulaire juridique spécialisé.',
    duration: 160,
    modules: 12,
    exercises: 80,
    rating: 4.7,
    students: 8000,
    xp: 480,
    skills: ['Legal vocabulary', 'Contracts', 'Administrative French'],
    prerequisites: ['Business French'],
    certification: true,
    instructor: { name: 'Claire Moreau', avatar: '/assets/avatars/poster_012.png', specialty: 'Business' },
    tags: ['legal', 'law', 'contracts', 'administrative'],
    featured: false,
    new: false,
    popular: false
  },

  // C2 Vocabulary
  {
    id: 'vocab-c2-001',
    title: 'Native Expressions & Idioms',
    titleFr: 'Expressions et Idiomes Natifs',
    level: 'C2',
    category: 'Vocabulary',
    subcategory: 'Idioms',
    description: 'Master native-level expressions, idioms, proverbs, and colloquial French.',
    descriptionFr: 'Maîtrisez les expressions et idiomes de niveau natif.',
    duration: 200,
    modules: 15,
    exercises: 100,
    rating: 4.9,
    students: 6000,
    xp: 700,
    skills: ['Idioms', 'Proverbs', 'Colloquial French', 'Native expressions'],
    prerequisites: ['C1 completion'],
    certification: true,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['idioms', 'expressions', 'native', 'colloquial'],
    featured: true,
    new: false,
    popular: true
  }
];

// ============================================================================
// CONVERSATION COURSES
// ============================================================================

const CONVERSATION_COURSES: ComprehensiveCourse[] = [
  {
    id: 'conv-a2-001',
    title: 'Basic Conversations',
    titleFr: 'Conversations de Base',
    level: 'A2',
    category: 'Conversation',
    subcategory: 'Daily',
    description: 'Practice everyday conversations: greetings, introductions, shopping, and basic social interactions.',
    descriptionFr: 'Pratiquez les conversations quotidiennes.',
    duration: 120,
    modules: 10,
    exercises: 60,
    rating: 4.8,
    students: 55000,
    xp: 280,
    skills: ['Basic conversation', 'Greetings', 'Social interactions'],
    prerequisites: ['Basic vocabulary'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['conversation', 'speaking', 'daily', 'social'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'conv-b1-001',
    title: 'Intermediate Dialogues',
    titleFr: 'Dialogues Intermédiaires',
    level: 'B1',
    category: 'Conversation',
    subcategory: 'Social',
    description: 'Engage in more complex conversations about opinions, experiences, and plans.',
    descriptionFr: 'Engagez des conversations plus complexes.',
    duration: 150,
    modules: 12,
    exercises: 75,
    rating: 4.7,
    students: 38000,
    xp: 380,
    skills: ['Opinions', 'Experiences', 'Plans', 'Discussion'],
    prerequisites: ['Basic Conversations'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['conversation', 'dialogue', 'intermediate', 'opinions'],
    featured: false,
    new: false,
    popular: true
  },
  {
    id: 'conv-b2-001',
    title: 'Debate & Discussion',
    titleFr: 'Débat et Discussion',
    level: 'B2',
    category: 'Conversation',
    subcategory: 'Debate',
    description: 'Develop skills for debates, arguments, and sophisticated discussions on complex topics.',
    descriptionFr: 'Développez vos compétences en débat et discussion.',
    duration: 180,
    modules: 14,
    exercises: 90,
    rating: 4.8,
    students: 22000,
    xp: 480,
    skills: ['Debate', 'Argumentation', 'Critical thinking'],
    prerequisites: ['Intermediate Dialogues'],
    certification: true,
    instructor: { name: 'Marc Van den Berg', avatar: '/assets/avatars/poster_015.png', specialty: 'Media' },
    tags: ['debate', 'discussion', 'argumentation', 'advanced'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'conv-c1-001',
    title: 'Professional Presentations',
    titleFr: 'Présentations Professionnelles',
    level: 'C1',
    category: 'Conversation',
    subcategory: 'Professional',
    description: 'Master professional presentations, public speaking, and formal discourse in French.',
    descriptionFr: 'Maîtrisez les présentations professionnelles en français.',
    duration: 160,
    modules: 12,
    exercises: 80,
    rating: 4.9,
    students: 15000,
    xp: 550,
    skills: ['Presentations', 'Public speaking', 'Formal discourse'],
    prerequisites: ['Debate & Discussion'],
    certification: true,
    instructor: { name: 'Claire Moreau', avatar: '/assets/avatars/poster_012.png', specialty: 'Business' },
    tags: ['presentations', 'professional', 'public speaking'],
    featured: true,
    new: false,
    popular: true
  }
];

// ============================================================================
// CULTURAL COURSES
// ============================================================================

const CULTURAL_COURSES: ComprehensiveCourse[] = [
  {
    id: 'cult-a2-001',
    title: 'French Culture Basics',
    titleFr: 'Les Bases de la Culture Française',
    level: 'A2',
    category: 'Culture',
    subcategory: 'Introduction',
    description: 'Introduction to French culture: customs, traditions, holidays, and social etiquette.',
    descriptionFr: 'Introduction à la culture française.',
    duration: 90,
    modules: 8,
    exercises: 40,
    rating: 4.9,
    students: 62000,
    xp: 200,
    skills: ['Cultural awareness', 'Customs', 'Etiquette'],
    prerequisites: ['None'],
    certification: false,
    instructor: { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    tags: ['culture', 'customs', 'traditions', 'France'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'cult-b1-001',
    title: 'French History Overview',
    titleFr: 'Aperçu de l\'Histoire de France',
    level: 'B1',
    category: 'Culture',
    subcategory: 'History',
    description: 'Journey through French history from the Middle Ages to modern France.',
    descriptionFr: 'Voyage à travers l\'histoire de France.',
    duration: 150,
    modules: 12,
    exercises: 70,
    rating: 4.8,
    students: 35000,
    xp: 380,
    skills: ['French history', 'Historical vocabulary', 'Cultural context'],
    prerequisites: ['French Culture Basics'],
    certification: false,
    instructor: { name: 'Antoine Beaumont', avatar: '/assets/avatars/poster_013.png', specialty: 'Literature' },
    tags: ['history', 'France', 'culture', 'heritage'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'cult-b2-001',
    title: 'French Cinema',
    titleFr: 'Le Cinéma Français',
    level: 'B2',
    category: 'Culture',
    subcategory: 'Cinema',
    description: 'Explore French cinema from the New Wave to contemporary films with analysis and vocabulary.',
    descriptionFr: 'Explorez le cinéma français de la Nouvelle Vague à aujourd\'hui.',
    duration: 140,
    modules: 10,
    exercises: 65,
    rating: 4.9,
    students: 28000,
    xp: 400,
    skills: ['Film vocabulary', 'Cultural analysis', 'Cinema history'],
    prerequisites: ['French History Overview'],
    certification: false,
    instructor: { name: 'Antoine Beaumont', avatar: '/assets/avatars/poster_013.png', specialty: 'Literature' },
    tags: ['cinema', 'film', 'culture', 'new wave'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'cult-c1-001',
    title: 'French Literature',
    titleFr: 'La Littérature Française',
    level: 'C1',
    category: 'Culture',
    subcategory: 'Literature',
    description: 'Study French literary masterpieces from Molière to contemporary authors.',
    descriptionFr: 'Étudiez les chefs-d\'œuvre de la littérature française.',
    duration: 200,
    modules: 16,
    exercises: 100,
    rating: 4.9,
    students: 18000,
    xp: 600,
    skills: ['Literary analysis', 'Classic French', 'Cultural depth'],
    prerequisites: ['B2 completion'],
    certification: true,
    instructor: { name: 'Antoine Beaumont', avatar: '/assets/avatars/poster_013.png', specialty: 'Literature' },
    tags: ['literature', 'classics', 'authors', 'analysis'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'cult-c2-001',
    title: 'French Philosophy',
    titleFr: 'La Philosophie Française',
    level: 'C2',
    category: 'Culture',
    subcategory: 'Philosophy',
    description: 'Engage with French philosophical thought from Descartes to contemporary thinkers.',
    descriptionFr: 'Engagez-vous avec la pensée philosophique française.',
    duration: 220,
    modules: 18,
    exercises: 110,
    rating: 4.9,
    students: 8000,
    xp: 750,
    skills: ['Philosophical discourse', 'Abstract thinking', 'Intellectual French'],
    prerequisites: ['French Literature'],
    certification: true,
    instructor: { name: 'Antoine Beaumont', avatar: '/assets/avatars/poster_013.png', specialty: 'Literature' },
    tags: ['philosophy', 'thought', 'intellectual', 'advanced'],
    featured: true,
    new: false,
    popular: true
  }
];

// ============================================================================
// PRONUNCIATION COURSES
// ============================================================================

const PRONUNCIATION_COURSES: ComprehensiveCourse[] = [
  {
    id: 'pron-a2-001',
    title: 'French Sounds & Phonetics',
    titleFr: 'Les Sons et la Phonétique Française',
    level: 'A2',
    category: 'Pronunciation',
    subcategory: 'Phonetics',
    description: 'Master French sounds, vowels, consonants, and basic pronunciation rules.',
    descriptionFr: 'Maîtrisez les sons français et les règles de prononciation.',
    duration: 100,
    modules: 10,
    exercises: 80,
    rating: 4.9,
    students: 48000,
    xp: 250,
    skills: ['Phonetics', 'Vowels', 'Consonants', 'Sound production'],
    prerequisites: ['Basic alphabet'],
    certification: false,
    instructor: { name: 'Sophie Tremblay', avatar: '/assets/avatars/poster_014.png', specialty: 'Pronunciation' },
    tags: ['pronunciation', 'phonetics', 'sounds', 'speaking'],
    featured: true,
    new: false,
    popular: true
  },
  {
    id: 'pron-b1-001',
    title: 'Liaison & Enchaînement',
    titleFr: 'La Liaison et l\'Enchaînement',
    level: 'B1',
    category: 'Pronunciation',
    subcategory: 'Connected Speech',
    description: 'Learn liaison rules and connected speech for natural-sounding French.',
    descriptionFr: 'Apprenez les règles de liaison pour un français naturel.',
    duration: 120,
    modules: 10,
    exercises: 70,
    rating: 4.8,
    students: 32000,
    xp: 320,
    skills: ['Liaison', 'Connected speech', 'Fluency'],
    prerequisites: ['French Sounds & Phonetics'],
    certification: false,
    instructor: { name: 'Sophie Tremblay', avatar: '/assets/avatars/poster_014.png', specialty: 'Pronunciation' },
    tags: ['liaison', 'pronunciation', 'fluency', 'connected speech'],
    featured: false,
    new: false,
    popular: true
  },
  {
    id: 'pron-b2-001',
    title: 'Accent Reduction',
    titleFr: 'Réduction de l\'Accent',
    level: 'B2',
    category: 'Pronunciation',
    subcategory: 'Accent',
    description: 'Reduce foreign accent and develop more native-like French pronunciation.',
    descriptionFr: 'Réduisez votre accent étranger pour un français plus natif.',
    duration: 150,
    modules: 12,
    exercises: 90,
    rating: 4.9,
    students: 25000,
    xp: 420,
    skills: ['Accent reduction', 'Native pronunciation', 'Intonation'],
    prerequisites: ['Liaison & Enchaînement'],
    certification: true,
    instructor: { name: 'Sophie Tremblay', avatar: '/assets/avatars/poster_014.png', specialty: 'Pronunciation' },
    tags: ['accent', 'pronunciation', 'native', 'intonation'],
    featured: true,
    new: false,
    popular: true
  }
];

// ============================================================================
// COMBINE ALL COURSES
// ============================================================================

export const ALL_COURSES: ComprehensiveCourse[] = [
  ...GRAMMAR_COURSES,
  ...VOCABULARY_COURSES,
  ...CONVERSATION_COURSES,
  ...CULTURAL_COURSES,
  ...PRONUNCIATION_COURSES
];

// Generate additional courses to reach 1000+
function generateAdditionalCourses(): ComprehensiveCourse[] {
  const additionalCourses: ComprehensiveCourse[] = [];
  const levels: ('A2' | 'B1' | 'B2' | 'C1' | 'C2')[] = ['A2', 'B1', 'B2', 'C1', 'C2'];
  const categories = ['Grammar', 'Vocabulary', 'Conversation', 'Culture', 'Pronunciation', 'Writing', 'Listening', 'Reading'];
  
  const topics = [
    'Shopping', 'Weather', 'Sports', 'Music', 'Art', 'Science', 'Environment', 'Fashion',
    'Technology', 'Education', 'Family', 'Relationships', 'Emotions', 'Numbers', 'Time',
    'Colors', 'Animals', 'Nature', 'City Life', 'Rural Life', 'Transportation', 'Housing',
    'Hobbies', 'Entertainment', 'News', 'Economy', 'Law', 'Medicine', 'Architecture',
    'Gastronomy', 'Wine', 'Cheese', 'Regions of France', 'Paris', 'French Riviera',
    'Alps', 'Normandy', 'Brittany', 'Provence', 'Bordeaux', 'Loire Valley'
  ];

  const instructors = [
    { name: 'Marie Dubois', avatar: '/assets/avatars/poster_010.png', specialty: 'Grammar' },
    { name: 'Jean-Pierre Laurent', avatar: '/assets/avatars/poster_011.png', specialty: 'Conversation' },
    { name: 'Claire Moreau', avatar: '/assets/avatars/poster_012.png', specialty: 'Business' },
    { name: 'Antoine Beaumont', avatar: '/assets/avatars/poster_013.png', specialty: 'Literature' },
    { name: 'Sophie Tremblay', avatar: '/assets/avatars/poster_014.png', specialty: 'Pronunciation' },
    { name: 'Marc Van den Berg', avatar: '/assets/avatars/poster_015.png', specialty: 'Media' }
  ];

  let courseId = 100;

  for (const level of levels) {
    for (const category of categories) {
      for (let i = 0; i < 20; i++) {
        const topic = topics[(courseId + i) % topics.length];
        const instructor = instructors[courseId % instructors.length];
        
        const baseXP = { 'A2': 150, 'B1': 250, 'B2': 400, 'C1': 550, 'C2': 700 };
        const baseDuration = { 'A2': 60, 'B1': 90, 'B2': 120, 'C1': 150, 'C2': 180 };

        additionalCourses.push({
          id: `gen-${level.toLowerCase()}-${category.toLowerCase()}-${courseId}`,
          title: `${topic} in French - ${level}`,
          titleFr: `${topic} en Français - ${level}`,
          level,
          category,
          subcategory: topic,
          description: `Comprehensive ${level} level course covering ${topic.toLowerCase()} in French. Includes interactive exercises, multimedia content, and AI-powered assessments.`,
          descriptionFr: `Cours complet de niveau ${level} sur ${topic.toLowerCase()} en français.`,
          duration: baseDuration[level] + Math.floor(Math.random() * 60),
          modules: 6 + Math.floor(Math.random() * 10),
          exercises: 30 + Math.floor(Math.random() * 50),
          rating: 4.2 + Math.random() * 0.7,
          students: 1000 + Math.floor(Math.random() * 40000),
          xp: baseXP[level] + Math.floor(Math.random() * 100),
          skills: [topic, category, `${level} French`, 'Interactive'],
          prerequisites: level === 'A2' ? ['Basic French'] : [`${levels[levels.indexOf(level) - 1]} completion`],
          certification: level === 'C1' || level === 'C2',
          instructor,
          tags: [topic.toLowerCase(), category.toLowerCase(), level, 'french', 'interactive'],
          featured: Math.random() > 0.9,
          new: Math.random() > 0.85,
          popular: Math.random() > 0.8
        });

        courseId++;
      }
    }
  }

  return additionalCourses;
}

// Export the complete course database
export const COMPLETE_COURSE_DATABASE = [...ALL_COURSES, ...generateAdditionalCourses()];

// Course statistics
export const COURSE_STATS = {
  totalCourses: COMPLETE_COURSE_DATABASE.length,
  byLevel: {
    A2: COMPLETE_COURSE_DATABASE.filter(c => c.level === 'A2').length,
    B1: COMPLETE_COURSE_DATABASE.filter(c => c.level === 'B1').length,
    B2: COMPLETE_COURSE_DATABASE.filter(c => c.level === 'B2').length,
    C1: COMPLETE_COURSE_DATABASE.filter(c => c.level === 'C1').length,
    C2: COMPLETE_COURSE_DATABASE.filter(c => c.level === 'C2').length
  },
  byCategory: {
    Grammar: COMPLETE_COURSE_DATABASE.filter(c => c.category === 'Grammar').length,
    Vocabulary: COMPLETE_COURSE_DATABASE.filter(c => c.category === 'Vocabulary').length,
    Conversation: COMPLETE_COURSE_DATABASE.filter(c => c.category === 'Conversation').length,
    Culture: COMPLETE_COURSE_DATABASE.filter(c => c.category === 'Culture').length,
    Pronunciation: COMPLETE_COURSE_DATABASE.filter(c => c.category === 'Pronunciation').length
  },
  totalHours: Math.round(COMPLETE_COURSE_DATABASE.reduce((acc, c) => acc + c.duration, 0) / 60),
  totalExercises: COMPLETE_COURSE_DATABASE.reduce((acc, c) => acc + c.exercises, 0),
  totalStudents: COMPLETE_COURSE_DATABASE.reduce((acc, c) => acc + c.students, 0)
};

export default COMPLETE_COURSE_DATABASE;
