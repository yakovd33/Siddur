import { StyleSheet, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import React from 'react'

const windowWidth = Dimensions.get('window').width;

const PrayerButton = ({ item, type, navigation }) => {
	const handlePress = () => {
		navigation.push('Shacharit', { type });
	}
	return (
		<TouchableOpacity style={styles.button} onPress={ handlePress }>
			<Image style={ styles.icon } source={ item.icon }/>
			<Text style={ styles.text } numberOfLines={1} adjustsFontSizeToFit={true}>{item.name}</Text>
		</TouchableOpacity>
	)
}

export default PrayerButton;

const styles = StyleSheet.create({
	button: {
		padding: 20,
		marginLeft: 15,
		backgroundColor: '#fff',
		borderWidth: 1,
		borderColor: '#ebebeb',
		borderRadius: 5,
		width: (windowWidth / 3) - 20,
		justifyContent: 'center',
		alignItems: 'center',
		shadowColor: "#888",
		shadowOffset: {
			width: 0,
			height: 5,
		},
		shadowOpacity: 0.56,
		shadowRadius: 6.68,

		elevation: 11,
	}, text: {
		alignSelf: 'center',
		fontSize: 13,
		fontWeight: 'bold',
		color: '#121212'
	}, icon: {
		height: 50,
		width: 50,
		alignSelf: 'center',
		marginBottom: 10,
	}
})