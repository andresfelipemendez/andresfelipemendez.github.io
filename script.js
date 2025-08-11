const projects = [
  {
    name: "Forge",
    description: "Custom C99 build tool that replaces CMake/Make, watches source files to compile engine libraries for hot-reloading, and generates game engine templates. Built to eliminate the repetitive setup work of starting new toy engines.",
    language: "C",
    stars: 0,
    url: "https://github.com/andresfelipemendez/zentropy-engine",
    image: "forge.png"
  },
  {
    name: "100 dungeons",
    description: "Zelda-inspired 3D dungeon game powered by a custom C++ engine with multi-level DLL hot-reloading, custom ECS, automated TOML-based entity serialization, and OpenGL 4.5 rendering. Features fastgltf asset loading, ImGui editor tools, and a build system written in C for rapid iteration.",
    language: "C++",
    stars: 3,
    url: "https://github.com/andresfelipemendez/zentropy-engine",
    image: "https://github.com/andresfelipemendez/100-Dungeons/blob/master/gifs/gizmo.gif?raw=true"
  },
  {
    name: "Anitra Engine",
    description: "Data-oriented C++20 game engine with modern OpenGL rendering, GLFW cross-platform support, ECS, and DLL hot reloading. Built for performance and flexibility with planned ImGui integration, glTF asset loading, and STB-based utilities.",
    language: "C++",
    stars: 4,
    url: "https://github.com/andresfelipemendez/anitra",
    image: "https://github.com/andresfelipemendez/anitra/raw/master/hotreloadingdemo.gif"
  },
  {
    name: "C DOD Engine Windows",
    description: "Direct3D 11 game engine in pure C, featuring DLL hot reloading, ECS with archetype-based memory layout, and a data-oriented design approach. Initially built for a Pong demo, designed for cross-platform potential.",
    language: "C",
    stars: 2,
    url: "https://github.com/andresfelipemendez/zentropy-engine",
    image: "https://github.com/andresfelipemendez/C-D3D11-Engine/raw/master/pong-c.gif"
  },
  {
    name: "Game Programming in C++: Data-Oriented Design Implementation",
    description: "Adaptation of examples from 'Game Programming in C++' with a modern data-oriented design approach, replacing outdated formats with GLTF, integrating ENTT ECS, and optimizing asset handling for current industry standards.",
    language: "C",
    stars: 1,
    url: "https://github.com/andresfelipemendez/zentropy-engine",
    image: "gameprogrammingincpp.jpg"
  },
]

async function loadProjects() {
  const container = document.getElementById('projects');
  if (!container) return; // Only run on projects page

  projects.forEach(project => {
    const card = document.createElement('article');
    card.className = "project-card";

    const image = document.createElement('img');
    image.src = project.image;
    image.alt = project.name;
    image.className = 'project-image';
    card.appendChild(image);

    const content = document.createElement('div');
    content.className = 'project-content';

    const title = document.createElement('h3');
    title.textContent = project.name;
    content.appendChild(title);

    const desc = document.createElement('p');
    desc.textContent = project.description;
    content.appendChild(desc);

    card.appendChild(content);
    container.appendChild(card);
  });

}

// Run the loader when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  loadProjects();
});