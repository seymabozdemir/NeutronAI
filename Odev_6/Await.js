//JS,fetch dediğinde verinin internetten gelmesini beklemez,hemen bir sonraki satıra geçe.
//Await dersek onu veri gelene kadar bekletmiş oluruz.
const verileriGetir = async () => {
    try{
        const cevap = await fetch('member.json')//Veriyi çekene kadar bekle.
        const veriler = await cevap.json() //Veriler Js objesine dönüşene kadar bekle.
        console.log("Veriler hazır.", veriler)
    } catch(hata) {
        console.error("Bir şeyler ters gitti:", hata)
    }
}


//PROMISE:Bir veri gelecek ama biraz vakit alacak iş sözü
const veri = fetch("üyeler.json") //Bu işlem 2 saniye sürüyo diyelim
console.log(veri)//Burda hata alırız çünkü veri daha gelmedi.

//üstteki yapıya bir promise yapısı diyoruz.
// .then yerine await koyduk(verinin gelmesini bekle ve bir değişkene at.)
//.catch yerine try{...} catch{...} blokları kullandık güvenlik duvarı gibi düşün.
//async ise bir uyarı JS'ye bu fonksiyonda beklemeli işler var diyoruz.