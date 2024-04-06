import { Provider } from "react-redux";
import Body from "./components/Body";
import Watchpage from "./components/Watchpage";
import Head from "./components/Head";
import Login from "./components/Login";
import store from "./utils/ReduxThings/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Maincontainer from "./components/Maincontainer";
import Channalinfo from "./components/Channalinfo";
import SearchResult from "./components/SearchResult";
const Routing = createBrowserRouter(
  [
    {
      path:"/login",
      element:<Login/>,
    },
    {
    path:"/",
    element: <Body/>,
    children :[

      {
        path:'/',
        element:<Maincontainer/>
     },
      {
        path:"/watch/:id",
        element:<Watchpage/> 
      },
      {
        path:"/channal/:cid",
        element:<Channalinfo/> 
      },
      {
        path:"/SearchResult/:search",
        element:<SearchResult/> 
      }
      
    ]
  }]
)
function App() {
   
  return (
    <Provider   store={store}>
    
       <div className="">
        <RouterProvider router={Routing}>
     <Head/>
     
     
       <Body/>
     </RouterProvider>
     

    
     

    
    </div>
    </Provider>
   
  );
}

export default App;
