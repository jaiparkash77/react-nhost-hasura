import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { NhostApolloProvider } from "@nhost/react-apollo";
import { NhostAuthProvider } from "@nhost/react-auth";
import { auth } from "utils/nhost";
import { Login } from "components/login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { AuthGate } from "components/auth-gate";

ReactDOM.render(
  <React.StrictMode>
    <NhostAuthProvider auth={auth}>
      <NhostApolloProvider
        auth={auth}
        gqlEndpoint="https://hasura-76077072.nhost.app/v1/graphql"
      >
        <Router>
          <Switch>
            <Route exact path="/login">
              <Login />
            </Route>
            <AuthGate>
            <Route exact path="/">
              <App />
            </Route>
            </AuthGate>
          </Switch>
        </Router>
      </NhostApolloProvider>
    </NhostAuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
