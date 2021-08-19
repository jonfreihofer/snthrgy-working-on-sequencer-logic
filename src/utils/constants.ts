const HASURA_GRAPHQL_ENGINE_HOSTNAME =
  process.env.REACT_APP_HASURA_GRAPHQL_ENGINE_HOSTNAME;

const scheme = (proto: any): string => {
  return window.location.protocol === "https:" ? `${proto}s` : proto;
};

export const GRAPHQL_URL = `${scheme(
  "http"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const REALTIME_GRAPHQL_URL = `${scheme(
  "ws"
)}://${HASURA_GRAPHQL_ENGINE_HOSTNAME}/v1/graphql`;

export const authClientId = process.env.REACT_APP_AUTH_CLIENT_ID;
export const authDomain = process.env.REACT_APP_AUTH_DOMAIN;
