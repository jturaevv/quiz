import type { Axios, AxiosResponse } from 'axios'
import { ENDPOINT } from '@/common/endpoints'
import type {
  ILoginPayload,
  ILoginResponse,
  IRefreshPayload,
  IRefreshResponse,
  IRegistrationPayloadStepOne,
  IRegistrationPayloadStepTwo,
  IRegistrationResponseStepOne,
  IRegistrationResponseStepTwo,
} from '@/services/auth/auth.interface'

export default class AuthService {
  constructor (readonly client: Axios) {
  }

  async login ({ phone_number, password }: ILoginPayload): Promise<AxiosResponse<ILoginResponse>> {
    return await this.client.post(ENDPOINT.login(), {
      phone_number,
      password,
    })
  }

  async register ({ phone_number }: IRegistrationPayloadStepOne): Promise<AxiosResponse<IRegistrationResponseStepOne>> {
    return await this.client.post(ENDPOINT.register(), {
      phone_number,
    })
  }

  async verification ({ code, phone_number, password }: IRegistrationPayloadStepTwo): Promise<AxiosResponse<IRegistrationResponseStepTwo>> {
    return await this.client.post(ENDPOINT.verification(), {
      verification_code: code,
      phone_number,
      password,
    })
  }

  async refresh ({ refresh }: IRefreshPayload): Promise<AxiosResponse<IRefreshResponse>> {
    return await this.client.post(ENDPOINT.refreshToken(), { refresh })
  }
}