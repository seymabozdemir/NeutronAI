//Set aynı şeyi birden fazla listeye almayan bir seçici.


//has()metodu
//bu metot setin içine bakar ve aranan orda mı değil mi bakıp T veya F olarak haber verir.
//C'deki for gibi diziye tek tek bakıyo.
const sepet = new Set(['Elma', 'Armut', 'Muz']);

console.log(sepet.has('Elma')); // true (Evet, elma var!)
console.log(sepet.has('Kiraz')); // false (Hayır, kiraz yok.)

//delete() Metodu (Tekil Silme)
//delete(): "Kullanıcı favori listesinden bu ürünü çıkardı" işlemi için.
//burda silme başarılıysa T silmek istenen şey listede yoksa F döndürüyo.
sepet.delete('Armut'); // Armut artık sepetten çıktı.

console.log(sepet.has('Armut')); // false (Çünkü az önce sildik)
console.log(sepet.size); // 2 (Sadece Elma ve Muz kaldı)

//clear() metodu (Temizlik)
//clear(): "Kullanıcı çıkış yaptı, tüm geçici verileri temizle" demek için.
sepet.clear(); // Sepet bomboş oldu!

console.log(sepet.size); // 0 (Hiç eleman kalmadı)
console.log(sepet); // Set(0) {}



// 1. Boş liste oluşturma
const davetliler = new Set()// 2. add() ile eleman ekleme
davetliler.add('Şeyma')
davetliler.add('Ali')
davetliler.add('Şeyma') // Bunu eklemez! "Şeyma zaten listede" der.

console.log(davetliler)// Set(2) {"Şeyma", "Ali"}
console.log(davetliler.size) // 2 (Eleman sayısını .length ile değil .size ile buluruz)

//Birlik (Union)
//İki grubu bir araya getiriyo ama aynı olanları tekrar tekrar yazmak yerine bir tane yazıyoruz.
let grupA = [1, 2, 3, 4, 5]
let grupB = [3, 4, 5, 6]
let tumGrup = new Set([...grupA,...grupB])// "..."(spread) ile ikisini birleştirdik ve ste gönderdik
console.log(tumGrup)

//Kesişim (Intersection)
//Her iki grupta da bulunan elemanları alıyoruz
let a = [1, 2, 3, 4, 5]
let b = [3, 4, 5, 6]
let A = new Set(a)
let B = new Set(b)

let c = a.filter((num) => B.has(num))
let C = new Set(c)

console.log(C)

//Fark (Difference)
//birinde olup diğerinde olmayanları buluyoruz.
let setB = new Set(b)
let farkDizisi = a.filter((sayi) => {
  // B kümesinde bu sayı YOKSA (not !) true döndür ve listeye al
  return !setB.has(sayi) 
})
/*Burdaki ünlem eğer sayı B'de varsa (true),ben onu istemiyorum
(false yap)diyo.Eğer B'de yoksa (false) onu true yap çünkü ben onu istiyorum diyo. */





//MAP
//set(ekle),get(getir),has(var mı)
const sehirler = new Map();

// 1. Değer Ekleme: .set(anahtar, değer)
sehirler.set('61', 'Trabzon'); // Şeyma, senin okulun memleketi :)
sehirler.set('34', 'İstanbul');
sehirler.set('06', 'Ankara');

// 2. Değer Okuma: .get(anahtar)
console.log(sehirler.get('61')); // "Trabzon"

// 3. Kontrol Etme: .has(anahtar)
console.log(sehirler.has('61')); // true
console.log(sehirler.has('35')); // false

//Burdaki her şeyi tek tek ekrana basmak istersek parçalamamız gerekiyor.
//[anahtar,değer] yani bizim kodumuz için [plaka,sehir]
//bunun içinde for...of döngüsü kullanıyoruz.
for (const [plaka, sehir] of sehirler) {
  console.log(`${plaka} plakalı şehrimiz: ${sehir}`);
}

