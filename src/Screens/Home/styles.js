import { Dimensions, StyleSheet } from 'react-native'

const width = Dimensions.get('screen').width

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    image: {
        height: 200,
        backgroundColor: '#000'
    },
    restaurantCard: {
        marginTop: -48
    },
    actionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8
    },
    actionIcon: {
        fontSize: 24,
        color: '#fff'
    },
    actionText: {
        color: '#fff',
        paddingLeft: 8
    }
})