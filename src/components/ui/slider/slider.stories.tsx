import { useState } from 'react'

import type { Meta } from '@storybook/react'

import { SliderCustom } from '../slider/slider'

const meta = {
  title: 'Components/Slider',
  component: SliderCustom,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof SliderCustom>

export default meta

export const Default = {
  render: () => {
    const values = { min: 0, max: 15 }
    const [val, setValues] = useState({ min: 0, max: 15 })
    const onChangeHandler = (values: number[]) => {
      setValues({ min: values[0], max: values[1] })
    }

    return (
      <SliderCustom
        min={values.min}
        max={values.max}
        onChange={onChangeHandler}
        values={[val.min, val.max]}
      ></SliderCustom>
    )
  },
}

//storyDocs, args: OnChange
