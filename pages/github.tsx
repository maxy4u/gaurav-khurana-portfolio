import { memo, FC } from 'react';
import client from '../apollo-client';
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

const GitHub :FC<TRepositories> = ({repositories}) => {
    console.log(repositories);
    return(<>GitHub Page coming soon</>);
};

export async function getStaticProps(){
    // const { data } : ApolloQueryResult<TRepositories> = await client.query({
    //     query: gql`
    //         query GetRepositories {
    //             repositories{
    //                 id
    //                 name
    //                 owner {
    //                     avatar_url
    //                     login
    //                 }
    //                 url
    //                 description
    //             }
    //         }
    //     `
    // });
    return {
        props : {
            // repositories : data.repositories
        }
    }
}

export default memo(GitHub);