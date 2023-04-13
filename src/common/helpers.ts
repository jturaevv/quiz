import { CARD_IMAGES } from "@/common/constants"

export const cardImageRandomizer = (index: number): string => {
  const currentIndex = index % CARD_IMAGES.length
  
  return CARD_IMAGES[currentIndex].default
}