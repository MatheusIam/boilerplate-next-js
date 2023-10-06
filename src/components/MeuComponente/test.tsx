import { render, screen } from '@testing-library/react'

import MeuComponente from '.'

describe('<MeuComponente />', () => {
  it('should render the heading', () => {
    const { container } = render(<MeuComponente />)

    expect(
      screen.getByRole('heading', { name: /MeuComponente/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
