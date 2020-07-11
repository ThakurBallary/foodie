import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux'

import styles from './styles'

function TotalCostCard({ totalCost }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Total Cost
            </Text>
            <Text style={styles.description}>
                €{totalCost}.00
            </Text>
        </View>
    )
}

const mapStateToProps = state => {
    const orders = state.menuReducer.filter(dish => dish.quantity)
    let totalCost = 0.00;
    orders.forEach(order => {
        totalCost += order.price * order.quantity
    });
    return {
        totalCost
    }
}

export default connect(mapStateToProps)(TotalCostCard)