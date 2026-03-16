import {Equal, Expect} from "../helpers/type-utils";

const frontendToBackendEnumMap = {
  singleModule: "SINGLE_MODULE",
  multiModule: "MULTI_MODULE",
  sharedModule: "SHARED_MODULE",
} as const;

type FrontendToBackend = typeof frontendToBackendEnumMap

type GetValues<T extends Record<string, any>> = T extends Record<string, infer V> ? V : never
type BackendModuleEnum1 = GetValues<FrontendToBackend>

type BackendModuleEnum2 = FrontendToBackend[keyof FrontendToBackend]

type tests = [
  Expect<Equal<BackendModuleEnum1, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">>,
  Expect<Equal<BackendModuleEnum2, "SINGLE_MODULE" | "MULTI_MODULE" | "SHARED_MODULE">>,
];
