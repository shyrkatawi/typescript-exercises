import {Equal, Expect} from "../helpers/type-utils";

const EXAMPLE_CONFIG = {
  apiEndpoint: "https://api.example.com",
  apiVersion: "v1",
  apiKey: "1234567890",
  rawConfig: {
    featureFlags: {
      homePage: {
        showBanner: true,
        showLogOut: false,
      },
      loginPage: {
        showCaptcha: true,
        showConfirmPassword: false,
      },
    },
  },
};

export const getHomePageFeatureFlags = <T extends typeof EXAMPLE_CONFIG>(
  config: T,
  override: (flags: T['rawConfig']['featureFlags']['homePage']) => T['rawConfig']['featureFlags']['homePage']
) => {
  return override(config.rawConfig.featureFlags.homePage);
};


const flags1 = getHomePageFeatureFlags(
  EXAMPLE_CONFIG,
  (defaultFlags) => defaultFlags
);
type tests1 = [
  Expect<Equal<typeof flags1, { showBanner: boolean; showLogOut: boolean }>>
];

const flags2 = getHomePageFeatureFlags(EXAMPLE_CONFIG, (defaultFlags) => ({
  ...defaultFlags,
  showBanner: false,
}));
type tests2 = [
  Expect<Equal<typeof flags2, { showBanner: boolean; showLogOut: boolean }>>
];
