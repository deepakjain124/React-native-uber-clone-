import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import tw from "twrnc";
import Map from "./components/Map";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigateCard from "./components/NavigateCard";
import Rideoptioncard from "./components/Rideoptioncard";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
const Mapscreen = () => {

  const stack=createNativeStackNavigator()
  const navigation=useNavigation()
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate("homescreen")} style={tw `bg-gray-100 shadow-lg rounded-full top-10 absolute left-5 p-3 z-50`}>
        <Icon name="menu"/>
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map />
      </View>
      <View style={tw`h-1/2`}>
        <stack.Navigator>
          <stack.Screen
          name="Navigatecard"
          component={NavigateCard}
          options={{
            headerShown:false
          }}
          />
          <stack.Screen
          name="rideOptioncard"
          component={Rideoptioncard}
          options={{
            headerShown:false
          }}
          />
        </stack.Navigator>
      </View>
    </View>
  );
};

export default Mapscreen;

const styles = StyleSheet.create({});
