import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import tw from "twrnc"
const data=[
    {
        id: "123",
        icon: "home",
        location: "Home",
        destination: "Scheme 4 ,Alwar",
      },
      {
        id: "456",
        icon: "work",
        location: "work",
        destination: "Consolebit Tech pvt. ltd.",
      },
]
const NavFavourites = () => {
  return (
   <FlatList
   data={data}
   ItemSeparatorComponent={()=>{
    return <View
    style={[tw `bg-gray-200 h-full`,{height:0.5}]}
    />
   }}
   keyExtractor={(item)=>item.id}
   renderItem={({item:{location,destination,icon}})=>{
    return <TouchableOpacity style={tw `flex-row items-center p-3`}>
            <Icon
            style={tw `mr-4 rounded-full bg-gray-300 p-3`}
            name={icon}
            color="white"
            size={18}
            />
            <View>
              <Text style={tw `font-semibold text-lg`}>{location}</Text>
              <Text style={tw `text-gray-500`}>{destination}</Text>
            </View>
    </TouchableOpacity>
   }}
   />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})