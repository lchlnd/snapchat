import { StyleSheet } from 'react-native'

export const myFriendsStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 30,
        paddingBottom:10,
        flexDirection:'row'
    },
    backArrow: {
        width: 30,
        height: 30
    },
    headerTitle: {
        color: 'black',
        fontSize: 22,
        textAlign: 'center',
        flex: 1
    }
})