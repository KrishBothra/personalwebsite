import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { block } from "million";
import NavBlock from "./Navbar";
import vpIMG from "./Assets/vp.jpg";
import hpIMG from "./Assets/hp.jpg";
import skIMG from "./Assets/sk.jpg";
import asIMG from "./Assets/as.jpg";
import kbIMG from "./Assets/kb.jpg";
import daIMG from "./Assets/da.png";



const info = [
  {
    img: hpIMG,
    name: "Haren Pylla",
    role: "Developer",
    link1: "https://instagram.com/haren_py11a?igshid=Y2I2MzMwZWM3ZA==",
    link2: "",
    link3: "https://github.com/harenPy11a",
  },
  {
    img: skIMG,
    name: "Sahil Khunt",
    role: "Developer",
    link1: "https://instagram.com/sahil_khunt08?igshid=OGQ5ZDc2ODk2ZA==",
    link2: "",
    link3: "https://github.com/SahilKhunt08",
  },
  {
    img: vpIMG,
    name: "Vedant Patel",
    role: "Developer",
    link1: "https://instagram.com/vedantp16?igshid=Y2I2MzMwZWM3ZA==",
    link2: "",
    link3: "https://github.com/vedantp1621",
  },
  {
    img: asIMG,
    name: "Avi Shah",
    role: "Client Relations",
    link1: "https://instagram.com/a.shah33?igshid=Y2I2MzMwZWM3ZA==",
    link2: "",
    link3: "",
  },
];

