import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Colors from '../constants/Colors';

class ColorSelector extends React.Component {

  _renderOptions() {
    const allColors = Object.keys(Colors);

    return allColors.map(color => (
      <TouchableOpacity
        key={color}
        style={[styles.option, { backgroundColor: Colors[color] }]}
        onPress={() => this.props.onPress(Colors[color])}
      />
    ));
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderOptions()}
      </View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingVertical: 5,
    paddingHorizontal: 10
  },

  option: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginVertical: 5,
    marginHorizontal: 10
  }
});

export default ColorSelector;
