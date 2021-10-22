import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import RadioButton from './RadioButton';
import { fetchZipCodes } from './utils';

export default function App() {
	const [zipInput, setZipInput] = useState('');
	const [radioIndex, setRadioIndex] = useState(0);
	const [display, setDisplay] = useState('');

	const options = [
		{ key: 'insert', text: 'add zip code to database', isSelected: false },
		{ key: 'delete', text: 'delete zip code from database', isSelected: false },
		{ key: 'has', text: 'is zip code in database', isSelected: false },
		{ key: 'display', text: 'get all zip codes', isSelected: false },
	];
	const [radioGroup, setRadioGroup] = useState(options);

	const onSubmit = async () => {
		//Alert.alert(radioGroup[radioIndex].key, zipInput);
		const res = await fetchZipCodes(radioGroup[radioIndex].key, zipInput);
		setZipInput('');
		setDisplay(res);
	};

	const handleRadioClick = (i) => {
		setRadioGroup((prev) => {
			return prev.map((item, idx) => {
				if (idx === i) return { ...item, isSelected: true };
				else return { ...item, isSelected: false };
			});
		});
		setRadioIndex(i);
	};

	return (
		<View style={styles.container}>
			<Text style={{ fontSize: 25 }}>Enter a zip code:</Text>
			<TextInput
				style={{
					height: 40,
					width: 150,
					borderColor: 'gray',
					borderWidth: 1,
					borderRadius: 3,
					margin: 3,
					textAlign: 'center',
				}}
				defaultValue={zipInput}
				placeholder="enter zip code here"
				returnKeyType="done"
				onSubmitEditing={onSubmit}
				onChangeText={(text) => setZipInput(text)}
			/>
			<View>
				<Text style={{ textAlign: 'center', fontSize: 25 }}>
					Choose an action:
				</Text>
				{radioGroup.map((option, i) => (
					<RadioButton
						key={i}
						onSelect={handleRadioClick}
						radioButtonDetails={option}
						index={i}
					></RadioButton>
				))}
			</View>

			<Button color="salmon" title="submit" onPress={onSubmit}>
				Submit!
			</Button>
			<StatusBar style="auto" />
			<Text>{display}</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
