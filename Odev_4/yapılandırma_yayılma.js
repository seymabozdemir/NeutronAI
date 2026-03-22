//Destructuring (Yapılandırma/Paket Açma)
//Elimizdeki dizi veya objeye sırasıyla isim vermemiz

//A.Dizilerde
//sıralama önemli ona dikkat et
const bilimInsanlari = [2.72, 3.14, 9.81]

// Eskiden: let e = bilimInsanlari[0], pi = bilimInsanlari[1]...
// Şimdi:
const [e, pi, yercekimi] = bilimInsanlari

console.log(pi) // 3.14
//Eğer aradaki bir değeri pas geçip onu boş bırakmak istiyorsak
//const [e, , yercekimi] = bilimInsanlari böyle yapmamız lazım.
  

//B.Objelerde
//Burda sıralama önemli değil 
const dikdortgen = { genislik: 20, yukseklik: 10 }

const { genislik, yukseklik } = dikdortgen

console.log(genislik); // 20



//SPREAD VE REST (...)
//Bu (...)kulanıldığı yere göre işlevi değişiyo.

//A. Spread (Yayma): "Paketi Dağıt"
//Bir dizinin veya objenin içindekileri başka bir yere "boşaltmak" için kullanılır. Dizileri birleştirirken
const onTaraf = ['HTML', 'CSS'];
const arkaTaraf = ['Node', 'MongoDB'];

// İkisini birleştirip yeni bir koli yapalım:
const fullStack = [...onTaraf, ...arkaTaraf, 'React']; 
// Sonuç: ['HTML', 'CSS', 'Node', 'MongoDB', 'React']


//B. Rest (Dinlenme/Kalanlar): "Gerisini Topla"
const sayilar = [1, 2, 3, 4, 5, 6];
const [bir, iki, ...kalanlar] = sayilar;

console.log(bir);     // 1
console.log(kalanlar); // [3, 4, 5, 6] -> Geri kalanlar yeni bir dizi oldu!

//Fonksiyonlarda kullanımı
//koca bir obje göndermek yerine, sadece ihtiyacın olan parçaları
const ogrenci = { ad: 'Şeyma', soyad: 'X', numara: 123, bolum: 'Bilgisayar', sehir: 'Trabzon' };
//Elimizde böyle büyük bir veri var diyelim

const kayitYap = (obj) => {
  return `${obj.ad} ${obj.soyad} isimli öğrenci ${obj.bolum} bölümüne kaydedildi.`;
};
//Tek tek böyle yazmak yerine önce veriyi parantezle parçalayıp sonra istediğini çekiyosun













