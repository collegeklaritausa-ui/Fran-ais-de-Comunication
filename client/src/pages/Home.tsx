import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Layout from "@/components/Layout";
import { ArrowRight, Star, Users, Award } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Paris at Twilight" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-background/90 mix-blend-multiply" />
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-20">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center rounded-full border border-secondary/30 bg-secondary/10 px-3 py-1 text-sm text-secondary backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-secondary mr-2 animate-pulse"></span>
              Now Available: C2 Mastery Level
            </div>
            
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight tracking-tight drop-shadow-lg">
              Apprendre le français. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                Rêver en grand.
              </span>
            </h1>
            
            <p className="text-xl text-gray-200 max-w-2xl mx-auto lg:mx-0 font-light leading-relaxed">
              Join the most prestigious autonomous platform for French mastery. 
              From A2 foundations to C2 fluency, guided by interactive avatars.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 text-lg px-8 py-6 rounded-full shadow-xl shadow-secondary/20 transition-all hover:scale-105">
                Start Your Journey
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-6 rounded-full backdrop-blur-sm">
                Explore Courses
              </Button>
            </div>
          </div>

          {/* Hero Avatar/Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-secondary/20 to-transparent rounded-full blur-3xl animate-pulse" />
            <img 
              src="/assets/avatars/prize2pride_poster_01_main_studio.png" 
              alt="Interactive Avatar Host" 
              className="relative z-10 w-full max-w-md mx-auto rounded-2xl shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-700"
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Users, label: "Active Learners", value: "50,000+" },
              { icon: Star, label: "Course Rating", value: "4.9/5" },
              { icon: Award, label: "Certified Levels", value: "A2 - C2" },
            ].map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl bg-muted/30 border border-border/50 hover:border-secondary/50 transition-colors">
                <stat.icon className="w-8 h-8 text-secondary mb-4" />
                <h3 className="text-3xl font-serif font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-32 bg-muted/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-serif font-bold text-primary mb-4">Curated Learning Paths</h2>
            <p className="text-lg text-muted-foreground">
              Meticulously designed courses that adapt to your pace and style.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                level: "A2", 
                title: "Foundations of Expression", 
                desc: "Build confident conversational skills for daily life in France.",
                image: "/assets/avatars/poster_010.png"
              },
              { 
                level: "B2", 
                title: "Professional Fluency", 
                desc: "Master complex grammar and vocabulary for business and academic settings.",
                image: "/assets/avatars/poster_025.png"
              },
              { 
                level: "C2", 
                title: "Literary Mastery", 
                desc: "Analyze classic literature and express nuanced abstract concepts.",
                image: "/assets/avatars/poster_045.png"
              },
            ].map((course, i) => (
              <Card key={i} className="group overflow-hidden border-border/50 hover:shadow-2xl hover:shadow-primary/5 transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 bg-primary/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur text-primary px-3 py-1 rounded-full text-sm font-bold shadow-sm">
                    Level {course.level}
                  </div>
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-serif font-bold text-primary mb-3 group-hover:text-secondary transition-colors">
                    {course.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {course.desc}
                  </p>
                  <Link href={`/course/${course.level}`}>
                    <a className="inline-flex items-center text-primary font-semibold hover:text-secondary transition-colors group-hover:translate-x-2 duration-300">
                      View Syllabus <ArrowRight className="ml-2 w-4 h-4" />
                    </a>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
