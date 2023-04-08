import Body from "./Components/Body";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import VideoContainer from "./Components/VideoContainer";
import SingleVideo from "./Components/SingleVideo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <Body />,
        children: [
          {
            path: "/",
            element: <VideoContainer />
          },
          {
            path: "watch",
            element: <SingleVideo />
          }
        ]
      }
    ]
  }
]);
function App() {
  return (
    <div className='App'>
      <Header />
      <div className='flex'>
        <Sidebar />
        <RouterProvider router={appRouter} />
      </div>
    </div>
  );
}

export default App;
