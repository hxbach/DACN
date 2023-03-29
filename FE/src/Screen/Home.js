import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import Main from "../bottom/Main";
import Search from "../bottom/Search";
import Cart from "../bottom/Cart";
import WishList from "../bottom/WishList";
import Profile from "../bottom/Profile";
import { useSelector } from "react-redux";
import reducers from "../redux/reducers/Reducers";
//import Loader from '../common/Loader'

const Home = ({ onAddToCart }) => {
  // const [modalVisible, setModalVisible] = useState(false)
  const [selectedTab, setSelectedTab] = useState(0);
  const data = useSelector(state=>state)
  

   
  return (
    
    <View style={{ flex: 1 }}>
      {selectedTab == 0 ? (
        <Main />
      ) : selectedTab == 1 ? (
        <Search />
      ) : selectedTab == 2 ? (
        <Cart />
      ) : selectedTab == 3 ? (
        <WishList />
      ) : (
        <Profile />
      )}
      
      <View
        style={{
          width: "100%",
          height: 70,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {/* Home */}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => {
            setSelectedTab(0);
          }}
        >
          <Image
            source={require("../Screen/Images/home.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 1 ? "#000" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
        {/* search */}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setSelectedTab(1)}
        >
          <Image
            source={require("../Screen/Images/calendar.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 2 ? "#000" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
        {/* Cart */}
        <View
          style={{
            width: "20%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TouchableOpacity
            style={{
              width: 44,
              height: 44,
              backgroundColor: selectedTab == 2 ? "green" : "#000",
              borderRadius: 22,
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => setSelectedTab(2)}
          >
            <Image
              source={require("../Screen/Images/bag.png")}
              style={{ width: 24, height: 24, tintColor: "#fff" }}
            />
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: "red",
                borderRadius: 7,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 3,
                right: 3,
              }}
            >
              <Text style={{ color: "#fff", fontWeight: "600" }}>{data.reducers.length
              }</Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* heart */}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setSelectedTab(3)}
        >
          <Image
            source={require("../Screen/Images/heart.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 3 ? "#000" : "#8e8e8e",
            }}
          />
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "red",
              borderRadius: 7,
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: 15,
              right: 15,
            }}
          >
            <Text style={{ color: "#fff", fontWeight: "600" }}>{data.reducers2.length}</Text>
          </View>
        </TouchableOpacity>
        {/*  user*/}
        <TouchableOpacity
          style={{
            width: "20%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
          }}
          onPress={() => setSelectedTab(4)}
        >
          <Image
            source={require("../Screen/Images/user.png")}
            style={{
              width: 24,
              height: 24,
              tintColor: selectedTab == 4 ? "#000" : "#8e8e8e",
            }}
          />
        </TouchableOpacity>
        {/* <Loader modalVisible={modalVisible} setModalVisible={setModalVisible}/> */}
      </View>
    </View>
  );
};

export default Home;
