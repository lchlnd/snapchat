import React, { Component } from 'react'
import TrophyCase from './TrophyCase'

class TrophyCaseContainer extends Component {
  constructor (props) {
    super(props)

    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return <TrophyCase backButtonPressed={this.backButtonPressed} />
  }
}

export default TrophyCaseContainer
