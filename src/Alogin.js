import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon, Item, Label,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Input
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'
import usericon from './icon/coc.png'

const styles = StyleSheet.create({})



class Feedback extends Component {
    render() {
        return (
            <Container style={{ borderBottomColor: '#ddd', borderBottomWidth: 2, marginHorizontal: 40 }}>
                <View style={{ marginTop: 20 }}>
                    <View style={{ marginBottom: 8 }}><Text>Username</Text></View>
                    <View style={{ height: 40 }}>
                        <Input style={{ borderWidth: 2, borderRadius: 20, borderColor: '#ddd' }} />
                    </View>
                </View>
                <View style={{ marginTop: 20 }}>
                    <View style={{ marginBottom: 8 }}><Text>Password</Text></View>
                    <View style={{ height: 40 }}>
                        <Input style={{ borderWidth: 2, borderRadius: 20, borderColor: '#ddd' }} />
                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <View style={{ marginBottom: 8 }}><Text>Repeat Password</Text></View>
                    <View style={{ height: 45 }}>
                        <Input style={{ borderWidth: 2, borderRadius: 20, borderColor: '#ddd' }} />
                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={() => window.alert()}>
                        <CardItem style={{ backgroundColor: '#43AB4A', elevation: 10, marginVertical: 10, height: 40, borderRadius: 50, marginHorizontal: 20, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Create Your Account</Text>
                        </CardItem>
                    </TouchableOpacity>
                </View>
                <View></View>

            </Container>

        )
    }
}


class Ordered extends Component {
    render() {
        return (
            <Container style={{ borderBottomColor: '#ddd', borderBottomWidth: 2, marginHorizontal: 40 }}>
                <View style={{ marginTop: 20 }}>
                    <View style={{ marginBottom: 8 }}><Text>Username</Text></View>
                    <View style={{ height: 40 }}>
                        <Input style={{ borderWidth: 2, borderRadius: 20, borderColor: '#ddd' }} />
                    </View>
                </View>
                <View style={{ marginVertical: 20 }}>
                    <View style={{ marginBottom: 8 }}><Text>Password</Text></View>
                    <View style={{ height: 45 }}>
                        <Input style={{ borderWidth: 2, borderRadius: 20, borderColor: '#ddd' }} />

                    </View>
                </View>

                <View>
                    <TouchableOpacity onPress={() => window.alert()}>
                        <CardItem style={{ backgroundColor: '#43AB4A', elevation: 10, marginVertical: 10, height: 40, borderRadius: 50, marginHorizontal: 80, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 20, color: 'white' }}>Sign In</Text>
                        </CardItem>
                    </TouchableOpacity>
                </View>
                <View></View>

            </Container>
        )
    }
}

class Tabnav extends Component {
    render() {
        return (
            <Tabs locked={true}
                renderTabBar={() => <ScrollableTab underlineStyle={{ backgroundColor: '#43AB4A', borderWidth: 2, borderColor: '#43AB4A' }} style={{ backgroundColor: '#fff', }} />}>
                <Tab style={{ backgroundColor: '#fff' }} heading={
                    <TabHeading style={{ backgroundColor: '#fff' }}>
                        <View style={{ backgroundColor: '#ddd', borderRadius: 30 }}>
                            <Text style={{ fontSize: 16, color: '#43AB4A' }}>   Login   </Text>
                        </View>
                    </TabHeading>}>
                    <Ordered />
                </Tab>

                <Tab style={{ backgroundColor: '#fff' }} heading={
                    <TabHeading style={{ backgroundColor: '#fff' }}>
                        <View style={{ backgroundColor: '#ddd', borderRadius: 30 }}>
                            <Text style={{ fontSize: 16, color: '#43AB4A' }}>   Register   </Text>
                        </View>
                    </TabHeading>}>
                    <Feedback />
                </Tab>

            </Tabs>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ position: "relative", justifyContent: "center", flexDirection: 'row', marginVertical: 40, marginHorizontal: 90 }}>
                    <MyIcon style={{ fontSize: 40, top: 10, elevation: 5, flex: 1, color: '#43AB4A' }} name='room-service' />
                    <View style={{ flex: 2, justifyContent: 'center', marginTop: 10 }}>
                        <Text style={{ fontStyle: 'italic', fontSize: 30 }}>FoodApp</Text>
                    </View>
                </View>
                <Tabnav style={{ flex: 4 }} />

            </View>
        )
    }
}

