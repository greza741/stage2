import { UserEntity } from "./user-entity";

export interface FollowEntity {
  id: number;
  followerId: number;
  followingId: number;
  follower: UserEntity;
  following: UserEntity;
  isFollowing: boolean;
  createdAt: Date;
}
