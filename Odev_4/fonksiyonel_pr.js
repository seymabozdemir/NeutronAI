//forEach:Dizideki her eleman için bir işlem yapar.
let sum = 0;
const numbers1 = [1, 2, 3, 4, 5];
numbers.forEach(num => sum += num)
console.log(sum)

const countries = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
countries.forEach((element) => console.log(element.toUpperCase()))

//map:Diziyi değiştirip yeni bir dizi oluşturur.
const numbers2 = [1, 2, 3, 4, 5]
const numbersSquare = numbers2.map((num) => num * num)
console.log(numbersSquare)

//filter:Şarta uyanları seçer, uymayanları atar.
const rakamlar = [1, 2, 3, 4, 5]
const uctenBuyukler = rakamlar.filter(num => num > 3)

//reduce:Tüm diziyi tek bir değere (sayı, yazı vs.) indirger.Sınıftaki tüm notları toplayıp ortalamayı bulmak.
const numbers = [1, 2, 3, 4, 5]
//acc şu ana kadar elinde olan
//cur elinde olan sıradaki parayı kumbaraya eklme mantığı
const summ = numbers.reduce((acc, cur) => acc + cur, 0)

console.log(summ)

//Arama ve Kontrol (find, every, some)





const isimler = ['Şeyma', 'Ali', 'Veli'];

// find: Şarta uyan İLK elemanı getirir
const bul = isimler.find(ad => ad.length > 4); // "Şeyma"

// every: HERKES şarta uyuyor mu? (True/False)
const hepsiStringMi = isimler.every(ad => typeof ad === 'string'); // true

// some: EN AZ BİRİ şarta uyuyor mu?
const aliVarMi = isimler.some(ad => ad === 'Ali'); // true

//sayilar için sort
const karisikSayilar = [100, 5, 25, 10]

// Küçükten büyüğe
karisikSayilar.sort((a, b) => a - b)

// Büyükten küçüğe
karisikSayilar.sort((a, b) => b - a)

