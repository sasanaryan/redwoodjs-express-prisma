

import { Set, Router, Route } from '@redwoodjs/router'

import BlogLayout from 'src/layouts/BlogLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={BlogLayout}>
      <Route path="/" page={HomePage} name="home" />
      <Route path="/post/{id:String}" page={PostPage} name="post" />
      <Route path="/newPost" page={NewPblogPage} name="newPost" />
      </Set>
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
