const products = [
    { name: 'Notebook ASUS X515MA-BR423W', url: '/img/1.png', category: 'notebook', price: 2200000 },
    { name: 'Notebook HP 250 G9', url: '/img/2.png', category: 'notebook', price: 2600000 },
    { name: 'Notebook HP 15-FC0093DX', url: '/img/3.png', category: 'notebook', price: 4000000 },
    { name: 'Notebook Dell 3000-3525', url: '/img/4.png', category: 'notebook', price: 5000000 },
    { name: 'Notebook Nitro V ANV15-51-55SJ', url: '/img/5.png', category: 'notebook', price: 6500000 },
    { name: 'Impresora Brother Laser Wi-Fi ', url: '/img/imp-brother1.jpg', category: 'impresora', price: 1100000 },
    { name: 'IMPRESORA HP LASERJET WIFI', url: '/img/hp-laserjet-bl.jpg', category: 'impresora', price: 1300000 },
    { name: 'Impresora Samsung SL-M2035W Wifi', url: '/img/samsung-laser-bl.jpg', category: 'impresora', price: 1400000},
    { name: 'Monitor Mtek VA 22" Full HD 100Hz BL', url: '/img/mtek100hz-bl.jpg', category: 'monitor', price: 790000 },
    { name: 'Monitor Mtek VA 22" Full HD 100Hz NG', url: '/img/mtek100hz-ng.jpg', category: 'monitor', price: 790000 },
    { name: 'Monitor Xiaomi 23.8" Full HD LED 60Hz', url: '/img/xiaomi-24-60hz.jpg', category: 'monitor', price: 840000 },
    { name: 'Monitor Samsung 22" Full HD LED 60Hz', url: '/img/samsung-22-60hz.jpg', category: 'monitor', price: 890000 },
    { name: 'SSD Externo Western Digital 1TB Portátil', url: '/img/ssd-1tb.jpg', category: 'almacenamiento', price: 640000 },
    { name: 'SSD Externo Kingston 2TB Portátil ', url: '/img/ssd-2tb.jpg', category: 'almacenamiento', price: 1050000 },
    { name: 'Pendrive SanDisk Z410 128GB USB 3.0', url: '/img/sandisk-pen.jpg', category: 'almacenamiento', price: 80000 },
    { name: 'Pendrive SanDisk Z410 256GB USB 3.0', url: '/img/sandisk-pen.jpg', category: 'almacenamiento', price: 170000 }
  ];
  const productsWrapper = document.getElementById('products-wrapper');
  const checkboxes = document.querySelectorAll('.check');
  const filtersContainer = document.getElementById('filters-container');
  const searchInput = document.getElementById('search');
  
  function addProductToDOM(product) {
    const productElement = document.createElement('div');
    productElement.className = 'item space-y-2';
    productElement.innerHTML = `
    <div class="max-w-xs mx-auto bg-gray-800 shadow-lg rounded-lg overflow-hidden h-full flex flex-col">
    <img class="w-full h-48 object-cover object-center" src="${product.url}" alt="${product.name}">
    <div class="flex-grow flex flex-col justify-between">
      <div class="px-4 py-2">
        <h2 class="text-gray-100 text-lg font-semibold">${product.name}</h2>
      </div>
      <div class="mt-auto px-5 pb-2">
        <p class="text-gray-400">${product.price.toLocaleString('es-PY', { style: 'currency', currency: 'PYG' })}</p>
      </div>
    </div>
  </div>
  
  
    `;
    
    productsWrapper.appendChild(productElement);
  }
  
  // Populate products initially
  products.forEach(addProductToDOM);
  
  function filterProducts() {
    const searchTerm = searchInput.value.toLowerCase();
    const checkedCategories = Array.from(checkboxes).filter(check => check.checked).map(check => check.id);

    productsWrapper.innerHTML = '';

    products.forEach(product => {
        const searchMatch = product.name.toLowerCase().includes(searchTerm);
        const categoryMatch = checkedCategories.length === 0 || checkedCategories.includes(product.category);

        if (searchMatch && categoryMatch) {
            addProductToDOM(product); 
        }
    });
}

  
  filtersContainer.addEventListener('change', filterProducts);
  searchInput.addEventListener('input', filterProducts);