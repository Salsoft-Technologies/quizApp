import React, {useContext} from 'react';
import {Text, View, Image, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../navigation/AuthProvider';
import PropTypes from 'prop-types';

function Header(props) {
  Header.propTypes = {
    title: PropTypes.string,
  };

  const {logout} = useContext(AuthContext);
  const {user} = useContext(AuthContext);

  const renderHeader = () => {
    return (
      <View style={styles.headerMainView}>
        <View style={styles.headerRowView}>
          <Image
            resizeMode="contain"
            style={styles.profilePicture}
            source={require('../../assets/images/quizIcons/logo.png')}
          />
          <View style={styles.headerTextView}>
            <Text style={styles.headerTextStyle}>
              {user ? props.title : user.email}
            </Text>
          </View>
        </View>

        <TouchableOpacity onPress={() => logout()} style={styles.logoutButton}>
          <Image
            resizeMode="contain"
            source={require('../../assets/images/quizIcons/logout.png')}
          />
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <>
      <StatusBar backgroundColor="#2a2b31" />
      {renderHeader()}
    </>
  );
}

export default Header;
