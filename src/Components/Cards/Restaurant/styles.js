import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#fff',
        marginHorizontal: 16,
        padding: 8,
        elevation: 4,
        borderRadius: 2,
        shadowOffset: {
            width: 2,
            height: 2
        },
        shadowOpacity: 0.1,
        shadowRadius: 4
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 12
    },
    description: {
        paddingVertical: 2
    },
    actionContainer: {
        paddingVertical: 8
    }
})