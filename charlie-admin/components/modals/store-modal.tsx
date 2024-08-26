"use client";

import * as z from "zod";
import axios from "axios";
import { useStoreModal } from "@/hooks/use-store-modal";
import { Modal } from "@/components/ui/model";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "react-hot-toast";


const formSchema = z.object({
    name: z.string().min(1),
});

export const StoreModal = () => {
    const StoreModal = useStoreModal();

    const [loading, setLoading] = useState(false);

    const form= useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
        },
    });
    const onSubmit= async (values: z.infer<typeof formSchema>) => {
       try {
        setLoading(true);

        
        const response = await axios.post('/api/stores', values);

        window.location.assign(`/${response.data.id}`);
        toast.success("Loja criada.")
       } catch (error) {
       toast.error("Algo deu errado");
       } finally{
        setLoading(false);
       }
    }

    
    return(
        <Modal
            title="Criar nova loja" description="Crie uma nova loja e organize seus produtos e categorias" isOpen={StoreModal.isOpen} onClose={StoreModal.onClose}>
            <div>
                <div className="space-y-4 py-2 pb-4">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                        <FormField
                            control={form.control}
                            name="name"
                            render={( { field } ) => (
                                <FormItem>
                                    <FormLabel>Nome</FormLabel>
                                    <FormControl>
                                        <Input disabled={loading} placeholder="E-Commerce" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                            />
                            <div className="pt-6 space-x-2 flex items-center justify-end w-full">
                                <Button disabled={loading} variant="outline" onClick={StoreModal.onClose}>
                                    Cancelar
                                </Button>
                                <Button disabled={loading} type="submit">Continuar</Button>
                            </div>
                    </form>
                </Form>
                </div>
            </div>
        </Modal>
    );
};