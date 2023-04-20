import { CARD_IMAGES } from '@/common/constants'

export const cardImageRandomizer = (index: number): string => {
  const currentIndex = index % CARD_IMAGES.length
  
  return CARD_IMAGES[currentIndex].default
}

export const convertToPhoneFormat = (value: string): string => {
  let str = ''
  const formattedValue = convertFromPhoneFormat(value)

  for (let i = 0; i < formattedValue.length; i++) {
    const currentLetter = formattedValue[i]

    switch (i) {
      case 0:
        str += `+${currentLetter}`
        break
      case 3:
        str += ` (${currentLetter}`
        break
      case 4:
        str += `${currentLetter}) `
        break
      case 8:
        str += `-${currentLetter}`
        break
      case 10:
        str += `-${currentLetter}`
        break
      default:
        str += currentLetter
        break
    }
  }

  return str
}

export const convertFromPhoneFormat = (value: string): string => {
  let res = ''

  for(let i = 0; i < value.length; i++) {
    switch (value[i]) {
      case '+':
      case '(':
      case ')':
      case ' ':
      case '-':
        break
      default:
        res += value[i]
        break
    }
  }

  return res
}