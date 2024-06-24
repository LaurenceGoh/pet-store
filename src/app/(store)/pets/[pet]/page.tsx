import React from "react";
import type { Metadata } from "next";
import StoreCard from "@/components/StoreCard";
type Props = {
  params: { pet: string };
  searchParams: { [key: string]: string | string[] | undefined };
};
export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const accessory = params.pet;
  return {
    title: accessory.charAt(0).toUpperCase() + accessory.slice(1),
    description: `Accessory Details for ${accessory}`,
  };
};

const page = ({ params }: Props) => {
  return (
    <main className="flex flex-col justify-between items-center">
      Clicked on {params.pet}
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </main>
  );
};

export default page;
