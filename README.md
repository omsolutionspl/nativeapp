https://github.com/erikras/ducks-modular-redux
https://github.com/erikras/ducks-modular-redux/blob/master/CommonJs.md



https://gist.github.com/jarretmoses/c2e4786fd342b3444f3bc6beff32098d
https://github.com/shoutem/ui/issues/424#issuecomment-4714643440


cp ./node_modules/react-native/Libraries/DeprecatedPropTypes/DeprecatedViewStylePropTypes.js ./node_modules/react-native/Libraries/Components/View/ViewStylePropTypes.js
cp ./node_modules/react-native/Libraries/DeprecatedPropTypes/DeprecatedColorPropType.js ./node_modules/react-native/Libraries/StyleSheet/ColorPropType.js
cp ./node_modules/react-native/Libraries/DeprecatedPropTypes/DeprecatedImageStylePropTypes.js ./node_modules/react-native/Libraries/Image/ImageStylePropTypes.js


watchman watch-del-all && rm -rf $TMPDIR/react-native-packager-cache-* && rm -rf $TMPDIR/metro-bundler-cache-* && rm -rf node_modules/ && npm cache clean && npm install && npm start -- --reset-cache
