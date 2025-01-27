import React from 'react';
import { Platform, StatusBar } from 'react-native';
import { TabNavigator } from 'react-navigation';

import CalendarScreen from './components/CalendarScreen';
import ChatScreen from './components/ChatScreen';
import SettingsScreen from './components/SettingsScreen';

console.disableYellowBox = false; // This suppresses the expo debug messages

const App = TabNavigator({
    Chat: {screen: ChatScreen},
    Calendar: {screen: CalendarScreen},
    Settings: {screen: SettingsScreen},

    }, {

    headerMode: 'none',
    tabBarOptions: {
        style: {
            paddingTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight // If not on iOS, create padding to prevent clipping
        }
    }},
);



export default App;