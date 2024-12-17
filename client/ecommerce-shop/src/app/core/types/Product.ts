export interface Product{
    _id: string,
    name: string,
    code: string,
    brand: string,
    price: number,
    description: string,
    boughtBy?: Array<string>
}