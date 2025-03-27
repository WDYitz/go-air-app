import { Text, StyleSheet, Pressable, type StyleProp, type TextStyle } from "react-native"

interface ButtonProps {
  title: string
  onPress: () => void
  style?: StyleProp<TextStyle>
}

export const Button = (props: ButtonProps) => {
  return (
    <Pressable onPress={props.onPress} style={[styles.button, props.style]}>
      <Text style={styles.buttonText}>{props.title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 8,
    width: 120,
  },
  buttonText: {
    textAlign: "center",
    color: "#FFF",
    fontWeight: "condensedBold"
  }
})