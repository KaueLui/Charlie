"use client";

import { ColumnDef } from "@tanstack/react-table"

export type OrderColumn = {
  id: string
  phone: string
  address: string
  isPaid: boolean
  totalPrice: string
  products: string
  createdAt: string
}

export const columns: ColumnDef<OrderColumn>[] = [
  {
    accessorKey: "products",
    header: "Produtos",
  },
  {
    accessorKey: "totalPrice",
    header: "Preço Total",
  },
  {
    accessorKey: "createdAt",
    header: "Data da Venda",
  },
  {
    accessorKey: "isPaid",
    header: "Pago",
  },
  //{
  //  accessorKey: "phone",
  //  header: "Telefone",
  //},
  //{
  //  accessorKey: "address",
  //  header: "Endereço",
  //},
]
