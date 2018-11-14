import { Container } from 'unstated'

type PersistConfig = {
  key: string,
  version: number,
  storage: any, // @TODO add storage typing,
  reviver: (key: string, value: any) => any,
}

export class PersistContainer<State extends object> extends Container<State>{
  persist: PersistConfig
}

export const isBootstrapped: (Container) => boolean
