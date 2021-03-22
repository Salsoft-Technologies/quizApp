import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  touchableRow: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    marginHorizontal: 5,
  },

  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  rowText: {
    paddingLeft: 10,
    color: '#5d6175',
    fontSize: 15,
  },

  rowIcon: {
    height: 20,
    width: 20,
    alignSelf: 'center',
  },

  rowIconSize: {
    height: 30,
    width: 30,
  },

  rowIconSize3: {
    height: 40,
    width: 40,
  },

  mainSettingsScreen: {
    padding: 20,
    flex: 1,
    backgroundColor: '#12172e',
  },
});
