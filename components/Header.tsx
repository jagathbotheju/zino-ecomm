import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import AuthButton from "./AuthButton";

const Header = () => {
  return (
    <div className="flex flex-col bg-slate-800 p-8 shadow-md">
      <div className="container mx-auto items-center justify-between flex">
        <Link href="/">
          <h1 className="text-white text-3xl font-bold">
            Shop<span className="text-red-600">Ito</span>
          </h1>
        </Link>

        <div className="flex items-center gap-4">
          <AuthButton />
          <Link href="/cart">
            <FaShoppingCart className="text-white w-5 h-5 hover:text-red-600" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
