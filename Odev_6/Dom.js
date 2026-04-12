//DOM(Document Object Model)
//JS ile herbir HTML etiketinin (h1,div,p) rengini değiştirebiliriz veya yeni dallar ekleyebiliriz.

//Bir şeyi değiştirmek için önce onu tutmamız lazım.
//getElementById:sadece bir kişiyi(id'si olanı) çağırmak gibi.
//querySelector:CSS yazar gibi seçmek.(.title dersen ilk class'ı, #id dersen id'yi seçer)
//querySelectorAll: O özellikteki herkesi çağırır.


//İçeriği ve stili değiştirme
//textContent:Sadece metni değiştirir.
//innerHTML:içine resmen yeni HTML etiketleri gömmemizi sağlar.
//.style:CSS özelliklerine müdahale eder.(CSS'de background-color olan şey, JS'de backgroundColor (camelCase) olur.)


//Class işlemleri(classList)
//CSS'de bir class hazırlarsın (mesela .aktif diye bir sınıf), sonra JS ile onu ekleyip çıkarırsın.
//baslik.classList.add('aktif') : classı ekler
//baslık.classList.remove('aktif) : classı siler.

//Döngüyle Herkese Dokunmak (forEach)


//document.createElement('tag'): Hafızada boş bir kutu oluşturur.
let yeniBaslik = document.createElement('h1') // <h1></h1> oluştu
yeniBaslik.textContent = 'Selam!' // İçine yazı yazdık
//.textContent: Kutunun içine yazı yazar.

//.appendChild(): Kutuyu sayfaya ekler.
document.body.appendChild(yeniBaslik) // Artık ekranda görünüyor!


//Diyelim ki ekrana bir buton ekledik ama o butona tıklandığında ne olacağını söylemezsek o sadece resim gibi durur.
//addEventListener ile bunu yapıyoruz.
ElementInternals.addEventListener('olay_türü', yapılacal_iş)
//click:Fareyle tıklandığında
//input:Klavyeden her bir harf yazıldığında (Arama kutusu)
//mouseenter:Fare üzerine geldiğinde(Hover efect gibi)
//blur:Kutudan çıkıldığında (Bu alan boş. bırakılamaz olaylarında.