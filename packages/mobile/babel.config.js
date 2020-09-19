module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          '@arrow': './src/assets/arrow/',
          '@components': './src/components/',
          '@contexts': './src/contexts/',
          '@images': './src/assets/images/',
          '@logo': './src/assets/logo/',
          '@pages': './src/pages/',
          '@services': './src/services/',
          '@svg': './src/assets/svg/',
          '@styles': './src/styles/',
          '@routes': './src/routes/',
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
};
