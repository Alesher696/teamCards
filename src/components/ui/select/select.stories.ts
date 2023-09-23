import type { Meta, StoryObj } from '@storybook/react'

import { SelectCustom } from './select.tsx'

const meta = {
  title: 'Components/Select',
  component: SelectCustom,
  tags: ['autodocs'],
  argTypes: {
    onChange: () => {},
  },
} satisfies Meta<typeof SelectCustom>

export default meta
type Story = StoryObj<typeof meta>

export const DefaultSelect: Story = {
  args: {
    options: ['apple', 'banana', 'orange'],
    className: '',
  },
}

export const DisabledSelect: Story = {
  args: {
    options: ['apple', 'banana', 'orange'],
    disabled: true,
  },
}

export const TestForPagination: Story = {
  args: {
    options: ['100', '200', '300', '400'],
  },
}