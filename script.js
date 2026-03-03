/*
  Simulación de tienda online de informática.
  Explicación general:
  1) Definimos productos con precio base en Quetzales.
  2) Renderizamos tarjetas de productos similares a la referencia visual.
  3) Gestionamos carrito (agregar, vaciar, total).
  4) Permitimos cambiar moneda GTQ <-> USD con conversión fija.
  5) Validamos datos de pago y generamos recibo PDF con jsPDF.
  6) Mostramos mensajes con SweetAlert2 y permitimos modo claro/oscuro.
*/

const products = [
  {
    id: 1,
    name: "TP-Link UB500 Nano Adaptador Bluetooth 5.0",
    priceGTQ: 53,
    oldPriceGTQ: 62,
    rating: "?????",
    reviews: 151,
    badge: "Entrega rápida",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Argom Adaptador HDMI a VGA 15cm Negro",
    priceGTQ: 30,
    oldPriceGTQ: 38.7,
    rating: "?????",
    reviews: 148,
    badge: "Entrega rápida",
    image:
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "eTouch Teclado Alámbrico KB-300 USB Español",
    priceGTQ: 37,
    oldPriceGTQ: null,
    rating: "?????",
    reviews: 70,
    badge: "Entrega rápida",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Espuma Limpiadora 20 Onzas eTouch",
    priceGTQ: 40,
    oldPriceGTQ: null,
    rating: "?????",
    reviews: 59,
    badge: "Entrega rápida",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    name: "Monitor Xiaomi A27i Full HD",
    priceGTQ: 1299,
    oldPriceGTQ: 1660,
    rating: "?????",
    reviews: 88,
    badge: "22% off",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    name: "Spray Alcohol Isopropílico en Aerosol",
    priceGTQ: 79,
    oldPriceGTQ: null,
    rating: "?????",
    reviews: 34,
    badge: "Limpieza",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    name: "Monitor Xiaomi A24i Full HD",
    priceGTQ: 999,
    oldPriceGTQ: 1135,
    rating: "?????",
    reviews: 64,
    badge: "12% off",
    image:
      "https://images.unsplash.com/photo-1546538915-a9e2c8d50e43?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    name: "TP-Link Archer T2UB Nano AC600",
    priceGTQ: 139,
    oldPriceGTQ: 220,
    rating: "?????",
    reviews: 95,
    badge: "37% off",
    image:
      "https://images.unsplash.com/photo-1593640495392-5bfc4dd15313?auto=format&fit=crop&w=600&q=80"
  }
];

const EXCHANGE_RATE = 7.8;
let currency = localStorage.getItem("currency") || "GTQ";
let cart = [];

const productsContainer = document.getElementById("productsContainer");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const currencySelect = document.getElementById("currencySelect");
const clearCartBtn = document.getElementById("clearCartBtn");
const checkoutBtn = document.getElementById("checkoutBtn");
const paymentForm = document.getElementById("paymentForm");
const themeToggle = document.getElementById("themeToggle");

const cardName = document.getElementById("cardName");
const cardNumber = document.getElementById("cardNumber");
const cardExpiry = document.getElementById("cardExpiry");
const cardCvv = document.getElementById("cardCvv");

currencySelect.value = currency;

/* Formatea cualquier valor desde GTQ a la moneda actual seleccionada */
function formatPriceFromGTQ(amountGTQ) {
  if (currency === "USD") {
    return `$${(amountGTQ / EXCHANGE_RATE).toFixed(2)}`;
  }
  return `Q${amountGTQ.toFixed(2)}`;
}

/* Renderiza el catálogo completo de productos */
function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";

    card.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <div class="product-body">
        <div class="product-title">${product.name}</div>
        <div class="product-meta">${product.rating} ${product.reviews} opiniones</div>
        <div class="price-line">
          <span class="price-current">${formatPriceFromGTQ(product.priceGTQ)}</span>
          ${product.oldPriceGTQ ? `<span class="price-old">${formatPriceFromGTQ(product.oldPriceGTQ)}</span>` : ""}
        </div>
        <span class="badge">${product.badge}</span>
        <button class="btn btn-add" data-id="${product.id}">Agregar al carrito</button>
      </div>
    `;

    productsContainer.appendChild(card);
  });

  document.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = Number(btn.dataset.id);
      addToCart(id);
    });
  });
}

/* Agrega un producto al carrito y suma cantidad si ya existe */
function addToCart(productId) {
  const found = cart.find((item) => item.id === productId);

  if (found) {
    found.qty += 1;
  } else {
    const product = products.find((item) => item.id === productId);
    cart.push({ id: product.id, name: product.name, priceGTQ: product.priceGTQ, qty: 1 });
  }

  renderCart();

  Swal.fire({
    icon: "success",
    title: "Producto agregado",
    text: "Se agregó correctamente al carrito",
    timer: 1200,
    showConfirmButton: false
  });
}

/* Dibuja el carrito con totales por línea y total general */
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Tu carrito está vacío";
    cartItems.appendChild(li);
    cartTotal.textContent = formatPriceFromGTQ(0);
    return;
  }

  let totalGTQ = 0;

  cart.forEach((item) => {
    totalGTQ += item.priceGTQ * item.qty;

    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <strong>${formatPriceFromGTQ(item.priceGTQ * item.qty)}</strong>
    `;
    cartItems.appendChild(li);
  });

  cartTotal.textContent = formatPriceFromGTQ(totalGTQ);
}

