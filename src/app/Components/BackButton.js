import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class BackButton extends Component {
  render () {
    return (
      // Drawer menu icon
      <Ionicons
        name="md-arrow-back"
        size={30}
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