import Cart from 'src/components/Cart/Cart'

export const QUERY = gql`
  query FindPblogQuery($id: String!) {
    pblog: Pblog(id: $id) {
      id
      title
      body
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({ pblog }) => {
  return (<Cart post={pblog}/>)
}
