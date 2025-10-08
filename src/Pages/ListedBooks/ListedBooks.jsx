import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoreBook } from "../../utility/addToDB";
import ReadList from "../ReadList/ReadList";

const ListedBooks = () => {
  const [readList, setReadList] = useState([]);
  const [sort, setsort] = useState("");
  const data = useLoaderData();
  useEffect(() => {
    const storedBookData = getStoreBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    const myReadList = data.filter((book) =>
      convertedStoredBooks.includes(book.bookId)
    );
    setReadList(myReadList);
  }, []);
  const handleSort = (type) => {
    setsort(type);
    if (type === "Pages") {
      const sortByPage = [...readList].sort(
        (a, b) => a.totalPages - b.totalPages
      );
      setReadList(sortByPage);
    }
    if (type === "Ratings") {
      const sortByPage = [...readList].sort((a, b) => b.rating - a.rating);
      setReadList(sortByPage);
    }
  };
  return (
    <div>
      <div className="bg-base-200 text-center p-3 my-5 rounded-2xl">
        <h2 className="text-3xl font-bold">Books</h2>
      </div>
      <div className="flex justify-center items-center">
        <div className="dropdown dropdown-start ">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 bg-green-500 text-white"
          >
            Sort By {sort ? sort : ""} ⬇️
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
          >
            <li>
              <a onClick={() => handleSort("Pages")}>Pages</a>
            </li>
            <li>
              <a onClick={() => handleSort("Ratings")}>Ratings</a>
            </li>
          </ul>
        </div>
      </div>
      <Tabs>
        <TabList>
          <Tab>Read Books {readList.length}</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
          <div>
            {readList.map((book) => (
              <ReadList key={book.bookId} book={book}></ReadList>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBooks;
