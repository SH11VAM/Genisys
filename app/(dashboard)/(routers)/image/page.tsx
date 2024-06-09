"use client";

import * as z from "zod";
import axios from "axios";
import React, { useState } from "react";
import { Heading } from "@/components/heading";
import { Download, ImageIcon } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { amountOptions, formSchema, resolutionOptions  } from "./constants";
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
  useForm,
} from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Empty } from "@/components/empty";
import { Loader } from "@/components/loader";
import { cn } from "@/lib/utils";
import { Select } from "@/components/ui/select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Imagepage = () => {
  const router = useRouter();
  const [images, setImages] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompt: "",
      amount: "1",
      resolution: "512x512",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setImages([]);
      const response = await axios.post("/api/image", values);
      const urls = response.data.map((images: { url: string }) => images.url);
      setImages(urls);

      form.reset();
    } catch (error: any) {
      //TODO: Open Pro Model
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Image Generation"
        description="Give the prompt generate a imag"
        icon={ImageIcon}
        iconColor="text-pink-500"
        bgColor="bg-pink-500/10"
      />
      <div className="px-4 lg:px-8">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2"
            >
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-6">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="border-0 outline-none focus-visible:ring-0 
                        focus-visible:ring-transparent"
                        disabled={isLoading}
                        placeholder="Message Genisys"
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                name="amount"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 ">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {amountOptions.map((options) => (
                          <SelectItem key={options.value} value={options.value}>
                            {options.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
               <FormField
                name="resolution"
                control={form.control}
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-2 ">
                    <Select
                      disabled={isLoading}
                      onValueChange={field.onChange}
                      value={field.value}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue defaultValue={field.value} />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {resolutionOptions.map((options) => (
                          <SelectItem key={options.value} value={options.value}>
                            {options.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />
              <Button
                className="col-span-12 lg:col-span-2 w-full"
                disabled={isLoading}
              >
                Generate
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4 ">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted ">
              <Loader />
            </div>
          )}
          {images.length === 0 && !isLoading && (
            <div>
              <Empty label="No Image generation started." />
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {
              images.map((src)=>(
                <Card key={src} className="rounded-lg overflow-hidden">
                  <div className="relative aspect-square">
                    <Image
                   alt="Image"
                   src={src}
                    fill
                    
                    />
                  </div>
                  <CardFooter className="p-2">
                    <Button
                     variant="secondary" 
                     className="w-full" 
                     onClick={()=>window.open(src)}
                     >
                      <Download className="h-4 w-4 mr-2"/>
                      Download

                    </Button>
                    
                  </CardFooter>

                </Card>

              ))
              
              
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Imagepage;
