import React, { Component } from 'react';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import MyIcon from 'react-native-vector-icons/MaterialIcons'
import MeIcon from 'react-native-vector-icons/Entypo'

import Alogin from './Alogin'
import Aitem from './Aitem'
import Adash from './Adash'
import Adashsearch from './Adashsearch'
import Arest from './Arest'
import Arestdetail from './Arestdetail'
import Acart from './Acart'
import Ahist from './Ahist'
import Auser from './Auser'
import Auseredit from './Auseredit'
import App from './Contoh'



const AuthNav = createStackNavigator({
    Login: {
        screen: Alogin,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Login',
})

const AdashNav = createStackNavigator({
    Home: {
        screen: Adash,
        navigationOptions: {
            headerShown: false,
        },
    },
    Item: {
        screen: Aitem,
        navigationOptions: {
            headerShown: false,
        },
    },
    Search: {
        screen: Adashsearch,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Home',
})

AdashNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const ArestNav = createStackNavigator({
    Menu: {
        screen: Arest,
        navigationOptions: {
            headerShown: false,
        },
    },
    RestoDetail: {
        screen: Arestdetail,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'Menu',
})

ArestNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const AcartNav = createStackNavigator({
    Cart: {
        screen: Acart,
        navigationOptions: {
            headerShown: false,
        },
    }
}, {
    initialRouteName: 'Cart',
})
AcartNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}


const AhistNav = createStackNavigator({
    History: {
        screen: Ahist,
        navigationOptions: {
            headerShown: false,
        },
    },
}, {
    initialRouteName: 'History',
})
AhistNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}

const AuserNav = createStackNavigator({
    User: {
        screen: Auser,
        navigationOptions: {
            headerShown: false,
        },
    },
    Useredit: {
        screen: Auseredit,
    },
}, {
    initialRouteName: 'User',
})
AuserNav.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    if (navigation.state.index > 0) {
        tabBarVisible = false;
    }

    return {
        tabBarVisible,
    }
}
const BottomNav = createBottomTabNavigator({
    Home: {
        screen: AdashNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MeIcon name='windows-store' size={25} color={tintColor} />;
            },
        },
    },
    Menu: {
        screen: ArestNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MyIcon name='store-mall-directory' size={25} color={tintColor} />;
            },
        },
    },
    Cart: {
        screen: AcartNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MyIcon name='local-mall' size={25} color={tintColor} />;
            },
        },
    },
    History: {
        screen: AhistNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MyIcon name="event-note" size={25} color={tintColor} />;
            },
        },
    },
    User: {
        screen: AuserNav,
        navigationOptions: {
            tabBarIcon: ({ tintColor }) => {
                return <MyIcon name="person" size={25} color={tintColor} />;
            },
        },
    },
}, {
    initialRouteName: 'Home',
    tabBarOptions: {
        activeTintColor: '#43AB4A',
        inactiveTintColor: '#545454',
        style: {
            backgroundColor: 'white',
            borderTopColor: 'transparent',
        }
    }
})

const SwitchNav = createSwitchNavigator({
    AuthNav,
    BottomNav,
}, {
    initialRouteName: 'BottomNav',
})

const AppContainer = createAppContainer(SwitchNav)

// create a component
class Router extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}

export default Router;