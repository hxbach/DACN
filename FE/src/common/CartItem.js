import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";
import { TouchableOpacity } from "react-native";

const CartItem = ({ item, onaAddToCart,onRemoveItem, onAddWishlist, onRemoveFromWishList,isWishList }) => {
  const [count, setCount] = useState(0);
  return (
    <ScrollView style={{ paddingTop: 70 }}>
      <TouchableOpacity
        style={{
          borderRadius: 20,
          elevation: 5,
          width: "94%",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 10,
          backgroundColor: "#fff",
          marginBottom: 10,
        }}
      >
        <View style={{ width: "100%" }}>
          <Image
            source={item.image}
            style={{
              width: "100%",
              height: 140,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />

          <Text
            style={{
              marginTop: 10,
              marginLeft: 10,
              fontSize: 18,
              fontWeight: "600",
            }}
          >
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 10,
            }}
          >
            <Text
              style={{
                marginTop: 5,
                marginLeft: 10,
                fontSize: 18,
                fontWeight: "600",
                marginBottom: 10,
              }}
            >
              {"đ" + item.price}
            </Text>
                      {isWishList ? (<TouchableOpacity
                          style={{
                              borderWidth: 0.5,
                              padding: 5,
                              justifyContent: "center",
                              alignItems: "center",
                              borderRadius: 10,
                              marginRight: 15,
                          }}
                          //onPress={addcart}
                          onPress={() => {
                              onaAddToCart(item);
                          }}
                      >
                          <Text style={{ color: "#000" }}>Add to cart</Text>
                      </TouchableOpacity>) : (
              <TouchableOpacity
                style={{
                  borderWidth: 0.5,
                  padding: 5,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  marginRight: 15,
                }}
                //onPress={addcart}
                onPress={() => {
                  onRemoveItem();
                }}
              >
                <Text style={{ color: "#000" }}>Remove product</Text>
              </TouchableOpacity>
            )}
          </View>
          {isWishList ? (
            <TouchableOpacity
              style={{
                width: 40,
                elevation: 5,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onPress={() => {
                onRemoveFromWishList();
              }}
            >
              <Image
                source={require("../Screen/Images/red_heart.png")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={{
                width: 40,
                elevation: 5,
                height: 40,
                backgroundColor: "#fff",
                borderRadius: 20,
                justifyContent: "center",
                alignItems: "center",
                position: "absolute",
                top: 10,
                right: 10,
              }}
              onPress={() => {
                onAddWishlist(item);
              }}
            >
              <Image
                source={require("../Screen/Images/heart.png")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          )}
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default CartItem;
