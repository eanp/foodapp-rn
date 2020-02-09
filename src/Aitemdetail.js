import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput, Image, ListView, FlatList
} from 'react-native'
import {
    Container, Header, Content, Card, CardItem, Icon,
    ScrollableTab, Right, Tab, Tabs, TabHeading, Badge, Left, Button, Body, Input
} from 'native-base';
import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'

const styles = StyleSheet.create({

})

class CardImage extends Component {

    render() {
        return (
            <Card style={{ marginBottom: 10, height: 150, borderRadius: 10, elevation: 5 }
            }>
                <CardItem cardBody style={{ flexDirection: 'row', borderTopWidth: 3, borderColor: '#43AB4A', borderRadius: 5 }}>
                    <Image source={{ uri: 'http://www.allwhitebackground.com/images/5/Burger-HD-Photos.jpg' }} style={{ left: 5, height: 120, width: 120 }} />
                    <View style={{ flex: 1, flexDirection: 'row', left: 20 }}>
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 22 }} >Lawless Burger</Text>
                            <Text style={{ fontSize: 16 }} >Category</Text>
                            <Text style={{ fontSize: 16 }} >Lawless </Text>
                            <Text style={{ fontSize: 16 }} >Desc </Text>
                            <Text style={{ fontSize: 16 }} >Rp.20.000,- </Text>
                        </View>

                    </View>
                </CardItem>
            </Card >
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>

                <Container style={{ borderBottomColor: '#ddd', borderBottomWidth: 2, marginHorizontal: 10 }}>
                    <ScrollView>

                        <CardImage />
                        <CardImage />
                        <CardImage />
                        <CardImage />
                        <CardImage />
                        <CardImage />
                    </ScrollView>
                </Container>

            </View>
        )
    }
}



