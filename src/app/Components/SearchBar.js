import React, { Component } from 'react'
import { StyleSheet, Image, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons'


var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

export default class SearchBar extends Component {
  render () {
    return (
      // Search bar menu icon
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
    top: -19,
    left: 240
  }
})
