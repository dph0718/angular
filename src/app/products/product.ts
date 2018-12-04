//This is an _interface_.
//It's basically a data-type template for 
//angular component properties that don't
//fall into the number, boolean, string, Date data-types


//interface titles begin with "I", as convention
export interface IProduct {

    productId: number,
    productName: string,
    productCode: string,
    releaseDate: string,
    description: string,
    price: number,
    starRating: number,
    imageUrl: string

}