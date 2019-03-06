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
import ContactBlock  from '../components/ContactBlock'
import { ButtonsGroup, AttributeRow, Button, Anchor } from '../components/'

class ProfileBlock extends React.Component {

  _handlePressContact = () => {
    Linking.openURL(this.props.href);
    //this.props.onPress && this.props.onPress();
  };

  render() {

    const { profile, style, navigation } = this.props;


    return (
        <View styleName={"vertical"}>

          <ImageBackground
              // styleName="large"
              source={{ uri: profile.logo, flex:1 }}>

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

            {/*
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
            */}
          </ImageBackground>

          <View styleName={"content-section"}>
            <LinearGradient
                start={{ x: 0, y: 1 }}
                end={{ x: 1, y: 0 }}
                colors={[Colors.profileGradientStart, Colors.profileGradientEnd]}
                style={{flexDirection: 'row'}}
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

            <ScrollView style={{marginTop:20}}>

              <AttributeRow styleName="vertical" header={null}>
                <Text styleName="multiline">
                  {profile.company.description}
                </Text>
              </AttributeRow>

              <AttributeRow styleName="vertical" header={"Contact"}>
                <ContactBlock

                    phone={`+1 432 33 22 123`}
                    mail={`email@domain.com`}
                />
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
                onPress: () => navigation.navigate('Chat', {

                })
              },
              {
                label: "Schedule",
                active:  false,
                icon:  "md-calendar", //
                onPress: () => navigation.navigate('Chat', {

                })
              },
              {
                label: "Events",
                active: false,
                size: 26,
                icon: "md-globe",
                onPress: () => navigation.goBack()
              }

            ]} />

          </View>

        </View>
    )
  }
}

const styles = {

};

// connect the component to the theme
export default connectStyle('mbm.common.ProfileBlock', styles)(ProfileBlock);

