import styled from 'styled-components'

import { device } from '../../utils/device'

export const Image = styled.img`
  border-radius: 50%;
  border: 1px solid #ddd;
  box-shadow: 0 0px 10px 3px rgba(0, 0, 0, 0.08);
  height: 100px;
  height: auto;
  margin-bottom: 30px;
  object-fit: cover;
  overflow: hidden;
  width: 100px;
`

export const Name = styled.div`
  color: #000000;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 16px;
  white-space: nowrap;
`

export const Email = styled.div`
  color: #000000;
  font-size: 20px;
  margin-bottom: 16px;
`

export const Div = styled.div`
  align-items: center;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
  padding: 16px 24px;

  @media ${device.laptop} {
    padding: 64px 120px;
    max-width: 400px;
  }
`
