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
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons';
import MeIcon from 'react-native-vector-icons/Entypo';
import Cat1 from './icon/c1.png';
import Cat2 from './icon/c2.png';
import Cat3 from './icon/c3.png';
import Cat4 from './icon/c4.png';
import Cat5 from './icon/c5.png';
import Cat6 from './icon/c6.png';
import Cat7 from './icon/c7.png';
import Cat8 from './icon/c8.png';
import Cat9 from './icon/c9.png';
import Cat10 from './icon/c10.png';
import Cat11 from './icon/c11.png';
import Cat12 from './icon/c12.png';
import Cat13 from './icon/c13.png';
import Cat14 from './icon/c14.png';
import Cat15 from './icon/c15.png';
import Cat16 from './icon/c16.png';
import Cat17 from './icon/c17.png';
import Cat18 from './icon/c18.png';
import Cat19 from './icon/c19.png';
import Cat20 from './icon/c20.png';
import Cat21 from './icon/c21.png';

const styles = StyleSheet.create({});

class Feedlist extends Component {
  render() {
    return (
      <Card
        style={{
          elevation: 5,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: 25,
        }}>
        <TouchableOpacity onPress={() => window.alert()}>
          <Image
            style={{
              elevation: 0,
              backgroundColor: 'white',
              height: 95,
              width: 95,
            }}
            source={this.props.images}
          />
        </TouchableOpacity>
        <View>
          <Text style={{marginBottom: 3}}>{this.props.catnames}</Text>
        </View>
      </Card>
    );
  }
}

class Feedback extends Component {
  render() {
    return (
      <Container
        style={{
          borderBottomColor: '#ddd',
          marginHorizontal: 10,
          borderBottomWidth: 2,
        }}>
        <ScrollView>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Feedlist catnames="Drinks" images={Cat1} />
            <Feedlist catnames="Snack" images={Cat2} />
            <Feedlist catnames="Sweets" images={Cat3} />
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Feedlist catnames="Various Rice" images={Cat4} />
            <Feedlist catnames="Chicken" images={Cat5} />
            <Feedlist catnames="Fastfood" images={Cat6} />
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Feedlist catnames="Bread" images={Cat7} />
            <Feedlist catnames="Japan" images={Cat8} />
            <Feedlist catnames="Meatballs" images={Cat9} />
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Feedlist catnames="Noodle" images={Cat10} />
            <Feedlist catnames="Korea" images={Cat11} />
            <Feedlist catnames="Coffee" images={Cat12} />
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Feedlist catnames="Martabak" images={Cat13} />
            <Feedlist catnames="Pizza and Pasta" images={Cat14} />
            <Feedlist catnames="China" images={Cat15} />
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Feedlist catnames="Satay" images={Cat16} />
            <Feedlist catnames="West" images={Cat17} />
            <Feedlist catnames="Seafood" images={Cat18} />
          </View>
          <View style={{marginTop: 10, flexDirection: 'row'}}>
            <Feedlist catnames="Middle East" images={Cat19} />
            <Feedlist catnames="Thailand" images={Cat20} />
            <Feedlist catnames="India" images={Cat21} />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

class Cardlist extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => window.alert()}>
        <Card style={{elevation: 0, backgroundColor: '#ddd', marginBottom: 10}}>
          <CardItem
            style={{
              elevation: 0,
              backgroundColor: '#ddd',
              height: 90,
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: 80,
                width: 80,
                backgroundColor: 'red',
                borderRadius: 40,
                left: 10,
                borderWidth: 2,
                borderColor: '#43AB4A',
              }}
              source={{uri: 'http://3.90.3.168:4000/image/mekdi.jpg'}}
            />
            <View style={{marginLeft: 15, marginTop: -5}}>
              <Text style={{fontSize: 20}}>Resto Bubur Ayam</Text>
              <Text>description</Text>
            </View>
          </CardItem>
        </Card>
      </TouchableOpacity>
    );
  }
}

class Ordered extends Component {
  render() {
    return (
      <Container style={{borderBottomColor: '#ddd', borderBottomWidth: 2}}>
        <ScrollView>
          <View style={{marginTop: 20}}>
            <Cardlist />
            <Cardlist />
            <Cardlist />
            <Cardlist />
            <Cardlist />
            <Cardlist />
            <Cardlist />
            <Cardlist />
            <Cardlist />
          </View>
        </ScrollView>
      </Container>
    );
  }
}

class Tabnav extends Component {
  render() {
    return (
      <Tabs
        locked={true}
        renderTabBar={() => (
          <ScrollableTab
            underlineStyle={{
              backgroundColor: '#43AB4A',
              borderWidth: 2,
              borderColor: '#43AB4A',
            }}
            style={{backgroundColor: '#fff'}}
          />
        )}>
        <Tab
          style={{backgroundColor: '#fff'}}
          heading={
            <TabHeading style={{backgroundColor: '#fff'}}>
              <View style={{backgroundColor: '#ddd', borderRadius: 30}}>
                <Text style={{fontSize: 16, color: '#43AB4A'}}> Resto </Text>
              </View>
            </TabHeading>
          }>
          <Ordered />
        </Tab>

        <Tab
          style={{backgroundColor: '#fff'}}
          heading={
            <TabHeading style={{backgroundColor: '#fff'}}>
              <View style={{backgroundColor: '#ddd', borderRadius: 30}}>
                <Text style={{fontSize: 16, color: '#43AB4A'}}> Category </Text>
              </View>
            </TabHeading>
          }>
          <Feedback />
        </Tab>
      </Tabs>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Header style={{backgroundColor: 'white', height: 40}}>
          <Text
            style={{
              backgroundColor: '#43AB4A',
              height: 30,
              borderRadius: 20,
              top: 10,
              fontSize: 20,
              fontStyle: 'italic',
              color: '#fff',
            }}>
            {' '}
            Menu{' '}
          </Text>
        </Header>
        <Tabnav />
      </View>
    );
  }
}
