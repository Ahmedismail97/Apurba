export interface TextAnalysis {
  wordCount: number;
  charCount: number;
  charCountNoSpaces: number;
  sentenceCount: number;
  paragraphCount: number;
  mostFrequentWord: {
    word: string;
    count: number;
  };
  longestWord: string;
}

export interface TextAnalyzerProps {
  text: string;
  analysis: TextAnalysis;
}