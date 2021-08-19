import gql from "graphql-tag";

export const USER_UPDATE_LASTSEEN = gql`
mutation($userId: String!, $timestamp: timestamptz!) {
  update_users(
    where: { auth0_id: { _eq: $userId } }
    _set: { auth0_id: $userId, last_seen: $timestamp }
  ) {
    affected_rows
  }
}
`; 

export const QUERY_USERNAME = gql`
  query fetchUser($auth0_id: String!) {
    users(where: { auth0_id: { _eq: $auth0_id } }) {
      name
    }
  }
`;
