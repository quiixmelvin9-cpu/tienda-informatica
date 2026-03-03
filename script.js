/*
  Simulacion de tienda online de informatica.
  Flujo principal:
  1) Render del catalogo con precios base en GTQ.
  2) Al presionar un producto se abre ficha detallada con caracteristicas.
  3) Carrito: agregar, total, vaciar y cambio de moneda GTQ/USD.
  4) Pago: validacion de tarjeta y generacion de recibo en PDF.
  5) Alertas con SweetAlert2 y modo claro/oscuro con persistencia.
*/

const products = [
  {
    id: 1,
    name: "TP-Link UB500 Nano Adaptador Bluetooth 5.0",
    sku: "UB500-NANO",
    priceGTQ: 53,
    oldPriceGTQ: 62,
    score: 4.8,
    reviews: 151,
    badge: "Entrega rapida",
    image:
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Recibe entre hoy y manana. Envio GRATIS en Ciudad de Guatemala.",
    deliveryPickup: "Recoge hoy en punto de entrega. Retiro sin costo.",
    features: [
      "Bluetooth 5.0 con menor consumo de energia",
      "Compatible con Windows 11/10/8.1/7",
      "Tamano nano para uso permanente en laptop",
      "Alcance estable para periferiacos inalambricos"
    ]
  },
  {
    id: 2,
    name: "Argom Adaptador HDMI a VGA 15cm Negro",
    sku: "ARG-HDMI-VGA",
    priceGTQ: 30,
    oldPriceGTQ: 38.7,
    score: 4.4,
    reviews: 148,
    badge: "Entrega rapida",
    image:
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega rapida en 24 horas dentro de la capital.",
    deliveryPickup: "Disponible para retiro inmediato en tienda.",
    features: [
      "Convierte salida HDMI a monitor/proyector VGA",
      "Cable corto de 15 cm para mejor movilidad",
      "Resolucion de hasta 1080p Full HD",
      "Plug and play, no requiere drivers"
    ]
  },
  {
    id: 3,
    name: "eTouch Teclado Alambrico KB-300 USB Espanol",
    sku: "ET-KB300-ES",
    priceGTQ: 37,
    oldPriceGTQ: null,
    score: 4.2,
    reviews: 70,
    badge: "Entrega rapida",
    image:
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega a domicilio al siguiente dia habil.",
    deliveryPickup: "Retiro en oficina zona 13 sin costo.",
    features: [
      "Distribucion en espanol con tecla N",
      "Conexion USB de instalacion inmediata",
      "Diseno resistente para uso diario",
      "Perfil comodo para oficina y estudio"
    ]
  },
  {
    id: 4,
    name: "Espuma Limpiadora 20 Onzas eTouch",
    sku: "ET-FOAM-20OZ",
    priceGTQ: 40,
    oldPriceGTQ: null,
    score: 4.3,
    reviews: 59,
    badge: "Entrega rapida",
    image:
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617957743096-4f96fd865976?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616628188859-7a11abb6fcc9?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega rapida en 2 horas en areas cercanas.",
    deliveryPickup: "Disponible para retiro inmediato.",
    features: [
      "Limpia pantallas, teclados y superficies plasticas",
      "Formula de secado rapido sin residuos",
      "Presentacion de 20 onzas para mayor rendimiento",
      "Ideal para mantenimiento preventivo"
    ]
  },
  {
    id: 5,
    name: "Monitor Xiaomi A27i Full HD",
    sku: "XIA-A27I-FHD",
    priceGTQ: 1299,
    oldPriceGTQ: 1660,
    score: 4.9,
    reviews: 88,
    badge: "22% off",
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546538915-a9e2c8d50e43?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80&sat=-20"
    ],
    deliveryHome: "Entrega en 24 horas con envio GRATIS en la capital.",
    deliveryPickup: "Retiro el mismo dia en oficina central.",
    features: [
      "Pantalla de 27 pulgadas Full HD",
      "Panel con gran angulo de vision",
      "Diseno delgado con marcos reducidos",
      "Ideal para productividad y entretenimiento"
    ]
  },
  {
    id: 6,
    name: "Spray Alcohol Isopropilico en Aerosol",
    sku: "SPR-ISO-450",
    priceGTQ: 79,
    oldPriceGTQ: null,
    score: 4.1,
    reviews: 34,
    badge: "Limpieza",
    image:
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1583947215259-38e31be8751f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1617957743096-4f96fd865976?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1624434207310-94fc6ee4ee58?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Recibe hoy en zona metropolitana.",
    deliveryPickup: "Disponible para retiro en mostrador.",
    features: [
      "Alcohol isopropilico para limpieza tecnica",
      "Aplicacion en aerosol para precision",
      "Evaporacion rapida sin humedad residual",
      "Recomendado para componentes electronicos"
    ]
  },
  {
    id: 7,
    name: "Monitor Xiaomi A24i Full HD",
    sku: "XIA-A24I-FHD",
    priceGTQ: 999,
    oldPriceGTQ: 1135,
    score: 4.7,
    reviews: 64,
    badge: "12% off",
    image:
      "https://images.unsplash.com/photo-1546538915-a9e2c8d50e43?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546538915-a9e2c8d50e43?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega de 24 a 48 horas con seguimiento.",
    deliveryPickup: "Retiro disponible despues de 2 horas.",
    features: [
      "Monitor de 24 pulgadas Full HD",
      "Buena fidelidad de color para oficina",
      "Entradas de video para uso versatil",
      "Consumo energetico eficiente"
    ]
  },
  {
    id: 8,
    name: "TP-Link Archer T2UB Nano AC600",
    sku: "TPL-AC600-T2UB",
    priceGTQ: 139,
    oldPriceGTQ: 220,
    score: 4.5,
    reviews: 95,
    badge: "37% off",
    image:
      "https://images.unsplash.com/photo-1593640495392-5bfc4dd15313?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593640495392-5bfc4dd15313?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Envio gratis a ciudad y municipios cercanos.",
    deliveryPickup: "Retira hoy con documento de compra.",
    features: [
      "Wi-Fi AC600 de doble banda",
      "Tamano nano para portabilidad",
      "Conexion estable para streaming y trabajo",
      "Compatible con sistemas Windows"
    ]
  }
];

