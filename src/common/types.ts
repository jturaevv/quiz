export type Rule = (value: any) => string | false

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