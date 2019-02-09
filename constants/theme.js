import getTheme, { defaultThemeVariables } from "@shoutem/ui/theme";
import { merge } from 'lodash';

const defaultTheme = getTheme();

export default () => {
  return merge(defaultTheme, {
    'mbm.dashboard.ActionButtons': {
      backgroundColor: 'red',
    },
    'shoutem.ui.Card': {
      backgroundColor: 'red',
    },
  });
}