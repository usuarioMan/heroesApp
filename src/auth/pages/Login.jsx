import { useNavigate } from "react-router-dom";
import superheroImage from "../../../assets/heros-bakground.jpg";

export const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    navigate("/marvel", { replace: true });
  };
  return (
    <div
      className="relative flex items-center justify-center h-screen"
      style={{
        backgroundImage: "linear-gradient(to right, #4F46E5, #6B82E9)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img
        src={superheroImage}
        alt="Superhero Background"
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="bg-gray-800 bg-opacity-95 p-8 rounded-xl text-white text-center">
          <h1 className="text-3xl font-hero font-extrabold mb-6">
            Welcome to the Heroes App
          </h1>
          <button
            type="button"
            className="bg-indigo-600 hover:bg-indigo-500 py-2 px-4 rounded-md transition duration-300 focus:outline-none focus:ring focus:border-indigo-700"
            onClick={onLogin}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
