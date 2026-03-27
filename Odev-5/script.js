//Fetch:JS'nin dış dünyaya açılan kapısı.(Başka dosyalar,internet)
//İşlevi,Veri alışverişi yapmak,istenen dosyayı bulup geri getirmek.

//İnternetten veri çekmek zaman alır.Dosya büyük olabilir veya internet yavaş olabilir.
//Fonksiyonun başına async(Asenkron) yazdığımızda JS bu fonk.daki işlerin biraz uzun süreceğini anlar.
//await(bekle):Bu kelimeyi de fetch'in önüne koyduğumuzda veri gelene kadar dur başka satıra geçme demiş oluruz.

let tumEkip = []//elimizde her zaman listenin bulunmasını istediğimiz için hiçbir fonk.un içine yazmadan en başa yazdık.
//Bunu yazmasaydık bir kere filtrelediğimizde verilerin tamamını kaybederdik.

async function takimiGetir(){ //Fonksiyona başladık ve baştan beklememiz gerektiğini belirttik.
    try { //Hata Kontrolü BAşlangıcı:JS'ye aşağıdaki kodları çalıştırmayı dene hata çıkarsa catch bloğuna atla diyoruz.
        const cevap = await fetch('members.json')
        //members.json'dan veri istiyoruz ama veri gelene kadar alt satıra geçme bekle dedik.
        //const cevap:Gelen paketi cevap'a koyduk.
        const veri = await cevap.json()//Gelen paket JS'nin anlayabileceği formatta değil.
        //.json komutu ile onu JS'nin anlayabileceği bir dizi (array)e çeviriyoruz.
        //Bu çevirme de milisaniye de olsa zaman aldığı için JS'ye bekle diyoruz.
        tumEkip = veri
        kartlariOlustur(tumEkip)//Elimizdeki veriye kartlarıOlustur fonksiyonuna da veriyoruz 
        console.log("NEUTRONAI Ekibi Listesi:", veri)//Her şey doğru gittiyse veri gelmiştir.
    
} catch (hata) { //Eğer try içinde bir yerde bir terslik olursa kod durmaz direkt buraya atlar ve hatanın ne olduğunu söyler.
        console.log("Bir sorun oluştu:", hata);
    }
}
takimiGetir() //Fonksiyonu yukarda tanımladık burda çalıştırıyoruz şimdi.


//TÜM KODUN ÖZETİ
//Git dosyayı bul ve getir (fetch),dosya gelene kadar bekle(await),gelen veriyi aç(json) ve ekrana yazdır.

//Şİmdi gelen 18 kişilik listeyi alıp kartalara dönüştürüyoruz.
function kartlariOlustur(liste) {
    const raf = document.getElementById('member-row') //Kartları koyacağımız yeri tanımladık.
    raf.innerHTML = ""//Sayfayı her yenilediğimizde burayı boşaltıyoruz ki kartlar üst üste binmesin
    const favoriler = JSON.parse(localStorage.getItem('favoriListem')) || []
    //Favori listemdeki stringi aldık,stringi okuyamayacağımız için diziye çevirdik,eğer hazıfa boşsa da boş bir liste olarak kabul ettik.
    
    liste.forEach (kisi =>{ //Listedeki her kisiyi döngüye soktuk.
        //LocalStorage(favoriler)dan çektiğimiz listedeki idlerden biri favori listesinin içinde var mı varsa T döndür yoksa F döndür dedik.
        const isFavori = favoriler.includes(kisi.id)

        const butonRengi = isFavori ? "btn-danger" : "btn-outline-danger"
        const butonMetni = isFavori ? "Favorilerde" : "Favoriye Ekle"
        
        //Rafın içine (+=) bir kişi için Bootstrap kartı ekliyoruz
        raf.innerHTML+= ` 
            <div class="col-md-4 mb-4">
                <div class="card h-100 shadow-sm ${isFavori ? 'border-danger' : ''}">
                    <div class="card-body text-center">
                        <h5 class="card-title">${kisi.name}</h5>
                        <span class="badge bg-primary">${kisi.team}</span>
                        <hr>
                        <button onclick="favoriyeEkle(${kisi.id})" class="btn ${butonRengi} btn-sm">
        ${butonMetni}
    </button>
                    </div>
                </div>
            </div> `
        //"``"(Template Literals) kullanma sebebimiz,normal tırnak içinde ${} kullanamayız.
        //Ama bu tırnakla hem HTML kodları yazabiliriz hem de ${kisi.name} diyerek JS değişkenlerini içine yedirebiliriz.
    })
}

