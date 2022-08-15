import { memo, FC } from 'react';
import client from '../client/apollo-client';
import { ApolloQueryResult, gql } from "@apollo/client" ;



interface TRepositories {
        repositories: {
        id: number;
        name: string;
        owner: {
            avatar_url: string;
            login: string;
        };
        url: string;
        description: string;
    }
}

interface TRepoData {
    data: {
        getRepos : TRepositories[]
    }
}

const GitHub :FC<TRepositories> = ({repositories}) => {
    console.log(repositories);
    return(<>GitHub Page coming soon</>);
};

export async function getStaticProps(){
    const { data : { getRepos: repositories }  } : ApolloQueryResult<TRepoData["data"]> = await client.query({
        query: gql`
            query GetRepositories {
                getRepos{
                    id
                    name
                    owner {
                        avatar_url
                        login
                    }
                    url
                    description
                }
            }
        `
    });
    return {
        props : {
            repositories : repositories
        }
    }
}

export default memo(GitHub);