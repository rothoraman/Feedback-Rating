import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackStats from "./components/FeedbackStats";
import FeedBackList from "./components/FeedBackList";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./Pages/AboutPage";
import AboutIconLink from "./components/AboutLink";
import { FeedbackProvider } from "./Context/FeedbackContext";

const App = () => {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedBackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
          <AboutIconLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
};

export default App;
