export const examLevelTypeDef = `
  type ExamLevel {
     _id: String
     userId: Int
     level: String
     words: [String]
     date: String
     correctWords: [String]
     pass: Boolean
  }
  input ExamLevelInput {
      _id: String
      userId: Int
      level: String
      words: [String]
      date: String
      correctWords: [String]
      pass: Boolean
  }`;

export const examLevelQueries = `
      allExamLevels: [ExamLevel]
      examById(body: ExamLevelInput): ExamLevel
  `;

export const examLevelMutations = `
    createExam(body: ExamLevelInput): ExamLevel
    updateExam(body: ExamLevelInput): ExamLevel
    deleteExam(body: ExamLevelInput): ExamLevel
`;
