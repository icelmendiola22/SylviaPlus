import React from 'react'
import { StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class MenuButton extends React.Component {
  render () {
    return (
      <Ionicons
        name="md-menu"
        size={32}
        style={styles.menuIcon}
      />

    )
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    top: 28,
    left: 12,
    width: 50,
    height: 50
  }
})
