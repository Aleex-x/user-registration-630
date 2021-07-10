import styled, { css } from 'styled-components'

export const Button = styled.button`
  border-radius: 10px;
  min-height: 64px;
  padding: 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;

  ${(props) =>
    props.primary
      ? css`
           {
            background: #397ef6;
            color: #ffffff;
          }
        `
      : css`
           {
            color: #747e91;
            background: #ffffff;
            border: 2px solid #ececf0;
          }
        `}

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
