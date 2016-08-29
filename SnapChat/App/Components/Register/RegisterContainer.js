import React, { Component, PropTypes } from 'react'
import Register from './Register'

class RegisterContainer extends Component {
  constructor (props) {
    super(props)

    this.backButtonPressed = this.backButtonPressed.bind(this)
  }

  backButtonPressed () {
    this.props.navigator.pop()
  }

  render () {
    return <Register backButtonPressed={this.backButtonPressed} />
  }
}

RegisterContainer.propTypes = {
  navigator: PropTypes.object
}

export default RegisterContainer
