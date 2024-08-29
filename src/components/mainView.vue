<template>
  <div class="flex justify-center m-8 mt-2">
    <div class="w-1/2 bg-base-100 m-4 p-2 card shadow-lg min-w-[410px]">
      <!-- PROFILE -->
      <div id="card1" class="card shadow-md border border-base-300 rounded-lg mb-2">
        <div class="p-4 flex">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQGALr_FxMFegg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1718227813790?e=1730332800&v=beta&t=TW1Lu8jE8zxRLHAOhLDNLow8ALkPAK0M-nLyB0ZxDq4"
            alt="profile"
            class="rounded-full w-24 h-24"
          />
          <div class="flex flex-col w-full items-baseline mt-2">
            <p class="font-medium text-xl ml-5 mt-2">{{ name }} (folk)</p>
            <!-- <p class="font-normal text-lg ml-5 mt-2">(folk)</p>
            <p class="font-normal text-lg ml-5 ">Age: 20</p> -->
            <div class="badge badge-primary color-change-2x font-bold my-3">
              Full Stack Developer
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="join join-vertical w-full shadow-md">
        <div
          @click="focusOn = 1"
          class="collapse collapse-arrow join-item border-base-300 border"
          :class="focusOn === 1 ? 'bg-base-200' : ''"
        >
          <input type="radio" name="my-accordion-4" checked="checked" />
          <!-- DETAILS -->
          <div class="collapse-title text-xl font-medium">Details</div>
          <div class="collapse-content">
            <div class="pb-3">
              <p class="font-medium">Address</p>
              <p>Samut Prakan</p>
              <p>Thailand</p>
            </div>
            <div class="pb-3">
              <p class="font-medium">Phone</p>
              <div class="flex justify-between">
                <p>{{ phone }}</p>
                <button
                  class="btn btn-xs"
                  :class="copyType === 1 ? 'btn-success' : ''"
                  @click="copy(phone, 1)"
                >
                  copy
                </button>
              </div>
            </div>
            <div class="pb-3">
              <p class="font-medium">Email</p>
              <div class="flex justify-between">
                <p>{{ email }}</p>
                <button
                  class="btn btn-xs"
                  :class="copyType === 2 ? 'btn-success' : ''"
                  @click="copy(email, 2)"
                >
                  copy
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- SKILLS -->
        <div
          @click="focusOn = 2"
          class="collapse collapse-arrow join-item border-base-300 border"
          :class="focusOn === 2 ? 'bg-base-200' : ''"
        >
          <input type="radio" name="my-accordion-4" />
          <div class="collapse-title text-xl font-medium">Skills</div>
          <div class="collapse-content">
            <div class="grid grid-cols-2 gap-3">
              <div
                v-for="skill in skills"
                :key="skill.name"
                class="card p-3 border border-base-content flex flex-row gap-4 items-center justify-center rounded-md"
              >
                <div class="font-bold text-xl">{{ skill.name }}</div>
                <v-icon
                  :name="skill.icon"
                  v-if="skill.icon"
                  class="scale-[2]"
                />
              </div>
            </div>
          </div>
        </div>
        <div
          @click="focusOn = 3"
          class="collapse collapse-arrow join-item border-base-300 border"
          :class="focusOn === 3 ? 'bg-base-200' : ''"
        >
          <input type="radio" name="my-accordion-4" />
          <div class="collapse-title text-xl font-medium">Languages</div>
          <div class="collapse-content">
            <div v-for="lang in Languages" :key="lang.name" class="card p-3">
              <div class="font-bold">{{ lang.name }}</div>
              <div class="">{{ lang.level }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const name = ref("Nathaphat Lertsiriphongphan");
const phone = ref("0858238236");
const email = ref("nathaphat.n07@gmail.com");
const copyType = ref(0);

const focusOn = ref(1);

const skills = ref([
  {
    name: "HTML",
    icon: "fa-html5",
  },
  {
    name: "CSS",
    icon: "fa-css3-alt",
  },
  {
    name: "JavaScript",
    icon: "co-javascript",
  },
  {
    name: "Git",
    icon: "bi-git",
  },
  {
    name: "Vue.js",
    icon: "fa-vuejs",
  },
  {
    name: "Java",
    icon: "la-java",
  },
  {
    name: "Node.js",
    icon: "fa-node-js",
  },
  {
    name: "SpringBoot",
    icon: "co-spring",
  },
  {
    name: "MySQL",
    icon: "co-mysql",
  },
  {
    name: "Docker",
    icon: "co-docker",
  },
]);

const Languages = ref([
  {
    name: "English",
    level: "Intermediate",
  },
  {
    name: "Thai",
    level: "Native",
  },
]);

const copy = (text, type) => {
  navigator.clipboard.writeText(text);
  copyType.value = type;
};
</script>

<style lang="css" scoped>
.color-change-2x {
	-webkit-animation: color-change-2x 2s linear infinite alternate both;
	        animation: color-change-2x 2s linear infinite alternate both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-8-27 22:31:0
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation color-change-2x
 * ----------------------------------------
 */
 @-webkit-keyframes color-change-2x {
  0% {
    background: #19dcea;
    border-color: #19dcea;
  }
  100% {
    background: #b22cff;
    border-color: #b22cff;
  }
}
@keyframes color-change-2x {
  0% {
    background: #19dcea;
    border-color: #19dcea;
  }
  100% {
    background: #b22cff;
    border-color: #b22cff;
  }
}
</style>
