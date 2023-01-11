import styled from 'styled-components'

export const AppWrapper = styled.div`
  .title {
    color: ${props => props.color || 'purple'};
    border: ${props => props.theme.border};
  }
`

const Button = styled.button`
  border: 1px solid lightblue;
  background-color: #ccc;
`

export const DefaultButton = styled(Button)`
  color: red;
`
