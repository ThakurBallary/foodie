import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 16
    },
    listHeaderContainer: {
        paddingTop: 32,
        paddingBottom: 16
    },
    listHeader: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    more: {
        textDecorationLine: 'underline',
        alignSelf: 'flex-end'
    },
    separator: {
        borderTopWidth: 1, 
        borderTopColor: '#eee' 
    }
})