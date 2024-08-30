import React, { useState } from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

const UrlComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative ml-auto flex items-center space-x-4">
      <button 
        onClick={toggleMenu} 
        className="text-neutral-500 hover:text-black focus:outline-none"
      >
        <FaUserCircle size={28} />
      </button>

      {isOpen && (
        <div className="absolute left-6 mt-20 z-50">
          <div className="w-48 bg-white border border-gray-300 rounded-lg shadow-lg">
            <div className="p-4">
              <p className="font-semibold">Usuário</p>
            </div>
            <div className="border-t">
              <Link href="http://localhost:3002/php/login.php"> 
                <p className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 cursor-pointer">
                  Entrar
                </p>
              </Link>
            </div>
            <div className="border-t">
              <Link href="http://localhost:3002/php/register.php"> 
                <p className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 cursor-pointer">
                  Registrar-se
                </p>
              </Link>
            </div>
            <div className="border-t">
              <Link href="/sign-out">
                <p className="block px-4 py-2 text-sm text-neutral-700 hover:bg-neutral-100 cursor-pointer">
                  Sair {/*Isso só deve aparecer se caso o usuário estiver logado */}
                </p>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UrlComponent;
