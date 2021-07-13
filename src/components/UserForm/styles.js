import styled from 'styled-components'
import { device } from '../../utils/device'

export const Form = styled.form`
  padding-top: 8px;

  & button {
    margin-top: 20px;
  }

  @media ${device.laptop} {
    padding-top: 160px;
  }
`

export const Title = styled.div`
  color: #000000;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 16px;
`

export const Subtitle = styled.div`
  color: #b6b8bc;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 8px;
`

export const SubtitleLogin = styled.div`
  color: #b6b8bc;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`

export const Text = styled.div`
  color: #777e91;
  font-size: 16px;
  font-weight: 500;
`
export const Minititle = styled.div`
  color: #b6b8bc;
  font-size: 8px;
  margin-top: 40px;
  font-weight: 600;
`

export const Error = styled.span`
  font-size: 20px;
  color: red;
`
