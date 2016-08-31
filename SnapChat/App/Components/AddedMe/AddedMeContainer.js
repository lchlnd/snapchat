import React, { Component } from 'react'
import AddedMe from './AddedMe'

class AddedMeContainer extends Component {
    constructor (props) {
        super(props)

        this.backButtonPressed = this.backButtonPressed.bind(this)
    }

    backButtonPressed () {
        this.props.navigator.pop()
    }

    render () {
        return <AddedMe
                backButtonPressed={this.backButtonPressed}
                />
    }
}

export default AddedMeContainer
