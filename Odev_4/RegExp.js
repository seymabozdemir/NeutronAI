//(Regular Expressions - Düzenli İfadeler)
//Bir metindeki belirli öğeleri araayı sağlar(bu metindeki tüm e-postalar gibi)
//Genel yapısı : let reg = /love/gi  veya let reg = new RegExp('love','gi')
//g(global):sadece ilk bulduğunu değil metindeki tüm eşleşmeleri buluyo 
//i(case-sensitive):Büyük küçük harf ayrımı yapmaz.
const desen1 = /javascript/gi
const desen2 = new RegExp('javascript','gi')
const metin = "ben şu an Javascript öğreniyorum,ve javascript ile çalışıyorum."
console.log(metin.match(desen1))//match():bu metot bulduklarını bir liste olarak verir.

//test():var mı yok mu ya bakıyo
const mesaj = "ben şu an Javascript öğreniyorum,ve javascript ile çalışıyorum"
console.log(/javascript/.test(mesaj))//Sadece true false döner
console.log(mesaj.search(/ile/))//Kaçıncı karakterden başlaığını söylicek.

//replace():bulduğunu şununla değiştir diyor.
const tweet ="ben şu an Javascript öğreniyorum,ve javascript ile çalışıyorum."
const yeniTweet = tweet.replace(/Javascript/g, "python")
console.log(yeniTweet)

// [Aa]: Büyük A veya küçük a ile başlayanları bulur
const meyveler = "Apple, apple, Banana, banana"
const elmaBul = /[Aa]pple/g
console.log(meyveler.match(elmaBul)) 

// [0-9]: Sadece rakamları seçeriz bunla
const sifre = "Sifre12345";
console.log(sifre.match(/[0-9]/g))

//KISA YOLLAR
const adres = "Sokak No: 61, Kat: 3";

// \d: Sadece rakamlar (digit)
console.log(adres.match(/\d/g))

// \d+: Yan yana gelen rakamları grup olarak al
console.log(adres.match(/\d+/g))

// \s: Boşlukları (space) bulur
console.log(adres.match(/\s/g).length) 

//^(Başlangıç) $(bitiş):Metnin tam olarak neyle başlayıp neyle biteceğini kontrol eder.
//Genelde şifre ve kullanıcı adı kontrollerinde kullanılır.
const kadi = "seyma123";

// ^s: 's' ile başlamalı, [a-z0-9]: harf veya sayı olabilir, $: bitiş
const kontrol = /^s[a-z0-9]+$/; 

console.log(kontrol.test(kadi)); // true (s ile başladı ve kurallara uygun)
console.log(kontrol.test("123seyma")); // false (s ile başlamadı

