import React from "react";

const ReadList = ({ book }) => {
  const {
    image,
    bookName,
    author,
    tags,
    publisher,
    category,
    rating,
    yearOfPublishing,
    totalPages,
  } = book;
  return (
    <div className="flex gap-10 my-5 items-center shadow-sm p-2">
      <div className="bg-base-200 p-4 rounded-2xl">
        <img className="h-[150px]" src={image} alt="book" />
      </div>
      <div>
        <h1>{bookName}</h1>
        <p className="my-2">By: {author}</p>
        <p className="my-2">
          <span className="font-bold mr-5">Tags:</span>
          {tags.map((tag, index) => (
            <button
              key={index}
              className="bg-green-50 px-2 rounded-2xl mr-4 text-green-500"
            >
              #{tag}
            </button>
          ))}
          <span>Year of Publishing- {yearOfPublishing} </span>
        </p>
        <div className=" flex gap-10 my-2">
          <p>Publisher: {publisher} </p>
          <p>Pages: {totalPages}</p>
        </div>
        <div className="flex items-center gap-5">
          <p>Category: {category}</p>
          <p>Rating: {rating}</p>
          <button>View Details</button>
        </div>
      </div>
    </div>
  );
};

export default ReadList;
