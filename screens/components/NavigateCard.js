import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination } from "../../slices/navSlices";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";
const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning Deepak</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <GooglePlacesAutocomplete
          placeholder="Where to?"
          debounce={400}
          nearbyPlacesAPI="Googleplacessearch"
          minLength={2}
          styles={toInputboxStyle}
          query={{
            key: GOOGLE_MAP_APIKEY,
            language: "en",
          }}
          enablePoweredByContainer={false}
          fetchDetails={true}
          returnKeyType={"search"}
          onPress={(data, details = null) => {
            dispatch(
              setDestination({
                localStorage: details.geometry.location,
                description: data.description,
              })
            );
          }}
        />
        {/* <Text onPress={()=>navigate.navigate("rideOptioncard")} style={tw`text-center py-5 text-xl`}>Good morning Deepak</Text> */}
        <NavFavourites />
      </View>
      <View
        style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}
      >
        <TouchableOpacity
        onPress={()=>navigate.navigate("rideOptioncard")}
          style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
        >
          <Icon name="car" type="font-awesome" color="white" style={16} />
          <Text style={tw`text-white mt-1 text-center`}>Rides</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}
        >
          <Icon
            name="fast-food-outline"
            type="ionicon"
            color="black"
            style={16}
          />
          <Text style={tw`text-white mt-1 text-center text-black`}>Eats</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

const toInputboxStyle = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textinput: {
    backgroundColor: "#DDDDDF",
    borderRadius: 0,
    fontSize: 25,
  },
  textinputcontainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
