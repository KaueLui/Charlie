"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { CategoryColumn, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api_list";
import { Category } from "@prisma/client";



interface CategoryClientProps {
    data: CategoryColumn[]
}

export const CategoryClient: React.FC<CategoryClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    
    return (
        <>
        <div className="flex items-center justify-between">
           <Heading 
           title={`Categorias (${data.length})`}
           description="Organize as categorias de sua loja"
           />
           <Button onClick={() => router.push(`/${params.storeId}/categories/new`)}>
            <Plus className="mr-2 h-4 w-4"/>
            Adicionar um novo
           </Button>
        </div>
        <Separator />
        <DataTable searchKey="name" columns={columns} data={data} />
        {/*<Heading title="API" description="API chamadas da Categoria" />*/}
        <Separator />
        <ApiList entityName="categories" entityIdName="categoryId" />
        </>
    );
}

export default CategoryClient;