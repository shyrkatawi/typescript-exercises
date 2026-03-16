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

type Separator = ".";


type PathValue<T, P extends string> =
  P extends `${infer Left}${Separator}${infer Right}`
    ? (Left extends keyof T ? PathValue<T[Left], Right> : never)
    : (P extends keyof T ? T[P] : never)

type PathKey<T extends Record<string, any>> = {
  [K in keyof T]: T[K] extends Record<string, any> ? K | `${K}.${PathKey<T[K]>}` : K
}[keyof T]


export const getDeepValueFromObject = <T extends Record<string, any>, Path extends PathKey<T>
>(
  obj: T,
  path: Path,
): PathValue<T, Path> | undefined => {
  if (typeof path !== 'string' || obj === null || typeof obj !== 'object') {
    return undefined;
  }

  const keys = path.split('.');
  let result: any = obj;

  for (const key of keys) {
    if (result === null || typeof result !== 'object' || !(key in result)) {
      return undefined;
    }

    result = result[key];
  }

  return result;
};

type Q = PathValue<typeof EXAMPLE_CONFIG, 'rawConfig'>;


getDeepValueFromObject(EXAMPLE_CONFIG, 'rawConfig.featureFlags.homePage');
