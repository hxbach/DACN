import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { user_getInfor } from "../api/user_getInfor";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { reset } from "../redux/actios/Actions";
const Profile = () => {
  const [emails, setEmail] = useState("");
  // const [passwords, setPassword] = useState("");
  // const [accessTokens, setAccessToken] = useState('')
  const [names, setName] = useState("");
  const [id, setId] = useState("")
  const navigation = useNavigation();
  const dispatch = useDispatch()
  useEffect(() => {
    const getDataUser = async () => {
      const email = await AsyncStorage.getItem("email");
      setEmail(email);
      user_getInfor().then((e) => {setName(e)
      setId(e._id)});
    };
    getDataUser();
  }, []);

  AsyncStorage.setItem("id", id)
  const clearData =async()=>{
    // await AsyncStorage.getAllKeys().then(keys => AsyncStorage.multiRemove(keys));
    dispatch(reset())
    navigation.navigate("Login")
    console.log();
  }
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
        <Text style={{ fontWeight: "600", fontSize: 18, marginLeft: 15 }}>
          My Profile
        </Text>
        <TouchableOpacity
          style={{
            width: 30,
            height: 30,
            marginRight: 20,
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Image
            source={require("../Screen/Images/setting.png")}
            style={{ width: 24, height: 24 }}
          />
        </TouchableOpacity>
      </View>
      <Image
        source={require("../Screen/Images/profile.png")}
        style={{ width: 80, height: 80, alignSelf: "center", marginTop: 30 }}
      />
      <Text style={{ alignSelf: "center", marginTop: 20, fontSize: 18 }}>
        {names.name}
      </Text>
      <TouchableOpacity
        style={{
          width: "90%",
          alignSelf: "center",
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: "#8e8e8e",
          justifyContent: "center",
        }}
        onPress={() => navigation.navigate("MyAddress")}
      >
        <Text style={{}}>My Address</Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={{
          width: "90%",
          alignSelf: "center",
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: "#8e8e8e",
          justifyContent: "center",
        }}
      >
        <Text style={{}}>Đơn hàng</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "90%",
          alignSelf: "center",
          height: 50,
          borderBottomWidth: 0.3,
          marginTop: 20,
          borderBottomColor: "#8e8e8e",
          justifyContent: "center",
        }}
        onPress={()=>navigation.navigate('ChangePass')}
      >
        <Text style={{}}>Đổi mật khẩu</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: "90%",
          alignSelf: "center",
          height: 50,
          // borderBottomWidth: 0.3,
          marginTop: 266,
          // borderBottomColor: "#8e8e8e",
          justifyContent: "center",
          alignItems: 'center',
          borderRadius: 9,
          borderWidth: 1
        }}
        onPress={()=>{
          clearData()
        }}
      >
        <Text style={{}}>Đăng xuất</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Profile;
