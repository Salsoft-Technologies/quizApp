import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
      notificationButtonContainer: {
        paddingTop: 3 * vh,
      },
    
      notificationContainer: {
        flexDirection: 'row',
        borderRadius: 4 * vw,
        backgroundColor: '#403b5d',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 10 * vw,
      },
    
      notificationIcon: {
        marginRight: 7 * vw,
        height: 11 * vh,
        width: 18 * vw
      },
    
      notificationTextView: {
        padding: 7 * vw,
      },
    
      notificationTextAlert: {
        color: 'white',
        fontSize: 2.3 * vh,
        fontWeight: 'bold',
      },
    
      notificationDescriptionText: {
        color: 'lightgrey',
        fontSize: 2.3 * vh,
      },
    
      notificationMainScreen: {
        flex: 1,
        backgroundColor: '#12172e',
        padding: 5 * vw,
      },
})