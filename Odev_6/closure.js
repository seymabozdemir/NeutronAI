//Eğer bir fonksiyonun içinde başka bir fonksiyon yazarsan ve içteki fonksiyon, dıştaki fonksiyonun değişkenini kullanırsa; o değişken dış fonksiyon bitse bile silinmez.
function disFonksiyon(){
    let sayac = 0 //Bun değişken dişa ait ve ilerde değiştirdiğimiz için let ile tanımladık
    function icFonksiyon (){
        sayac++ //Bu içteki fonk dıştakine ulaşıyor.
        return sayac
    }
    return icFonksiyon //iç fonksiyonu kaydetmiş oluyoruz.
}
const calistir = disFonksiyon