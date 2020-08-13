module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver',
      {
        alias: {
          '@components': './src/components/',
          '@logo': './src/assets/logo/',
        }
      }
    ]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
};
