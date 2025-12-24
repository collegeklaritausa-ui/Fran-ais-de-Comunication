import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Search, 
  BookOpen, 
  Users, 
  Clock, 
  Star,
  Filter,
  ChevronRight,
  Play,
  Award,
  Zap,
  Globe,
  GraduationCap,
  TrendingUp,
  Sparkles,
  Brain,
  Target,
  Trophy,
  Flame,
  CheckCircle2,
  Lock,
  Unlock
} from "lucide-react";
import Layout from "@/components/Layout";
import { FrenchCourseGenerator, CourseStatistics, type FrenchCourse, type CourseCategory } from "@/lib/frenchCourseGenerator";

const LEVEL_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  'A2': { bg: 'bg-green-500/10', text: 'text-green-400', border: 'border-green-500/30' },
  'B1': { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/30' },
  'B2': { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/30' },
  'C1': { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/30' },
  'C2': { bg: 'bg-[#D4AF37]/10', text: 'text-[#D4AF37]', border: 'border-[#D4AF37]/30' }
};

const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  'Grammar & Structure': <BookOpen className="w-4 h-4" />,
  'Vocabulary & Expression': <Brain className="w-4 h-4" />,
  'Conversation & Speaking': <Users className="w-4 h-4" />,
  'Cultural Immersion': <Globe className="w-4 h-4" />,
  'Business French': <TrendingUp className="w-4 h-4" />
};

export default function CourseExplorer() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevel, setSelectedLevel] = useState<string>("all");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [visibleCount, setVisibleCount] = useState(24);
  const [courses, setCourses] = useState<FrenchCourse[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userProgress, setUserProgress] = useState<Record<string, number>>({});

  // Generate courses on mount
  useEffect(() => {
    setIsLoading(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      const generatedCourses: FrenchCourse[] = [];
      const levels: FrenchCourse['level'][] = ['A2', 'B1', 'B2', 'C1', 'C2'];
      const categories: CourseCategory[] = [
        'Grammar & Structure', 'Vocabulary & Expression', 'Conversation & Speaking',
        'Cultural Immersion', 'Business French'
      ];

      // Generate 200 courses (40 per level)
      for (const level of levels) {
        for (let i = 0; i < 40; i++) {
          const category = categories[i % categories.length];
          generatedCourses.push(FrenchCourseGenerator.generateCourse(level, category, i));
        }
      }

      setCourses(generatedCourses);
      
      // Simulate some user progress
      const progress: Record<string, number> = {};
      generatedCourses.slice(0, 20).forEach(course => {
        progress[course.id] = Math.floor(Math.random() * 100);
      });
      setUserProgress(progress);
      
      setIsLoading(false);
    }, 1000);
  }, []);

  const filteredCourses = useMemo(() => {
    return courses.filter(course => {
      const matchesSearch = 
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.subcategory.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesLevel = selectedLevel === "all" || course.level === selectedLevel;
      const matchesCategory = selectedCategory === "all" || course.category === selectedCategory;
      
      return matchesSearch && matchesLevel && matchesCategory;
    });
  }, [courses, searchQuery, selectedLevel, selectedCategory]);

  const visibleCourses = filteredCourses.slice(0, visibleCount);

  const stats = CourseStatistics;

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-[#0A192F] via-[#112240] to-[#0A192F]">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/assets/pattern.png')] opacity-5" />
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 rounded-full blur-3xl" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-[#D4AF37]/20 text-[#D4AF37] border-[#D4AF37]/30">
                <Sparkles className="w-3 h-3 mr-1" />
                {stats.getTotalCourseCount().toLocaleString()}+ Interactive Courses
              </Badge>
              
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-4">
                Master French from{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-[#D4AF37]">
                  A2 to C2
                </span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                Explore our comprehensive library of AI-generated French courses. 
                From beginner foundations to native-level mastery, every lesson is 
                crafted with hyper-realistic multimedia content.
              </p>

              {/* Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-[#D4AF37]">{stats.getTotalCourseCount().toLocaleString()}+</div>
                  <div className="text-sm text-gray-400">Total Courses</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-purple-400">{stats.getTotalLearningHours().toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Learning Hours</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-blue-400">{stats.getTotalExercises().toLocaleString()}</div>
                  <div className="text-sm text-gray-400">Exercises</div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="text-3xl font-bold text-green-400">5</div>
                  <div className="text-sm text-gray-400">CEFR Levels</div>
                </div>
              </div>

              {/* Search Bar */}
              <div className="relative max-w-2xl">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input 
                  type="text" 
                  placeholder="Search courses by topic, skill, or keyword..." 
                  className="pl-12 pr-4 py-6 bg-[#112240] border-white/10 text-white text-lg rounded-xl focus:border-[#D4AF37] focus:ring-[#D4AF37]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
            {/* Level Filter */}
            <div className="flex flex-wrap gap-2">
              <Button
                variant={selectedLevel === "all" ? "default" : "outline"}
                onClick={() => setSelectedLevel("all")}
                className={selectedLevel === "all" 
                  ? "bg-[#D4AF37] text-black hover:bg-[#B5952F]" 
                  : "border-white/20 text-white hover:bg-white/10"
                }
              >
                All Levels
              </Button>
              {['A2', 'B1', 'B2', 'C1', 'C2'].map(level => (
                <Button
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  onClick={() => setSelectedLevel(level)}
                  className={selectedLevel === level 
                    ? `${LEVEL_COLORS[level].bg} ${LEVEL_COLORS[level].text} border ${LEVEL_COLORS[level].border}` 
                    : "border-white/20 text-white hover:bg-white/10"
                  }
                >
                  {level}
                </Button>
              ))}
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-[#112240] border border-white/10 text-white rounded-lg px-4 py-2 focus:border-[#D4AF37] focus:outline-none"
              >
                <option value="all">All Categories</option>
                <option value="Grammar & Structure">Grammar & Structure</option>
                <option value="Vocabulary & Expression">Vocabulary & Expression</option>
                <option value="Conversation & Speaking">Conversation & Speaking</option>
                <option value="Cultural Immersion">Cultural Immersion</option>
                <option value="Business French">Business French</option>
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-gray-400">
              Showing <span className="text-white font-bold">{visibleCourses.length}</span> of{" "}
              <span className="text-[#D4AF37] font-bold">{filteredCourses.length}</span> courses
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Zap className="w-4 h-4 text-[#D4AF37]" />
              AI-Generated Content
            </div>
          </div>

          {/* Course Grid */}
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {[...Array(12)].map((_, i) => (
                <Card key={i} className="bg-[#112240] border-white/5 animate-pulse">
                  <div className="h-2 bg-gray-700 rounded-t" />
                  <CardHeader className="pb-2">
                    <div className="h-6 bg-gray-700 rounded w-1/3 mb-2" />
                    <div className="h-8 bg-gray-700 rounded w-full" />
                  </CardHeader>
                  <CardContent>
                    <div className="h-16 bg-gray-700 rounded mb-4" />
                    <div className="h-4 bg-gray-700 rounded w-2/3" />
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {visibleCourses.map((course) => {
                const levelColor = LEVEL_COLORS[course.level];
                const progress = userProgress[course.id];
                const hasProgress = progress !== undefined;

                return (
                  <Card 
                    key={course.id} 
                    className="bg-[#112240] border-white/5 hover:border-[#D4AF37]/50 transition-all duration-300 group overflow-hidden relative"
                  >
                    {/* Progress indicator */}
                    {hasProgress && (
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gray-700">
                        <div 
                          className="h-full bg-gradient-to-r from-[#D4AF37] to-yellow-500 transition-all"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                    )}
                    
                    {/* Level stripe */}
                    <div className={`h-1 ${levelColor.bg.replace('/10', '')}`} />
                    
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start mb-2">
                        <Badge className={`${levelColor.bg} ${levelColor.text} border ${levelColor.border}`}>
                          {course.level}
                        </Badge>
                        <div className="flex items-center text-yellow-500 text-xs font-bold">
                          <Star className="w-3 h-3 fill-current mr-1" />
                          {course.rating.toFixed(1)}
                        </div>
                      </div>
                      <CardTitle className="text-lg font-serif text-white group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                        {course.title}
                      </CardTitle>
                    </CardHeader>
                    
                    <CardContent>
                      <CardDescription className="text-gray-400 line-clamp-2 mb-4 text-sm">
                        {course.description}
                      </CardDescription>
                      
                      {/* Course Meta */}
                      <div className="flex items-center justify-between text-xs text-gray-500 border-t border-white/5 pt-3">
                        <div className="flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {course.duration}m
                        </div>
                        <div className="flex items-center">
                          <BookOpen className="w-3 h-3 mr-1" />
                          {course.modules.length} Modules
                        </div>
                        <div className="flex items-center">
                          <Users className="w-3 h-3 mr-1" />
                          {(course.studentsEnrolled / 1000).toFixed(1)}k
                        </div>
                      </div>

                      {/* XP and Certification */}
                      <div className="flex items-center justify-between mt-3 pt-3 border-t border-white/5">
                        <div className="flex items-center gap-1 text-[#D4AF37]">
                          <Zap className="w-3 h-3" />
                          <span className="text-xs font-bold">{course.xpReward} XP</span>
                        </div>
                        {course.certification && (
                          <Badge variant="outline" className="text-xs border-green-500/30 text-green-400">
                            <Award className="w-3 h-3 mr-1" />
                            Certificate
                          </Badge>
                        )}
                      </div>
                    </CardContent>
                    
                    <CardFooter className="pt-0">
                      <Button 
                        className={`w-full ${
                          hasProgress 
                            ? 'bg-[#D4AF37] text-black hover:bg-[#B5952F]' 
                            : 'bg-white/5 hover:bg-[#D4AF37] hover:text-black text-white'
                        } border border-white/10 transition-all duration-300`}
                      >
                        {hasProgress ? (
                          <>
                            <Play className="w-4 h-4 mr-2" />
                            Continue ({progress}%)
                          </>
                        ) : (
                          <>
                            <Unlock className="w-4 h-4 mr-2" />
                            Start Course
                          </>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          )}

          {/* Load More */}
          {visibleCount < filteredCourses.length && (
            <div className="mt-12 text-center">
              <Button 
                onClick={() => setVisibleCount(prev => Math.min(prev + 24, filteredCourses.length))}
                size="lg"
                className="bg-[#D4AF37] text-black hover:bg-[#B5952F] px-12"
              >
                Load More Courses
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
              <p className="mt-4 text-sm text-gray-500">
                {filteredCourses.length - visibleCount} more courses available
              </p>
            </div>
          )}
        </section>

        {/* Learning Path Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-white mb-4">
              Your Learning Journey
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Progress through structured levels from Elementary (A2) to Mastery (C2)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {['A2', 'B1', 'B2', 'C1', 'C2'].map((level, index) => {
              const levelColor = LEVEL_COLORS[level];
              const levelNames: Record<string, string> = {
                'A2': 'Elementary',
                'B1': 'Intermediate',
                'B2': 'Upper-Intermediate',
                'C1': 'Advanced',
                'C2': 'Mastery'
              };
              const courseCount = stats.getCoursesByLevel()[level];

              return (
                <Card 
                  key={level}
                  className={`bg-[#112240] border ${levelColor.border} hover:scale-105 transition-transform cursor-pointer`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-full ${levelColor.bg} flex items-center justify-center mx-auto mb-4`}>
                      <span className={`text-2xl font-bold ${levelColor.text}`}>{level}</span>
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{levelNames[level]}</h3>
                    <p className="text-sm text-gray-400 mb-3">{courseCount} Courses</p>
                    <Progress value={(index + 1) * 20} className="h-2" />
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>
      </div>
    </Layout>
  );
}
