import { useState, useRef, Suspense } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";
import { 
  Mic, 
  MicOff, 
  Send, 
  Volume2, 
  VolumeX,
  Sparkles,
  Brain,
  Globe,
  Zap,
  Star,
  Heart,
  MessageCircle,
  User,
  Settings,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Award,
  BookOpen,
  Languages
} from "lucide-react";
import Layout from "@/components/Layout";

interface TutorAvatar {
  id: string;
  name: string;
  nameFr: string;
  avatar: string;
  specialty: string;
  specialtyFr: string;
  personality: string;
  accent: string;
  level: string;
  rating: number;
  studentsHelped: number;
  bio: string;
  bioFr: string;
  voiceStyle: string;
  teachingStyle: string[];
  languages: string[];
  available: boolean;
}

const TUTOR_AVATARS: TutorAvatar[] = [
  {
    id: 'marie',
    name: 'Professor Marie Dubois',
    nameFr: 'Professeure Marie Dubois',
    avatar: '/assets/avatars/poster_010.png',
    specialty: 'Grammar & Academic French',
    specialtyFr: 'Grammaire et Français Académique',
    personality: 'Precise, encouraging, methodical',
    accent: 'Parisian Standard',
    level: 'C1-C2',
    rating: 4.9,
    studentsHelped: 45000,
    bio: 'Former Sorbonne professor with 25 years of teaching experience. Specializes in advanced grammar and academic writing.',
    bioFr: 'Ancienne professeure à la Sorbonne avec 25 ans d\'expérience. Spécialisée en grammaire avancée et rédaction académique.',
    voiceStyle: 'formal-academic',
    teachingStyle: ['Structured lessons', 'Detailed explanations', 'Academic rigor'],
    languages: ['French', 'English', 'German'],
    available: true
  },
  {
    id: 'jean',
    name: 'Jean-Pierre Laurent',
    nameFr: 'Jean-Pierre Laurent',
    avatar: '/assets/avatars/poster_011.png',
    specialty: 'Conversation & Culture',
    specialtyFr: 'Conversation et Culture',
    personality: 'Warm, engaging, storyteller',
    accent: 'Native Parisian',
    level: 'A2-B2',
    rating: 4.8,
    studentsHelped: 38000,
    bio: 'Native Parisian with expertise in cultural immersion and conversational French. Makes learning feel like a chat with a friend.',
    bioFr: 'Parisien natif expert en immersion culturelle et français conversationnel.',
    voiceStyle: 'native-parisian',
    teachingStyle: ['Conversational approach', 'Cultural stories', 'Real-life scenarios'],
    languages: ['French', 'English', 'Spanish'],
    available: true
  },
  {
    id: 'claire',
    name: 'Claire Moreau',
    nameFr: 'Claire Moreau',
    avatar: '/assets/avatars/poster_012.png',
    specialty: 'Business French',
    specialtyFr: 'Français des Affaires',
    personality: 'Professional, dynamic, practical',
    accent: 'International French',
    level: 'B1-C1',
    rating: 4.9,
    studentsHelped: 28000,
    bio: 'International business consultant and language coach. Helps professionals master French for the corporate world.',
    bioFr: 'Consultante internationale et coach linguistique pour le monde des affaires.',
    voiceStyle: 'casual-conversational',
    teachingStyle: ['Business scenarios', 'Practical exercises', 'Professional communication'],
    languages: ['French', 'English', 'Mandarin'],
    available: true
  },
  {
    id: 'antoine',
    name: 'Antoine Beaumont',
    nameFr: 'Antoine Beaumont',
    avatar: '/assets/avatars/poster_013.png',
    specialty: 'Literature & Writing',
    specialtyFr: 'Littérature et Écriture',
    personality: 'Poetic, inspiring, thoughtful',
    accent: 'Southern French',
    level: 'B2-C2',
    rating: 4.7,
    studentsHelped: 22000,
    bio: 'Published author and literary critic from Provence. Brings French literature to life with passion and insight.',
    bioFr: 'Auteur publié et critique littéraire de Provence. Fait vivre la littérature française.',
    voiceStyle: 'southern-french',
    teachingStyle: ['Literary analysis', 'Creative writing', 'Poetic expression'],
    languages: ['French', 'English', 'Italian'],
    available: true
  },
  {
    id: 'sophie',
    name: 'Sophie Tremblay',
    nameFr: 'Sophie Tremblay',
    avatar: '/assets/avatars/poster_014.png',
    specialty: 'Pronunciation & Phonetics',
    specialtyFr: 'Prononciation et Phonétique',
    personality: 'Patient, detailed, supportive',
    accent: 'Canadian French',
    level: 'A2-B1',
    rating: 4.9,
    studentsHelped: 35000,
    bio: 'Speech therapist and accent coach from Quebec. Specializes in helping learners achieve perfect French pronunciation.',
    bioFr: 'Orthophoniste et coach d\'accent du Québec. Spécialisée en prononciation française parfaite.',
    voiceStyle: 'canadian-french',
    teachingStyle: ['Phonetic drills', 'Accent reduction', 'Sound comparison'],
    languages: ['French', 'English'],
    available: true
  },
  {
    id: 'marc',
    name: 'Marc Van den Berg',
    nameFr: 'Marc Van den Berg',
    avatar: '/assets/avatars/poster_015.png',
    specialty: 'Media & Contemporary French',
    specialtyFr: 'Médias et Français Contemporain',
    personality: 'Current, analytical, engaging',
    accent: 'Belgian French',
    level: 'B1-C1',
    rating: 4.8,
    studentsHelped: 19000,
    bio: 'Journalist and media analyst from Brussels. Teaches French through current events and modern media.',
    bioFr: 'Journaliste et analyste médias de Bruxelles. Enseigne le français à travers l\'actualité.',
    voiceStyle: 'belgian-french',
    teachingStyle: ['News analysis', 'Media literacy', 'Contemporary vocabulary'],
    languages: ['French', 'Dutch', 'English'],
    available: true
  }
];

