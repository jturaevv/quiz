
export interface IUserStore {
  user: IUser | null
}

export interface IUserResponse {
  id: number
  phone_number: string
  first_name: string
  last_name: string
  mail: string
  age: number
  photo: null
}

export interface IUser {
  id: number
  phoneNumber: string
  firstName: string
  lastName: string
  mail: string
  age: number
  photo: null
}