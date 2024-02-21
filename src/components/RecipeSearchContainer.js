import React, { memo } from "react";
import { Text, StyleSheet, View } from "react-native";
import RecentSearchContainer from "./RecentSearchContainer";
import { FontFamily, FontSize, Color } from "../utils/GlobalStyles";

const RecipeSearchContainer = memo(() => {
  return (
    <View>
      <View style={styles.recentSearchParent}>
        <Text style={[styles.recentSearch, styles.clearTypo]}>
          Recent search
        </Text>
        <Text style={[styles.clear, styles.clearTypo]}>Clear</Text>
      </View>
      <View style={styles.frameGroup}>
        <RecentSearchContainer
          recipeId={require("../assets/rectangle-10.png")}
          dishName="Egg Omlet"
          timePostedText="4 days Ago"
        />
        <RecentSearchContainer
          recipeId={require("../assets/rectangle-101.png")}
          dishName="Salad"
          timePostedText="2 days Ago"
          propMarginTop={5}
        />
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  clearTypo: {
    textAlign: "left",
    fontFamily: FontFamily.poppinsRegular,
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  recentSearch: {
    color: Color.colorDarkslategray_100,
  },
  clear: {
    color: Color.textFaded,
  },
  recentSearchParent: {
    width: 353,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  frameGroup: {
    marginTop: 15,
  },
});

export default RecipeSearchContainer;
