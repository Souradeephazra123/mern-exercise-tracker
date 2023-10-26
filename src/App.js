import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar.component";
import EditExercise from "./components/EditExercise.component";
import CreateExercise from "./components/CreateExercise.component";
import CreateUser from "./components/CreateUser.component";
import ExercisesList from "./components/exercises-list.component";
import { Switch } from "react-router-dom/cjs/react-router-dom.min";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Switch>
          <Route path="/" exact component={ExercisesList} />
          <Route path="/edit/:id" component={EditExercise} />
          <Route path="/create" component={CreateExercise} />
          <Route path="/user" component={CreateUser} />
          {/* <Route path="/" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />{" "}
          {/* Add the element prop here */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
