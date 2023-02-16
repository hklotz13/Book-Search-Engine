//adding graphql
const {gql} = require('apollo-server-express');

//defining typedefs
const typedefs = gql `
type Query {
    me: User
}

type Auth {
    token: Id
    user: User
}

type User {
    _id: Id
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    authors: [String]
    description: String
    bookId: String
    images: String
    link: String
    title: String
}

input saveBooks {
    authors: [String]
    description: String
    bookId: String
    images: String
    link: String
    title: String
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBooks(book:saveBooks): User
    removeBook(bookId: Id): User
}`

module.exports = typedefs;