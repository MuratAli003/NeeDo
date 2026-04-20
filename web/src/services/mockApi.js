import { categories, messages, onboardingSlides, proposals } from '../utils/mockData'

const delay = (ms = 300) => new Promise((resolve) => setTimeout(resolve, ms))

export const mockApi = {
  async getOnboardingSlides() {
    await delay()
    return onboardingSlides
  },
  async getCategories() {
    await delay()
    return categories
  },
  async getProposals() {
    await delay()
    return proposals
  },
  async getMessages() {
    await delay()
    return messages
  },
}
