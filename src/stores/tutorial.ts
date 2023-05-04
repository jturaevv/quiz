import { defineStore } from 'pinia'
import type { ITutorialStore } from '@/services/tutorial/tutorial.interface'
import { tutorialService } from '@/services'
import { Subject } from '@/services/tutorial/tutorial.service'

export const useTutorialStore = defineStore('tutorial', {
  state: (): ITutorialStore => ({
    subjects: []
  }),
  actions: {
    async getSubjectList() {
      try {
        const { data } = await tutorialService.getSubjectList()
        this.subjects = data.map((subject => new Subject(subject)))

        return this.subjects
      } catch (error) {
        return Promise.reject(error)
      }
    }
  }
})
