import {StyleSheet} from "react-native";
import { Constants } from 'expo'
import deafults from '../styles'

export default StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#000"
  },
  container: {
    flex: 1,
    backgroundColor: "#000"
  },
  header: {
    flex: 0.6,
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    padding:0,
  },
  headerText: {
      ...deafults.default,
    fontSize:16,
    fontWeight: "bold",
    fontFamily: "Rubik-Regular"
  },
  paginationDots: {
    color: "#000000"
  }
})