
import styled from "@emotion/styled";
import PostsCell from 'src/components/PostsCell'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;
const HomePage = () => {
  return (
    <Container>
     <PostsCell />
    </Container>
  )
}

export default HomePage
