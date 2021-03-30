import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  touchableRow: {
    flexDirection: 'row',
    padding: 2.5 * vw,
    justifyContent: 'space-between',
    marginHorizontal: 1.5 * vw,
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowText: {
    paddingLeft: 2.5 * vw,
    color: '#5d6175',
    fontSize: 2 * vh,
  },

  rowIcon: {
    height: 1.5 * vh,
    width: 3.5 * vw,
    alignSelf: 'center',
  },

  rowIconSize: {
    height: 3.5 * vh,
    width: 5 * vw,
  },

  rowIconSize3: {
    height: 4.5 * vh,
    width: 7 * vw,
  },

  mainSettingsScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    padding: 3 * vh,
  },
});
