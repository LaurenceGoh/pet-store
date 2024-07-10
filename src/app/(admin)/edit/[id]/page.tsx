"use client"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const petSchema = z.object({
    id : z.number(),
    name : z.string().min(3, {
        message : "Pet name must have at least 3 characters."
    }),
    type : z.string(),
    age : z.number({
        required_error : "Pet age is required.",
        invalid_type_error : "Age must be a number."
    }),
    breed : z.string().min(2, {
        message : "Breed must have at least 2 characters."
    }),

})

const EditPage = () => {
    const form = useForm<z.infer<typeof petSchema>>({
        resolver : zodResolver(petSchema),
        defaultValues : {
            id : 1,
            name : "Milo",
            type : "dog",
            age : 2,
            breed : "Poodle"
        }
    })

    const onSubmit = (values : z.infer<typeof petSchema>) => {
        console.log(values)
    }
  return (
    <Form {...form}>
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
        control={form.control}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Username</FormLabel>
            <FormControl>
              <Input placeholder="shadcn" {...field} />
            </FormControl>
            <FormDescription>
              This is your public display name.
            </FormDescription>
            <FormMessage />
          </FormItem>
        )}
      />
      <Button type="submit">Submit</Button>
    </form>
  </Form>
  )
}

export default EditPage
