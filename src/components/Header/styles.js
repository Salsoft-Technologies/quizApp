import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  headerMainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#2a2b31',
    borderBottomStartRadius: 4.5 * vw,
    borderBottomEndRadius: 4.5 * vw,
    paddingBottom: 15 * vh,
  },

  headerRowView: {
    flexDirection: 'row',
    marginLeft: 5 * vw,
    paddingTop: 5 * vh,
  },

  profilePicture: {
    height: 6 * vh,
    width: 13 * vw,
    borderRadius: 7.5 * vw,
  },

  headerTextView: {
    alignSelf: 'center',
    marginLeft: 3 * vw,
  },

  headerTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 2.15 * vh,
  },

  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6 * vw,
    marginTop: 5 * vh,
  },

  logoutButtonText: {
    color: 'gray',
  },
});
