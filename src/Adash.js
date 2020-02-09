import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Left, Body
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'
import usericon from './icon/coc.png'
import { withNavigation } from 'react-navigation'
import Cat1 from './icon/c1.png'
import Cat2 from './icon/c2.png'
import Cat3 from './icon/c3.png'
import Cat4 from './icon/c4.png'
import Cat5 from './icon/c5.png'
import Cat6 from './icon/c6.png'

import Itemslist from './Component/Items';
import Restolist from './Component/Restos';


class Feedlist extends Component {
    render() {
        return (
            <Card style={{ elevation: 5, flex: 1, justifyContent: 'center', alignItems: 'center', marginHorizontal: 25 }}>
                <TouchableOpacity onPress={() => window.alert()}>
                    <Image style={{ backgroundColor: 'white', height: 95, width: 95 }}
                        source={this.props.images} />
                </TouchableOpacity>
                <View>
                    <Text style={{ marginBottom: 3 }}>{this.props.catnames}</Text>
                </View>
            </Card>
        )
    }
}


class Restmenus extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", marginTop: 10 }}>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Restolist />
                    </ScrollView>
                </View>
            </View>
        )
    }
}



class Catmenus extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "white", marginTop: 10, marginHorizontal: 10 }}>
                <View>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <Feedlist catnames='Drinks' images={Cat1} />
                        <Feedlist catnames='Snack' images={Cat2} />
                        <Feedlist catnames='Sweets' images={Cat3} />
                        <Feedlist catnames='Various Rice' images={Cat4} />
                        <Feedlist catnames='Chicken' images={Cat5} />
                        <Feedlist catnames='Fastfood' images={Cat6} />
                    </ScrollView>
                </View>
            </View>
        )
    }
}

class Headbar extends Component {
    render() {
        return (
            <View style={{ marginHorizontal: 20, marginTop: 15, elevation: 5, marginBottom: 10 }}>
                <View style={{ position: "relative", justifyContent: "center", flexDirection: 'row' }}>
                    <MyIcon style={{ fontSize: 30, top: 10, elevation: 5, flex: 1, color: '#43AB4A' }} name='room-service' />
                    <View style={{ flex: 2, justifyContent: 'center' }}>
                        <Text style={{ fontStyle: 'italic', fontSize: 18 }}>FoodApp</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}
                        placeholder="Search for apps and games" style={{ borderWidth: 1, borderColor: "#eff", borderRadius: 20, height: 50, paddingLeft: 60, paddingRight: 14, backgroundColor: "#fff", elevation: 5, flex: 3 }}>
                        <MeIcon style={{ fontSize: 20, left: 100, elevation: 5, top: 15, color: '#43AB4A' }} name='magnifying-glass' />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}
const Headbarr = withNavigation(Headbar)


class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Container >
                    <Headbarr />
                    <Container style={{ borderTopWidth: 1, borderColor: '#ddd' }}>
                        <ScrollView>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <View style={{ flex: 2, marginLeft: 20, marginTop: 5 }}>
                                    <Text style={{ fontSize: 18 }}>Food</Text>
                                </View>

                                <View style={{ flex: 1, top: 5, width: 50, backgroundColor: '#43AB4A', height: 24, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                    <TouchableOpacity >
                                        <Text style={{ color: 'white', marginBottom: 3, fontSize: 18 }}>View All</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#ddd', height: 1., marginHorizontal: 20 }}>
                            </View>

                            <Itemslist />


                            <View style={{ backgroundColor: '#ddd', height: 1., marginTop: 10, marginHorizontal: 20 }}>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <View style={{ flex: 2, marginLeft: 20, marginTop: 5 }}>
                                    <Text style={{ fontSize: 18 }}>Resto</Text>
                                </View>

                                <View style={{ flex: 1, top: 5, width: 60, backgroundColor: '#43AB4A', height: 24, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
                                        <Text style={{ color: 'white', marginBottom: 3, fontSize: 16 }}>View All Resto</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#ddd', height: 1., marginHorizontal: 20 }}>
                            </View>

                            <Restmenus />

                            <View style={{ backgroundColor: '#ddd', height: 1., marginTop: 10, marginHorizontal: 20 }}>
                            </View>
                            <View style={{ flexDirection: 'row', marginBottom: 5 }}>
                                <View style={{ flex: 2, marginLeft: 20, marginTop: 5 }}>
                                    <Text style={{ fontSize: 18 }}>Categories</Text>
                                </View>

                                <View style={{ flex: 1, top: 5, width: 80, backgroundColor: '#43AB4A', height: 24, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginRight: 20 }}>
                                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('Menu') }}>
                                        <Text style={{ color: 'white', marginBottom: 3, fontSize: 12 }}>View All Categories</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ backgroundColor: '#ddd', height: 1., marginHorizontal: 20 }}>
                            </View>
                            <Catmenus />
                        </ScrollView>
                    </Container>
                </Container>

            </View >
        )
    }
}

export default App
