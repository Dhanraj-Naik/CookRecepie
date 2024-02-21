import * as React from 'react';
import { Text, StyleSheet, Image, View } from 'react-native';
import { FontFamily, Color } from '../../utils/GlobalStyles';

const Title = () => {
    return (
        <View style={styles.title}>
            <View
                style={[styles.userInterfaceDesignParent, styles.groupItemPosition]}
            >
                <Text style={styles.userInterfaceDesign}>User Interface Design</Text>
                <View style={styles.frameParent}>
                    <Image
                        style={[styles.groupChild, styles.groupLayout]}
                        resizeMode="cover"
                        source={require('../../assets/frame-85.png')}
                    />
                    <Image
                        style={[styles.groupItem, styles.groupItemPosition]}
                        resizeMode="cover"
                        source={require('../../assets/frame-87.png')}
                    />
                    <Image
                        style={[styles.groupInner, styles.groupLayout]}
                        resizeMode="cover"
                        source={require('../../assets/frame-86.png')}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    groupItemPosition: {
        left: 0,
        position: 'absolute',
    },
    groupLayout: {
        height: 242,
        width: 427,
        position: 'absolute',
    },
    userInterfaceDesign: {
        top: 54,
        left: 50,
        fontSize: 50,
        fontWeight: '600',
        fontFamily: FontFamily.poppinsSemiBold,
        color: Color.colorWhite,
        textAlign: 'center',
        position: 'absolute',
    },
    groupChild: {
        top: 62,
        left: 172,
    },
    groupItem: {
        top: 78,
        width: 530,
        height: 284,
    },
    groupInner: {
        left: 231,
        top: 0,
    },
    frameParent: {
        top: -109,
        left: 727,
        width: 658,
        height: 362,
        position: 'absolute',
    },
    userInterfaceDesignParent: {
        borderRadius: 25,
        backgroundColor: Color.primary,
        width: 1262,
        overflow: 'hidden',
        top: 0,
        height: 184,
    },
    title: {
        flex: 1,
        width: '100%',
        height: 184,
    },
});

export default Title;
