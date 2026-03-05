/*
  Tienda de informatica con catalogo, carrito y factura PDF.
  Incluye:
  - Catalogo coherente de productos.
  - Factura con formato comercial, fecha y hora de emision.
  - Numero de factura unico y numero de emision unico.
  - Validaciones estrictas de tarjeta (solo digitos en numero).
*/

const products = [
  {
    id: 1,
    name: "TP-Link UB500 Nano Adaptador Bluetooth 5.0 para Computadora",
    sku: "TPL-UB500",
    priceGTQ: 53,
    oldPriceGTQ: 62,
    score: 4.8,
    reviews: 151,
    badge: "15% off",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640495392-5bfc4dd15313?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega en 24 horas en ciudad.",
    deliveryPickup: "Retiro en tienda el mismo dia.",
    features: [
      "Bluetooth 5.0 de baja latencia",
      "Tamano nano para laptop y PC",
      "Compatible con Windows",
      "Ideal para mouse, teclado y audifonos"
    ]
  },
  {
    id: 2,
    name: "Argom Adaptador de HDMI a VGA 15cm Negro",
    sku: "ARG-HDMI-VGA-15",
    priceGTQ: 30,
    oldPriceGTQ: 39,
    score: 4.5,
    reviews: 51,
    badge: "23% off",
    image: "https://static.tp-link.com/upload/image-line/Archer-T2UB-Nano_EU_1.0_03_normal_20220929114010l.jpg",
    gallery: [
      "https://static.tp-link.com/upload/image-line/overview_normal_20220929113734a.png",
      "https://static.tp-link.com/upload/image-line/Archer-T2UB-Nano_EU_1.0_03_normal_20220929114010l.jpg",
      "https://static.tp-link.com/upload/image-line/Archer-T2UB-Nano_EU_1.0_05_normal_20220929114053t.jpg"
    ],
    deliveryHome: "Entrega rapida en 24 horas.",
    deliveryPickup: "Retiro inmediato en tienda.",
    features: [
      "Convierte HDMI a VGA",
      "Resolucion Full HD 1080p",
      "Diseno compacto de 15 cm",
      "Plug and play"
    ]
  },
  {
    id: 3,
    name: "eTouch Teclado Alambrico KB-300 USB Espanol",
    sku: "ETO-KB300",
    priceGTQ: 37,
    oldPriceGTQ: null,
    score: 4.4,
    reviews: 70,
    badge: "Clasico",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1518773553398-650c184e0bb3?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega a domicilio en 24 horas.",
    deliveryPickup: "Disponible para retiro inmediato.",
    features: [
      "Distribucion en espanol",
      "Conexion USB directa",
      "Teclas de perfil comodo",
      "Ideal para oficina y hogar"
    ]
  },
  {
    id: 4,
    name: "Espuma Limpiadora 20 Onzas eTouch",
    sku: "ETO-FOAM-20",
    priceGTQ: 40,
    oldPriceGTQ: 50,
    score: 4.4,
    reviews: 60,
    badge: "Limpieza",
    image: "https://www.etouchessuperior.com/images/stories/virtuemart/product/ESPUMA%20ETOUCH%20MANTENIMIENTO%20PC.jpg",
    gallery: [
      "https://www.etouchessuperior.com/images/stories/virtuemart/product/ESPUMA%20ETOUCH%20MANTENIMIENTO%20PC.jpg",
      "https://www.etouchessuperior.com/images/stories/virtuemart/product/LIMPIA%20CONTACTOS%20ETOUCH%20MANTENIMIENTO.jpg",
      "https://www.etouchessuperior.com/images/banner/3banner_lateral.jpg"
    ],
    deliveryHome: "Entrega hoy en zonas cercanas.",
    deliveryPickup: "Retiro inmediato en mostrador.",
    features: [
      "Espuma de secado rapido",
      "No deja residuos",
      "Ideal para plastico y superficies externas",
      "Presentacion de 20 onzas"
    ]
  },
  {
    id: 5,
    name: "Xiaomi A27i Monitor de 27\" Full HD, HDMI y DP a 100Hz - Negro",
    sku: "XIA-A27I",
    priceGTQ: 899,
    oldPriceGTQ: 1150,
    score: 4.8,
    reviews: 71,
    badge: "22% off",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1546538915-a9e2c8d50e43?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega en 24 horas con envio gratis.",
    deliveryPickup: "Retiro en tienda en 2 horas.",
    features: [
      "Pantalla de 27 pulgadas",
      "Resolucion Full HD",
      "Entradas HDMI y DisplayPort",
      "Frecuencia de 100Hz"
    ]
  },
  {
    id: 6,
    name: "Xiaomi A24i Monitor de 24\" Full HD, HDMI y DP a 100Hz - Negro",
    sku: "XIA-A24I",
    priceGTQ: 789,
    oldPriceGTQ: 899,
    score: 4.7,
    reviews: 69,
    badge: "12% off",
    image: "https://images.unsplash.com/photo-1546538915-a9e2c8d50e43?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1546538915-a9e2c8d50e43?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega en 24 horas.",
    deliveryPickup: "Retiro disponible en mostrador.",
    features: [
      "Pantalla de 24 pulgadas",
      "Panel Full HD",
      "HDMI y DisplayPort",
      "Frecuencia de actualizacion de 100Hz"
    ]
  },
  {
    id: 7,
    name: "Sternen Alcohol Isopropilico en Aerosol",
    sku: "STR-ISO-450",
    priceGTQ: 56,
    oldPriceGTQ: 80,
    score: 4.6,
    reviews: 32,
    badge: "30% off",
    image: "https://http2.mlstatic.com/D_NQ_NP_706495-MLU76965958813_062024-O.webp",
    gallery: [
      "https://http2.mlstatic.com/D_NQ_NP_706495-MLU76965958813_062024-F.webp",
      "https://http2.mlstatic.com/D_NQ_NP_706495-MLU76965958813_062024-O.webp",
      "https://http2.mlstatic.com/D_NQ_NP_706495-MLU76965958813_062024-A.webp"
    ],
    deliveryHome: "Entrega en el mismo dia.",
    deliveryPickup: "Retiro en sucursal central.",
    features: [
      "Alcohol isopropilico para electronica",
      "Secado rapido sin humedad",
      "Aplicacion en aerosol de precision",
      "Ideal para mantenimiento preventivo"
    ]
  },
  {
    id: 8,
    name: "Limpia Contactos 20 Onzas eTouch",
    sku: "ETO-CONTACT-20",
    priceGTQ: 50,
    oldPriceGTQ: 80,
    score: 4.4,
    reviews: 55,
    badge: "Ahorro",
    image: "https://www.etouchessuperior.com/images/stories/virtuemart/product/LIMPIA%20CONTACTOS%20ETOUCH%20MANTENIMIENTO.jpg",
    gallery: [
      "https://www.etouchessuperior.com/images/stories/virtuemart/product/LIMPIA%20CONTACTOS%20ETOUCH%20MANTENIMIENTO.jpg",
      "https://www.etouchessuperior.com/images/stories/virtuemart/product/ESPUMA%20ETOUCH%20MANTENIMIENTO%20PC.jpg",
      "https://www.etouchessuperior.com/images/banner/3banner_lateral.jpg"
    ],
    deliveryHome: "Entrega en 24 horas.",
    deliveryPickup: "Disponible para retiro inmediato.",
    features: [
      "Limpieza de contactos electronicos",
      "No deja residuos aceitosos",
      "Presentacion de 20 onzas",
      "Uso recomendado para perifericos y puertos"
    ]
  },
  {
    id: 9,
    name: "TP-Link Archer T2UB Nano Adaptador USB Wi-Fi AC600 + Bluetooth 4.2",
    sku: "TPL-T2UB",
    priceGTQ: 94,
    oldPriceGTQ: 150,
    score: 4.6,
    reviews: 42,
    badge: "37% off",
    image: "https://images.unsplash.com/photo-1593640495392-5bfc4dd15313?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593640495392-5bfc4dd15313?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega rapida a nivel nacional.",
    deliveryPickup: "Retiro en agencia principal.",
    features: [
      "Wi-Fi AC600 de doble banda",
      "Bluetooth 4.2 integrado",
      "Diseno nano ultracompacto",
      "Compatible con Windows"
    ]
  },
  {
    id: 10,
    name: "Kingston Unidad de Estado Solido 240GB 2.5\" A400",
    sku: "KIN-A400-240",
    priceGTQ: 230,
    oldPriceGTQ: 303,
    score: 4.8,
    reviews: 106,
    badge: "24% off",
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587831990711-23ca6441447b?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega al siguiente dia habil.",
    deliveryPickup: "Retiro en tienda sin costo.",
    features: [
      "Capacidad de 240GB",
      "Formato 2.5 pulgadas",
      "Alto rendimiento para SO",
      "Mayor velocidad que HDD tradicional"
    ]
  },
  {
    id: 11,
    name: "Cable HDMI eTouch de 10.35 Metros",
    sku: "ETO-HDMI-10M",
    priceGTQ: 50,
    oldPriceGTQ: 66,
    score: 4.3,
    reviews: 33,
    badge: "Oferta",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587135941948-670b381f08ce?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1591488320449-011701bb6704?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega en 24 horas.",
    deliveryPickup: "Retiro disponible hoy.",
    features: [
      "Longitud de 10.35 metros",
      "Compatible con Full HD",
      "Conectores reforzados",
      "Ideal para TV, monitor y proyector"
    ]
  },
  {
    id: 12,
    name: "Argom Gabinete para Disco Duro 2.5\" SATA USB 3.0 Negro",
    sku: "ARG-ENCLOSURE-25",
    priceGTQ: 229,
    oldPriceGTQ: 287,
    score: 4.4,
    reviews: 91,
    badge: "19% off",
    image: "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=900&q=80",
    gallery: [
      "https://images.unsplash.com/photo-1593640495253-23196b27a87f?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1593640495392-5bfc4dd15313?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1200&q=80"
    ],
    deliveryHome: "Entrega de 24 a 48 horas.",
    deliveryPickup: "Retiro en sucursal principal.",
    features: [
      "Compatible con discos 2.5\" SATA",
      "Conexion USB 3.0",
      "Instalacion sin herramientas",
      "Carcasa compacta y resistente"
    ]
  }
];

