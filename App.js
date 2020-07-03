import React, { Component }                                                  from 'react';
import Footer                                                                from './components/Footer';
import { createDrawerNavigator, createStackNavigator }                       from 'react-navigation';
import { StyleSheet, SafeAreaView, Platform, View, Text, ActivityIndicator } from 'react-native';
import HomeScreen                                                            from './screens/HomeScreen';
import Campany                                                               from './screens/PageScreen/Campany';
import CustomDrawerContentComponent                                          from './components/Menu';
import Sweep                                                                 from "./screens/PageScreen/Sweep";
import Travel                                                                from "./screens/PageScreen/Travel";
import Companies
                                                                             from "./screens/PageScreen/Campany/campany";
import CompaniesCategory                                                     from "./screens/PageScreen/Companies";

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            load: false
        }
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({load: true})
        }, 7500)
    }

    render() {
        if ( this.state.load ) {
            return (
                <>
                    <SafeAreaView style={[styles.page, styles.droidSafeArea]}>
                        <AppDrawerNavigator />
                        <Footer/>
                    </SafeAreaView>
                </>
            );
        } else {
            return (
                <View style={{flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor: '#dedfe1'}}>
                    <ActivityIndicator/>
                    <Text style={{color: '#303030', fontSize: 15, fontWeight: 'bold'}}>Yükleniyor...</Text>
                </View>
            );
        }
    }
}

export const NavigateDraw = {
    Home: {
        screen: HomeScreen,
        navigationOptions: {
            title: 'Anasayfa',
                drawerLabel: 'Anasayfa'
        }
    },
    Campany: {
        screen: Campany,
        navigationOptions: {
            title: 'Kampanyalar',
                drawerLabel: 'Kampanyalar'
        }
    },
    Sweep: {
        screen: Sweep,
        navigationOptions: {
            title: 'Çekiliş Delisi',
                drawerLabel: 'Çekiliş Delisi'
        }
    },
    Travel: {
        screen: Travel,
        navigationOptions: {
            title: 'Etkinlik ve Duyurular',
                drawerLabel: 'Etkinlik ve Duyurular'
        }
    },
    Companies: {
        screen: CompaniesCategory,
        navigationOptions: {
            title: 'Firmalar',
            drawerLabel: 'Firmalar'
        }
    }
}

export const SettingNavigator = {
    contentComponent: CustomDrawerContentComponent
}

export const AppStackNavigator = createStackNavigator(NavigateDraw);

export const AppDrawerNavigator = createDrawerNavigator({
    AppStackNavigator
}, SettingNavigator);

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: '#dedfe1',
        resizeMode: 'repeat',
        position: 'relative'
    },
    droidSafeArea: {
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor: Platform.OS === 'android' ? '#fff' : '#383f42'
    },
    page: {
        flex: 1,
        backgroundColor: '#dedfe1',
        justifyContent: 'flex-start',
        position: 'relative',
        flexDirection: 'column'
    },
    nav: {
        height: 20,
        backgroundColor: '#383f42',
        opacity: 1
    }
});

export default Index;
