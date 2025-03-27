import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Dropdown from '../../module/Dropdown';

const MultiSelectDropdown = ({
  title = 'Select Options',
  options = [],
  multiSelect = false,
  onSelect,
}) => {
  const [selected, setSelected] = useState([]);

  const handlePress = async () => {
    const result = await Dropdown.showDropdown(title, options, multiSelect);
    setSelected(result);
    if (onSelect) {
      onSelect(result);
    }
  };

  return (
    <TouchableOpacity style={styles.dropdown} onPress={handlePress}>
      <Text style={styles.text}>
        {selected.length ? selected.join(', ') : title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  dropdown: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});

export default MultiSelectDropdown;
