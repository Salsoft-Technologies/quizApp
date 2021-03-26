import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  footerView: {
    flexDirection: 'row',
    alignItems: 'center',
    top: 0.7 * vh,
    justifyContent: 'flex-end',
  },

  tourText: {
    color: '#abb9f9',
    fontWeight: 'bold',
    paddingLeft: 1.5 * vw,
  },

  arrowIcon: {
    height: 3.4 * vh,
    width: 7.4 * vw,
  },
});
