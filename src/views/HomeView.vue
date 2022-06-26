<template>
  <div class="home">
    <NavBar :home="true" />

    <div class="body d-flex align-items-end gap-5 justify-content-center w-100">
      <div class="wrapper w-50 d-flex justify-content-center">
        <div class="cw-35 d-flex flex-column gap-5 text-white">
          <h5 class="heading-5 barlow-condensed">SO, YOU WANT TO TRAVEL TO</h5>
          <h1 class="heading-1 bellefair cfs-150">SPACE</h1>

          <p class="barlow">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
      </div>
      <div class="wrapper w-50 d-flex justify-content-center">
        <div
          class="
            explore-btn
            d-flex
            align-items-center
            justify-content-center
            bellefair
          "
          @click="$router.push('/destination')"
        >
          EXPLORE
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from "@/components/NavBar.vue";
export default {
  name: "HomeView",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/global_style";
@import url("https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed&family=Bellefair&display=swap");

body {
  padding-right: 0 !important;
}

.barlow {
  font-family: "Barlow", sans-serif;
  color: #d0d6f9;
  font-size: 18px;
  line-height: 32px;
}

.barlow-condensed {
  font-family: "Barlow Condensed", sans-serif;
  font-size: 28px;
  letter-spacing: 4.75px;
  color: #d0d6f9;
}

.bellefair {
  font-family: "Bellefair", serif;
}

.cfs-150 {
  font-size: 150px;
}

/* custom widths */
.cw-35 {
  width: 35%;
}

.explore-btn {
  color: #0b0d17;
  font-size: 32px;
  letter-spacing: 2px;
}

.explore-btn:hover {
  cursor: url(@/assets/shared/pointer.png), auto;
  -webkit-box-shadow: 0px 0px 0px 50px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 0px 88px rgba(255, 255, 255, 0.1);
}

div.home {
  background-image: url(@/assets/home/background-home-desktop.jpg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 40px;
}

.explore-btn {
  width: 294px;
  height: 294px;
  background-color: white;
  border-radius: 50%;
}

.body {
  min-height: 70vh;
}

@media (max-width: 900px) {
  .wrapper {
    width: 100% !important;
  }
  .body {
    display: flex !important;
    flex-direction: column !important;
  }

  .heading-1 {
    font-size: 5rem !important;
  }

  .cw-35 {
    width: 100% !important;
  }

  .heading-5 {
    font-size: 1.2rem !important;
  }

  .app {
    padding: 15vh 1em 0 1em !important;
  }

  p {
    padding: 0 1em !important;
  }

  .home {
    padding-top: 15vh !important;
    text-align: center !important;
    background-image: url(@/assets/home/background-home-mobile.jpg) !important;
  }

  .explore-btn {
    width: 150px !important;
    height: 150px !important;
    font-size: 1.3em !important;
  }

  .explore-btn:hover {
    -webkit-box-shadow: 0px 0px 0px 25px rgba(0, 0, 0, 0.1);
    box-shadow: 0px 0px 0px 40px rgba(255, 255, 255, 0.1);
  }
}
</style>