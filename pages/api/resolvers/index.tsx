import axios from "axios";
import { responsePathAsArray } from "graphql";
import { cloneElement } from "react";

interface TRepositories {
    id: number;
    name: string;
    owner: {
        avatar_url: string;
        login: string;
    };
    url: string;
    description: string;
}

type  User = {
    id: number;
    login: string;
    avatar_url: string;
    url: string;
}

export const resolvers = {
    Query: {
        getRepos : async () => {
            try{
                const repos : TRepositories[] = await axios.get("https://api.github.com/users/maxy4u/repos");
                return repos.map(({
                    id, name, owner, url, description
                })=>({
                    id,
                    name,
                    owner: {
                        login: owner.login, 
                        avatar_url: owner.avatar_url
                    },
                    url,
                    description
                }));
            }catch(e){
                throw e;
            }
        },
        getRepo : async (id: number) => {
            try{
                const repos : TRepositories[] = await axios.get("https://api.github.com/users/maxy4u/repos");
                return repos.map(({
                    id, name, owner, url, description
                })=>({
                    id,
                    name,
                    owner: {
                        login: owner.login, 
                        avatar_url: owner.avatar_url
                    },
                    url,
                    description
                })).filter(repo=>repo.id === id);
            }catch(e){
                throw e;
            }
        },
        getUser: async (_, {name}:{name: string})  => {
            debugger;
            console.log('getUser called', name);
            try {
                const user = await axios.get(
                  `https://api.github.com/users/${name}`
                );
                return {
                  id: user.data.id,
                  login: user.data.login,
                  avatar_url: user.data.avatar_url,
                  url: user.data.url
                };
              } catch (error) {
                throw error;
              }
        }
    }
}