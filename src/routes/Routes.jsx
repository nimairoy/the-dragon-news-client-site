import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/Home/News/News/News";
import About from "../pages/About/About";
import Career from "../pages/Career/Career";
import Users from "../pages/Users/Users";
import NavigationLayout from "../layout/NavigationLayout";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import TermsAndConditons from "../TermsAndConditoins/TermsAndConditons";

const router = createBrowserRouter([
    {
      path: '/',
      element: <NavigationLayout></NavigationLayout>,
      children: [
        {
          path: '/',
          element: <Navigate to='/category/0'></Navigate>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/register',
          element: <Register></Register>
        },
        {
          path: '/terms',
          element: <TermsAndConditons></TermsAndConditons>
        }
      ]
    },
    {
      path: "category",
      element: <Main></Main>,
      children: [        
        {
         path: ':id',
         element: <Category></Category>,
         loader: ({params}) => fetch(`https://the-dragon-news-server-nimairoy.vercel.app/categories/${params.id}`)
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'career',
          element: <Career></Career>
        }
        ,
        {
          path: 'users',
          element: <Users></Users>
        }
      ]
    },
    {
      path: 'news',
      element: <NewsLayout></NewsLayout>,
      children: [
        {
          path: ':id',
          element: <PrivateRoutes><News></News></PrivateRoutes>,
          loader: ({params}) => fetch(`https://the-dragon-news-server-nimairoy.vercel.app/news/${params.id}`)
        }
      ]
    }
  ]);


  export default router;