import { View, Text } from "react-native";
import React, { useState } from "react";
import { FlatList } from "react-native";
import CartItem from "../common/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { addToWishlist, removeFromCart, reset } from "../redux/actios/Actions";
import CommonButton from "../common/CommonButton";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { updateData } from "../api/updateData";
import PaypalAPI from "../api/PaypalAPI";
import reducers from "../redux/reducers/Reducers";
import uri from "../api/uri";
import { TouchableOpacity, Linking } from "react-native";

const Cart = () => {
  const cartData = useSelector((state) => state.reducers);
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const x = cartData.reduce((s, e) => s + e.price, 0);

  const set = async () => {
    try {
      await AsyncStorage.setItem("total", JSON.stringify(x));

      console.log("ok");
    } catch (error) {
      console.log("errroo");
    }
  };
  set();

  const onPressPaypal = async () => {
    try {
      const token = await PaypalAPI.generateToken();
      const res = await PaypalAPI.createOrder(token, ordersDetails).then(
        (result) => {
          if (result.links[1].href != "") {
            Linking.openURL(result.links[1].href);
            // dispatch(reset())


          }

         
        }
      );
      // console.log("res++++++", JSON.stringify(res));
    } catch (error) {
      console.log("erroo" + error);
    }
  };

  let ordersDetails = {
    intent: "CAPTURE",
    purchase_units: [
      {
        items: [
          {
            name: `${data.reducers.map((e) => e.name)}`,
            description: "Green XL",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: `${x.toString()}.00`,
            },
          },
        ],
        amount: {
          currency_code: "USD",
          value: `${x.toString()}.00`,
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: `${x.toString()}.00`,
            },
          },
        },
      },
    ],
    application_context: {
      return_url: `${uri}/success`,
      cancel_url: `${uri}/cancel`,
    },
  };
  const checkPayment =async() =>{
     const rlt = await PayPalAPI.checkOrderStatus(id, saveToken);
    console.log(rlt);
    const {id,name,  } = rlt
    if (rlt.status === "APPROVED") {
      // updateProduct()
      alert(
        "Thanh toán thành công, bạn có thể xoá sản phẩm khỏi giỏ hàng nếu muốn !"
      );
    } else {
      alert(
        "Thanh toán thất bại, vui lòng kiểm tra lại hoặc liên hệ hotline 083xxxx !"
      );
    }
  }

  return (
    <View style={{ flex: 1 }}>
      {cartData.length > 0 ? (
        <FlatList
          data={cartData}
          renderItem={({ item, index }) => {
            return (
              <CartItem
                onAddWishlist={(x) => {
                  dispatch(addToWishlist(x));
                }}
                item={item}
                onRemoveItem={() => {
                  dispatch(removeFromCart(index));
                }}
              />
            );
          }}
        />
      ) : (
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text>Chưa có sản phẩm nào được thêm</Text>
        </View>
      )}
      {cartData.length > 0 ? (
        <View style={{ marginBottom: 80 }}>
          <CommonButton
            bgColor={"green"}
            textColor={"#fff"}
            title={"Thanh toán"}
            onPress={() => {
              onPressPaypal();
            }}
          />
          {/* <CommonButton
            bgColor={"green"}
            textColor={"#fff"}
            title={"Kiểm tra trạng thái thanh toán"}
            onPress={() => {
              checkPayment();
            }}
          /> */}
        </View>
      ) : null}
    </View>
  );
};

export default Cart;
