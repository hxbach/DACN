import { View, Text } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart, removeFromWishlist } from "../redux/actios/Actions";

const WishList = () => {
  const [cartList, setCatList] = useState([]);
  const cartData = useSelector((state) => state.reducers2);
  const dispatch = useDispatch();

  return (
    <View style={{ flex: 1 }}>
      {cartData.length > 0 ? (<FlatList
        data={cartData}
        renderItem={({ item, index }) => {
          return (
            <CartItem
              item={item}
              isWishList={"yesssss"}
              onRemoveFromWishList={() => { dispatch(removeFromWishlist(index)) }}
              onaAddToCart={(x) => {
                dispatch(addItemToCart(x));
              }}
            />
          );
        }}
      />) : (<View
        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
      >
        <Text>Chưa có sản phẩm yêu thích nào</Text>
      </View>)}

    </View>
  );
};

export default WishList;
