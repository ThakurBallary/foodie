import React, { useState } from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { DishCard } from '../../Cards'
import styles from './styles'

function Orders({ orders }) {
  const [showMore, setShowMore] = useState(false);

  const toggle = () => {
    setShowMore(!showMore)
  }

  const showOrders = orders.length > 2 && !showMore ? [orders[0], orders[1]] : orders

  return (
    <View style={styles.container}>
      <View style={styles.listHeaderContainer} >
        <Text style={styles.listHeader} >Review Orders</Text>
      </View>
      <View>
        <FlatList
          data={showOrders}
          extraData={showOrders}
          keyExtractor={dish => dish.id.toString()}
          renderItem={({ item, index }) => <DishCard dish={item} index={index} chat={true} />}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
        />
      </View>
      {
        orders.length > 2
          ? showOrders.length == 2
            ? <Text style={styles.more} onPress={toggle}>Show more</Text>
            : <Text style={styles.more} onPress={toggle}>Show less</Text>
          : null
      }
    </View>
  )
}

const mapStateToProps = state => {
  const orders = state.menuReducer.filter(dish => dish.quantity)
  return {
    orders
  }
}

export default connect(mapStateToProps)(Orders)