import type { Ref } from 'vue'

export interface IAuthStore {
  refreshToken: Ref<string> 
  accessToken:  Ref<string>
}

export enum REGISTRATION_STATUS {
  CODE_SENT = 'Code sent'
}

export interface ILoginPayload {
  phone_number: string
  password: string
}

export interface ILoginResponse {
  refresh: string
  access: string
}

export interface IRegistrationPayloadStepOne {
  phone_number: string
}

export interface IRegistrationPayloadStepTwo {
  phone_number: string
  password: string
  code: number
}

export interface IRegistrationResponseStepOne {
  status: REGISTRATION_STATUS
}

export interface IRegistrationResponseStepTwo {
  access: string
  refresh: string
}

export interface IRefreshPayload {
  refresh: string
}

export interface IRefreshResponse {
  access: string
}

export enum AUTH_NON_FIELD_ERROR_STATUS {
  USER_EXIST = 'User already exists'
}

export enum AUTH_ERROR_FIELD {
  NON_FIELD_ERROR = 'non_field_errors',
  PHONE_NUMBER = 'phone_number',
  VERIFICATION_CODE = 'verification_code',
  PASSWORD = 'password',
}