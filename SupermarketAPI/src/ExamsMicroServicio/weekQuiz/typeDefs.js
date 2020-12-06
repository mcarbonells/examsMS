export const weekQuizTypeDef = `
  type WeekQuiz {
      idQuiz: Int
      words: [String]
      date: String
      active: Boolean
  }
  input WeekQuizInput {
      idQuiz: Int
      words: [String]
      date: String
      active: Boolean
  }`;

export const weekQuizQueries = `
      allWeekQuiz: [WeekQuiz]
      weekQuizById(body: WeekQuizInput): WeekQuiz
  `;

export const weekQuizMutations = `
    createWeekQuiz(body: WeekQuizInput): WeekQuiz
    updateWeekQuiz(body: WeekQuizInput): WeekQuiz
    deleteWeekQuiz(body: WeekQuizInput): WeekQuiz
`;
