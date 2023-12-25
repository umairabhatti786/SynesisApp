import { Pressable, StyleSheet, Platform, Image, View } from 'react-native'
import { colors } from '../../utils/colors'
import CustomText from '../CustomText'
import React from 'react'
import { images } from '../../assets'
import LinearGradient from 'react-native-linear-gradient'

type Props = {
    outerStyle?: any,
    innerButtonStyle?: any,
    children?: any,
    height?: any,
    width?: any,
    angles?: number,
    borderRadius?: number,
    colors?: []
}

const CustomView = ({ children, outerStyle, innerButtonStyle, height, width, angles, borderRadius, colors }: Props) => {
    return (
        <View
            style={{
                width: width || "100%",
                height: height || 45,
                backgroundColor: '#171616',
                borderRadius: borderRadius || 12,
                justifyContent: "center",
                alignItems: "center",
                position: "relative",
                ...outerStyle
            }}
        >
            <LinearGradient
                useAngle={true}
                angle={angles || 170}
                colors={colors || ["#040404", "#040404", "#2E2D2D", "#2E2D2D"]}
                style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: borderRadius || 12,
                    position: "absolute",
                }}
            />
            <View
                style={{
                    width: width - 2 || "99.5%",
                    height: height - 2 || 45,
                    borderRadius: borderRadius || 12,
                    backgroundColor: '#171616',
                    ...innerButtonStyle
                }}
            >
                {children}
            </View>
        </View >
    )
}
export default CustomView
const styles = StyleSheet.create({

})