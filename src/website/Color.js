import { ThemeContext } from "../context/Theme";
import { useContext } from "react";
export const Color = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  if (theme) {
    document.documentElement.style.setProperty("--scrollbar", "#8B8B8B");
    document.documentElement.style.setProperty("--scrollbarThumb", "#5D5D5D");
    document.documentElement.style.setProperty("--fontColor", "#ffffff");
    document.documentElement.style.setProperty("--navigationBar", "#5D5D5D");
    document.documentElement.style.setProperty(
      "--backgroundContent",
      "#464646"
    );
    document.documentElement.style.setProperty(
      "--circularProgressbarBackground",
      "#9a9a9a"
    );
    document.documentElement.style.setProperty("--menuColor", "#747474");
    document.documentElement.style.setProperty("--menuColorHover", "#9a9a9a");
    document.documentElement.style.setProperty(
      "--actionButtonColorHover",
      "#115f6f"
    );
  } else {
    document.documentElement.style.setProperty("--scrollbar", "#B9B9B9");
    document.documentElement.style.setProperty("--scrollbarThumb", "#747474");
    document.documentElement.style.setProperty("--fontColor", "#000000");
    document.documentElement.style.setProperty("--navigationBar", "#ffffff");
    document.documentElement.style.setProperty(
      "--backgroundContent",
      "#E8F5FF"
    );
    document.documentElement.style.setProperty(
      "--circularProgressbarBackground",
      "#ffffff"
    );
    document.documentElement.style.setProperty("--buttonColor", "#747474");
    document.documentElement.style.setProperty("--menuColor", "#A4E6FC");
    document.documentElement.style.setProperty("--menuColorHover", "#93D7EF");
    document.documentElement.style.setProperty(
      "--actionButtonColorHover",
      "#0f8aa4"
    );
  }
};
