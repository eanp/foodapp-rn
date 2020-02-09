import React, { Component } from 'react'
import {
    StyleSheet, View, Text
} from 'react-native'
import { Avatar } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Container, Header, Content, List, ListItem } from 'native-base';


const styles = StyleSheet.create({
    root: {
        flex: 1,
        backgroundColor: 'salmon',
        padding: 20
    },
    header: {
        flex: 1,
        backgroundColor: 'skyblue',
        padding: 10,
        margin: -40
    },
    card: {
        flex: 1,
        backgroundColor: '#fff',
        elevation: 5,
        margin: 5,
        flexDirection: 'row',
        padding: 40,
        borderRadius: 25
    },
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    text: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    },
    banner: {
        justifyContent: 'center',
        paddingLeft: 20,
        paddingRight: 20
    },
    bannertext: {
        justifyContent: 'center',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#fff'
    }
})
class Banner extends Component {
    render() {
        return (
            <Grid >
                <Col style={styles.banner}>
                    <Avatar size="large"
                        rounded source={{
                            uri:
                                'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                        }}
                    />
                </Col>
                <Col style={styles.banner}>
                    <Text style={styles.bannertext}>Ean Praha</Text>
                    <Text style={styles.bannertext}>0888 140445</Text>
                </Col>
            </Grid>

        )
    }
}

class ListExample extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem>
                            <Text>Simon Mignolet</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Nathaniel Clyne</Text>
                        </ListItem>
                        <ListItem>
                            <Text>Dejan Lovren</Text>
                        </ListItem>
                    </List>
                </Content>
            </Container>
        );
    }
}

class Card extends Component {
    render() {
        return (
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
        )
    }
}

class Box extends Component {
    render() {
        return (
            <View style={styles.root}>
                <Grid style={styles.header}>
                    <Banner />
                </Grid>

                <Grid>
                    <Col>
                        <Grid>
                            <Card />
                            <Card />
                        </Grid>
                        <Grid>
                            <Card />
                            <Card />
                        </Grid>
                    </Col>
                </Grid>
                <Grid>
                    <ListExample />
                </Grid>

            </View>
        )
    }
}


class Kolom extends Component {
    render() {
        return (
            <View>

            </View>
        )
    }
}

class Dashboard extends Component {
    render() {
        return (
            <Box />
        )
    }
}


export default Dashboard