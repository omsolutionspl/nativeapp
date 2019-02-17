import React from 'react';
import { ScrollView, Easing } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import { LinearGradient } from 'expo';
import { Button } from '../components';
import { Fonts, Colors, Layout } from '../constants';
import { renderImageOverlay } from '../components/utils/gradients'
import ProfileHeader  from '../components/ProfileHeader'
import ButtonsGroup  from '../components/ButtonsGroup'

class ProfileScreen extends React.Component {

  render() {

    const { profile, style } = this.props;

    return (
        <View styleName={"vertical"}>

          <ImageBackground
              styleName="large-banner"
              source={{ uri: profile.logo }}>

              {renderImageOverlay({ from: Colors.gradientFrom, to: Colors.gradientTo, opacity: 0.8})}

              {/* TODO Close btn here */}

              <ProfileHeader>
                <View styleName={'vertical content'}>
                  <Title style={style.title}>{profile.first_name} {profile.last_name}</Title>
                  <View>
                    <Subtitle style={style.position}>{profile.title}</Subtitle>
                    <Caption style={style.company}>{profile.company.name}</Caption>
                  </View>
                </View>
                <View styleName={'vertical avatar'}>
                  <Image
                      styleName="medium-avatar"
                      source={{ uri: profile.avatar }}
                      style={style.avatar}
                  />
                </View>
              </ProfileHeader>

              <View style={{ flexDirection: 'row' }}>
                <Button
                    secondary
                    bgColor="white"
                    textColor={Colors.primary}
                    rounded
                    small
                    caption="Contact"
                    onPress={() => { }}
                />

                <Button
                    rounded
                    bordered
                    small
                    style={{ marginLeft: 20 }}
                    caption="Favourite"
                    onPress={() => {}}
                />
              </View>
          </ImageBackground>

          <View style={styles.section}>
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.profileGradientStart, Colors.profileGradientStart]}
                style={styles.quickFacts}
            >
              <View style={styles.quickInfoItem}>
                <Text style={styles.quickInfoText}>112</Text>
                <Text style={styles.quickInfoText}>Projects</Text>
              </View>

              <View style={styles.quickInfoItem}>
                <Text style={styles.quickInfoText}>1.3k</Text>
                <Text style={styles.quickInfoText}>Followers</Text>
              </View>

              <View style={styles.quickInfoItem}>
                <Text style={styles.quickInfoText}>816</Text>
                <Text style={styles.quickInfoText}>Following</Text>
              </View>

              <View style={styles.quickInfoItem}>
                <Text style={styles.quickInfoText}>816</Text>
                <Text style={styles.quickInfoText}>Following</Text>
              </View>
            </LinearGradient>

            <View style={{ flex: 1 }}>
              <View style={styles.infoRow}>
                {/*<Icon style={styles.infoIcon} name="map-marker" size={20} color="#c3c3c3" />*/}
                <Text>Paris, France</Text>
              </View>
              <View style={styles.hr} />

              <View style={styles.infoRow}>
                {/*<Icon style={styles.infoIcon} name="instagram" size={20} color="#c3c3c3" />*/}
                <Text>rns</Text>
              </View>
              <View style={styles.hr} />

              <View style={styles.infoRow}>
                {/*<Icon style={styles.infoIcon} name="youtube" size={20} color="#c3c3c3" />*/}
                <Text>React Native Starter</Text>
              </View>
            </View>

            <View style={styles.bottomRow}>

              <ButtonsGroup styleName={"stacked"} buttons={[
                {
                  label: "Opportunities",
                  active:  false,
                  icon:  "md-analytics", //(Platform.OS === 'ios ? "ios-md-scan" : "md-scan"),
                  onPress: () => alert(1)
                },
                {
                  label: "Forecasts",
                  active: false,
                  icon: "md-people",
                  onPress: () => alert(2)
                },
                {
                  label: "Matches",
                  active: false,
                  icon: "md-globe",
                  onPress: () => alert(3)
                }

              ]} />
            </View>

          </View>
        </View>
    )
  }
}

const styles = {
  section: {
    flex: 5,
    position: 'relative',
  },
  title: {
    color: Colors.white,
    fontFamily: Fonts.primaryBold,
    fontSize: 25,
    letterSpacing: 0.04,
    marginBottom: 10,
    padding:0,
  },
  lightText: {
    color: Colors.white,
  },
  quickFacts: {
    height: 60,
    flexDirection: 'row',
  },
  quickFact: {
    flex: 1,
  },
  infoSection: {
    flex: 1,
  },
  infoRow: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  hr: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    marginLeft: 20,
  },
  infoIcon: {
    marginRight: 20,
  },
  bottomRow: {
    height: 80,
  },
  position: {
    color: Colors.white,
    fontFamily: Fonts.primaryLight,
    fontSize: 16,
    marginBottom: 3,
  },
  company: {
    color: Colors.white,
    fontFamily: Fonts.primaryRegular,
    fontSize: 16,
  },
  quickInfoItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  quickInfoText: {
    color: Colors.white,
    fontFamily: Fonts.primaryRegular,
  },
  bottomImage: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
};

// connect the component to the theme
export default connectStyle('mbm.ProfileScreen', styles)(ProfileScreen);

