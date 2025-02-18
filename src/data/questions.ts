
interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionSet {
  [key: string]: Question[];
}

export const questions: QuestionSet = {
  easy: [
    {
      text: "Which country won the first FIFA World Cup in 1930?",
      options: ["Brazil", "Argentina", "Uruguay", "Germany"],
      correctAnswer: "Uruguay"
    },
    {
      text: "Who is known as 'The King of Football'?",
      options: ["Diego Maradona", "Pelé", "Johan Cruyff", "Franz Beckenbauer"],
      correctAnswer: "Pelé"
    },
    {
      text: "Which club has won the most UEFA Champions League titles?",
      options: ["Real Madrid", "AC Milan", "Bayern Munich", "Liverpool"],
      correctAnswer: "Real Madrid"
    }
  ],
  medium: [
    {
      text: "In which year did the English Premier League start?",
      options: ["1990", "1991", "1992", "1993"],
      correctAnswer: "1992"
    },
    {
      text: "Who scored the 'Hand of God' goal in the 1986 World Cup?",
      options: ["Michel Platini", "Diego Maradona", "Gary Lineker", "Paolo Rossi"],
      correctAnswer: "Diego Maradona"
    },
    {
      text: "Which player has won the most Ballon d'Or awards?",
      options: ["Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Michel Platini"],
      correctAnswer: "Lionel Messi"
    }
  ],
  hard: [
    {
      text: "Who was the first player to score in every minute of a football match?",
      options: ["Pelé", "Gerd Müller", "Ferenc Puskás", "Eusébio"],
      correctAnswer: "Ferenc Puskás"
    },
    {
      text: "Which team won the first European Cup (now Champions League) in 1956?",
      options: ["Real Madrid", "Benfica", "AC Milan", "Manchester United"],
      correctAnswer: "Real Madrid"
    },
    {
      text: "Who is the all-time top scorer in World Cup history?",
      options: ["Miroslav Klose", "Ronaldo", "Gerd Müller", "Just Fontaine"],
      correctAnswer: "Miroslav Klose"
    }
  ]
};
