import merge from 'lodash.merge';
import GraphQLJSON from 'graphql-type-json';
import { makeExecutableSchema } from 'graphql-tools';

import { mergeSchemas } from './utilities';

import {
	examLevelMutations,
	examLevelQueries,
	examLevelTypeDef
} from './ExamsMicroServicio/examLevel/typeDefs';

import{
	weekQuizMutations,
	weekQuizQueries,
	weekQuizTypeDef
} from './ExamsMicroServicio/weekQuiz/typeDefs';

import{
	userQuizMutations,
	userQuizQueries,
	userQuizTypeDef
} from './ExamsMicroServicio/userQuiz/typeDefs';

import ELResolver from './ExamsMicroServicio/examLevel/resolvers';
import WQResolver from './ExamsMicroServicio/weekQuiz/resolvers';
import UQResolver from './ExamsMicroServicio/userQuiz/resolvers';
// merge the typeDefs
const mergedTypeDefs = mergeSchemas(
	[
		'scalar JSON',
		examLevelTypeDef,
		weekQuizTypeDef,
		userQuizTypeDef
	],
	[
		examLevelQueries,
		weekQuizQueries,
		userQuizQueries
	],
	[
		examLevelMutations,
		weekQuizMutations,
		userQuizMutations
	]
);

// Generate the schema object from your types definition.
export default makeExecutableSchema({
	typeDefs: mergedTypeDefs,
	resolvers: merge(
		{ JSON: GraphQLJSON }, // allows scalar JSON
		ELResolver,
		WQResolver,
		UQResolver,

	)
});
