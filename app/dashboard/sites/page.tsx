import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import db from "@/lib/db";
import { requireUser } from "@/lib/requireUser";
import Defaultimage from "@/public/default.png";
import { PlusCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

async function getData(userId: string) {
  const data = await db.site.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return data;
}

export default async function SitesPage() {
  const user = await requireUser();
  const data = await getData(user.id);

  return (
    <>
      <div className="flex w-full justify-end">
        <Button asChild>
          <Link href={"/dashboard/sites/new"}>
            <PlusCircle className="mr-2 size=4" />
            Create Site
          </Link>
        </Button>
      </div>
      {data === undefined || data.length === 0 ? (
        <EmptyState
          title="You dont have any Sites created"
          description="You currently dont have any Sites. Please create some so that you can
        see them right here!"
          buttonText="Create Site"
          href="/dashboard/sites/new"
        />
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {data.map((item) => (
            <Card key={item.id}>
              <div className="h-[250px]">
                <Image
                  src={item.imageUrl ?? Defaultimage}
                  alt={item.name}
                  className="rounded-t-lg object-cover "
                  width={400}
                  height={200}
                  style={{ width: "100%", height: "auto" }}
                />
              </div>
              <CardHeader>
                <CardTitle className="truncate">{item.name}</CardTitle>
                <CardDescription className=" line-clamp-3 h-[60px]">
                  {item.description}
                </CardDescription>
              </CardHeader>
              <div className="relative">
                <CardFooter>
                  <Button asChild className="w-full ">
                    <Link href={`/dashboard/sites/${item.id}`}>
                      View Articles
                    </Link>
                  </Button>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      )}
    </>
  );
}
