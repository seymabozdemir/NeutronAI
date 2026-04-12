//boş bir form gibi hangi bilgilerin doldurulması gerektiğini yazar ama içinde o bilgiler yoktur.
//Bu bilgilerin doldurulmuş haline nesne(object) denir.
//Diyelim ki geçen yaptığım gibi b ir üye listesi yapıyo olsak tek tek herbir üye için isim id takım yazmaya gerek yok .
//Böyle bir class tanımlarız ve sonradan daha hızlı doldururuz.
class TakimUyesi {
    constructor(id,isim,ekip){ //Gelen verileri alıp nesne içine koyar.
        this.id = id;
        this.name = isim;
        this.team = ekip
        this._puan = puan //Bu puan gizli bir değişken dışarıdan dokunulmasını istemiyoruz.
    }
    //NEsnelerin yapabileceği işleri sınıfın içine fonksiyon olarak yazabiliriz.
    kendiniTanit() {
        return `MErhaba ben ${this.name} ve ${this.team} ekibindeyim.`
        }
    get  puanDurumu () { //Veri okurken kullanılcak.
        return `${this.name} isimli üyenin güncel puanı: ${this._puan}`
    }
    set puanGuncelle (yeniPuan) { //Veri değiştirilirken kullanılacak.
        if (yeniPuan <0 ){
            console.error("Puan negatif olamaz!")
        }else {
            this._puan = yeniPuan
            console.log("Puan başarıyla güncellendi.")
        }
    }

}   


const uye1 = new TakimUyesi(1,"Şeyma","Javascript")
const uye2 = new TakimUyesi(2,"Ahmet","Python")


//INHERITANCE(KALITIM-MİRAS)
//Şimdi bir takım üyesi sınıfımız var ya bir de yönetici sınıfı yapsak.
//Ama yöneticinin de idsi adı ekibi var.Sıfırdan yazamak yerine diğer sınıftan miras alınır.

class yonetici extends TakimUyesi{ //Extends mias almayı sağlar.
    constructor(name,team,Yetki){
        super(name,team)//Uye sınıfındaki constructurı çalıştırmak için.
        this.Yetki = Yetki//Bunu yapma sebebimiz sadece constructure içine yazsak veri sadece parantez içinde kaldı 
        //Ama bunu yazınca veri artık o objenin bir parçası oluyor.
    }
}












