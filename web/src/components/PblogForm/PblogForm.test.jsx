import { render } from '@redwoodjs/testing/web'

import PblogForm from './PblogForm'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PblogForm', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PblogForm />)
    }).not.toThrow()
  })
})
