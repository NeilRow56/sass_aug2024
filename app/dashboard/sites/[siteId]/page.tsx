import { EmptyState } from "@/components/dashboard/EmptyState";
import { Button } from "@/components/ui/button";
import { Book, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function SiteIdPage() {
  return (
    <>
      <div className="flex w-full justify-end gap-x-4">
        <Button asChild variant="secondary">
          <Link href={"/"}>
            <Book className="size-4 mr-2" />
            View Blog
          </Link>
        </Button>
        <Button asChild variant="secondary">
          <Link href={"/"}>
            <Settings className="size-4 mr-2" />
            Settings
          </Link>
        </Button>
        <Button asChild>
          <Link href={"/"}>
            <PlusCircle className="size-4 mr-2" />
            Create Article
          </Link>
        </Button>
      </div>

      <EmptyState
        title="You dont have any Articles created"
        description="You currently dont have any articles. please create some so that you can see them right here"
        buttonText="Create Article"
        href={"/"}
      />
    </>
  );
}
