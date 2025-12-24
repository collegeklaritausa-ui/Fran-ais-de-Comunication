import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Input } from "@/components/ui/input";
import { useState, useMemo } from "react";
import { Search, BookOpen, Users, Clock, Star } from "lucide-react";
import { Link } from "wouter";
import coursesData from "../data/courses.json";

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
    <div className="min-h-screen bg-[#0A192F] text-white font-sans selection:bg-[#D4AF37] selection:text-[#0A192F]">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
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

          {/* Autonomous System Status */}
          <div className="mt-16 max-w-2xl mx-auto bg-black/40 backdrop-blur-md border border-[#D4AF37]/30 p-6 rounded-lg text-left font-mono text-xs md:text-sm text-[#D4AF37]">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-ping"></div>
              <span className="font-bold">LIVE INGESTION LOG:</span>
            </div>
            <div className="space-y-1 opacity-80">
              <p>&gt; [14:02:33] DETECTED: New linguistic dataset from Sorbonne Archives...</p>
              <p>&gt; [14:02:34] ACTION: Devouring 45,000 semantic structures...</p>
              <p>&gt; [14:02:35] RESULT: Integration complete. Core intelligence upgraded.</p>
              <p>&gt; [14:02:36] STATUS: Scanning for next target...</p>
            </div>
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
    </div>
  );
}
