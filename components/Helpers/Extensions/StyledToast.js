import React  from 'react';

import { Ionicons } from '@expo/vector-icons';
import { Text, Title, Caption, Subtitle, Heading } from '@shoutem/ui/components/Text'
import { View } from '@shoutem/ui/components/View'
import { Row } from '@shoutem/ui/components/Row'
import { Image } from '@shoutem/ui/components/Image'

import {connectStyle} from "@shoutem/theme/index";
import {Colors, Fonts} from "../../../constants";

const styles = {

};

// connect the component to the themes
export default connectStyle('mbm.toast.StyledToast', styles)(
    ({ style, styleName, textColor, icon, title, body, children }) => {
      return (
          <Row>
            {icon &&
              <Ionicons
                  size={22}
                  name={icon}
                  style={[
                    style.icon,
                    {
                      top:4,
                      justifyContent: 'flex-start',
                      alignSelf: 'flex-start'
                    },
                    textColor && {
                      color: textColor,
                    },
                  ]}
              />
            }

            <View styleName="vertical" style={{marginLeft:10}}>
              <View styleName="horizontal space-between">
                <Heading>{title}</Heading>
                {/*<Caption>20 minutes ago</Caption>*/}
              </View>
              {body &&  <Text styleName="multiline">{body}</Text>}
            </View>
          </Row>
      );
    }
);
