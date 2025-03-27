import {NativeModules} from 'react-native';

const {DropdownModule} = NativeModules;

const showDropdown = (title, options, multiSelect = false) => {
  return new Promise(resolve => {
    DropdownModule.showDropdown(title, options, multiSelect, selectedItems => {
      resolve(multiSelect ? selectedItems : selectedItems[0]);
    });
  });
};

export default {showDropdown};