interface ChatMessage {
  id: number;
  sender: 'user' | 'avatar';
  text: string;
  timestamp: Date;
  audioUrl?: string;
}

export default function AvatarExperience() {
  const [selectedAvatar, setSelectedAvatar] = useState<TutorAvatar>(TUTOR_AVATARS[0]);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      sender: 'avatar',
      text: `Bonjour! Je suis ${TUTOR_AVATARS[0].nameFr}. Je suis ravie de vous accompagner dans votre apprentissage du français. Comment puis-je vous aider aujourd'hui?`,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = {
      id: Date.now(),
      sender: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    // Simulate avatar response
    setTimeout(() => {
      const responses = [
        `Très bien! Votre phrase est correcte. Continuons avec un exercice de prononciation.`,
        `Excellent travail! Je vois que vous progressez rapidement. Voulez-vous essayer quelque chose de plus difficile?`,
        `C'est une bonne question! En français, nous utilisons cette expression dans un contexte formel.`,
        `Parfait! Votre compréhension s'améliore. Pratiquons maintenant avec un dialogue.`,
        `Bravo! Vous maîtrisez bien ce concept. Passons à la prochaine leçon.`
      ];

      const avatarMessage: ChatMessage = {
        id: Date.now() + 1,
        sender: 'avatar',
        text: responses[Math.floor(Math.random() * responses.length)],
        timestamp: new Date()
      };

      setMessages(prev => [...prev, avatarMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleAvatarSelect = (avatar: TutorAvatar) => {
    setSelectedAvatar(avatar);
    setMessages([{
      id: Date.now(),
      sender: 'avatar',
      text: `Bonjour! Je suis ${avatar.nameFr}. ${avatar.bioFr} Comment puis-je vous aider aujourd'hui?`,
      timestamp: new Date()
    }]);
  };

  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'fr-FR';
      recognition.interimResults = false;

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(prev => prev + (prev ? " " : "") + transcript);
        setIsListening(false);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);

      recognition.start();
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]">
        {/* Hero Section */}
        <section className="relative py-12 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
                <Sparkles className="w-3 h-3 mr-1" />
                AI-Powered Tutors
              </Badge>
              
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                Meet Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  French Tutors
                </span>
              </h1>
              
              <p className="text-lg text-gray-300">
                Engage in immersive conversations with AI-powered native French speakers. 
                Each tutor has a unique personality, accent, and teaching style.
              </p>
            </div>
          </div>
        </section>

        {/* Main Interface */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            {/* Avatar Selection Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl">
                <CardHeader className="border-b border-white/10">
                  <CardTitle className="text-lg font-serif text-white flex items-center gap-2">
                    <User className="w-5 h-5 text-purple-400" />
                    Select Tutor
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4">
                  <ScrollArea className="h-[500px]">
                    <div className="space-y-3">
                      {TUTOR_AVATARS.map(avatar => (
                        <button
                          key={avatar.id}
                          onClick={() => handleAvatarSelect(avatar)}
                          className={`w-full p-3 rounded-xl border transition-all text-left ${
                            selectedAvatar.id === avatar.id
                              ? 'border-purple-500 bg-purple-500/10'
                              : 'border-white/10 hover:border-white/30 bg-[#0A192F]/50'
                          }`}
                        >
                          <div className="flex items-center gap-3">
                            <Avatar className="w-12 h-12 border-2 border-white/20">
                              <AvatarImage src={avatar.avatar} />
                              <AvatarFallback>{avatar.name[0]}</AvatarFallback>
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <div className="font-medium text-white text-sm truncate">{avatar.name}</div>
                              <div className="text-xs text-gray-400 truncate">{avatar.specialty}</div>
                              <div className="flex items-center gap-2 mt-1">
                                <Badge variant="outline" className="text-[10px] border-white/20 text-gray-300">
                                  {avatar.level}
                                </Badge>
                                <div className="flex items-center text-yellow-500 text-[10px]">
                                  <Star className="w-3 h-3 fill-current" />
                                  {avatar.rating}
                                </div>
                              </div>
                            </div>
                          </div>
                        </button>
                      ))}
                    </div>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl h-full flex flex-col">
                {/* Avatar Header */}
                <CardHeader className="border-b border-white/10">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Avatar className="w-16 h-16 border-2 border-purple-500/50">
                        <AvatarImage src={selectedAvatar.avatar} />
                        <AvatarFallback>{selectedAvatar.name[0]}</AvatarFallback>
                      </Avatar>
                      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 border-2 border-[#112240] rounded-full" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-serif text-white">{selectedAvatar.name}</CardTitle>
                      <CardDescription className="text-purple-400">{selectedAvatar.specialty}</CardDescription>
                      <div className="flex items-center gap-3 mt-1 text-xs text-gray-400">
                        <span className="flex items-center gap-1">
                          <Globe className="w-3 h-3" />
                          {selectedAvatar.accent}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-3 h-3" />
                          {(selectedAvatar.studentsHelped / 1000).toFixed(0)}k students
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost" 
                        size="icon"
                        onClick={() => setIsMuted(!isMuted)}
                        className="text-gray-400 hover:text-white"
                      >
                        {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                      </Button>
                      <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                        <Settings className="w-5 h-5" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map(msg => (
                      <div 
                        key={msg.id}
                        className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div className={`max-w-[80%] ${
                          msg.sender === 'user'
                            ? 'bg-purple-500 text-white rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl'
                            : 'bg-[#0A192F] text-gray-100 border border-white/10 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl'
                        } p-4`}>
                          <p className="text-sm leading-relaxed">{msg.text}</p>
                          <div className={`text-[10px] mt-2 ${
                            msg.sender === 'user' ? 'text-purple-200' : 'text-gray-500'
                          }`}>
                            {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    ))}
                    
                    {isTyping && (
                      <div className="flex justify-start">
                        <div className="bg-[#0A192F] border border-white/10 rounded-2xl p-4">
                          <div className="flex gap-1">
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                            <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div ref={scrollRef} />
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="p-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={startListening}
                      className={`${isListening ? 'bg-red-500 text-white animate-pulse' : 'text-gray-400 hover:text-white'}`}
                    >
                      {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                    </Button>
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                      placeholder="Type in French or English..."
                      className="flex-1 bg-[#0A192F] border-white/10 text-white focus:border-purple-500"
                    />
                    <Button 
                      onClick={handleSend}
                      disabled={!input.trim()}
                      className="bg-purple-500 hover:bg-purple-600 text-white"
                    >
                      <Send className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="flex items-center justify-center gap-4 mt-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Languages className="w-3 h-3" />
                      Auto-detect language
                    </span>
                    <span className="flex items-center gap-1">
                      <Mic className="w-3 h-3" />
                      Voice input enabled
                    </span>
                  </div>
                </div>
              </Card>
            </div>

            {/* Avatar Details Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl">
                <CardHeader className="border-b border-white/10">
                  <CardTitle className="text-lg font-serif text-white flex items-center gap-2">
                    <Brain className="w-5 h-5 text-[#D4AF37]" />
                    Tutor Profile
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-4 space-y-6">
                  {/* Bio */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">About</h4>
                    <p className="text-sm text-gray-300 leading-relaxed">{selectedAvatar.bio}</p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-[#0A192F]/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-[#D4AF37]">{selectedAvatar.rating}</div>
                      <div className="text-xs text-gray-400">Rating</div>
                    </div>
                    <div className="bg-[#0A192F]/50 rounded-lg p-3 text-center">
                      <div className="text-2xl font-bold text-purple-400">{(selectedAvatar.studentsHelped / 1000).toFixed(0)}k</div>
                      <div className="text-xs text-gray-400">Students</div>
                    </div>
                  </div>

                  {/* Teaching Style */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Teaching Style</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAvatar.teachingStyle.map((style, i) => (
                        <Badge key={i} variant="outline" className="text-xs border-white/20 text-gray-300">
                          {style}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Languages</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedAvatar.languages.map((lang, i) => (
                        <Badge key={i} className="text-xs bg-purple-500/20 text-purple-400 border-purple-500/30">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Personality */}
                  <div>
                    <h4 className="text-sm font-medium text-gray-400 mb-2">Personality</h4>
                    <p className="text-sm text-gray-300">{selectedAvatar.personality}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full bg-purple-500 hover:bg-purple-600 text-white">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Start Lesson
                    </Button>
                    <Button variant="outline" className="w-full border-white/20 text-white hover:bg-white/10">
                      <Heart className="w-4 h-4 mr-2" />
                      Add to Favorites
                    </Button>
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
