import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuItem, 
  NavigationMenuLink, 
  NavigationMenuList, 
  navigationMenuTriggerStyle 
} from "@/components/ui/navigation-menu";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-background font-sans">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-20 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/">
              <a className="flex items-center gap-2">
                <span className="font-serif text-2xl font-bold text-primary tracking-tight">Prize2Pride</span>
              </a>
            </Link>
            
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/courses">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Courses
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/avatars">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Avatars
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/community">
                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                      Community
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground hover:text-primary">
              Log in
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20">
              Start Learning
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30 py-12">
        <div className="container grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold text-primary">Prize2Pride</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The premier destination for mastering French, from A2 to C2. 
              Experience the elegance of language learning.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4 text-foreground">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/courses">All Courses</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/methodology">Methodology</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/community">Community</Link></li>
              <li><Link href="/help">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4 text-foreground">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          © 2024 Prize2Pride. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
