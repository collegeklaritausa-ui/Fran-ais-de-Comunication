# 🇫🇷 Prize2Pride - AI-Powered French Learning Platform

<div align="center">

![Prize2Pride Logo](https://img.shields.io/badge/Prize2Pride-OMEGA-gold?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNEMkFGMzciIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIj48cGF0aCBkPSJNMTIgNmwtMy4zIDYuNmgtMy4zbDMuMyA2LjZoNi42bDMuMy02LjZoLTMuM3oiLz48L3N2Zz4=)

**The World's Most Advanced AI-Powered French Language Learning Platform**

*From A2 to C2 - Master French with Hyper-Realistic Multimedia Content*

[![React](https://img.shields.io/badge/React-18.x-61DAFB?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-7.x-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind-3.x-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![OpenAI](https://img.shields.io/badge/OpenAI-API-412991?style=flat-square&logo=openai)](https://openai.com/)

</div>

---

## 🌟 Overview

Prize2Pride is a revolutionary French language learning platform that combines cutting-edge AI technology with comprehensive course content. Our platform offers over **1,000 interactive courses** spanning all CEFR levels from A2 to C2, featuring:

- **AI-Powered Multimedia Generation** - Hyper-realistic images, natural voice synthesis, and dynamic video content
- **Interactive AI Tutors** - Converse with AI-powered native French speakers
- **Pronunciation Lab** - Real-time speech recognition and feedback
- **Gamified Learning** - XP system, achievements, streaks, and leaderboards

---

## ✨ Features

### 🎨 AI Multimedia Studio
Generate stunning, hyper-realistic content for your learning journey:
- **Image Generation** - Cultural scenes, vocabulary illustrations, grammar diagrams
- **Voice Synthesis** - Native French pronunciation with multiple accents (Parisian, Southern, Belgian, Canadian)
- **Video Content** - Animated grammar demonstrations and cultural documentaries

### 📚 Comprehensive Course Library
Over 1,000 courses organized by level and category:

| Level | Name | Courses | Hours |
|-------|------|---------|-------|
| A2 | Elementary | 200+ | 80h |
| B1 | Intermediate | 250+ | 120h |
| B2 | Upper-Intermediate | 220+ | 150h |
| C1 | Advanced | 180+ | 180h |
| C2 | Mastery | 150+ | 200h |

### 🗣️ AI French Tutors
Meet your personalized AI tutors:
- **Professor Marie Dubois** - Grammar & Academic French (Parisian)
- **Jean-Pierre Laurent** - Conversation & Culture (Native Parisian)
- **Claire Moreau** - Business French (International)
- **Antoine Beaumont** - Literature & Writing (Southern French)
- **Sophie Tremblay** - Pronunciation & Phonetics (Canadian French)
- **Marc Van den Berg** - Media & Contemporary French (Belgian French)

### 🎤 Pronunciation Lab
Perfect your French accent with:
- Real-time speech recognition
- IPA phonetic transcriptions
- Pronunciation tips and feedback
- Progress tracking

### 📊 Learning Dashboard
Track your progress with:
- XP and level system
- Daily streaks
- Achievement badges
- Weekly activity charts
- Skill mastery tracking

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) or npm
- OpenAI API key (for AI features)

### Installation

```bash
# Clone the repository
git clone https://github.com/collegeklaritausa-ui/Fran-ais-de-Comunication.git

# Navigate to the project
cd Fran-ais-de-Comunication

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env
# Add your OPENAI_API_KEY to .env

# Start development server
pnpm dev
```

### Build for Production

```bash
pnpm build
pnpm start
```

---

## 📁 Project Structure

```
Fran-ais-de-Comunication/
├── client/
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   ├── pages/           # Page components
│   │   │   ├── Home.tsx
│   │   │   ├── CourseExplorer.tsx
│   │   │   ├── MultimediaStudio.tsx
│   │   │   ├── AvatarExperience.tsx
│   │   │   ├── PronunciationLab.tsx
│   │   │   ├── Classroom.tsx
│   │   │   └── Dashboard.tsx
│   │   ├── data/            # Course data and content
│   │   ├── lib/             # Utilities and engines
│   │   └── contexts/        # React contexts
│   └── public/
│       └── assets/          # Images, avatars, etc.
├── server/
│   ├── index.ts             # Express server
│   └── multimediaApi.ts     # AI generation endpoints
└── package.json
```

---

## 🔌 API Endpoints

### Multimedia Generation

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/generate/image` | POST | Generate AI images |
| `/api/generate/audio` | POST | Text-to-speech synthesis |
| `/api/generate/pronunciation` | POST | Pronunciation guide with audio |
| `/api/generate/lesson` | POST | Generate lesson content |
| `/api/generate/conversation` | POST | AI conversation simulation |
| `/api/generate/grammar` | POST | Grammar explanations |
| `/api/generate/flashcards` | POST | Vocabulary flashcards |

### Example Request

```javascript
// Generate an image
const response = await fetch('/api/generate/image', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    prompt: 'A cozy Parisian café with croissants',
    style: 'hyper-realistic',
    size: '1024x1024'
  })
});
```

---

## 🎯 Course Categories

- **Grammar** - Verb tenses, moods, sentence structure
- **Vocabulary** - Thematic word lists, flashcards
- **Conversation** - Dialogues, debates, presentations
- **Culture** - History, cinema, literature, philosophy
- **Pronunciation** - Phonetics, liaison, accent reduction
- **Writing** - Academic, business, creative writing
- **Listening** - Comprehension exercises
- **Reading** - Texts at all levels

---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **TailwindCSS** - Styling
- **Radix UI** - Accessible components
- **Recharts** - Data visualization
- **Wouter** - Routing

### Backend
- **Express** - Server framework
- **OpenAI API** - AI generation
- **Node.js** - Runtime

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guide](CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- All renowned French Academies for educational content authorization
- OpenAI for AI capabilities
- The global French learning community

---

<div align="center">

**Made with ❤️ for French learners worldwide**

[Website](https://prize2pride.com) • [Documentation](https://docs.prize2pride.com) • [Support](https://help.prize2pride.com)

</div>
