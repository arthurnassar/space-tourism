<template>
  <div class="hello d-flex flex-row align-items-center w-100">
    <div class="rounded">
      <img src="@/assets/shared/logo.svg" alt="LOGO" />
      <button
        class="btn burguer-menu"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
      >
        <img src="../assets/shared/icon-hamburger.svg" alt="burguer menu" />
      </button>

      <div
        class="offcanvas body offcanvas-end w-75"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasExampleLabel"></h5>
          <button
            type="button"
            class="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <img src="../assets/shared/icon-close.svg" alt="icone fechar" />
          </button>
        </div>
        <div class="offcanvas-body">
          <ul
            class="
              nav
              mobile
              text-white
              w-75
              d-flex
              justify-content-center
              gap-5
            "
          >
            <li
              class="
                nav-item
                mobile
                d-flex
                text-decoration-none text-white
                gap-2
                mx-2
                align-items-center
              "
              :class="{ active: home }"
              @click="this.$router.push('/')"
            >
              <span class="mobile fw-bold"> 00 </span>
              <p class="mobile">HOME</p>
            </li>
            <li
              class="
                nav-item
                mobile
                d-flex
                text-decoration-none text-white
                gap-2
                mx-2
                align-items-center
              "
              :class="{ active: destination }"
              @click="this.$router.push('/destination')"
            >
              <span class="mobile fw-bold"> 01 </span>
              <p class="mobile">DESTINATION</p>
            </li>
            <li
              class="
                nav-item
                mobile
                d-flex
                text-decoration-none text-white
                gap-2
                mx-2
                align-items-center
              "
              :class="{ active: crew }"
              @click="this.$router.push('/crew')"
            >
              <span class="mobile fw-bold"> 02 </span>
              <p class="mobile">CREW</p>
            </li>
            <li
              class="
                nav-item
                mobile
                d-flex
                text-decoration-none text-white
                gap-2
                mx-2
                align-items-center
              "
              :class="{ active: technology }"
              @click="this.$router.push('/technology')"
            >
              <span class="mobile fw-bold"> 03 </span>
              <p class="mobile">TECHNOLOGY</p>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="line position-relative" style="z-index: 99"></div>

    <ul
      class="
        nav
        desktop
        blur
        text-white
        w-75
        d-flex
        justify-content-center
        gap-5
      "
    >
      <li
        class="
          nav-item
          desktop
          d-flex
          text-decoration-none text-white
          gap-2
          mx-2
          align-items-center
        "
        :class="{ active: home }"
        @click="this.$router.push('/')"
      >
        <span class="desktop fw-bold"> 00 </span>
        <p class="desktop">HOME</p>
      </li>
      <li
        class="
          nav-item
          desktop
          d-flex
          text-decoration-none text-white
          gap-2
          mx-2
          align-items-center
        "
        :class="{ active: destination }"
        @click="this.$router.push('/destination')"
      >
        <span class="desktop fw-bold"> 01 </span>
        <p class="desktop">DESTINATION</p>
      </li>
      <li
        class="
          nav-item
          desktop
          d-flex
          text-decoration-none text-white
          gap-2
          mx-2
          align-items-center
        "
        :class="{ active: crew }"
        @click="this.$router.push('/crew')"
      >
        <span class="desktop fw-bold"> 02 </span>
        <p class="desktop">CREW</p>
      </li>
      <li
        class="
          nav-item
          desktop
          d-flex
          text-decoration-none text-white
          gap-2
          mx-2
          align-items-center
        "
        :class="{ active: technology }"
        @click="this.$router.push('/technology')"
      >
        <span class="desktop fw-bold"> 03 </span>
        <p class="desktop">TECHNOLOGY</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  props: {
    technology: Boolean,
    home: Boolean,
    crew: Boolean,
    destination: Boolean,
  },
  methods: {
    redirect(e) {
      this.$router.push(`"/${e}"`);
    },
    changeActiveClasss(e, a) {
      if (a) {
        e = true;
      } else {
        e = false;
      }
    },
  },
  watch: {
    techActive() {
      this.changeActiveClasss(this.technology, this.techActive);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;700&display=swap");

* {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  letter-spacing: 2.7px;
}

div.hello {
  padding-left: 55px;
  position: fixed;
  top: 50px;
}
.line.position-relative {
  content: "";
  width: 35%;
  left: 5%;
  height: 1px !important;
  background-color: #ffffff;
  opacity: 0.25;
}

ul.nav {
  height: 96px;
  background: rgba(255, 255, 255, 0.04);
  backdrop-filter: blur(81.5485px);
}

li.active {
  border-bottom: 3px solid white;
}

li:hover {
  cursor: url(@/assets/shared/pointer.png), auto;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

.burguer-menu {
  display: none !important;
}

@media screen and (max-width: 900px) {
  .line {
    display: none !important;
  }

  ul.mobile {
    background: none;
    backdrop-filter: none;
  }
  .blur {
    display: none !important;
    max-width: 0px;
  }

  li.desktop {
    display: none !important;
  }

  p.desktop {
    display: none !important;
  }

  span.desktop {
    display: none !important;
  }

  .hello {
    padding-left: 20px !important;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start !important;
  }

  .burguer-menu {
    display: block !important;
  }

  .rounded {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0px 5px;
  }

  .offcanvas {
    background: rgba(255, 255, 255, 0.015);
    backdrop-filter: blur(15.5485px);
  }
}
</style>
