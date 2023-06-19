type ProductsProps = {
  data: Array<{
    id: number;
    attributes: {
      title: string;
      categories: {
        data: Array<{
          id: string;
          attributes: {
            title: string;
            description: string;
          };
        }>;
      };
      description: string;
      price: number;
      image?: {
        data: Array<{
          attributes: {
            url: string;
          };
        }>;
      };
    };
  }>;
};

type ProductCardProps = {
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
};

type User = {
  session?: {
    user?:
      | ({
          accessToken: string;
          userId: number;
        } & {
          name?: string | null | undefined;
          email?: string | null | undefined;
          image?: string | null | undefined;
        })
      | undefined;
    expires?: string | undefined;
  } | null;
};

type CategoryProps = {
  data:
    | undefined
    | Array<{
        id: number;
        attributes: {
          title: string;
          description: string;
        };
      }>;
};

type CartIconProps = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  itemsAmount: number;
};

type CartDiv = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  cart: Array<{
    id: string;
    amount: number;
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
  }>;
  total: number;
  clearCart: () => void;
};

type SetNavMobile = {
  setCatnavMobile: Dispatch<SetStateAction<boolean>>;
};

type AddToCart = {
  addToCart: (item: Array<{}>, id: string) => void;
};

type RemoveFromCart = {
  removeFromCart: (id: string) => void;
};

type HandleInput = {
  handleInput: (
    e: {
      target: {
        value: string;
      };
    },
    id: string
  ) => void;
  handleSelect: (
    e: {
      target: {
        value: string;
      };
    },
    id: string
  ) => void;
};