const EXCHANGE_RATE = 7.8;
let currency = localStorage.getItem("currency") || "GTQ";
let cart = [];
let selectedProductId = null;
let selectedGalleryIndex = 0;

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

const productModal = document.getElementById("productModal");
const modalOverlay = document.getElementById("modalOverlay");
const closeModalBtn = document.getElementById("closeModalBtn");
const modalMainImage = document.getElementById("modalMainImage");
const modalThumbs = document.getElementById("modalThumbs");
const modalTitle = document.getElementById("modalTitle");
const modalSku = document.getElementById("modalSku");
const modalRating = document.getElementById("modalRating");
const modalBadge = document.getElementById("modalBadge");
const modalPrice = document.getElementById("modalPrice");
const modalOldPrice = document.getElementById("modalOldPrice");
const modalDeliveryMain = document.getElementById("modalDeliveryMain");
const modalDeliveryAlt = document.getElementById("modalDeliveryAlt");
const modalFeatures = document.getElementById("modalFeatures");
const modalAddBtn = document.getElementById("modalAddBtn");

currencySelect.value = currency;

function getProductById(productId) {
  return products.find((product) => product.id === productId);
}

/* Formatea cualquier valor desde GTQ a la moneda actual seleccionada. */
function formatPriceFromGTQ(amountGTQ) {
  if (currency === "USD") {
    return `$${(amountGTQ / EXCHANGE_RATE).toFixed(2)}`;
  }
  return `Q${amountGTQ.toFixed(2)}`;
}

/* Construye las estrellas sin depender de caracteres Unicode directos en el archivo. */
function getStarsHtml(score) {
  const rounded = Math.max(1, Math.min(5, Math.round(score)));
  const filled = "&#9733;".repeat(rounded);
  const empty = "&#9734;".repeat(5 - rounded);
  return `${filled}${empty}`;
}

