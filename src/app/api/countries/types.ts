export interface ImageSet {
  lightThemeImage: string;
  darkThemeImage: string;
  whiteImage: string;
}

export interface StreamingOptionTypes {
  addon: boolean;
  buy: boolean;
  rent: boolean;
  free: boolean;
  subscription: boolean;
}

export interface Addon {
  id: string;
  name: string;
  homePage: string;
  themeColorCode: string;
  imageSet: ImageSet;
}

export interface Service {
  id: string;
  name: string;
  homePage: string;
  themeColorCode: string;
  imageSet: ImageSet;
  streamingOptionTypes: StreamingOptionTypes;
  addons: Addon[];
}

export interface Country {
  countryCode: string;
  name: string;
  services: Service[];
}

export interface CountriesResponse {
  [countryCode: string]: Country;
}