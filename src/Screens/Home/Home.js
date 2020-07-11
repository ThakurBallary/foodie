import React from 'react'
import { ImageBackground, SafeAreaView, StatusBar, View } from 'react-native'

import { RestaurantCard } from '../../Components/Cards'
import { PrimaryHeader } from '../../Components/Headers'
import { Menu } from '../../Components/Lists'
import { ViewCart, MenuButton } from '../../Components/Buttons'
import styles from './styles'

function Home({ navigation }) {
  return (
    <>
      <StatusBar translucent backgroundColor='#0002' />
      <SafeAreaView style={styles.container}>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../Assets/Images/bg.png')}
            style={styles.image}
          >
            <PrimaryHeader
              icon1='arrow-back'
              icon2='share-outline'
              icon3='information-circle-outline'
            />
          </ImageBackground>

          <View style={styles.restaurantCard} >
            <RestaurantCard
              title='Inka Restaurant'
              rating='5.0(200+)'
              timming='All days : 09:00 AM - 06:00 PM'
              contactNumber='9854562142'
            />
          </View>

          <Menu />
        </View>
        <View style={{alignItems: "center"}}>
          <MenuButton />
        </View>
        <ViewCart navigation={navigation}/>
        
      </SafeAreaView>
    </>
  )
}

export default Home
