import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';

const DEFAULT_OPACITY = 0.6;

export const renderImageOverlay = ({ from, to, opacity }) => (
    <LinearGradient
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0, y: 0.1 }}
        // locations={[0, 1, 10]}
        colors={[to, from]}
        // colors={['#4f1920', '#8c3d42']}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: opacity || DEFAULT_OPACITY,
        }}
    />
);
