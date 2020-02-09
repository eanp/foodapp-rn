import React, { Component } from 'react'
import { View, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base'
import MyIcon from 'react-native-vector-icons/MaterialIcons'

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    cardbox: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'row',
    },
    carditem: {
        flex: 1,
        backgroundColor: '#fff',
        height: 100,
    },
    cardright: {
        flex: 1,
        backgroundColor: 'salmon',
        height: 100,
    },
    isfooter: {
        height: 60,
        backgroundColor: 'salmon',
        borderTopLeftRadius: 90
    },
    fontfooter: {
        borderRadius: 40,
        backgroundColor: 'salmon',
        padding: -30,
        marginTop: -50,
        borderWidth: 3,
        borderColor: 'skyblue',

    }
})

class Isfoot extends Component {
    render() {
        return (
            <Footer style={{ backgroundColor: 'aqua' }}>
                <FooterTab style={styles.isfooter}>
                    <Button vertical>
                        <MyIcon name="room-service" style={{ fontSize: 30, color: 'skyblue' }} />
                    </Button>
                    <Button vertical>
                        <MyIcon name="store" style={{ fontSize: 30, color: 'skyblue' }} />
                    </Button>
                    <Button badge vertical style={styles.fontfooter}>
                        <Badge ><Text>51</Text></Badge>
                        <MyIcon name="local-grocery-store" style={{ fontSize: 30, color: 'skyblue', marginTop: -10 }} />
                    </Button>
                    <Button vertical>
                        <MyIcon active name="assignment" style={{ fontSize: 30, color: 'skyblue' }} />
                    </Button>
                    <Button vertical>
                        <MyIcon name="person" style={{ fontSize: 30, color: 'skyblue' }} />
                    </Button>
                </FooterTab>
            </Footer>
        )
    }
}

class Navtab extends Component {
    render() {
        return (
            <View></View>
        )
    }
}


class App extends Component {
    render() {
        return (
            <>
                <View style={styles.cardbox}>
                    <View style={styles.carditem}>
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View style={styles.carditem}>
                        </View>
                        <View style={styles.cardright}>
                        </View>
                        <View style={styles.cardright}>
                        </View>
                    </View>
                </View >
                <Isfoot />
            </>
        )
    }
}

export default App