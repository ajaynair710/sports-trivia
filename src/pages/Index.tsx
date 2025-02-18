
import { useState } from "react";
import DifficultySelector from "@/components/DifficultySelector";
import QuestionCard from "@/components/QuestionCard";
import ScoreDisplay from "@/components/ScoreDisplay";
import { questions } from "@/data/questions";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const { toast } = useToast();

  const handleDifficultySelect = (selectedDifficulty: string) => {
    setDifficulty(selectedDifficulty);
    toast({
      title: "Game Started!",
      description: `Difficulty: ${selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1)}`,
    });
  };

  const handleAnswer = (isCorrect: boolean) => {
    if (isCorrect) {
      setScore((prev) => prev + 1);
      toast({
        title: "Correct!",
        description: "Well done!",
      });
    } else {
      toast({
        title: "Incorrect",
        description: "Better luck next time!",
        variant: "destructive",
      });
    }

    // Changed to use a single setTimeout for state updates
    setTimeout(() => {
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < questions[difficulty!].length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setGameComplete(true);
      }
    }, 1500); // Increased delay slightly to ensure animation completes
  };

  const handleRestart = () => {
    setDifficulty(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameComplete(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Soccer Trivia</h1>
          <p className="text-gray-600">Test your knowledge of the beautiful game</p>
        </div>

        {!difficulty && (
          <DifficultySelector onSelect={handleDifficultySelect} />
        )}

        {difficulty && !gameComplete && (
          <QuestionCard
            question={questions[difficulty][currentQuestionIndex]}
            onAnswer={handleAnswer}
          />
        )}

        {gameComplete && (
          <ScoreDisplay
            score={score}
            total={questions[difficulty!].length}
            onRestart={handleRestart}
          />
        )}
      </div>
    </div>
  );
};

export default Index;
