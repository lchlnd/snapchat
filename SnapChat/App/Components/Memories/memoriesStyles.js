import { StyleSheet, Image } from 'react-native'

export const memoriesStyles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30
  },
  title: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: 'indianred',
    fontSize: 18
  },
  tabStyle: {
    backgroundColor: 'indianred',
    width: 80
  },
  imageRollContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  imageRollImageGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },
  cameraRollImage: {
    width: 110,
    height: 110,
    margin: 5
  },
  snapsRollImage: {
    width: 150,
    height: 150,
    margin: 5
  },
  selectedImageContainer: {
    flex: 1,
    backgroundColor: 'black',
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  selectedImage: {
    width: 350,
    height: 350,
    resizeMode: Image.resizeMode.cover,
    alignSelf: 'center'
  },
  backArrowContainer: {
    position: 'absolute',
    left: 10,
    top: 10
  },
  backArrow: {
    height: 35,
    width: 35
  },
  selectedImageFooter: {
    marginTop: 20,
    alignSelf: 'stretch'
  },
  footerMenu: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    position: 'relative'
  },
  utilIcons: {
    position: 'absolute',
    marginLeft: 40,
    flexDirection: 'row'
  },
  icon: {
    height: 25,
    width: 25,
    margin: 5
  },
  sendIcon: {
    position: 'absolute',
    right: 50,
    height: 55,
    width: 55,
    marginLeft: 30
  },
  snapContainer: {
    flex: 1
  }
})
