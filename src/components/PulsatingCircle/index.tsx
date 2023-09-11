import React from 'react';
import { StyleSheet, View } from 'react-native';
import * as Animatable from 'react-native-animatable';

interface PulsatingCircleProps {
  children: JSX.Element;
  duration: number;
  color: string;
  size: number;
}

const PulsatingCircle: React.FC<PulsatingCircleProps> = ({
  children,
  duration,
  color,
  size,
}) => {
  return (
    <>
      <View style={styles.portal}>
        {children}
      </View>

      <Animatable.View
        animation="bounceIn"
        iterationCount="infinite"
        duration={duration}
        style={styles.circleContainer}>
        <Animatable.View
          animation="fadeOut"
          iterationCount="infinite"
          duration={duration}
          style={styles.circleContainer}>
          <View style={{
            width: size,
            height: size,
            borderRadius: size,
            backgroundColor: color,
          }} />
        </Animatable.View>
      </Animatable.View>
    </>
  );
}

const styles = StyleSheet.create({
  portal: {
    zIndex: 2,
    elevation: 1,
    position: 'absolute',
  },
  
  circleContainer: {
    zIndex: 1,
    
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PulsatingCircle;