"use server";

import db from "@/lib/db";
import { requireUser } from "@/lib/requireUser";
import { siteSchema } from "@/schemas/site";
import { parseWithZod } from "@conform-to/zod";
import { redirect } from "next/navigation";

export async function CreateSiteAction(prevState: any, formData: FormData) {
  const user = await requireUser();

  const submission = await parseWithZod(formData, {
    schema: siteSchema,
  });
  if (submission.status !== "success") {
    return submission.reply();
  }
  const response = await db.site.create({
    data: {
      description: submission.value.description,
      name: submission.value.name,
      subdirectory: submission.value.subdirectory,
      userId: user.id,
    },
  });

  return redirect("/dashboard/sites");
}

export async function UpdateImage(formData: FormData) {
  const user = await requireUser();

  const data = await db.site.update({
    where: {
      userId: user.id,
      id: formData.get("siteId") as string,
    },
    data: {
      imageUrl: formData.get("imageUrl") as string,
    },
  });

  return redirect(`/dashboard/sites/${formData.get("siteId")}`);
}

export async function DeleteSite(formData: FormData) {
  const user = await requireUser();

  const data = await db.site.delete({
    where: {
      userId: user.id,
      id: formData.get("siteId") as string,
    },
  });

  return redirect("/dashboard/sites");
}
