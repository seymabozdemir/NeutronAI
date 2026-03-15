78

let nums = [1, 2, 3]
 nums[0] //1

/*Math.object ile matematik ile ilgili büyük bir kütüphaneye erişebiliyoruz
Math.round(PI) = PI'yi en yakın tam sayıya yuvarlıcak
Math.ceil(PI) = sayıyı ondan büyük en yakın tam sayıya yuvarlar
Math.floor(PI) = sayıyı ondan küçük en büyük tam sayıya yuvarlar
Math.pow(3, 2) = 9 (Üs alma)
Math.sqrt(100) = 10 (Karekök)
*/

/*Dizideki en küçük sayıyı döndürüyo */
console.log(Math.min(3, 5, -1, 50))
/*iki atama değişkeni böyle birleştirip başka bir değişkene ekleyebiliyıruz.*/
let name = 'Şeyma'
let surname = 'Bozdemir'
let fullname = name + surname
console.log(fullname)

/*Eğer çok uzunsa tek satırda yazmak hem zor hem okunması kötü.
'' → bu demek oluyor ki “string devam ediyor” */

const text = `Benim adım Şeyma. 
Ben bilgisayar mühendisiyim. 
Çok uzun bir yazı...`

console.log(text)