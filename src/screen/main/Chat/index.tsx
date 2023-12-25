import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import { chatList, chatList2 } from "../../../utils/Data";
import CustomModal from "../../../components/CustomModal";
import CustomButton from "../../../components/CustomButton";
import { images } from "../../../assets";
import ShadowButton from "../../../components/ShadowButton";
import CustomView from "../../../components/CustomView";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomInput from "../../../components/CustomInput";
type Props = {
  navigation?: any;
};

const Chat = ({ navigation }: Props) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [isLogin, setIsLogin] = useState<any>("");

  useEffect(() => {
    getLogin();
  });

  const getLogin = async () => {
    const res = await AsyncStorage.getItem("isLogin");
    setIsLogin(res);
  };
  return (
    <ScrollView

      scrollEnabled={true}
      style={{ backgroundColor: "#1E1E1E" }}>
      <View style={styles.container}>
        <View
          style={{
            alignItems: "center",
            marginTop: 10,
            zIndex: 20,
            flexDirection: "row",
            width: "100%",
          }}
        >
          <ShadowButton onPress={() => navigation.goBack()}>
            <Image
              source={images.backArrow}
              style={{
                width: 18,
                height: 18,
                resizeMode: "contain",
                tintColor: "white",
              }}
            />
          </ShadowButton>
          <CustomText
            text={"Chat"}
            size={22}
            fontFam="Poppins"
            weight={700}
            style={{ zIndex: 999, marginLeft: "32%" }}
          />
        </View>
        <CustomView
          innerButtonStyle={{
            flexDirection: "row",
            alignItems: "center",
          }}
          outerStyle={{
            marginVertical: "5%",
          }}
          height={50}
          width={"100%"}
          borderRadius={32}
        >
          <Image
            source={images.search}
            style={{
              width: 37,
              height: 37,
              marginLeft: 8,
            }}
          />
          <CustomInput
            height={45}
            placeholder="Search"
            textColor={colors.xlightWhite}
          />
        </CustomView>
        <FlatList
          data={chatList2}
          contentContainerStyle={{
            gap: 12,
            marginBottom: "30%",
          }}
          scrollEnabled={false}
          renderItem={({ item, index }) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  if (isLogin == "disActive") {
                    setModalVisible(true);
                    return;
                  }
                  navigation.navigate("ChatMessageList", {
                    image: item?.image,
                  });
                }}
                style={styles.chatList}
              >
                <CustomView
                  innerButtonStyle={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                  height={75}
                  width={"100%"}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 12,
                      paddingLeft: 10,
                      alignItems: "center",
                      flexDirection: "row",
                    }}
                  >
                    <Image style={styles.image} source={item?.image} />
                    <View
                      style={{
                        flex: 1,
                      }}
                    >
                      <View
                        style={{
                          width: "80%",
                          height: "100%",
                          justifyContent: "center",
                          gap: 8,
                          marginLeft: 10,
                        }}
                      >
                        <CustomText
                          text={item?.title}
                          weight={700}
                          style={{ width: 200 }}
                          fontFam="Arial"
                          size={14}
                        />
                        <CustomText
                          text={item?.second}
                          weight={500}
                          size={11}
                          color="#7D7D7D"
                          fontFam="Arial"
                          numberOfLines={1}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        width: "20%",
                        height: "100%",
                        justifyContent: "space-between",
                        paddingVertical: 10,
                        alignItems: "flex-end",
                        paddingRight: 10,
                      }}
                    >
                      {item?.count ? (
                        <ImageBackground
                          source={images.countBg}
                          resizeMode={"contain"}
                          style={{
                            width: 22,
                            height: 22.1,
                            backgroundColor: colors.primary,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center",
                            overflow: "hidden"
                          }}
                        >
                          <CustomText
                            text={item?.count}
                            weight={700}
                            size={10}
                            fontFam="Arial"
                          />
                        </ImageBackground>
                      ) : (
                        <ImageBackground
                          source={images.count2}
                          resizeMode={"contain"}
                          style={{
                            width: 22,
                            height: 22.1,
                            borderRadius: 15,
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <CustomText text={item?.count} weight={700} />
                        </ImageBackground>
                      )}
                      <CustomText
                        text={"5 mint ago"}
                        weight={500}
                        size={11}
                        color="#7D7D7D"
                        fontFam="Arial"
                        numberOfLines={1}
                      />
                    </View>
                  </View>
                </CustomView>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <CustomModal
        isModalVisible={isModalVisible}
        setModalVisible={setModalVisible}
        height={180}
        width={"70%"}
      >
        <View
          style={{
            flex: 1,
            alignItems: "center",
            marginTop: 10,
          }}
        >
          <CustomText
            text={"Would you like to login?"}
            weight={700}
            size={16}
            fontFam={font.inter}
          />
          <CustomButton
            text="Next"
            onPress={async () => {
              setModalVisible(false);
              await AsyncStorage.removeItem("isLogin");

              navigation.navigate("Register");
            }}
            height={38}
            width={120}
            borderRadius={32}
            style={{ marginTop: 30 }}
          />
        </View>
      </CustomModal>
    </ScrollView>
  );
};

export default Chat;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 30,
    marginTop: "11%",
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
  },
  chatList: {
    width: "100%",
    height: 80,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#040404",
    elevation: 30,
  },
  chat: {
    alignItems: "flex-start",
    gap: 2,
  },
  image: {
    width: 58,
    height: 58,
    resizeMode: "cover",
    borderRadius: 99,
    marginRight: 5,
    marginLeft: 3,
  },
  description: {
    flexDirection: "row",
    gap: 5,
    width: 300,
    flexWrap: "wrap",
  },
});
