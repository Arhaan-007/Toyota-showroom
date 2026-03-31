// ===== VIDEO PART =====
const videos = ["video1.mp4", "video2.mp4", "video3.mp4"];

let current = 0;
const video = document.getElementById("heroVideo");

if (video) {
    video.src = videos[current];

    video.addEventListener("ended", () => {
        current++;
        if (current >= videos.length) current = 0;
        video.src = videos[current];
    });
}


// ===== CARS PART =====
const cars = [
{name:"Toyota Agya", price:"₹6L", img:"images/agya.jpeg"},
{name:"Toyota Alphard", price:"₹1Cr", img:"images/alphard.jpeg"},
{name:"Toyota Avalon", price:"₹40L", img:"images/avalon.jpeg"},
{name:"Toyota Avanza", price:"₹12L", img:"images/avanza.jpeg"},
{name:"Toyota Belta", price:"₹9L", img:"images/belta.jpeg"},
{name:"Toyota Camry", price:"₹45L", img:"images/camry.jpg"},

{name:"Toyota Corolla", price:"₹20L", img:"images/corolla.jpeg"},
{name:"Toyota Crown", price:"₹50L", img:"images/crown.jpeg"},
{name:"Toyota Etios", price:"₹8L", img:"images/etios.jpeg"},
{name:"Toyota Fortuner", price:"₹33L", img:"images/fortuner.jpg"},
{name:"Toyota Glanza", price:"₹7L", img:"images/glanza.jpeg"},
{name:"Toyota GR86", price:"₹40L", img:"images/gr86.jpeg"},

{name:"Toyota Harrier", price:"₹25L", img:"images/harrier.jpeg"},
{name:"Toyota Hilux", price:"₹30L", img:"images/hilux.jpg"},
{name:"Toyota Hilux GR", price:"₹40L", img:"images/hilux GR.jpeg"},
{name:"Toyota Innova", price:"₹19L", img:"images/innova.jpg"},
{name:"Toyota Land Cruiser", price:"₹2Cr", img:"images/landcruiser.jpeg"},
{name:"Toyota Prius", price:"₹45L", img:"images/prius.jpeg"},

{name:"Toyota Raize", price:"₹9L", img:"images/raize.jpeg"},
{name:"Toyota Rumion", price:"₹10L", img:"images/rumion.jpeg"},
{name:"Toyota Rush", price:"₹12L", img:"images/rush.jpeg"},
{name:"Toyota Sequoia", price:"₹70L", img:"images/sequoia.jpeg"},
{name:"Toyota Sienta", price:"₹18L", img:"images/sienta.jpeg"},
{name:"Toyota Supra", price:"₹85L", img:"images/supra.jpeg"},

{name:"Toyota Tacoma", price:"₹35L", img:"images/tacoma.jpeg"},
{name:"Toyota Tundra", price:"₹55L", img:"images/tundra.jpeg"},
{name:"Toyota Urban Cruiser", price:"₹10L", img:"images/urban cruiser.jpeg"},
{name:"Toyota Vellfire", price:"₹90L", img:"images/vellfire.jpeg"},
{name:"Toyota Wigo", price:"₹5L", img:"images/wigo.jpeg"},
{name:"Toyota Yaris", price:"₹10L", img:"images/yaris.jpeg"}
];

const container = document.getElementById("cars-container");

if (container) {
    cars.forEach(car => {
        container.innerHTML += `
<div class="car-card" onclick='openModal({
  name: "${car.name}",
  price: "${car.price}",
  img: "${car.img}",
  mileage: "15 km/l",
  engine: "2.0L Petrol",
  suspension: "Standard"
})'>

                <div class="car-image">
                    <img src="${car.img}">
                </div>

                <h3>${car.name}</h3>
                <p>${car.price}</p>

            </div>
        `;
    });
}

window.addEventListener("scroll", () => {
    const nav = document.querySelector(".navbar");

    if (window.scrollY > 50) {
        nav.style.background = "rgba(0,0,0,0.7)";
    } else {
        nav.style.background = "rgba(0,0,0,0.4)";
    }
});

const modal = document.getElementById("carModal");
const closeBtn = document.querySelector(".close");

function openModal(car) {
  document.getElementById("carName").innerText = car.name;
  document.getElementById("carPrice").innerText = "Price: " + car.price;
  document.getElementById("carMileage").innerText = "Mileage: " + car.mileage;
  document.getElementById("carEngine").innerText = "Engine: " + car.engine;
  document.getElementById("carSuspension").innerText = "Suspension: " + car.suspension;

  // 🔥 
  document.getElementById("carImg").src = car.img;

  modal.style.display = "block";
}

closeBtn.onclick = () => {
  modal.style.display = "none";
};

window.onclick = (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
};

window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");

  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;

    if (sectionTop < window.innerHeight - 100) {
      section.classList.add("show");
    }
  });
});

window.addEventListener("scroll", () => {
  const cards = document.querySelectorAll(".car-card");

  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if (cardTop < window.innerHeight - 80) {
      card.classList.add("show");
    }
  });
});

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('success') === '1') {
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}

window.addEventListener("load", function () {
    const video = document.getElementById("heroVideo");

    if (video) {
        video.play().catch(() => {
            // fallback if autoplay blocked
            document.addEventListener("click", () => {
                video.play();
            });
        });
    }
});

document.getElementById("bookingForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.querySelector('[name="name"]').value;
    const email = document.querySelector('[name="email"]').value;
    const phone = document.querySelector('[name="phone"]').value;
    const car = document.querySelector('[name="car"]').value;
    const date = document.querySelector('[name="date"]').value;
    const message = document.querySelector('[name="message"]').value;

    const text = `🚗 New Car Booking

👤 Name: ${name}
📧 Email: ${email}
📱 Phone: ${phone}
🚘 Car: ${car}
📅 Date: ${date}
📝 Message: ${message}`;

    const whatsappURL = `https://wa.me/918000368902?text=${encodeURIComponent(text)}`;

    window.open(whatsappURL, "_blank");
});

