import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  ChevronLeft,
  Star,
  Sparkles,
  Brain,
  Target,
  Award,
  Zap,
  CheckCircle2,
  XCircle,
  Info,
  Lightbulb
} from "lucide-react";
import Layout from "@/components/Layout";

interface PronunciationWord {
  id: string;
  french: string;
  english: string;
  phonetic: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  tips: string[];
  audioUrl?: string;
}

const PRONUNCIATION_WORDS: PronunciationWord[] = [
  {
    id: '1',
    french: 'Bonjour',
    english: 'Hello / Good day',
    phonetic: '/bɔ̃.ʒuʁ/',
    difficulty: 'easy',
    category: 'Greetings',
    tips: [
      'The "on" makes a nasal sound - don\'t pronounce the "n"',
      'The "j" sounds like "zh" in "pleasure"',
      'The final "r" is a soft, guttural sound'
    ]
  },
  {
    id: '2',
    french: 'Merci beaucoup',
    english: 'Thank you very much',
    phonetic: '/mɛʁ.si bo.ku/',
    difficulty: 'easy',
    category: 'Politeness',
    tips: [
      'The "r" in "merci" is soft and guttural',
      '"eau" in "beaucoup" sounds like "oh"',
      'The final "p" is silent'
    ]
  },
  {
    id: '3',
    french: 'Je voudrais',
    english: 'I would like',
    phonetic: '/ʒə vu.dʁɛ/',
    difficulty: 'medium',
    category: 'Requests',
    tips: [
      '"Je" has a soft "zh" sound',
      'The "ou" sounds like "oo" in "food"',
      'The "ais" ending sounds like "eh"'
    ]
  },
  {
    id: '4',
    french: 'S\'il vous plaît',
    english: 'Please',
    phonetic: '/sil vu plɛ/',
    difficulty: 'medium',
    category: 'Politeness',
    tips: [
      'Link "s\'il" and "vous" smoothly',
      'The "aî" sounds like "eh"',
      'The final "t" is silent'
    ]
  },
  {
    id: '5',
    french: 'Excusez-moi',
    english: 'Excuse me',
    phonetic: '/ɛk.sky.ze mwa/',
    difficulty: 'medium',
    category: 'Politeness',
    tips: [
      'The "x" sounds like "ks"',
      '"ez" at the end sounds like "ay"',
      '"moi" rhymes with "wah"'
    ]
  },
  {
    id: '6',
    french: 'Aujourd\'hui',
    english: 'Today',
    phonetic: '/o.ʒuʁ.dɥi/',
    difficulty: 'hard',
    category: 'Time',
    tips: [
      'Start with "oh" sound',
      'The "ui" is a quick glide from "oo" to "ee"',
      'Practice the "ʒ" (zh) sound in the middle'
    ]
  },
  {
    id: '7',
    french: 'Écureuil',
    english: 'Squirrel',
    phonetic: '/e.ky.ʁœj/',
    difficulty: 'hard',
    category: 'Animals',
    tips: [
      'Start with "ay" sound',
      'The "œ" is like "u" in "burn"',
      'End with a soft "y" sound'
    ]
  },
  {
    id: '8',
    french: 'Grenouille',
    english: 'Frog',
    phonetic: '/ɡʁə.nuj/',
    difficulty: 'hard',
    category: 'Animals',
    tips: [
      'The "gr" is a soft, guttural combination',
      '"ouille" sounds like "oo-ee" glided together',
      'Practice the nasal "e" in the middle'
    ]
  },
  {
    id: '9',
    french: 'Croissant',
    english: 'Croissant',
    phonetic: '/kʁwa.sɑ̃/',
    difficulty: 'medium',
    category: 'Food',
    tips: [
      'The "cr" has a soft French "r"',
      '"oi" sounds like "wa"',
      'The final "ant" is nasal - don\'t pronounce the "nt"'
    ]
  },
  {
    id: '10',
    french: 'Baguette',
    english: 'Baguette',
    phonetic: '/ba.ɡɛt/',
    difficulty: 'easy',
    category: 'Food',
    tips: [
      'Stress is on the second syllable',
      'The "gu" sounds like "g" in "get"',
      'The "ette" ending is crisp'
    ]
  }
];

