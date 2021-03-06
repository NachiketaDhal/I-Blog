import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import SingleBlog from "./components/SingleBlog";
import About from "./pages/About";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Footer from "./components/Footer";
import CreateBlog from "./pages/CreateBlog";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/about" component={About} exact />
          <Route path="/contact" component={Contact} exact />
          <Route path="/blogs/:id" component={SingleBlog} exact />
          <Route path="/blogs" component={Blogs} exact />
          <Route path="/blog/create" component={CreateBlog} exact />
          <Route path="*" component={Error} />
        </Switch>
        <Footer />
      </Router>
    </React.Fragment>
  );
};

export default App;
