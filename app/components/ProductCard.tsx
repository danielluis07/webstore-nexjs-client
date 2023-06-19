import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  category,
  price,
  image,
}) => {
  return (
    <div className="mt-8 w-full border-[1px] border-gray-200 rounded-lg overflow-hidden hover:shadow-lg">
      <div className="w-full">
        <img
          className="w-full h-[300px] object-cover"
          src={image}
          width={300}
          height={300}
          alt="img"
        />
      </div>
      <div className="flex flex-col px-4 pb-4 pt-6 gap-4">
        <p className="text-gray-400">{category}</p>
        <p className="font-bold">{title}</p>
        <p className="text-green-500 font-bold">R$ {price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
