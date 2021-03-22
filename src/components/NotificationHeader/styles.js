import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
 
  //Notification
  notificationHeaderView: {
    borderBottomColor: '#5d6175',
    paddingVertical: 1.5 * vh,
    borderBottomWidth: 0.5 * vw,
  },

  notificationHeaderText: {
    color: '#5d6175',
    fontSize: 3 * vh,
    fontWeight: 'bold',
  },

});
