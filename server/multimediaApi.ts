// PRIZE2PRIDE MULTIMEDIA GENERATION API
// Server-side API endpoints for AI-powered content generation

import { Router, Request, Response } from 'express';
import OpenAI from 'openai';

const router = Router();

// Initialize OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});

// ============================================================================
// IMAGE GENERATION ENDPOINT
// ============================================================================

interface ImageGenerationRequest {
  prompt: string;
  style?: string;
  size?: '1024x1024' | '1792x1024' | '1024x1792';
  quality?: 'standard' | 'hd';
}

router.post('/generate/image', async (req: Request, res: Response) => {
  try {
    const { prompt, style = 'hyper-realistic', size = '1024x1024', quality = 'hd' } = req.body as ImageGenerationRequest;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    // Style-enhanced prompts for French learning context
    const styleEnhancements: Record<string, string> = {
      'hyper-realistic': 'ultra-realistic, 8K resolution, photorealistic, stunning detail, professional photography',
      'cinematic': 'cinematic lighting, film grain, dramatic atmosphere, movie-quality, widescreen aspect',
      'artistic': 'artistic interpretation, impressionist style, beautiful brushstrokes, museum quality',
      'educational': 'clear educational illustration, infographic style, labeled elements, professional',
      'cultural': 'authentic French culture, traditional elements, cultural significance, heritage',
      'vintage-french': 'vintage French aesthetic, Belle Époque style, nostalgic, sepia tones, classic Parisian',
      'modern-paris': 'modern Paris, contemporary French life, urban chic, stylish, metropolitan',
      'provence': 'Provence countryside, lavender fields, rustic charm, golden hour, pastoral beauty'
    };

    const enhancedPrompt = `${prompt}. Style: ${styleEnhancements[style] || styleEnhancements['hyper-realistic']}. 
    Context: French language learning, educational, culturally authentic.`;

    // Generate image using DALL-E 3
    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: enhancedPrompt,
      n: 1,
      size: size,
      quality: quality,
      response_format: 'url'
    });

    const imageUrl = response.data[0]?.url;
    const revisedPrompt = response.data[0]?.revised_prompt;

    res.json({
      success: true,
      data: {
        url: imageUrl,
        prompt: enhancedPrompt,
        revisedPrompt,
        style,
        size,
        quality,
        timestamp: Date.now()
      }
    });

  } catch (error: any) {
    console.error('Image generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate image',
      message: error.message 
    });
  }
});

// ============================================================================
// AUDIO SYNTHESIS ENDPOINT (Text-to-Speech)
// ============================================================================

interface AudioSynthesisRequest {
  text: string;
  voice?: 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer';
  speed?: number;
}

router.post('/generate/audio', async (req: Request, res: Response) => {
  try {
    const { text, voice = 'nova', speed = 1.0 } = req.body as AudioSynthesisRequest;

    if (!text) {
      return res.status(400).json({ error: 'Text is required' });
    }

    // Voice mapping for French accents
    const voiceMapping: Record<string, 'alloy' | 'echo' | 'fable' | 'onyx' | 'nova' | 'shimmer'> = {
      'native-parisian': 'nova',
      'southern-french': 'shimmer',
      'belgian-french': 'echo',
      'canadian-french': 'fable',
      'formal-academic': 'onyx',
      'casual-conversational': 'alloy'
    };

    const selectedVoice = voiceMapping[voice] || voice;

    // Generate speech using OpenAI TTS
    const mp3Response = await openai.audio.speech.create({
      model: 'tts-1-hd',
      voice: selectedVoice,
      input: text,
      speed: speed
    });

    // Convert to buffer and send
    const buffer = Buffer.from(await mp3Response.arrayBuffer());
    
    res.set({
      'Content-Type': 'audio/mpeg',
      'Content-Length': buffer.length,
      'Content-Disposition': 'inline; filename="speech.mp3"'
    });
    
    res.send(buffer);

  } catch (error: any) {
    console.error('Audio synthesis error:', error);
    res.status(500).json({ 
      error: 'Failed to synthesize audio',
      message: error.message 
    });
  }
});

// ============================================================================
// PRONUNCIATION GUIDE ENDPOINT
// ============================================================================

interface PronunciationRequest {
  word: string;
  includePhonetics?: boolean;
}

