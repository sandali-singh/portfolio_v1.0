<template>
  <v-main class="main">
    <v-container-fluid>
      <v-app-bar class="px-2 mx-6 mt-5 mt-md-3 mx-md-auto">
        <v-toolbar-title>Sandali Singh</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tabs>
          <v-tab>About</v-tab>
          <v-tab>Technologies</v-tab>
          <v-tab>Project</v-tab>
          <v-tab>Experience</v-tab>
        </v-tabs>
        <v-btn rounded class="action_btn"> <span>Hire me! </span></v-btn>
      </v-app-bar>
      <v-row class="section1">
        <v-col col="12" md="12" sm="12">
          <v-container>
            <h4>
              Hola amigos! <br />
              I’m Sandali Singh a techy &
            </h4>
            <div class="greetings">
              <v-img
                src="../assets/images/Group 6385.webp"
                alt="Greetings-image"
                max-height="800"
                max-width="700"
              ></v-img>
            </div>
            <p class="green-light">
              <a href="/">
                <v-btn rounded class="action_btn">
                  <span>Hire me! </span></v-btn
                > </a
              >&nbsp;&nbsp; &nbsp; Know more about me
              <v-icon small class="green-light">mdi-arrow-right</v-icon>
            </p>
            <v-img
              class="profile-img"
              src="../assets/images/Group 5803.webp"
              alt="profile image"
              max-height="1000"
              max-width="1000"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>

      <v-row class="section2">
        <v-col col="12" md="12" sm="12">
          <v-container>
            <p class="mt-15 pt-15">
              Welcome to my digital realm! I'm Sandali singh, a freshly minted
              MCA graduate, fueled by curiosity and driven by innovation,with a
              passion for full-stack development. Equipped with a solid
              foundation in computer science and hands-on experience in various
              programming languages and technologies, I am eager to embark on my
              journey as a full-stack developer. My academic background has
              honed my problem-solving skills and instilled in me a keen
              attention to detail, both of which are essential traits in the
              world of software development. With a strong desire to learn and
              grow in this dynamic field, I am excited to contribute my
              creativity and technical expertise to building innovative and
              user-friendly solutions. I am ready to embrace challenges,
              collaborate with like-minded professionals, and make a meaningful
              impact in the realm of technology."
            </p>

            <span class="mb-10">
              <a href="https://www.linkedin.com/in/sandali-singh-3095b91a3/">
                <v-icon color="black">mdi-linkedin</v-icon>
              </a>
              <a href="https://twitter.com/_Sandali_Singh_">
                <v-icon color="black">mdi-twitter</v-icon>
              </a>
              <a href="/">
                <v-icon color="black">mdi-instagram</v-icon>
              </a>
              <a href="mailto: sandalisingh1270@gmail.com">
                <v-icon color="black">mdi-email</v-icon>
              </a>
              <a href="https://github.com/sandali-singh">
                <v-icon color="black">mdi-github</v-icon>
              </a>
            </span>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section3">
        <v-col col="12" md="12" sm="12">
          <v-container class="teck-block align-center mt-10">
            <p class="green-dark">Technologies, I’m working with</p>
            <h2 class="mb-5">Got a tech challenge? I code the answer.</h2>
            <div class="teck-stack">
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
                    alt="react"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>React.js</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                    alt="C++"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>C++</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                    alt="Firebase"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Firebase</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
                    alt="Bootstrap"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Bootstrap</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML5"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Html</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS3"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>CSS</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="SCSS"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>SCSS</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>JavaScript</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
                    alt="MySQL"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>MySql</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg"
                    alt="Vue.js"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Vue.js</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuetify/vuetify-original.svg"
                    alt="Vuetify"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Vuetify</span>
              </v-tooltip>
              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="github"
                    width="60"
                    height="60"
                    v-bind="attrs"
                    v-on="on"
                  />
                </template>
                <span>Github</span>
              </v-tooltip>
            </div>
            <p>
              I strongly value thinking creatively and outside the conventional
              boundaries. I also believe that learning is a continuous process
              that persists throughout one's life, regardless of age. Adopting a
              straightforward and uncomplicated approach to life, while still
              maintaining ambitious aspirations, is my philosophy. With this
              mindset, I am actively pursuing my objectives.
            </p>
            <p class="green-light mb-10">
              Let's Connect
              <v-icon small class="green-light">mdi-arrow-right</v-icon>
            </p>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section4">
        <v-col col="12" md="12" sm="12">
          <v-container class="mt-15">
            <p class="green-dark">Projects</p>
            <h2>I Build Magical products (Like this Website)</h2>
            <div class="cards">
              <v-card
                v-for="(item, index) in cardData1"
                :key="index"
                class="mx-auto"
                max-width="28%"
              >
                <v-img :src="item.imageUrl" height="200px"></v-img>

                <v-card-title>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle>
                  {{ item.subtitle }}
                </v-card-subtitle>
              </v-card>
            </div>
            <div class="cards">
              <v-card
                v-for="(item, index) in cardData2"
                :key="index"
                class="mx-auto"
                max-width="28%"
              >
                <v-img :src="item.imageUrl" height="200px"></v-img>

                <v-card-title>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle>
                  {{ item.subtitle }}
                </v-card-subtitle>
              </v-card>
            </div>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section5">
        <v-col col="12" md="12" sm="12">
          <v-container>
            <p class="green-dark">Experiences</p>
            <h2>Life is all about Experiences, Isn't it?</h2>
            <div class="experience-box">
              <h4 class="mr-6">Capzow</h4>
              <p class="mt-4">SDE Intern</p>
              <v-spacer></v-spacer>
              <p class="mt-4">January 2024 - Current</p>
            </div>
            <v-img
              class="ma-3"
              src="../assets/images/Group-img.webp"
              alt="group image"
              max-height="auto"
              max-width="1024"
            ></v-img>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section6">
        <v-col col="12" md="12" sm="12">
          <v-container>
            <p class="green-light-bold">Let’s Connect</p>
            <h2 class="green-light-big">Hire me to code your Vision</h2>
          </v-container>
        </v-col>
      </v-row>
    </v-container-fluid>
  </v-main>
