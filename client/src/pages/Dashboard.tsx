import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
import { Trophy, Target, Clock, Zap, Brain, TrendingUp, Award, Activity, Globe } from "lucide-react";

const WEEKLY_ACTIVITY = [
  { day: 'Mon', hours: 2.5 },
  { day: 'Tue', hours: 1.8 },
  { day: 'Wed', hours: 3.2 },
  { day: 'Thu', hours: 4.0 },
  { day: 'Fri', hours: 2.1 },
  { day: 'Sat', hours: 5.5 },
  { day: 'Sun', hours: 4.8 },
];

const SKILL_MASTERY = [
  { skill: 'Grammar', level: 78 },
  { skill: 'Vocabulary', level: 92 },
  { skill: 'Pronunciation', level: 65 },
  { skill: 'Listening', level: 85 },
  { skill: 'Culture', level: 88 },
];

const PROGRESS_HISTORY = [
  { week: 'W1', score: 20 },
  { week: 'W2', score: 35 },
  { week: 'W3', score: 45 },
  { week: 'W4', score: 52 },
  { week: 'W5', score: 68 },
  { week: 'W6', score: 75 },
  { week: 'W7', score: 82 },
  { week: 'W8', score: 89 },
];

export default function Dashboard() {
  return (
    <Layout>
      <div className="bg-[#0A192F] min-h-screen py-12 text-white">
        <div className="container mx-auto px-4">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[#D4AF37] mb-2">Mastery Dashboard</h1>
              <p className="text-gray-400">Tracking the evolution of your linguistic neural network.</p>
            </div>
            <div className="flex items-center gap-4 bg-[#112240] p-4 rounded-xl border border-[#D4AF37]/20">
              <div className="p-3 bg-[#D4AF37]/10 rounded-full">
                <Trophy className="w-8 h-8 text-[#D4AF37]" />
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase tracking-wider">Current Rank</p>
                <p className="text-xl font-bold text-white">Polyglot Aspirant</p>
              </div>
            </div>
          </div>

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="bg-[#112240] border-white/10 text-white">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-blue-500/10 rounded-lg">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Total Study Time</p>
                  <h3 className="text-2xl font-bold">142.5 Hours</h3>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-[#112240] border-white/10 text-white">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-green-500/10 rounded-lg">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Lessons Completed</p>
                  <h3 className="text-2xl font-bold">843 / 5000</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#112240] border-white/10 text-white">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-purple-500/10 rounded-lg">
                  <Brain className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Words Mastered</p>
                  <h3 className="text-2xl font-bold">4,219</h3>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#112240] border-white/10 text-white">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="p-3 bg-[#D4AF37]/10 rounded-lg">
                  <Zap className="w-6 h-6 text-[#D4AF37]" />
                </div>
                <div>
                  <p className="text-sm text-gray-400">Current Streak</p>
                  <h3 className="text-2xl font-bold">24 Days</h3>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Analytics Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Charts */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Activity Chart */}
              <Card className="bg-[#112240] border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-[#D4AF37] font-serif flex items-center gap-2">
                    <Activity className="w-5 h-5" /> Weekly Immersion
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={WEEKLY_ACTIVITY}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis dataKey="day" stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0A192F', borderColor: '#ffffff20', color: '#fff' }}
                          cursor={{ fill: '#ffffff05' }}
                        />
                        <Bar dataKey="hours" fill="#D4AF37" radius={[4, 4, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              {/* Progress Trajectory */}
              <Card className="bg-[#112240] border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-[#D4AF37] font-serif flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" /> Fluency Trajectory
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={PROGRESS_HISTORY}>
                        <defs>
                          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#D4AF37" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#D4AF37" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                        <XAxis dataKey="week" stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <YAxis stroke="#94a3b8" tickLine={false} axisLine={false} />
                        <Tooltip 
                          contentStyle={{ backgroundColor: '#0A192F', borderColor: '#ffffff20', color: '#fff' }}
                        />
                        <Area type="monotone" dataKey="score" stroke="#D4AF37" fillOpacity={1} fill="url(#colorScore)" strokeWidth={3} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Right Column: Skills & Achievements */}
            <div className="space-y-8">
              
              {/* Skill Radar (Simulated with Progress Bars) */}
              <Card className="bg-[#112240] border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-[#D4AF37] font-serif flex items-center gap-2">
                    <Brain className="w-5 h-5" /> Neural Competency
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {SKILL_MASTERY.map((skill) => (
                    <div key={skill.skill}>
                      <div className="flex justify-between mb-2 text-sm">
                        <span className="text-gray-300">{skill.skill}</span>
                        <span className="text-[#D4AF37] font-bold">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2 bg-[#0A192F]" />
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Recent Achievements */}
              <Card className="bg-[#112240] border-white/10 text-white">
                <CardHeader>
                  <CardTitle className="text-[#D4AF37] font-serif flex items-center gap-2">
                    <Award className="w-5 h-5" /> Recent Honors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex gap-4 items-start p-3 bg-[#0A192F]/50 rounded-lg border border-white/5">
                      <div className="p-2 bg-yellow-500/20 rounded text-yellow-500">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Master of Subjunctive</h4>
                        <p className="text-xs text-gray-400">Completed 50 advanced grammar modules with 95% accuracy.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-3 bg-[#0A192F]/50 rounded-lg border border-white/5">
                      <div className="p-2 bg-blue-500/20 rounded text-blue-500">
                        <Globe className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Cultural Diplomat</h4>
                        <p className="text-xs text-gray-400">Engaged in 10 hours of history-focused conversation.</p>
                      </div>
                    </div>
                    <div className="flex gap-4 items-start p-3 bg-[#0A192F]/50 rounded-lg border border-white/5">
                      <div className="p-2 bg-purple-500/20 rounded text-purple-500">
                        <Zap className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-sm">Speed Learner</h4>
                        <p className="text-xs text-gray-400">Maintained a 7-day streak with &gt;1 hour daily practice.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>
          </div>

        </div>
      </div>
    </Layout>
  );
}
