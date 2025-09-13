import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    bgColors: {
      primaryBgColor: string;
      secondaryBgColor: string;
      accentBgColor: string;
      activeAccentBgColor: string;
      activeBgColor: string;
      ratingBgGolor: string;
    };
    colors: {
      primaryColor: string;
      secondaryColor: string;
      accentColor: string;
      errorColor: string;
      fieldFormColor: string;
    };
  }
}
