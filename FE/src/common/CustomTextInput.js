import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { TextInput } from "react-native-gesture-handler";

const CustomTextInput = ({
  value,
  onChangeText,
  placeHolder,
  icon,
  type,
  keyboardType,
}) => {
  return (
    <View
      style={{
        width: "85%",
        height: 50,
        paddingLeft: 20,
        borderWidth: 0.5,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 30,
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
      }}
    >
      <Image source={icon} style={{ width: 24, height: 24 }} />
      <TextInput
        keyboardType={keyboardType ? keyboardType : "default"}
        placeholder={placeHolder}
        style={{ paddingLeft: 10 }}
        secureTextEntry={type ? true : false}
        value={value}
        onChangeText={(txt) => onChangeText(txt)}
      />
    </View>
  );
};

export default CustomTextInput;
