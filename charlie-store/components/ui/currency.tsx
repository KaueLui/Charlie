"use client";

import { useEffect, useState } from "react";

const formatter = new Intl.NumberFormat("pt-BR", {
    style: 'currency',
    currency: 'BRL'
  });

  interface CurrencyProps {
    value?: string | number;
  }

const Currency: React.FC<CurrencyProps> = ({
    value
}) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted){
        return null;
    }

    return (
        <div className="font-semibold">
            {formatter.format(Number(value))}
        </div>
    );
}

export default Currency;