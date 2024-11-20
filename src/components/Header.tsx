import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="flex justify-between items-center bg-white py-4 px-8 shadow-md">
      <div className="flex items-center">
        <Image src="/logo.jpg" alt="Erum's Bakery Logo" width={150} height={50} />
        <span className="text-xl font-bold text-purple-800"> </span>
      </div>
      <nav className="flex gap-8 items-center">
        <Link href="/" className="text-purple-800 font-semibold">Home</Link>
        <Link href="/cakes" className="text-purple-800 font-semibold">Cakes</Link>
        <Link href="/about" className="text-purple-800 font-semibold">About</Link>
        <Link href="/contact" className="text-purple-800 font-semibold">Contact</Link>
        <FaShoppingCart className="text-purple-800 text-xl" />
      </nav>
    </header>
  );
}

export default Header;






