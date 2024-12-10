import React, { useState, useCallback } from 'react';
import { TextInput } from './components/TextInput';
import { AnalysisResults } from './components/AnalysisResults';
import { analyzeText } from './utils/textAnalyzer';
import { FileText } from 'lucide-react';

function App() {
  const [text, setText] = useState('');
  
  const handleTextChange = useCallback((newText: string) => {
    setText(newText);
  }, []);

  const analysis = analyzeText(text);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <FileText className="w-10 h-10 text-blue-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Text Analyzer</h1>
          <p className="text-gray-600">
            Analyze your text for word count, character count, and more
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <TextInput value={text} onChange={handleTextChange} />
          <AnalysisResults text={text} analysis={analysis} />
        </div>
      </div>
    </div>
  );
}

export default App;