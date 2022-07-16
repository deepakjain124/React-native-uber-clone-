import { StyleSheet, Text, View } from "react-native";
import React, { useEffect,useRef } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import { useSelector } from "react-redux";
import { selectdestination, selectorigin } from "../../slices/navSlices";
import MapViewDirections from "react-native-maps-directions";
import { GOOGLE_MAP_APIKEY } from "@env";
// import  from "twrnc";
const Map = () => {
  const origin = useSelector(selectorigin);
  const destination = useSelector(selectdestination);
  const mapref = useRef(null);

  useEffect(() => {
    if (!origin || !destination) return;

    mapref.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: {
        top: 50,
        right: 50,
        bottom: 50,
        left: 50,
      },
    });
  }, [origin, destination]);

  useEffect(()=>{
    if(!origin | !destination) return
    const gettraveltime=()=>{
      // const url =
    }
    gettraveltime()
  },[origin,destination,GOOGLE_MAP_APIKEY])
  return (
    <View style={tw `flex-1`}>
      <MapView
        ref={mapref}
        style={styles.a}
        mapType="mutedStandard"
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          //   latitude: origin.location.lat,
          //   longitude: origin.location.lng,
          //   latitudeDelta: 0.05,
          //   longitudeDelta: 0.005,
        }}
      >
        {origin && destination && (
          <MapViewDirections
            origin={origin.description}
            destination={destination.description}
            apikey={GOOGLE_MAP_APIKEY}
            strokeColor="black"
            strokeWidth={3}
          />
        )}
        {origin?.location && (
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="Origin"
            // description={origin.description}
            identifier="origin"
          />
        )}

        {destination?.location && (
          <Marker
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            title="Origin"
            // description={origin.description}
            identifier="origin"
          />
        )}
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  a: {
    flex: 1,
  },
});
