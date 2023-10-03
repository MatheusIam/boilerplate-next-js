import React from 'react'
import { render } from '@testing-library/react'
import Main from '.'

describe('Main component', () => {
  it('renders the expected title', () => {
    const { getByText } = render(<Main />)
    const title = getByText('React Avançado')
    expect(title).toBeInTheDocument()
    expect(title.textContent).toBe('React Avançado')
  })

  it('renders the expected logo', () => {
    const { getByAltText } = render(<Main />)
    const logo = getByAltText(
      'Imagem de um átomo e React Avançado escrito ao lado.'
    )
    expect(logo).toBeInTheDocument()
  })
})
