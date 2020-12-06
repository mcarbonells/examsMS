import { generalRequest, getRequest } from '../../utilities';
import { url, port, entryPoint } from './server';

const URL = `http://${url}:${port}/${entryPoint}`;

const resolvers = {
	Query: {
		allExamLevels: (_) =>
			getRequest(`${URL}/AllExams`, ''),
		examById: (_, { body }) =>
			getRequest(`${URL}/userExamLevel`, '',body),
	},
	Mutation: {
		createExam: (_, { body }) =>
			generalRequest(`${URL}/newExamLevel`, 'POST', body),
		updateExam: (_, { body }) =>
			generalRequest(`${URL}/completeExamLevel`, 'PUT', body),
		deleteExam: (_, { body }) =>
			generalRequest(`${URL}/deleteExamLevel`, 'DELETE', body)
	}
};

export default resolvers;
