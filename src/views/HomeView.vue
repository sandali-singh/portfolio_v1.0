<template>
  <v-main class="main">
    <v-container-fluid>
      <v-snackbar v-model="snackbar" :timeout="4000" top color="grey">
        <span>Awesome! Your message was send</span>
        <v-btn text color="white" @click="snackbar = false">Close</v-btn>
      </v-snackbar>
      <v-app-bar class="px-2 mx-6 mt-5 mt-md-3 mx-md-auto">
        <v-toolbar-title>Sandali Singh</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-tabs>
          <v-tab
            ><a href="#about" @click="scrollToSection('#about')"
              >About</a
            ></v-tab
          >
          <v-tab
            ><a href="#teck" @click="scrollToSection('#teck')"
              >Technologies</a
            ></v-tab
          >
          <v-tab><a href="#projects">Project</a></v-tab>
          <v-tab><a href="#experience">Experience</a></v-tab>
        </v-tabs>
        <v-btn rounded class="action_btn">
          <span><a href="#connect">Hire me! </a></span></v-btn
        >
      </v-app-bar>
      <v-row class="section1" id="home">
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

      <v-row class="section2" id="about">
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

            <span class="mb-10 connect">
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
      <v-row class="section3" id="teck">
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
      <v-row class="section4" id="projects">
        <v-col col="12" md="12" sm="12">
          <v-container class="mt-15">
            <p class="green-dark">Projects</p>
            <h2>I Build Magical products (Like this Website)</h2>
            <div class="cards">
              <v-card
                v-for="(item, index) in cardData1"
                :key="index"
                class="mx-auto"
                max-width="300"
              >
                <v-img :src="item.imageUrl" height="180px" class="ma-2"></v-img>

                <v-card-title>
                  {{ item.title }}
                </v-card-title>

                <v-card-subtitle>
                  {{ item.subtitle }}
                  <a :href="item.url">
                    <v-icon small class="float-right"> mdi-arrow-right </v-icon>
                  </a>
                </v-card-subtitle>
              </v-card>
            </div>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section5" id="experience">
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
      <v-row class="section6" id="connect">
        <v-col col="12" md="12" sm="12">
          <v-container>
            <p class="green-light-bold">Let’s Connect</p>
            <h2 class="green-light-big">Hire me to code your Vision</h2>

            <v-form v-model="valid">
              <v-row>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="name"
                    :rules="nameRules"
                    label="Name"
                    placeholder="Your Name"
                    filled
                    rounded
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="Email Id"
                    placeholder="Your Email Id here"
                    filled
                    rounded
                    dense
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" md="8">
                  <v-textarea
                    v-model="message"
                    :rules="messageRules"
                    filled
                    name="input-7-4"
                    label="Message"
                    value=""
                    placeholder="Enter here"
                    required
                  ></v-textarea>
                </v-col>
              </v-row>
              <v-btn
                rounded
                :disabled="!valid"
                class="action_btn mr-4 white--text"
                @click="submit"
                :loading="loading"
              >
                Submit
              </v-btn>
            </v-form>
          </v-container>
        </v-col>
      </v-row>
    </v-container-fluid>
  </v-main>
</template>

<script>
import { addData } from "@/services/app.serviceAdd";

export default {
  name: "HomePage",
  data: () => ({
    valid: true,
    name: "",
    nameRules: [
      (v) => !!v || "Name is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    message: "",
    messageRules: [
      (v) => !!v || "message is required",
      (v) =>
        (v && v.length <= 200) || "message must be less than 200 characters",
    ],
    cardData1: [
      {
        imageUrl: require("../assets/images/react-app.webp"),
        title: "React-QuizApp",
        subtitle: "React.JavaScript.Html.Css",
        url: "https://github.com/sandali-singh/My-React-App",
      },
      {
        imageUrl: require("../assets/images/usepopcorn.webp"),
        title: "UsePopcorn",
        subtitle: "React.JavaScript.Html.Css",
        url: "https://github.com/sandali-singh/usePopcorn-",
      },
      {
        imageUrl: require("../assets/images/forkify.webp"),
        title: "Forkify-ReceipeApp",
        subtitle: "JavaScript.Html.Css.Bootstrap",
        url: "https://github.com/sandali-singh/Forkify-Recipe-application",
      },
      {
        imageUrl: require("../assets/images/ninja.webp"),
        title: "Todo-ninja",
        subtitle: "Vue.Js.Vuetify.JavaScript.Html",
        url: "https://ss-ninja.web.app/",
      },
      {
        imageUrl: require("../assets/images/atomic.webp"),
        title: "AtomicBlog",
        subtitle: "React.JavaScript.Html.Css",
        url: "https://ss-atomic-blog.web.app/",
      },
      {
        imageUrl: require("../assets/images/omnifood.webp"),
        title: "OmnifoodApp",
        subtitle: "JavaScript.Html.Css",
        url: "https://sandali-singh.github.io/omnifood-project/",
      },
    ],
  }),
  methods: {
    scrollToSection(sectionId) {
      document.querySelector(sectionId).scrollIntoView({ behavior: "smooth" });
    },
    submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        //console.log(this.title, this.content);
        const message = {
          name: this.name,
          email: this.email,
          message: this.message,
        };
        addData(message).then(() => {
          this.loading = false;
          this.dialog = false;
          this.$emit("messageAdded");
        });
      }
    },
  },
  // created() {
  //   onSnapshot(collection(db, "Databook"), (snapshot) => {
  //     snapshot.docChanges().forEach((change) => {
  //       if (change.type === "added") {
  //         this.projects.push({
  //           ...change.doc.data(),
  //           id: change.doc.id,
  //         });
  //       }
  //     });
  //   });
  // },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  /* font-family: "Montserrat", sans-serif; */
}
body {
  scroll-behavior: smooth;
}
.row {
  text-align: center;
}
a:link,
a:active {
  color: #000;
  font-size: 0.8rem;
}
a:visited {
  color: #000;
}
a {
  text-decoration: none;
}
.v-btn a:link,
.v-btn a:active {
  color: #fff;
  font-size: 0.8rem;
}
.v-btn a:visited {
  color: #fff;
}
.v-btn a {
  text-decoration: none;
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
p {
  font-weight: 500;
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
  margin: 2rem 0 0;
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
.connect a {
  margin: 0.5rem;
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
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 3rem;
}
.cards .v-card {
  border-radius: 1rem;
  background: #f2f2f2;
  margin: 1rem;
}
.cards .v-card__title {
  color: #244633;
}
.cards .v-card__subtitle {
  color: #000;
  text-align: left;
  font-weight: 500;
}
.cards .v-card__subtitle .v-icon {
  color: #244633;
  font-weight: 600;
}
.cards .v-image__image .v-image__image--contain {
  border-radius: 1rem;
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
form.v-form .row {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.theme--light.v-btn.v-btn--disabled {
  color: #fff;
}
</style>
