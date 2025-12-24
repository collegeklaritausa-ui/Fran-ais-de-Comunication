import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Target, Zap } from 'lucide-react';

interface Word {
  id: number;
  french: string;
  english: string;
  x: number;
  y: number;
  speed: number;
}

const VOCAB_LIST = [
  { fr: 'Bonjour', en: 'Hello' },
  { fr: 'Chat', en: 'Cat' },
  { fr: 'Chien', en: 'Dog' },
  { fr: 'Maison', en: 'House' },
  { fr: 'Voiture', en: 'Car' },
  { fr: 'Pomme', en: 'Apple' },
  { fr: 'Livre', en: 'Book' },
  { fr: 'École', en: 'School' },
  { fr: 'Ami', en: 'Friend' },
  { fr: 'Amour', en: 'Love' }
];

export default function VocabBlaster() {
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [words, setWords] = useState<Word[]>([]);
  const [targetWord, setTargetWord] = useState<{fr: string, en: string} | null>(null);
  const requestRef = useRef<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const startGame = () => {
    setGameActive(true);
    setScore(0);
    setWords([]);
    spawnWord();
    pickTarget();
  };

  const pickTarget = () => {
    const random = VOCAB_LIST[Math.floor(Math.random() * VOCAB_LIST.length)];
    setTargetWord(random);
  };

  const spawnWord = () => {
    if (!gameActive) return;
    const randomVocab = VOCAB_LIST[Math.floor(Math.random() * VOCAB_LIST.length)];
    const newWord: Word = {
      id: Date.now(),
      french: randomVocab.fr,
      english: randomVocab.en,
      x: Math.random() * 80 + 10, // percentage
      y: -10,
      speed: Math.random() * 0.2 + 0.1
    };
    setWords(prev => [...prev, newWord]);
  };

  const updateGame = () => {
    if (!gameActive) return;

    setWords(prev => {
      const updated = prev.map(w => ({ ...w, y: w.y + w.speed })).filter(w => w.y < 110);
      return updated;
    });

    // Random spawn chance
    if (Math.random() < 0.02) spawnWord();

    requestRef.current = requestAnimationFrame(updateGame);
  };

  useEffect(() => {
    if (gameActive) {
      requestRef.current = requestAnimationFrame(updateGame);
    }
    return () => cancelAnimationFrame(requestRef.current!);
  }, [gameActive]);

  const shootWord = (word: Word) => {
    if (!targetWord) return;

    if (word.french === targetWord.fr) {
      // Correct hit
      setScore(prev => prev + 100);
      setWords(prev => prev.filter(w => w.id !== word.id));
      pickTarget();
      
      // Visual feedback
      const audio = new Audio('/assets/laser.mp3'); // Placeholder
      // audio.play().catch(() => {}); 
    } else {
      // Wrong hit
      setScore(prev => Math.max(0, prev - 50));
    }
  };

  return (
    <div className="relative w-full h-[500px] bg-[#0A192F] border-2 border-[#D4AF37] rounded-xl overflow-hidden shadow-2xl">
      
      {/* HUD */}
      <div className="absolute top-0 left-0 w-full p-4 flex justify-between items-center z-10 bg-black/50 backdrop-blur-sm">
        <div className="flex items-center gap-2 text-[#D4AF37]">
          <Target className="w-6 h-6" />
          <span className="font-bold text-xl">Target: {targetWord?.en || "READY"}</span>
        </div>
        <div className="text-white font-mono text-xl">Score: {score}</div>
      </div>

      {/* Game Area */}
      <div ref={containerRef} className="relative w-full h-full">
        {!gameActive ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/60 z-20">
            <h2 className="text-4xl font-bold text-[#D4AF37] mb-4 font-serif">VOCAB BLASTER</h2>
            <p className="text-gray-300 mb-8">Shoot the correct French translation!</p>
            <Button onClick={startGame} size="lg" className="bg-[#D4AF37] text-[#0A192F] hover:bg-[#B5952F] font-bold text-xl px-8 py-6">
              <Rocket className="w-6 h-6 mr-2" />
              START MISSION
            </Button>
          </div>
        ) : (
          <>
            {words.map(word => (
              <button
                key={word.id}
                onClick={() => shootWord(word)}
                className="absolute transform -translate-x-1/2 px-4 py-2 bg-[#112240] border border-[#D4AF37] text-[#D4AF37] rounded-full hover:bg-[#D4AF37] hover:text-[#0A192F] transition-colors font-bold shadow-[0_0_10px_rgba(212,175,55,0.3)]"
                style={{ left: `${word.x}%`, top: `${word.y}%` }}
              >
                {word.french}
              </button>
            ))}
            
            {/* Player Ship (Visual Only) */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-[#D4AF37]">
              <Rocket className="w-12 h-12" />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
