<template>
  <v-main class="">
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
            <h3>
              Hola amigos! <br />
              I’m Sandali Singh a techy &
            </h3>

            <v-img
              src="../assets/images/Group 6385.png"
              alt="image"
              max-height="630"
              max-width="630"
            ></v-img>
            <p>
              <a href="/">
                <v-btn rounded class="action_btn">
                  <span>Hire me! </span></v-btn
                > </a
              >&nbsp;&nbsp; &nbsp; Know more about me
              <v-icon small>mdi-arrow-right</v-icon>
            </p>
          </v-container>
        </v-col>
      </v-row>
      <v-row class="section2">
        <v-img
          src="../assets/images/Group 5803.png"
          alt=""
          max-height="1000"
          max-width="1000"
        ></v-img>
        <p>
          Welcome to my digital realm! I'm Sandali singh, a freshly minted MCA
          graduate, fueled by curiosity and driven by innovation,with a passion
          for full-stack development. Equipped with a solid foundation in
          computer science and hands-on experience in various programming
          languages and technologies, I am eager to embark on my journey as a
          full-stack developer. My academic background has honed my
          problem-solving skills and instilled in me a keen attention to detail,
          both of which are essential traits in the world of software
          development. With a strong desire to learn and grow in this dynamic
          field, I am excited to contribute my creativity and technical
          expertise to building innovative and user-friendly solutions. I am
          ready to embrace challenges, collaborate with like-minded
          professionals, and make a meaningful impact in the realm of
          technology."
        </p>

        <span>
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
      </v-row>
    </v-container-fluid>
  </v-main>
</template>

<script>
export default {
  name: "HomePage",

  components: {},
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  /* font-family: "Montserrat", sans-serif; */
}

.row {
  margin: 1rem auto;
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
h3 {
  font-size: 2rem;
  font-weight: 600;
  color: #252726;
}
.action_btn {
  background: linear-gradient(90deg, #224433, #416b28 80%);
  color: white;
}
.section1 {
  background-color: #f2f2f2;
}
.links {
  color: black;
  margin-right: 2rem;
}
</style>
