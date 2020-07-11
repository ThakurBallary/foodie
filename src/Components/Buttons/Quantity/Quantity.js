import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

import styles from './styles'

function QauntityButton({ quantity, decrease, increase }) {
    return (
        <View style={styles.container}>
        <TouchableOpacity 
            style={styles.action}
            onPress={decrease}
        >
            <Text style={styles.actionText}> - </Text>
        </TouchableOpacity>
        <Text style={styles.count}> { quantity } </Text>
        <TouchableOpacity 
            style={styles.action}
            onPress={increase}
        >
            <Text style={styles.actionText}> + </Text>
        </TouchableOpacity>
        </View>
    )
}

export default QauntityButton