import 'reflect-metadata';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';
import { RequestHandler } from 'express';

interface RoutePropertyDescriptor extends PropertyDescriptor {
  value?: RequestHandler;
}

function routeBundler(method: string) {
  return function get(path: string) {
    return function (target: any, key: string, desc: RoutePropertyDescriptor) {
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
