const takimUyeleri = [
    {
        isim: "Elif Yaren Şakar",
        rol: "Takım kaptanı",
        bolum: "Bilgisayar mühendisliği öğrencisi"
    },
    {
        isim: "Bilge Nur Demirel",
        rol: "Arayüz ekip üyesi",
        bolum: "Bilgisayar mühendisliği öğrencisi"
    },
    {
        isim:"Şeyma Bozdemir",
        rol: "Arayüz alt ekip üyesi",
        bolum: "Bilgisayar Mühendisliği öğrencisi"
    }
    //virgülleri unutma

]
//Obje içine değer tanımlarken : kullan.


const container = document.getElementById('cardContainer')
//Bootstrapte direkt dosya adı ile htmle çekiyordum kodları ama JS'de durum farklı.
//burda net tanımlı bir kütüphane olmadığı için neyin nereye konacağı bizim elimizde
//bunu da sadece biz biliyoruz ama bunu tanıtmamaız gerektiği için JS'nin htmli tanıması lazım.
//Böylece adresi yani kartların döküleceği yeri JS'ye tanıtmış olduk.

takimUyeleri.forEach(uye => {
    const kartYapisi = `
        <div class="col-md-4 mb-4">
            <div class="card shadow-sm h-100">
                <div class="card-body">
                    <h5 class="card-title text-primary">${uye.isim}</h5>
                    <h6 class="card-subtitle mb-2 text-muted">${uye.rol}</h6>
                    <p class="card-text">${uye.bolum}</p>
                </div>
            </div>
        </div>
    `
    container.innerHTML += kartYapisi //Bu kodla hazırladığımız kart yapısını htmldeki container içine ekledik
})


//FİLTRELEME KISMI

const searchInput = document.getElementById('searchInput')

//Input kutusu kontrolcüsü ekliyoruz.
searchInput.addEventListener('input',(e) => {
    const arananKelime = e.target.value.toLowerCase() //yazılanıi Küçük harfe çevirdik
    container.innerHTML = "" //Her harf yazıldığında ekrandakileri temizledik ki sadece filtrelenenler gelsin.
    const filtrelenmisListe = takimUyeleri.filter(uye => 
        uye.isim.toLowerCase().includes(arananKelime))
    filtrelenmisListe.forEach(uye => {
        container.innerHTML += `
            <div class="col-md-4 mb-4">
                <div class="card shadow-sm h-100">
                    <div class="card-body">
                        <h1 class="card-title text-primary">${uye.isim}</h1>
                        <p class="card-text"><strong>${uye.rol}</strong></p>
                        <p class="text-muted small">${uye.bolum}</p>
                    </div>
                </div>
            </div>`})
})







