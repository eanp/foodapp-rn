import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image, ScrollViewComponent
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({

})

class Feedlist extends Component {
    render() {
        return (
            <TouchableOpacity>

                <Card style={{ elevation: 0, backgroundColor: '#ddd', marginBottom: 10 }}>
                    <CardItem style={{ elevation: 0, backgroundColor: '#ddd', height: 100, flexDirection: 'row' }}>
                        <View style={{ height: 60, width: 60, backgroundColor: 'white', borderRadius: 30, marginLeft: 10 }}>
                            <MyIcon style={{ left: 10, marginTop: 8, fontSize: 40, color: '#43AB4A' }} active name="room-service" />
                        </View>
                        <View style={{ marginLeft: 10, marginTop: -15 }}>
                            <Text style={{ fontSize: 16 }}>Bubur Ayam</Text>
                            <Text >Resto Bang Midun</Text>
                            <Text style={{ left: 10, fontStyle: 'italic' }} >makanan mantap harga santuy</Text>
                        </View>
                        <View style={{ marginLeft: -30, marginTop: -50, flexDirection: 'row' }}>
                            <MyIcon name='star' style={{ color: '#43AB4A', fontSize: 20 }} />
                            <MyIcon name='star' style={{ color: '#43AB4A', fontSize: 20 }} />
                            <MyIcon name='star' style={{ color: '#43AB4A', fontSize: 20 }} />
                            <MyIcon name='star' style={{ color: '#43AB4A', fontSize: 20 }} />
                        </View>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

class Feedback extends Component {
    render() {
        return (
            <Container style={{ borderBottomColor: '#ddd', borderBottomWidth: 2 }}>
                <ScrollView>
                    <View style={{ marginTop: 20 }}>
                        <Feedlist />
                        <Feedlist />
                        <Feedlist />
                        <Feedlist />
                        <Feedlist />
                        <Feedlist />
                        <Feedlist />
                    </View>
                </ScrollView>
            </Container>
        )
    }
}


class Cardlist extends Component {
    render() {
        return (
            <TouchableOpacity>

                <Card style={{ elevation: 0, backgroundColor: '#ddd', marginBottom: 10 }}>
                    <CardItem style={{ elevation: 0, backgroundColor: '#ddd', height: 90, flexDirection: 'row' }}>
                        <View style={{ height: 60, width: 60, backgroundColor: 'white', borderRadius: 30, marginLeft: 10 }}>
                            <MyIcon style={{ left: 10, marginTop: 8, fontSize: 40, color: '#43AB4A' }} active name="room-service" />
                        </View>
                        <View style={{ marginLeft: 10, marginTop: -5 }}>
                            <Text style={{ fontSize: 20, fontStyle: 'bold' }}>Bubur Ayam</Text>
                            <Text >Resto Bang Midun</Text>
                            <Text >x 5   -Rp 80.000</Text>
                        </View>
                        <View style={{ marginLeft: 70, marginTop: -5 }}>
                            <Text >5 January</Text>
                        </View>
                    </CardItem>
                </Card>
            </TouchableOpacity>
        )
    }
}

class Ordered extends Component {
    render() {
        return (
            <Container style={{ borderBottomColor: '#ddd', borderBottomWidth: 2 }}>
                <ScrollView>
                    <View style={{ marginTop: 20 }}>
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
                            <Text style={{ fontSize: 16, color: '#43AB4A' }}>   Feedback   </Text>
                        </View>
                    </TabHeading>}>
                    <Feedback />
                </Tab>
                <Tab style={{ backgroundColor: '#fff' }} heading={
                    <TabHeading style={{ backgroundColor: '#fff' }}>
                        <View style={{ backgroundColor: '#ddd', borderRadius: 30 }}>
                            <Text style={{ fontSize: 16, color: '#43AB4A' }}>   Ordered   </Text>
                        </View>
                    </TabHeading>}>
                    <Ordered />
                </Tab>
            </Tabs>
        );
    }
}



export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Header style={{ backgroundColor: 'white', height: 40, elevation: 5 }}>
                    <Text style={{ backgroundColor: '#43AB4A', height: 30, borderRadius: 20, top: 10, fontSize: 20, fontStyle: 'italic', color: '#fff' }} >   History   </Text>
                </Header>
                <Tabnav />

            </View>
        )
    }
}
