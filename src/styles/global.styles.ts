import {StyleSheet} from 'react-native';

const root = {
  rounded: 5,
  primaryColor: '#401880',
  secondaryColor: '#7144b0',
  placeholderColor: '#ffffffcc',
  rippleOverlay: '#0000001a', // 10% opacity black more info: https://gist.github.com/lopspower/03fb1cc0ac9f32ef38f4
  color: 'black',
  backgroundColor: '#fff',
  inputBackgroundColor: '#242424',
  padding: 10,
  margin: 20,
  fontSize: 15,
  touchablesHeight: 45,
};

const styles = StyleSheet.create({
  container: {
    padding: root.padding,
    backgroundColor: root.backgroundColor,
    flex: 1,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    color: root.color,
    textAlign: 'center',
    fontSize: 30,
  },
  input: {
    backgroundColor: root.inputBackgroundColor,
    borderRadius: root.rounded,
    color: 'white',
    paddingHorizontal: root.padding,
    marginTop: root.margin,
    fontSize: root.fontSize,
    height: root.touchablesHeight,
  },
  button: {
    padding: root.padding,
    color: root.color,
    backgroundColor: root.primaryColor,
    borderRadius: root.rounded,
    marginVertical: root.margin,
    height: root.touchablesHeight,
    justifyContent: 'center',
  },
  buttonText: {
    color: root.color,
    fontSize: root.fontSize,
    textAlign: 'center',
  },
  newsCard: {
    flex: 1,
    flexDirection: 'row',
    padding: root.padding,
    marginBottom: root.padding,
    borderRadius: root.rounded,
    borderWidth: 1,
  },
  newsImage: {
    width: 125,
    height: 125,
    marginRight: root.margin,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: root.rounded,
  },
  newsContentHolder: {
    flex: 1,
  },
  newsHeading: {
    fontWeight: 'bold',
  },
});

export default styles;
export {root};
