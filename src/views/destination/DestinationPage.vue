<template>
  <div class="app">
    <NavBar :destination="true" />
    <div class="page__title heading-5 d-flex gap-4">
      <p class="number">01</p>
      <p class="barlow-condensed subheading1" style="letter-spacing: 4.72px">
        PICK YOUR DESTINATION
      </p>
    </div>
    <main class="px-2">
      <section
        class="
          planet__section
          d-flex
          flex-column
          justify-content-end
          align-items-center
        "
      >
        <img
          :src="require(`@/assets${selectedPlanet.images.webp}`)"
          alt="Foto da Lua"
        />
      </section>
      <section
        class="description__section d-flex flex-column justify-content-end"
      >
        <ul class="nav-items d-flex gap-5">
          <li
            v-for="planets in planetas"
            class="tab"
            :key="planets.name"
            @click="selectPlanetAndChangeActiveTab(planets)"
            :class="{ active: activeTab[planets.name] }"
          >
            {{ planets.name.toUpperCase() }}
          </li>
        </ul>

        <p class="heading-2">{{ selectedPlanet.name.toUpperCase() }}</p>

        <div class="">
          <p class="text--description barlow" style="font-size: 18px">
            {{ selectedPlanet.description }}
          </p>
        </div>

        <hr class="mt-5 w-50" />

        <div class="planet_specs--container">
          <div class="distance--box">
            <p class="barlow-condensed subheading2">AVG. DISTANCE</p>
            <p class="subheading1 bellefair">
              {{ selectedPlanet.distance.toUpperCase() }}
            </p>
          </div>
          <div class="travel_time--box">
            <p class="barlow-condensed subheading2">EST. TRAVEL TIME</p>
            <p class="subheading1 bellefair">
              {{ selectedPlanet.travel.toUpperCase() }}
            </p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import json from "../../../public/data.json";
import NavBar from "@/components/NavBar.vue";

export default {
  data() {
    return {
      planetas: json.destinations,
      selectedPlanet: {},
      activeTab: {},
    };
  },
  beforeMount() {
    this.selectedPlanet = this.planetas[0];
    this.activeTab.Moon = true;
  },
  name: "DestinationPage",
  components: {
    NavBar,
  },
  methods: {
    selectPlanetAndChangeActiveTab(planets) {
      this.selectedPlanet = planets;
      this.activeTab = {};
      this.activeTab[planets.name] = true;
    },
  },
};
</script>

<style src="./style.scss" lang="scss" scoped>
</style>