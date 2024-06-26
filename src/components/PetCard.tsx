import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SelectPets } from "@/db/schema";

type CardProps = React.ComponentProps<typeof Card>;

const PetCard = ({ className, pet, ...props  }: CardProps & {pet : SelectPets }) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{pet.name}</CardTitle>
        <CardDescription>Age : {pet.age}</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Breed : {pet.breed}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default PetCard;
