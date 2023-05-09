import {Component} from 'react'
import {
  Container,
  Heading,
  Paragraph,
  DirectionButtonsList,
  ColorInputContainer,
  ColorCard,
  ColorText,
  ColorInput,
  GenerateButon,
} from './styledComponents'
import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]

class GradientGenerator extends Component {
  state = {
    gradientDirectionId: gradientDirectionsList[0].directionId,
    newGradientDirectionId: gradientDirectionsList[0].directionId,
    color1: '#8ae323',
    color2: '#014f7b',
    newColor1: '#8ae323',
    newColor2: '#014f7b',
  }

  getDirection = directionId =>
    gradientDirectionsList.find(
      eachDirectionObject => eachDirectionObject.directionId === directionId,
    )

  updateDirection = directionId => {
    this.setState({
      newGradientDirectionId: this.getDirection(directionId).directionId,
    })
  }

  onChangeColor1 = event => {
    this.setState({newColor1: event.target.value})
  }

  onChangeColor2 = event => {
    this.setState({newColor2: event.target.value})
  }

  onClickGenerateButton = () => {
    this.setState(prevState => {
      const {newColor1, newColor2, newGradientDirectionId} = prevState
      return {
        color1: newColor1,
        color2: newColor2,
        gradientDirectionId: newGradientDirectionId,
      }
    })
  }

  render() {
    const {
      gradientDirectionId,
      color1,
      color2,
      newColor1,
      newColor2,
      newGradientDirectionId,
    } = this.state
    const directionObject = this.getDirection(gradientDirectionId)
    const newDirectionObject = this.getDirection(newGradientDirectionId)

    return (
      <Container
        direction={directionObject.value}
        color1={color1}
        color2={color2}
        data-testid="gradientGenerator"
      >
        <Heading>Generate a CSS Color Gradient</Heading>
        <Paragraph>Choose Direction</Paragraph>
        <DirectionButtonsList>
          {gradientDirectionsList.map(eachDirectionItem => (
            <GradientDirectionItem
              key={eachDirectionItem.directionId}
              directionItemDetails={eachDirectionItem}
              isActive={
                newDirectionObject.directionId === eachDirectionItem.directionId
              }
              updateDirection={this.updateDirection}
            />
          ))}
        </DirectionButtonsList>
        <Paragraph>Pick the Colors</Paragraph>
        <ColorInputContainer>
          <ColorCard>
            <ColorText>{newColor1}</ColorText>
            <ColorInput
              type="color"
              value={newColor1}
              onChange={this.onChangeColor1}
            />
          </ColorCard>
          <ColorCard>
            <ColorText>{newColor2}</ColorText>
            <ColorInput
              type="color"
              value={newColor2}
              onChange={this.onChangeColor2}
            />
          </ColorCard>
        </ColorInputContainer>
        <GenerateButon onClick={this.onClickGenerateButton}>
          Generate
        </GenerateButon>
      </Container>
    )
  }
}

export default GradientGenerator
