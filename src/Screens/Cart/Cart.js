import React from 'react'
import { SafeAreaView, StatusBar, View } from 'react-native'

import { TotalCostCard } from '../../Components/Cards'
import { PrimaryHeader } from '../../Components/Headers'
import { Orders } from '../../Components/Lists'
import { PrimaryButton } from '../../Components/Buttons'
import styles from './styles'

function Cart({ navigation }) {
  return (
    <>
      <StatusBar translucent backgroundColor='#0002' />
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <View style={styles.headerContainer}>
            <PrimaryHeader
              icon1='arrow-back'
              icon1onPress={navigation.goBack}
              title='My Cart'
            />
            <View style={{alignItems: 'center', paddingVertical: 24}}>
              <TotalCostCard />
            </View>
          </View>

          <Orders />
        </View>

        <PrimaryButton
          onPress={()=>{}}
          style={styles.actionText}
        >
          PLACE ORDER
        </PrimaryButton>
        
      </SafeAreaView>
    </>
  )
}

export default Cart
