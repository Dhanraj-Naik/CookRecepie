import * as React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import RecipeContainer from '../../components/RecipeContainer';
import ModeDark from '../../components/ModeDark';
import StatusHome from '../../components/StatusHome';
import { Color, FontFamily, FontSize, Border } from '../../utils/GlobalStyles';

const ChefDetails = () => {
    return (
        <View style={styles.chefDetails}>
            <Image
                style={[styles.chevronLeftIcon, styles.frameParentPosition]}
                resizeMode="cover"
                source={require('../../assets/chevron-left.png')}
            />
            <View style={styles.rectangleParent}>
                <Image
                    style={styles.frameChild}
                    resizeMode="cover"
                    source={require('../../assets/rectangle-95.png')}
                />
                <Text style={styles.kunirBassu}>Kunir Bassu</Text>
                <Text style={[styles.iAmA, styles.iAmAFlexBox]}>
                    I am a passionate chef devoted to crafting mouthwatering dishes with
                    creativity and care
                </Text>
            </View>
            <View style={[styles.followWrapper, styles.frameItemBg]}>
                <Text style={styles.follow}>Follow</Text>
            </View>
            <View style={[styles.frameParent, styles.frameParentPosition]}>
                <View style={styles.newRecipeParent}>
                    <Text style={styles.newRecipe}>New recipe</Text>
                    <Text style={[styles.vegan, styles.veganTypo]}>Vegan</Text>
                    <Text style={[styles.soups, styles.veganTypo]}>Soups</Text>
                    <Text style={[styles.nonVeg, styles.veganTypo]}>Non-veg</Text>
                    <View style={[styles.frameItem, styles.frameItemBg]} />
                </View>
                <View style={styles.groupParent}>
                    <RecipeContainer
                        recipeId={require('../../assets/rectangle-11.png')}
                        dishName="Egg Omlet"
                        cookingTime="20 min"
                        dimensionCode={require('../../assets/sentiment-neutral1.png')}
                        difficultyLevelText="Hard"
                        recipeDimensions={require('../../assets/group-11.png')}
                    />
                    <RecipeContainer
                        recipeId={require('../../assets/rectangle-111.png')}
                        dishName="Chicken Burger"
                        cookingTime="50 min"
                        dimensionCode={require('../../assets/sentiment-neutral2.png')}
                        difficultyLevelText="Easy"
                        recipeDimensions={require('../../assets/group-111.png')}
                        propMarginLeft={15}
                        propColor="#fff"
                    />
                    <RecipeContainer
                        recipeId={require('../../assets/rectangle-112.png')}
                        dishName="Onion Pizza "
                        cookingTime="60 min"
                        dimensionCode={require('../../assets/sentiment-neutral2.png')}
                        difficultyLevelText="Easy"
                        recipeDimensions={require('../../assets/group-11.png')}
                        propMarginLeft={15}
                        propColor="#fff"
                    />
                    <RecipeContainer
                        recipeId={require('../../assets/rectangle-113.png')}
                        dishName="Cheery Pastry"
                        cookingTime="20 min"
                        dimensionCode={require('../../assets/sentiment-neutral1.png')}
                        difficultyLevelText="Hard"
                        recipeDimensions={require('../../assets/group-11.png')}
                        propMarginLeft={15}
                        propColor="#666"
                    />
                </View>
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
                    cottage={require('../../assets/cottage.png')}
                    search11={require('../../assets/search-1-11.png')}
                    stockpot={require('../../assets/stockpot1.png')}
                    accountCircle={require('../../assets/account-circle.png')}
                    statusHomePosition="absolute"
                    statusHomeTop={19}
                    statusHomeLeft={36}
                    search11Position="relative"
                    search11Width={24}
                    search11Height={24}
                    search11Overflow="hidden"
                    search11MarginLeft={75}
                    stockpotIconOverflow="unset"
                    stockpotIconPosition="relative"
                    stockpotIconWidth={24}
                    stockpotIconHeight={24}
                    stockpotIconMarginLeft={75}
                    accountCircleIconPosition="relative"
                    accountCircleIconWidth={24}
                    accountCircleIconHeight={24}
                    accountCircleIconMarginLeft={75}
                    accountCircleIconOverflow="unset"
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    frameParentPosition: {
        left: 20,
        position: 'absolute',
    },
    iAmAFlexBox: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    frameItemBg: {
        backgroundColor: Color.primary,
        position: 'absolute',
    },
    veganTypo: {
        marginLeft: 14,
        textAlign: 'left',
        lineHeight: 28,
        color: Color.textFaded,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        fontSize: FontSize.size_base,
    },
    chevronLeftIcon: {
        top: 63,
        width: 24,
        height: 24,
    },
    frameChild: {
        borderRadius: Border.br_5xs,
        width: 100,
        height: 109,
    },
    kunirBassu: {
        marginTop: 15,
        textAlign: 'center',
        color: Color.text,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        textTransform: 'capitalize',
        lineHeight: 17,
        fontSize: FontSize.size_base,
    },
    iAmA: {
        display: 'flex',
        width: 287,
        color: Color.textFaded,
        justifyContent: 'center',
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_xs,
        marginTop: 15,
        textAlign: 'center',
        lineHeight: 17,
    },
    rectangleParent: {
        top: 113,
        left: 53,
        alignItems: 'center',
        position: 'absolute',
    },
    follow: {
        color: Color.colorWhite,
        fontFamily: FontFamily.poppinsRegular,
        fontSize: FontSize.size_xs,
        textAlign: 'center',
        textTransform: 'capitalize',
        lineHeight: 17,
    },
    followWrapper: {
        top: 62,
        left: 293,
        borderRadius: Border.br_7xs,
        paddingHorizontal: 21,
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    newRecipe: {
        zIndex: 0,
        lineHeight: 28,
        textAlign: 'center',
        color: Color.text,
        fontFamily: FontFamily.poppinsMedium,
        fontWeight: '500',
        fontSize: FontSize.size_base,
    },
    vegan: {
        zIndex: 1,
    },
    soups: {
        zIndex: 2,
    },
    nonVeg: {
        zIndex: 3,
    },
    frameItem: {
        top: 27,
        left: 26,
        borderRadius: 16,
        width: 33,
        height: 2,
        zIndex: 4,
    },
    newRecipeParent: {
        flexDirection: 'row',
    },
    groupParent: {
        width: 353,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginTop: 15,
    },
    frameParent: {
        top: 314,
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
    chefDetails: {
        borderRadius: Border.br_xl,
        backgroundColor: Color.background,
        flex: 1,
        width: '100%',
        height: 852,
        overflow: 'hidden',
    },
});

export default ChefDetails;
