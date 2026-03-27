//Konsol, kodun naptığını hata olup olmadığını haber eder.

//console.log:nerde olduğunu söylemek veya  veri geldi demek için falan kullanılır.
//Mesajları renklendirebiliriz:console.log('%cEkip Başarıyla Yüklendi', 'color: green; font-weight: bold;')

//Console.warn()-console.error():Kodda bir şeylerin yanlış gittiğini anlatır.
//warn:kod çalışıyo ama iyi bir yöntem değil dikkat et.
//error:hata mesajı verir.

//console.table():Elimizde dizi veya nesene falan gibi şeyler varsa bunu excel tablosu gibi düzenli göstermek iin kullanıır.

//console.time()-console.timeEnd():Kronometre,kodun hızını ölçmek için
//işlem başlamadan önce:console.time('FiltrelemeSüresi')
//İşlem bittikten sonra:console.timeEnd('FiltrelemeSüresi')
//Konsol milisaniye cinsinden ne kadar sürdüğünü söyler.

//Console.assert():Durumların doğruluğundan emin olmak için
//Durum yanlışsa hata verir doğruysa bir şey olmaz
//console.assert(tumEkip.length === 18, 'Eyvah, ekipte eksik var!')

//console.group():Klasörleme

//console.count():Bir fonk.un kaç kez çalıştığıa bakmak için kullanılır.

//ERROR HANDLİNG
//TRY: için tehlikeli yüklerken endişe ettiğimiz mesela benim yaptığımda verilerin tamamı gelicek mi diye düşündüğümğz yere koyduk.
//CATCH:try'daki kodda bir sıkıntı olursa burası çalışır.
//THROW:BAZEN HATA OLMAZ AMA hata var demek istersekkullanırız.
//Kullanıcı yaşını -5 girdi. Matematiksel olarak hata yok ama mantıksal olarak var. O zaman throw new Error("Yaş negatif olamaz!") diyerek kendi hatanı girersin.
//FİNALLY:İşlemin sonucu ne olursa olsun çalışacak kısım kod başarılı da olsa hata da verse çalışacak şeyi buraya yaz.