/* Renderiza el catalogo principal y activa clic para abrir detalle. */
function renderProducts() {
  productsContainer.innerHTML = "";

  products.forEach((product) => {
    const card = document.createElement("article");
    card.className = "product-card";
    card.dataset.id = String(product.id);
    card.tabIndex = 0;
    card.setAttribute("role", "button");
    card.setAttribute("aria-label", `Ver detalles de ${product.name}`);

    card.innerHTML = `
      <img class="product-image" src="${product.image}" alt="${product.name}">
      <div class="product-body">
        <div class="product-title">${product.name}</div>
        <div class="product-meta">${product.score.toFixed(1)} ${getStarsHtml(product.score)} ${product.reviews} opiniones</div>
        <div class="price-line">
          <span class="price-current">${formatPriceFromGTQ(product.priceGTQ)}</span>
          ${product.oldPriceGTQ ? `<span class="price-old">${formatPriceFromGTQ(product.oldPriceGTQ)}</span>` : ""}
        </div>
        <span class="badge">${product.badge}</span>
        <button class="btn btn-add" data-id="${product.id}">Agregar al carrito</button>
      </div>
    `;

    card.addEventListener("click", () => openProductModal(product.id));
    card.addEventListener("keydown", (event) => {
      if (event.target.closest(".btn-add")) {
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProductModal(product.id);
      }
    });

    productsContainer.appendChild(card);
  });

  document.querySelectorAll(".btn-add").forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.stopPropagation();
      const id = Number(btn.dataset.id);
      addToCart(id);
    });
  });
}

/* Construye la ficha del producto seleccionado en el modal. */
function renderProductModal(product) {
  modalTitle.textContent = product.name;
  modalSku.textContent = `SKU: ${product.sku}`;
  modalRating.innerHTML = `${product.score.toFixed(1)} ${getStarsHtml(product.score)} ${product.reviews} opiniones`;
  modalBadge.textContent = product.badge;
  modalPrice.textContent = formatPriceFromGTQ(product.priceGTQ);

  if (product.oldPriceGTQ) {
    modalOldPrice.textContent = formatPriceFromGTQ(product.oldPriceGTQ);
    modalOldPrice.style.display = "inline";
  } else {
    modalOldPrice.textContent = "";
    modalOldPrice.style.display = "none";
  }

  modalDeliveryMain.textContent = product.deliveryHome;
  modalDeliveryAlt.textContent = product.deliveryPickup;

  modalFeatures.innerHTML = "";
  product.features.forEach((feature) => {
    const item = document.createElement("li");
    item.textContent = feature;
    modalFeatures.appendChild(item);
  });

  modalThumbs.innerHTML = "";
  product.gallery.forEach((imageUrl, index) => {
    const thumbBtn = document.createElement("button");
    thumbBtn.className = `thumb-btn ${index === selectedGalleryIndex ? "active" : ""}`;
    thumbBtn.type = "button";
    thumbBtn.innerHTML = `<img src="${imageUrl}" alt="Vista ${index + 1} de ${product.name}">`;

    thumbBtn.addEventListener("click", () => {
      selectedGalleryIndex = index;
      modalMainImage.src = imageUrl;
      modalMainImage.alt = product.name;
      renderProductModal(product);
    });

    modalThumbs.appendChild(thumbBtn);
  });

  modalMainImage.src = product.gallery[selectedGalleryIndex] || product.image;
  modalMainImage.alt = product.name;
}

function openProductModal(productId) {
  const product = getProductById(productId);
  if (!product) {
    return;
  }

  selectedProductId = productId;
  selectedGalleryIndex = 0;
  renderProductModal(product);

  productModal.classList.remove("hidden");
  productModal.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeProductModal() {
  productModal.classList.add("hidden");
  productModal.setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
}

/* Agrega un producto al carrito y suma cantidad si ya existe. */
function addToCart(productId) {
  const found = cart.find((item) => item.id === productId);

  if (found) {
    found.qty += 1;
  } else {
    const product = getProductById(productId);
    if (!product) {
      return;
    }
    cart.push({ id: product.id, name: product.name, priceGTQ: product.priceGTQ, qty: 1 });
  }

  renderCart();

  Swal.fire({
    icon: "success",
    title: "Producto agregado",
    text: "Se agrego correctamente al carrito",
    timer: 1200,
    showConfirmButton: false
  });
}

/* Dibuja el carrito con totales por linea y total general. */
function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Tu carrito esta vacio";
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

/* Limpia el carrito luego de confirmar en una alerta. */
async function clearCart() {
  if (cart.length === 0) {
    Swal.fire("Sin productos", "El carrito ya esta vacio", "info");
    return;
  }

  const result = await Swal.fire({
    title: "¿Vaciar carrito?",
    text: "Esta accion quitara todos los productos",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Si, vaciar",
    cancelButtonText: "Cancelar"
  });

  if (result.isConfirmed) {
    cart = [];
    renderCart();
    Swal.fire("Listo", "Se vacio el carrito", "success");
  }
}

/* Extrae el total en GTQ sin importar la moneda visible. */
function getCartTotalGTQ() {
  return cart.reduce((acc, item) => acc + item.priceGTQ * item.qty, 0);
}

/* Validaciones de tarjeta para simulacion de pago. */
function validatePaymentData() {
  const name = cardName.value.trim();
  const number = cardNumber.value.replace(/\s/g, "");
  const expiry = cardExpiry.value.trim();
  const cvv = cardCvv.value.trim();

  if (name.length < 4) {
    return "Ingresa un nombre valido";
  }

  if (!/^\d{16}$/.test(number)) {
    return "La tarjeta debe tener 16 digitos";
  }

  if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry)) {
    return "La fecha debe estar en formato MM/AA";
  }

  if (!/^\d{3,4}$/.test(cvv)) {
    return "El CVV debe tener 3 o 4 digitos";
  }

  const [monthStr, yearStr] = expiry.split("/");
  const month = Number(monthStr);
  const year = 2000 + Number(yearStr);
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return "La tarjeta esta vencida";
  }

  return null;
}

