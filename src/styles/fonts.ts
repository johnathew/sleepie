import localFont from "next/font/local";

const moreSugar = localFont({
  src: [
    {
      path: "./MoreSugar-Extras.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MoreSugar-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./MoreSugar-Thin.otf",
      weight: "400",
      style: "thin",
    },
  ],
});

export { moreSugar };
