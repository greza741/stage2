import { apiv1 } from "@/libs/api";
import { useQueryClient } from "@tanstack/react-query";
import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { ButtonLink } from "./link";

interface FollowButtonProps {
  userId: number;
}
const FollowButton: React.FC<FollowButtonProps> = ({ userId }) => {
  const [, setIsFollow] = React.useState(false);
  const [buttonText, setButtonText] = useState<string>("Follow");
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchFollow = async () => {
      try {
        const response = await apiv1.get(`/follow/${userId}`, {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        });

        setIsFollow(response.data.isFollowing);
        setButtonText(response.data.isFollowing ? "Following" : "Follow");
      } catch (error) {
        console.error("Error fetching follow status:", error);
      }
    };
    fetchFollow();
  }, [userId]);

  const handleFollow = async () => {
    try {
      const response = await apiv1.patch(
        `/follow/${userId}`,
        {},
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      const newFollowStatus = response.data.isFollowing;

      setIsFollow(newFollowStatus);
      setButtonText(newFollowStatus ? "Following" : "Follow");

      queryClient.invalidateQueries({ queryKey: ["user", userId] });
      queryClient.invalidateQueries({ queryKey: ["follow-status", userId] });
    } catch (error) {
      console.error("Error toggling follow:", error);
    }
  };
  return (
    <ButtonLink
      to={""}
      height={"28px"}
      fontSize={"11px"}
      bg={"transparent"}
      color={"nav.text"}
      fontWeight={"700"}
      padding={"5px 13px"}
      onClick={handleFollow}
      borderRadius={"20px"}
      border={"1px solid #FFFFFF"}
    >
      {buttonText}
    </ButtonLink>
  );
};

export default FollowButton;
