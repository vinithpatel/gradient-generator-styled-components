import styled from 'styled-components'

export const ListItem = styled.li`
  margin: 5px;
`
export const DirectionButton = styled.button`
  width: 120px;
  height: 35px;
  color: #334155;
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 15px;
  border-width: 0px;
  border-radius: 5px;
  cursor: pointer;
  outline: none;
  opacity: ${props => (props.isActive ? 1 : 0.5)};
`
