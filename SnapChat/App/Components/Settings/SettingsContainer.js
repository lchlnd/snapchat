import React, { Component } from 'react'
import Settings from './Settings'

class SettingsContainer extends Component {
    constructor (props) {
        super(props)

        this.backButtonPressed = this.backButtonPressed.bind(this)
    }

    backButtonPressed () {
        this.props.navigator.pop()
    }

    render () {
        return <Settings
            backButtonPressed={this.backButtonPressed}
        />
    }
}

export default SettingsContainer