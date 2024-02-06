import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref([])

  const toggleFavorite = (coin) => {
    const index = favorites.value.findIndex((item) => item.uuid === coin.uuid)
    if (index !== -1) {
      favorites.value.splice(index, 1) // Remove from favorites
    } else {
      favorites.value.push(coin) // Add to favorites
    }
  }

  return { favorites, toggleFavorite }
})
