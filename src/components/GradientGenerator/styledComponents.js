import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 10px;
  background-image: linear-gradient(
    to ${props => props.direction},
    ${props => props.color1},
    ${props => props.color2}
  );
`
export const Heading = styled.h1`
  text-align: center;
  font-size: 27px;
  color: #ededed;
  @media (min-width: 768px) {
    font-size: 34px;
  }
`
export const Paragraph = styled.p`
  font-family: 'Roboto';
  font-weight: 500;
  color: #ededed;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 25px;
  }
`
export const DirectionButtonsList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`
export const ColorInputContainer = styled.div`
  width: 70%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 768px) {
    width: 400px;
  }
`
export const ColorText = styled.p`
  color: #ffffff;
`
export const ColorCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ColorInput = styled.input`
  width: 100px;
  height: 35px;
  border-width: 0px;
  border-color: red;
  outline: none;
`
export const GenerateButon = styled.button`
  cursor: pointer;
  outline: none;
  border-width: 0px;
  border-radius: 5px;
  width: 120px;
  height: 35px;
  background-color: #00c9b7;
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-top: 20px;
`
