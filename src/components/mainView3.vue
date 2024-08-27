<template>
  <div class="flex justify-center mt-2 m-8 pb-12">
    <div
      class="w-1/2 card bg-base-100 border-base-300 m-4 rounded-lg pb-8 shadow-lg min-w-[410px] overflow-y-auto"
    >
      <div class="px-10 py-5 border-base-300">
        <p class="font-medium pb-3">Password Generator Application</p>
        <p class="font-light">
          &nbsp;&nbsp;&nbsp;&nbsp; The Password Generator is a web application
          designed to create secure passwords and evaluate the strength of
          user-provided passwords. Users can generate customized passwords based
          on specific criteria and receive instant feedback on password
          strength, with recommendations for improvement. This tool is essential
          for ensuring robust security practices.
        </p>
      </div>
      <div class="px-10 border-base-300">
        <p class="font-medium">Application Details</p>
        <div class="mt-3">
          <p class="font-light">Functions / Features</p>
          <ul class="font-light list-disc pl-5 pt-2">
            <li>
              Customizable Password Generation: Users can define specific
              parameters, such as length and character composition, to produce
              highly secure passwords.
            </li>
            <li>
              Advanced Password Strength Analysis: The application delivers
              immediate feedback on password strength, with clear suggestions
              for fortifying weak passwords.
            </li>
            <li>
              Intuitive User Interface: The design emphasizes ease of use,
              ensuring an efficient and straightforward user experience.
            </li>
          </ul>
          <div class="card card-bordered shadow-md mt-2">
            <!-- start carousel -->
            <div class="carousel carousel-vertical rounded-box h-[400px]">
              <div class="carousel-item">
                <img :src="pwg1" />
              </div>
              <div class="carousel-item">
                <img :src="pwg2" />
              </div>
              <div class="carousel-item">
                <img :src="pwg3" />
              </div>
              <div class="carousel-item">
                <img :src="pwg4" />
              </div>
              <div class="carousel-item">
                <img :src="pwg5" />
              </div>
            </div>
            <!-- end carousel -->
          </div>
          <div
            class="border border-color-change border-base-300 px-3 pb-2 mt-4 rounded-md"
          >
            <a
              href="https://int203-project-password-secure.vercel.app"
              target="_blank"
            >
              <div class="flex justify-between items-center">
                <div class="mt-3">
                  <p class="font-medium">Password Generator Web Application</p>
                  <p class="text-sm text-gray-600">published on Vercel</p>
                </div>
                <v-icon class="" name="fa-external-link-alt" />
              </div>
            </a>
          </div>
        </div>
        <div class="divider"></div>
      </div>
      <div class="px-10 py-5 border-base-300">
        <p class="font-medium pb-3">Markable Application (Markdown Parser)</p>
        <p class="font-light">
          &nbsp;&nbsp;&nbsp;&nbsp; The Markable is a web application
          designed to convert Markdown syntax into HTML. It provides a seamless
          way to preview and render Markdown content in real-time, ensuring
          accurate formatting and structure. The application supports all
          standard Markdown features, making it a valuable tool for users who
          need to generate clean, HTML-ready content quickly and efficiently.
        </p>
      </div>
      <div class="px-10 border-base-300">
        <p class="font-medium">Application Details</p>
        <div class="mt-3">
          <p class="font-light">Functions / Features</p>
          <ul class="font-light list-disc pl-5 pt-2">
            <li>
                Real-Time Preview: Instant rendering of Markdown content into HTML as you type.
            </li>
            <li>
                Full Markdown Support: Handles all standard Markdown syntax, including headings, lists, links, images, and more.
            </li>
            <li>
                User-Friendly Interface: Intuitive design for easy Markdown editing and viewing.
            </li>
            <li>
                Responsive Design: Optimized for use on various devices, ensuring accessibility and ease of use.
            </li>
          </ul>
          <div class="card card-bordered shadow-md mt-2">
            <!-- start carousel -->
            <div class="carousel carousel-vertical rounded-box h-[400px]">
              <div class="carousel-item">
                <img :src="md1" />
              </div>
              <div class="carousel-item">
                <img :src="md2" />
              </div>
              <div class="carousel-item flex justify-center">
                <img :src="md3" />
              </div>
              <div class="carousel-item flex justify-center">
                <img :src="md4" />
              </div>
            </div>
            <!-- end carousel -->
          </div>
          <div
            class="border-color-change border border-base-300 px-3 pb-2 mt-4 rounded-md"
          >
            <a
              href="https://project-2-sec-1-markdown-parser.vercel.app"
              target="_blank"
            >
              <div class="flex justify-between items-center">
                <div class="mt-3">
                  <p class="font-medium">Markable Web Application</p>
                  <p class="text-sm text-gray-600">published on Vercel</p>
                </div>
                <v-icon class="" name="fa-external-link-alt" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import pwg1 from "/src/images/pwg1.png";
import pwg2 from "/src/images/pwg2.png";
import pwg3 from "/src/images/pwg3.png";
import pwg4 from "/src/images/pwg4.png";
import pwg5 from "/src/images/pwg5.png";
import md1 from "/src/images/md1.png";
import md2 from "/src/images/md2.png";
import md3 from "/src/images/md3.png";
import md4 from "/src/images/md4.png";
</script>

<style lang="css" scoped>
.border-color-change:hover {
  -webkit-animation: color-change-3x 2s linear infinite alternate both;
	        animation: color-change-3x 2s linear infinite alternate both;
}

a:hover{
  -webkit-animation: color-change-3x 2s linear infinite alternate both;
	        animation: color-change-3x 2s linear infinite alternate both;
}

/* ----------------------------------------------
 * Generated by Animista on 2024-8-28 3:17:43
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation color-change-3x
 * ----------------------------------------
 */
 @-webkit-keyframes color-change-3x {
  0% {
    color: #19dcea;
    border-color: #19dcea;
  }
  50% {
    color: #b22cff;
    border-color: #b22cff;
  }
  100% {
    color: #ea2222;
    border-color: #ea2222;
  }
}
@keyframes color-change-3x {
  0% {
    color: #19dcea;
    border-color: #19dcea;
  }
  50% {
    color: #b22cff;
    border-color: #b22cff;
  }
  100% {
    color: #ea2222;
    border-color: #ea2222;
  }
}
</style>
