import { apiv1 } from "@/libs/api"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import React, { useEffect } from "react"
import Cookies from "js-cookie"
import { IoIosHeart, IoIosHeartEmpty } from "react-icons/io"
import { ButtonLink } from "./link"



interface LikeButtonProps {
    threadId: number | any
}

const LikeButtonPost : React.FC<LikeButtonProps> = ({ threadId}: any) => {
    const [isLiked, setIsLiked] = React.useState(false)
    const [likeCount, setLikeCount] = React.useState(0)
    const queryClient = useQueryClient()

    useEffect(() => {
        const fetchLike = async () => {
            const response = await apiv1.get(`/thread/${threadId}/like`, {
                headers: {
                    Authorization : `Bearer ${Cookies.get("token")}`
                }
            })
            setIsLiked(response.data.isLiked)
            setLikeCount(response.data.likesCount)
        }
        fetchLike()
    }, [threadId])

    const mutation = useMutation<void, Error, void>({
        mutationFn: async () => {
            await apiv1.post(`/thread/${threadId}/like`, {}, {
                headers: {
                    Authorization: `Bearer ${Cookies.get("token")}`,
                },
            });
    },
    onSuccess: () => { 
        setIsLiked((prev) => {
            const newLikedStatus = !prev
            setLikeCount((prevCount) => 
             newLikedStatus ? prevCount +1 : prevCount -1)
            return newLikedStatus
        })
        queryClient.invalidateQueries({ queryKey: ["threads"] })
    }
})

const handleLike = () => {
    mutation.mutate()
}
const likeIconRed = <IoIosHeart color="red" size={"20px"} />
const likeIconGray =  <IoIosHeartEmpty size={"20px"} />

return(
    <ButtonLink fontSize={'12px'} to={''} onClick={handleLike}>
        {isLiked ? likeIconRed : likeIconGray}
    </ButtonLink>
)
}

export default LikeButtonPost