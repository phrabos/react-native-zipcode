import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
	Button,
	StyleSheet,
	Text,
	TextInput,
	View,
	Alert,
	TouchableOpacity,
} from 'react-native';

export default function App() {
	const [zipInput, setZipInput] = useState('');
	const [insert, setInsert] = useState({ selected: false, key: 'insert' });
	const [deleteZip, setDeleteZip] = useState({
		selected: false,
		key: 'delete',
	});
	const [has, setHas] = useState({ selected: false, key: 'has' });
	const [display, setdispaly] = useState({ selected: false, key: 'display' });

	const options = [
		{ key: 'insert', text: 'add zip code to database', selected: false },
		{ key: 'delete', text: 'delete zip code from database', selected: false },
		{ key: 'has', text: 'is zip code in database', selected: false },
		{ key: 'display', text: 'get all zip codes', selected: false },
	];
	const [radioGroup, setRadioGroup] = useState(options);

	const onSubmit = () => {
		Alert.alert(zipInput);
		setZipInput('');
	};

	const onRadioClick = (i) => {
		setRadioGroup((prev) => {
			return prev.map((item, idx) => {
				if (idx === i) return { ...item, selected: true };
				else return { ...item, selected: false };
			});
		});
		console.log(radioGroup[i].key);
	};
	console.log(radioGroup);
	return (
		<View style={styles.container}>
			<Text>Zip Code</Text>
			<TextInput
				style={{
					height: 40,
					borderColor: 'gray',
					borderWidth: 1,
				}}
				defaultValue={zipInput}
				placeholder="enter zip code here"
				returnKeyType="done"
				onSubmitEditing={onSubmit}
				onChangeText={(text) => setZipInput(text)}
			/>
			{radioGroup.map((option, i) => (
				<TouchableOpacity key={i} onPress={() => onRadioClick(i)}>
					<Text>{option.text}</Text>
				</TouchableOpacity>
			))}
			<Button title="submit" onPress={onSubmit}>
				Submit
			</Button>
			<StatusBar style="auto" />
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
