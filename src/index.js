import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://eastus2.azure.realm.mongodb.com/api/client/v2.0/app/application-0-fajby/graphql',
    cache: new InMemoryCache(),
    headers: {
        apiKey: "NkKZ5IPOlfiNksm5EZaiyogjaPcswqIKimvS6pNbtXzMrO1i1mCIUjKMpqwtWWC3"
    }
});

client
  .query({
    query: gql`
        query {
            planeDataCollection {
            _id
                url
            planes {
                plane
            }
            }
        }
    `,
  }).then((result) => console.log(result));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);



