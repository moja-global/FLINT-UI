export default {
  state: {
    coordinates: [-79.347015, 43.65107]
  },

  mutations: {
    setnewlat(state, newValue) {
      state.coordinates[0] = newValue
    },

    setnewlong(state, newValue) {
      state.coordinates[1] = newValue
    }
  }
}