</template>

<script>
export default {
  name: "HomePage",
  data() {
    return {
      cardData1: [
        {
          imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
        },
        {
          imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
        },
        {
          imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
        },
      ],
      cardData2: [
        {
          imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
        },
        {
          imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
        },
        {
          imageUrl: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg",
          title: "Top western road trips",
          subtitle: "1,000 miles of wonder",
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  /* font-family: "Montserrat", sans-serif; */
}

.row {
  text-align: center;
}
.v-app-bar {
  height: 64px;
  margin: auto;
  transform: translateY(0px);
  left: 0px;
  right: 0px;
  align-items: center;
  max-width: 1024px;
  border-radius: 25px;
  backdrop-filter: saturate(100%) blur(10px);
  background-color: rgba(255, 255, 255, 0.6);
  background-color: rgba(191, 218, 158, 50%);
  border: 1px solid rgb(218, 220, 224) !important;
}

.action_btn {
  background: linear-gradient(90deg, #224433, #416b28 80%);
  color: white;
}
.main {
  background-color: #f2f2f2;
}
h4 {
  color: #244633;
  font-size: 1.5rem;
  font-weight: 600;
}
h2 {
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 2rem;
}
.section2,
.section3,
.section4,
.section5,
.section6 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
}
.section1 {
  position: relative;
  margin-top: 5rem;
  min-height: 25%;
}
.section1 .greetings {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0;
}
.section2 {
  border-radius: 5rem;
  background-color: #fff;
  padding: 7rem 0 3rem;
  min-height: 15%;
}
.profile-img {
  position: absolute;
  align-items: center;
  left: 50%;
  transform: translate(-50%, 40%);
}
.green-light {
  color: #3f682a;
}
.green-light-bold {
  color: #3f682a;
  font-size: 1.5rem;
  font-weight: 600;
}
.green-light-big {
  color: #3f682a;
  font-size: 3rem;
  font-weight: 600;
}
.green-dark {
  color: #244633;
  font-size: 1.3rem;
  font-weight: 600;
}
.section4 {
  background-color: #fff;
  border-bottom-left-radius: 5rem;
  border-bottom-right-radius: 5rem;
}
.links {
  color: black;
  margin-right: 2rem;
}
.cards {
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 2rem;
}
.experience-box {
  border-radius: 1rem;
  background: #fff;
  display: flex;
  align-items: center;
  padding: 0.5rem 2rem;
  margin: 3rem 5rem;
}
.teck-block img {
  margin: 1rem;
}
.teck-stack {
  margin: 3rem 0;
}
</style>
