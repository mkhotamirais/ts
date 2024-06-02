// yang terpenting adalah meminimalisasi penggunaan tipe 'any'
// function yang tipenya 'void' artinya tidak mengembalikan nilai;
// tupple: type array yang isinya sudah ditentukan
// union type: type baru yang isinya type lainnya.
// interface: sama dengan tipe data object. bedanya interface bisa diturunkan.
// any, array, tuples, enums, function, objects
// js: number, string, boolean, null, undefined, object
// ts: any, unknown, never, enum, tuple

/* lesson 1*/
// let nama: string = "ahmad";
// nama = "abdul";
// // nama = 1 // salah, harusnya string
// let umur: number = 20;
// umur = 'dua puluh' // salah, harusnya number

/* lesson 2*/
// let var1: number; // valuenya hanya number
// let var2: number | string; // valuenya bisa number atau string
// let var3: string[]; // valuenya array yang isinya string semua
// let var4: [string, string, number, boolean]; // valuenya array yang isinya sesuai tipe data di dalam arraynya secara berurutan, ini disebut tupple
// let var5: { nama: string; umur: number }; // valuenya object yang isinya sesuai value dan tipe data dalam objectnya;
// type Var6Type = string;
// let var6: Var6Type // ini sama seperti var1 hanya saja type-nya dipisah
// type Var7Type = { nama: string; umur: number; isLife: boolean };
// let var7: Var7Type; // ini sama seperti var6 hanya saja type-nya dipisah
// let var8: { nama: string; umur?: number }; // tanda tanya '?' artinya optional, bisa diisi atau tidak.
// var1 = 1_000;
// var8 = { nama: "ahmad" };
// console.log({ var1, var8 });

/* lesson 3*/
// function fn1(): string {
//   return "hello1";
// }
// const fn2 = (): string => "hello2";
// const fn3 = (param1: number, param2: number): number => param1 + param2;

/* lesson 4*/
// interface Product {
//   name: string;
//   price: number;
// }
// interface ProductMakanan extends Product {
//   expire: number;
// }
// interface ProductAlatListrik extends Product {
//   isBerfungsi: boolean;
// }
// const addProduct = (product: Product) => product;
// const addProductMakanan = (product: ProductMakanan) => product;
// const addProductAlatListrik = (product: ProductAlatListrik) => product;
// addProduct({ name: "buku", price: 3000 });
// // addProduct({ name: "buku", price: "tiga ribu" }); // salah
// // addProduct({ name: "buku" }); // salah
// addProductMakanan({ name: "cokolatos", price: 1000, expire: 10 });
// addProductAlatListrik({ name: "cokolatos", price: 1000, isBerfungsi: true });
