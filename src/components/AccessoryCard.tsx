import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { SelectAccessories } from "@/db/schema";

type CardProps = React.ComponentProps<typeof Card>;

const StoreCard = ({ className, accessory, ...props  }: CardProps & {accessory : SelectAccessories }) => {
  return (
    <Card className={cn("w-[380px]", className)} {...props}>
      <CardHeader>
        <CardTitle>{accessory.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Breed : {accessory.type}</p>
      </CardContent>
      <CardFooter>
        <p>Card Footer</p>
      </CardFooter>
    </Card>
  );
};

export default StoreCard;
