// Fungsi untuk menghasilkan nilai acak antara 1 dan 50
function generateRandomValue() {
  return Math.floor(Math.random() * 50) + 1;
}

// Fungsi untuk membuat array dengan 100 nilai acak
function createRandomArray() {
  const randomArray = [];
  for (let i = 0; i < 100; i++) {
    randomArray.push(generateRandomValue());
  }
  return randomArray;
}

// Fungsi untuk membagi array menjadi dua array: genap dan ganjil
function splitArray(arr) {
  const evenArray = [];
  const oddArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (i % 2 === 0) {
      evenArray.push(arr[i]);
    } else {
      oddArray.push(arr[i]);
    }
  }
  return { evenArray, oddArray };
}

// Fungsi untuk menghitung min, max, total, dan rata-rata dari sebuah array
function calculateStats(arr) {
  let min = arr[0];
  let max = arr[0];
  let total = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
    total += arr[i];
  }
  const average = total / arr.length;
  return { min, max, total, average };
}

// Membuat array dengan 100 nilai acak
const randomArray = createRandomArray();

// Membagi array menjadi array genap dan ganjil
const { evenArray, oddArray } = splitArray(randomArray);

// Menghitung statistik untuk array genap dan ganjil
const evenStats = calculateStats(evenArray);
const oddStats = calculateStats(oddArray);

// Menampilkan hasil
console.log("Array dengan jumlah index 100:");
console.log(randomArray);
console.log("Array genap dengan jumlah index 50:");
console.log(evenArray);
console.log("Array ganjil dengan jumlah index 50:");
console.log(oddArray);

console.log("Statistik Array Genap:");
console.log("Min:", evenStats.min);
console.log("Max:", evenStats.max);
console.log("Total:", evenStats.total);
console.log("Rata-rata:", evenStats.average);

console.log("Statistik Array Ganjil:");
console.log("Min:", oddStats.min);
console.log("Max:", oddStats.max);
console.log("Total:", oddStats.total);
console.log("Rata-rata:", oddStats.average);

// Membandingkan statistik
if (evenStats.min > oddStats.min) {
  console.log("Min lebih besar pada array genap");
} else {
  console.log("Min lebih besar pada array ganjil");
}

if (evenStats.max > oddStats.max) {
  console.log("Max lebih besar pada array genap");
} else {
  console.log("Max lebih besar pada array ganjil");
}

if (evenStats.total === oddStats.total) {
  console.log("Total memiliki nilai sama antara array genap dan ganjil");
} else if (evenStats.total > oddStats.total) {
  console.log("Total lebih besar pada array genap");
} else {
  console.log("Total lebih besar pada array ganjil");
}

if (evenStats.average > oddStats.average) {
  console.log("Rata-rata lebih besar pada array genap");
} else {
  console.log("Rata-rata lebih besar pada array ganjil");
}
