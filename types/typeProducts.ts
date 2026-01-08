export type Product = {
    _id: string;
    userId: string;
    name: string;
    description: string;
    price: number;
    offerPrice: number;
    images: string[];
    category: string;
    date: string;
    subCategory: string;
    popular: boolean;
    new: boolean;
    quantity?: number;
}