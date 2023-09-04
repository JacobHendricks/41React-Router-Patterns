import React from 'react';
import {
  Switch,
  Redirect,
  Route,
  Routes,
  Navigate,
  useNavigate
} from 'react-router-dom';
import DogList from './DogList';
import FilterDogDetails from './FilterDogDetails';

function RoutesFile({dogs}) {
  // const navigate = useNavigate();
  return (
    <Routes>
      <Route exact path="/dogs" element={<DogList dogs={dogs} />} />
      <Route path="/dogs/:name" element={<FilterDogDetails dogs={dogs} />} />
      {/* <Route path="/dogs" render={() => <Redirect to="/dogs" />} /> */}
      {/* <Navigate to="/dogs" /> */}
      {/* <Redirect to="/dogs" /> */}
      {/* {navigate("/dogs")} */}
    </Routes>
    
  );
}

export default RoutesFile;
