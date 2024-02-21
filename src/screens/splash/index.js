import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Color, FontFamily, FontSize } from '../../utils/GlobalStyles';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        let myTimeout = setTimeout(() => {
            navigation.navigate('Login');
        }, 3000);

        return () => {
            clearTimeout(myTimeout);
        }
    }, [navigation]);

    return (
        <View style={styles.splashScreen}>
            <View style={[styles.skilletCooktopParent, styles.version001Position]}>
                <Image
                    style={styles.skilletCooktopIcon}
                    resizeMode="cover"
                    source={require('../../assets/skillet-cooktop.png')}
                />
                <Text style={[styles.cookscorner, styles.version001Typo]}>
                    CooksCorner
                </Text>
            </View>
            <Text style={[styles.version001]}>
                Version 0.0.1
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    version001Position: {
    },
    version001Typo: {
        textAlign: 'left',
        color: Color.colorWhite,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
    },
    skilletCooktopIcon: {
        width: 91,
        height: 91,
    },
    cookscorner: {
        fontSize: FontSize.size_lg,
        marginTop: 5,
    },
    skilletCooktopParent: {
        top: '50%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    version001: {
        fontSize: FontSize.size_sm,
        left: 0,
        right: 0,
        bottom: '5%',
        position: 'absolute',
        textAlign: 'center',
    },
    splashScreen: {
        backgroundColor: Color.primary,
        flex: 1,
    },
});

export default SplashScreen;
