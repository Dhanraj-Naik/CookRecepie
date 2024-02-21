import * as React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import KunirBassuContainer from '../../components/KunirBassuContainer';
import UserCardContainer from '../../components/UserCardContainer';
import ModeDark from '../../components/ModeDark';
import StatusHome from '../../components/StatusHome';
import { FontSize, FontFamily, Color, Border } from '../../utils/GlobalStyles';

const ChefPage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.chefPage}>
            <View style={[styles.chevronLeftParent, styles.parentPosition]}>
                <Image
                    style={styles.chevronLeftIcon}
                    resizeMode="cover"
                    source={require('../../assets/chevron-left.png')}
                />
                <Text style={styles.chef}>Chef</Text>
                <Image
                    style={styles.filterAltIcon}
                    resizeMode="cover"
                    source={require('../../assets/filter-alt.png')}
                />
            </View>
            <View style={[styles.groupParent, styles.parentPosition]}>
                <KunirBassuContainer />
                <UserCardContainer
                    dimensionId={require('../../assets/rectangle-91.png')}
                    personName="dimpal Arora"
                />
                <UserCardContainer
                    dimensionId={require('../../assets/rectangle-92.png')}
                    personName="Amrila Routray"
                />
                <UserCardContainer
                    dimensionId={require('../../assets/rectangle-93.png')}
                    personName="Smita Agrawal"
                />
                <UserCardContainer
                    dimensionId={require('../../assets/rectangle-94.png')}
                    personName="Sunil Purohit"
                />
            </View>
            <ModeDark
                signal={require('../../assets/signal2.png')}
                connection={require('../../assets/connection1.png')}
                cap={require('../../assets/cap1.png')}
                indicator={require('../../assets/indicator1.png')}
                showIndicator={false}
                modeDarkPosition="absolute"
                modeDarkMarginLeft={-213.5}
                modeDarkTop={0}
                modeDarkLeft="50%"
                modeDarkHeight={47}
                timeColor="#000"
                iconColor="#000"
                indicatorsGroupTop={18}
                borderWidth="91.4%"
                borderRight="8.6%"
                borderBorderColor="#000"
                borderBorderWidth={1.1}
                capIconHeight="30.87%"
                capIconTop="34.9%"
                capIconBottom="34.23%"
                capacityHeight="69.13%"
                capacityWidth="62.1%"
                capacityTop="15.44%"
                capacityRight="30.57%"
                capacityBottom="15.44%"
                capacityBackgroundColor="#000"
            />
            <View style={styles.navigationWrapper}>
                <StatusHome
                    cottage={require('../../assets/cottage2.png')}
                    stockpot={require('../../assets/search-1-11.png')}
                    accountCircle={require('../../assets/stockpot1.png')}
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
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parentPosition: {
        left: 20,
        position: 'absolute',
    },
    chevronLeftIcon: {
        width: 24,
        height: 24,
    },
    chef: {
        fontSize: FontSize.size_3xl,
        lineHeight: 28,
        fontWeight: '500',
        fontFamily: FontFamily.poppinsMedium,
        color: Color.text,
        textAlign: 'center',
    },
    filterAltIcon: {
        width: 18,
        height: 18,
    },
    chevronLeftParent: {
        top: 61,
        width: 353,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    groupParent: {
        top: 122,
    },
    navigationWrapper: {
        marginLeft: -196.5,
        top: 791,
        left: '50%',
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
        position: 'absolute',
        overflow: 'hidden',
    },
    chefPage: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.background,
        flex: 1,
        width: '100%',
        height: 852,
        overflow: 'hidden',
    },
});

export default ChefPage;
