import styled from "@emotion/styled";
import PblogCell from 'src/components/PblogCell'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: #fff;
  justify-content: space-between;
  align-items: center;
`;
const PostPage = ({id}) => {
  return (
    <Container>
    <PblogCell id={id} />
   </Container>
  )
}

export default PostPage
