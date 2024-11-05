import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme(
    {
        colors: {
            transparent: "transparent",
            white: {
                light: "#eeeeee",
                main: "#e4e4e4",
                dark: "#afafaf",
                brand: "#e4e4e4",
                bg: "#d9d9d9",
                1: "#eeeeee",
                2: "#e4e4e4",
                3: "#d9d9d9",
                4: "#cfcfcf",
                5: "#c4c4c4",
                6: "#bababa",
                7: "#afafaf",
                8: "#a4a4a4",
                9: "#999999",
            },
            black: {
                light: "#404040",
                main: "#1f1f1f",
                dark: "#0e0e0e",
                brand: "#404040",
                bg: "#181818",
                1: "#404040",
                2: "#333333",
                3: "#252525",
                4: "#1f1f1f",
                5: "#181818",
                6: "#151515",
                7: "#111111",
                8: "#0e0e0e",
                9: "#0c0c0c",
            },
        },
    }
);

export default theme;
