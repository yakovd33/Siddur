import React, { useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import { Home, Shacharit } from './screens';

const App = () => {
	const Stack = createStackNavigator();

	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 500);
	}, [])
	  
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Home" screenOptions={({ route, navigation }) => ({ headerShown: false, gestureEnabled: true })}>
				<Stack.Screen name="Home" component={ Home } />
				<Stack.Screen name="Shacharit" component={ Shacharit } />
			</Stack.Navigator>
		</NavigationContainer>
	)
}

const styles = StyleSheet.create({
	text: {
		color: 'red'
	}
});

export default App