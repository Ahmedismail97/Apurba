# Text Analyzer

A modern React application that analyzes text and provides various metrics such as word count, character count, sentence count, and more. Built with React, TypeScript, and Tailwind CSS.

![Text Analyzer Screenshot](https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1200)

## Features

- 📊 Real-time text analysis
- 📝 Word count and character count
- 📈 Sentence and paragraph count
- 🔍 Most frequent word detection
- 📏 Longest word identification
- 💻 Responsive design
- ⚡ High performance
- 🎨 Modern UI with Tailwind CSS

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (for build tooling)

## Project Structure

```
src/
├── components/          # React components
│   ├── TextInput.tsx   # Text input component
│   └── AnalysisResults.tsx # Results display component
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── textAnalyzer.ts # Text analysis logic
└── App.tsx            # Main application component
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd text-analyzer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Development Approach

### Architecture

The application follows a component-based architecture with clear separation of concerns:

1. **Components**: 
   - `TextInput`: Handles user input with proper event handling
   - `AnalysisResults`: Displays analysis metrics in a grid layout

2. **Utils**:
   - `textAnalyzer`: Contains core text analysis logic
   - Implements efficient algorithms for text processing

3. **Types**:
   - Clear TypeScript interfaces for type safety
   - Shared types between components

### Performance Considerations

- Memoized callbacks for event handlers
- Efficient text processing algorithms
- Responsive design for all screen sizes
- Optimized rendering with React's virtual DOM

### Code Quality

- TypeScript for type safety
- ESLint for code quality
- Modular component structure
- Clear separation of concerns
- Consistent code style

## Building for Production

To create a production build:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.