import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PrayerCategory from '../components/prayerCategory';

const Home = ({ navigation }) => {

	return (
		<SafeAreaView style={styles.container}>
			<PrayerCategory title="תפילות היום" navigation={ navigation } type="mizrah" prayers={[
				{ name: 'שחרית', icon: require('../assets/images/icons/morning.png') },
				{ name: 'מנחה', icon: require('../assets/images/icons/noon.png') }, 
				{ name: 'ערבית', icon: require('../assets/images/icons/evening.png') },
			]} />

			<PrayerCategory title="ברכות" navigation={ navigation } type="mizrah" prayers={[
				{ name: 'ברכות השחר', icon: require('../assets/images/icons/evening.png') },
				{ name: 'אשר יצר', icon: require('../assets/images/icons/noon.png') }, 
				{ name: 'תפילת הדרך', icon: require('../assets/images/icons/noon.png') }, 
				{ name: 'קידוש הלבנה', icon: require('../assets/images/icons/noon.png') }, 
				{ name: 'קריאת שמע', icon: require('../assets/images/icons/evening.png') },
				{ name: 'שבע ברכות', icon: require('../assets/images/icons/noon.png') }, 
			]} />

			<PrayerCategory title="ברכות על מזון" navigation={ navigation } type="mizrah" prayers={[
				{ name: 'ברכת המזון', icon: require('../assets/images/icons/evening.png') },
				{ name: 'מעין שלוש', icon: require('../assets/images/icons/morning.png') },
				{ name: 'על המחייה', icon: require('../assets/images/icons/noon.png') }, 
				{ name: 'בורא נפשות', icon: require('../assets/images/icons/noon.png') }, 
			]} />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 15,
	}
})

export default Home;
