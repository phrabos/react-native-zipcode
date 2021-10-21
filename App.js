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
	const options = [
		{ key: 'insert', text: 'add zip code to database' },
		{ key: 'delete', text: 'delete zip code from database' },
		{ key: 'has', text: 'is zip code in database' },
		{ key: 'display', text: 'get all zip codes' },
	];

	const onSubmit = () => {
		Alert.alert(zipInput);
		setZipInput('');
	};
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
			{options.map((option, i) => (
				<TouchableOpacity onPress={onSubmit}>
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
