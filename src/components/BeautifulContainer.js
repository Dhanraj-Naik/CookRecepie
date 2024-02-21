import React, { memo } from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { FontSize, FontFamily, Color } from "../utils/GlobalStyles";

const BeautifulContainer = memo(() => {
  return (
    <View style={styles.frameParent}>
      <View style={styles.ellipseFlexBox}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-24.png")}
        />
        <View style={styles.kuniarBasuuParent}>
          <Text style={[styles.kuniarBasuu, styles.kuniarBasuuTypo]}>
            Kuniar Basuu
          </Text>
          <Text style={[styles.veryNycReceipe, styles.kuniarBasuuTypo]}>
            Very Nyc receipe✌🏻
          </Text>
        </View>
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-25.png")}
        />
        <View style={styles.kuniarBasuuParent}>
          <Text style={[styles.kuniarBasuu, styles.kuniarBasuuTypo]}>
            Amit shah
          </Text>
          <Text style={[styles.veryNycReceipe, styles.kuniarBasuuTypo]}>
            Looking Awesome🤗🤗🤗
          </Text>
        </View>
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-26.png")}
        />
        <View style={styles.kuniarBasuuParent}>
          <Text style={[styles.kuniarBasuu, styles.kuniarBasuuTypo]}>
            Amit Tribedi
          </Text>
          <Text style={[styles.veryNycReceipe, styles.kuniarBasuuTypo]}>
            Looking Beautiful
          </Text>
        </View>
      </View>
      <View style={[styles.ellipseGroup, styles.ellipseFlexBox]}>
        <Image
          style={styles.frameChild}
          resizeMode="cover"
          source={require("../assets/ellipse-27.png")}
        />
        <View style={styles.kuniarBasuuParent}>
          <Text style={[styles.kuniarBasuu, styles.kuniarBasuuTypo]}>
            Kuniar Basuu
          </Text>
          <Text style={[styles.veryNycReceipe, styles.kuniarBasuuTypo]}>
            Looking Beautiful💓💓
          </Text>
        </View>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  kuniarBasuuTypo: {
    textAlign: "left",
    lineHeight: 17,
    fontSize: FontSize.size_xs,
  },
  ellipseFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  frameChild: {
    width: 27,
    height: 27,
  },
  kuniarBasuu: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorWhite,
  },
  veryNycReceipe: {
    fontWeight: "300",
    fontFamily: FontFamily.poppinsLight,
    color: Color.colorGainsboro,
  },
  kuniarBasuuParent: {
    marginLeft: 8,
  },
  ellipseGroup: {
    marginTop: 11,
  },
  frameParent: {
    position: "absolute",
    top: 608,
    left: 20,
  },
});

export default BeautifulContainer;
