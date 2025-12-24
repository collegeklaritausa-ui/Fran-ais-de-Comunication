import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { Search, BookOpen, Users, Clock, Star, Sparkles, Brain, Globe, Zap, Image, Mic, Video, Play, ChevronRight, Award, Crown, GraduationCap, MessageCircle } from "lucide-react";
import { Link } from "wouter";
import coursesData from "../data/courses.json";
import Layout from "@/components/Layout";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(12);

  const filteredCourses = useMemo(() => {
    return coursesData.filter(course => 
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.level.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const visibleCourses = filteredCourses.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 12, filteredCourses.length));
  };

  return (
    <Layout>
    <div className="min-h-screen bg-[#0A192F] text-white font-sans selection:bg-[#D4AF37] selection:text-[#0A192F]">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Paris at Twilight" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/80 via-[#0A192F]/60 to-[#0A192F]" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="mb-6 inline-block animate-pulse">
            <Badge variant="outline" className="border-[#D4AF37] text-[#D4AF37] px-4 py-1 text-sm tracking-widest uppercase">
              Omega 777 • Autonomous Mode
            </Badge>
          </div>
          
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-[#F0E68C] to-[#D4AF37] drop-shadow-lg">
            L'Élégance Moderne
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-10 font-light leading-relaxed">
            The era of human-dependency is over. Witness the rise of the <span className="text-[#D4AF37] font-medium">Eternal Self-Learning Cycle</span>.
            Prize2Pride is now an autonomous entity, devouring knowledge to fuel your mastery of the French language.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link href="/classroom">
              <Button size="lg" className="bg-[#D4AF37] text-[#0A192F] hover:bg-[#B5952F] font-bold px-8 py-6 text-lg rounded-none border border-[#D4AF37] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)]">
                Enter Omega Classroom
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 hover:border-white px-8 py-6 text-lg rounded-none backdrop-blur-sm transition-all duration-300">
              Explore 10,000+ Courses
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-[#D4AF37]">1000+</div>
              <div className="text-sm text-gray-400">Interactive Courses</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-purple-400">A2-C2</div>
              <div className="text-sm text-gray-400">All Levels</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-blue-400">50,000+</div>
              <div className="text-sm text-gray-400">Exercises</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center">
              <div className="text-3xl font-bold text-green-400">AI</div>
              <div className="text-sm text-gray-400">Powered</div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A192F] to-[#112240]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
              <Sparkles className="w-3 h-3 mr-1" />
              AI-Powered Features
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              Hyper-Realistic{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Multimedia Generation
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience the future of language learning with AI-generated images, natural voice synthesis, 
              and interactive 3D avatars.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Image Generation */}
            <Card className="bg-[#112240]/80 border-white/10 hover:border-purple-500/50 transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Image className="w-7 h-7 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Image Generation</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Generate hyper-realistic images for vocabulary, cultural contexts, and visual learning.
                </p>
                <Link href="/multimedia">
                  <Button variant="ghost" className="text-purple-400 hover:text-purple-300 p-0">
                    Try Now <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Voice Synthesis */}
            <Card className="bg-[#112240]/80 border-white/10 hover:border-blue-500/50 transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mic className="w-7 h-7 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Natural Voice Synthesis</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Native French pronunciation with multiple accents: Parisian, Southern, Belgian, Canadian.
                </p>
                <Link href="/multimedia">
                  <Button variant="ghost" className="text-blue-400 hover:text-blue-300 p-0">
                    Listen <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* AI Tutors */}
            <Card className="bg-[#112240]/80 border-white/10 hover:border-green-500/50 transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-green-500/20 to-emerald-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-7 h-7 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI French Tutors</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Converse with AI-powered native speakers. Each tutor has unique personality and teaching style.
                </p>
                <Link href="/avatars-experience">
                  <Button variant="ghost" className="text-green-400 hover:text-green-300 p-0">
                    Meet Tutors <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Video Content */}
            <Card className="bg-[#112240]/80 border-white/10 hover:border-orange-500/50 transition-all group">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Video className="w-7 h-7 text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Dynamic Video Lessons</h3>
                <p className="text-gray-400 text-sm mb-4">
                  Animated grammar demonstrations, cultural documentaries, and immersive scenarios.
                </p>
                <Link href="/courses">
                  <Button variant="ghost" className="text-orange-400 hover:text-orange-300 p-0">
                    Explore <ChevronRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Level Progression */}
      <section className="py-20 bg-[#112240]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
              <GraduationCap className="w-3 h-3 mr-1" />
              Complete Learning Path
            </Badge>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              From Beginner to{" "}
              <span className="text-[#D4AF37]">Mastery</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Structured progression through all CEFR levels with certification at each milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {[
              { level: 'A2', name: 'Elementary', color: 'green', courses: 200, hours: 80 },
              { level: 'B1', name: 'Intermediate', color: 'blue', courses: 250, hours: 120 },
              { level: 'B2', name: 'Upper-Intermediate', color: 'purple', courses: 220, hours: 150 },
              { level: 'C1', name: 'Advanced', color: 'orange', courses: 180, hours: 180 },
              { level: 'C2', name: 'Mastery', color: 'yellow', courses: 150, hours: 200 }
            ].map((item, i) => (
              <Card key={item.level} className={`bg-[#0A192F]/50 border-${item.color}-500/30 hover:border-${item.color}-500/60 transition-all cursor-pointer group`}>
                <CardContent className="p-6 text-center">
                  <div className={`w-16 h-16 mx-auto rounded-full bg-${item.color}-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <span className={`text-2xl font-bold text-${item.color}-400`}>{item.level}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{item.name}</h3>
                  <p className="text-sm text-gray-400 mb-4">{item.courses} courses • {item.hours}h</p>
                  <Badge variant="outline" className={`border-${item.color}-500/30 text-${item.color}-400`}>
                    <Award className="w-3 h-3 mr-1" />
                    Certification
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Library Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
              The Infinite Library
            </h2>
            <p className="text-gray-400 max-w-xl">
              Access over <span className="text-[#D4AF37] font-bold">10,000</span> autonomously generated modules. 
              From A2 foundations to C2 mastery, the system has prepared everything.
            </p>
          </div>
          
          <div className="w-full md:w-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input 
              type="text" 
              placeholder="Search topics, levels..." 
              className="pl-10 bg-[#0A192F]/50 border-white/20 text-white w-full md:w-80 focus:border-[#D4AF37] focus:ring-[#D4AF37]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {visibleCourses.map((course) => (
            <Card key={course.id} className="bg-[#112240] border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 group overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-[#0A192F] to-[#D4AF37]" />
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary" className="bg-[#D4AF37]/10 text-[#D4AF37] hover:bg-[#D4AF37]/20 border border-[#D4AF37]/20">
                    {course.level}
                  </Badge>
                  <div className="flex items-center text-yellow-500 text-xs font-bold">
                    <Star className="w-3 h-3 fill-current mr-1" />
                    {course.rating}
                  </div>
                </div>
                <CardTitle className="text-xl font-serif text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                  {course.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-400 line-clamp-3 mb-4">
                  {course.description}
                </CardDescription>
                <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-4">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="w-3 h-3 mr-1" />
                    {course.modules} Modules
                  </div>
                  <div className="flex items-center">
                    <Users className="w-3 h-3 mr-1" />
                    {course.students}
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-white/5 hover:bg-[#D4AF37] hover:text-[#0A192F] text-white border border-white/10 transition-all duration-300">
                  Access Module
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {visibleCount < filteredCourses.length && (
          <div className="mt-16 text-center">
            <Button 
              onClick={loadMore}
              variant="outline" 
              size="lg" 
              className="border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0A192F] px-12"
            >
              Load More Courses
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Showing {visibleCount} of {filteredCourses.length} courses
            </p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-[#0A192F] to-[#112240]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-[#D4AF37]/10 to-purple-500/10 rounded-3xl p-12 border border-[#D4AF37]/30">
            <Crown className="w-16 h-16 text-[#D4AF37] mx-auto mb-6" />
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
              Start Your French Journey Today
            </h2>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Join over 125,000 learners mastering French with AI-powered courses, 
              native speaker audio, and personalized learning paths.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/courses">
                <Button size="lg" className="bg-[#D4AF37] text-[#0A192F] hover:bg-[#B5952F] font-bold px-8">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning Free
                </Button>
              </Link>
              <Link href="/multimedia">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  <Sparkles className="w-5 h-5 mr-2" />
                  Explore AI Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
