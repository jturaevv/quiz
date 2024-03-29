export type Rule = (value: any) => string | true

export type Rules = Rule[]

export interface IRegisterForm {
  phone: string
  password: string
  passwordRepetation: string
  code: number | null
}

export interface ILoginForm {
  phone: string
  password: string
}

export enum LOADER_SIZE {
  sm = 'sm',
  md = 'md',
  lg = 'lg',
}