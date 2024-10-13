import { useMediaReplies } from "@/features/hooks/use-all";
import { Text } from "@chakra-ui/react";

interface DetailItemProps {
  selectedThreadId: number | null;
}

export function DetailIsiReply({ selectedThreadId }: DetailItemProps) {
  const { data } = selectedThreadId
    ? useMediaReplies(selectedThreadId)
    : { data: null };

  return (
    <>
      {data?.map((reply) => {
        return (
          <>
            <Text fontSize={"12px"} mt={"5px"}>
              {reply.content}
            </Text>
          </>
        );
      })}
    </>
  );
}
