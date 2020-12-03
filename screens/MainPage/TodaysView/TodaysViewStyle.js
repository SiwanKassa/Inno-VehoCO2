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
  headerContainer: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    width: '80%',
    color: VehoColors.white,
    textAlign: 'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginVertical: 24,
  },
  pieContainer: {
    flex: 4,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginTop: -24,
  },
  dataContainer: {
    flex: 1,
    width: '90%',
    textAlign: "left",
    backgroundColor: VehoColors.input,
    borderRadius: 25,
    marginVertical: 12,
    paddingVertical: 12
  },
  dataBox: {
    marginBottom: 10,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "flex-start",
    flexDirection: "row-reverse",
  },
  dataText: {
    alignItems: "flex-start",
    color: "white",
    fontSize: 20,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  photoContainer: {
    width: '80%',
    height: 60,
    marginTop: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  dotContainer: {
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginHorizontal: 12
  },
  barContainer: {
    width: '100%',
  },
  containerScrollWrapper:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerScroll:{
    width: '100%',
  },
  disclaimerContainer: {
    alignSelf: 'flex-end',
    paddingEnd: '15%'
  },
  co2Disclaimer: {
    color: VehoColors.white,
    fontWeight: 'bold',
    fontSize: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});
