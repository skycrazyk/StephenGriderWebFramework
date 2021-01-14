import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

function routeBundler(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: PropertyDescriptor) {
      Reflect.defineMetadata(MetadataKeys.path, path, target, key);
      Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    };
  };
}

export const get = routeBundler(Methods.get);
export const post = routeBundler(Methods.post);
export const patch = routeBundler(Methods.patch);
export const del = routeBundler(Methods.del);
export const put = routeBundler(Methods.put);
