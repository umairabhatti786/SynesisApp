import { Text } from 'react-native'
import { colors } from '../../utils/colors'
import React from 'react'

type Props = {
    color?: string,
    size?: number,
    fontFam?: string,
    text?: any,
    style?: any,
    lineHeight?: number
    weight?: number
    numberOfLines?: number
}

const CustomText = ({ color, size, fontFam, text, style, lineHeight, weight, numberOfLines }: Props) => {
    return (
        <Text
            numberOfLines={numberOfLines}
            style={[
                {
                    color: color || colors.white,
                    fontSize: size || 12,
                    fontWeight: weight || 500,
                    fontFamily: fontFam || "Montserrat-SemiBold",
                    ...(lineHeight && { lineHeight: lineHeight }),
                }, style
            ]}
        >
            {text}
        </Text >
    )
}
export default CustomText
