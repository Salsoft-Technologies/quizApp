import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    notificationHeaderView: {
        borderBottomColor: '#5d6175',
        paddingVertical: 10,
        borderBottomWidth: 1,
      },
    
      notificationHeaderText: {
        color: '#5d6175',
        fontSize: 20,
        fontWeight: 'bold',
      },
    
      notificationButtonContainer: {
        paddingTop: 20,
      },
    
      notificationContainer: {
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#403b5d',
        justifyContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingLeft: 40,
      },
    
      notificationIcon: {
        marginRight: 30,
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