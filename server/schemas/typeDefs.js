const typeDefs = `
type User {
_id: ID
username: String
email: String
bookCount: Int
savedBooks: [Book]
}

type Book {
bookId: ID
description: String
title: String
image: String
link: String
authors: [String]

}

type Auth {
token: ID
user: User

}

input BookInput {
authors: [String]
description: String
bookId: String
image: String
link: String
title: String
}

type Query {
me: User

}

type Mutation {
addUser(username: String!, email: String!, password: String!): Auth
login(email: String!, password: String!): Auth
addBook(bookData: BookInput): User
removeBook(bookId: ID!): User
}
`
module.exports = typeDefs;