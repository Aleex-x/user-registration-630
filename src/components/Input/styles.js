import styled from 'styled-components'

export const Input = styled.input`
  background: none;
  border: 0;
  height: 62px;
  padding: 12px 42px 12px 20px;
  vertical-align: middle;
  font-size: 16px;
  white-space: normal;
  width: 100%;

  &:focus {
    outline: none;
  }

  ::placeholder {
    color: #cfced5;
    opacity: 1; /* Firefox */
  }
`

export const Div = styled.div`
  margin: 13px 0;
  position: relative;
`

export const DivWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  border: solid 2px #f3f2f7;
  height: 64px;
  overflow: hidden;

  & svg {
    color: #cfced5;
    font-size: 24px;
    position: absolute;
    top: 19px;
    right: 16px;
  }
`
