import React from "react";
import { IoIosStarHalf } from "react-icons/io";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  const {
    bookId,
    rating,
    bookName,
    author,
    image,
    category,
    yearOfPublishing,
    tags,
  } = singleBook;
  return (
    <Link to={`/bookdetails/${bookId}`}>
      <div>
        <div className="card bg-white border border-gray-200 p-6 rounded-2xl">
          <figure title={bookName} className="p-6 bg-base-200 rounded-2xl ">
            <img src={image} alt="Books" className="h-[250px]" />
          </figure>
          <div className="card-body">
            <div className="flex gap-8 items-center text-green-500 ">
              {tags.map((tag, index) => (
                <button key={index} className="bg-green-50 px-2 rounded-2xl">
                  {tag}
                </button>
              ))}
            </div>
            <h2 className="card-title">
              {bookName}
              <div className="badge badge-secondary">{yearOfPublishing}</div>
            </h2>
            <p>By: {author}</p>
            <div className=" border border-dashed text-gray-300"></div>
            <div className="card-actions justify-between items-center">
              <div className="badge ">{category}</div>
              <div>
                <div className="badge ">
                  {rating} <IoIosStarHalf />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
