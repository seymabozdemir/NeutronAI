//JSON veri depolama ve iletimi için hafif bir veri formatıdır.Genellikle verilerin bir sunucudan bir istemciye gönderildiği durumlarda kullanılır.
//JSON yalnızca  metin veya dizelerden oluşur.
//JSON'nnın normal bir nesneden farkı çift tırnak içinde olması veya bir dize olması gerektiğidir.
//Elimşze bir JSON dosyası geldiğinde içindeki verilere ulaşmak için onları JS objesine çevirmemiz lazım.

const jsonVeri = '{"ad":"Şeyma","ekip": "GUI"}' //Bu string
const objeHali = JSON.parse(jsonVeri) //artık bu obje hali .

//Elimizdeki objeyi de bir dosyaya yazmak veya internetten bir yere göndermek istiyorsak onu da metne çevirmemiz lazım.
const benimObje = {ad:"Şeyma" , puan: 100}
const jsonHali = JSON.stringyfy(benimObje) //Üstteki obje metin oldu.

//Replacer(JSON.stringify ile) veri dışarı çıkarken bazı şeyleri gizlemeyi vrya filtrelemeyi sağlar.
//Şifrelerin de olduğu bir veride sadece isimleri gösterme gibi.


//Reviver(JSON.parse ile) veri alınırken müdahale etmeyi sağlar
//Mesela tüm isimleri büyük harf yapmak gibi.




