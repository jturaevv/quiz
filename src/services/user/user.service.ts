import type { Axios, AxiosResponse } from 'axios'
import { ENDPOINT } from '@/common/endpoints'
import type {
  IUser,
  IUserResponse,
} from '@/services/user/user.interface'

export default class UserService {
  constructor (readonly client: Axios) {
  }

  async me (): Promise<AxiosResponse<IUserResponse>> {
    return await this.client.get(ENDPOINT.me())
  }
}

export class User implements IUser {
  constructor(user: IUserResponse) {
     this.id = user.id
     this.phoneNumber = user.phone_number
     this.firstName = user.first_name
     this.lastName = user.last_name
     this.mail = user.mail
     this.age = user.age
     this.photo = user.photo
  }

  id: number
  phoneNumber: string
  firstName: string
  lastName: string
  mail: string
  age: number
  photo: null
}