import { CARD_IMAGES } from "@/common/constants"

export const cardImageRandomizer = (index: number): string => {
  const currentIndex = index % CARD_IMAGES.length
  console.log(currentIndex, index);
  
  return CARD_IMAGES[currentIndex].default
}