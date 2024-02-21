import * as React from 'react';
import { Image, StyleSheet, Text, Pressable, View, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import InputStylefilled from '../../components/InputStylefilled';
import { FontSize, FontFamily, Color, Border, Padding } from '../../utils/GlobalStyles';

const SignupPage = () => {
    const navigation = useNavigation();


    const windowWidth = Dimensions.get('window').width;

    const originalWidth = 1179;
    const originalHeight = 701;

    const aspectRatio = originalWidth / originalHeight;
    const windowHeight = windowWidth / aspectRatio;

    return (
        <View style={styles.signupPage}>
            <Image
                style={[styles.signupPageChild, { height: windowHeight }]}
                resizeMode="contain"
                source={require('../../assets/images/background/login_bg.png')}
            />
            <Text style={styles.signUpForContainer}>
                <Text style={styles.signUpForContainer1}>
                    <Text style={styles.signUpFor}>{'Sign up for delicious '}</Text>
                    <Text style={styles.signTypo}>Discoveries!</Text>
                </Text>
            </Text>
            <Pressable
                style={styles.alreadyHaveAnContainer}
                onPress={() => navigation.navigate('Login')}
            >
                <Text style={[styles.text, styles.textTypo]}>
                    <Text
                        style={styles.alreadyHaveAn}
                    >{'Already have an account? '}</Text>
                    <Text style={[styles.signInNow, styles.signTypo]}>Sign In Now</Text>
                </Text>
            </Pressable>
            <View style={styles.instanceParent}>
                <InputStylefilled
                    title="Name"
                    placeholder="Enter your name"
                    icons={require('../../assets/icons2.png')}
                    inputStylefilledPosition="unset"
                    inputStylefilledMarginTop="unset"
                    enterYourNameColor="#666"
                />
                <InputStylefilled
                    title="Gmail"
                    placeholder="Enter your Gmail"
                    icons={require('../../assets/icons.png')}
                    inputStylefilledPosition="unset"
                    inputStylefilledMarginTop={16}
                    enterYourNameColor="#666"
                />
                <InputStylefilled
                    title="Password"
                    placeholder="*******************"
                    icons={require('../../assets/icons1.png')}
                    inputStylefilledPosition="unset"
                    inputStylefilledMarginTop={16}
                    enterYourNameColor="#343434"
                />
                <InputStylefilled
                    title="Re-Password"
                    placeholder="Re-Enter your Password"
                    icons={require('../../assets/icons3.png')}
                    inputStylefilledPosition="unset"
                    inputStylefilledMarginTop={16}
                    enterYourNameColor="#343434"
                />
                <View style={styles.component2ParentSpaceBlock}>
                    <Image
                        style={styles.component2Icon}
                        resizeMode="cover"
                        source={require('../../assets/component-2.png')}
                    />
                    <Text style={[styles.iAgreeAll, styles.textTypo]}>
                        I agree all terms and Conditions
                    </Text>
                </View>
                <Pressable
                    style={[styles.signInNowWrapper, styles.component2ParentSpaceBlock]}
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text style={[styles.signInNow1, styles.textTypo]}>Sign In Now</Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    textTypo: {
        fontSize: FontSize.size_xs,
        textAlign: 'left',
    },
    signTypo: {
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
    },
    component2ParentSpaceBlock: {
        marginTop: 16,
        flexDirection: 'row',
    },
    signupPageChild: {
        top: 0,
        left: -1,
        width: '100%',
        height: 234,
        position: 'absolute',
    },
    signUpFor: {
        fontWeight: '300',
        fontFamily: FontFamily.poppinsLight,
    },
    signUpForContainer1: {
        width: '100%',
    },
    signUpForContainer: {
        top: 89,
        fontSize: FontSize.size_6xl,
        display: 'flex',
        width: 320,
        alignItems: 'center',
        textAlign: 'left',
        color: Color.colorWhite,
        left: 20,
        position: 'absolute',
    },
    alreadyHaveAn: {
        color: Color.text,
        fontFamily: FontFamily.poppinsRegular,
    },
    signInNow: {
        color: Color.primary,
    },
    text: {
        marginLeft: -113.5,
    },
    alreadyHaveAnContainer: {
        left: '50%',
        top: 769,
        position: 'absolute',
    },
    component2Icon: {
        width: 18,
        height: 18,
    },
    iAgreeAll: {
        color: Color.colorBlack,
        marginLeft: 5,
        fontFamily: FontFamily.poppinsRegular,
    },
    signInNow1: {
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        color: Color.colorWhite,
        fontSize: FontSize.size_xs,
    },
    signInNowWrapper: {
        borderRadius: Border.br_22xl,
        backgroundColor: Color.primary,
        width: 353,
        height: 39,
        justifyContent: 'center',
        paddingHorizontal: Padding.p_108xl,
        paddingVertical: Padding.p_5xs,
        alignItems: 'center',
        overflow: 'hidden',
    },
    instanceParent: {
        top: 252,
        left: 20,
        position: 'absolute',
    },
    signupPage: {
        backgroundColor: Color.background,
        flex: 1,
        height: 852,
        overflow: 'hidden',
        width: '100%',
    },
});

export default SignupPage;
