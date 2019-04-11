import { BASE_UNIT } from '../services/constants'

export const error = (props = {}) => ({
  color: props.errorColor,
  fontSize: props.errorFontSize,
  height: props.errorHeight
})

export const placeholder = () => ({
  height: BASE_UNIT * 4
})
