//ÇerezlerÖnceden veriler burda saklanıyormuş ama küçük(4kb) ve her seferinde sunucuya gidip gelip interneti yavaşlatıyormuş.
//HTML5 ile gelen web storage ise:
//Büyük:En az 5 mb, Hızlı:veriler sadece benim tarayıcımda,sunucuya boş yere gitmiyo.
//Güvenli:sadece benim sitem bu verilere erişebiliyo.

//LocalStorage:Tarayıcıyı kapatsak da bilgisayarı yeniden başlatsak da kodla clear() diyene kadar veriler kalır.
//setItem('anahtar','değer'):Veriyi kaydetmek için
//getItem('anahtar'):Kaydedilen veriyi çağırmak için 
//removeItem('anahtar'):Sadece belirli bir veriyi silmek için
//clear():Her şeyi,tüm hafızayı silmek için.
//ÇOK ÖNEMLİ!!! LocalStorage sadece string saklayabilir.
//Eğer bir dizi veya obje kaydetmek isgtiyorsak JSON.stringfy()ile paketle,JSON.parse()ile aç.







//Sessionstorage:Sadece o sekme açık kaldığı sürece hatırlar.Sekme kapandığı an her şey silinir.
//Kullanıcı siteden çıktığında verilerin bilgisayarda kalmasını istemediği durumlarda,
//Sekemeler arası verilerin karışmasını istemediğimz durumlarda,
//sadece tek seferlik bir kez gösterip sonra unutmak istediğimiz durumlarda kullanılır.
//LocalStorage'daki metotlar burda da aynen çalışıyor.


