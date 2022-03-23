import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PrayerCategory from '../components/prayerCategory';
import texts from '../texts';

const Home = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.container}>
			<PrayerCategory title={texts['hebrew'].dailyPrayers} navigation={ navigation } prayers={[
				{ name: texts['hebrew'].arvit, icon: require('../assets/images/icons/evening.png') },
				{ name: texts['hebrew'].minha, icon: require('../assets/images/icons/noon.png') }, 
				{ name: texts['hebrew'].shacharit, icon: require('../assets/images/icons/morning.png') },
				{ name: 'asdasdasd', icon: require('../assets/images/icons/morning.png') },
				{ name: 'asdasasdd', icon: require('../assets/images/icons/morning.png') },
			]} />
		</SafeAreaView>
	)
}

export default Home

const styles = StyleSheet.create({
	container: {
		padding: 15,
		// flex: 1,
		// flexGrow: 1
	}
})