import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allUserQuiz: (_) =>
			getRequest(`${URL}/userQuizes`, ''),
		userQuizByIdQuiz: (_, { body }) =>
			getRequest(`${URL}/usersQuizes`, '', body),
		userQuizByUserID: (_, { body }) =>
			getRequest(`${URL}/quizOfUser`, '', body),
	},
	Mutation: {
		createUserQuiz: (_, { body }) =>
			generalRequest(`${URL}/newQuiz`, 'POST', body),
		deleteUserQuiz: (_, { body }) =>
			generalRequest(`${URL}/deleteUserQuiz`, 'DELETE', body)
	}
};

export default resolvers;
