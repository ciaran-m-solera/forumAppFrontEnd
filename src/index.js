import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import CreateForumPost from './pages/create-forum-post/create-forum-post';
import ForumThreads from './pages/forum-threads/forum-threads';
import SelectedForumThread from './pages/selected-forum-thread/selected-forum-thread';
import SelectedForumPost from './pages/selected-forum-post/selected-forum-post';
const router = createBrowserRouter([{
  path: "/",
  element: <App />,
  children: [
    {
      path: "/",
      element: <ForumThreads />
    },
    {
      path: "/forum/createpost",
      element: <CreateForumPost />
    },
    {
      path: "/forum/thread/:threadID",
      element: <SelectedForumThread />
    },
    {
      path: "/forum/post/:postID",
      element: <SelectedForumPost />
    }
  ]
}])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
