import { StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;

const PrayerButton = ({ item, navigation }) => {
	const handlePress = () => {
		navigation.push('Shacharit');
	}
	return (
		<TouchableOpacity style={styles.button} onPress={ handlePress }>
			<Image style={ styles.icon } source={ item.icon }/>
			<Text style={ styles.text }>{item.name}</Text>
		</TouchableOpacity>
	)
}

export default PrayerButton;

const styles = StyleSheet.create({
	button: {
		padding: 20,
		marginLeft: 15,
		backgroundColor: '#fff',
		borderRadius: 5,
		width: (windowWidth / 3) - 20,
		justifyContent: 'center',
		alignItems: 'center'
	}, text: {
		alignSelf: 'center',
		fontSize: 13,
		fontWeight: 'bold'
	}, icon: {
		height: 50,
		width: 50,
		alignSelf: 'center',
		marginBottom: 10,
	}
})