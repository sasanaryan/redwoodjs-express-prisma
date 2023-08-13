export const schema = gql`
  type Pblog {
    id: String!
    title: String!
    body:  String!
    createdAt: DateTime!
  }

  type Query {
    Pblogs : [Pblog!]!  @requireAuth
    Pblog(id: String!): Pblog  @requireAuth
  }



      input CreatePblogInput {
        title: String!
        body: String!
      }

      input UpdatePblogInput {
        title: String
        body: String
      }

      type Mutation {
        createPblog(input: CreatePblogInput!): Pblog! @requireAuth
        updatePblog(id: String!, input: UpdatePblogInput!): Pblog! @requireAuth
        deletePblog(id: String!): Pblog @requireAuth
      }
`