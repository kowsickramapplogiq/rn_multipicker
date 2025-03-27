import React from 'react';
import {Text, View} from 'react-native';
import MultiSelectDropdown from './src/components/dropdown';
const App = () => {
  const handleSelect = values => {
    console.log('Selected:', values);
  };
  return (
    <View>
      <Text>hello</Text>
      <MultiSelectDropdown
        title="Pick items"
        options={['Apple', 'Banana', 'Cherry', 'Date', 'Grapes']}
        multiSelect={true}
        onSelect={handleSelect}
      />
    </View>
  );
};

export default App;
