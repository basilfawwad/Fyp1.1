import {GraphQLDate} from 'graphql-iso-date';

import UserResolvers from './user-resolvers';

export default {
    Date: GraphQLDate,

    Mutation: {
        signup: UserResolvers.signup,
        login: UserResolvers.login
    }

};