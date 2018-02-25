import { FriendsListCreateDto } from "./FriendsListCreateDto";

export interface FriendsListCreateRequest {
    userId : string,
    data : FriendsListCreateDto[]
}