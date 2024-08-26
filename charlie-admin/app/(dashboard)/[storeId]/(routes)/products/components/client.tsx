"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { ProductColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api_list";
import { Product } from "@prisma/client";



interface ProductClientProps {
    data: ProductColumn[]
}

export const ProductClient: React.FC<ProductClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    
    return (
        <>
        <div className="flex items-center justify-between">
           <Heading 
           title={`Produtos (${data.length})`}
           description="Organize os produtos de sua loja"
           />
           <Button onClick={() => router.push(`/${params.storeId}/products/new`)}>
            <Plus className="mr-2 h-4 w-4"/>
            Adicionar um novo
           </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" columns={columns} data={data} />
        <Heading title="API" description="API chamadas do produto" />
        <Separator />
        <ApiList entityName="products" entityIdName="productId" />
        </>
    );
}

export default ProductClient;