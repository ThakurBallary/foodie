import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingVertical: 8,
    },
    left: { flex: 1 },
    right: {},
    description: {
        fontSize: 12
    },
    price: {
        fontSize: 16,
        color: '#f80'
    },
    chat: {
        fontSize: 24, 
        alignSelf: 'flex-end', 
        marginTop: 8 
    }
})