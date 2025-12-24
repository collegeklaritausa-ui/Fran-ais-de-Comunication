import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { 
  Image, 
  Video, 
  Music, 
  Mic, 
  Sparkles, 
  Wand2, 
  Download, 
  Play, 
  Pause,
  Volume2,
  VolumeX,
  RefreshCw,
  Zap,
  Brain,
  Palette,
  Camera,
  Film,
  AudioLines,
  Globe,
  Star,
  ChevronRight
} from "lucide-react";
import Layout from "@/components/Layout";

interface GeneratedAsset {
  id: string;
  type: 'image' | 'audio' | 'video';
  url: string;
  prompt: string;
  timestamp: number;
  style?: string;
}

const IMAGE_STYLES = [
  { id: 'hyper-realistic', name: 'Hyper-Realistic', description: '8K photorealistic quality' },
  { id: 'cinematic', name: 'Cinematic', description: 'Movie-quality visuals' },
  { id: 'artistic', name: 'Artistic', description: 'Impressionist style' },
  { id: 'vintage-french', name: 'Vintage French', description: 'Belle Époque aesthetic' },
  { id: 'modern-paris', name: 'Modern Paris', description: 'Contemporary urban' },
  { id: 'provence', name: 'Provence', description: 'Countryside charm' }
];

const VOICE_TYPES = [
  { id: 'native-parisian', name: 'Native Parisian', accent: 'Standard French' },
  { id: 'southern-french', name: 'Southern French', accent: 'Provençal accent' },
  { id: 'belgian-french', name: 'Belgian French', accent: 'Brussels accent' },
  { id: 'canadian-french', name: 'Canadian French', accent: 'Québécois' },
  { id: 'formal-academic', name: 'Formal Academic', accent: 'Professional' },
  { id: 'casual', name: 'Casual Conversational', accent: 'Everyday French' }
];

const SAMPLE_PROMPTS = {
  image: [
    'A cozy Parisian café at golden hour with croissants and coffee',
    'The Eiffel Tower illuminated at night with the Seine River',
    'A traditional French countryside vineyard in Provence',
    'Students studying French in a beautiful library setting',
    'A French market with colorful produce and flowers'
  ],
  audio: [
    'Bonjour! Bienvenue dans notre cours de français.',
    'La vie est belle quand on parle français.',
    'Je voudrais un croissant et un café, s\'il vous plaît.',
    'Comment allez-vous aujourd\'hui? Très bien, merci!',
    'La France est un pays magnifique avec une riche culture.'
  ],
  video: [
    'A virtual tour of the Louvre Museum',
    'French cooking class making crêpes',
    'Walking through the streets of Montmartre',
    'French pronunciation guide for beginners',
    'Cultural etiquette in French business settings'
  ]
};

