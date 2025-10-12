import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaPencil, FaPlus, FaRegTrashCan } from "react-icons/fa6";
import { Link, useNavigate , } from "react-router-dom";
import Loader from "../../components/loader";

export default function AdminProductPage() {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loaded) {
      axios
        .get(import.meta.env.VITE_BACKEND_URL + "/api/product")
        .then((response) => {
          console.log(response.data);
          setProducts(response.data);
          setLoaded(true);
        })
        .catch((error) => {
          console.error(error);
          toast.error("Failed to fetch products");
        });
    }
  }, [loaded]);

  async function handleDeleteProduct(productId) {
    const token = localStorage.getItem("token");
    if (token === null) {
      toast.error("You are not authorized to perform this action, please login");
      return;
    }

    try {
      await axios.delete(
        import.meta.env.VITE_BACKEND_URL + "/api/product/" + productId,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      );
      toast.success("Product deleted successfully");
      setLoaded(false);
    } catch (error) {
      console.log(error);
      toast.error("Error deleting product");
    }
  }

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg w-full relative min-h-screen">
      {/* Spinner */}
      {!loaded && <Loader />}

      {/* Product Table */}
      {loaded && (
        <table className="w-full border-collapse">
          <thead>
            <tr className="grid grid-cols-6 text-center border-b border-gray-200 bg-gray-100 text-2xl font-semibold p-4">
              <th>ProductId</th>
              <th>ProductName</th>
              <th>Price</th>
              <th>LabledPrice</th>
              <th>Stock</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr
                key={index}
                className="grid grid-cols-6 text-center border-t border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out text-2xl p-4"
              >
                <td>{product.productId}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.labledPrice}</td>
                <td>{product.stocks}</td>
                <td>
                  <div className="flex items-center justify-center gap-10">
                    <FaRegTrashCan
                      onClick={() => handleDeleteProduct(product.productId)}
                      className="text-red-500 text-[30px] hover:text-red-700 cursor-pointer transition duration-300 ease-in-out"
                    />
                    <FaPencil 
                        onClick={()=>{
                            navigate(`/admin/editProduct/`, {
                                state : { product }
                            });
                        }}
                     className="text-blue-500 text-[30px] hover:text-blue-700 cursor-pointer transition duration-300 ease-in-out" />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Floating Add Button */}
      <Link
        to={"/admin/addProduct"}
        className="text-white bg-gray-800 p-4 rounded-full text-2xl absolute right-8 bottom-8 hover:bg-gray-700 transition duration-300 ease-in-out hover:scale-110 cursor-pointer"
      >
        <FaPlus />
      </Link>
    </div>
  );
}
