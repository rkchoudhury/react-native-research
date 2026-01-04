interface Tag {
    id?: number;
    name?: string;
}

interface Category {
    id?: number;
    name?: string;
}

const PetStatusEnum = {
    Available: 'available',
    Pending: 'pending',
    Sold: 'sold',
};

export interface Pet {
    id?: number;
    category?: Category;
    name: string;
    photoUrls: string[];
    tags?: Tag[];
    status?: typeof PetStatusEnum[keyof typeof PetStatusEnum];
}