export default function PronunciationLab() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isListening, setIsListening] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userScore, setUserScore] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [totalScore, setTotalScore] = useState(0);
  const [showTips, setShowTips] = useState(false);
  const [selectedDifficulty, setSelectedDifficulty] = useState<'all' | 'easy' | 'medium' | 'hard'>('all');
  const [practiceHistory, setPracticeHistory] = useState<{word: string; score: number}[]>([]);

  const currentWord = PRONUNCIATION_WORDS[currentIndex];

  const filteredWords = selectedDifficulty === 'all' 
    ? PRONUNCIATION_WORDS 
    : PRONUNCIATION_WORDS.filter(w => w.difficulty === selectedDifficulty);

  const playAudio = () => {
    setIsPlaying(true);
    // Simulate audio playback
    const utterance = new SpeechSynthesisUtterance(currentWord.french);
    utterance.lang = 'fr-FR';
    utterance.rate = 0.8;
    utterance.onend = () => setIsPlaying(false);
    speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'fr-FR';
      recognition.interimResults = false;

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript.toLowerCase();
        const target = currentWord.french.toLowerCase();
        
        // Calculate similarity score
        const similarity = calculateSimilarity(transcript, target);
        const score = Math.round(similarity * 100);
        
        setUserScore(score);
        setAttempts(prev => prev + 1);
        setTotalScore(prev => prev + score);
        setPracticeHistory(prev => [...prev, { word: currentWord.french, score }]);
        setIsListening(false);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    }
  };

  const calculateSimilarity = (str1: string, str2: string): number => {
    const s1 = str1.toLowerCase().replace(/[^a-zàâäéèêëïîôùûüÿœæç]/g, '');
    const s2 = str2.toLowerCase().replace(/[^a-zàâäéèêëïîôùûüÿœæç]/g, '');
    
    if (s1 === s2) return 1;
    if (s1.length === 0 || s2.length === 0) return 0;
    
    const longer = s1.length > s2.length ? s1 : s2;
    const shorter = s1.length > s2.length ? s2 : s1;
    
    let matches = 0;
    for (let i = 0; i < shorter.length; i++) {
      if (longer.includes(shorter[i])) matches++;
    }
    
    return matches / longer.length;
  };

  const nextWord = () => {
    setCurrentIndex(prev => (prev + 1) % filteredWords.length);
    setUserScore(null);
    setShowTips(false);
  };

  const prevWord = () => {
    setCurrentIndex(prev => (prev - 1 + filteredWords.length) % filteredWords.length);
    setUserScore(null);
    setShowTips(false);
  };

  const resetPractice = () => {
    setUserScore(null);
    setAttempts(0);
    setTotalScore(0);
    setPracticeHistory([]);
  };

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'text-green-400';
    if (score >= 60) return 'text-yellow-400';
    return 'text-red-400';
  };

  const getScoreLabel = (score: number) => {
    if (score >= 90) return 'Excellent!';
    if (score >= 80) return 'Great!';
    if (score >= 70) return 'Good!';
    if (score >= 60) return 'Keep practicing!';
    return 'Try again!';
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]">
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-blue-500/20 text-blue-400 border-blue-500/30">
                <Mic className="w-3 h-3 mr-1" />
                Pronunciation Lab
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Perfect Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                  French Accent
                </span>
              </h1>
              
              <p className="text-lg text-gray-300">
                Practice pronunciation with AI-powered feedback. Listen, repeat, and improve your accent.
              </p>
            </div>
          </div>
        </section>

        {/* Main Practice Area */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left Panel - Stats */}
            <div className="space-y-6">
              {/* Session Stats */}
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl">
                <CardHeader className="border-b border-white/10">
                  <CardTitle className="text-lg font-serif text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-blue-400" />
                    Session Stats
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-[#0A192F]/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-400">{attempts}</div>
                      <div className="text-xs text-gray-400">Attempts</div>
                    </div>
                    <div className="bg-[#0A192F]/50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-[#D4AF37]">
                        {attempts > 0 ? Math.round(totalScore / attempts) : 0}%
                      </div>
                      <div className="text-xs text-gray-400">Avg Score</div>
                    </div>
                  </div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full mt-4 border-white/20 text-white hover:bg-white/10"
                    onClick={resetPractice}
                  >
                    <RotateCcw className="w-4 h-4 mr-2" />
                    Reset Session
                  </Button>
                </CardContent>
              </Card>

              {/* Difficulty Filter */}
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl">
                <CardHeader className="border-b border-white/10">
                  <CardTitle className="text-lg font-serif text-white flex items-center gap-2">
                    <Zap className="w-5 h-5 text-[#D4AF37]" />
                    Difficulty
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    {(['all', 'easy', 'medium', 'hard'] as const).map(diff => (
                      <Button
                        key={diff}
                        variant="outline"
                        size="sm"
                        onClick={() => setSelectedDifficulty(diff)}
                        className={`capitalize ${
                          selectedDifficulty === diff
                            ? diff === 'easy' ? 'bg-green-500/20 border-green-500/50 text-green-400' :
                              diff === 'medium' ? 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400' :
                              diff === 'hard' ? 'bg-red-500/20 border-red-500/50 text-red-400' :
                              'bg-blue-500/20 border-blue-500/50 text-blue-400'
                            : 'border-white/20 text-gray-400 hover:text-white'
                        }`}
                      >
                        {diff}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Practice */}
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl">
                <CardHeader className="border-b border-white/10">
                  <CardTitle className="text-lg font-serif text-white flex items-center gap-2">
                    <Award className="w-5 h-5 text-purple-400" />
                    Recent Practice
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ScrollArea className="h-[200px]">
                    {practiceHistory.length === 0 ? (
                      <p className="text-sm text-gray-500 text-center py-8">
                        Start practicing to see your history
                      </p>
                    ) : (
                      <div className="space-y-2">
                        {practiceHistory.slice(-10).reverse().map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-2 rounded-lg bg-[#0A192F]/50">
                            <span className="text-sm text-white">{item.word}</span>
                            <Badge className={`${
                              item.score >= 80 ? 'bg-green-500/20 text-green-400' :
                              item.score >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                              'bg-red-500/20 text-red-400'
                            }`}>
                              {item.score}%
                            </Badge>
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Center - Main Practice Card */}
            <div className="lg:col-span-2">
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl">
                <CardHeader className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <Badge className={`mb-2 ${
                        currentWord.difficulty === 'easy' ? 'bg-green-500/20 text-green-400 border-green-500/30' :
                        currentWord.difficulty === 'medium' ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                        'bg-red-500/20 text-red-400 border-red-500/30'
                      }`}>
                        {currentWord.difficulty}
                      </Badge>
                      <CardTitle className="text-xl font-serif text-white">
                        {currentWord.category}
                      </CardTitle>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={prevWord}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <span className="text-sm text-gray-400">
                        {currentIndex + 1} / {filteredWords.length}
                      </span>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={nextWord}
                        className="text-gray-400 hover:text-white"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8">
                  {/* Word Display */}
                  <div className="text-center mb-8">
                    <h2 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4">
                      {currentWord.french}
                    </h2>
                    <p className="text-2xl text-blue-400 font-mono mb-2">
                      {currentWord.phonetic}
                    </p>
                    <p className="text-lg text-gray-400">
                      {currentWord.english}
                    </p>
                  </div>

                  {/* Audio Controls */}
                  <div className="flex justify-center gap-4 mb-8">
                    <Button
                      size="lg"
                      onClick={playAudio}
                      disabled={isPlaying}
                      className="bg-blue-500 hover:bg-blue-600 text-white"
                    >
                      {isPlaying ? (
                        <>
                          <Volume2 className="w-5 h-5 mr-2 animate-pulse" />
                          Playing...
                        </>
                      ) : (
                        <>
                          <Play className="w-5 h-5 mr-2" />
                          Listen
                        </>
                      )}
                    </Button>
                    
                    <Button
                      size="lg"
                      onClick={startListening}
                      disabled={isListening}
                      className={isListening 
                        ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse' 
                        : 'bg-green-500 hover:bg-green-600 text-white'
                      }
                    >
                      {isListening ? (
                        <>
                          <MicOff className="w-5 h-5 mr-2" />
                          Listening...
                        </>
                      ) : (
                        <>
                          <Mic className="w-5 h-5 mr-2" />
                          Speak
                        </>
                      )}
                    </Button>
                  </div>

                  {/* Score Display */}
                  {userScore !== null && (
                    <div className="bg-[#0A192F]/50 rounded-xl p-6 mb-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          {userScore >= 80 ? (
                            <CheckCircle2 className="w-8 h-8 text-green-400" />
                          ) : userScore >= 60 ? (
                            <Info className="w-8 h-8 text-yellow-400" />
                          ) : (
                            <XCircle className="w-8 h-8 text-red-400" />
                          )}
                          <div>
                            <div className={`text-3xl font-bold ${getScoreColor(userScore)}`}>
                              {userScore}%
                            </div>
                            <div className="text-sm text-gray-400">
                              {getScoreLabel(userScore)}
                            </div>
                          </div>
                        </div>
                        <Button
                          variant="outline"
                          onClick={() => setUserScore(null)}
                          className="border-white/20 text-white hover:bg-white/10"
                        >
                          <RotateCcw className="w-4 h-4 mr-2" />
                          Try Again
                        </Button>
                      </div>
                      <Progress 
                        value={userScore} 
                        className="h-3 bg-white/10"
                      />
                    </div>
                  )}

                  {/* Tips Section */}
                  <div className="border-t border-white/10 pt-6">
                    <Button
                      variant="ghost"
                      onClick={() => setShowTips(!showTips)}
                      className="w-full justify-between text-gray-400 hover:text-white"
                    >
                      <span className="flex items-center gap-2">
                        <Lightbulb className="w-5 h-5 text-[#D4AF37]" />
                        Pronunciation Tips
                      </span>
                      <ChevronRight className={`w-5 h-5 transition-transform ${showTips ? 'rotate-90' : ''}`} />
                    </Button>
                    
                    {showTips && (
                      <div className="mt-4 space-y-3">
                        {currentWord.tips.map((tip, i) => (
                          <div 
                            key={i}
                            className="flex items-start gap-3 p-3 rounded-lg bg-[#0A192F]/50"
                          >
                            <div className="w-6 h-6 rounded-full bg-[#D4AF37]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-xs text-[#D4AF37] font-bold">{i + 1}</span>
                            </div>
                            <p className="text-sm text-gray-300">{tip}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
