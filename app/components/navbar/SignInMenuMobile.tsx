import { useCallback, useState } from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import Avatar from "./Avatar";

const SignInMenuMobile: React.FC<User> = ({ session }) => {
  const registerModal = useRegisterModal();
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);
  return (
    <div className="relative">
      <div onClick={toggleOpen}>
        <Avatar src={session?.user?.image} />
      </div>
      {isOpen && (
        <div className="p-4 absolute rounded-xl shadow-md w-[30vw] bg-white overflow-hidden right-0 top-8 text-sm">
          <div
            className="cursor-pointer hover:text-green-500"
            onClick={registerModal.onOpen}>
            Entrar
          </div>
        </div>
      )}
    </div>
  );
};

export default SignInMenuMobile;
