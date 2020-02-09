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
  ListView,
  FlatList,
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
  Button,
  Body,
  Input,
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MeIcon from 'react-native-vector-icons/Entypo';
import {withNavigation} from 'react-navigation';

import {getItems} from './redux/actions/Items';
import {connect} from 'react-redux';

const APP_URL = 'http://3.90.3.168:4000/';
const url = 'http://3.90.3.168:4000/items';

const styles = StyleSheet.create({});

class CardImage extends Component {
  render() {
    return (
      <Card
        style={{marginBottom: 10, height: 150, borderRadius: 10, elevation: 5}}>
        <CardItem
          cardBody
          style={{
            flexDirection: 'row',
            borderTopWidth: 3,
            borderColor: '#43AB4A',
            borderRadius: 5,
          }}>
          <Image
            source={{
              uri:
                'http://www.allwhitebackground.com/images/5/Burger-HD-Photos.jpg',
            }}
            style={{left: 5, height: 120, width: 120}}
          />
          <View style={{flex: 1, flexDirection: 'row', left: 20}}>
            <View style={{flex: 1}}>
              <Text style={{fontSize: 22}}>Lawless Burger</Text>
              <Text style={{fontSize: 16}}>Category</Text>
              <Text style={{fontSize: 16}}>Lawless </Text>
              <Text style={{fontSize: 16}}>Desc </Text>
              <Text style={{fontSize: 16}}>Rp.20.000,- </Text>
            </View>
          </View>
        </CardItem>
      </Card>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      fileImage: '',
      count: '',
      id: '',
      itemname: '',
      price: '',
      description: '',
      id_cat: '',
      category: '',
      id_resto: '',
      restaurant: '',
    };
  }
  async componentDidMount() {
    await this.props.dispatch(getItems());
    this.setState({
      count: this.props.items.info.count,
    });
  }

  render() {
    let {
      id,
      itemname,
      price,
      description,
      id_cat,
      category,
      id_resto,
      restaurant,
    } = this.state;

    return (
      <View style={{flex: 1}}>
        <Container
          style={{
            borderBottomColor: '#ddd',
            borderBottomWidth: 2,
            marginHorizontal: 10,
          }}>
          <ScrollView>
            {!this.props.items.isLoading &&
              this.props.items.result.map(v => (
                <Card
                  key={v.id}
                  style={{
                    marginBottom: 10,
                    height: 150,
                    borderRadius: 10,
                    elevation: 5,
                  }}>
                  <CardItem
                    cardBody
                    style={{
                      flexDirection: 'row',
                      borderTopWidth: 3,
                      borderColor: '#43AB4A',
                      borderRadius: 5,
                    }}>
                    <Image
                      source={{
                        uri:
                          'http://www.allwhitebackground.com/images/5/Burger-HD-Photos.jpg',
                      }}
                      style={{left: 5, height: 120, width: 120}}
                    />
                    <View style={{flex: 1, flexDirection: 'row', left: 20}}>
                      <View style={{flex: 1}}>
                        <Text style={{fontSize: 22}}>{v.itemname}</Text>
                        <Text style={{fontSize: 16}}>{v.category}</Text>
                        <Text style={{fontSize: 16}}>{v.restaurant} </Text>
                        <Text style={{fontSize: 16}}>{v.description} </Text>
                        <Text style={{fontSize: 16}}>Rp.{v.price},- </Text>
                      </View>
                    </View>
                  </CardItem>
                </Card>
              ))}
          </ScrollView>
        </Container>
      </View>
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items,
  };
};

export default connect(mapStateToProps)(App);
