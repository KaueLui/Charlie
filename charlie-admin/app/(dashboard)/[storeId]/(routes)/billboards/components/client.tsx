"use client";

import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";
import { ApiList } from "@/components/ui/api_list";
import { Billboard } from "@prisma/client";



interface BillboardClientProps {
    data: Billboard[]
}

export const BillboardClient: React.FC<BillboardClientProps> = ({
    data
}) => {
    const router = useRouter();
    const params = useParams();

    
    return (
        <>
        <div className="flex items-center justify-between">
           <Heading 
           title={`Painéis (${data.length})`}
           description="Organize os painéis de sua loja"
           />
           <Button onClick={() => router.push(`/${params.storeId}/billboards/new`)}>
            <Plus className="mr-2 h-4 w-4"/>
            Adicionar um novo
           </Button>
        </div>
        <Separator />
        <DataTable searchKey="label" columns={columns} data={data} />
        {/*<Heading title="API" description="API chamadas do Painel" />*/}
        <Separator />
        <ApiList entityName="billboards" entityIdName="billboardId" />
        </>
    );
}

export default BillboardClient;