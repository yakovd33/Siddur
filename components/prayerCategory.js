import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Button } from 'react-native'
import React from 'react';
import PrayerButton from './prayerButton';

const PrayerCategory = ({ title, prayers, navigation }) => {
	return (
		<View>
			<Text style={ styles.title }>{ title }</Text>
			<FlatList
				data={ prayers }
				horizontal
				showsHorizontalScrollIndicator={ false }
				initialScrollIndex={ prayers.length - 1 }
				renderItem={ ({ item }) => <PrayerButton item={ item } navigation={ navigation }/> }
				keyExtractor={item => item.name}
			/>
		</View>
	)
}

export default PrayerCategory

const styles = StyleSheet.create({
	container: {
	  marginTop: 20,
	},
	title: {
	  fontSize: 18,
	  fontWeight: 'bold',
	  marginBottom: 10
	},
});  