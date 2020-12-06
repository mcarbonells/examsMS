export const userQuizTypeDef = `
  type UserQuiz {
      userId: Int
      idQuiz: Int
      words: [String]
      date: String
      correctWords: [String]
      score: Int
  }
  input UserQuizInput {
      userId: Int
      idQuiz: Int
      words: [String]
      date: String
      correctWords: [String]
      score: Int
  }`;

export const userQuizQueries = `
      allUserQuiz: [UserQuiz]
      userQuizByIdQuiz(body: UserQuizInput): UserQuiz
      userQuizByUserID(body: UserQuizInput): UserQuiz
  `;

export const userQuizMutations = `
    createUserQuiz(body: UserQuizInput): UserQuiz
    deleteUserQuiz(body: UserQuizInput): UserQuiz
`;
