import { ref, watchEffect } from 'vue'

export default function (initialValue, key) {
  const val = ref(initialValue)

  const storageValue = window.sessionStorage.getItem(key)

  if (storageValue) {
    val.value = JSON.parse(storageValue)
  }

  watchEffect(() => {
    window.sessionStorage.setItem(key, JSON.stringify(val.value))
  })

  return val
}
