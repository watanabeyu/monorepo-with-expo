import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "compare-like-tailwind",
  slug: "compare-like-tailwind",
  owner: "sample-company",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  scheme: "myapp",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  ios: {
    supportsTablet: true,
    bundleIdentifier: "jp.ewaf.sample.shareextension",
    buildNumber: "1",
    config: {
      usesNonExemptEncryption: false,
    },
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png",
  },
  plugins: ["expo-router"],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "8806b0e3-d52a-4bc0-a645-dc4c83120c29",
    },
  },
  updates: {
    url: "https://u.expo.dev/dee57810-2a4e-48ee-b628-1e4412c6cbac",
  },
  runtimeVersion: {
    policy: "appVersion",
  },
});
