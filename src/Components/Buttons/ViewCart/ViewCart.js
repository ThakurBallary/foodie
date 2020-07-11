import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import { PrimaryButton } from '../'
import styles from './styles'

function ViewCart({ count, navigation }) {
    return (
        <PrimaryButton
            onPress={() => navigation.navigate('Cart')}
        >
            <View style={styles.actionContainer}>
                <Icon name='cart-outline' style={styles.actionIcon} />
                <Text style={styles.actionText}>VIEW CART ({count} ITEMS) </Text>
            </View>
        </PrimaryButton>
    )
}

const mapStateToProps = state => {
    const orders = state.menuReducer.filter(dish => dish.quantity)
    let count = 0;
    orders.forEach(e => {
        count += e.quantity
    });
    return {
        count
    }
}

export default connect(mapStateToProps)(ViewCart)

