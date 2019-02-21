import React from 'react';
import { LinearGradient } from 'expo';

const DEFAULT_OPACITY = 0.6;

export const renderImageOverlay = ({ from, to, opacity }) => (
    <LinearGradient
        start={{ x: 0, y: 1 }}
        end={{ x: 1, y: 0 }}
        colors={[from, to]}
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
