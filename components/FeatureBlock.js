import React, {Component} from "react";
import { TouchableOpacity} from '@shoutem/ui/components/TouchableOpacity'
import { View } from '@shoutem/ui/components/View'
import { Text } from '@shoutem/ui/components/Text'
import SliderEntry from '../components/SliderEntry';
import styles from "../constants/styles/SliderEntry";

export default class FeaturedBlock extends Component {
  render() {
    let even = 0;
    return (

        <TouchableOpacity
            activeOpacity={1}
            style={styles.slideInnerContainer}
            onPress={() => { alert(`You've clicked '${title}'`); }}
        >
          <View style={styles.shadow} />
          <View style={[styles.imageContainer, even ? styles.imageContainerEven : {}]}>
            { this.image }
            <View style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]} />
          </View>
          <View style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
            adadasd
            <Text
                style={[styles.subtitle, even ? styles.subtitleEven : {}]}
                numberOfLines={2}
            >asds
            </Text>
          </View>
        </TouchableOpacity>
    );
  }

}