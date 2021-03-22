import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  historyMainView: {
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: '#403b5d',
    borderRadius: 15,
    marginTop: 10,
    paddingHorizontal: 20,
  },

  historyCoinsImage: {
    backgroundColor: '#ecf5fe',
    borderRadius: 15,
    height: 80,
    width: 80,
  },

  historyCoinsView: {
    justifyContent: 'center',
  },

  historyTotalCoinsText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },

  historyTotalCoins: {
    color: 'white',
  },

  historyScoredCoins: {
    fontSize: 20,
    color: '#10c398',
    fontWeight: 'bold',
  },

  historyMainScreen: {
    flex: 1,
    backgroundColor: '#12172e',
    padding: 20,
  },
});
