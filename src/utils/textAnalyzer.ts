import { TextAnalysis } from "../types";

export const analyzeText = (text: string): TextAnalysis => {
  if (!text.trim()) {
    return {
      wordCount: 0,
      charCount: 0,
      charCountNoSpaces: 0,
      sentenceCount: 0,
      paragraphCount: 0,
      mostFrequentWord: { word: '', count: 0 },
      longestWord: '',
    };
  }

  // Word count and frequency analysis
  const words = text.toLowerCase().match(/\b[\w']+\b/g) || [];
  const wordFrequency = words.reduce((acc: { [key: string]: number }, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
  }, {});

  // Find most frequent word
  const mostFrequentWord = Object.entries(wordFrequency).reduce(
    (max, [word, count]) => (count > max.count ? { word, count } : max),
    { word: '', count: 0 }
  );

  // Find longest word
  const longestWord = words.reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ''
  );

  return {
    wordCount: words.length,
    charCount: text.length,
    charCountNoSpaces: text.replace(/\s/g, '').length,
    sentenceCount: (text.match(/[.!?]+/g) || []).length,
    paragraphCount: text.split(/\n\s*\n/).filter(Boolean).length,
    mostFrequentWord,
    longestWord,
  };
};