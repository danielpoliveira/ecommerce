module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          '@components': './src/components/',
          '@contexts': './src/contexts/',
          '@logo': './src/assets/logo/',
          '@pages': './src/pages/',
          
          '@services':  './src/services/',
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
};
