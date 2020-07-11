import React from 'react'
import { Text, View } from 'react-native'
import { bindActionCreators } from "redux";
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/Ionicons'

import { decreaseQuantity, increaseQuantity } from '../../../Redux/Actions'
import { QuantityButton, AddButton } from '../../Buttons'
import styles from './styles'

function DishCard({ dish, index, decreaseQuantity, increaseQuantity, chat }) {
    return (
        <View style={styles.container}>
            <View style={styles.left}>
                <Text style={styles.name}>
                    {dish.name}
                </Text>
                <Text style={styles.description}>
                    {dish.description}
                </Text>
                <Text style={styles.price}>
                    €{dish.price}
                </Text>
            </View>
            <View style={styles.right}>
                {
                    dish.quantity
                        ?
                        <QuantityButton
                            quantity={dish.quantity}
                            decrease={() => decreaseQuantity(index)}
                            increase={() => increaseQuantity(index)}
                        />
                        :
                        <AddButton onPress={() => increaseQuantity(index)} />
                }
                {
                    chat
                        ? <Icon name='chatbubbles' style={styles.chat} />
                        : null
                }
            </View>
        </View>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        decreaseQuantity: bindActionCreators(decreaseQuantity, dispatch),
        increaseQuantity: bindActionCreators(increaseQuantity, dispatch)
    };
};

export default connect(null, mapDispatchToProps)(DishCard)