
import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import {QUERY as PblogsQUERY} from 'src/components/PostsCell/PostsCell'
import PblogForm from 'src/components/PblogForm/PblogForm'


export const QUERY = gql`
query EditPblogById($id: String!) {
  Pblog(id: $id) {
    id
    title
    body
    createdAt
  }
}
`

const UPDATE_PBLOG_MUTATION = gql`
  mutation UpdatePblogMutation($id: String!, $input: UpdatePblogInput!) {
    updatePblog(id: $id, input: $input) {
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

export const Success = ({  Pblog ,handleClose  }) => {

  const [updatePblog, { loading, error }] = useMutation(UPDATE_PBLOG_MUTATION, {
    onCompleted: () => {
      toast.success('Post updated')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query:PblogsQUERY }],
    awaitRefetchQueries: true,

  })

  const onSave = (input, id) => {
    updatePblog({ variables: { id, input } })
    handleClose()
    navigate(routes.home())
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit Post
        </h2>
      </header>
      <div className="rw-segment-main">
        <PblogForm post={Pblog} handleClose={handleClose} onSave={onSave} error={error} loading={loading} />
      </div>
    </div>
  )
}
