import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
      notificationButtonContainer: {
        paddingTop: 3 * vh,
      },
    
      notificationContainer: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#403b5d',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 10 * vw,
      },
    
      notificationIcon: {
        marginRight: 7 * vw,
        height: 70,
        width: 70,
      },
    
      notificationTextView: {
        padding: 30,
      },
    
      notificationTextAlert: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
    
      notificationDescriptionText: {
        color: 'lightgrey',
        fontSize: 16,
      },
    
      notificationMainScreen: {
        flex: 1,
        backgroundColor: '#12172e',
        padding: 20,
      },
})