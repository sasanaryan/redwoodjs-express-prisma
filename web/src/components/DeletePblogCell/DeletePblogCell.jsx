import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/dist/toast'
import Button from '@mui/material/Button';
import { navigate, routes } from '@redwoodjs/router'
import {QUERY} from 'src/components/PostsCell/PostsCell'
const DELETE_PBLOG_MUTATION = gql`
  mutation DeletePostMutation($id: String!) {
    deletePblog(id: $id) {
      id
    }
  }
`


const DeletCell = ({id , title}) => {
  const [deletePblog] = useMutation(DELETE_PBLOG_MUTATION, {
    onCompleted: () => {
      toast.success('Post deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    refetchQueries: [{ query:QUERY }],
    awaitRefetchQueries: true,

  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete post: ' + title + '?')) {
      deletePblog({ variables: { id } })
      navigate(routes.home())
    }
  }

  return (
    <Button
    color="error"
    onClick={() => onDeleteClick(id)}
  >
    Delete
  </Button>
  )
}

export default DeletCell
