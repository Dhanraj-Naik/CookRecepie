import * as React from 'react';
import { StyleSheet, Text, Pressable, View } from 'react-native';
import GmailContainer from '../../components/GmailContainer';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation, ParamListBase } from '@react-navigation/native';
import { FontFamily, FontSize, Color } from '../../utils/GlobalStyles';
import MySvgBg from '../../components/MySvgBg';


const LoginScreen : React.FC = () => {
    const navigation = useNavigation<StackNavigationProp<ParamListBase>>();
    return (
        <View>
            <MySvgBg someProp={''} />
            <GmailContainer />
            <Pressable
                style={styles.iDontHaveContainer}
                onPress={() => navigation.navigate('Signup')}
            >
                <Text style={styles.text1}>
                    <Text style={styles.iDontHave}>{'I don’t have an account? '}</Text>
                    <Text style={styles.signUpNow}>Sign Up Now</Text>
                </Text>
            </Pressable>

            <Text style={styles.welcomeBackToContainer}>
                <Text style={styles.welcomeBackTo}>{`Welcome Back
To`}</Text>
                <Text style={styles.text}>{' '}</Text>
                <Text style={styles.cookscorner}>{'CooksCorner '}</Text>
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    welcomeBackTo: {
        fontWeight: '300',
        fontFamily: FontFamily.poppinsLight,
    },
    text: {
        fontFamily: FontFamily.poppinsRegular,
    },
    cookscorner: {
        fontWeight: '600',
        fontFamily: FontFamily.poppinsSemiBold,
    },
    welcomeBackToContainer: {
        top: 89,
        left: 20,
        fontSize: FontSize.size_6xl,
        color: Color.colorWhite,
        textAlign: 'left',
        position: 'absolute',
    },
    iDontHave: {
        color: Color.text,
        fontFamily: FontFamily.poppinsRegular,
    },
    signUpNow: {
        fontWeight: '500',
        fontFamily: FontFamily.poppinsMedium,
        color: Color.primary,
    },
    text1: {
        marginLeft: -113.5,
        fontSize: FontSize.size_xs,
        textAlign: 'left',
    },
    iDontHaveContainer: {
        left: '50%',
        top: 769,
        position: 'absolute',
    },
    signinPage: {
        backgroundColor: Color.background,
        flex: 1,
        width: '100%',
        height: 852,
        overflow: 'hidden',
    },
});

export default LoginScreen;
