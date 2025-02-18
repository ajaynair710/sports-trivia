
import { useState } from "react";
import DifficultySelector from "@/components/DifficultySelector";
import QuestionCard from "@/components/QuestionCard";
import ScoreDisplay from "@/components/ScoreDisplay";
import SportSelector from "@/components/SportSelector";
import { questions } from "@/data/questions";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [sport, setSport] = useState<string | null>(null);
  const [difficulty, setDifficulty] = useState<string | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [gameComplete, setGameComplete] = useState(false);
  const { toast } = useToast();

  const handleSportSelect = (selectedSport: string) => {
    setSport(selectedSport);
    toast({
      title: "Sport Selected!",
      description: `Sport: ${selectedSport.charAt(0).toUpperCase() + selectedSport.slice(1)}`,
    });
  };

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

    setTimeout(() => {
      const nextQuestion = currentQuestionIndex + 1;
      if (nextQuestion < questions[sport!][difficulty!].length) {
        setCurrentQuestionIndex(nextQuestion);
      } else {
        setGameComplete(true);
      }
    }, 1500);
  };

  const handleRestart = () => {
    setSport(null);
    setDifficulty(null);
    setCurrentQuestionIndex(0);
    setScore(0);
    setGameComplete(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative z-10 text-center mb-12 pt-4 sm:pt-0">
          <h1 className="text-4xl font-bold mb-4">Sports Trivia</h1>
          <p className="text-gray-600">Test your knowledge across different sports</p>
        </div>

        <div className="relative z-0">
          {!sport && (
            <SportSelector onSelect={handleSportSelect} />
          )}

          {sport && !difficulty && (
            <DifficultySelector onSelect={handleDifficultySelect} />
          )}

          {sport && difficulty && !gameComplete && (
            <QuestionCard
              key={currentQuestionIndex}
              question={questions[sport][difficulty][currentQuestionIndex]}
              onAnswer={handleAnswer}
            />
          )}

          {gameComplete && (
            <ScoreDisplay
              score={score}
              total={questions[sport!][difficulty!].length}
              onRestart={handleRestart}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
