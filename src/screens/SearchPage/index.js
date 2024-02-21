import * as React from 'react';
import { Text, StyleSheet, Image, View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import RecipeSearchContainer from '../../components/RecipeSearchContainer';
import ReceipeCard from '../../components/ReceipeCard';
import ModeDark from '../../components/ModeDark';
import StatusHome from '../../components/StatusHome';
import { FontSize, FontFamily, Color, Border, Padding } from '../../utils/GlobalStyles';

const SearchPage = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.searchPage}>
      <Text style={[styles.whatToEat, styles.whatToEatPosition]}>{`What to eat
today?`}</Text>
      <View style={[styles.searchRecipesParent, styles.recipesParentFlexBox]}>
        <Text style={styles.searchRecipes}>Search recipes</Text>
        <Image
          style={styles.searchIcon}
          resizeMode="cover"
          source={require('../../assets/search.png')}
        />
      </View>
      <View style={[styles.frameParent, styles.parentPosition]}>
        <RecipeSearchContainer />
        <View style={styles.frameGroup}>
          <View
            style={[styles.popularRecipesParent, styles.recipesParentFlexBox]}
          >
            <Text style={[styles.popularRecipes, styles.seeAllTypo]}>
              Popular Recipes
            </Text>
            <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
          </View>
          <View style={styles.receipeCardParent}>
            <ReceipeCard
              rectangle2={require('../../assets/rectangle-22.png')}
              receipeName="Bada Pao"
              time="35 min"
              hard="Hard"
              receipeCardWidth={204}
              receipeCardHeight={272}
              receipeCardMarginLeft="unset"
              rectangleViewBackgroundColor="#f5ffde"
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
              rectangle2={require('../../assets/rectangle-2.png')}
              receipeName="Cheery pancake"
              time="20 min"
              hard="Hard"
              receipeCardWidth={204}
              receipeCardHeight={272}
              receipeCardMarginLeft={8}
              rectangleViewBackgroundColor="#fff6de"
              cheeryPancakeColor="#343434"
            />
          </View>
        </View>
      </View>
      <Image
        style={[styles.chevronLeftIcon, styles.parentPosition]}
        resizeMode="cover"
        source={require('../../assets/chevron-left.png')}
      />
      <ModeDark
        signal={require('../../assets/signal1.png')}
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
      <View style={[styles.navigationWrapper, styles.whatToEatPosition]}>
        <StatusHome
          search11={require('../../assets/cottage2.png')}
          stockpot={require('../../assets/search-1-21.png')}
          statusHomePosition="absolute"
          statusHomeTop={19}
          statusHomeLeft={36}
          search11Position="unset"
          search11Width="100%"
          search11Height="100%"
          search11Overflow="unset"
          search11MarginLeft="unset"
          stockpotIconOverflow="hidden"
          stockpotIconPosition="relative"
          stockpotIconWidth={24}
          stockpotIconHeight={24}
          stockpotIconMarginLeft={75}
          accountCircleIconPosition="relative"
          accountCircleIconWidth={24}
          accountCircleIconHeight={24}
          accountCircleIconMarginLeft={75}
          accountCircleIconOverflow="unset"
          onCottagePress={() => navigation.navigate('HomePage')}
          onStockpotPress={() => navigation.navigate('ChefPage')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  whatToEatPosition: {
    left: '50%',
    position: 'absolute',
  },
  recipesParentFlexBox: {
    alignItems: 'center',
    width: 353,
    flexDirection: 'row',
  },
  parentPosition: {
    left: 20,
    position: 'absolute',
  },
  seeAllTypo: {
    lineHeight: 17,
    fontSize: FontSize.size_xs,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsRegular,
  },
  whatToEat: {
    marginLeft: -64.5,
    fontSize: FontSize.size_3xl,
    lineHeight: 28,
    fontWeight: '500',
    fontFamily: FontFamily.poppinsMedium,
    color: Color.text,
    textAlign: 'center',
    top: 61,
  },
  searchRecipes: {
    fontSize: FontSize.size_sm,
    zIndex: 0,
    textAlign: 'left',
    fontFamily: FontFamily.poppinsRegular,
    color: Color.textFaded,
  },
  searchIcon: {
    top: 11,
    left: 318,
    width: 18,
    height: 18,
    zIndex: 1,
    position: 'absolute',
  },
  searchRecipesParent: {
    top: 138,
    borderRadius: Border.br_23xl,
    backgroundColor: Color.inputFieldBackground,
    paddingHorizontal: Padding.p_lgi,
    paddingVertical: Padding.p_4xs,
    left: 20,
    position: 'absolute',
    overflow: 'hidden',
  },
  popularRecipes: {
    color: Color.colorDarkslategray_100,
  },
  seeAll: {
    color: Color.textFaded,
    fontSize: FontSize.size_xs,
  },
  popularRecipesParent: {
    justifyContent: 'space-between',
  },
  receipeCardParent: {
    marginTop: 15,
    flexDirection: 'row',
  },
  frameGroup: {
    marginTop: 20,
  },
  frameParent: {
    top: 198,
  },
  chevronLeftIcon: {
    width: 24,
    height: 24,
    top: 61,
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
  searchPage: {
    borderRadius: Border.br_xl,
    backgroundColor: Color.background,
    flex: 1,
    width: '100%',
    height: 852,
    overflow: 'hidden',
  },
});

export default SearchPage;
