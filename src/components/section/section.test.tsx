import { render, screen } from '@/test/utils'

import Section from './section'

describe('Section', () => {
  it('should render', () => {
    render(
      <Section title='Section title'>
        <div className='section-content'>Section content</div>
      </Section>
    )

    expect(screen.getByText('Section title')).toBeInTheDocument()
  })
})
