import { ExpoConfig, ConfigContext } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "expo-with-expo-router",
  slug: "expo-with-expo-router",
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
    package: "jp.ewaf.sample.shareextension",
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
  plugins: [
    "expo-router",
    [
      "expo-build-properties",
      {
        ios: {
          deploymentTarget: "15.0",
        },
      },
    ],
    [
      "share-extension-expo-plugin",
      {
        devTeam: "7CQNGSCHR5",
        extensionPath: "assets/ios/shareExtension",
        mainStoryboardName: "ShareView",
        activationRule: ["text", "image", "url"],
      },
    ],
  ],
  experiments: {
    typedRoutes: true,
  },
  extra: {
    eas: {
      projectId: "ed67d152-dbfa-44cb-95cb-3417ae683509",
    },
  },
});
