// Chessboard inspired from Ariana Grande's 'sweetener'
import React, { Component } from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
export default class FlexDirectionBasics extends Component {
  constructor() {
    super();

    /**
     * Returns true if the screen is in portrait mode
     */
    const isPortrait = () => {
      const dim = Dimensions.get('screen');
      return dim.height >= dim.width;
    };

    this.state = {
      orientation: isPortrait() ? 'portrait' : 'landscape',
    };

    // Event Listener for orientation changes
    Dimensions.addEventListener('change', () => {
      this.setState({
        orientation: isPortrait() ? 'portrait' : 'landscape',
      });
    });
  }

  render() {
    var board = [],
      board2 = [],
      flag = 0;
    for (var i = 1; i < 9; i++) {
      for (var j = 1; j < 9; j++) {
        if (this.state.orientation === 'portrait') {
          {
            flag % 2 == 0
              ? board.push(<View style={styles.materialNegative} />)
              : board.push(<View style={styles.materialPositive} />);
          }
        } else {
          {
            flag % 2 == 0
              ? board2.push(<View style={styles.materialNegative1} />)
              : board2.push(<View style={styles.materialPositive1} />);
          }
        }
        flag++;
      }
      flag++;
    }
    if (this.state.orientation === 'portrait') {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.container}>{board}</View>
        </View>
      );
    } else {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <View style={styles.container}>{board2}</View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },

  materialNegative: {
    flexBasis: '12.5%',
    backgroundColor: '#d8b186',
  },
  materialPositive: {
    width: 45,
    height: 45,
    flexBasis: '12.5%',
    backgroundColor: '#d8b186',
  },
  materialNegative1: {
    width: 34,
    height: 35,
    flexBasis: '12.5%',
    backgroundColor: '#f7ebdb',
  },
  materialPositive1: {
    width: 35,
    height: 35,
    flexBasis: '12.5%',
    backgroundColor: '#d8b186',
  },
});
