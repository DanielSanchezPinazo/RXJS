import { GithubUser } from "./githubUser.interface";

export interface GithubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}
