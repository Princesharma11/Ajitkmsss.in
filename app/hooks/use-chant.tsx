import { useState, useCallback, useRef, useEffect } from 'react';

/**
 * Hook that uses the Web Speech API (SpeechSynthesis) to chant Sanskrit text
 * with a slow, deep, resonant voice effect.
 */
export default function useChant() {
  const [chanting, setChanting] = useState(false);
  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const stopChant = useCallback(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.cancel();
    }
    setChanting(false);
  }, []);

  const startChant = useCallback((text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    // Pick a deep male voice if available
    const pickVoice = () => {
      const voices = window.speechSynthesis.getVoices();
      // Prefer Hindi or Sanskrit voices; fallback to deep English
      const hiVoice = voices.find((v) => v.lang.startsWith('hi'));
      const deepMale = voices.find(
        (v) => v.name.toLowerCase().includes('male') || v.name.toLowerCase().includes('deep')
      );
      return hiVoice ?? deepMale ?? voices[0] ?? null;
    };

    const voice = pickVoice();
    if (voice) utterance.voice = voice;

    // Normal Hindi reading pace
    utterance.rate = 0.85;
    utterance.pitch = 1.0;
    utterance.volume = 1;
    utterance.lang = 'hi-IN';

    utterance.onend = () => setChanting(false);
    utterance.onerror = () => setChanting(false);

    utteranceRef.current = utterance;
    window.speechSynthesis.speak(utterance);
    setChanting(true);
  }, []);

  // Some browsers need voices loaded async
  useEffect(() => {
    if (typeof window !== 'undefined' && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  return { chanting, startChant, stopChant };
}