/* Limpia el carrito luego de confirmar en una alerta */
async function clearCart() {
  if (cart.length === 0) {
    Swal.fire("Sin productos", "El carrito ya está vacío", "info");
    return;
  }

  const result = await Swal.fire({
    title: "¿Vaciar carrito?",
    text: "Esta acción quitará todos los productos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, vaciar",
    cancelButtonText: "Cancelar"
  });

  if (result.isConfirmed) {
    cart = [];
    renderCart();
    Swal.fire("Listo", "Se vació el carrito", "success");
  }
}

/* Extrae el total en GTQ sin importar la moneda visible */
function getCartTotalGTQ() {
  return cart.reduce((acc, item) => acc + item.priceGTQ * item.qty, 0);
}

/* Validaciones simples de tarjeta para la simulación de pago */
function validatePaymentData() {
  const name = cardName.value.trim();
  const number = cardNumber.value.replace(/\s/g, "");
  const expiry = cardExpiry.value.trim();
  const cvv = cardCvv.value.trim();

  if (name.length < 4) {
    return "Ingresa un nombre válido";
  }

  if (!/^\d{16}$/.test(number)) {
    return "La tarjeta debe tener 16 dígitos";
  }

  if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry)) {
    return "La fecha debe estar en formato MM/AA";
  }

  if (!/^\d{3,4}$/.test(cvv)) {
    return "El CVV debe tener 3 o 4 dígitos";
  }

  const [monthStr, yearStr] = expiry.split("/");
  const month = Number(monthStr);
  const year = 2000 + Number(yearStr);
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return "La tarjeta está vencida";
  }

  return null;
}

/* Genera un recibo PDF con productos, totales y moneda seleccionada */
function generatePdfReceipt() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const today = new Date();

  doc.setFontSize(16);
  doc.text("Recibo de compra - Tienda Informática GT", 14, 15);

  doc.setFontSize(11);
  doc.text(`Fecha: ${today.toLocaleString("es-GT")}`, 14, 24);
  doc.text(`Moneda visible: ${currency}`, 14, 31);
  doc.text(`Tipo de cambio usado: 1 USD = Q${EXCHANGE_RATE}`, 14, 38);

  let y = 48;
  doc.text("Detalle:", 14, y);
  y += 8;

  cart.forEach((item, index) => {
    const line = `${index + 1}. ${item.name} x${item.qty} - ${formatPriceFromGTQ(item.priceGTQ * item.qty)}`;
    doc.text(line, 14, y);
    y += 7;
  });

  y += 4;
  const totalGTQ = getCartTotalGTQ();
  const totalUSD = totalGTQ / EXCHANGE_RATE;

  doc.text(`Total GTQ: Q${totalGTQ.toFixed(2)}`, 14, y);
  y += 7;
  doc.text(`Total USD: $${totalUSD.toFixed(2)}`, 14, y);

  doc.save("recibo_tienda_informatica.pdf");
}

/* Evento de pago: valida, simula cobro y genera PDF */
paymentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    Swal.fire("Carrito vacío", "Agrega productos antes de pagar", "info");
    return;
  }

  const validationError = validatePaymentData();
  if (validationError) {
    Swal.fire("Error en pago", validationError, "error");
    return;
  }

  const totalText = cartTotal.textContent;

  const result = await Swal.fire({
    title: "Confirmar compra",
    text: `Total a pagar: ${totalText}`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Confirmar pago",
    cancelButtonText: "Cancelar"
  });

  if (!result.isConfirmed) {
    return;
  }

  generatePdfReceipt();

  Swal.fire("Pago exitoso", "Se validó el pago y se generó el recibo PDF", "success");

  paymentForm.reset();
  cart = [];
  renderCart();
});

/* Botones de acciones principales */
clearCartBtn.addEventListener("click", clearCart);
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    Swal.fire("Carrito vacío", "Agrega productos antes de pagar", "info");
    return;
  }

  cardName.focus();
  Swal.fire({
    icon: "info",
    title: "Completa los datos",
    text: "Llena el formulario de pago para finalizar la compra"
  });
});

/* Cambio de moneda en caliente y persistencia local */
currencySelect.addEventListener("change", () => {
  currency = currencySelect.value;
  localStorage.setItem("currency", currency);
  renderProducts();
  renderCart();
});

/* Autoformato básico de inputs para mejorar experiencia */
cardNumber.addEventListener("input", () => {
  const clean = cardNumber.value.replace(/\D/g, "").slice(0, 16);
  cardNumber.value = clean.replace(/(.{4})/g, "$1 ").trim();
});

cardExpiry.addEventListener("input", () => {
  const clean = cardExpiry.value.replace(/\D/g, "").slice(0, 4);
  if (clean.length >= 3) {
    cardExpiry.value = `${clean.slice(0, 2)}/${clean.slice(2)}`;
  } else {
    cardExpiry.value = clean;
  }
});

cardCvv.addEventListener("input", () => {
  cardCvv.value = cardCvv.value.replace(/\D/g, "").slice(0, 4);
});

/* Modo claro/oscuro con persistencia */
const savedTheme = localStorage.getItem("theme") || "light";
if (savedTheme === "dark") {
  document.body.classList.add("dark");
  themeToggle.checked = true;
}

themeToggle.addEventListener("change", () => {
  const isDark = themeToggle.checked;
  document.body.classList.toggle("dark", isDark);
  localStorage.setItem("theme", isDark ? "dark" : "light");
});

/* Inicialización de la aplicación */
renderProducts();
renderCart();