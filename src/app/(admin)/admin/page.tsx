import React from "react";
import type { Metadata } from "next";
import { petsColumns, accessoriesColumns } from "./columns";
import { DataTable } from "./data-table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Admin page",
    description: `Admin page`,
  };
};

const page = async () => {

  const {getPermission} = getKindeServerSession()

  if (!(await getPermission("admin-permissions"))?.isGranted) {
    redirect('/api/auth/login?post_login_redirect_url=/admin')
  }

  const pets = await fetch("http://localhost:3000/api/pets", {
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());

  const accessories = await fetch("http://localhost:3000/api/accessories", {
    next: {
      revalidate: 0,
    },
  }).then((res) => res.json());


  return (
    <main className="flex flex-col items-center justify-between p-12">
      <Tabs defaultValue="pets" className="w-4/5">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="pets">Pets</TabsTrigger>
          <TabsTrigger value="accessories">Accessories</TabsTrigger>
        </TabsList>
        <TabsContent value="pets">
          <DataTable columns={petsColumns} data={pets} />
        </TabsContent>
        <TabsContent value="accessories">
          <DataTable columns={accessoriesColumns} data={accessories} />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default page;
