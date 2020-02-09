import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Left, Button, Body, Input
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'
import { withNavigation } from 'react-navigation'

const styles = StyleSheet.create({

})

class CardImage extends Component {
    render() {
        return (
            <Card style={{ marginBottom: 10, height: 435, borderRadius: 40, elevation: 5 }
            }>
                <CardItem cardBody style={{ borderTopWidth: 3, borderColor: '#43AB4A', borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}>
                    <Image source={{ uri: 'http://www.allwhitebackground.com/images/5/Burger-HD-Photos.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
                </CardItem>
                <CardItem style={{ backgroundColor: '#FFF', borderBottomLeftRadius: 50, borderBottomRightRadius: 50, elevation: 1 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 22 }} >Lawless Burger</Text>
                            <Text style={{ fontSize: 16 }} >Lawless </Text>
                            <Text style={{ fontSize: 16 }} >Total: Rp.20.000,- </Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 22 }} >Total</Text>
                            <Text style={{ fontSize: 16 }} >Rp.20.000,- </Text>
                        </View>
                    </View>
                </CardItem>
                <CardItem style={{ backgroundColor: 'white', elevation: 5, marginTop: 10, height: 65, borderRadius: 50, marginHorizontal: 70 }}>
                    <Left style={{}}>
                        <TouchableOpacity>
                            <MeIcon name="squared-minus"
                                style={{ fontSize: 26, color: '#43AB4A' }} />
                        </TouchableOpacity>
                    </Left>
                    <Body style={{ marginLeft: -20 }}>
                        <Input value='1' style={{ width: 80, height: 60, borderWidth: 1, borderColor: '#545454', borderRadius: 10 }} />
                    </Body>
                    <Right>
                        <TouchableOpacity>
                            <MeIcon name="squared-plus"
                                style={{ fontSize: 26, color: '#43AB4A' }} />
                        </TouchableOpacity>
                    </Right>
                </CardItem>
                <TouchableOpacity onPress={() => window.alert()}>
                    <CardItem style={{ backgroundColor: 'red', elevation: 10, marginVertical: 10, height: 40, borderRadius: 50, marginHorizontal: 140, justifyContent: 'center' }}>
                        <MyIcon style={{ color: '#fff', fontSize: 28 }} name='delete' />
                    </CardItem>
                </TouchableOpacity>
            </Card >
        );
    }
}


export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <Container style={{ borderBottomColor: '#ddd', borderBottomWidth: 2 }}>
                    <Header style={{ backgroundColor: 'white', height: 50, elevation: 5 }}>
                        <Text style={{ backgroundColor: '#43AB4A', height: 30, borderRadius: 20, top: 10, fontSize: 20, fontStyle: 'italic', color: '#fff' }} >   Cart   </Text>
                    </Header>
                    <ScrollView>
                        <CardImage />
                        <CardImage />
                        <TouchableOpacity onPress={() => window.alert()}>
                            <CardItem style={{ backgroundColor: '#43AB4A', elevation: 10, marginVertical: 10, height: 40, borderRadius: 50, marginHorizontal: 100, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 20, color: 'white' }}>Order</Text>
                            </CardItem>
                        </TouchableOpacity>
                    </ScrollView>
                </Container>

            </View>
        )
    }
}
