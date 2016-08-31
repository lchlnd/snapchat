import { StyleSheet } from 'react-native'

export const settingsStyles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        marginTop: 30,
        paddingBottom:10,
        flexDirection:'row',
        borderBottomColor: '#e8e8e8',
        borderBottomWidth: 1
    },
    backArrow: {
        width: 30,
        height: 30
    },
    headerTitle: {
        color: '#32B199',
        fontSize: 22,
        textAlign: 'center',
        flex: 1
    }
})