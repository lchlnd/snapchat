import { StyleSheet } from 'react-native'

export const meStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#0f0f0f'
    },
    buttonText: {
        fontSize: 24,
        color: 'white',
        textAlign: 'center',
        letterSpacing: 1,
        alignSelf: 'stretch',
        fontWeight: 'bold',
        padding: 10
    },
    header: {
        padding: 20
    },
    image: {
        padding: 20
    },
    barcodeImage: {
        alignSelf: 'center',
        width: 150,
        height: 150
    },
    name: {
        fontSize: 18,
        textAlign: 'center',
        color: 'white'
    },
    username: {
        fontSize: 10,
        textAlign: 'center',
        color: 'white',
        paddingBottom: 20
    },
    iconLeft: {
        position: 'absolute',
        left: 0
    },
    iconMiddle: {
        position: 'absolute',
        left: 170
    },
    iconRight: {
        position: 'absolute',
        right: 0
    },
    iconText: {
        color: 'white',
        fontSize: 16
    },
    cameraButton: {

    }
})