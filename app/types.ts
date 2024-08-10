export interface Tour {
    id: number;
    title: string;
    image: any; // Replace `any` with the appropriate image type
    images: { id: number; image: any }[]; // Replace `any` with the appropriate image type
    price: string;
    duration: string;
    rating: number;
    description: string;
}

export interface TourCategory {
    id: number;
    title: string;
    tours: Tour[];
}
