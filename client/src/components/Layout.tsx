import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  BookOpen, 
  Users, 
  Image, 
  GraduationCap,
  Menu,
  X,
  Sparkles,
  Globe,
  Award,
  Settings,
  Crown,
  Zap,
  BarChart3
} from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const NAV_ITEMS = [
  { path: '/', label: 'Home', icon: Home },
  { path: '/courses', label: 'Courses', icon: BookOpen },
  { path: '/classroom', label: 'Classroom', icon: GraduationCap },
  { path: '/avatars-experience', label: 'AI Tutors', icon: Users },
  { path: '/multimedia', label: 'Media Studio', icon: Image },
  { path: '/dashboard', label: 'Dashboard', icon: BarChart3 },
];

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A192F]">
      {/* Top Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A192F]/95 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/">
              <div className="flex items-center gap-3 cursor-pointer group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-yellow-500 flex items-center justify-center shadow-lg shadow-[#D4AF37]/20 group-hover:shadow-[#D4AF37]/40 transition-shadow">
                  <Crown className="w-6 h-6 text-[#0A192F]" />
                </div>
                <div>
                  <span className="font-serif text-xl font-bold text-white">Prize2Pride</span>
                  <div className="flex items-center gap-1">
                    <Badge variant="outline" className="text-[8px] border-[#D4AF37]/30 text-[#D4AF37] px-1 py-0">
                      OMEGA
                    </Badge>
                  </div>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {NAV_ITEMS.map(item => {
                const Icon = item.icon;
                const isActive = location === item.path;
                
                return (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant="ghost"
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        isActive 
                          ? 'bg-[#D4AF37]/10 text-[#D4AF37]' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
            </div>

            {/* Right Side Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* XP Badge */}
              <div className="flex items-center gap-2 bg-[#D4AF37]/10 px-3 py-1.5 rounded-full border border-[#D4AF37]/30">
                <Zap className="w-4 h-4 text-[#D4AF37]" />
                <span className="text-sm font-bold text-[#D4AF37]">2,450 XP</span>
              </div>

              {/* Streak */}
              <div className="flex items-center gap-2 bg-orange-500/10 px-3 py-1.5 rounded-full border border-orange-500/30">
                <span className="text-lg">🔥</span>
                <span className="text-sm font-bold text-orange-400">7</span>
              </div>

              {/* Settings */}
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                <Settings className="w-5 h-5" />
              </Button>

              {/* User Avatar */}
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-sm cursor-pointer hover:ring-2 hover:ring-[#D4AF37] transition-all">
                U
              </div>
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-[#112240] border-t border-white/10">
            <div className="container mx-auto px-4 py-4 space-y-2">
              {NAV_ITEMS.map(item => {
                const Icon = item.icon;
                const isActive = location === item.path;
                
                return (
                  <Link key={item.path} href={item.path}>
                    <Button
                      variant="ghost"
                      className={`w-full flex items-center justify-start gap-3 px-4 py-3 rounded-lg ${
                        isActive 
                          ? 'bg-[#D4AF37]/10 text-[#D4AF37]' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-medium">{item.label}</span>
                    </Button>
                  </Link>
                );
              })}
              
              {/* Mobile Stats */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="flex-1 flex items-center justify-center gap-2 bg-[#D4AF37]/10 px-3 py-2 rounded-lg">
                  <Zap className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm font-bold text-[#D4AF37]">2,450 XP</span>
                </div>
                <div className="flex-1 flex items-center justify-center gap-2 bg-orange-500/10 px-3 py-2 rounded-lg">
                  <span className="text-lg">🔥</span>
                  <span className="text-sm font-bold text-orange-400">7 Day Streak</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#0A192F] border-t border-white/10 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4AF37] to-yellow-500 flex items-center justify-center">
                  <Crown className="w-6 h-6 text-[#0A192F]" />
                </div>
                <span className="font-serif text-xl font-bold text-white">Prize2Pride</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                The world's most advanced AI-powered French language learning platform. 
                From A2 to C2, master French with hyper-realistic multimedia content.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-bold mb-4">Learn</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/courses" className="hover:text-[#D4AF37] transition-colors">All Courses</a></li>
                <li><a href="/classroom" className="hover:text-[#D4AF37] transition-colors">Classroom</a></li>
                <li><a href="/avatars-experience" className="hover:text-[#D4AF37] transition-colors">AI Tutors</a></li>
                <li><a href="/multimedia" className="hover:text-[#D4AF37] transition-colors">Media Studio</a></li>
              </ul>
            </div>

            {/* Levels */}
            <div>
              <h4 className="text-white font-bold mb-4">Levels</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="/courses?level=A2" className="hover:text-green-400 transition-colors">A2 - Elementary</a></li>
                <li><a href="/courses?level=B1" className="hover:text-blue-400 transition-colors">B1 - Intermediate</a></li>
                <li><a href="/courses?level=B2" className="hover:text-purple-400 transition-colors">B2 - Upper-Intermediate</a></li>
                <li><a href="/courses?level=C1" className="hover:text-orange-400 transition-colors">C1 - Advanced</a></li>
                <li><a href="/courses?level=C2" className="hover:text-[#D4AF37] transition-colors">C2 - Mastery</a></li>
              </ul>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-white font-bold mb-4">Features</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#D4AF37]" />
                  AI-Generated Content
                </li>
                <li className="flex items-center gap-2">
                  <Globe className="w-4 h-4 text-purple-400" />
                  Native Speaker Audio
                </li>
                <li className="flex items-center gap-2">
                  <Image className="w-4 h-4 text-blue-400" />
                  Hyper-Realistic Visuals
                </li>
                <li className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-green-400" />
                  Certifications
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-500">
              © 2024 Prize2Pride. All rights reserved. Powered by OMEGA AI.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