//Bu kısım süzülme kısmı için yani ROS'a mı bastık rostakiler görünücek böyle yapıcaz.
function filtrele(ekipAdi){
    if(ekipAdi=='Hepsi'){
        kartlariOlustur(tumEkip) //Hepsi dendiyse 18 kiişiyi de göster.
    } else{
        const suzulenler = tumEkip.filter(kisi => kisi.team === ekipAdi)
        kartlariOlustur(suzulenler)//Sadece o ekibi ekrana bas
    }
}



//Şimdi LocalStorage kısmı:"Favori butonu eklenecek,sayfa yenilense bile o kişi favorilerde olacak."
//bunu yapabilmek için tarayıcının içindeki LocalStorage (gizli not defteri) kısmını kullanıcaz.
//localStorage.setItem('anahtar','değer'):Hafızaya bir şey yazmak kaydetmek istediğimizde
//locakStorage.getItem('anahtar'):Hafızadan o bilgiyi okumak,hatırlamak için
//Ama bu işlemler kalıcı unutma.
//Bir de localStorage sadece düz yazı(string) saklar.
//Ama bizim eklicemiz favori listesi dizi(array) olacak.[1,3,5]
//Bu diziyi hafızaya koyarken yazıya çevirmemiz hafızadan çekerken de tekrar diziye çevirmemiz lazım.

//Şimdi favorilere ekleme fonksiyonu yazıyoruz.
function favoriyeEkle(id){
    //Önce favori listesini açıp bakıyoruz boş mu dolu mu diye.
    //Eğer boşsa (null) hata almamak için boş dizi kullanıyoruz. (||)veya demek.
    let favoriler = JSON.parse(localStorage.getItem('favoriListem'))|| []

    const index = favoriler.indexOf(id)
    if(index>-1){
        //Eğer listede varsa o id'yi listeden siliyoruz zaten olanı çıkarıyoruz.
        favoriler.splice(index,1)
        alert("Favorilerden çıkarıldı!")
    } else{
        //Lİstede yoksa listeye ekle(push)
        favoriler.push(id)
        //Lİsteyi yazıya çevirip(stringyfy) değişikliği kaydediyoruz(setItem)
        
        alert("Başarıyla favorilere eklendi!")

    }
    localStorage.setItem('favoriListem', JSON.stringify(favoriler))
    location.reload(); // Sayfayı yeniler ki kartın rengi hemen değişsin.

}

//Sadece favorileri görmek için fonksiyon yazıyoruz şimdi.
function favorileriGoster (){
    const favoriler = JSON.parse(localStorage.getItem('favoriListem')) || []

    //idsi favoriler listesinde olanları süzüyoruz.
    const sadeceFavoriler = tumEkip.filter(kisi => favoriler.includes(kisi.id))

    if (sadeceFavoriler.lenght===0){
        alert("Henüz favori listesi boş!")
    }else{
        kartlariOlustur(sadeceFavoriler)
    }
}

//Arama butonu fonksiyonu.
function isimleAra (){
    const arananMetin = document.getElementById('aramaKutusu').value.toLowerCase()
    const bulunanlar = tumEkip.filter(kisi =>
        kisi.name.toLowerCase().includes(arananMetin)
    )
    kartlariOlustur(bulunanlar)
}
