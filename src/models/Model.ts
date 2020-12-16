import { AxiosPromise } from 'axios';

interface ModelAttributes<T> {
  set(update: T): void;
  get<K extends keyof T>(key: K): T[K];
  getAll(): T;
}

interface Events {
  on(eventName: string, callback: () => void): void;
  trigger(eventName: string): void;
}

interface Sync<T> {
  fetch(id: number): AxiosPromise;
  save(data: T): AxiosPromise;
}

export class Model {}
