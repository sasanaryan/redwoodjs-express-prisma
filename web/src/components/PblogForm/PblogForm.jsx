import { Button, Stack } from '@mui/material'
import { useLocation } from '@redwoodjs/router';
import {
  Form,
  FormError,
  FieldError,
  Label,
  TextField,
  TextAreaField,
  Submit,
} from '@redwoodjs/forms'

import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  min-width: 320px;
  color: #fff;
  justify-content: center;
  align-items: center;
`;



const PblogForm = (props) => {
  const onSubmit = (data) => {
    props.onSave(data, props?.post?.id)

  }

  const location = useLocation();

  return (
    <Container>

      <Form onSubmit={onSubmit} error={props.error}  style={{ width: "100%"}} >
      <p></p>
        <FormError
          error={props.error}
          wrapperClassName="rw-form-error-wrapper"
          titleClassName="rw-form-error-title"
          listClassName="rw-form-error-list"
        />

        <Label
          name="title"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Title
        </Label>

        <TextField
          style={{width: "100%"}}
          name="title"
          defaultValue={props.post?.title}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="title" className="rw-field-error" />

        <Label
          name="body"
          className="rw-label"
          errorClassName="rw-label rw-label-error"
        >
          Body
        </Label>

        <TextAreaField
        style={{ width: "100%", minHeight: "70px" , overflowY: "scroll"}}
          name="body"
          defaultValue={props.post?.body}
          className="rw-input"
          errorClassName="rw-input rw-input-error"
          validation={{ required: true }}
        />

        <FieldError name="body" className="rw-field-error" />

        <Stack direction="row" gap={5} marginTop="5px">
          <Submit disabled={props.loading} className="rw-button rw-button-blue">
            Save
          </Submit>
          {location.pathname === '/newPost' ? null : <Button onClick={props.handleClose}>Cancle</Button>}
        </Stack>
      </Form>
    </Container>
  )
}

export default PblogForm
