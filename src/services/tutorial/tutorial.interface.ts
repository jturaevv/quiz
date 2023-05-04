
export interface ITutorialStore {
  subjects: ISubject[]
}

export interface ISubject {
  id: number,
  name: string,
}

export interface ISubjectResponse {
  id: number,
  name: string,
}