<template>
  <div class="global-layout">
    <Navbar></Navbar>

    <main role="main">
      <Nuxt></Nuxt>
    </main>

    <Footer></Footer>

    <client-only>
      <BackToTop></BackToTop>
    </client-only>
  </div>
</template>

<style lang="scss">
.global-layout {
  position: relative;
  overflow: hidden;
}
</style>
