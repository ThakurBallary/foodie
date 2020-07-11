import React from 'react'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

import styles from './styles'

function PrimaryHeader({ icon1, icon1onPress, title, icon2, icon3 }) {
    return (
        <View style={styles.container}>
            <Icon 
                name={icon1} 
                style={styles.icon}
                onPress={icon1onPress ? icon1onPress : () => {}}
            />
            <Text style={styles.title}>{title}</Text>
            {
                icon2
                ?
                <Icon name={icon2} style={styles.icon}/>
                : null
            }
            {
                icon3
                ?
                <Icon name={icon3} style={styles.icon}/>
                : null
            }
        </View>
    )
}

export default PrimaryHeader