import styled from 'styled-components'

import { device } from '../../utils/device'

export const Div = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const DivWrapper = styled.div`
  margin-bottom: 20px;
  margin-right: 20px;
  width: 100%;

  @media ${device.laptop} {
    width: auto;
  }
`

export const Image = styled.img`
  border: 1px solid #ddd;
  box-shadow: 0px 10px 14px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  height: auto;
  overflow: hidden;
  object-fit: cover;
  height: 75px;
  width: 75px;
`

export const Button = styled.button`
  border-radius: 10px;
  min-height: 64px;
  padding: 0;
  width: 100%;
  font-size: 18px;
  font-weight: 600;
  background: #397ef6;
  color: #ffffff;
  width: 300px;

  &:hover {
    background: #3e7aed;
  }
`

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const Error = styled.span`
  font-size: 20px;
  color: red;
`
