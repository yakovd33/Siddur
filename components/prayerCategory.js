import { StyleSheet, Text, View, FlatList, SafeAreaView, ScrollView, Button } from 'react-native'
import React from 'react';
import PrayerButton from './prayerButton';

const PrayerCategory = ({ title, prayers, type, navigation }) => {
	return (
		<View>
			<Text style={ styles.title }>{ title }</Text>
			<FlatList
				data={ prayers }
				horizontal
				showsHorizontalScrollIndicator={ false }
				renderItem={ ({ item }) => <PrayerButton item={ item } navigation={ navigation } type={ type }/> }
				keyExtractor={item => item.name}
				contentContainerStyle={{ paddingVertical: 20, paddingHorizontal: 0 }}
				style={{ marginRight: 5, marginLeft: -10, marginTop: -5 }}
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
	  marginTop: 10,
	  color: '#121212'
	},
});  