export type ProductCardProps = {
  product: {
    title: string;
    rating: number;
    numberOfRatings: number;
    price: number;
    imgSrc: string;
    discountPrice?: number;
  };
};
