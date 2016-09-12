import React, { Component, PropTypes } from 'react'
import Edit from './Edit'
import MainContainer from '../Main/MainContainer'

class EditContainer extends Component {
  constructor (props) {
    super(props)

    this.backPressed = this.backPressed.bind(this)
  }

  backPressed () {
    this.props.navigator.replace({
      title: 'MainContainer',
      component: MainContainer
    })
  }

  render () {
    return <Edit
      backPressed={this.backPressed}
    />
  }
}

EditContainer.propTypes = {
  navigator: PropTypes.object
}

export default EditContainer
