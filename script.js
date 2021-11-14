import { createApp } from "https://unpkg.com/petite-vue?module";

const projects = [
  {
    name: "Weather",
    repo: "https://github.com/derinasir/weather",
    website: "https://derinasir.github.io/weather/",
  },
  {
    name: "React Todo",
    repo: "https://github.com/derinasir/react-todo",
    website: "https://derinasir.github.io/react-todo/",
  },
];

createApp({
  projects,
}).mount("#projects");
