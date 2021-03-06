import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class SearchBarIcon extends Component {
  render () {
    return (
      // Search icon
      <Ionicons
        name="md-search"
        size={30}
        style={styles.searchIcon}
      />
    )
  }
}

const styles = StyleSheet.create({
  searchIcon: {
    top: 10,
    left: 12,
    width: 50,
    height: 50
  }
})
