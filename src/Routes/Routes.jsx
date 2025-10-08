import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import ListedBooks from "../Pages/ListedBooks/ListedBooks";
import PagesRead from "../Pages/PagesRead/PagesRead";
import BookDetails from "../Pages/BookDetails/BookDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        path: "/",
        loader: () => fetch("/Data.json"),
        Component: Home,
      },
      {
        path: "/listedbooks",
        loader: () => fetch("/Data.json"),
        Component: ListedBooks,
      },
      {
        path: "/pagestoread",
        Component: PagesRead,
      },
      {
        path: "/bookdetails/:id",
        loader: () => fetch("/Data.json"),
        Component: BookDetails,
      },
    ],
  },
]);
