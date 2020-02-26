import React, { Component } from 'react'
import { View, Image, StyleSheet, Dimensions} from 'react-native'

export default class AccountIcon extends Component {
  render () {
    return (
      // Account icon
      <Image
        source={require('assets/account.png')}
        style={styles.icon}
      />
    )
  }
}

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35
  }
})
