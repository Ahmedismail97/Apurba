import React from 'react';
import { TextAnalyzerProps } from '../types';
import { BarChart3, Type, Hash, AlignJustify, BookText, Repeat2, Ruler } from 'lucide-react';

export const AnalysisResults: React.FC<TextAnalyzerProps> = ({ text, analysis }) => {
  const metrics = [
    { icon: Type, label: 'Words', value: analysis.wordCount },
    { icon: Hash, label: 'Characters (with spaces)', value: analysis.charCount },
    { icon: Hash, label: 'Characters (no spaces)', value: analysis.charCountNoSpaces },
    { icon: AlignJustify, label: 'Sentences', value: analysis.sentenceCount },
    { icon: BookText, label: 'Paragraphs', value: analysis.paragraphCount },
    { icon: Repeat2, label: 'Most Frequent Word', value: `"${analysis.mostFrequentWord.word}" (${analysis.mostFrequentWord.count} times)` },
    { icon: Ruler, label: 'Longest Word', value: analysis.longestWord },
  ];

  if (!text.trim()) {
    return (
      <div className="text-center text-gray-500 mt-8">
        <BarChart3 className="w-12 h-12 mx-auto mb-4" />
        <p>Enter some text to see the analysis</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
      {metrics.map(({ icon: Icon, label, value }) => (
        <div key={label} className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
          <div className="flex items-center space-x-3 mb-2">
            <Icon className="w-5 h-5 text-blue-500" />
            <h3 className="font-medium text-gray-700">{label}</h3>
          </div>
          <p className="text-2xl font-semibold text-gray-900">{value}</p>
        </div>
      ))}
    </div>
  );
};