const AboutUsBlock = block(function AboutUs() {
  return (
    <div>

      <section id="aboutus" class="bg-[#9e9791]">
        {/* <NavBlock /> */}

        <div class="container px-6 pt-8 lg:pt-15 pb-12 lg:pb-32 mx-auto">
          <h1 class="text-4xl font-semibold text-center text-black capitalize lg:text-6xl">
            Checkout my Projects
          </h1>

          {/* <p class="max-w-2xl mx-auto my-6 text-center text-2xl text-black ">
            Our passionate and dedicated team exists to serve
            <span class="text-[#ffffff] font-bold"> You</span>
          </p> */}

          <div class="grid grid-cols-2 gap-4 lg:gap-8 mt-8 xl:mt-16 xl:gap-24 md:grid-cols-2 xl:grid-cols-3">
            <div class="flex flex-col items-center p-4 lg:p-8 transition-colors duration-300 transform cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#665d57] border-2 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                //src={hpIMG}  REPLACE WITH SS OF PROJECT
                alt=""
              ></img>

              <h1 class="mt-4 text-xl lg:text-2xl font-semibold text-black capitalize group-hover:text-white">
                2D Survival Game
              </h1>

              <p class="mt-2 text-gray-900 capitalize group-hover:text-gray-300">
                Java
              </p>

              <div class="flex mt-3 -mx-2">
                

                <a
                  href="https://github.com/KrishBothra/2D-Surival-Game"
                  class="mx-2 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div class="flex flex-col items-center p-4 lg:p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#665d57] border-2 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                //src={skIMG}
                alt=""
              ></img>

              <h1 class="mt-4 text-xl lg:text-2xl font-semibold text-black capitalize group-hover:text-white">
                Fling Animation
              </h1>

              <p class="mt-2 text-gray-900 capitalize group-hover:text-gray-300">
                Java/Android Studio
              </p>

              <div class="flex mt-3 -mx-2">
               

                <a
                  href="https://github.com/KrishBothra/Fling-Animation"
                  class="mx-2 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>

            <div class="flex flex-col items-center p-4 lg:p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#665d57] border-2 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                //src={vpIMG}
                alt=""
              ></img>

              <h1 class="mt-4 text-xl lg:text-2xl font-semibold text-black capitalize group-hover:text-white">
                Spotify API
              </h1>

              <p class="mt-2 text-gray-900 capitalize group-hover:text-gray-300">
                React/JavaScript
              </p>

              <div class="flex mt-3 -mx-2">
                

                <a
                  href="https://github.com/KrishBothra/Spotify-Api"
                  class="mx-2 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* KRISH */}
            <div class="flex flex-col items-center p-4 lg:p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#665d57] border-2 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                //src={kbIMG}
                alt=""
              ></img>

              <h1 class="mt-4 text-xl lg:text-2xl font-semibold text-black capitalize group-hover:text-white">
                MyServe
              </h1>

              <p class="mt-2 text-gray-900 capitalize group-hover:text-gray-300">
                Java/SQL Database
              </p>

              <div class="flex mt-3 -mx-2">
                

                <a
                  href="https://github.com/KrishBothra/MyServe"
                  class="mx-2 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
            {/* DANNIE */}
            <div class="flex flex-col items-center p-4 lg:p-8 transition-colors duration-300 transform border cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#665d57] border-2 dark:border-gray-700 dark:hover:border-transparent">
              <img
                class="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300"
                src={daIMG}
                alt=""
              ></img>

              <h1 class="mt-4 text-xl lg:text-2xl font-semibold text-black capitalize group-hover:text-white">
                Daniel Atanasov
              </h1>

              <p class="mt-2 text-gray-900 capitalize group-hover:text-gray-300">
                Developer
              </p>

              <div class="flex mt-3 -mx-2">
                <a
                  href="https://www.instagram.com/dannyaat/"
                  class="mx-2 text-gray-800 hover:text-gray-500 group-hover:text-white"
                >
                  <svg
                    class="h-7 w-7"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path stroke="none" d="M0 0h24v24H0z" />{" "}
                    <rect x="4" y="4" width="16" height="16" rx="4" />{" "}
                    <circle cx="12" cy="12" r="3" />{" "}
                    <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                  </svg>
                </a>

                <a
                  href="#n"
                  class="mx-2 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                >
                  <svg
                    class="h-6 w-6 "
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    {" "}
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />{" "}
                    <rect x="2" y="9" width="4" height="12" />{" "}
                    <circle cx="4" cy="4" r="2" />
                  </svg>{" "}
                </a>

                <a
                  href="https://github.com/Luminexz"
                  class="mx-2 text-gray-800 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white"
                >
                  <svg
                    class="w-6 h-6 fill-current"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12.026 2C7.13295 1.99937 2.96183 5.54799 2.17842 10.3779C1.395 15.2079 4.23061 19.893 8.87302 21.439C9.37302 21.529 9.55202 21.222 9.55202 20.958C9.55202 20.721 9.54402 20.093 9.54102 19.258C6.76602 19.858 6.18002 17.92 6.18002 17.92C5.99733 17.317 5.60459 16.7993 5.07302 16.461C4.17302 15.842 5.14202 15.856 5.14202 15.856C5.78269 15.9438 6.34657 16.3235 6.66902 16.884C6.94195 17.3803 7.40177 17.747 7.94632 17.9026C8.49087 18.0583 9.07503 17.99 9.56902 17.713C9.61544 17.207 9.84055 16.7341 10.204 16.379C7.99002 16.128 5.66202 15.272 5.66202 11.449C5.64973 10.4602 6.01691 9.5043 6.68802 8.778C6.38437 7.91731 6.42013 6.97325 6.78802 6.138C6.78802 6.138 7.62502 5.869 9.53002 7.159C11.1639 6.71101 12.8882 6.71101 14.522 7.159C16.428 5.868 17.264 6.138 17.264 6.138C17.6336 6.97286 17.6694 7.91757 17.364 8.778C18.0376 9.50423 18.4045 10.4626 18.388 11.453C18.388 15.286 16.058 16.128 13.836 16.375C14.3153 16.8651 14.5612 17.5373 14.511 18.221C14.511 19.555 14.499 20.631 14.499 20.958C14.499 21.225 14.677 21.535 15.186 21.437C19.8265 19.8884 22.6591 15.203 21.874 10.3743C21.089 5.54565 16.9181 1.99888 12.026 2Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export default AboutUsBlock;
