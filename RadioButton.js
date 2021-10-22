import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const RadioButton = ({ onSelect, radioButtonDetails, index }) => (
	<>
		<View style={styles.wrapper}>
			<TouchableOpacity onPress={() => onSelect(index)}>
				{radioButtonDetails.isSelected ? (
					<View style={styles.selectedRadioButton}></View>
				) : (
					<View style={styles.radioButton}></View>
				)}
			</TouchableOpacity>
			<Text style={{ padding: 3 }}>{radioButtonDetails.text}</Text>
		</View>
	</>
);

const styles = StyleSheet.create({
	radioButton: {
		height: 40,
		width: 40,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'salmon',
		alignItems: 'center',
		justifyContent: 'center',
	},
	selectedRadioButton: {
		width: 40,
		height: 40,
		borderRadius: 20,
		borderWidth: 1,
		borderColor: 'black',
		backgroundColor: 'salmon',
	},
	wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		margin: 5,
	},
});

export default RadioButton;
