import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: '#aaa',
        padding: 20
    },
    card: {
        backgroundColor: '#fff',
        elevation: 5,
        margin: 5,
        flexDirection: 'row'
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        alignSelf: 'flex-end',
        alignItems: 'center',
        flex: 1
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
})

class MainScreen extends Component {
    render() {
        return (
            <View style={styles.root}>

                <View style={styles.row}>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.title}>
                                Bars and hotel
                            </Text>
                            <Text>
                                42 Place
                            </Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.title}>
                                Bars and hotel
                            </Text>
                            <Text>
                                42 Place
                            </Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.title}>
                                Bars and hotel
                            </Text>
                            <Text>
                                42 Place
                            </Text>
                        </View>
                    </View>
                </View>

                <View style={styles.row}>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.title}>
                                Bars and hotel
                            </Text>
                            <Text>
                                42 Place
                            </Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.title}>
                                Bars and hotel
                            </Text>
                            <Text>
                                42 Place
                            </Text>
                        </View>
                    </View>
                    <View style={styles.card}>
                        <View style={styles.text}>
                            <Text style={styles.title}>
                                Bars and hotel
                            </Text>
                            <Text>
                                42 Place
                            </Text>
                        </View>
                    </View>
                </View>

            </View>

        )
    }
}

export default MainScreen