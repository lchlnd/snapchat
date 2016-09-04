import { StyleSheet } from 'react-native'


export const touchColor = '#F1F0EF';
export const chatStyles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1
  },
  content:{
    flex:1,
    // flexDirection:'column-reverse'
  },
  heading: {
    backgroundColor: '#3cb2e2',
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  imageIcon: {
    width: 70
  },
  lastRecieved: {
    fontSize: 10,
    paddingTop: 3
  },
  imageIcon:{
    height:30,
    width:48,
    paddingLeft:3,
    paddingTop:3
  },
  imageStatus:{
    height:27,
    width:27
  },
  userRow: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgb(176, 174, 172)',
    borderBottomWidth: 0.23
  },
  userRowInfo: {
    flexDirection: 'column'
  }
})


export const chatToUserStyles = StyleSheet.create({
  container: {
    flexDirection:'column',
    flex:1
  },
  content:{
    flex:1,
    // flexDirection:'column-reverse'
  },
  textInput:{
    height: 40,
    margin: 0,
    paddingLeft:5
  },
  textInputBorder:{
    borderTopColor: '#F0F0F0',
    borderTopWidth: 1
  },
  messages:{
    flex:1
  },
  messageMe:{
    color:'red'
  },
  messageThem:{
    color:'blue'
  },
  messageNormal:{
    color:'black'
  },
  chatToUserToolBar:{
    backgroundColor: 'white',
    borderBottomColor: 'rgb(176, 174, 172)',
    borderBottomWidth: 0.23,
    paddingTop: 30,
    paddingBottom:10,
    flexDirection:'row'
  },
  chatToUserToolBarButton:{
    width:50,
    textAlign:'center'
  },
  chatToUserToolBarTitle:{
    flex:1,
    textAlign:'center',
    color:'#3cb2e2',
    fontSize: 20,
  },
  sendButton:{
    fontSize:30,
    paddingRight:10
  },
  sendToolBar:{
    flexDirection:'row',
    justifyContent:'space-between',
    padding:10,
    paddingTop:0
  },
  toolBarImage:{
    height:30,
    width:30
  }
})