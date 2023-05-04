import type { Axios, AxiosResponse } from 'axios'
import { ENDPOINT } from '@/common/endpoints'
import type { ISubject, ISubjectResponse } from './tutorial.interface'

export default class TutorialService {
  constructor (readonly client: Axios) {
  }

  async getSubjectList (): Promise<AxiosResponse<ISubjectResponse[]>> {
    return await this.client.get(ENDPOINT.subjects())
  }
}

export class Subject implements ISubject {
  constructor(subject: ISubjectResponse) {
     this.id = subject.id
     this.name = subject.name
  }

  id: number
  name: string
}