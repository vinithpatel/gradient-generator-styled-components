import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {directionItemDetails, isActive, updateDirection} = props

  const {directionId, displayText} = directionItemDetails

  const onClickDirectionButton = () => {
    updateDirection(directionId)
  }

  return (
    <ListItem>
      <DirectionButton isActive={isActive} onClick={onClickDirectionButton}>
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
