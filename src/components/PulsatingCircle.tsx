import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface PulsatingCircleProps {
  children: JSX.Element;
  duration: number;
  color: string;
  size: number;
}

const PulsatingCircle: React.FC<PulsatingCircleProps> = ({ children, duration, color, size }) => (
  <>
    <View style={styles.portal}>
      {children}
    </View>

    <Animatable.View
      duration={duration}
      animation="zoomIn"
      iterationCount="infinite"
      style={styles.circleContainer}
    >
      <Animatable.View
        duration={duration}
        animation="fadeOut"
        iterationCount="infinite"
        style={styles.circleContainer}
      >
        <View style={{
          backgroundColor: color,
          borderRadius: size,
          height: size,
          width: size,
        }} />
      </Animatable.View>
    </Animatable.View>
  </>
);

const styles = StyleSheet.create({
  portal: {
    position: 'absolute',
    elevation: 1,
    zIndex: 2,
  },
  
  circleContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
});

export default PulsatingCircle;