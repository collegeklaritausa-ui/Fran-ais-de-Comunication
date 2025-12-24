import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Send, Sparkles, Cpu, Globe, Zap, Activity, Lock, ShieldCheck, Mic, MicOff } from "lucide-react";
import { InfinityEngine, Course } from "@/lib/courseEngine";
import VocabBlaster from "@/components/VocabBlaster";

interface Message {
  id: number;
  sender: "user" | "avatar";
  text: string;
  model?: string;
  status?: "thinking" | "complete";
}

export default function Classroom() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      sender: "avatar",
      text: "Bonjour. Je suis l'Intelligence Collective.\n\nI am connected to the neural grid of Manus, OpenAI, Grok, and Gemini.\n\nMy mission is your absolute mastery of the French language.\n\nWe shall proceed with precision.\n\nSelect your domain of conquest:\n\n1.  **La Philosophie** (The abstract mind)\n2.  **L'Histoire** (The glory of France)\n3.  **La Technologie** (The future we build)\n\nYour journey begins now.",
      model: "OMEGA-CORE",
      status: "complete"
    }
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeModel, setActiveModel] = useState<string | null>(null);
  const [isListening, setIsListening] = useState(false);
  const [generatedCourses, setGeneratedCourses] = useState<Course[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Generate initial batch of courses from the Infinity Engine
    const courses = InfinityEngine.generateBatch(1, 12);
    setGeneratedCourses(courses);
  }, []);

  // Speech Recognition Setup
  const startListening = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'fr-FR'; // Default to French for learning
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      setIsListening(true);

      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(prev => prev + (prev ? " " : "") + transcript);
        setIsListening(false);
      };

      recognition.onerror = (event: any) => {
        console.error("Speech recognition error", event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      recognition.start();
    } else {
      alert("Voice recognition is not supported in this browser.");
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), sender: "user", text: input, status: "complete" };
    setMessages(prev => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);
    setActiveModel("ORCHESTRATING...");

    // Simulate AGI processing sequence
    setTimeout(() => {
      setActiveModel("QUERYING MANUS KNOWLEDGE GRAPH...");
    }, 800);

    setTimeout(() => {
      setActiveModel("SYNTHESIZING OPENAI & GEMINI VECTORS...");
    }, 1600);

    setTimeout(() => {
      setActiveModel("FINALIZING WITH GROK LOGIC...");
    }, 2400);

    setTimeout(() => {
      const responses = [
        "**Analyse Complète.**\n\nYour input suggests a desire for structural precision.\n\nLet us examine the *Subjonctif Présent*.\n\nIt is the mood of doubt, of emotion, of necessity.\n\nObserve:\n\n> *Il est essentiel que vous **soyez** prêt.*\n\n(It is essential that you **be** ready.)\n\n**Action:**\n\nConstruct a sentence expressing a necessity using the verb 'avoir' (to have).",
        
        "**Détection Culturelle: Positive.**\n\nReference found in Sector: *French Gastronomy*.\n\nTo speak of food is to speak of the soul of France.\n\nVocabulary Injection:\n\n*   **L'Art de Vivre** (The art of living)\n*   **Le Terroir** (The unique character of the land)\n*   **La Dégustation** (The tasting)\n\n**Question:**\n\nHow would you describe the taste of a memory? Use the word *'Souvenir'*.",
        
        "**Correction Immédiate.**\n\nYour syntax is acceptable, but your style lacks *panache*.\n\nIn the court of Louis XIV, one would not merely 'say' something.\n\nOne would *declare*, *insinuate*, or *proclaim*.\n\n**Très bien.** Let us elevate your discourse.\n\nInstead of *'Je veux'* (I want), use *'Je désirerais'* (I would desire).\n\nTry it now.",
        
        "**Integration: Gemini Ultra.**\n\nProcessing visual context... [Simulated]\n\nI see you are engaging with the concept of *Time*.\n\nIn French, the past is a landscape of nuances.\n\n*   **Passé Composé**: The completed action.\n*   **Imparfait**: The ongoing state.\n\n> *Je **marchais** (Imparfait) quand j'**ai vu** (Passé Composé) la tour Eiffel.*\n\n(I **was walking** when I **saw** the Eiffel Tower.)\n\n**Challenge:**\n\nDescribe your morning using both tenses."
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const models = ["MANUS-PRIME", "GPT-4o", "GROK-2", "GEMINI-1.5-PRO"];
      const randomModel = models[Math.floor(Math.random() * models.length)];

      const avatarMsg: Message = {
        id: Date.now() + 1,
        sender: "avatar",
        text: randomResponse,
        model: randomModel,
        status: "complete"
      };
      
      setMessages(prev => [...prev, avatarMsg]);
      setIsTyping(false);
      setActiveModel(null);
    }, 3200);
  };

  return (
    <div className="min-h-screen bg-[#0A192F] text-white font-sans flex flex-col md:flex-row overflow-hidden">
      
      {/* Sidebar / Avatar Zone */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-[#112240] border-r border-white/10 flex flex-col p-6 relative z-20 shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#D4AF37] via-white to-[#D4AF37] animate-pulse"></div>
        
        <div className="flex items-center gap-2 mb-8 text-[#D4AF37]">
          <Cpu className="w-5 h-5" />
          <span className="font-bold tracking-widest text-sm font-serif">OMEGA SYSTEM</span>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center text-center">
          <div className="relative w-56 h-56 mb-8 group">
            <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-1000 animate-pulse"></div>
            
            {/* Rotating Rings */}
            <div className="absolute inset-0 border border-[#D4AF37]/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-2 border border-white/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            
            <Avatar className="w-full h-full border-4 border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.2)]">
              <AvatarImage src="/assets/avatars/poster_010.png" className="object-cover" />
              <AvatarFallback className="bg-[#0A192F] text-[#D4AF37] text-4xl font-serif">Ω</AvatarFallback>
            </Avatar>
            
            <div className="absolute bottom-4 right-4 w-6 h-6 bg-green-500 border-4 border-[#112240] rounded-full shadow-[0_0_10px_#22c55e]"></div>
          </div>
          
          <h2 className="text-3xl font-serif font-bold text-white mb-2 tracking-wide">L'Instructeur</h2>
          <p className="text-[#D4AF37]/80 text-sm mb-8 uppercase tracking-widest text-[10px]">Autonomous Learning Unit</p>
          
          <div className="w-full space-y-3">
            <div className="flex items-center justify-between text-xs bg-[#0A192F]/50 p-3 rounded border border-white/5 backdrop-blur-sm">
              <span className="flex items-center gap-2 text-gray-400"><Zap className="w-3 h-3 text-[#D4AF37]" /> Manus Core</span>
              <span className="text-green-400 font-mono">ONLINE</span>
            </div>
            <div className="flex items-center justify-between text-xs bg-[#0A192F]/50 p-3 rounded border border-white/5 backdrop-blur-sm">
              <span className="flex items-center gap-2 text-gray-400"><Globe className="w-3 h-3 text-blue-400" /> OpenAI API</span>
              <span className="text-green-400 font-mono">LINKED</span>
            </div>
            <div className="flex items-center justify-between text-xs bg-[#0A192F]/50 p-3 rounded border border-white/5 backdrop-blur-sm">
              <span className="flex items-center gap-2 text-gray-400"><Sparkles className="w-3 h-3 text-purple-400" /> Gemini Ultra</span>
              <span className="text-green-400 font-mono">READY</span>
            </div>
            <div className="flex items-center justify-between text-xs bg-[#0A192F]/50 p-3 rounded border border-white/5 backdrop-blur-sm">
              <span className="flex items-center gap-2 text-gray-400"><Activity className="w-3 h-3 text-red-400" /> Grok Logic</span>
              <span className="text-green-400 font-mono">ACTIVE</span>
            </div>
          </div>
        </div>
        
        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center gap-2 text-[10px] text-gray-500 justify-center">
            <ShieldCheck className="w-3 h-3" />
            <span>ETERNAL PROTECTION PROTOCOL: ACTIVE</span>
          </div>
        </div>
      </div>

      {/* Chat Zone */}
      <div className="flex-1 flex flex-col bg-[#0A192F] relative bg-[url('/assets/pattern.png')] bg-repeat opacity-100">
        {/* Header */}
        <div className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-[#0A192F]/95 backdrop-blur z-10 shadow-lg">
          <div>
            <h3 className="font-serif text-2xl text-[#D4AF37]">Omega Classroom</h3>
            <p className="text-xs text-gray-400 uppercase tracking-wider">Session ID: {Date.now().toString().slice(-8)}</p>
          </div>
          <Badge variant="outline" className="border-[#D4AF37]/50 text-[#D4AF37] bg-[#D4AF37]/10 px-4 py-1 rounded-full">
            <Lock className="w-3 h-3 mr-2" />
            SECURE CHANNEL
          </Badge>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-8">
          <div className="space-y-10 max-w-4xl mx-auto pb-10">
            
            {/* GAMIFIED MODULE INJECTION */}
            <div className="mb-12">
              <VocabBlaster />
            </div>

            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] ${
                  msg.sender === 'user' 
                    ? 'bg-[#D4AF37] text-[#0A192F] rounded-tr-none' 
                    : 'bg-[#112240] border border-white/10 text-gray-100 rounded-tl-none'
                  } rounded-2xl p-8 shadow-xl relative group transition-all duration-300 hover:shadow-2xl`}
                >
                  {msg.sender === 'avatar' && (
                    <div className="absolute -top-3 left-0 bg-[#0A192F] border border-[#D4AF37]/30 px-3 py-1 rounded-r-full text-[10px] text-[#D4AF37] uppercase tracking-widest font-bold shadow-sm">
                      {msg.model}
                    </div>
                  )}
                  
                  <div className="prose prose-invert max-w-none">
                    {msg.text.split('\n').map((line, i) => {
                      // Check for bold headers or special formatting
                      if (line.startsWith('**') && line.endsWith('**')) {
                         return <h4 key={i} className="text-[#D4AF37] font-serif text-lg mt-4 mb-2">{line.replace(/\*\*/g, '')}</h4>;
                      }
                      if (line.startsWith('>')) {
                        return <blockquote key={i} className="border-l-4 border-[#D4AF37] pl-4 italic text-gray-300 my-4 bg-black/20 p-4 rounded-r">{line.replace('>', '')}</blockquote>;
                      }
                      if (line.trim() === '') {
                        return <div key={i} className="h-4"></div>;
                      }
                      return <p key={i} className="leading-relaxed text-lg mb-2">{line}</p>;
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start w-full">
                <div className="bg-[#112240] border border-white/10 rounded-2xl rounded-tl-none p-6 flex items-center gap-4 shadow-lg min-w-[300px]">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce delay-75"></div>
                    <div className="w-2 h-2 bg-[#D4AF37] rounded-full animate-bounce delay-150"></div>
                  </div>
                  <span className="text-xs text-[#D4AF37] font-mono animate-pulse uppercase tracking-widest">
                    {activeModel || "PROCESSING..."}
                  </span>
                </div>
              </div>
            )}
            <div ref={scrollRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="p-8 bg-[#0A192F] border-t border-white/10 relative z-20">
          <div className="max-w-4xl mx-auto relative">
            <Input 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder={isListening ? "Listening..." : "Type your response in French or English..."}
              className={`bg-[#112240] border-white/20 text-white pl-14 pr-16 py-8 rounded-full text-lg focus:border-[#D4AF37] focus:ring-[#D4AF37] shadow-[inset_0_2px_4px_rgba(0,0,0,0.3)] transition-all ${isListening ? "border-[#D4AF37] ring-1 ring-[#D4AF37]" : ""}`}
            />
            
            {/* Mic Button */}
            <Button
              onClick={startListening}
              size="icon"
              variant="ghost"
              className={`absolute left-3 top-1/2 transform -translate-y-1/2 rounded-full w-10 h-10 hover:bg-white/10 transition-all ${isListening ? "text-red-500 animate-pulse" : "text-gray-400"}`}
            >
              {isListening ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
            </Button>

            <Button 
              onClick={handleSend}
              size="icon" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] text-[#0A192F] hover:bg-[#B5952F] rounded-full w-12 h-12 shadow-lg hover:scale-105 transition-all duration-200"
            >
              <Send className="w-5 h-5" />
            </Button>
          </div>
          <div className="flex justify-center gap-6 mt-6 text-[10px] text-gray-600 uppercase tracking-widest">
            <span className="flex items-center gap-1"><Cpu className="w-3 h-3" /> AI Autonomy Level 5</span>
            <span className="flex items-center gap-1"><Lock className="w-3 h-3" /> End-to-End Encrypted</span>
            <span className="flex items-center gap-1"><Globe className="w-3 h-3" /> Global Node Access</span>
          </div>
        </div>
      </div>
    </div>
  );
}
