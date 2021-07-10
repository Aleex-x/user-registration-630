import styled from 'styled-components'
import { device } from '../../utils/device'

export const Div = styled.div`
  background-color: #ffffff;
  display: flex;
  border-radius: 10px;
  flex-direction: column;

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
  }
`
