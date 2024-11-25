"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export default async function shareMealHandler(prevState,formData) {
  function inputisInvalid(text) {
    return !text || text.trim().length === 0;
  }

  const meal = {
    title: formData.get("title"),
    image: formData.get("image"),
    creator: formData.get("name"),
    creator_email: formData.get("email"),
    summary: formData.get("summary"),
    instructions: formData.get("instructions"),
  };

  if (
    inputisInvalid(meal.title) ||
    !meal.image.size === 0 ||
    inputisInvalid(meal.creator) ||
    inputisInvalid(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    inputisInvalid(meal.summary) ||
    inputisInvalid(meal.instructions)
  ) {
   return {
      message: "Inputs are missing"
    }
  }

  await saveMeal(meal);
  revalidatePath("/meals", 'layout');
  redirect("/meals");
}
