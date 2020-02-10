import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

export default class HeaderLogo extends Component {
  render () {
    return (
      // Logo
      <Image
        source={require('assets/headerLogo.png')}
        style={styles.logo}
      />
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    height: 35,
    width: 100
  },
})
