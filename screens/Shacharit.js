import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React, { useState, useEffect, useRef } from 'react';
import PrayerHeader from '../components/PrayerHeader';
import shacharit from '../prayers/shacharit';
import texts from '../texts';
import HTMLView from 'react-native-htmlview';
import { SpecialScrollView, SpecialView } from 'react-native-scroll-to-element';

const Shacharit = ({ route, navigation }) => {
	const { type } = route.params;
	const [ loaded, setLoaded ] = useState(false);
	const [ loadedHeader, setLoadedHeader ] = useState(false);

	const birkotHashaharRef = useRef();
	const adonOlamRef = useRef();

	useEffect(() => {
		setLoaded(true);
		birkotHashaharRef.current.focus();
	}, []);

	const renderNode = (node, index, siblings, parent, defaultRenderer) => {
		let specialSyle = null;
		// specialSyle = node.attribs.style;

		if (node?.attribs?.class) {
			let className = node.attribs.class;

			if (className == 'sNotice') {
				specialSyle = styles.notice;
				console.log(node.children);
			}
		}

		if (node.name == 'p') {
			specialSyle = styles.text;
		}

		return (
			<Text key={index} style={specialSyle}>
			  {defaultRenderer(node.children, parent)}
			</Text>
		)
	}

	return (
		<View>
			<PrayerHeader name={texts['hebrew'].shacharit} setLoadedHeader={setLoadedHeader} refs={ [
				{ name: 'ברכות השחר', ref: birkotHashaharRef },
				{ name: 'ברכות השחר', ref: birkotHashaharRef },
				{ name: 'ברכות השחר', ref: birkotHashaharRef },
				{ name: 'ברכות השחר', ref: birkotHashaharRef },
				{ name: 'ברכות השחר', ref: birkotHashaharRef },
			] }/>

			<SpecialScrollView style={ styles.prayer }>
				<SpecialView ref={ birkotHashaharRef }>
					<Text style={ styles.title}>{ texts['hebrew'].birkotHashahar}</Text>
				</SpecialView>

				<Text style={ styles.text }>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].modeAniBold}</Text>
					<Text>{ shacharit[type].modeAni}</Text>
				</Text>

				<Text style={ styles.text }>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].asherYazarBold}</Text>
					<Text>{ shacharit[type].asherYazar}</Text>
				</Text>

				<Text style={ styles.text }>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].eloayNeshamaBold}</Text>
					<Text>{ shacharit[type].eloayNeshama}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].sehvi}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].sehviBold}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].pokeah}</Text>
				</Text>

				<SpecialView>
					<Text style={ [ styles.text, styles.textLow ] }>
						<Text>{ shacharit[type].baruhAtaFull}</Text>
						<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].matir}</Text>
					</Text>
				</SpecialView>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].zokef}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].noten}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].roka}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].mahin}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].asa}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].ozer}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].oter}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].goy}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].aved}</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow ] }>
					<Text>{ shacharit[type].baruhAtaFull}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].isha}</Text>
				</Text>

				<Text style={ styles.text }>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].hevleShena}</Text>
				</Text>

				<Text style={ styles.text }>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].yeiRazonBold}</Text>
					<Text>{ shacharit[type].yeiRazon}</Text>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].gomelBold}</Text>
				</Text>

				<Text style={ styles.text }>
					<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].yeiRazonMilefanehaBold}</Text>
					<Text>{ shacharit[type].yeiRazonMilefaneha}</Text>
				</Text>

				<Text style={ styles.title}>{ texts['hebrew'].birkatHatora}</Text>

				<Text style={ styles.text }>
					<Text style={ [ styles.text, styles.textLow ] }>
						<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].baruhAtaShort}</Text>
						<Text>{ shacharit[type].notenHatora}</Text>
						<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].notenHatoraBold}</Text>
					</Text>
				</Text>

				<Text style={ [ styles.text, styles.textLow, styles.prayerTitle ] }>
					<Text style={ [ styles.text, styles.textLow ] }>
						<Text style={{ fontFamily: 'hadasim-bold' }}>{ shacharit[type].vayedaberBold}</Text>
					</Text>
				</Text>

				<Text style={ styles.text }>
					<Text>{ shacharit[type].vayedaber}</Text>
				</Text>

				<Text style={ styles.title}>{ texts['hebrew'].eliayuSeder}</Text>
				
				{ loaded && loadedHeader && <View style={ styles.allPrayer }>
					<SpecialView ref={ adonOlamRef }>
						<HTMLView
							value={ shacharit.mizrah.part1 }
							stylesheet={ styles }
							// renderNode={renderNode}
						/>
					</SpecialView>

					<HTMLView
						value={ shacharit.mizrah.part2 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part3 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part4 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part5 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part6 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part7 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part8 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part9 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part10 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part11 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part12 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part13 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part14 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part15 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part16 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part17 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part18 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part19 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part20 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part21 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part22 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part23 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part24 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part25 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part26 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part27 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part28 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>

					<HTMLView
						value={ shacharit.mizrah.part29 }
						stylesheet={ styles }
						// renderNode={renderNode}
					/>
				</View> }
			</SpecialScrollView>
		</View>
	)
}

export default Shacharit

const styles = StyleSheet.create({
	title: {
		marginTop: 10,
		fontWeight: 'bold',
		color: '#0085cf',
		marginBottom: 15
	}, h4: {
		marginTop: 10,
		fontWeight: 'bold',
		color: '#0085cf',
		marginBottom: 15
	}, text: {
		fontFamily: 'hadasim-regular',
		fontSize: 21,
		color: '#053676',
		lineHeight: 28,
		marginBottom: 15
	}, textLow: {
		marginBottom: 4
	}, prayer: {
		padding: 10,
		marginBottom: 60
	}, prayerTitle: {
		marginBottom: 0,
		fontSize: 23
	}, sNotice: {
		color: 'red'
	}, mainPrayer: {
		fontFamily: 'hadasim-regular',
	}, strong: {
		fontFamily: 'hadasim-bold',
	}, span : {
		fontSize: 13,
		color: '#555',
		textAlign: 'center'
	}, p: {
		fontFamily: 'hadasim-regular',
		fontSize: 21,
		color: '#053676',
		lineHeight: 28,
	}, allPrayer: {
		marginTop: -20
	}
});