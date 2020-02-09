import React, { Component } from 'react'
import { Text, View, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from 'react-native'
import { withNavigation } from 'react-navigation'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    container: {
        paddingLeft: 20,
        paddingRight: 20
    },
    padX: {
        paddingTop: 20,
        paddingBottom: 20
    },
    marX: {
        marginTop: 20,
        marginBottom: 20
    },
    center: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    heading: {
        backgroundColor: '#3f51b5'
    },
    imagePlaceholder: {
        borderWidth: 3,
        borderColor: '#aaa',
        backgroundColor: '#888',
        borderRadius: 40,
        width: 80,
        height: 80
    },
    headerContent: {
        flexDirection: 'row'
    },
    headerName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    headerRole: {
        color: '#fff'
    },
    headerNav: {
        marginTop: 20,
        marginBottom: 50,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    headerNavItem: {
        alignItems: 'center'
    },
    headerNavItemText: {
        color: '#fff'
    },
    row: {
        flexDirection: 'row'
    },
    overflap: {
        marginTop: -50
    },
    card: {
        flex: 1,
        marginLeft: 15,
        marginRight: 15,
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        elevation: 5
    },
    menuTitle: {
        fontSize: 15,
    },
    menuSubTitle: {
        fontSize: 14,
        color: '#aaa'
    },
    menuAmt: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'maroon'
    },
    menuList: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    menuListIcon: {
        backgroundColor: '#fff',
        borderRadius: 20,
        height: 40,
        width: 40,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center'
        // paddingTop:20,
    },
    menuListTitle: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 20
    }
})

class Header extends Component {
    render() {
        return (
            <View style={styles.heading}>
                <View style={[styles.container, styles.padX]}>
                    <View style={styles.headerContent}>
                        <View>
                            <View style={styles.imagePlaceholder} />
                        </View>
                        <View style={styles.root}>
                            <View style={[styles.container, styles.center]}>
                                <Text style={styles.headerName}>{this.props.name}</Text>
                                <Text style={styles.headerRole}>{this.props.phone}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.headerNav}>
                        {this.props.navData && this.props.navData.map((v, i) => {
                            const { icon, title } = v
                            return (
                                <View style={styles.headerNavItem} key={i.toString()}>
                                    <Icon name={icon} size={35} color='#fff' />
                                    <Text style={styles.headerNavItemText}>{title}</Text>
                                </View>
                            )
                        })}
                    </View>
                </View>
            </View>
        )
    }
}

class Menu extends Component {
    render() {
        return (
            <>
                <View style={styles.root}>
                    <View style={[styles.row, this.props.style]}>
                        <View style={styles.card}>
                            <Icon name='wallet' size={45} color={this.props.color} />
                            <Text style={styles.menuTitle}>Pending Payment</Text>
                            <Text style={styles.menuAmt}>0</Text>
                        </View>
                        <View style={styles.card}>
                            <Icon name='inbox' size={45} color={this.props.color} />
                            <Text style={styles.menuTitle}>To be Delivered</Text>
                            <Text style={styles.menuAmt}>2</Text>
                        </View>
                    </View>
                    <View style={[styles.row, styles.marX]}>
                        <View style={styles.card}>
                            <Icon name='truck-delivery' size={45} color={this.props.color} />
                            <Text style={styles.menuTitle}>Pending Receipt</Text>
                            <Text style={styles.menuAmt}>0</Text>
                        </View>
                        <View style={styles.card}>
                            <Icon name='package-variant' size={45} color={this.props.color} />
                            <Text style={styles.menuTitle}>After Sale</Text>
                            <Text style={styles.menuSubTitle}>Return/Service</Text>
                        </View>
                    </View>
                </View>
            </>
        )
    }
}

class MenuListOrig extends Component {
    render() {
        return (
            <>
                <View style={[styles.root]}>
                    <ScrollView>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('MainScreen')}>
                            <View style={styles.menuList}>
                                <View style={styles.menuListIcon}>
                                    <Icon name='card' size={30} color='maroon' />
                                </View>
                                <View style={styles.menuListTitle}>
                                    <Text>Bank Card</Text>
                                </View>
                                <View style={styles.chevron}>
                                    <Icon name='chevron-right' size={30} />
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={styles.menuList}>
                            <View style={styles.menuListIcon}>
                                <Icon name='coin' size={30} color='maroon' />
                            </View>
                            <View style={styles.menuListTitle}>
                                <Text>Prepaid Card</Text>
                            </View>
                            <View style={styles.chevron}>
                                <Icon name='chevron-right' size={30} />
                            </View>
                        </View>
                        <View style={styles.menuList}>
                            <View style={styles.menuListIcon}>
                                <Icon name='gift-outline' size={30} color='maroon' />
                            </View>
                            <View style={styles.menuListTitle}>
                                <Text>Invite Friends</Text>
                            </View>
                            <View style={styles.chevron}>
                                <Icon name='chevron-right' size={30} />
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </>
        )
    }
}

const MenuList = withNavigation(MenuListOrig)

const navList = [
    {
        icon: 'file-outline',
        title: 'Bill'
    },
    {
        icon: 'trophy',
        title: 'Task',
    },
    {
        icon: 'cash',
        title: 'Asset'
    },
    {
        icon: 'database',
        title: 'Integral'
    }, {
        icon: 'tag',
        title: 'Card'
    }
]

export default class Contoh extends Component {
    render() {
        return (
            <>
                <StatusBar backgroundColor='#3f51b5' barStyle='light-content' />
                <View style={[styles.root, { backgroundColor: '#eee' }]}>
                    <Header name='Raisa Andriana' phone='+62 8193 9500 800'
                        navData={navList} />
                    <ScrollView style={styles.overflap}>
                        <Menu color='#3f51b5' />
                        <MenuList />
                    </ScrollView>
                </View>
            </>
        )
    }
}