router.post('/generate/pronunciation', async (req: Request, res: Response) => {
  try {
    const { word, includePhonetics = true } = req.body as PronunciationRequest;

    if (!word) {
      return res.status(400).json({ error: 'Word is required' });
    }

    // Generate pronunciation audio
    const mp3Response = await openai.audio.speech.create({
      model: 'tts-1-hd',
      voice: 'nova',
      input: word,
      speed: 0.8 // Slower for pronunciation practice
    });

    const audioBuffer = Buffer.from(await mp3Response.arrayBuffer());

    // Generate phonetic analysis using GPT
    let phonetics = null;
    let tips = [];

    if (includePhonetics) {
      const phoneticResponse = await openai.chat.completions.create({
        model: 'gpt-4.1-mini',
        messages: [
          {
            role: 'system',
            content: 'You are a French pronunciation expert. Provide IPA phonetic transcription and pronunciation tips.'
          },
          {
            role: 'user',
            content: `Provide the IPA phonetic transcription and 3 pronunciation tips for the French word: "${word}". 
            Format your response as JSON: { "phonetics": "/...IPA.../", "tips": ["tip1", "tip2", "tip3"] }`
          }
        ],
        response_format: { type: 'json_object' }
      });

      const phoneticData = JSON.parse(phoneticResponse.choices[0]?.message?.content || '{}');
      phonetics = phoneticData.phonetics;
      tips = phoneticData.tips || [];
    }

    res.json({
      success: true,
      data: {
        word,
        audioBase64: audioBuffer.toString('base64'),
        phonetics,
        tips,
        timestamp: Date.now()
      }
    });

  } catch (error: any) {
    console.error('Pronunciation generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate pronunciation',
      message: error.message 
    });
  }
});

// ============================================================================
// LESSON CONTENT GENERATION ENDPOINT
// ============================================================================

interface LessonGenerationRequest {
  topic: string;
  level: 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  type: 'grammar' | 'vocabulary' | 'conversation' | 'culture';
}

router.post('/generate/lesson', async (req: Request, res: Response) => {
  try {
    const { topic, level, type } = req.body as LessonGenerationRequest;

    if (!topic || !level || !type) {
      return res.status(400).json({ error: 'Topic, level, and type are required' });
    }

    const levelDescriptions: Record<string, string> = {
      'A2': 'elementary level, basic vocabulary, simple sentences',
      'B1': 'intermediate level, common expressions, everyday situations',
      'B2': 'upper-intermediate level, complex sentences, abstract topics',
      'C1': 'advanced level, nuanced expressions, professional contexts',
      'C2': 'mastery level, native-like fluency, sophisticated language'
    };

    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: `You are an expert French language teacher creating lessons for ${levelDescriptions[level]}. 
          Generate comprehensive, engaging content with examples, exercises, and cultural context.`
        },
        {
          role: 'user',
          content: `Create a ${type} lesson about "${topic}" for ${level} level French learners.
          
          Include:
          1. Introduction (in French and English)
          2. Key concepts/vocabulary (10-15 items with translations)
          3. Grammar points (if applicable)
          4. Example sentences (5-10)
          5. Practice exercises (3-5)
          6. Cultural notes
          7. Summary
          
          Format as JSON with these sections.`
        }
      ],
      response_format: { type: 'json_object' },
      max_tokens: 4000
    });

    const lessonContent = JSON.parse(response.choices[0]?.message?.content || '{}');

    res.json({
      success: true,
      data: {
        topic,
        level,
        type,
        content: lessonContent,
        timestamp: Date.now()
      }
    });

  } catch (error: any) {
    console.error('Lesson generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate lesson',
      message: error.message 
    });
  }
});

// ============================================================================
// CONVERSATION SIMULATION ENDPOINT
// ============================================================================

interface ConversationRequest {
  scenario: string;
  level: 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  userMessage: string;
  conversationHistory?: { role: 'user' | 'assistant'; content: string }[];
}

