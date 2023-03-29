import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 1000);
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Image
        source={require("../Screen/Images/logiii.png")}
        style={{
          width: 200,
          height: 200,
          borderRadius: 50,
          resizeMode: "center",
        }}
      />
    </View>
  );
};

export default Splash;
