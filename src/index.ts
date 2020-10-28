import { introspectSchema, wrapSchema } from "@graphql-tools/wrap";
import { linkToExecutor, linkToSubscriber } from "@graphql-tools/links";
import { SubscriptionClient } from "subscriptions-transport-ws";
import ws from "ws";
import { WebSocketLink } from "@apollo/client/link/ws";
import { HttpLink } from "@apollo/client";

const httpLink = new HttpLink({
  uri: "https://example.com/graphql",
});

const executor = linkToExecutor(httpLink);

const subscriptionClient = new SubscriptionClient(
  "wss://example.com/graphql",
  {},
  ws
);

const wsLink = new WebSocketLink(subscriptionClient);

const subscriber = linkToSubscriber(wsLink);

const makeSchema = async () => {
  const beaconSchema = await wrapSchema({
    schema: await introspectSchema(executor),
    executor,
    subscriber,
  });
};
