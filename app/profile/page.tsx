"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  country: z
    .string({ message: "Country is required." })
    .min(5, "Country must be at least 5 characters.")
    .max(32, "Country must be at most 32 characters."),
  city: z
    .string({ message: "City is required." })
    .min(5, "City must be at least 5 characters.")
    .max(32, "City must be at most 32 characters."),
  zipcode: z
    .string({ message: "Zipcode is required." })
    .min(5, "Zipcode must be at least 5 characters.")
    .max(32, "Zipcode must be at most 32 characters."),
  street: z
    .string({ message: "Street is required." })
    .min(5, "Street must be at least 5 characters.")
    .max(32, "Street must be at most 32 characters."),
  phone: z
    .string({ message: "Phone is required." })
    .min(5, "Phone must be at least 5 characters.")
    .max(32, "Phone must be at most 32 characters."),
})

const ProfileAddressForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      country: "",
      city: "",
      zipcode: "",
      street: "",
      phone: "",
    },
  })

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    
    try {
      const response = await fetch("/api/clerk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      const result = await response.json()
      if (!response.ok) {
        throw new Error(result.error)
      }

      toast(result.success)
      form.reset()
    } catch (error) {
      toast.error("Something went wrong" + error)
    }
  }

  return (
    <Card className='w-full sm:max-w-md mx-auto mt-6'>
      <CardHeader>
        <CardTitle>Add delivery address</CardTitle>
        <CardDescription>
          Please fill out your details carefully so that the product reaches you
          without any problems.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form id='form-rhf-demo' onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <Controller
              name='country'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-country'>
                    Country
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-country'
                    aria-invalid={fieldState.invalid}
                    placeholder='Login button not working on mobile'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='city'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-city'>City</FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-city'
                    aria-invalid={fieldState.invalid}
                    placeholder='Login button not working on mobile'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='zipcode'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-zipcode'>
                    Zipcode
                  </FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-zipcode'
                    aria-invalid={fieldState.invalid}
                    placeholder='Login button not working on mobile'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='street'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-street'>Street</FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-street'
                    aria-invalid={fieldState.invalid}
                    placeholder='Login button not working on mobile'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name='phone'
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid}>
                  <FieldLabel htmlFor='form-rhf-demo-phone'>Phone</FieldLabel>
                  <Input
                    {...field}
                    id='form-rhf-demo-phone'
                    aria-invalid={fieldState.invalid}
                    placeholder='Login button not working on mobile'
                    autoComplete='off'
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation='horizontal'>
          <Button type='button' variant='outline' onClick={() => form.reset()}>
            Reset
          </Button>
          <Button type='submit' form='form-rhf-demo'>
            Submit
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
export default ProfileAddressForm
