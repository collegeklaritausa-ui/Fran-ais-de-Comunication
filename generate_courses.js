import fs from 'fs';
import path from 'path';

const levels = ['A2', 'B1', 'B2', 'C1', 'C2'];
const topics = [
  'Business French', 'French Literature', 'Gastronomy', 'History of Art', 
  'International Relations', 'Science & Technology', 'Cinema', 'Philosophy',
  'Medical French', 'Legal French', 'Tourism', 'Fashion', 'Architecture',
  'Diplomacy', 'Enology', 'Cybersecurity', 'Space Exploration', 'Quantum Physics',
  'Existentialism', 'Impressionism', 'Haute Couture', 'Sustainable Energy'
];
const adjectives = [
  'Advanced', 'Essential', 'Comprehensive', 'Mastering', 'Introduction to',
  'Expert', 'Practical', 'Contemporary', 'Classical', 'Intensive',
  'Strategic', 'Analytical', 'Creative', 'Technical', 'Professional'
];

const generateCourses = (count) => {
  const courses = [];
  for (let i = 1; i <= count; i++) {
    const level = levels[Math.floor(Math.random() * levels.length)];
    const topic = topics[Math.floor(Math.random() * topics.length)];
    const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    
    // Enhanced metadata for Omega-Genesis Protocol
    const xp = Math.floor(Math.random() * 500 + 100);
    const difficulty = level === 'C2' ? 'Expert' : level === 'C1' ? 'Advanced' : level.startsWith('B') ? 'Intermediate' : 'Beginner';
    
    courses.push({
      id: i,
      title: `${adjective} ${topic}`,
      level: level,
      difficulty: difficulty,
      description: `A comprehensive ${level} level module designed to master ${topic.toLowerCase()}. Includes interactive simulations and AGI-driven assessments.`,
      duration: `${Math.floor(Math.random() * 20 + 5)} hours`,
      modules: Math.floor(Math.random() * 15 + 5),
      students: Math.floor(Math.random() * 10000 + 500),
      rating: (Math.random() * 1.0 + 4.0).toFixed(1), // High quality only
      xp: xp,
      tags: [topic, level, difficulty, 'Interactive']
    });
  }
  return courses;
};

// OMEGA-GENESIS TARGET: 10,000 LESSONS
const TARGET_COUNT = 10000;
console.log(`Initiating Omega-Genesis Protocol: Generating ${TARGET_COUNT} lessons...`);

const courses = generateCourses(TARGET_COUNT);
const outputPath = path.join(process.cwd(), 'client', 'src', 'data', 'courses.json');

// Ensure directory exists
const dir = path.dirname(outputPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

fs.writeFileSync(outputPath, JSON.stringify(courses, null, 2));
console.log(`OMEGA-GENESIS COMPLETE: ${courses.length} lessons injected at ${outputPath}`);
