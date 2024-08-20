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
