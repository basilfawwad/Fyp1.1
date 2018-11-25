export default`
  scalar Date
  type Status {
    message: String!
  }
  type Auth {
    token: String!
  }
  type User {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    createdAt: Date!
    updatedAt: Date!
  }
  type Me {
    _id: ID!
    username: String
    email: String!
    firstName: String
    lastName: String
    createdAt: Date!
    updatedAt: Date!
  }
  type Query {
    me: Me
  }
  type Mutation {
    signup(email: String!, fullName: String!, password: String!, avatar: String, username: String): Auth
    login(email: String!, password: String!): Auth
  }
  schema {
    query: Query
    mutation: Mutation
  }
`;