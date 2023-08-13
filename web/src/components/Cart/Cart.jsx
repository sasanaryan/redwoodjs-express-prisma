import  React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Dialog from "src/components/EditDialog/EditDialog"
import { Link, routes } from '@redwoodjs/router';
import styled from "@emotion/styled";
import { Stack } from '@mui/system';
import DeletPblogCell from 'src/components/DeletePblogCell/DeletePblogCell';

const StyledLink = styled(Link)`
  color: black;
  text-decoration: none;
  &:hover {
    color: gray;
  }
`;



const OutlinedCard = ({post}) => {
  return (
    <Box sx={{ minWidth: 320 , maxWidth:967 , margin: "10px" }}>
      <Card variant="outlined"  >

      <CardContent>
        <StyledLink to={routes.post({ id: post.id})}>
        <Typography variant="h5" component="div">
         {post.title}
          </Typography>
        </StyledLink>
      <Typography variant="body2">
        {post.body}
      </Typography>
    </CardContent>
    <Stack direction="row" >
     <Dialog id={post.id}/>
     <DeletPblogCell id={post.id} title={post.title} />
    </Stack>
      </Card>
    </Box>
  );
}
export default OutlinedCard


