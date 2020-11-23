import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Body } from "./Body";
import { Login } from "./Login";
import { Register } from "./Register";
export const RouteManager = () => {
  return (
    <>
      <Router>
        <nav className="head-nav">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/friends">Friends</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li id="login-a">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path="/">
            <Body />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/friends">
            <Friends />
          </Route>
          <Route exact path="/profile">
            <Profile />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

// const Home = () => {
//   return (
//     <>
//       <div>
//         <Post name="Bilguun" />
//       </div>
//       <div>
//         <Post name="Rush" />
//       </div>
//       <div>
//         <Write />
//       </div>
//       <br />
//     </>
//   );
// }
// // };

// const Manager = () => {
//   return (
//     <Router>
//       <nav className="head-nav">
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/friends">Friends</Link>
//           </li>
//           <li>
//             <Link to="/profile">Profile</Link>
//           </li>
//         </ul>
//       </nav>
//       <Switch>
//         <Route exact path="/">
//           <Home />
//         </Route>
//         <Route exact path="/about">
//           <About />
//         </Route>
//         <Route exact path="/friends">
//           <Friends />
//         </Route>
//         <Route exact path="/profile">
//           <Profile />
//         </Route>
//         <Route path="*">
//           <NotFound />
//         </Route>
//       </Switch>
//     </Router>
//   );
// };

function About() {
  return <h2>About</h2>;
}
function Friends() {
  return <h2>Friends</h2>;
}
function Profile() {
  return <h2>Profile</h2>;
}

function NotFound() {
  return <h2>It seems like you're lost...</h2>;
}
