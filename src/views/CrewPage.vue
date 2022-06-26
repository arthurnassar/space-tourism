<template>
  <div class="app">
    <NavBar :crew="true" />
    <div class="div_number text-white d-flex align-items-center gap-4">
      <p class="barlow-condensed number-indication subheading1">02</p>
      <p class="barlow-condensed subheading1" style="letter-spacing: 4.72px">
        MEET YOUR CREW
      </p>
    </div>

    <div class="container-fluid text-white d-flex align-items-end">
      <div class="row w-100" style="padding-left: 8%">
        <div class="col-md-6 d-flex flex-column justify-content-end">
          <div
            class="
              col-12
              description-col
              d-flex
              flex-column
              justify-content-end
            "
          >
            <div class="row pt-4">
              <div
                class="col bellefair heading-4"
                style="font-size: 60px; opacity: 0.5"
              >
                {{ selectedCrew.role.toUpperCase() }}
              </div>
            </div>

            <div class="row pb-4">
              <div class="col heading-2 barlow-condensed bellefair">
                {{ selectedCrew.name.toUpperCase() }}
              </div>
            </div>

            <div class="row">
              <div class="col-md-8">
                <p
                  class="text-description barlow"
                  style="
                    font-size: 26px;
                    margin-bottom: 20%;
                    line-height: 32px;
                    color: #d0d6f9;
                  "
                >
                  {{ selectedCrew.bio }}
                </p>
              </div>
            </div>

            <div class="row">
              <ul class="d-flex gap-5">
                <li
                  v-for="member in crew"
                  :key="member.crew_id"
                  @click="selectCrewAndChangeActiveTab(member)"
                  :class="{ active: activeTab[member.crew_id] }"
                ></li>
              </ul>
            </div>
          </div>
        </div>
        <div
          class="
            planet-col
            position-relative
            col-6
            d-flex
            flex-column
            justify-content-end
            align-items-center
          "
        >
          <img
            style="width: 55%"
            :src="require(`@/assets${selectedCrew.images.webp}`)"
            alt="Foto da Lua"
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
  name: "CrewPage",
  components: {
    NavBar,
  },
  data() {
    return {
      crew: json.crew,
      selectedCrew: {},
      activeTab: {},
    };
  },
  beforeMount() {
    this.selectedCrew = this.crew[0];
    this.activeTab.id1 = true;
  },
  methods: {
    selectCrewAndChangeActiveTab(member) {
      this.selectedCrew = member;
      this.activeTab = {};
      this.activeTab[member.crew_id] = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/scss/global_style";
@import url("https://fonts.googleapis.com/css2?family=Barlow&family=Barlow+Condensed:wght@400;700&family=Bellefair&display=swap");

.barlow {
  font-family: "Barlow", sans-serif !important;
}

.barlow-condensed {
  font-family: "Barlow Condensed", sans-serif;
}

.bellefair {
  font-family: "Bellefair", serif;
}

.subheading2 {
  font-size: 14px;
  letter-spacing: 2.35px;
}

.div_number {
  padding-left: 200px;
}

.subheading1 {
  font-size: 35px;
  letter-spacing: 4.72px;
}

.heading2 {
  font-size: 90px;
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

div.app {
  background-image: url(@/assets/crew/background-crew-desktop.jpg);
  min-height: 100vh;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: 12vh;
}

.rounded {
  bottom: 100px !important;
}

ul {
  text-decoration: none;
  list-style: none;
}

li {
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background-color: white;
  opacity: 0.17;
}

li.active {
  opacity: 1;
}

li:hover {
  cursor: url(@/assets/shared/pointer.png), auto;
  border-bottom: 3px solid rgba(255, 255, 255, 0.5);
}

@media screen and (max-width: map-get($grid-breakpoints, mobile )) {
  body {
    padding-right: 0 !important;
    overflow: visible !important;
  }

  .app {
    padding-top: 15vh !important;
    overflow: visible !important;
    padding-bottom: 5vh !important;
  }
  .heading-4 {
    font-size: 1rem !important;
  }

  .heading-2 {
    font-size: 2rem !important;
    padding-bottom: -15px !important;
  }

  .row.w-100 {
    padding-left: 0 !important;
    flex-direction: column-reverse;
    padding-top: 4vh;
  }
  .div_number {
    margin-bottom: 10px !important;
    text-align: center !important;
    justify-content: center;
    padding-left: 0 !important;

    p {
      font-size: 1.5rem !important;
    }
  }

  .text-description {
    font-size: 1rem !important;
    margin: 20px !important;
  }

  .planet-col {
    width: 100%;
    justify-content: flex-start !important;
    position: static !important;
  }

  img {
    height: 90%;
  }

  li {
    width: 10px !important;
    height: 10px !important;
  }

  .description-col {
    padding: 0px 10px;

    * {
      justify-content: center;
      text-align: center;
    }
  }
}
</style>