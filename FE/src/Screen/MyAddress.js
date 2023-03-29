import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { removeAddress } from "../redux/actios/Actions";

const MyAddress = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const addAddressList = useSelector((state) => state.addAddressReducers);
  console.log(addAddressList);
  useEffect(() => {}, [isFocused]);
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
        <Image
          source={require("../Screen/Images/location.png")}
          style={{
            height: 24,
            width: 24,
            paddingLeft: 10,
            marginRight: -150,
            marginLeft: 15,
          }}
        />
        <Text style={{ fontWeight: "600", fontSize: 16, marginLeft: 15 }}>
          Địa chỉ
        </Text>
        <TouchableOpacity
          style={{
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            borderWidth: 0.2,
            padding: 0,
            borderRadius: 9,
            height: 22,
            width: 105,
          }}
          onPress={() => navigation.navigate("AddAddress")}
        >
          <Text>Thêm địa chỉ</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={addAddressList}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                width: "100%",
                marginTop: 20,
                // height: 60,
                borderWidth: 0.7,
                borderColor: "#8e8e8e",
                alignSelf: "center",
                justifyContent: 'space-between',
                flexDirection: "row",
                alignItems: 'center'
              }}
            >
              <View>
                <Text style={{ marginLeft: 10 }}>{"Tỉnh: " + item.city}</Text>
                <Text style={{ marginLeft: 10 }}>
                  {"Huyện: " + item.district}
                </Text>
                <Text style={{ marginLeft: 10 }}>{"Xã: " + item.Village}</Text>
                <Text style={{ marginLeft: 10, marginBottom: 10 }}>
                  {"Nhà riêng: " + item.house}
                </Text>
              </View>
              <TouchableOpacity
                style={{ borderWidth: 0.6, padding: 7, marginRight: 20, }}
                onPress={() => {
                  dispatch(removeAddress(index));
                }}
              >
                <Text>Xoá địa chỉ này</Text>
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default MyAddress;
