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
  cameraRollContainer: {
    flex: 1,
    backgroundColor: '#F5FCFF'
  },
  cameraRollImageGrid: {
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
  }
})
