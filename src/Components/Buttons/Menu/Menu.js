import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import { SecondaryButton } from '../'
import styles from './styles'

function MenuButton() {
    return (
        <SecondaryButton
            onPress={()=>{}}
            style={styles.container}
        >
            <View style={styles.actionContainer}>
                <Icon name='restaurant-outline' style={styles.actionIcon} />
                <Text style={styles.actionText}> MENU </Text>
            </View>
        </SecondaryButton>
    )
}

export default MenuButton

