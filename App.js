import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  ImageBackground,
} from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import {
  FontAwesome,
  FontAwesome5,
  Entypo,
  MaterialIcons,
} from "@expo/vector-icons";

const statusHeight = getStatusBarHeight();
const width = Dimensions.get("window").width;
export default function App() {
  const color = "#dfc128";
  return (
    <ImageBackground
      blurRadius={15}
      source={{
        uri: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/items/619150/3bb00cbe95127f2fe36c85a33cfe69f4e5911234.jpg",
      }}
      style={[styles.container, { width: "100%", height: "100%" }]}
    >
      <StatusBar style="auto" />
      <View style={{ flex: 1, marginHorizontal: 20, marginVertical: 20 }}>
        <View style={styles.image}>
          <ImageBackground
            blurRadius={15}
            style={{
              width: width - 40,
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
            }}
            source={{
              uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&w=1000&q=80",
            }}
          >
            <Image
              style={{
                width: "50%",
                height: "50%",
                borderWidth: 2,
                borderColor: "white",
                borderRadius: 100,
              }}
              source={{
                uri: "https://i1.sndcdn.com/artworks-000463878582-wxs9q9-t500x500.jpg",
              }}
            />
          </ImageBackground>
        </View>
        <View
          style={[
            {
              backgroundColor: color,
            }, styles.midBtn
          ]}
        >
          <MaterialIcons name="done" size={30} color="white" />
        </View>
        <View style={styles.Text}>
          <View style={{ marginVertical: 20, marginTop: 70 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "black" }}>
              Mike Parker
            </Text>
          </View>
          <View>
            <Text style={{ fontSize: 15, color: "black", textAlign: "center" }}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Text>
          </View>
          <View style={{ flexDirection: "row", marginVertical: 20 }}>
            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <FontAwesome name="facebook-f" size={24} color={color} />
            </View>
            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <FontAwesome name="twitter" size={24} color={color} />
            </View>
            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <FontAwesome5 name="dribbble" size={24} color={color} />
            </View>

            <View
              style={[
                styles.Icon,
                {
                  borderColor: color,
                },
              ]}
            >
              <Entypo name="behance" size={24} color={color} />
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: statusHeight,
  },
  image: {
    flex: 1,
    backgroundColor: "pink",
  },
  Text: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  Icon: {
    borderWidth: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  midBtn: {
    zIndex: 100,
    width: 50,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    marginTop: -50,
    left: (width - 100) / 2,
    top: 20,
  },
});
