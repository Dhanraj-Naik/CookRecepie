import * as React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Pressable,
    ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import BeautifulContainer from '../../components/BeautifulContainer';
import StatusBarIPhone13ProMax from '../../components/StatusBarIPhone13ProMax';
import { FontSize, Color, FontFamily, Padding, Border } from '../../utils/GlobalStyles';

const LiveCooking = () => {
    const navigation = useNavigation();

    return (
        <LinearGradient
            style={styles.liveCooking}
            locations={[0, 1]}
            colors={['#000', 'rgba(0, 0, 0, 0.28)']}
            useAngle={true}
            angle={180}
        >
            <ImageBackground
                style={[styles.icon, styles.iconLayout]}
                resizeMode="cover"
                source={require('../../assets/livecooking.png')}
            >
                <View style={[styles.frameParent, styles.frameGroupFlexBox]}>
                    <View style={styles.parentFlexBox}>
                        <Image
                            style={styles.frameChild}
                            resizeMode="cover"
                            source={require('../../assets/ellipse-2.png')}
                        />
                        <View style={styles.dimpalAroraParent}>
                            <Text style={styles.dimpalArora}>Dimpal Arora</Text>
                            <Text style={[styles.recipe, styles.textTypo]}>118 Recipe</Text>
                        </View>
                    </View>
                    <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
                        <View style={[styles.visibilityParent, styles.parentFlexBox]}>
                            <Image
                                style={styles.visibilityIcon}
                                resizeMode="cover"
                                source={require('../../assets/visibility1.png')}
                            />
                            <Text style={[styles.text, styles.textTypo]}>434</Text>
                        </View>
                        <Pressable
                            style={styles.cancel}
                            onPress={() => navigation.navigate('Home')}
                        >
                            <Image
                                style={styles.iconLayout}
                                resizeMode="cover"
                                source={require('../../assets/cancel.png')}
                            />
                        </Pressable>
                    </View>
                </View>
                <View style={[styles.ellipseGroup, styles.frameGroupFlexBox]}>
                    <Image
                        style={styles.frameChild}
                        resizeMode="cover"
                        source={require('../../assets/ellipse-22.png')}
                    />
                    <View style={[styles.addCommentsWrapper, styles.parentFlexBox]}>
                        <Text style={[styles.addComments, styles.textTypo]}>
                            Add Comments
                        </Text>
                    </View>
                    <View style={styles.ellipseContainer}>
                        <Image
                            style={styles.frameInner}
                            resizeMode="cover"
                            source={require('../../assets/ellipse-23.png')}
                        />
                        <Image
                            style={styles.favoriteIcon}
                            resizeMode="cover"
                            source={require('../../assets/favorite.png')}
                        />
                    </View>
                </View>
                <BeautifulContainer />
                <StatusBarIPhone13ProMax
                    dimensionsText={require('../../assets/signal3.png')}
                />
            </ImageBackground>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    iconLayout: {
        height: '100%',
        width: '100%',
    },
    frameGroupFlexBox: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textTypo: {
        fontSize: FontSize.size_xs,
        textAlign: 'left',
        lineHeight: 17,
    },
    parentFlexBox: {
        alignItems: 'center',
        flexDirection: 'row',
    },
    frameChild: {
        width: 27,
        height: 27,
    },
    dimpalArora: {
        fontSize: FontSize.size_sm,
        textAlign: 'left',
        lineHeight: 17,
        color: Color.colorWhite,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
    },
    recipe: {
        fontFamily: FontFamily.poppinsRegular,
        color: Color.colorGainsboro,
    },
    dimpalAroraParent: {
        marginLeft: 8,
    },
    visibilityIcon: {
        width: 18,
        height: 18,
    },
    text: {
        marginLeft: 5,
        color: Color.colorWhite,
        fontSize: FontSize.size_xs,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
    },
    visibilityParent: {
        borderRadius: 24,
        backgroundColor: 'rgba(255, 255, 255, 0.7)',
        justifyContent: 'center',
        paddingHorizontal: 11,
        paddingVertical: 7,
    },
    cancel: {
        width: 24,
        height: 24,
    },
    frameGroup: {
        width: 101,
    },
    frameParent: {
        top: 50,
        width: 351,
        left: 20,
        justifyContent: 'space-between',
        position: 'absolute',
    },
    addComments: {
        fontWeight: '300',
        fontFamily: FontFamily.poppinsLight,
        color: Color.colorWhite,
        fontSize: FontSize.size_xs,
    },
    addCommentsWrapper: {
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        width: 276,
        paddingHorizontal: 12,
        paddingVertical: Padding.p_5xs,
        overflow: 'hidden',
    },
    frameInner: {
        width: 33,
        height: 33,
        zIndex: 0,
    },
    favoriteIcon: {
        top: 7,
        left: 7,
        width: 20,
        height: 20,
        zIndex: 1,
        position: 'absolute',
    },
    ellipseContainer: {
        flexDirection: 'row',
    },
    ellipseGroup: {
        top: 794,
        width: 353,
        left: 20,
        justifyContent: 'space-between',
        position: 'absolute',
    },
    icon: {
        borderRadius: Border.br_xl,
        flex: 1,
        backgroundColor: 'transparent',
        overflow: 'hidden',
    },
    liveCooking: {
        height: 852,
        width: '100%',
    },
});

export default LiveCooking;