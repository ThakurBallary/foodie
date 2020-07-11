import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { DishCard } from '../../Cards'
import styles from './styles'

function Menu({ menu }) {
  return (
    <View style={styles.container}>
      <View style={styles.listHeaderContainer} >
        <Text style={styles.listHeader} >Starter</Text>
      </View>

      <FlatList
        data={menu}
        extraData={menu}
        keyExtractor={dish => dish.id.toString()}
        renderItem={({item})=> <DishCard dish={item} /> }
        />
    </View>
  )
}

const mapStateToProps = state => {
  return {
    menu: state.menuReducer
  }
}

export default connect(mapStateToProps)(Menu)