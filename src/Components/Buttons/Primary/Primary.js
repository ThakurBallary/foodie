import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

import styles from './styles'

function PrimaryButton({ onPress, children, style }) {
    return (
        <TouchableOpacity 
            style={[styles.container, style]}
            onPress={onPress}
        >
            <Text style={styles.text}>
                {children}
            </Text>
        </TouchableOpacity>
    )
}

export default PrimaryButton