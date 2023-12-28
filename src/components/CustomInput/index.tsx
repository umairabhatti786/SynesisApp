import React from "react";
import { Pressable, Text, View, TextInput, TouchableOpacity,Image } from "react-native";
import { colors } from "../../utils/colors";
import { images } from "../../assets";

type Props = {
  placeholder?: string;
  onChangeText?: any;
  height?: any;
  bgColor?: any;
  textColor?: string;
  borderRadius?: number;
  style?: any;
  multiline?: any;
  value?: any;
  width?: any;
  backgroundColor?: any;
  isEye?:boolean,
};

const CustomInput = ({
  onChangeText,
  placeholder,
  textColor,
  bgColor,
  borderRadius,
  style,
  multiline,
  value,
  width,
  height,
  backgroundColor,
  isEye
}: Props) => {
  return (
    <View
      style={{
        width: width || "100%",
        height: height || 60,
        backgroundColor:backgroundColor || colors.lightGray,
        borderWidth: 1.5,
        borderRadius:   15,
        flexDirection:"row",
        alignItems:"center",
        paddingLeft:20,
        borderColor:colors.superLightGray,
      }}
    >
      <TextInput
        style={{
          fontSize: 15,
          color: textColor,
          height: "100%",
          width: isEye?"89%": "100%",
          // backgroundColor: colors.white,
          borderRadius: borderRadius,
          ...style,
        }}
        placeholder={placeholder}
        placeholderTextColor={colors.placeholdeColor}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={onChangeText}
        multiline={multiline}
        value={value}
      />
      {
        isEye&&(
          <TouchableOpacity>
            <Image 
            style={{width:22,height:22}}
            source={images.eye_cross}/>

          </TouchableOpacity>
         )
      } 
    </View>
  );
};
export default CustomInput;
