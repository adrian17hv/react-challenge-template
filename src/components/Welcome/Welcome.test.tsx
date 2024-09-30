import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import ThemeProvider from '@/theme'
import Welcome from './index'

const WrappedWelcome = () => (
  <ThemeProvider>
    <Welcome />
  </ThemeProvider>
)

describe('Welcome Component', () => {
  it('renders correctly', () => {
    render(<WrappedWelcome />)
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('HomeVision')

    const subheading = screen.getByRole('heading', { level: 2 })
    expect(subheading).toHaveTextContent('Challenge Template')

    const tags = within(screen.getByTestId('tags')).getAllByRole('listitem')
    expect(tags.length).toBe(7)
  })
})
