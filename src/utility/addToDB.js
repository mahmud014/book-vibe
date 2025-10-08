import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const getStoreBook = () => {
  const storeBookSTR = localStorage.getItem("readList");

  if (storeBookSTR) {
    const storeBookData = JSON.parse(storeBookSTR);
    return storeBookData;
  } else {
    return [];
  }
};

const addToStoreDB = (id) => {
  const storeBookData = getStoreBook();

  if (storeBookData.includes(id)) {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: "All Ready Exist!",
    });
  } else {
    storeBookData.push(id);
    const data = JSON.stringify(storeBookData);
    localStorage.setItem("readList", data);
  }
};

export { addToStoreDB, getStoreBook };
