export const state = () => ({
  canBeTransparent: true,
  isTransparent: true,
  transparentOffset: 0,
  mobileMenuIsActive: false,
})

export const mutations = {
  setNavbarCanBeTransparent(state, allowTransparency) {
    state.canBeTransparent = allowTransparency
  },
  setNavbarIsTransparent(state, transparent) {
    state.isTransparent = transparent
  },
  setOffset(state, offset) {
    state.transparentOffset = offset
  },
  setMobileMenuActive(state, active) {
    state.mobileMenuIsActive = active
  },
}
