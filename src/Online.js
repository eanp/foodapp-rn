import React, { Component } from 'react'
import {
    Text, View, StyleSheet, StatusBar, ScrollView,
    TouchableOpacity, TextInput
} from 'react-native'
import MyIcon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({

})

class Bottomnav extends Component {
    render() {
        return (
            <View style={{
                backgroundColor: 'white', flex: 1, alignItems: 'center',
                justifyContent: 'center'
            }} >
                <MyIcon name='store' style={{ fontSize: 26 }} />
                <Text style={{ fontSize: 11, color: '#545454', marginTop: 2 }}>Home</Text>
            </View>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, backgroundColor: 'white' }}>
                    <View style={{ marginTop: 40, marginHorizontal: 10 }}>
                        <View>
                        </View>
                        <View style={{ position: 'relative', flex: 1 }}>
                            <MyIcon name='room-service' style={{
                                fontSize: 22, position: 'absolute',
                                top: 10, left: 1
                            }} />
                            <TextInput value='Makan apa hari ini?'
                                style={{
                                    borderWidth: 1, borderColor: '#E8E8E8', borderRadius: 25,
                                    height: 40, paddingLeft: 10, paddingRight: 30, marginLeft: 30
                                }}
                            />
                            <MyIcon name='search' style={{
                                fontSize: 22, position: 'absolute',
                                top: 10, right: 10
                            }} />
                        </View>
                    </View>
                </View>

                <View style={{
                    height: 54, backgroundColor: 'white', flexDirection: 'row',
                    margin: 3
                }}>
                    <Bottomnav />
                    <Bottomnav />
                    <View style={{
                        backgroundColor: 'white', flex: 1, alignItems: 'center',
                        justifyContent: 'center'
                    }} >
                        <MyIcon name='local-grocery-store'
                            style={{ fontSize: 26, color: '#43AB4A' }} />
                        <Text style={{
                            fontSize: 11, color: '#545454',
                            marginTop: 2, color: '#43AB4A'
                        }}>Cart</Text>
                    </View>
                    <Bottomnav />
                    <Bottomnav />
                </View>

            </View>
        )
    }
}
