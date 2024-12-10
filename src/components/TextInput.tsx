import React from 'react';

interface TextInputProps {
  value: string;
  onChange: (text: string) => void;
}

export const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <div className="w-full">
      <textarea
        className="w-full h-64 p-4 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
        placeholder="Enter or paste your text here..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
};