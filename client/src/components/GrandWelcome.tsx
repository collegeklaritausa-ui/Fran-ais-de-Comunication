import { useState, useEffect } from 'react';
import { X, Sparkles, Play, Volume2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export default function GrandWelcome() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);

  useEffect(() => {
    // Trigger the welcome scene 2 seconds after load
    const timer = setTimeout(() => {
      if (!sessionStorage.getItem('welcomeShown')) {
        setIsVisible(true);
        sessionStorage.setItem('welcomeShown', 'true');
      }
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const playWelcomeMessage = () => {
    if ('speechSynthesis' in window) {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const text = "Ahlan wa Sahlan! Marhaban bikum fi Prize2Pride! Al-manassa al-mustaqilla li-ta'lim al-lugha al-faransiyya! Huna, nahnu la nudarris faqat, nahnu nakhluq al-abqariya! Hayya bina!";
      // Translation: "Welcome! Welcome to Prize2Pride! The autonomous platform for French language education! Here, we don't just teach, we create genius! Let's go!"
      
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'ar-SA'; // Arabic (Saudi Arabia)
      utterance.pitch = 1.2; // Slightly higher pitch for feminine/lively tone
      utterance.rate = 1.1; // Slightly faster for energy
      utterance.volume = 1.0;

      // Try to find a female Arabic voice if available
      const voices = window.speechSynthesis.getVoices();
      const arabicVoice = voices.find(v => v.lang.includes('ar') && v.name.includes('Female')) || 
                          voices.find(v => v.lang.includes('ar'));
      
      if (arabicVoice) {
        utterance.voice = arabicVoice;
      }

      window.speechSynthesis.speak(utterance);
      setHasPlayed(true);
    } else {
      console.log("Speech synthesis not supported");
    }
  };

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-500">
      <div className="relative w-full max-w-lg mx-4">
        
        {/* Close Button */}
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute -top-12 right-0 text-white hover:text-[#D4AF37] transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Main Card */}
        <div className="bg-[#0A192F] border-2 border-[#D4AF37] rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(212,175,55,0.5)] transform transition-all animate-in zoom-in-95 duration-500">
          
          {/* Animated Background Effect */}
          <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-10"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#D4AF37]/20 to-transparent pointer-events-none"></div>

          <div className="relative p-8 flex flex-col items-center text-center">
            
            {/* Avatar Container with "Pop-out" Effect */}
            <div className="relative mb-6 group cursor-pointer" onClick={playWelcomeMessage}>
              <div className="absolute inset-0 bg-[#D4AF37] rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-40 h-40 rounded-full border-4 border-[#D4AF37] overflow-hidden shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                <img 
                  src="/assets/avatars/poster_012.png" 
                  alt="Hostess" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Speech Bubble Indicator */}
              {!hasPlayed && (
                <div className="absolute -right-4 top-0 bg-white text-[#0A192F] px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-bounce">
                  <Volume2 className="w-4 h-4 inline mr-1" />
                  Click Me!
                </div>
              )}
            </div>

            <h2 className="text-3xl font-serif font-bold text-[#D4AF37] mb-2">
              Ahlan wa Sahlan!
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Welcome to the <span className="text-[#D4AF37] font-bold">Autonomous Era</span> of Education.
              <br/>
              <span className="text-sm italic text-gray-400">(Click the avatar for a special greeting!)</span>
            </p>

            <div className="flex gap-4 w-full">
              <Button 
                onClick={playWelcomeMessage}
                className="flex-1 bg-[#112240] hover:bg-[#1a365d] text-white border border-white/10 py-6 text-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Listen
              </Button>
              <Button 
                onClick={() => setIsVisible(false)}
                className="flex-1 bg-[#D4AF37] hover:bg-[#B5952F] text-[#0A192F] font-bold py-6 text-lg shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Journey
              </Button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
