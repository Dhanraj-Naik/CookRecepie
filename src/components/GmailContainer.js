import React, { memo } from 'react';
import { Text, StyleSheet, Image, View, Pressable } from 'react-native';
import InputStylefilled from './InputStylefilled';
import { useNavigation } from '@react-navigation/native';
import { FontSize, FontFamily, Color, Border, Padding } from '../utils/GlobalStyles';

const GmailContainer = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.inputTypesParent}>
      <InputStylefilled
        title="Gmail"
        placeholder="sarthakranjanhota@gmail.com"
        icons={require('../assets/icons.png')}
        inputStylefilledPosition="unset"
        inputStylefilledMarginTop="unset"
        enterYourNameColor="#343434"
      />
      <InputStylefilled
        title="Password"
        placeholder="*******************"
        icons={require('../assets/icons1.png')}
        inputStylefilledPosition="unset"
        inputStylefilledMarginTop={16}
        enterYourNameColor="#343434"
      />
      <Text style={[styles.forgotPassword, styles.signInNowTypo]}>
        Forgot password?
      </Text>
      <Pressable
        style={styles.signInNowWrapper}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={[styles.signInNow, styles.signInNowTypo]}>
          Sign In Now
        </Text>
      </Pressable>
    </View>
  );
});

const styles = StyleSheet.create({
  signInNowTypo: {
    textAlign: 'left',
    fontSize: FontSize.size_xs,
  },
  forgotPassword: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    marginTop: 16,
  },
  signInNow: {
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorWhite,
  },
  signInNowWrapper: {
    borderRadius: Border.br_22xl,
    backgroundColor: Color.primary,
    width: 353,
    height: 39,
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: Padding.p_108xl,
    paddingVertical: Padding.p_5xs,
    marginTop: 16,
  },
  inputTypesParent: {
    position: 'absolute',
    top: 270,
    left: 20,
    alignItems: 'flex-end',
  },
});

export default GmailContainer;
