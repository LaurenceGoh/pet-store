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
  const pet = params.pet;
  return {
    title: pet.charAt(0).toUpperCase() + pet.slice(1),
    description: `Available ${pet}`,
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
