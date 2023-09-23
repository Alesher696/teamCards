import type { Meta, StoryObj } from '@storybook/react'

<<<<<<< HEAD
=======

>>>>>>> 462fa235205a50b54552c37d6f8aac544884d1ad
import { TabsSwitcher } from './tabsSwitcher.tsx'

const meta = {
  title: 'Components/TabsSwitcher',
  component: TabsSwitcher,
  tags: ['autodocs'],
  argTypes: {
    onChange: () => {},
  },
} satisfies Meta<typeof TabsSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const TwoButton: Story = {
  args: {
    tabs: ['one', 'two'],
  },
}

export const TwoButtonDisabled: Story = {
  args: {
    tabs: ['one', 'two'],
    disabled: true,
  },
}

export const ThreeButton: Story = {
  args: {
    tabs: ['one', 'two', 'three'],
  },
}

export const ThreeButtonDisabled: Story = {
  args: {
    tabs: ['one', 'two', 'three'],
    disabled: true,
  },
}
