import Layout from "@/components/Layout";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";

// Generate a list of avatar images based on the file naming convention we saw
const AVATARS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  src: `/assets/avatars/poster_${String(i + 10).padStart(3, '0')}.png`,
  name: `Avatar Host ${i + 1}`,
  role: i % 3 === 0 ? "Grammar Specialist" : i % 3 === 1 ? "Conversation Coach" : "Cultural Guide"
}));

export default function Avatars() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <Layout>
      <div className="bg-muted/30 py-20">
        <div className="container text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-serif font-bold text-primary mb-6">Meet Your Hosts</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Our diverse team of AI-powered avatars is here to guide you through every step of your French language journey. 
            Each host brings a unique specialization and personality to your learning experience.
          </p>
        </div>

        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {AVATARS.map((avatar) => (
              <Card 
                key={avatar.id}
                className="group relative overflow-hidden border-none bg-transparent"
                onMouseEnter={() => setHoveredId(avatar.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20">
                  <img 
                    src={avatar.src} 
                    alt={avatar.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-secondary text-sm font-bold tracking-wider uppercase mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                      {avatar.role}
                    </p>
                    <h3 className="text-2xl font-serif font-bold text-white">
                      {avatar.name}
                    </h3>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