export default function MultimediaStudio() {
  const [activeTab, setActiveTab] = useState('image');
  const [prompt, setPrompt] = useState('');
  const [selectedStyle, setSelectedStyle] = useState('hyper-realistic');
  const [selectedVoice, setSelectedVoice] = useState('native-parisian');
  const [isGenerating, setIsGenerating] = useState(false);
  const [progress, setProgress] = useState(0);
  const [generatedAssets, setGeneratedAssets] = useState<GeneratedAsset[]>([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  // Simulate generation progress
  useEffect(() => {
    if (isGenerating) {
      const interval = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            clearInterval(interval);
            setIsGenerating(false);
            return 100;
          }
          return prev + Math.random() * 15;
        });
      }, 200);
      return () => clearInterval(interval);
    }
  }, [isGenerating]);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setProgress(0);

    // Simulate generation delay
    setTimeout(() => {
      const newAsset: GeneratedAsset = {
        id: `asset_${Date.now()}`,
        type: activeTab as 'image' | 'audio' | 'video',
        url: activeTab === 'image' 
          ? `/assets/avatars/poster_${String(Math.floor(Math.random() * 15) + 10).padStart(3, '0')}.png`
          : '/generated/sample.mp3',
        prompt,
        timestamp: Date.now(),
        style: activeTab === 'image' ? selectedStyle : selectedVoice
      };
      
      setGeneratedAssets(prev => [newAsset, ...prev]);
      setProgress(100);
      
      setTimeout(() => {
        setIsGenerating(false);
        setProgress(0);
      }, 500);
    }, 3000);
  };

  const handleRandomPrompt = () => {
    const prompts = SAMPLE_PROMPTS[activeTab as keyof typeof SAMPLE_PROMPTS];
    const randomPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    setPrompt(randomPrompt);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <Badge className="mb-6 bg-gradient-to-r from-[#D4AF37] to-yellow-500 text-black font-bold px-6 py-2">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-POWERED GENERATION
              </Badge>
              
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#D4AF37] to-white">
                  Multimedia Studio
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Generate <span className="text-[#D4AF37] font-semibold">hyper-realistic images</span>, 
                <span className="text-purple-400 font-semibold"> native French audio</span>, and 
                <span className="text-blue-400 font-semibold"> immersive videos</span> for your 
                French learning journey using cutting-edge AI technology.
              </p>

              <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                  <Brain className="w-4 h-4 text-[#D4AF37]" />
                  <span>DALL-E 3 Integration</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                  <AudioLines className="w-4 h-4 text-purple-400" />
                  <span>ElevenLabs Voice</span>
                </div>
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                  <Film className="w-4 h-4 text-blue-400" />
                  <span>Runway ML Video</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Main Studio Interface */}
        <section className="container mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Generation Panel */}
            <div className="lg:col-span-2">
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl shadow-2xl">
                <CardHeader className="border-b border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-2xl font-serif text-white flex items-center gap-3">
                        <Wand2 className="w-6 h-6 text-[#D4AF37]" />
                        Generation Console
                      </CardTitle>
                      <CardDescription className="text-gray-400 mt-1">
                        Create stunning multimedia content with AI
                      </CardDescription>
                    </div>
                    <Badge variant="outline" className="border-green-500/50 text-green-400">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                      Systems Online
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="p-6">
                  <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                    <TabsList className="grid grid-cols-3 bg-[#0A192F] p-1 mb-6">
                      <TabsTrigger 
                        value="image" 
                        className="data-[state=active]:bg-[#D4AF37] data-[state=active]:text-black flex items-center gap-2"
                      >
                        <Image className="w-4 h-4" />
                        Images
                      </TabsTrigger>
                      <TabsTrigger 
                        value="audio"
                        className="data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center gap-2"
                      >
                        <Music className="w-4 h-4" />
                        Audio
                      </TabsTrigger>
                      <TabsTrigger 
                        value="video"
                        className="data-[state=active]:bg-blue-500 data-[state=active]:text-white flex items-center gap-2"
                      >
                        <Video className="w-4 h-4" />
                        Video
                      </TabsTrigger>
                    </TabsList>

                    {/* Image Generation */}
                    <TabsContent value="image" className="space-y-6">
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Visual Style</label>
                        <div className="grid grid-cols-3 gap-3">
                          {IMAGE_STYLES.map(style => (
                            <button
                              key={style.id}
                              onClick={() => setSelectedStyle(style.id)}
                              className={`p-3 rounded-lg border transition-all ${
                                selectedStyle === style.id
                                  ? 'border-[#D4AF37] bg-[#D4AF37]/10 text-[#D4AF37]'
                                  : 'border-white/10 hover:border-white/30 text-gray-300'
                              }`}
                            >
                              <div className="font-medium text-sm">{style.name}</div>
                              <div className="text-xs opacity-60">{style.description}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm text-gray-400">Image Prompt</label>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={handleRandomPrompt}
                            className="text-[#D4AF37] hover:text-[#D4AF37]/80"
                          >
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Random
                          </Button>
                        </div>
                        <Textarea
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          placeholder="Describe the image you want to generate... e.g., 'A cozy Parisian café at sunset with croissants and coffee'"
                          className="bg-[#0A192F] border-white/10 text-white min-h-[120px] focus:border-[#D4AF37]"
                        />
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-[#0A192F]/50 rounded-lg border border-white/5">
                        <Camera className="w-8 h-8 text-[#D4AF37]" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">Output Settings</div>
                          <div className="text-xs text-gray-400">Resolution: 1024×1024 • Format: PNG • Quality: Maximum</div>
                        </div>
                        <Badge className="bg-[#D4AF37]/20 text-[#D4AF37]">8K Ready</Badge>
                      </div>
                    </TabsContent>

                    {/* Audio Generation */}
                    <TabsContent value="audio" className="space-y-6">
                      <div>
                        <label className="text-sm text-gray-400 mb-2 block">Voice Type</label>
                        <div className="grid grid-cols-3 gap-3">
                          {VOICE_TYPES.map(voice => (
                            <button
                              key={voice.id}
                              onClick={() => setSelectedVoice(voice.id)}
                              className={`p-3 rounded-lg border transition-all ${
                                selectedVoice === voice.id
                                  ? 'border-purple-500 bg-purple-500/10 text-purple-400'
                                  : 'border-white/10 hover:border-white/30 text-gray-300'
                              }`}
                            >
                              <div className="font-medium text-sm">{voice.name}</div>
                              <div className="text-xs opacity-60">{voice.accent}</div>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm text-gray-400">Text to Synthesize</label>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={handleRandomPrompt}
                            className="text-purple-400 hover:text-purple-300"
                          >
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Random
                          </Button>
                        </div>
                        <Textarea
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          placeholder="Enter French text to convert to speech... e.g., 'Bonjour! Comment allez-vous?'"
                          className="bg-[#0A192F] border-white/10 text-white min-h-[120px] focus:border-purple-500"
                        />
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-[#0A192F]/50 rounded-lg border border-white/5">
                        <Mic className="w-8 h-8 text-purple-400" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">Audio Settings</div>
                          <div className="text-xs text-gray-400">Sample Rate: 44.1kHz • Format: MP3 • Bitrate: 320kbps</div>
                        </div>
                        <Badge className="bg-purple-500/20 text-purple-400">HD Audio</Badge>
                      </div>
                    </TabsContent>

                    {/* Video Generation */}
                    <TabsContent value="video" className="space-y-6">
                      <div>
                        <div className="flex items-center justify-between mb-2">
                          <label className="text-sm text-gray-400">Video Concept</label>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            onClick={handleRandomPrompt}
                            className="text-blue-400 hover:text-blue-300"
                          >
                            <RefreshCw className="w-3 h-3 mr-1" />
                            Random
                          </Button>
                        </div>
                        <Textarea
                          value={prompt}
                          onChange={(e) => setPrompt(e.target.value)}
                          placeholder="Describe the video you want to generate... e.g., 'A virtual tour through the streets of Paris at sunset'"
                          className="bg-[#0A192F] border-white/10 text-white min-h-[120px] focus:border-blue-500"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-[#0A192F]/50 rounded-lg border border-white/5">
                          <div className="text-sm font-medium text-white mb-1">Duration</div>
                          <div className="text-2xl font-bold text-blue-400">30s</div>
                          <div className="text-xs text-gray-400">Maximum length</div>
                        </div>
                        <div className="p-4 bg-[#0A192F]/50 rounded-lg border border-white/5">
                          <div className="text-sm font-medium text-white mb-1">Resolution</div>
                          <div className="text-2xl font-bold text-blue-400">4K</div>
                          <div className="text-xs text-gray-400">Ultra HD quality</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 p-4 bg-[#0A192F]/50 rounded-lg border border-white/5">
                        <Film className="w-8 h-8 text-blue-400" />
                        <div className="flex-1">
                          <div className="text-sm font-medium text-white">Video Settings</div>
                          <div className="text-xs text-gray-400">Resolution: 3840×2160 • FPS: 30 • Codec: H.265</div>
                        </div>
                        <Badge className="bg-blue-500/20 text-blue-400">Cinema Quality</Badge>
                      </div>
                    </TabsContent>

                    {/* Generate Button */}
                    <div className="mt-6">
                      {isGenerating ? (
                        <div className="space-y-3">
                          <Progress value={progress} className="h-2" />
                          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                            <Zap className="w-4 h-4 text-[#D4AF37] animate-pulse" />
                            <span>Generating {activeTab}... {Math.round(progress)}%</span>
                          </div>
                        </div>
                      ) : (
                        <Button 
                          onClick={handleGenerate}
                          disabled={!prompt.trim()}
                          className={`w-full py-6 text-lg font-bold transition-all ${
                            activeTab === 'image' 
                              ? 'bg-gradient-to-r from-[#D4AF37] to-yellow-500 hover:from-[#B5952F] hover:to-yellow-600 text-black'
                              : activeTab === 'audio'
                              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white'
                              : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                          }`}
                        >
                          <Sparkles className="w-5 h-5 mr-2" />
                          Generate {activeTab === 'image' ? 'Image' : activeTab === 'audio' ? 'Audio' : 'Video'}
                        </Button>
                      )}
                    </div>
                  </Tabs>
                </CardContent>
              </Card>
            </div>

            {/* Generated Assets Panel */}
            <div className="lg:col-span-1">
              <Card className="bg-[#112240]/80 border-white/10 backdrop-blur-xl shadow-2xl h-full">
                <CardHeader className="border-b border-white/10">
                  <CardTitle className="text-xl font-serif text-white flex items-center gap-2">
                    <Palette className="w-5 h-5 text-[#D4AF37]" />
                    Generated Assets
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    Your AI-generated multimedia
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="p-4">
                  <ScrollArea className="h-[600px]">
                    {generatedAssets.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-64 text-center">
                        <div className="w-16 h-16 rounded-full bg-[#D4AF37]/10 flex items-center justify-center mb-4">
                          <Sparkles className="w-8 h-8 text-[#D4AF37]" />
                        </div>
                        <p className="text-gray-400 text-sm">
                          No assets generated yet.<br />
                          Start creating amazing content!
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-4">
                        {generatedAssets.map(asset => (
                          <div 
                            key={asset.id}
                            className="group relative rounded-lg overflow-hidden border border-white/10 hover:border-[#D4AF37]/50 transition-all"
                          >
                            {asset.type === 'image' ? (
                              <img 
                                src={asset.url} 
                                alt={asset.prompt}
                                className="w-full aspect-square object-cover"
                              />
                            ) : (
                              <div className="w-full aspect-square bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center">
                                {asset.type === 'audio' ? (
                                  <Music className="w-16 h-16 text-purple-400" />
                                ) : (
                                  <Video className="w-16 h-16 text-blue-400" />
                                )}
                              </div>
                            )}
                            
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                              <div className="absolute bottom-0 left-0 right-0 p-3">
                                <p className="text-white text-xs line-clamp-2 mb-2">{asset.prompt}</p>
                                <div className="flex items-center justify-between">
                                  <Badge variant="outline" className="text-xs border-white/30 text-white">
                                    {asset.style}
                                  </Badge>
                                  <Button size="sm" variant="ghost" className="text-white hover:text-[#D4AF37]">
                                    <Download className="w-4 h-4" />
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 pb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Powered by World-Class AI
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Our multimedia generation engine leverages the most advanced AI models 
              to create stunning, educational content for French language learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-[#D4AF37]/10 to-yellow-500/5 border-[#D4AF37]/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-[#D4AF37]/20 flex items-center justify-center mx-auto mb-4">
                  <Image className="w-8 h-8 text-[#D4AF37]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">DALL-E 3</h3>
                <p className="text-gray-400 text-sm">
                  Generate hyper-realistic images with OpenAI's most advanced image model. 
                  Perfect for cultural scenes, vocabulary illustrations, and immersive visuals.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-[#D4AF37]/20 text-[#D4AF37]">8K Resolution</Badge>
                  <Badge className="bg-[#D4AF37]/20 text-[#D4AF37]">Photorealistic</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 border-purple-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">ElevenLabs</h3>
                <p className="text-gray-400 text-sm">
                  Natural French voice synthesis with multiple accents and speaking styles. 
                  Perfect for pronunciation guides and immersive audio content.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-purple-500/20 text-purple-400">Native Voices</Badge>
                  <Badge className="bg-purple-500/20 text-purple-400">6 Accents</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/5 border-blue-500/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Runway ML</h3>
                <p className="text-gray-400 text-sm">
                  Generate cinematic video content for cultural tours, grammar animations, 
                  and immersive French learning experiences.
                </p>
                <div className="mt-4 flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-blue-500/20 text-blue-400">4K Video</Badge>
                  <Badge className="bg-blue-500/20 text-blue-400">30s Clips</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}
