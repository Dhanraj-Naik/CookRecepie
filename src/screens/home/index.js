import * as React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import StatusBarIPhone13ProMax from '../../components/StatusBarIPhone13ProMax';
import ReceipeCard from '../../components/ReceipeCard';
import Property1Default from '../../components/Property1Default';
import LiveCookingSection from '../../components/LiveCookingSection';
import SeasonalSpecialSection from '../../components/SeasonalSpecialSection';
import StatusHome from '../../components/StatusHome';
import { Color, FontSize, FontFamily, Border } from '../../utils/GlobalStyles';

const Home = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.homepage}>
            <Image
                style={styles.homepageChild}
                resizeMode="cover"
                source={require('../../assets/vector-1.png')}
            />
            <StatusBarIPhone13ProMax
                dimensionsText={require('../../assets/signal.png')}
            />
            <View style={[styles.frameParent, styles.parentFlexBox]}>
                <View>
                    <Text style={[styles.hiSarthak, styles.hiSarthakClr]}>
                        <Text style={styles.hi}>{'Hi, '}</Text>
                        <Text style={styles.sarthak}>Sarthak</Text>
                    </Text>
                    <Text
                        style={[styles.uiDesigner, styles.categoryFlexBox]}
                    >{'UI Designer & Cook'}</Text>
                </View>
                <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={require('../../assets/ellipse-1.png')}
                />
            </View>
            <View style={[styles.frameGroup, styles.framePosition]}>
                <View>
                    <View style={[styles.categoryParent, styles.parentFlexBox]}>
                        <Text style={[styles.category, styles.categoryFlexBox]}>
                            Category
                        </Text>
                        <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
                    </View>
                    <View style={styles.groupView}>
                        <View style={styles.receipeCardParent}>
                            <ReceipeCard
                                rectangle2={require('../../assets/rectangle-2.png')}
                                receipeName="Cheery pancake"
                                time="20 min"
                                hard="Hard"
                                receipeCardWidth={204}
                                receipeCardHeight={272}
                                receipeCardMarginLeft="unset"
                                rectangleViewBackgroundColor="#fff6de"
                                cheeryPancakeColor="#343434"
                            />
                            <ReceipeCard
                                rectangle2={require('../../assets/rectangle-21.png')}
                                receipeName="Cheese Roti Burger"
                                time="60 min"
                                hard="Easy"
                                receipeCardWidth={204}
                                receipeCardHeight={272}
                                receipeCardMarginLeft={8}
                                rectangleViewBackgroundColor="#ffe6de"
                                cheeryPancakeColor="#343434"
                            />
                            <ReceipeCard
                                rectangle2={require('../../assets/rectangle-22.png')}
                                receipeName="Bada Pao"
                                time="35 min"
                                hard="Hard"
                                receipeCardWidth={204}
                                receipeCardHeight={272}
                                receipeCardMarginLeft={8}
                                rectangleViewBackgroundColor="#f5ffde"
                                cheeryPancakeColor="#000"
                            />
                        </View>
                        <View style={[styles.tabsParent, styles.tabsParentPosition]}>
                            <Property1Default
                                title="Breakfast"
                                showLine1
                                property1DefaultPosition="unset"
                                categoryColor="#343434"
                            />
                            <View style={styles.tabs}>
                                <Text style={[styles.category1, styles.seeAllTypo]}>Lunch</Text>
                                <Image
                                    style={styles.tabsChild}
                                    resizeMode="cover"
                                    source={require('../../assets/line-1.png')}
                                />
                            </View>
                            <View style={styles.tabs}>
                                <Text style={[styles.category1, styles.seeAllTypo]}>
                                    Dinner
                                </Text>
                                <Image
                                    style={styles.tabsChild}
                                    resizeMode="cover"
                                    source={require('../../assets/line-11.png')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <LiveCookingSection />
                <SeasonalSpecialSection />
            </View>
            <View style={[styles.navigationWrapper, styles.tabsParentPosition]}>
                <StatusHome
                    cottage={require('../../assets/cottage1.png')}
                    stockpot={require('../../assets/search-1-11.png')}
                    statusHomePosition="absolute"
                    statusHomeTop={19}
                    statusHomeLeft={36}
                    search11Position="relative"
                    search11Width={24}
                    search11Height={24}
                    search11Overflow="unset"
                    search11MarginLeft={75}
                    stockpotIconOverflow="hidden"
                    stockpotIconPosition="unset"
                    stockpotIconWidth="100%"
                    stockpotIconHeight="100%"
                    stockpotIconMarginLeft="unset"
                    accountCircleIconPosition="relative"
                    accountCircleIconWidth={24}
                    accountCircleIconHeight={24}
                    accountCircleIconMarginLeft={75}
                    accountCircleIconOverflow="unset"
                    onSearch11Press={() => navigation.navigate('SearchPage')}
                    onStockpotPress={() => navigation.navigate('ChefPage')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parentFlexBox: {
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    hiSarthakClr: {
        color: Color.colorWhite,
        letterSpacing: 0,
    },
    categoryFlexBox: {
        textAlign: 'left',
        lineHeight: 17,
    },
    framePosition: {
        left: 20,
        position: 'absolute',
    },
    seeAllTypo: {
        color: Color.textFaded,
        fontSize: FontSize.size_sm,
        textAlign: 'left',
        lineHeight: 17,
    },
    tabsParentPosition: {
        left: '50%',
        position: 'absolute',
    },
    homepageChild: {
        left: -1,
        width: 395,
        height: 150,
        top: 0,
        position: 'absolute',
    },
    hi: {
        fontFamily: FontFamily.poppinsRegular,
    },
    sarthak: {
        fontWeight: '600',
        fontFamily: FontFamily.poppinsSemiBold,
    },
    hiSarthak: {
        textAlign: 'center',
        lineHeight: 17,
        color: Color.colorWhite,
        letterSpacing: 0,
        fontSize: FontSize.size_lg,
    },
    uiDesigner: {
        fontSize: FontSize.size_base,
        marginTop: 7,
        fontFamily: FontFamily.poppinsLight,
        fontWeight: '300',
        color: Color.colorWhite,
        letterSpacing: 0,
        textAlign: 'left',
    },
    frameChild: {
        width: 47,
        height: 47,
    },
    frameParent: {
        top: 57,
        alignItems: 'center',
        width: 353,
        justifyContent: 'space-between',
        left: 20,
        position: 'absolute',
    },
    category: {
        fontWeight: '500',
        fontFamily: FontFamily.poppinsMedium,
        color: Color.text,
        textAlign: 'left',
        fontSize: FontSize.size_lg,
    },
    seeAll: {
        fontFamily: FontFamily.poppinsLight,
        fontWeight: '300',
    },
    categoryParent: {
        alignItems: 'center',
        width: 353,
        justifyContent: 'space-between',
    },
    receipeCardParent: {
        top: 34,
        left: 0,
        flexDirection: 'row',
        position: 'absolute',
    },
    category1: {
        fontFamily: FontFamily.poppinsRegular,
    },
    tabsChild: {
        width: 8,
        height: 0,
        display: 'none',
        marginTop: 2,
    },
    tabs: {
        alignItems: 'center',
    },
    tabsParent: {
        marginLeft: -295,
        width: 316,
        justifyContent: 'space-between',
        flexDirection: 'row',
        top: 0,
    },
    groupView: {
        width: 628,
        height: 306,
        marginTop: 19,
    },
    frameGroup: {
        top: 155,
    },
    navigationWrapper: {
        marginLeft: -196.5,
        top: 791,
        backgroundColor: Color.colorWhite,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowRadius: 29.1,
        elevation: 29.1,
        shadowOpacity: 1,
        width: 393,
        height: 61,
        overflow: 'hidden',
    },
    homepage: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.background,
        flex: 1,
        width: '100%',
        height: 852,
        overflow: 'hidden',
    },
});

export default Home;
