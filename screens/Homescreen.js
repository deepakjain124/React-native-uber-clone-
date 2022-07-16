import {
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
  Text,
  View,
} from "react-native";
import React from "react";
import tw from "twrnc";
import Navoption from "./components/Navoption";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAP_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import { setDestination, setOrigin } from "../slices/navSlices";
import NavFavourites from "./components/NavFavourites";
const Homescreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://links.papareact.com/gzs",
          }}
        />
        <GooglePlacesAutocomplete
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            flextextInput: {
              fontSize: 180,
            },
          }}
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details?.geometry?.location,
                description: data?.description,
              })
            );
            dispatch(setDestination(null));
            console.log(data, "data");
            console.log(details, "details");
          }}
          //  fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: "AIzaSyAixqlHp-MOOu4FX9q1ARyD3eVdSaCnZXI",
            language: "en",
          }}
        />
        <Navoption />
        <NavFavourites />
      </View>
    </SafeAreaView>
  );
};

export default Homescreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
});
