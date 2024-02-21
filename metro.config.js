const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

// Your current configuration
const defaultConfig = getDefaultConfig(__dirname);

// Configuration for handling SVG files
const svgConfig = {
  transformer: {
    babelTransformerPath: require.resolve('react-native-svg-transformer'),
  },
  resolver: {
    assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
  },
};

// Merge the SVG configuration with the current configuration
module.exports = mergeConfig(defaultConfig, svgConfig);
