import { render } from '@redwoodjs/testing/web'

import DeletePblogCell from './DeletePblogCell'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DeletePblogCell', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DeletePblogCell />)
    }).not.toThrow()
  })
})
