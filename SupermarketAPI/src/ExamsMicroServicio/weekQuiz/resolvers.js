import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allWeekQuiz: (_) =>
			getRequest(`${URL}/Quizes`, ''),
		weekQuizById: (_, { body }) =>
			getRequest(`${URL}/thisWeekQuiz`, '', body),
	},
	Mutation: {
		createWeekQuiz: (_, { body }) =>
			generalRequest(`${URL}/newQuiz`, 'POST', body),
		updateWeekQuiz: (_, { body }) =>
			generalRequest(`${URL}/deactivateQuiz`, 'PUT', body),
		deleteWeekQuiz: (_, { body }) =>
			generalRequest(`${URL}/deleteQuiz`, 'DELETE', body)
	}
};

export default resolvers;
