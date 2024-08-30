"use client"

import Button from "@/components/ui/Button";
import useCart from "@/hooks/use-cart";
import { ShoppingBag } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import UrlComponent from "@/components/url";

const NavbarActions = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(()=> {
        setIsMounted(true);
    }, []);

    const router = useRouter();
    const cart = useCart();

    if(!isMounted){
        return null;
    }

    return ( 
        <div className="ml-auto flex items-center gap-x-4">
            <Button onClick={() => router.push("/cart")} className="ml-auto flex items-center rounded-full bg=black px-4 py-2">
              <ShoppingBag 
              size={20}
              color="white"
              /> 
                <span className="ml-2 text-sm font-medium text-white">
                {cart.items.length}
                </span> 
            </Button>
            <UrlComponent />
        </div>
     );
}
 
export default NavbarActions;