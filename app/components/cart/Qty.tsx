import { useContext } from "react";
import { CartContext } from "@/app/context/CartContex";

type QtyProps = {
  item: {
    id: string;
    attributes: {
      title: string;
      description: string;
      price: number;
      image?: {
        data: Array<{
          id: string;
          attributes: {
            url: string;
          };
        }>;
      };
    };
    amount: number;
  };
};

const Qty: React.FC<QtyProps> = ({ item }) => {
  const { handleSelect, handleInput } = useContext(CartContext) as HandleInput;
  return (
    <div className="flex gap-x-6 items-center">
      {item.amount < 10 ? (
        <select
          className="p-2 rounded-lg w-[100px] h-10 border-2 border-black"
          onChange={(e) => handleSelect(e, item.id)}
          value={item.amount}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10 +</option>
        </select>
      ) : (
        <input
          onBlur={(e) => handleInput(e, item.id)}
          type="text"
          placeholder={`${item.amount}`}
        />
      )}
    </div>
  );
};

export default Qty;
