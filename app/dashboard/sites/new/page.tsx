"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function NewSiteRoute() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center gap-4">
      <Card className="max-w-[450px] text-primary  text-xl">
        <CardHeader>
          <CardTitle>Create Site</CardTitle>
          <CardDescription>
            Create your Site here. Click the button below once your done...
          </CardDescription>
        </CardHeader>
        <form>
          <CardContent>
            <div className="flex flex-col gap-y-6">
              <div className="grid gap-2">
                <Label className="font-bold text-black">Site Name</Label>
                <Input name="name" placeholder="Site name" />
              </div>

              <div className="grid gap-2">
                <Label className="font-bold text-black">Subdirectory</Label>
                <Input name="subdirectory" placeholder="Subdirectory name" />
              </div>

              <div className="grid gap-2">
                <Label className="font-bold text-black">Description</Label>
                <Textarea
                  name="description"
                  placeholder="Small Description for your site"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
}
