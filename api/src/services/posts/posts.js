import { db } from 'src/lib/db'

export const posts = () => {
  return db.post.findMany()
}
