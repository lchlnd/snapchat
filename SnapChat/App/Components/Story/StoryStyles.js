import { StyleSheet } from 'react-native'

export const storyStyles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1
  },
  heading: {
    color:'purple',
    fontSize:20,
    padding:10
  },
  subheading:{
    textAlign:'center',
    color:'purple',
    borderBottomWidth:1,
    borderBottomColor:'purple'
  },
  storyRow:{
    flexDirection:'row',
    padding:5,
    borderBottomColor:'#F0F0F0',
    borderBottomWidth:1
  },
  storyIcon:{
    height:30,
    width:48,
    padding:3,
    paddingTop:6,
    paddingLeft:6
  },
  storyImage:{
    height:27,
    width:27
  },
  usernameHeading:{
    fontSize:18
  },
  agoSubHeading:{
    fontSize:14,
    color:'grey'
  }
})