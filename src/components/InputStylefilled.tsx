import React, { useMemo, memo } from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
  ImageSourcePropType,
} from 'react-native';
import { FontSize, FontFamily, Color, Border, Padding } from '../utils/GlobalStyles';

const getStyleValue = (key: string, value : string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === 'unset' ? undefined : value };
};

export type InputStylefilledType = {
  title?: string,
  placeholder? : string,
  icons?: ImageSourcePropType,

    /** Style props */
    inputStylefilledPosition?: string;
    inputStylefilledMarginTop?: number | string;
    enterYourNameColor?: string;
}
const InputStylefilled = memo(
  ({
    title = 'Gmail',
    placeholder = 'Enter your name',
    icons,
    inputStylefilledPosition,
    inputStylefilledMarginTop,
    enterYourNameColor,
  } : InputStylefilledType) => {
    const inputStylefilledStyle = useMemo(() => {
      return {
        ...getStyleValue('position', inputStylefilledPosition),
        ...getStyleValue('marginTop', inputStylefilledMarginTop),
      };
    }, [inputStylefilledPosition, inputStylefilledMarginTop]);

    const enterYourNameStyle = useMemo(() => {
      return {
        ...getStyleValue('color', enterYourNameColor),
      };
    }, [enterYourNameColor]);

    return (
      <View>
        <Text style={styles.gmail}>{title}</Text>
        <View style={styles.enterYourNameParent}>
          <Text style={[styles.enterYourName, enterYourNameStyle]}>
            {placeholder}
          </Text>
          <Image style={styles.icons} resizeMode="cover" source={icons} />
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  gmail: {
    fontSize: FontSize.size_base,
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.primary,
    textAlign: 'left',
  },
  enterYourName: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.text,
    zIndex: 0,
    textAlign: 'left',
  },
  icons: {
    position: 'absolute',
    top: 11,
    left: 320,
    width: 18,
    height: 18,
    zIndex: 1,
  },
  enterYourNameParent: {
    borderRadius: Border.br_23xl,
    backgroundColor: Color.inputFieldBackground,
    width: 353,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_4xs,
    marginTop: 5,
  },
});

export default InputStylefilled;