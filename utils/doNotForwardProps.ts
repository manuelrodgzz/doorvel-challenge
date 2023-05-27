import { StyledOptions } from '@emotion/styled'

const doNotForwardProps = (props: string | string[]): StyledOptions => ({
    shouldForwardProp: prop => typeof props === 'string' ? prop !== props : !props.includes(prop)
})

export default doNotForwardProps