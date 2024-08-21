"use client";

import { SubmitButton } from "@/components/dashboard/SubmitButtons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { ArrowLeft, Atom } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CreateArticleRoute({
  params,
}: {
  params: { siteId: string };
}) {
  return (
    <>
      <div className="flex items-center ">
        <Button size="icon" variant="outline" className="mr-3" asChild>
          <Link href={`/dashboard/sites/${params.siteId}`}>
            <ArrowLeft className="size-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold">Create Article</h1>
      </div>
      <Card className=" xl:w-[850px] lg:w-[700px] mx-auto md:w-[500px] sm:w-[400px] w-[300px]">
        <CardHeader>
          <CardTitle>Article Details</CardTitle>
          <CardDescription>Please complete the form below</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="flex flex-col gap-6 ">
            <div className="grid gap-2">
              <Label>Title</Label>
              <Input placeholder="Nextjs blogging application" />
            </div>
            <div className="grid gap-2">
              <Label>Slug</Label>
              <Input placeholder="Article Slug" />
              <Button
                onClick={() => {}}
                className="w-fit"
                variant="secondary"
                type="button"
              >
                <Atom className="size-4 mr-2" /> Generate Slug
              </Button>
            </div>
            <div className="grid gap-2">
              <Label>Small Description</Label>
              <Textarea
                placeholder="Small Description for your blog article..."
                className="h-32"
              />
            </div>
            <SubmitButton text="Create Article" />
          </form>
        </CardContent>
      </Card>
    </>
  );
}
