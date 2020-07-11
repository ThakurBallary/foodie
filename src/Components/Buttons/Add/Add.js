import React from 'react'
import { Text, View } from 'react-native'

import { SecondaryButton } from '../'
import styles from './styles'

function AddButton({ onPress }) {
    return (
        <SecondaryButton
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.actionContainer}>
                <Text style={styles.actionText}> ADD </Text>
            </View>
        </SecondaryButton>
    )
}

export default AddButton

