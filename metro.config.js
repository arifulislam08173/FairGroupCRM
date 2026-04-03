const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const config = {
  resolver: {
    blockList: [
      /android\/app\/\.cxx\/.*/,
      /android\/\.gradle\/.*/,
      /android\/build\/.*/,
      /node_modules\/react-native-screens\/android\/\.cxx\/.*/,
      /node_modules\/react-native-safe-area-context\/android\/\.cxx\/.*/,
    ],
  },
  watchFolders: [],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);