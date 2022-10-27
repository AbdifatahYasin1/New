const header = document.querySelector(".header");
// const section = document.querySelector(".Section-1");
// document.section.append(header);

//hanburger menu in js
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((navLink) =>
  navLink.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

const cardContainer = document.querySelector(".cardContainer");

const Infomation = [
  {
    images: "./images/speaker-1.png",
    Name: "Prof. Dieter Bimberg",
    title:
      'Bimberg Chinese-German Center for Green Photonics" CIOMP of CAS, China and Center for NanoPhotonics TU Berlin, Germany H-index-113',
    bio: "Dieter Bimberg received the Ph.D. magna cum laude from Goethe University, Frankfurt, Germany.",
  },
  {
    images: "./images/speaker-2.png",
    Name: "Prof. Arben Merkoçi",
    title:
      "Catalan Institute of Nanoscience and Nanotechnology, Spain H-index-86",
    bio: "Arben Merkoçi is ICREA Research Professor and leader of the ICN2 Nanobioelectronics and Biosensors Group. Prof.Merkoçi obtained his PhD at the University of Tirana (Albania) in ion selective electrodes",
  },
  {
    images: "./images/speaker-3.png",
    Name: "Prof. Sandra Pinelas",
    title:
      "Department of Exact Sciences and Engineering, Military schoolPortugal",
    bio: "Sandra Pinelas Education and academic qualifications Ph.D., in 2007, in Mathematical Analysis at the Azores University MSc, in 1997, in Mathematic at the Évora University Graduation, in 1995, in Mathematical Analysis at the Évora University",
  },
  {
    images: "./images/speaker4.png",
    Name: "Prof. Dumitru Baleanu",
    title: "Magurele-Bucharest Romania",
    bio: "Dumitru Baleanu is a Professor at the Institute of Space Sciences, Magurele-Bucharest, Romania and a visiting staff member at the Department of Mathematics,Cankaya University, Ankara, Turkey.",
  },
  {
    images: "./images/speaker5.png",
    Name: "Prof. Xiaohui Frank Zhang",
    title: "University of Massachusetts Amherst USA",
    bio: "Prof. Xiaohui “Frank” Zhang received his doctorate in Physiology and Biophysics from the University of Miami School of Medicine, and completed his postdoctoral training in biophysics at Harvard Medical School.",
  },
  {
    images: "./images/speaker6.png",
    Name: "Prof. Ilaria Cacciotti",
    title: "University of Niccolò Cusano Italy",
    bio: 'Prof. Dr. Ilaria Cacciotti is Full Professor of Biomaterials & Tissue Engineering and Materials Science and Technology at University of Rome "Niccolò Cusano", with consolidated expertise in the synthesis.',
  },
];

function createSpeaker(item) {
  const Professor = document.createElement("div");
  Professor.className = "speaker";
  Professor.innerHTML = `<div class="image">
        <img class="P-image" src="${item.images}" alt="">
        </div>
        <div class="speaker-details">
            <h3>${item.Name}</h3>
            <em>${item.title}</em>
            <hr>
            <p class="speakers-p">${item.bio}</p>
        </div>
  `;
  cardContainer.appendChild(Professor);
}

Infomation.forEach((item) => {
  createSpeaker(item);
});