const EXCHANGE_RATE = 7.8;
const VAT_RATE = 0.12;
const INVOICE_SEQUENCE_KEY = "invoiceSequenceV1";
const ISSUED_INVOICE_KEY = "issuedInvoiceNumbersV1";

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

function formatPriceFromGTQ(amountGTQ) {
  if (currency === "USD") {
    return `$${(amountGTQ / EXCHANGE_RATE).toFixed(2)}`;
  }
  return `Q${amountGTQ.toFixed(2)}`;
}

function getStarsHtml(score) {
  const rounded = Math.max(1, Math.min(5, Math.round(score)));
  const filled = "&#9733;".repeat(rounded);
  const empty = "&#9734;".repeat(5 - rounded);
  return `${filled}${empty}`;
}

function formatIssueDate(dateValue) {
  return dateValue.toLocaleDateString("es-GT", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  });
}

function formatIssueTime(dateValue) {
  return dateValue.toLocaleTimeString("es-GT", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  });
}

function formatCompactDate(dateValue) {
  const yyyy = dateValue.getFullYear();
  const mm = String(dateValue.getMonth() + 1).padStart(2, "0");
  const dd = String(dateValue.getDate()).padStart(2, "0");
  return `${yyyy}${mm}${dd}`;
}

function readIssuedInvoices() {
  try {
    const parsed = JSON.parse(localStorage.getItem(ISSUED_INVOICE_KEY) || "{}");
    return parsed && typeof parsed === "object" ? parsed : {};
  } catch {
    return {};
  }
}

