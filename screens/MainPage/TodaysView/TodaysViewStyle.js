import { StyleSheet } from "react-native";
import VehoColors from "./../../VehoColors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: VehoColors.background,
  },
  containerScrollWrapper:{
    alignItems: 'center',
  },
  containerScroll: {


  },
  headerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  mainViewHeader: {
    fontSize: 30,
    color: "white",
  },
  pieContainer: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  dataContainer: {
    flex: 2,
    alignSelf: "stretch",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    margin: 20,
    marginTop: 20,
    marginBottom: 50,
    backgroundColor: "#13265f",
    borderRadius: 25,
  },
  dataBox: {
    marginBottom: 10,
    alignSelf: "stretch",
    padding: 5,
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row-reverse",
  },
  dataText: {
    alignItems: "flex-start",
    color: "white",
    fontSize: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  photoContainer: {
    width: "100%",
    height: 60,
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 12
  },
  barContainer: {
    paddingTop: 8,
  },  
});
