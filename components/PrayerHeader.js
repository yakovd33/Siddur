import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler';

const PrayerHeader = ({ name, refs, setLoadedHeader }) => {
  useEffect(() => {
    setLoadedHeader(true);
  }, []);
  
  return (
    <View>
      <View style={ styles.header }>
        <Text style={ styles.text }>{ name }</Text>
      </View>

      <ScrollView style={ styles.navigation } horizontal={ true } showsHorizontalScrollIndicator={ false }>
        { refs.map((item) => (
          <TouchableOpacity style={ styles.navigationBtn } onPress={ () => item?.ref?.current?.focus() }><Text style={{ color: '#121212', fontWeight: 'bold' }}>{ item.name }</Text></TouchableOpacity>
        )) }
      </ScrollView>
    </View>
  )
}

export default PrayerHeader;

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#008dc5',
    padding: 15,
  }, text: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#fff'
  }, navigation: {
    backgroundColor: '#ebebeb',
    padding: 5,
    direction: 'rtl'
  }, navigationBtn: {
    marginLeft: 5,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    color: '#000',
    borderRadius: 4
  }
})