function saveIssuedInvoices(invoiceMap) {
  localStorage.setItem(ISSUED_INVOICE_KEY, JSON.stringify(invoiceMap));
}

function getNextSequence() {
  const current = Number.parseInt(localStorage.getItem(INVOICE_SEQUENCE_KEY) || "0", 10);
  const next = Number.isNaN(current) ? 1 : current + 1;
  localStorage.setItem(INVOICE_SEQUENCE_KEY, String(next));
  return next;
}

function reserveInvoiceIdentifiers(issuedAt) {
  const issuedMap = readIssuedInvoices();
  const dateChunk = formatCompactDate(issuedAt);

  for (let i = 0; i < 1000; i += 1) {
    const sequence = String(getNextSequence()).padStart(8, "0");
    const invoiceNumber = `FAC-${dateChunk}-${sequence}`;

    if (!issuedMap[invoiceNumber]) {
      issuedMap[invoiceNumber] = issuedAt.toISOString();
      saveIssuedInvoices(issuedMap);

      return {
        invoiceNumber,
        emissionNumber: `EMI-${dateChunk}-${sequence}`
      };
    }
  }

  throw new Error("No fue posible generar un numero de factura unico.");
}

function maskCardNumber(cleanNumber) {
  return `**** **** **** ${cleanNumber.slice(-4)}`;
}

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
    timer: 1000,
    showConfirmButton: false
  });
}

function renderCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    const li = document.createElement("li");
    li.textContent = "Tu carrito esta vacio";
    cartItems.appendChild(li);
    cartTotal.textContent = formatPriceFromGTQ(0);
    return;
  }

  let subtotalGTQ = 0;

  cart.forEach((item) => {
    subtotalGTQ += item.priceGTQ * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} x${item.qty}</span>
      <strong>${formatPriceFromGTQ(item.priceGTQ * item.qty)}</strong>
    `;
    cartItems.appendChild(li);
  });

  const totalWithVatGTQ = subtotalGTQ * (1 + VAT_RATE);
  cartTotal.textContent = formatPriceFromGTQ(totalWithVatGTQ);
}

async function clearCart() {
  if (cart.length === 0) {
    Swal.fire("Sin productos", "El carrito ya esta vacio", "info");
    return;
  }

  const result = await Swal.fire({
    title: "Vaciar carrito",
    text: "Esta accion eliminara todos los productos.",
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

function getCartSubtotalGTQ() {
  return cart.reduce((acc, item) => acc + item.priceGTQ * item.qty, 0);
}

function validatePaymentData() {
  const name = cardName.value.trim();
  const rawNumber = cardNumber.value.trim();
  const cleanNumber = rawNumber.replace(/\s/g, "");
  const expiry = cardExpiry.value.trim();
  const cvv = cardCvv.value.trim();

  if (name.length < 4) {
    return "Ingresa un nombre completo valido.";
  }

  if (!/^[0-9 ]+$/.test(rawNumber)) {
    return "El numero de tarjeta solo acepta digitos.";
  }

  if (!/^\d{16}$/.test(cleanNumber)) {
    return "La tarjeta debe tener 16 digitos.";
  }

  if (!/^(0[1-9]|1[0-2])\/(\d{2})$/.test(expiry)) {
    return "La fecha debe estar en formato MM/AA.";
  }

  if (!/^\d{3,4}$/.test(cvv)) {
    return "El CVV debe tener 3 o 4 digitos.";
  }

  const [monthStr, yearStr] = expiry.split("/");
  const month = Number(monthStr);
  const year = 2000 + Number(yearStr);
  const now = new Date();
  const currentMonth = now.getMonth() + 1;
  const currentYear = now.getFullYear();

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return "La tarjeta esta vencida.";
  }

  return null;
}

function generateInvoicePdf(invoiceData) {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF({ unit: "mm", format: "a4" });
  const pageWidth = doc.internal.pageSize.getWidth();

  let y = 16;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(15);
  doc.text("Tienda Informatica GT", 14, y);

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text("Ciudad de Guatemala, Guatemala", 14, y + 5);
  doc.text("soporte@tiendainformatica.gt | +502 2222-3344", 14, y + 10);

  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("Factura", pageWidth - 14, y + 2, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(`No. Factura: ${invoiceData.invoiceNumber}`, pageWidth - 14, y + 8, { align: "right" });
  doc.text(`No. Emision: ${invoiceData.emissionNumber}`, pageWidth - 14, y + 13, { align: "right" });
  doc.text(`Fecha de emision: ${invoiceData.issueDate}`, pageWidth - 14, y + 18, { align: "right" });
  doc.text(`Hora de emision: ${invoiceData.issueTime}`, pageWidth - 14, y + 23, { align: "right" });

  y += 30;
  doc.setDrawColor(220, 220, 220);
  doc.line(14, y, pageWidth - 14, y);
  y += 8;

  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Facturar a", 14, y);
  doc.text("Pago", 110, y);

  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.text(invoiceData.customerName, 14, y);
  doc.text(`Tarjeta: ${invoiceData.maskedCard}`, 110, y);

  y += 5;
  doc.text(`Moneda visible: ${currency}`, 14, y);
  doc.text(`Tipo de cambio: 1 USD = Q${EXCHANGE_RATE.toFixed(2)}`, 110, y);

  y += 8;

  const tableX = 14;
  const tableWidth = pageWidth - 28;
  const descX = 16;
  const qtyX = 125;
  const unitX = 153;
  const totalX = 194;

  doc.setFillColor(245, 245, 245);
  doc.rect(tableX, y, tableWidth, 8, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("Descripcion", descX, y + 5.2);
  doc.text("Cant.", qtyX, y + 5.2, { align: "right" });
  doc.text("P. Unit.", unitX, y + 5.2, { align: "right" });
  doc.text("Total", totalX, y + 5.2, { align: "right" });

  y += 10;
  doc.setFont("helvetica", "normal");

  invoiceData.items.forEach((item) => {
    const descriptionLines = doc.splitTextToSize(item.name, 102);
    const rowHeight = Math.max(6, descriptionLines.length * 4 + 2);

    if (y + rowHeight > 255) {
      doc.addPage();
      y = 20;
    }

    doc.text(descriptionLines, descX, y + 3.2);
    doc.text(String(item.qty), qtyX, y + 3.2, { align: "right" });
    doc.text(formatPriceFromGTQ(item.priceGTQ), unitX, y + 3.2, { align: "right" });
    doc.text(formatPriceFromGTQ(item.priceGTQ * item.qty), totalX, y + 3.2, { align: "right" });

    y += rowHeight;
    doc.setDrawColor(235, 235, 235);
    doc.line(tableX, y, tableX + tableWidth, y);
    y += 2;
  });

  const subtotalGTQ = invoiceData.subtotalGTQ;
  const taxGTQ = subtotalGTQ * VAT_RATE;
  const totalGTQ = subtotalGTQ + taxGTQ;

  const totalsBoxX = 126;
  const totalsBoxY = Math.max(y + 6, 220);
  const totalsBoxWidth = 70;
  const lineHeight = 6;

  doc.setDrawColor(220, 220, 220);
  doc.rect(totalsBoxX, totalsBoxY, totalsBoxWidth, lineHeight * 3 + 6);

  doc.setFont("helvetica", "bold");
  doc.text("Subtotal:", totalsBoxX + 3, totalsBoxY + 6);
  doc.text(formatPriceFromGTQ(subtotalGTQ), totalsBoxX + totalsBoxWidth - 3, totalsBoxY + 6, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.text(`IVA (${Math.round(VAT_RATE * 100)}%):`, totalsBoxX + 3, totalsBoxY + 12);
  doc.text(formatPriceFromGTQ(taxGTQ), totalsBoxX + totalsBoxWidth - 3, totalsBoxY + 12, { align: "right" });

  doc.setFont("helvetica", "bold");
  doc.text("Total:", totalsBoxX + 3, totalsBoxY + 18);
  doc.text(formatPriceFromGTQ(totalGTQ), totalsBoxX + totalsBoxWidth - 3, totalsBoxY + 18, { align: "right" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.text("Documento generado electronicamente.", 14, 286);
  doc.text("Gracias por su compra.", pageWidth - 14, 286, { align: "right" });

  doc.save(`factura_${invoiceData.invoiceNumber}.pdf`);
}

paymentForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (cart.length === 0) {
    Swal.fire("Carrito vacio", "Agrega productos antes de pagar.", "info");
    return;
  }

  const validationError = validatePaymentData();
  if (validationError) {
    Swal.fire("Error en pago", validationError, "error");
    return;
  }

  const confirmation = await Swal.fire({
    title: "Confirmar compra",
    text: `Total a pagar: ${cartTotal.textContent}`,
    icon: "question",
    showCancelButton: true,
    confirmButtonText: "Confirmar pago",
    cancelButtonText: "Cancelar"
  });

  if (!confirmation.isConfirmed) {
    return;
  }

  const issuedAt = new Date();

  let identifiers;
  try {
    identifiers = reserveInvoiceIdentifiers(issuedAt);
  } catch (error) {
    Swal.fire("Error", "No se pudo generar un numero de factura unico.", "error");
    return;
  }

  const cleanCard = cardNumber.value.replace(/\D/g, "");
  const subtotalGTQ = getCartSubtotalGTQ();

  const invoiceData = {
    ...identifiers,
    issueDate: formatIssueDate(issuedAt),
    issueTime: formatIssueTime(issuedAt),
    customerName: cardName.value.trim(),
    maskedCard: maskCardNumber(cleanCard),
    items: cart.map((item) => ({ ...item })),
    subtotalGTQ
  };

  try {
    generateInvoicePdf(invoiceData);
  } catch (error) {
    Swal.fire("Error", "Ocurrio un problema al generar la factura PDF.", "error");
    return;
  }

  Swal.fire({
    icon: "success",
    title: "Pago exitoso",
    html: `Factura generada: <b>${invoiceData.invoiceNumber}</b><br>No. emision: ${invoiceData.emissionNumber}<br>Emitida: ${invoiceData.issueDate} ${invoiceData.issueTime}`
  });

  paymentForm.reset();
  cart = [];
  renderCart();
});

clearCartBtn.addEventListener("click", clearCart);
checkoutBtn.addEventListener("click", () => {
  if (cart.length === 0) {
    Swal.fire("Carrito vacio", "Agrega productos antes de pagar.", "info");
    return;
  }

  cardName.focus();
  Swal.fire({
    icon: "info",
    title: "Completa los datos",
    text: "Llena el formulario de pago para finalizar la compra."
  });
});

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

cardNumber.addEventListener("beforeinput", (event) => {
  if (event.data && /\D/.test(event.data)) {
    event.preventDefault();
  }
});

cardNumber.addEventListener("paste", (event) => {
  const text = (event.clipboardData || window.clipboardData).getData("text");
  const justDigits = text.replace(/\s/g, "");

  if (/\D/.test(justDigits)) {
    event.preventDefault();
    Swal.fire("Dato invalido", "El numero de tarjeta solo acepta digitos.", "warning");
  }
});

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

renderProducts();
renderCart();