/* Genera recibo PDF. Se parte en multiples lineas para evitar desbordes. */
function generatePdfReceipt() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const today = new Date();

  doc.setFontSize(16);
  doc.text("Recibo de compra - Tienda Informatica GT", 14, 15);

  doc.setFontSize(11);
  doc.text(`Fecha: ${today.toLocaleString("es-GT")}`, 14, 24);
  doc.text(`Moneda visible: ${currency}`, 14, 31);
  doc.text(`Tipo de cambio usado: 1 USD = Q${EXCHANGE_RATE}`, 14, 38);

  let y = 48;
  doc.text("Detalle:", 14, y);
  y += 8;

  const maxWidth = 182;
  cart.forEach((item, index) => {
    const line = `${index + 1}. ${item.name} x${item.qty} - ${formatPriceFromGTQ(item.priceGTQ * item.qty)}`;
    const splitLines = doc.splitTextToSize(line, maxWidth);

    if (y > 275) {
      doc.addPage();
      y = 20;
    }

    doc.text(splitLines, 14, y);
    y += splitLines.length * 6 + 1;
  });

  y += 4;
  if (y > 275) {
    doc.addPage();
    y = 20;
  }

  const totalGTQ = getCartTotalGTQ();
  const totalUSD = totalGTQ / EXCHANGE_RATE;
  doc.text(`Total GTQ: Q${totalGTQ.toFixed(2)}`, 14, y);
  y += 7;
  doc.text(`Total USD: $${totalUSD.toFixed(2)}`, 14, y);

  doc.save("recibo_tienda_informatica.pdf");
}

/* Evento de pago: valida, simula cobro y genera PDF. */
paymentForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  if (cart.length === 0) {
    Swal.fire("Carrito vacio", "Agrega productos antes de pagar", "info");
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
  Swal.fire("Pago exitoso", "Se valido el pago y se genero el recibo PDF", "success");

  paymentForm.reset();
  cart = [];
  renderCart();
});

/* Botones de acciones principales. */
clearCartBtn.addEventListener("click", clearCart);
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    Swal.fire("Carrito vacio", "Agrega productos antes de pagar", "info");
    return;
  }

  cardName.focus();
  Swal.fire({
    icon: "info",
    title: "Completa los datos",
    text: "Llena el formulario de pago para finalizar la compra"
  });
});

/* Cambio de moneda en caliente y persistencia local. */
currencySelect.addEventListener("change", () => {
  currency = currencySelect.value;
  localStorage.setItem("currency", currency);
  renderProducts();
  renderCart();

  if (!productModal.classList.contains("hidden") && selectedProductId !== null) {
    const product = getProductById(selectedProductId);
    if (product) {
      renderProductModal(product);
    }
  }
});

/* Autoformato de inputs para mejorar experiencia. */
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

/* Modo claro/oscuro con persistencia. */
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

/* Eventos del modal para cerrar y agregar desde la ficha. */
modalOverlay.addEventListener("click", closeProductModal);
closeModalBtn.addEventListener("click", closeProductModal);
modalAddBtn.addEventListener("click", () => {
  if (selectedProductId !== null) {
    addToCart(selectedProductId);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !productModal.classList.contains("hidden")) {
    closeProductModal();
  }
});

/* Inicializacion de la aplicacion. */
renderProducts();
renderCart();
