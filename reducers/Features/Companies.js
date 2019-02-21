import {createSelector} from "reselect/lib/index";
import { find } from 'lodash';

export const findProfileAttribute = function(attributes, name) {
  return find(attributes, attr => attr.key === name)
}

