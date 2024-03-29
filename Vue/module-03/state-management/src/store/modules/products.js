const state = {
  products: [
    { id: 1, title: 'iPhone 11', price: 800 },
    { id: 2, title: 'iPhone 18', price: 8000 },
  ]
}

const getters = {}

const mutations = {
  setProducts (state, payload) {
    state.products = payload
  }
}

const actions = []

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
