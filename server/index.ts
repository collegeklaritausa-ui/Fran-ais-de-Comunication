import express from "express";
import { createServer } from "http";
import path from "path";
import { fileURLToPath } from "url";
import multimediaApi from "./multimediaApi.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const server = createServer(app);

  // Parse JSON bodies
  app.use(express.json());

  // CORS for development
  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    if (req.method === 'OPTIONS') {
      return res.sendStatus(200);
    }
    next();
  });

  // API routes for multimedia generation
  app.use('/api', multimediaApi);

  // Health check endpoint
  app.get('/api/health', (_req, res) => {
    res.json({ 
      status: 'healthy', 
      platform: 'Prize2Pride',
      version: '2.0.0',
      features: [
        'AI Image Generation',
        'Text-to-Speech',
        'Lesson Generation',
        'Conversation Simulation',
        'Grammar Explanations',
        'Vocabulary Flashcards'
      ],
      timestamp: new Date().toISOString()
    });
  });

  // Course statistics endpoint
  app.get('/api/stats', (_req, res) => {
    res.json({
      totalCourses: 1000,
      totalLearningHours: 2500,
      totalExercises: 50000,
      levels: ['A2', 'B1', 'B2', 'C1', 'C2'],
      categories: 20,
      activeUsers: 125000,
      completionRate: 0.78
    });
  });

  // Serve static files from dist/public in production
  const staticPath =
    process.env.NODE_ENV === "production"
      ? path.resolve(__dirname, "public")
      : path.resolve(__dirname, "..", "dist", "public");

  app.use(express.static(staticPath));

  // Handle client-side routing - serve index.html for all routes
  app.get("*", (_req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
  });

  const port = process.env.PORT || 3000;

  server.listen(port, () => {
    console.log(`\n🇫🇷 Prize2Pride Server Started!`);
    console.log(`🚀 Running on http://localhost:${port}/`);
    console.log(`🧠 AI Multimedia API: http://localhost:${port}/api`);
    console.log(`📚 Courses: 1000+ interactive French courses (A2-C2)`);
    console.log(`🎨 Features: Image, Audio, Video, Diagrams Generation\n`);
  });
}

startServer().catch(console.error);
