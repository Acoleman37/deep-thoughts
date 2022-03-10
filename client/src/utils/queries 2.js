import { gql } from '@apollo/client';

export const QUERY_THOUGHTS = gql `
    query thoughts($usernam: String) {
        thoughts(username: $username) {
            _id
            thoughtText
            createdAt
            username
            reactionCount
            reactions {
                _id
                createdAt
                usernamereactionBody
            }
        }
    }
`;