
import { useState } from "react";
import { Check, X } from "lucide-react";

interface QuestionCardProps {
  question: {
    text: string;
    options: string[];
    correctAnswer: string;
  };
  onAnswer: (isCorrect: boolean) => void;
}

const QuestionCard = ({ question, onAnswer }: QuestionCardProps) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (answer: string) => {
    if (selectedAnswer !== null) return;
    
    setSelectedAnswer(answer);
    setShowResult(true);
    
    const isCorrect = answer === question.correctAnswer;
    setTimeout(() => onAnswer(isCorrect), 1000);
  };

  const getOptionClass = (option: string) => {
    if (!showResult || selectedAnswer !== option) {
      return "hover:bg-secondary/80";
    }
    if (option === question.correctAnswer) {
      return "bg-success/10 border-success text-success";
    }
    if (selectedAnswer === option && option !== question.correctAnswer) {
      return "bg-error/10 border-error text-error";
    }
    return "";
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-6 animate-fade-up">
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="mb-8">
          <span className="inline-block px-4 py-1 bg-secondary rounded-full text-sm font-medium mb-4">
            Question
          </span>
          <h3 className="text-xl font-semibold text-gray-900">{question.text}</h3>
        </div>

        <div className="space-y-3">
          {question.options.map((option) => (
            <button
              key={option}
              onClick={() => handleAnswer(option)}
              disabled={showResult}
              className={`w-full p-4 text-left rounded-lg border transition-all duration-200
                        ${getOptionClass(option)}
                        ${showResult ? "cursor-default" : "hover:shadow-md"}
                        ${selectedAnswer === option ? "border-2" : "border"}`}
            >
              <div className="flex items-center justify-between">
                <span>{option}</span>
                {showResult && option === question.correctAnswer && (
                  <Check className="w-5 h-5 text-success" />
                )}
                {showResult && selectedAnswer === option && option !== question.correctAnswer && (
                  <X className="w-5 h-5 text-error" />
                )}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuestionCard;
