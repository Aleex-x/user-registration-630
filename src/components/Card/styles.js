import styled, { css } from 'styled-components'
import { device } from '../../utils/device'

export const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: 0 0px 10px 3px rgba(0, 0, 0, 0.08);

  @media ${device.laptop} {
    flex-direction: row;
  }
`

export const InnerDiv = styled.div`
  padding: 8px 16px;
  display: ${(props) => (props.left ? 'none' : 'block')};

  @media ${device.laptop} {
    display: block;
    width: 50%;
    padding: 62px 100px;

    ${(props) =>
      props.left
        ? css`
             {
              display: flex;
              justify-content: center;
              align-items: center;
            }
          `
        : css``}
  }
`
