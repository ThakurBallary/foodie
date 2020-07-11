import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        elevation: 4,
        borderRadius: 4,
        marginBottom: 16,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    actionIcon: {
        fontSize: 20,
        color: '#000'
    },
    actionText: {
        color: '#000',
        paddingLeft: 4
    }
})
