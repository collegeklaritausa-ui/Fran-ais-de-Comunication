import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import GrandWelcome from "./components/GrandWelcome";
import Classroom from "./pages/Classroom";
import Dashboard from "./pages/Dashboard";
import Avatars from "./pages/Avatars";
import MultimediaStudio from "./pages/MultimediaStudio";
import CourseExplorer from "./pages/CourseExplorer";
import AvatarExperience from "./pages/AvatarExperience";
import PronunciationLab from "./pages/PronunciationLab";

function Router() {
  return (
    <>
      <GrandWelcome />
      <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/classroom"} component={Classroom} />
      <Route path={"/dashboard"} component={Dashboard} />
      <Route path={"/avatars"} component={Avatars} />
      <Route path={"/multimedia"} component={MultimediaStudio} />
      <Route path={"/courses"} component={CourseExplorer} />
      <Route path={"/avatars-experience"} component={AvatarExperience} />
      <Route path={"/pronunciation"} component={PronunciationLab} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
      </Switch>
    </>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
