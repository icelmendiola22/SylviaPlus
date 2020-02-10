import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput} from 'react-native';
import BackButton from 'app/Components/BackButton.js'
import { SearchBar } from 'react-native-elements';
import SearchBarIcon from 'app/Components/SearchBarIcon.js';


export default class SearchPage extends React.Component {
  constructor() {
    super();
    this.state = {
      customStyleIndex: 0,
  };
}
    state = {
        search: '',
      };
    
      updateSearch = search => {
        this.setState({ search });
      };
    

    
  render () {
    const { search } = this.state;
    const { customStyleIndex } = this.state;

    return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
        <BackButton />
      </TouchableOpacity>
          <View style={styles.inputBox}>
            <TextInput style={styles.inputText}
            placeholder = 'Search'
            
            />
          <SearchBarIcon />
          </View>


        
    </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
    flex: 1
  },
  inputBox: {
    height: 40,
    borderColor: '#CAC1C1',
    borderWidth: 0,
    borderRadius: 7,
    borderBottomWidth: 1,
    borderColor: 'black',
    marginVertical: -30,
    marginHorizontal: 35,
    right: -15,
  },
  inputText: {
    marginHorizontal: 10,
    height: 49
  },
  // tabContent: {
  //   color: '#444444',
  //   backgroundColor: 'white',
  //   fontSize: 18,
  //   paddingTop: 30,
  //   marginHorizontal: 30,
  //   borderBottomLeftRadius: 8,
  //   borderBottomRightRadius: 8
  // },
})