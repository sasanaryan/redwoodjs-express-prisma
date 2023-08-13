export const schema = gql`
  type Post {
    id: String!
    title: String!
    body: String!
    createdAt: DateTime!
    updatedAt: DateTime!
  }

  type Query {
    posts: [Post!]! @requireAuth
  }
`
