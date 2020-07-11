import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { PrimaryButton } from '../../Buttons'
import styles from './styles'

function RestaurantCard({ title, rating, timming, contactNumber }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                {title}
            </Text>
            <Text style={styles.description}>
                <Icon name='star-outline' /> {rating} | {timming}
            </Text>
            <Text style={styles.description}>
                <Icon name='call-outline' /> Reach us at : {contactNumber}
            </Text>
            <View style={styles.actionContainer}>
                <PrimaryButton
                    onPress={()=>{}}
                    style={{borderRadius: 8}}
                >
                    BOOK A TABLE
                </PrimaryButton>
            </View>
        </View>
    )
}

export default RestaurantCard