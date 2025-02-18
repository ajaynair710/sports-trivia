
import { Trophy } from "lucide-react";

interface ScoreDisplayProps {
  score: number;
  total: number;
  onRestart: () => void;
}

const ScoreDisplay = ({ score, total, onRestart }: ScoreDisplayProps) => {
  const percentage = Math.round((score / total) * 100);

  return (
    <div className="w-full max-w-md mx-auto text-center animate-fade-up">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-6">
          <Trophy className="w-10 h-10 text-primary" />
        </div>

        <span className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
          Game Complete
        </span>
        
        <h2 className="text-3xl font-bold mb-2">
          {percentage}% Score
        </h2>
        
        <p className="text-gray-500 mb-6">
          You got {score} out of {total} questions correct
        </p>

        <button
          onClick={onRestart}
          className="px-6 py-3 bg-primary text-white rounded-lg font-medium
                   hover:bg-primary/90 transition-colors"
        >
          Play Again
        </button>
      </div>
    </div>
  );
};

export default ScoreDisplay;
