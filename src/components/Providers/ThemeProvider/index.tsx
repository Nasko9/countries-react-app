import React, { useEffect, useState, createContext } from "react";

// const noop = () => null; //kažem da će tu da bude funkcija

// //! NE VALJA LOGIKA, NE TREBA TI CONTEXT NEGO SAMO CUSTOM HOOK KOJI ĆE DA U LOCAL STORAGE DA MENJA DA LI JE DARK ILI LIGHT

// //jsx function kako se prosleđuju funkcije istraži
// export const ThemeContext = createContext<any | undefined>({
//   theme: "light",
//   setTheme: noop,
// });

// // const getInitialTheme = () => {
// //   if (typeof window !== "undefined" && window.localStorage) {
// //     const storedPrefs = window.localStorage.getItem("current-theme");
// //     if (typeof storedPrefs === "string") {
// //       return storedPrefs;
// //     }
// //     if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
// //       return "dark";
// //     }
// //   }
// //   return "light";
// // };

// // add initialTHeme and children later
// export const ThemeContextProvider = ({
//   initialTheme,
//   children,
// }: {
//   initialTheme: string;
//   children: React.ReactNode;
// }) => {
//   const [theme, setTheme] = useState(initialTheme);

//   const checkTheme = (existing: string) => {
//     const root = window.document.documentElement;
//     const isDark = existing === "dark";

//     root.classList.remove(isDark ? "light" : "dark");
//     root.classList.add(existing);

//     localStorage.setItem("current-theme", existing);
//   };

//   if (initialTheme) {
//     checkTheme(initialTheme);
//   }

//   useEffect(() => {
//     checkTheme(initialTheme);
//   }, [theme]);

//   return (
//     <ThemeContext.Provider value={{ theme, setTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };
