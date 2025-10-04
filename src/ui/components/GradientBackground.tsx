import { LinearGradient, LinearGradientProps } from "expo-linear-gradient";
import React, { FC } from "react";
import { ColorValue } from "react-native";
import { colors } from "../theme";

interface Props extends Omit<LinearGradientProps, "colors"> {
  colors?: [ColorValue, ColorValue, ...ColorValue[]];
}

export const GradientBackground: FC<Props> = ({ children, ...props }) => {
  return (
    <LinearGradient
      {...props}
      colors={props.colors || [colors.blue_100, colors.green_100]}
      start={props.start || { x: 0, y: 0 }}
      end={props.end || { x: 1, y: 1 }}
      style={[{ flex: 1 }, props.style]}
    >
      {children}
    </LinearGradient>
  );
};
