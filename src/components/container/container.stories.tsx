import type { Meta, StoryObj } from '@storybook/react'

import Container from './container'

const meta: Meta<typeof Container> = {
  title: 'Components/Container',
  component: Container,
  tags: ['autodocs']
} satisfies Meta<typeof Container>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: <div>Container content</div>,
    className: 'border border-primary'
  },
  render: (args) => <Container {...args} />
}
