import React, { memo } from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color, FontSize, Border, Padding } from "../utils/GlobalStyles";

const LiveCookingSection = memo(() => {
  const navigation = useNavigation();

  return (
    <View style={styles.frameParent}>
      <View style={[styles.liveCookingParent, styles.frameGroupFlexBox]}>
        <Text style={styles.liveCooking}>Live Cooking</Text>
        <Text style={[styles.seeAll, styles.seeAllTypo]}>See All</Text>
      </View>
      <View style={styles.groupParent}>
        <Pressable
          style={styles.groupLayout}
          onPress={() => navigation.navigate("LiveCooking")}
        >
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-3.png")}
          />
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.ellipseParentFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-2.png")}
              />
              <View style={styles.dimpalAroraParent}>
                <Text style={[styles.dimpalArora, styles.joinLiveTypo]}>
                  dimpal Arora
                </Text>
                <Text style={[styles.recipe, styles.seeAllTypo]}>
                  224 recipe
                </Text>
              </View>
            </View>
            <View style={[styles.joinLiveWrapper, styles.ellipseParentFlexBox]}>
              <Text style={[styles.joinLive, styles.joinLiveTypo]}>
                Join live
              </Text>
            </View>
          </View>
        </Pressable>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <Image
            style={[styles.groupChild, styles.groupLayout]}
            resizeMode="cover"
            source={require("../assets/rectangle-31.png")}
          />
          <View style={[styles.frameGroup, styles.frameGroupFlexBox]}>
            <View style={styles.ellipseParentFlexBox}>
              <Image
                style={styles.frameChild}
                resizeMode="cover"
                source={require("../assets/ellipse-21.png")}
              />
              <View style={styles.dimpalAroraParent}>
                <Text style={[styles.dimpalArora, styles.joinLiveTypo]}>
                  Kuniar Basuu
                </Text>
                <Text style={[styles.recipe, styles.seeAllTypo]}>
                  118 recipe
                </Text>
              </View>
            </View>
            <View style={[styles.joinLiveWrapper, styles.ellipseParentFlexBox]}>
              <Text style={[styles.joinLive, styles.joinLiveTypo]}>
                Join live
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  frameGroupFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  seeAllTypo: {
    fontFamily: FontFamily.poppinsLight,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: 17,
  },
  groupLayout: {
    height: 124,
    width: 229,
  },
  joinLiveTypo: {
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    lineHeight: 17,
  },
  ellipseParentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  liveCooking: {
    fontSize: FontSize.size_lg,
    fontWeight: "500",
    fontFamily: FontFamily.poppinsMedium,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    lineHeight: 17,
  },
  seeAll: {
    fontSize: FontSize.size_sm,
    color: Color.textFaded,
  },
  liveCookingParent: {
    width: 353,
  },
  groupChild: {
    top: 0,
    left: 0,
    borderRadius: Border.br_2xl,
    position: "absolute",
  },
  frameChild: {
    width: 27,
    height: 27,
  },
  dimpalArora: {
    fontSize: FontSize.size_xs,
  },
  recipe: {
    color: Color.colorGainsboro,
    fontSize: FontSize.size_xs,
  },
  dimpalAroraParent: {
    marginLeft: 8,
  },
  joinLive: {
    fontSize: FontSize.size_3xs,
    letterSpacing: 0,
  },
  joinLiveWrapper: {
    borderRadius: Border.br_29xl,
    backgroundColor: Color.primary,
    justifyContent: "center",
    paddingHorizontal: Padding.p_3xs,
    paddingVertical: Padding.p_10xs,
  },
  frameGroup: {
    top: 82,
    left: 9,
    width: 210,
    position: "absolute",
  },
  rectangleGroup: {
    marginLeft: 8,
  },
  groupParent: {
    width: 373,
    marginTop: 15,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 14,
  },
});

export default LiveCookingSection;
