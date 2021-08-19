import {request, gql} from "graphql-request";

const apiUrl = "https://snthrgy.hasura.app/v1/graphql";

export const fetchUsers = async userAuthId => {
  const {data} = await request(
    apiUrl,
    gql`
      query fetchUser(auth0_id: ${userAuthId}) {
        users(where: {auth0_id: {_eq: ${userAuthId}}) {
          name
        }
      }
    `
  );
  return data;
};

export default {};
