import React from 'react';
import { ScrollView, Easing, Platform } from 'react-native';
import { connectStyle } from '@shoutem/theme';
import { ImageBackground } from '@shoutem/ui/components/ImageBackground'
import { Image } from '@shoutem/ui/components/Image'
import { View } from '@shoutem/ui/components/View'
import { Text, Heading, Subtitle, Title, Caption } from '@shoutem/ui/components/Text'
import { Icon, LinearGradient, Linking } from 'expo';
import { Fonts, Colors, Layout } from '../constants';
import { renderImageOverlay } from '../components/utils/gradients'
import ProfileHeader  from '../components/ProfileHeader'
import QuickInfo  from '../components/QuickInfo'
import { ButtonsGroup, AttributeRow, GoBackBtn, Button, Anchor } from '../components/'

class ProfileScreen extends React.Component {

  _handlePressContact = () => {
    Linking.openURL(this.props.href);
    this.props.onPress && this.props.onPress();
  };

  render() {

    const { profile, style } = this.props;

    return (
        <View styleName={"vertical"}>

          {/* TODO Close btn here */}
          <GoBackBtn {...this.props} />

          <ImageBackground
              styleName="large-banner"
              source={{ uri: profile.logo }}>

              {renderImageOverlay({ from: Colors.gradientFrom, to: Colors.gradientTo, opacity: 0.8})}

              <ProfileHeader>
                <View styleName={'vertical content'}>
                  <Title>{profile.first_name} {profile.last_name}</Title>
                  <View>
                    <Subtitle numberOfLines={2}>{profile.title}</Subtitle>
                    <Caption>{profile.company.name}</Caption>
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

              <View styleName={"horizontal"}>
                <Button
                    secondary
                    bgColor="white"
                    textColor={Colors.primary}
                    rounded
                    //loading
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
                colors={[Colors.profileGradientStart, Colors.profileGradientEnd]}
                style={styles.quickFacts}
            >
              <QuickInfo>
                <Subtitle>21</Subtitle>
                <Text>Opportunities</Text>
              </QuickInfo>

              <QuickInfo>
                <Subtitle>72</Subtitle>
                <Text>Contracts</Text>
              </QuickInfo>

              <QuickInfo>
                <Subtitle>11</Subtitle>
                <Text>Events</Text>
              </QuickInfo>
            </LinearGradient>

            <ScrollView>

              <AttributeRow styleName="vertical" header={null}>
                <Text styleName="multiline">
                  {profile.company.description}
                </Text>
              </AttributeRow>

              <AttributeRow styleName="vertical" header={"Contact"}>
                <View styleName="horizontal h-start">
                  <Icon.Ionicons
                      size={17}
                      name={"md-mail"}
                      style={{paddingRight: 6, marginTop:-1}}
                  />
                  <Caption><Anchor href={"mailto:email@domain.com"}>email@domain.com</Anchor></Caption>
                </View>
                <View styleName="horizontal h-start">
                  <Icon.Ionicons
                      size={17}
                      name={"md-call"}
                      style={{paddingRight: 6, marginTop:-1}}
                  />
                  <Caption><Anchor href={"tel:+1 432 33 22 123"}>+1 432 33 22 123</Anchor></Caption>
                </View>
              </AttributeRow>

              <AttributeRow styleName="vertical" header={"Address"}>
                <Caption>{profile.address}</Caption>
                <Caption>{profile.city}, {profile.state}, {profile.country}</Caption>
              </AttributeRow>

            </ScrollView>

            <ButtonsGroup styleName={"stacked bottom"} bottom={true} buttons={[
              {
                label: "Let's Connect!",
                active: false,
                icon: Platform.OS === 'ios' ? 'md-chatbubbles' : 'md-chatbubbles',
                onPress: () => this.props.navigation.navigate('DetailModal', {

                })
              },
              {
                label: "Schedule",
                active:  false,
                icon:  "md-calendar", ////
                onPress: () => this.props.navigation.navigate('DetailModal', {

                })
              },
              {
                label: "Events",
                active: false,
                size: 26,
                icon: "md-globe",
                onPress: () => this.props.navigation.goBack()
              }

            ]} />

          </View>
        </View>
    )
  }
}

const styles = {
  section: {
    flex: 5,
    position: 'relative',
    // backgroundColor:'red'
  },
  quickFacts: {
    // height: 60,
    flexDirection: 'row',
  },
  hr: {
    borderBottomColor: '#e3e3e3',
    borderBottomWidth: 1,
    marginLeft: 20,
  }
};

// connect the component to the themeaamm
export default connectStyle('mbm.ProfileScreen', styles)(ProfileScreen);