router.post('/generate/conversation', async (req: Request, res: Response) => {
  try {
    const { scenario, level, userMessage, conversationHistory = [] } = req.body as ConversationRequest;

    if (!scenario || !level || !userMessage) {
      return res.status(400).json({ error: 'Scenario, level, and userMessage are required' });
    }

    const levelInstructions: Record<string, string> = {
      'A2': 'Use simple vocabulary and short sentences. Correct major errors gently.',
      'B1': 'Use everyday expressions. Provide helpful corrections and suggestions.',
      'B2': 'Use more complex structures. Offer nuanced feedback on language use.',
      'C1': 'Use sophisticated language. Focus on style and register.',
      'C2': 'Use native-level French. Discuss nuances and cultural subtleties.'
    };

    const messages = [
      {
        role: 'system' as const,
        content: `You are a friendly French conversation partner in this scenario: "${scenario}".
        The learner is at ${level} level. ${levelInstructions[level]}
        
        Respond naturally in French, then provide:
        1. Your response in French
        2. English translation
        3. Any corrections or suggestions for the learner's message
        4. A follow-up question to continue the conversation
        
        Format as JSON: { "response": "...", "translation": "...", "corrections": [...], "followUp": "..." }`
      },
      ...conversationHistory.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content
      })),
      {
        role: 'user' as const,
        content: userMessage
      }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages,
      response_format: { type: 'json_object' }
    });

    const conversationResponse = JSON.parse(response.choices[0]?.message?.content || '{}');

    res.json({
      success: true,
      data: {
        ...conversationResponse,
        scenario,
        level,
        timestamp: Date.now()
      }
    });

  } catch (error: any) {
    console.error('Conversation generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate conversation',
      message: error.message 
    });
  }
});

// ============================================================================
// GRAMMAR EXPLANATION ENDPOINT
// ============================================================================

interface GrammarRequest {
  concept: string;
  level: 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
}

router.post('/generate/grammar', async (req: Request, res: Response) => {
  try {
    const { concept, level } = req.body as GrammarRequest;

    if (!concept || !level) {
      return res.status(400).json({ error: 'Concept and level are required' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: `You are a French grammar expert. Explain concepts clearly for ${level} level learners.`
        },
        {
          role: 'user',
          content: `Explain the French grammar concept: "${concept}" for ${level} level.
          
          Include:
          1. Clear explanation in English
          2. The rule in French
          3. Formation/structure
          4. 10 example sentences with translations
          5. Common mistakes to avoid
          6. Practice exercises (5)
          7. Exceptions and special cases
          
          Format as JSON.`
        }
      ],
      response_format: { type: 'json_object' },
      max_tokens: 3000
    });

    const grammarContent = JSON.parse(response.choices[0]?.message?.content || '{}');

    res.json({
      success: true,
      data: {
        concept,
        level,
        content: grammarContent,
        timestamp: Date.now()
      }
    });

  } catch (error: any) {
    console.error('Grammar generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate grammar explanation',
      message: error.message 
    });
  }
});

// ============================================================================
// VOCABULARY FLASHCARDS ENDPOINT
// ============================================================================

interface FlashcardsRequest {
  theme: string;
  level: 'A2' | 'B1' | 'B2' | 'C1' | 'C2';
  count?: number;
}

router.post('/generate/flashcards', async (req: Request, res: Response) => {
  try {
    const { theme, level, count = 20 } = req.body as FlashcardsRequest;

    if (!theme || !level) {
      return res.status(400).json({ error: 'Theme and level are required' });
    }

    const response = await openai.chat.completions.create({
      model: 'gpt-4.1-mini',
      messages: [
        {
          role: 'system',
          content: `You are a French vocabulary expert creating flashcards for ${level} level learners.`
        },
        {
          role: 'user',
          content: `Create ${count} vocabulary flashcards for the theme: "${theme}" at ${level} level.
          
          For each word include:
          1. French word
          2. English translation
          3. Part of speech
          4. Gender (if noun)
          5. IPA pronunciation
          6. Example sentence in French
          7. Example translation
          8. Memory tip
          
          Format as JSON array: { "flashcards": [...] }`
        }
      ],
      response_format: { type: 'json_object' },
      max_tokens: 4000
    });

    const flashcardsContent = JSON.parse(response.choices[0]?.message?.content || '{}');

    res.json({
      success: true,
      data: {
        theme,
        level,
        count: flashcardsContent.flashcards?.length || 0,
        flashcards: flashcardsContent.flashcards || [],
        timestamp: Date.now()
      }
    });

  } catch (error: any) {
    console.error('Flashcards generation error:', error);
    res.status(500).json({ 
      error: 'Failed to generate flashcards',
      message: error.message 
    });
  }
});

export default router;
