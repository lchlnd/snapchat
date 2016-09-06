import React, {Component} from 'react'
import Story from './Story'
import { ListView } from 'react-native'

class StoriesContainer extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Story stories={storyDataSource.cloneWithRows(stories)}/>
    )
  }
}

export default StoriesContainer


/// mock data
var storyDataSource = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
var stories = [
  {
    username: 'nathan',
    posted:'38m'
  },
  {
    username: 'obama',
    posted:'38m'
  },
  {
    username: 'jesus',
    posted:'38m'
  },
  {
    username: 'will smith',
    posted:'38m'
  },
  {
    username: 'beibeir',
    posted:'38m'
  },
  {
    username: 'sidechick_01',
    posted:'38m'
  },
  {
    username: 'lachlan',
    posted:'38m'
  },
  {
    username: 'ryan',
    posted:'38m'
  }

]