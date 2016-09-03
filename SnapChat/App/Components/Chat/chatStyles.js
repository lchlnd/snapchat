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
  userRow: {
    padding: 10,
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: 'rgb(176, 174, 172)',
    borderBottomWidth: 0.23
  },
  userRowInfo: {
    flexDirection: 'column'
  },
  heading: {
    backgroundColor: '#3cb2e2',
    color: 'white',
    fontSize: 20,
    padding: 10
  },
  chatToUserToolBar:{
    backgroundColor: 'white',
    borderBottomColor: 'rgb(176, 174, 172)',
    borderBottomWidth: 0.23,
    color:'#3cb2e2',
    fontSize: 20,
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
  },
  textInput:{
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    alignItems:'flex-end',
    margin: 0
  },
  messages:{
    alignItems:'flex-end',
    flex:1
  },
  imageIcon: {
    width: 70
  },
  lastRecieved: {
    fontSize: 10,
    paddingTop: 3
  }
})

