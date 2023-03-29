import { View, Text, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import CustomTextInput from "../common/CustomTextInput";
import CommonButton from "../common/CommonButton";
import { useDispatch } from "react-redux";
import { addAddress } from "../redux/actios/Actions";

const AddAddress = () => {
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [Village, setVillage] = useState("");
  const [house, setHouse] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          width: "100%",
          height: 70,
          justifyContent: "space-between",
          alignItems: "center",
          flexDirection: "row",
          paddingTop: 50,
        }}
      >
        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            height: 32,
            width: 32,
            borderRadius: 10,
            //  paddingLeft: 12
            marginLeft: 10,
          }}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require("../Screen/Images/back-button.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <CustomTextInput
        value={city}
        onChangeText={(txt) => {
          setCity(txt);
        }}
        placeHolder={"Tỉnh hoặc thành phố"}
        icon={require("../Screen/Images/city.png")}
      />
      <CustomTextInput
        value={district}
        onChangeText={(txt) => {
          setDistrict(txt);
        }}
        placeHolder={"Huyện"}
        icon={require("../Screen/Images/building.png")}
      />
      <CustomTextInput
        value={Village}
        onChangeText={(txt) => {
          setVillage(txt);
        }}
        placeHolder={"Xã"}
        icon={require("../Screen/Images/village.png")}
      />
      <CustomTextInput
        value={house}
        onChangeText={(txt) => {
          setHouse(txt);
        }}
        placeHolder={"địa chỉ cụ thể, ví du: số nhà..."}
        icon={require("../Screen/Images/house.png")}
      />
      <CommonButton
        title={"Lưu địa chỉ"}
        onPress={() => {
          if (
            city !== "" &&
            district !== "" &&
            Village !== "" &&
            house !== ""
          ) {
            dispatch(
              addAddress({
                city: city,
                district: district,
                Village: Village,
                house: house,
              })
            );
            navigation.goBack()
            alert("Thêm địa chỉ thành công")
          }
        
         
        }}
        bgColor={"#000"}
        textColor={"#fff"}
      ></CommonButton>
    </View>
  );
};

export default AddAddress;
