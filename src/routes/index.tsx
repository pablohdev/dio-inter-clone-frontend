import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
  import SignIn from '../pages/SignIn';
  import SignUp from '../pages/SignUp';
  import Dashboard from '../pages/Dashboard';

  export const Router = ()=>{
    return(
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}/>
          <Route path="/signin" element={<SignIn />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/dashboard" element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    )
  }

  export default Router
  