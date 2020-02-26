import React, { Component } from 'react'
import { StyleSheet, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class AccountIcon extends Component {
  render () {
    return (
      // Settings icon
      <Ionicons
        name="md-settings"
        size={35}
        style={styles.icon}
      />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    color: 'rgba(0, 0, 0, 0.54)'
  }
})
