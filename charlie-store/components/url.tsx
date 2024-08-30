import React from 'react';
import Link from 'next/link';
import { FaUserCircle } from 'react-icons/fa';

const UrlComponent: React.FC = () => {
  return (
    <div className="ml-auto flex items-center space-x-4">
      <Link href="http://localhost:3002/php/login.php">
        <p className="text-neutral-500 hover:text-black">
          <FaUserCircle size={28} />
        </p>
      </Link>
    </div>
  );
};

export default UrlComponent;
