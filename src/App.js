import React from "react";
import {useHistory} from "react-router-dom";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import ErrorPage from "./Components/ErrorPage";
function App() {
  return (

      <Router>
          <Switch>
              {/*<Route exact path="/" component={HomePage}/>*/}
              <Route exact path="/" exact component={LandingPage}/>
              <Route exact path ="/pageNotFound" component = {ErrorPage}/>

              {/*<Route exact path="/design" exact component={Design}/>*/}
              {/*<Route exact path="/Photography" exact component={Photography}/>*/}
              //     {/*<Route exact path="/login" component={Login}/>*/}
              //     {/*<PrivateRoute exact path="/event/:id/:orgId" component={GetEvent} />*/}
              //     {/*<PrivateRoute exact path="/org/event/:id/:orgId" component={GetOrgEvent} />*/}
              //     {/*<PrivateRoute exact path="/dashboard" component={Events}/>*/}
              //     {/*<PrivateRoute exact path="/createEvent" component={CreateEvent}/>*/}
              //     {/*<PrivateRoute exact path="/requests" component={ListRequest}/>*/}
              //     {/*<PrivateRoute exact path="/org/requests" component={OrgRequest}/>*/}
              //     {/*<PrivateRoute exact path="/createRequest" component={CreateRequest}/>*/}
              //     {/*<PrivateRoute exact path="/track" component={Track} />*/}
              //     {/*<PrivateRoute exact path="/editor" component={Editor}/>*/}
              //     {/*<PrivateRoute exact path="/articles" component={Article} />*/}
              //     {/*<PrivateRoute*/}
              //     {/*  exact*/}
              //     {/*  path="/articles/:time/:key"*/}
              //     {/*  component={GetArticle}*/}
              //     {/*/>*/}

          </Switch>

      </Router>
  );
}

export default App;
