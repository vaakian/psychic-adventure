import type { UnwrapRef } from 'vue'

export const useMyAsyncState = <T>(promiseFn: () => Promise<T>, initialState: T) => {
  const state = ref(initialState)
  promiseFn().then((res) => {
    state.value = res as UnwrapRef<T>
  })
  return state
}
