import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class DrawerButton extends Component {
  render () {
    return (
      // Drawer menu icon
      <Ionicons
        name="md-menu"
        size={35}
        style={styles.menuIcon}
      />
    )
  }
}

const styles = StyleSheet.create({
  menuIcon: {
    top: 10,
    left: 12,
    width: 50,
    height: 50
  }
})
