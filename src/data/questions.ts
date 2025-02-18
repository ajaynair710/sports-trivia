interface Question {
  text: string;
  options: string[];
  correctAnswer: string;
}

interface QuestionSet {
  [key: string]: {
    [key: string]: Question[];
  };
}

export const questions: QuestionSet = {
  soccer: {
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
  },
  basketball: {
    easy: [
      {
        text: "Who holds the NBA record for most points in a single game?",
        options: ["Kobe Bryant", "Michael Jordan", "Wilt Chamberlain", "LeBron James"],
        correctAnswer: "Wilt Chamberlain"
      },
      {
        text: "How many points is a standard basketball free throw worth?",
        options: ["1", "2", "3", "4"],
        correctAnswer: "1"
      },
      {
        text: "Which NBA team has won the most championships?",
        options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Golden State Warriors"],
        correctAnswer: "Boston Celtics"
      }
    ],
    medium: [
      {
        text: "In what year was the NBA founded?",
        options: ["1936", "1946", "1956", "1966"],
        correctAnswer: "1946"
      },
      {
        text: "Who invented basketball?",
        options: ["James Naismith", "William Morgan", "John Wooden", "Red Auerbach"],
        correctAnswer: "James Naismith"
      }
    ],
    hard: [
      {
        text: "What was the original name of the Harlem Globetrotters?",
        options: ["New York Travelers", "Chicago Globetrotters", "Harlem Stars", "Chicago GIs"],
        correctAnswer: "Chicago GIs"
      }
    ]
  },
  tennis: {
    easy: [
      {
        text: "How many Grand Slam tournaments are there in tennis?",
        options: ["2", "3", "4", "5"],
        correctAnswer: "4"
      },
      {
        text: "Which surface is Wimbledon played on?",
        options: ["Clay", "Grass", "Hard Court", "Carpet"],
        correctAnswer: "Grass"
      }
    ],
    medium: [
      {
        text: "Who has won the most Grand Slam singles titles in men's tennis?",
        options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
        correctAnswer: "Novak Djokovic"
      }
    ],
    hard: [
      {
        text: "In which year was the first Wimbledon Championship held?",
        options: ["1877", "1881", "1892", "1900"],
        correctAnswer: "1877"
      }
    ]
  },
  cricket: {
    easy: [
      {
        text: "How many players are there in a cricket team?",
        options: ["9", "10", "11", "12"],
        correctAnswer: "11"
      },
      {
        text: "What is the term for scoring 6 runs with one hit in cricket?",
        options: ["Home Run", "Six", "Maximum", "Grand Slam"],
        correctAnswer: "Six"
      }
    ],
    medium: [
      {
        text: "Which country won the first Cricket World Cup in 1975?",
        options: ["Australia", "England", "India", "West Indies"],
        correctAnswer: "West Indies"
      }
    ],
    hard: [
      {
        text: "What is the highest individual score in Test cricket?",
        options: ["375", "400", "401", "501"],
        correctAnswer: "400"
      }
    ]
  }
};
