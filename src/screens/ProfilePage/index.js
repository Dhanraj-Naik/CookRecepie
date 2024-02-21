import * as React from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ContainerComponent from '../../components/ContainerComponent';
import RecipeCardContainer from '../../components/RecipeCardContainer';
import ModeDark from '../../components/ModeDark';
import StatusHome from '../../components/StatusHome';
import { FontSize, FontFamily, Color, Border } from '../../utils/GlobalStyles';

const ProfilePage = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.profilePage}>
            <View style={[styles.chevronLeftParent, styles.parentFlexBox]}>
                <Image
                    style={styles.chevronLeftIcon}
                    resizeMode="cover"
                    source={require('../../assets/chevron-left.png')}
                />
                <Text style={styles.profile}>Profile</Text>
                <Image
                    style={styles.chevronLeftIcon}
                    resizeMode="cover"
                    source={require('../../assets/page-info.png')}
                />
            </View>
            <ContainerComponent />
            <View style={[styles.myRecipeParent, styles.parentFlexBox]}>
                <Text style={[styles.myRecipe, styles.recipeTypo]}>My recipe</Text>
                <Text style={[styles.testedRecipe, styles.recipeTypo]}>
                    Tested recipe
                </Text>
                <Text style={[styles.testedRecipe, styles.recipeTypo]}>
                    Saved recipe
                </Text>
                <Text style={[styles.testedRecipe, styles.recipeTypo]}>Cookbook</Text>
            </View>
            <View style={styles.frameParent}>
                <RecipeCardContainer
                    foodImageId={require('../../assets/rectangle-11.png')}
                    dishName="Egg Omlet"
                    dishThumbnailId={require('../../assets/rectangle-111.png')}
                    menuItemImageName="Chicken Burger"
                    viewCountText="1000 view"
                />
                <RecipeCardContainer
                    foodImageId={require('../../assets/rectangle-112.png')}
                    dishName="Onion Pizza "
                    dishThumbnailId={require('../../assets/rectangle-113.png')}
                    menuItemImageName="Cheery Pastry"
                    viewCountText="118 view"
                    propMarginTop={13}
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
                    search11={require('../../assets/cottage.png')}
                    accountCircle={require('../../assets/search-1-12.png')}
                    statusHomePosition="absolute"
                    statusHomeTop={19}
                    statusHomeLeft={36}
                    search11Position="unset"
                    search11Width="100%"
                    search11Height="100%"
                    search11Overflow="unset"
                    search11MarginLeft="unset"
                    stockpotIconOverflow="unset"
                    stockpotIconPosition="relative"
                    stockpotIconWidth={24}
                    stockpotIconHeight={24}
                    stockpotIconMarginLeft={75}
                    accountCircleIconPosition="unset"
                    accountCircleIconWidth="100%"
                    accountCircleIconHeight="100%"
                    accountCircleIconMarginLeft="unset"
                    accountCircleIconOverflow="hidden"
                    onCottagePress={() => navigation.navigate('HomePage')}
                    onSearch11Press1={() => navigation.navigate('SearchPage')}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    parentFlexBox: {
        flexDirection: 'row',
        position: 'absolute',
    },
    recipeTypo: {
        fontSize: FontSize.size_base,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        lineHeight: 28,
    },
    chevronLeftIcon: {
        width: 24,
        height: 24,
    },
    profile: {
        fontSize: FontSize.size_3xl,
        color: Color.text,
        textAlign: 'center',
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        lineHeight: 28,
    },
    chevronLeftParent: {
        top: 61,
        width: 353,
        alignItems: 'center',
        justifyContent: 'space-between',
        left: 20,
    },
    myRecipe: {
        color: Color.colorBlack,
        textAlign: 'center',
    },
    testedRecipe: {
        color: Color.colorGray_100,
        textAlign: 'left',
        marginLeft: 14,
    },
    myRecipeParent: {
        top: 346,
        left: 22,
    },
    frameParent: {
        top: 396,
        left: 20,
        position: 'absolute',
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
    profilePage: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.background,
        flex: 1,
        width: '100%',
        height: 852,
        overflow: 'hidden',
    },
});

export default ProfilePage;
