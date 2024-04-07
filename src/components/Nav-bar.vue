<template>
  <nav>
    <v-snackbar v-model="snackbar" :timeout="4000" top color="success">
      <span>Awesome! You added a new project</span>
      <v-btn text color="white" @click="snackbar = false">Close</v-btn>
    </v-snackbar>
    <v-app-bar>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="grey--text"
      ></v-app-bar-nav-icon>

      <v-toolbar-title class="black--text">
        <span>Sandali Singh</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs>
        <v-tab><a @click="scrollToSection('about')">About</a></v-tab>
        <v-tab><a @click="scrollToSection('teck')">Technologies</a></v-tab>
        <v-tab><a @click="scrollToSection('projects')">Projects</a></v-tab>
        <v-tab><a @click="scrollToSection('experience')">Experience</a></v-tab>
      </v-tabs>
      <v-btn rounded class="action_btn">
        <span
          ><a @click="scrollToSection('hire')" class="white--text"
            >Hire me!
          </a></span
        >
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer app v-model="drawer" class="primary">
      <v-layout column align-center>
        <v-flex class="mt-5">
          <v-avatar size="100" class="grey lighten-4">
            <img src="/avatar5.png" />
          </v-avatar>
          <p class="white--text mt-4">Sandali Singh</p>
        </v-flex>
        <v-flex class="mt-4 mb-3">
          <pop_up @projectAdded="snackbar = true" />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item
          v-for="link in links"
          :key="link.text"
          router
          :to="link.route"
        >
          <v-list-item-icon>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              {{ link.text }}
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: "mdi-view-dashboard", text: "Home", route: "/" },
        { icon: "mdi-folder", text: "About", route: "/projects" },
        { icon: "mdi-account", text: "Technologies", route: "/team" },
        { icon: "mdi-account", text: "Projects", route: "/team" },
        { icon: "mdi-account", text: "Technologies", route: "/team" },
      ],
      snackbar: false,
    };
  },
  methods: {
    scrollToSection(section) {
      let targetElement;
      if (section === "about") {
        targetElement = document.getElementById("about");
      } else if (section === "teck") {
        targetElement = document.getElementById("teck");
      } else if (section === "projects") {
        targetElement = document.getElementById("projects");
      } else if (section === "experience") {
        targetElement = document.getElementById("experience");
      } else if (section === "hire") {
        targetElement = document.getElementById("hire");
      }

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    },
  },
};
</script>
<style scoped>
.action_btn {
  background: linear-gradient(90deg, #224433, #416b28 80%);
  color: white;
}
.v-sheet.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
.v-sheet.v-app-bar.v-toolbar:not(.v-sheet--outlined) {
  box-shadow: none;
}
</style>
