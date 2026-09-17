const defaultApps = [
  {
    id: 1,
    name: "Dream Home",
    developer: "Pauverse",
    type: "Juego",
    category: "Construcción y decoración",
    description: "Diseña tu propia casa y crea el hogar de tus sueños.",
    rating: 9.4,
    size: "50 MB",
    icon: "🏡"
  },
  {
    id: 2,
    name: "Pet Life",
    developer: "NuviaDev",
    type: "Juego",
    category: "Animales y mascotas",
    description: "Cuida mascotas, juega con ellas y descubre nuevas aventuras.",
    rating: 9.1,
    size: "72 MB",
    icon: "🐶"
  },
  {
    id: 3,
    name: "Fashion World",
    developer: "LunaStudio",
    type: "Juego",
    category: "Moda y diseño",
    description: "Crea looks, combina prendas y diseña tu propio estilo.",
    rating: 9.6,
    size: "84 MB",
    icon: "👗"
  },
  {
    id: 4,
    name: "Nuvia Notes",
    developer: "NuviaTeam",
    type: "Aplicación",
    category: "Productividad",
    description: "Organiza tus ideas, tareas y notas fácilmente.",
    rating: 9.3,
    size: "25 MB",
    icon: "📝"
  },
  {
    id: 5,
    name: "Nuvia Art",
    developer: "CreativeLab",
    type: "Aplicación",
    category: "Arte",
    description: "Un espacio creativo para dibujar y expresar tus ideas.",
    rating: 8.9,
    size: "40 MB",
    icon: "🎨"
  },
  {
    id: 6,
    name: "Music Garden",
    developer: "DreamStudio",
    type: "Juego",
    category: "Música",
    description: "Explora un jardín mágico lleno de música y ritmo.",
    rating: 9.0,
    size: "63 MB",
    icon: "🎵"
  }
];

const categories = [
  ["🎮", "Simulación"],
  ["🧠", "Habilidad mental"],
  ["🗺️", "Aventura"],
  ["📚", "Educación"],
  ["🎵", "Música"],
  ["🎨", "Arte"],
  ["💄", "Belleza"],
  ["🛍️", "Compras"],
  ["🐾", "Animales y mascotas"],
  ["🌱", "Naturaleza y jardinería"],
  ["👗", "Moda y diseño"],
  ["🏠", "Construcción y decoración"],
  ["💬", "Social"],
  ["🧸", "Casual / minijuegos"],
  ["👨‍👩‍👧", "Familiar"],
  ["👥", "Multijugador"],
  ["📖", "Narrativa / historias"],
  ["📷", "Fotografía"],
  ["💻", "Programación"],
  ["♟️", "Juegos de cartas/mesa"],
  ["🏃", "Fitness"],
  ["🔬", "Ciencia"],
  ["✈️", "Geografía y viajes"],
  ["🚀", "Ciencia ficción"],
  ["🧚", "Fantasía"],
  ["📱", "Tecnología"],
  ["🧒", "Infantil"],
  ["📋", "Productividad"]
];

let publishedApps = JSON.parse(
  localStorage.getItem("nuviaPublishedApps") || "[]"
);

let favorites = JSON.parse(
  localStorage.getItem("nuviaFavorites") || "[]"
);

let downloads = JSON.parse(
  localStorage.getItem("nuviaDownloads") || "[]"
);

function allApps() {
  return [...defaultApps, ...publishedApps];
}

function saveData() {
  localStorage.setItem(
    "nuviaPublishedApps",
    JSON.stringify(publishedApps)
  );

  localStorage.setItem(
    "nuviaFavorites",
    JSON.stringify(favorites)
  );

  localStorage.setItem(
    "nuviaDownloads",
    JSON.stringify(downloads)
  );
}

function escapeHTML(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll 
