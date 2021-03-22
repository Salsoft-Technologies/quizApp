import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  touchableRow: {
    flexDirection: 'row',
    padding: 2.5 * vw ,
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
    fontSize: 2.2 * vh,
  },

  rowIcon: {
    height: 2.5 * vh,
    width: 4.5 * vw,
    alignSelf: 'center',
  },

  rowIconSize: {
    height: 4.5 * vh,
    width: 6 * vw,
  },

  rowIconSize3: {
    height: 5.5 * vh,
    width: 8 * vw,
  },

  mainSettingsScreen: {
    padding: 4 * vw,
    flex: 1,
    backgroundColor: '#12172e',
  },
});
