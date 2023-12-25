import { Image, Pressable, StyleSheet, Platform, View } from 'react-native'
import { colors } from '../../utils/colors'
import React, { useState } from 'react'
import { images } from '../../assets'
import CustomText from '../CustomText'
import ShadowButton from '../ShadowButton'
import HomeModal from '../HomeModal'

type Props = {
    text?: string
    navigation?: any
    isMail?: any
}

const CustomMenu2 = ({ text, navigation, isMail }: Props) => {
    return (
        <View
            style={{
                marginTop: 10,
                zIndex: 20,
            }}
        >
            <Pressable
                onPress={() => { navigation.goBack() }}
                style={{
                    width: "100%"
                }}>
                <Image
                    source={images.backArrow}
                    style={{
                        width: 22,
                        height: 22,
                        resizeMode: "contain"
                    }}
                />
            </Pressable>
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    width: "65%",
                    alignSelf: "flex-end"
                }}
            >
                <CustomText
                    text={text}
                    size={22}
                    fontFam='Poppins'
                    weight={700}
                    style={{ zIndex: 999, alignSelf: "center" }}
                />
                {isMail &&
                    <ShadowButton onPress={() => { }}>
                        <Image source={images.mail} style={styles.menuButton} />
                    </ShadowButton>
                }
            </View>
        </View>
    )
}
export default CustomMenu2
const styles = StyleSheet.create({
    header: {
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 50,
        marginBottom: 25,
        flexDirection: "row",
    },
    menuButton: {
        width: 22,
        height: 22,
        resizeMode: "contain"
    }
})