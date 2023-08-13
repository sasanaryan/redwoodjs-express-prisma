import { fetch } from '@whatwg-node/fetch'

export const Pblogs = async() => {
  const response = await fetch(
    `http://localhost:8000/posts`)
   const json = await response.json()
  return json.data
}

export const Pblog = async({ id }) => {
  const response = await fetch(
    `http://localhost:8000/posts/${id}`
  )
  const json = await response.json()
  return json.data

}


export const createPblog = async({ input }) => {
  const response = await fetch(
    `http://localhost:8000/posts`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    method: "POST",
    body: JSON.stringify(input)
   }
  )
  const json = await response.json()

  return json.data

}

export const updatePblog = async({ id, input }) => {

  const response = await fetch(
    `http://localhost:8000/posts/${id}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
    method: "PUT",
    body:  JSON.stringify(input)
   }
  )
  const json = await response.json()

  return json.data

}

export const deletePblog = async({ id }) => {
  const response = await fetch(
    `http://localhost:8000/posts/${id}`,
    {
    method: "DELETE"
   }
  )
  const json = await response.json()

  return json.data
}
