import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "Uber-x-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn",
  },
  {
    id: "Uber-XL-456",
    title: "Uber XL",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8",
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf",
  },
];
const Rideoptioncard = () => {
  const [selected, setselected] = useState(null);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <ScrollView>
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate("NavigateCard")}
            style={tw`absolute top-3 left-5 p-3 rounded-full`}
          >
            <Icon name="chevron-left" type="fontawesome" />
          </TouchableOpacity>
          <Text style={tw`text-center py-5 text-xl`}>Select a Ride -470mile</Text>
        </View>
        <FlatList
          data={data}
          keyExtractor={(i) => i.id}
          renderItem={({ item: { id, image, multiplier, title }, item }) => (
            <TouchableOpacity
              onPress={() => setselected(item)}
              style={tw`flex-row items-center justify-between px-10 ${
                id === selected?.id && "bg-gray-200"
              }`}
            >
              <Image
                style={{
                  width: 100,
                  height: 100,
                  resizeMode: "contain",
                }}
                source={{ uri: "https://links.papareact.com/3pn" }}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{title}</Text>
                <Text>Trave time....</Text>
              </View>
              <Text style={tw`text-xl`}>${multiplier* 99}</Text>
            </TouchableOpacity>
          )}
        />
        <View style={tw`fixedmt-auto border-t border-gray-200`}>
          <TouchableOpacity
            disabled={!selected}
            style={tw`bg-black py-3 m-3 ${!selected && "bg-gray-300"}`}
          >
            <Text style={tw`text-center text-white text-xl`}>
              Choose {selected?.title}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Rideoptioncard;

const styles = StyleSheet.create({});
