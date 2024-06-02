// let price: number = 50_000;
// let detail; // detail tipe datanya 'any' hindari penulisannya.
// detail = "detail value"

/* enum */
// const enum Size {
//   Small = 1,
//   Medium,
//   Large,
// }
// let mySize: Size = Size.Medium;
// let mySize2: Size = Size.Large;

/* readonly */
// const obj: { readonly id: number; name: string } = { id: 10, name: "ahmad" };
// obj.id = 11; // id tidak bisa diubah karena readonly
// obj.name = "abdul" // name bisa diubah karena tidak readonly

/* type aliases */
// type TUser = string;
// type TProduct = { name: string; price: number };
// const user: TUser = "ahmad";
// const product: TProduct = { name: "buku", price: 5000 };

/* union ( | ) intersection ( & ) */
// const user: string | number = "ahmad"
// const user: string & number = "ahmad" // ini salah dan tidak mungkin untuk contoh intersection
// const user: { name: string } & { age: number } = { name: "ahmad", age: 10 }; // contoh penerapan intersection yang benar
// type UserName = { name: string };
// type UserAge = { age: number };
// const user: UserName & UserAge = { name: "ahmad", age: 10 }; // contoh penerapan intersection yang benar, sama dengan sebelumnya

/* literal types */
// const user: 'ahmad' | 'abdul' | 'siti' = "abdul" // hanya bisa diisi dengan ahmad, abdul atau siti;

/* nullable */
// const user: string | null = null;

/* optional chaining ( ? ) */
