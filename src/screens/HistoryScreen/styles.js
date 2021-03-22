import {StyleSheet} from 'react-native';
import vw from '../../utils/units/vw';
import vh from '../../utils/units/vh';

export default StyleSheet.create({
  historyMainView: {
    flexDirection: 'row',
    padding: 2.5 * vw,
    justifyContent: 'space-between',
    backgroundColor: '#403b5d',
    borderRadius: 3 * vw,
    marginTop: 1.5 * vh,
    paddingHorizontal: 5 * vw,
  },

  historyCoinsImage: {
    backgroundColor: '#ecf5fe',
    borderRadius: 5 * vw,
    height: 12 * vh,
    width: 20 * vw,
  },

  historyCoinsView: {
    justifyContent: 'center',
  },

  historyTotalCoinsText: {
    color: 'white',
    fontSize: 3 * vh,
    fontWeight: 'bold',
  },

  historyTotalCoins: {
    color: 'white',
  },

  historyScoredCoins: {
    fontSize: 3 * vh,
    color: '#10c398',
    fontWeight: 'bold',
  },

  historyMainScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    padding: 3 * vh,
  },
});
