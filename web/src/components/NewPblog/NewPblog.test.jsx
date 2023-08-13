import { render } from '@redwoodjs/testing/web'

import NewPblog from './NewPblog'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NewPblog', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NewPblog />)
    }).not.toThrow()
  })
})
