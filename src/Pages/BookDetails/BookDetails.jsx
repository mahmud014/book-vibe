import React from "react";
import { useLoaderData, useParams } from "react-router";
import { addToStoreDB } from "../../utility/addToDB";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const BookDetails = () => {
  const { id } = useParams();
  const bookId = parseInt(id);
  const data = useLoaderData();
  const singleBook = data.find((book) => book.bookId === bookId);
  const {
    bookName,
    image,
    author,
    category,
    review,
    tags,
    totalPages,
    rating,
    publisher,
    yearOfPublishing,
  } = singleBook;

  const handleReadBook = (id) => {
    MySwal.fire({
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500,
    });

    addToStoreDB(id);
  };

  return (
    <div className="flex flex-col lg:flex-row justify-between items-center  rounded-2xl overflow-hidden my-10 p-5">
      <div className="p-11 flex-1 bg-base-200 rounded-2xl">
        <img
          className=" mx-auto drop-shadow-2xl h-[565px], max-w-[425px] "
          src={image}
          alt="Album"
        />
      </div>

      <div className="flex-1 ml-12 ">
        <div>
          <h2 className="text-2xl font-bold mb-2">{bookName}</h2>
          <p className="text-gray-600 mb-4">By: {author}</p>
        </div>
        <div className="flex w-full flex-col">
          <div className="divider divider-start"></div>
          <p>{category}</p>
          <div className="divider divider-end"></div>
        </div>
        <div>
          <p>
            <span className="font-bold">Review:</span> {review}
          </p>
        </div>
        <div className="my-5">
          <p>
            <span className="font-bold mr-5">Tags:</span>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="bg-green-50 px-2 rounded-2xl mr-4 text-green-500"
              >
                #{tag}
              </button>
            ))}
          </p>
        </div>
        <div className="divider divider-end"></div>
        <div className=" flex items-center gap-12">
          <div>
            <p className="my-2">Number of Pages:</p>
            <p className="my-2">Publisher:</p>
            <p className="my-2">Year of Publishing:</p>
            <p className="my-2">Rating:</p>
          </div>
          <div className="font-bold">
            <p className="my-2">{totalPages}</p>
            <p className="my-2">{publisher}</p>
            <p className="my-2">{yearOfPublishing}</p>
            <p className="my-2">{rating}</p>
          </div>
        </div>
        <div className="mt-10">
          <button onClick={() => handleReadBook(id)} className="btn mr-4">
            Read
          </button>
          <button className="btn bg-[#50B1C9] text-white">Wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
