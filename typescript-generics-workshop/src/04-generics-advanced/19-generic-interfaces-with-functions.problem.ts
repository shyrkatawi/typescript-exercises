import {Equal, Expect} from "../helpers/type-utils";

export interface Cache<T> {
  get: (key: string) => T | undefined;
  set: (key: string, value: T) => void;
  clone: <R>(transform: (elem: T) => R) => Cache<R>;
}

const createCache = <T>(initialCache?: Record<string, T>): Cache<T> => {
  const cache: Record<string, T> = initialCache || {};

  return {
    get: (key) => cache[key],
    set: (key, value) => {
      cache[key] = value;
    },
    clone: (transform) => {
      const newCache: Record<string, any> = {};

      for (const key in cache) {
        newCache[key] = transform(cache[key]);
      }
      return createCache(newCache);
    },
  };
};


const cache = createCache<number>();

cache.set("a", 1);
cache.set("b", 2);

const numberCache = createCache<number>();

numberCache.set("a", 1);
numberCache.set("b", 2);

const stringCache = numberCache.clone((elem) => {
  return String(elem);
});

const a = stringCache.get("a");

type tests = [Expect<Equal<typeof a, string | undefined>>];
