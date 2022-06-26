<template>
  <div class="app">
    <NavBar class="custom-padding" :technology="true" />
    <div class="container-fluid text-white">
      <div class="row">
        <div
          class="
            col-md-7
            d-flex
            flex-column
            justify-content-center
            align-items-center
            gap-5
          "
          style="min-height: 89vh"
        >
          <div
            class="page-title row d-flex align-items-start"
            style="height: 15%"
          >
            <div class="col heading-2 d-flex align-items-center gap-5 h-25">
              <p class="barlow-condensed number-indication subheading1">03</p>
              <p
                class="barlow-condensed subheading1"
                style="letter-spacing: 4.72px"
              >
                SPACE LAUNCH 101
              </p>
            </div>
          </div>

          <img
            class="img-mobile"
            style="width: 80%"
            :src="require(`@/assets${selectedTechnology.images.landscape}`)"
            alt="Foto da Tecnologia"
          />

          <div class="set-gap row h-50">
            <div class="col-md-3">
              <ul class="d-flex flex-column gap-5">
                <li
                  class="d-flex justify-content-center align-items-center"
                  v-for="(tecnologia, index) in tecnologias"
                  :key="tecnologia.name"
                  @click="selectTechnologyAndChangeActiveTab(tecnologia)"
                  :class="{ active: activeTab[tecnologia.tech_id] }"
                >
                  {{ ++index }}
                </li>
              </ul>
            </div>
            <div class="col-md-9">
              <div class="texts d-flex flex-column gap-4">
                <p
                  class="barlow-condensed"
                  style="
                    font-size: 16px;
                    line-height: 19.2px;
                    letter-spacing: 2.7px;
                    color: #d0d6f9;
                  "
                >
                  THE TERMINOLOGY...
                </p>

                <h1 class="h1 bellefair" style="font-size: 56px">
                  {{ selectedTechnology.name.toUpperCase() }}
                </h1>

                <p class="barlow" style="line-height: 32px; font-size: 18px">
                  {{ selectedTechnology.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            col-md-5
            d-flex
            flex-column
            align-items-end
            justify-content-center
          "
          style="margin: 0; padding: 0"
        >
          <img
            class="img-desktop"
            style="width: 80%"
            :src="require(`@/assets${selectedTechnology.images.portrait}`)"
            alt="Foto da Tecnologia"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import json from "../../public/data.json";
import NavBar from "@/components/NavBar.vue";

export default {
  name: "TechnologyPage",
  components: {
    NavBar,
  },
  data() {
    return {
      tecnologias: json.technology,
      selectedTechnology: {},
      activeTab: {},
    };
  },
  beforeMount() {
    this.selectedTechnology = this.tecnologias[0];
    this.activeTab.id1 = true;
  },
  methods: {
    selectTechnologyAndChangeActiveTab(technologies) {
      this.selectedTechnology = technologies;
      this.activeTab = {};
      this.activeTab[technologies.tech_id] = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap");
@import "@/assets/scss/global_style";

body {
  padding-right: 0 !important;
}

.barlow {
  font-family: "Barlow", sans-serif;
}

.barlow-condensed {
  font-family: "Barlow Condensed", sans-serif;
}

.bellefair {
  font-family: "Bellefair", serif;
}

div.app {
  background-image: url(@/assets/technology/background-technology-desktop.jpg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 15vh;
}

.texts {
  p {
    font-size: 1rem !important;
  }

  h1 {
    font-size: 2rem !important;
  }
}

ul {
  text-decoration: none;
  list-style: none;
  margin: 20px 0;
}

li {
  height: 80px;
  width: 80px;
  border-radius: 50%;
  border: 1px solid #ffffff25;
}

li.active {
  color: black;
  background-color: white;
}

li:hover {
  cursor: url(@/assets/shared/pointer.png), auto;
  border: 1px solid white;
}

.subheading2 {
  font-size: 14px;
  letter-spacing: 2.35px;
}

.subheading1 {
  font-size: 28px;
}

.heading2 {
  font-size: 100px;
}

.number-indication {
  font-weight: 700;
  letter-spacing: 4.72px;
  opacity: 25%;
}

.text-description {
  line-height: 32px;
  color: #d0d6f9;
}

.img-mobile {
  display: none;
}

.page-title {
  width: 75%;
}

.set-gap {
  width: 80%;
}

/* DISPLAY LANDSCAPE IMAGE ON MOBILE */
@media screen and (max-width: 900px) {
  .set-gap {
    width: 75% !important;
  }
  .page-title {
    p {
      font-size: 1.4rem !important;
    }
  }

  .custom-padding {
    padding-right: 20px;
  }
  .row {
    display: block !important;
  }
  .app {
    padding: 0 0 5vh 0;
    text-align: center;
    background-image: url(@/assets/technology/background-technology-mobile.jpg) !important;
  }
  body {
    overflow: visible !important;
  }
  .img-desktop {
    display: none;
  }

  .img-mobile {
    display: block;
    width: 100% !important;
  }

  .heading {
    font-size: 20px;
  }

  ul {
    flex-direction: row !important;
    width: 100% !important;
    padding: 0 !important;
    justify-content: center !important;
  }

  li {
    width: 40px;
    height: 40px;
  }
}
</style>