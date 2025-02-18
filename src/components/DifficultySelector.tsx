
import { Trophy } from "lucide-react";

const difficulties = [
  { level: "Easy", description: "Perfect for beginners", icon: "⚽" },
  { level: "Medium", description: "Test your knowledge", icon: "⚽⚽" },
  { level: "Hard", description: "For true soccer experts", icon: "⚽⚽⚽" },
];

interface DifficultySelectorProps {
  onSelect: (difficulty: string) => void;
}

const DifficultySelector = ({ onSelect }: DifficultySelectorProps) => {
  return (
    <div className="w-full max-w-md mx-auto space-y-4 animate-fade-up">
      <div className="text-center mb-8">
        <span className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium mb-2">
          Choose Difficulty
        </span>
        <h2 className="text-2xl font-bold">Select Your Level</h2>
      </div>
      
      {difficulties.map(({ level, description, icon }) => (
        <button
          key={level}
          onClick={() => onSelect(level.toLowerCase())}
          className="w-full p-4 bg-white rounded-xl shadow-sm border border-gray-100 
                     hover:shadow-md hover:border-primary/20 transition-all duration-200
                     flex items-center justify-between group"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center
                          group-hover:bg-primary/10 transition-colors">
              <span className="text-xl">{icon}</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold text-gray-900">{level}</h3>
              <p className="text-sm text-gray-500">{description}</p>
            </div>
          </div>
          <Trophy className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
        </button>
      ))}
    </div>
  );
};

export default DifficultySelector;
