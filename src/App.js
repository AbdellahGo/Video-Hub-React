import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Root from "./Layout/RootLayout";
import {ChannelDetail, Feed, SearchFeed, VideoDetail} from "./Components";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Feed />} />
        <Route path="videos/:searchterm" element={<SearchFeed />} />
        <Route path="channel/:channelid" element={<ChannelDetail />} />
        <Route path="video/:id" element={<VideoDetail />} />
      </Route>
    )
  );
  return <RouterProvider router={router}/>
};

export default App;
