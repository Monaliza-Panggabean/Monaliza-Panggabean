// ==========================================
// CASE 1: User Data Cleaner
// ==========================================

// String mentah dari form input
const rawNames = " riyanda_azis, ARIFIAN_SAPUTRA , hasan_harahap ";

// 1. Bersihkan whitespace di awal dan akhir string
const cleanedString = rawNames.trim();

// 2. Ubah menjadi array nama
const namesArray = cleanedString.split(",");

// 3. Format setiap nama menjadi lowercase tanpa spasi liar
const formattedNames = namesArray.map(function (name) {
    return name.trim().toLowerCase().replace(/\s+/g, "");
});

// 4. Gabungkan kembali menjadi string
const finalNames = formattedNames.join(" | ");

console.log("CASE 1 - User Data Cleaner");
console.log("Array nama:", formattedNames);
console.log("Hasil akhir:", finalNames);


// ==========================================
// CASE 2: E-Commerce Product Filter
// ==========================================

// Array produk
const products = [
    { name: "Laptop", price: 1000, active: true },
    { name: "Mouse", price: 20, active: false },
    { name: "Keyboard", price: 50, active: true }
];

// 1. Filter produk yang active: true
const activeProducts = products.filter(function (product) {
    return product.active === true;
});

// 2. Buat array baru yang hanya berisi nama produk huruf kapital
const activeProductNames = activeProducts.map(function (product) {
    return product.name.toUpperCase();
});

// 3. Hitung total harga semua produk yang aktif
const totalActivePrice = activeProducts.reduce(function (total, product) {
    return total + product.price;
}, 0);

console.log("\nCASE 2 - E-Commerce Product Filter");
console.log("Produk aktif:", activeProducts);
console.log("Nama produk uppercase:", activeProductNames);
console.log("Total harga produk aktif:", totalActivePrice);