module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          '@components': './src/components/',
          '@pages': './src/pages/',
          '@logo': './src/assets/logo/',
          '@arrow': './src/assets/arrow/',
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
};
