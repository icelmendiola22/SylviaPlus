import React, { Component } from "react";
import {ScrollView, Text, View, StyleSheet,TextInput, TouchableOpacity, SafeAreaView, Dimensions, Button} from "react-native";
import { Icon, Input  } from 'react-native-elements';
import { NavigationActions } from "react-navigation";
import Constants from 'expo-constants';
import DrawerButton from "app/Components/DrawerButton.js";
import HeaderLogo from "app/Components/HeaderLogo.js";
import SearchBarIcon from "app/Components/SearchBarIcon.js";
import ShoppingCartIcon from "app/Components/ShoppingCartIcon.js";

// Get width of iPhone/Android screen
var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

//add to app.js
export default class Ship extends Component {
 // toggleDrawer is a static function that controls the drawer menu button
 toggleDrawer = () => {
  this.props.navigation.toggleDrawer();
};

render() {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>  
      <View style={styles.headerContainer}>
        <View style={styles.headerFlexRow}>
          <View style={styles.menuIcon}>
            <TouchableOpacity onPress={() => this.toggleDrawer()}>
              <Icon name='arrow-back' type='MaterialIcons'/>
            </TouchableOpacity>
          </View>
          <View style={styles.logoHeader}>
            <Text style={styles.title}> Checkout </Text>
          </View>
          <View style={styles.searchCartIcon}>
            <TouchableOpacity onPress={() => this.toggleSearch()}>
              <SearchBarIcon />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.toggleCart()}>
              <ShoppingCartIcon />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.navContainer}>
       <Text style={styles.navTxt}>Cart</Text>
       <Icon style={styles.arrowIcon} name='keyboard-arrow-right' type='MaterialIcons' color='#636363'/>
       <Text style={styles.navTxt}>Information</Text>
       <Icon style={styles.arrowIcon} name='keyboard-arrow-right' type='MaterialIcons' color='#636363'/>
       <Text style={styles.navTxt}>Shipping</Text>
      </View>

      <View style={styles.subHeaderContainer}>
       <Text style={styles.subHeader}> Shipping Information</Text>
      </View>
      
      <View style={styles.bodyContainer}>
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText}
            placeholder="First name"
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText}
            placeholder="Last name"
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText}
            placeholder="Address" 
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText}
            placeholder="Apartment, suite, etc. (optional)"
          />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText}
            placeholder="City"
          />
        </View>  
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText2}
            placeholder="Country/Region"
          />
            <Text style={styles.inputText3}> United States </Text>
        </View>  
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText2}
            placeholder="State"
          />
          <Text style={styles.inputText3}> California </Text>
        </View>  
        <View style={styles.inputBox}>
          <TextInput style={styles.inputText}
            placeholder="Zip code"
          />
      </View>  
      
      <View style={{flexDirection: 'row', left: 20}}>
        <Icon name='check-box-outline-blank' type='MaterialIcons'/>
        <Text style={styles.txt}> Save this information for next time</Text>
      </View>
      <View style={{marginBottom: 50}}>
        <TouchableOpacity style={styles.boxButton} >
          <Text style={styles.txtBox}>Continue to Shipping</Text>
        </TouchableOpacity>
      </View>
    </View> 
    </ScrollView> 
    </SafeAreaView>
  );
}
}
const styles = StyleSheet.create({
mainContainer: {
  flex: 1,
  marginTop: Constants.statusBarHeight,
},
headerContainer: {
  height: 50,
  //borderBottomColor: '#636363',
},
txtContainer: {
  height: 40,
  width: width,
  marginTop: 21,
  flexDirection:'row',
  backgroundColor: '#00000000',
  borderBottomColor: '#CAC1C1',
  borderBottomWidth: 1,
  borderTopColor: '#CAC1C1',
  borderTopWidth: 1,
},
subHeaderContainer: {
  top: -13,
},
bodyContainer: {
  flex: 1,
  top: 30,
},  
navContainer : {
  flexDirection: 'row',
  justifyContent: 'flex-start',
  //borderTopColor: '#636363',
  left: 9,
},
scrollView: {
  marginHorizontal: 20,
},
headerFlexRow: {
  flex: 1,
  flexDirection: 'row',
},
menuIcon: {
  width: width / 8,
  height: 50,
  top: 20,
},
logoHeader: {
  width: width/8 * 5,
  height: 50,
  alignItems: 'center',
  justifyContent: 'center',
  left: 12,
},
searchCartIcon: {
  width: width/8 * 2,
  height: 50,
  flexDirection: 'row',
  justifyContent: 'flex-end'
},
arrowIcon: {
  flex: 1,
  alignItems: 'center',
},
title: {
  fontFamily: "serif",
  fontWeight: "bold",
  fontSize: 20,
  alignItems: "center", 
  color: '#636363',
},
subHeader: {
  position: 'absolute',
  width: 173,
  height: 25,
  left: 14,
  top: 20,
  fontWeight: 'normal',
  fontSize: 16 ,
  height: 18 ,
  color: '#000000',
  },
txt: {
  fontWeight: "normal",
  fontSize: 15,
  letterSpacing: 0.01,
  color: "#636363",
  //left: 25,
  height: 17,
},
navTxt : {
  fontWeight: "normal",
  fontSize: 11,
  letterSpacing: 0.01,
  color: '#828181',
  height: 12,

  //left: 10,
  //paddingLeft: 10,
  top: 3,
},
inputText: {
  marginHorizontal: 10,
  height: 49
},
inputText2: {
  marginLeft: 10, 
  marginTop: 4, 
  marginBottom: 0, 
  bottom: 10
},
inputText3: {
  marginLeft: 10,
  bottom: 15
},
txtBox: {
  position: "absolute",
  fontSize: 18,
  height: 24,
  alignContent: "center",
  left: 100,
  top: 10,
},
boxButton: {
  width: width/8*7,
  height: 49,
  borderColor: "#CAC1C1",
  borderWidth: 1,
  borderRadius: 10,
  marginVertical: 10,
  marginHorizontal: 20,
  backgroundColor: '#29524A',

},
inputBox: {
  height: 49,
  borderColor: '#CAC1C1',
  borderWidth: 1,
  borderRadius: 7,
  marginVertical: 10,
  marginHorizontal: 20,
  width: width/8 * 7,
},
});
