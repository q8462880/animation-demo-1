<template>
  <div>
    <div>
      <div>
        <div data-baseweb="drawer"
             class="phanta_ae phanta_af phanta_ag phanta_ah phanta_ai phanta_aj animate__animated"
             data-focus-lock-disabled="false" :class="{'animate__fadeIn':$menu.show,'animate__fadeOut':!$menu.show}"
             :style="animateState ? 'display:block!important;':'display:none!important;'">
          <div
              class="phanta_ae phanta_ag phanta_ah phanta_ai phanta_aj phanta_ak phanta_al phanta_am phanta_bh phanta_ao phanta_ap phanta_aq"
              @click="$menu.show=false"></div>
          <div
              class="phanta_ar phanta_as phanta_at phanta_au phanta_av phanta_bi phanta_aj phanta_ai phanta_ay phanta_az phanta_b0 phanta_b1 phanta_bh phanta_b2 phanta_ap phanta_aq phanta_b3 phanta_ae">
            <div
                class="phanta_b4 phanta_b5 phanta_b6 phanta_b7 phanta_b8 phanta_b9 phanta_ba phanta_bb phanta_bc phanta_af phanta_bd phanta_be phanta_bf phanta_bg">
              <div
                  class="src-components-Common-CloseIcon-CloseIcon-module__CloseIcon--GClW2 src-components-Common-Drawer-Drawer-module__closeIcon--hy6AV"
                  @click="$menu.show=false">
                <svg width="33" height="34" viewBox="0 0 33 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                      d="M5.72048 4.02506L29.8098 28.1994L30.1138 29.9619C21.7263 24.3003 2.65684 10.1968 2.35282 8.43436C2.09183 6.92132 3.25667 5.27378 4.50157 4.01097C4.83704 3.67067 5.38318 3.68657 5.72048 4.02506Z"
                      fill="#182DEF"></path>
                  <path
                      d="M2.22086 25.2077L28.5295 3.46961L30.3126 3.33072C23.896 11.1557 8.08116 28.8318 6.29807 28.9706C4.76731 29.0899 3.23517 27.7769 2.09354 26.4201C1.78589 26.0544 1.85248 25.5121 2.22086 25.2077Z"
                      fill="#182DEF"></path>
                </svg>
              </div>
              <div class="src-components-Common-Drawer-Drawer-module__contentWrap--3GRZ2">
                <div class="src-components-Header-Header-module__mobileMenuItem--NAidB">
                  <router-link :to="{name:'home'}" v-slot="{ isActive,navigate,href }"><a
                      :class="{'src-components-Header-Header-module__active--hM69X':href === $route.path}" :href="href"
                      @click="navigate">Homepage</a></router-link>
                </div>
                <div class="src-components-Header-Header-module__mobileMenuItem--NAidB">
                  <router-link :to="{name:'products'}" v-slot="{ isActive,navigate,href }"><a
                      :class="{'src-components-Header-Header-module__active--hM69X':href === $route.path}" :href="href"
                      @click="navigate">NFT</a></router-link>
                </div>
                <div class="src-components-Header-Header-module__mobileMenuItem--NAidB">
                  <router-link :to="{name:'buy'}" v-slot="{ isActive,navigate,href }"><a
                      :class="{'src-components-Header-Header-module__active--hM69X':href === $route.path}" :href="href"
                      @click="navigate">Buy</a></router-link>
                </div>
                <div class="src-components-Header-Header-module__mobileMenuItem--NAidB">
                  <router-link :to="{path:'/#roadmap'}" v-slot="{ isActive,navigate,href }"><a
                      :class="{'src-components-Header-Header-module__active--hM69X':href === $route.path}" :href="href"
                      @click="navigate">Roadmap</a></router-link>
                </div>
                <div class="src-components-Header-Header-module__mobileMenuItem--NAidB">
                  <router-link :to="{path:'/#roadmap'}" v-slot="{ isActive,navigate,href }"><a
                      :class="{'src-components-Header-Header-module__active--hM69X':href === $route.path}" :href="href"
                      @click="navigate">Team</a></router-link>
                </div>
                <div class="src-components-Header-Header-module__mobileMenuItem--NAidB">
                  <router-link :to="{name:'about'}" v-slot="{ isActive,navigate,href }"><a
                      :class="{'src-components-Header-Header-module__active--hM69X':href === $route.path}" :href="href"
                      @click="navigate">About</a></router-link>
                </div>
                <div class="src-components-Header-Header-module__mobileMenuItem--NAidB"><a>SIGN IN</a></div>
                <div
                    class="src-components-Common-Drawer-MobileLanguageSelect-MobileLanguageSelect-module__MobileLanguageSelect--Cah2e">
                  <div
                      class="src-components-Common-Drawer-MobileLanguageSelect-MobileLanguageSelect-module__languageMenu--xSvh7">
                    <span
                        class="src-components-Common-Drawer-MobileLanguageSelect-MobileLanguageSelect-module__languageText--nLNxu">LANGUAGE</span><span
                      class="src-components-Common-Drawer-MobileLanguageSelect-MobileLanguageSelect-module__arrow--H6ove src-components-Common-Drawer-MobileLanguageSelect-MobileLanguageSelect-module__downArrow--PWiO0"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '../assets/css/phanta.css'

export default {
  name: "Menu",
  data() {
    return {
      animateState: false
    }
  },
  watch: {
    '$menu.show': {
      handler(state) {
        if (state) {
          this.animateState = state
        } else {
          setTimeout(() => {
            this.animateState = state
          }, 1000)
        }
      },

      deep: true,
      immediate: true,
    },
    '$route.fullPath': {
      handler(){
        this.$menu.show=false
      },
      deep:true
    },
  }
}
</script>

<style scoped>
.memu-hide {
  display: none !important;
}

.memu-show {
  display: block !important;
}


.src-components-Header-Header-module__mobileMenuItem--NAidB a:hover {
  background: unset !important;
  color: #182def !important;
}
</style>
