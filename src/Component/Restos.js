import React, {Component} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Icon,
  ScrollableTab,
  Right,
  Tab,
  Tabs,
  TabHeading,
  Badge,
  Left,
  Body,
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MeIcon from 'react-native-vector-icons/Entypo';
import usericon from '../icon/coc.png';
import {withNavigation} from 'react-navigation';

import {getResto} from '../redux/actions/Resto';
import {connect} from 'react-redux';

class Restolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      isLoading: false,
      name: '',
      image: '',
    };
  }
  async componentDidMount() {
    await this.props.dispatch(getResto());
    this.setState({
      isLoading: this.props.resto.isLoading,
    });
  }
  render() {
    return (
      <>
        {!this.state.isLoading &&
          this.props.resto.data.map(v => (
            <View
              key={v.id}
              style={{justifyContent: 'center', alignItems: 'center'}}>
              <TouchableOpacity style={{left: 10}}>
                <Image
                  style={{
                    height: 80,
                    width: 80,
                    backgroundColor: 'red',
                    borderRadius: 40,
                    borderWidth: 2,
                    borderColor: '#43AB4A',
                    marginHorizontal: 5,
                  }}
                  source={{uri: `http://3.90.3.168:4000/image/${v.image}`}}
                />
              </TouchableOpacity>
              <View style={{left: 10}}>
                <Text style={{}}>{v.name}</Text>
              </View>
            </View>
          ))}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    resto: state.resto,
  };
};

export default connect(mapStateToProps)(Restolist);
