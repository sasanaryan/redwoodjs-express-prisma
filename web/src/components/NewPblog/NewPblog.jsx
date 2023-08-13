import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'
import {QUERY} from 'src/components/PostsCell/PostsCell'
import PostForm from 'src/components/PblogForm/PblogForm'

const CREATE_PBLOG_MUTATION = gql`
  mutation CreatePblogMutation($input: CreatePblogInput!) {
    createPblog(input: $input) {
      id
      title
      body
      createdAt
    }
  }
`

const NewPost = () => {
  const [createPblog, { loading, error }] = useMutation(CREATE_PBLOG_MUTATION, {
    onCompleted: () => {
      toast.success('Post created')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query:QUERY }],
    awaitRefetchQueries: true,
  })

  const onSave = (input) => {
    createPblog({ variables: { input } })
    navigate(routes.home())
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">New Post</h2>
      </header>
      <div className="rw-segment-main">
        <PostForm onSave={onSave} loading={loading} error={error} />
      </div>
    </div>
  )
}

export default NewPost
