import React from 'react';
import {useState, useContext} from 'react';
import {AuthContext} from '../../navigation/AuthProvider';

import {
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  StatusBar,
} from 'react-native';
import styles from './styles';
import OptionalFooter from '../../components/OptionalFooter/index';

function AboutScreen({navigation}) {
  const {logout} = useContext(AuthContext);
  const [data, setData] = useState([
    {
      id: 1,
      icon: require('../../assets/images/quizIcons/M.png'),
      heading: 'Maths',
      description:
        'Maths is one of the weakest points of students nowadays. However it is quite easy and necessary.',
    },

    {
      id: 2,
      icon: require('../../assets/images/quizIcons/A.png'),
      heading: 'Astronomy',
      description:
        'Studying about space is nowadays in a trend and it gives a lot of ways to explore world.',
    },

    {
      id: 3,
      icon: require('../../assets/images/quizIcons/S.png'),
      heading: 'Science',
      description:
        'Studying about science is nowadays in a trend and it gives a lot of ways to explore world.',
    },
  ]);

  const renderAboutHeader = () => {
    return (
      <TouchableOpacity onPress={() => logout()} style={styles.headerView}>
        <Image resizeMode='contain' source={require('../../assets/images/quizIcons/logout.png')} />
      </TouchableOpacity>
    );
  };

  const renderImageContainer = () => {
    return (
      <View>
        <Image
          resizeMode="contain"
          style={styles.imageSize}
          source={require('../../assets/images/mainImages/study.png')}
        />
      </View>
    );
  };

  const renderHeading = () => {
    return (
      <View style={styles.headingView}>
        <Text style={styles.aboutText}>
          about<Text style={styles.meText}> me</Text>
        </Text>
      </View>
    );
  };

  const renderDescription = () => {
    return (
      <Text style={styles.descriptionText}>
        We are ambitious about expanding knowledge among all. We believe that
        knowledge can win you the world no matter where you belong to.
      </Text>
    );
  };

  const _renderItems = ({item}) => {
    return (
      <View style={styles.itemsView}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image style={styles.iconSize} source={item.icon} />
          <Text style={styles.quizHeadingText}>{item.heading}</Text>
        </View>

        <Text style={styles.quizDescriptionText}>{item.description}</Text>
      </View>
    );
  };

  const renderList = () => {
    return (
      <FlatList
        data={data}
        renderItem={_renderItems}
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        keyExtractor={(item, index) => index.toString()}
      />
    );
  };

  const renderFooter = () => {
    return (
      <View style={styles.mainFooterView}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.goBackButton}>
          <Image
            resizeMode="contain"
            style={styles.backIconStyle}
            source={require('../../assets/images/quizIcons/leftArrow.png')}
          />

          <Text style={styles.goBackText}>Go Back</Text>
        </TouchableOpacity>

        <OptionalFooter
          title="Take a Tour"
          customStyle={styles.footerStyle}
          destination={() => navigation.navigate('AllQuiz')}
        />
      </View>
    );
  };

  return (
    <View style={styles.mainSettingScreen}>
      <StatusBar backgroundColor="#141733" />
      {renderAboutHeader()}
      {renderImageContainer()}
      {renderHeading()}
      {renderDescription()}
      {renderList()}
      {renderFooter()}
    </View>
  );
}

export default AboutScreen;
