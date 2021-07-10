import styled from 'styled-components'

export const Button = styled.button`
  background: ${(props) => (props.primary ? '#397ef6' : '#ffffff')};
  border-radius: 10px;
  border: ${(props) => (props.primary ? 'none' : '2px solid #ececf0')};
  color: ${(props) => (props.primary ? '#FFFFFF' : '#747e91')};
  min-height: 64px;
  padding: 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;

  & svg {
    margin-right: 24px;
    font-size: 26px;
  }

  &:hover {
    background: ${(props) => (props.primary ? '#3e7aed' : '#fafafa')};
  }
`

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
