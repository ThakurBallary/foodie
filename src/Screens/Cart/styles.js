import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    headerContainer: {
        backgroundColor: '#000',
    },
    actionText: {
        color: '#fff',
        paddingVertical: 16
    }
})