let ders = "Matematik"//Global Scope:Her yerde geçerli
function calisma(){
    //Local Scope:Sadece bu fonsiyon içinde işlevi var.
    let konu = "İntegral"
    console.log(ders)
    console.log(konu)

}
calisma()

//var: Bir if bloğu içinde tanımlansa bile dışarıdan erişilebilir.
//let:Sadece tanımlandığı süslü parantez içinde yaşar.
//const:let gibi ama değeri bir kere atandıktan sonra asla değiştirilemez.

//OBJELER:Bir değişken (let) sadece bir değer tutar (isim = "Şeyma"). Bir dizi (array) bir liste tutar. Bir Obje ise bir varlığın tüm özelliklerini bir arada tutar.
//Objeleri süslü parantez { } ile oluştururuz.
const ogrenci = {
  ad: 'Şeyma',
  okul: 'KTÜ',
  bolum: 'Bilgisayar Mühendisliği',
  sinif: 1,
  yetenekler: ['C', 'JS', 'HTML'], // Değer bir dizi olabilir
}
console.log(ogrenci.ad); // DEĞERLERE ERİŞİM

//Obje Metotları
//this:Fonksiyonun içindeyken "bu objenin içindeki şu özelliği kullan" demek için
//=> içinde this çalışmaz 
const kisi = {
  ad: 'Şeyma',
  soyad: 'Bozdemir',
  tamAd: function() {
    // 'this' burada 'kisi' objesini temsil eder
    return `${this.ad} ${this.soyad}`;
  }
};
console.log(kisi.tamAd()); // "Şeyma Bozdemir"

//Obje Üzerinde Değişiklik Yapma (Mutable)
//Objeler yaratıldıktan sonra değiştirilebilir. Yeni özellik ekleyebilir veya var olanı güncelleyebilir.
const araba = { marka: 'Tesla' };
// Yeni özellik ekleme
araba.model = 'Model 3'; 
araba.yil = 2023;
// Var olanı güncelleme
araba.yil = 2024;
console.log(araba); // {marka: "Tesla", model: "Model 3", yil: 2024}

const user = { name: 'Şeyma', role: 'Student' };

// 1. Object.keys(): Sadece anahtarları dizi olarak verir
console.log(Object.keys(user)); // ['name', 'role']

// 2. Object.values(): Sadece değerleri dizi olarak verir
console.log(Object.values(user)); // ['Şeyma', 'Student']

// 3. Object.entries(): Hem anahtar hem değeri çiftler halinde verir
console.log(Object.entries(user)); // [['name', 'Şeyma'], ['role', 'Student']]

// 4. hasOwnProperty(): "Bu obje şu özelliğe sahip mi?" diye sorar (true/false)
console.log(user.hasOwnProperty('name')); // true

