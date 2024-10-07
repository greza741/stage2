import { apiv1 } from "@/libs/api";

export async function onLike(threadId: number) {
  try {
    await apiv1.post("/thread/like", { id: threadId });
  } catch (error) {
    console.log(error);
  }
}
