import React from "react";
import type { Metadata } from "next";
import StoreCard from "@/components/PetCard";
import { SelectPets } from "@/db/schema";
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

const page = async ({ params }: Props) => {
  const pets: SelectPets[] = await fetch(
    `http://localhost:3000/api/pets/${params.pet}`, {
      next : {
        revalidate : 0
      }
    }
  ).then((res) => res.json());
  return (
    <main className="flex flex-col justify-between items-center">
      <div className="grid grid-cols-4 gap-4">
        {pets.map((pet: SelectPets) => (
          <StoreCard pet={pet} key={pet.id} />
        ))}
      </div>
    </main>
  );
};

export default page;
