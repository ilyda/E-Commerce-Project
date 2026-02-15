import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { loginThunk } from "../store/userSlice";
import { useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-toastify";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";

  const { register, handleSubmit } = useForm();
  const { loading } = useSelector((state) => state.user);

  const onSubmit = async (data) => {
    const result = await dispatch(loginThunk(data));

    if (result.meta.requestStatus === "fulfilled") {
      navigate(from);
    } else {
      toast.error(result.payload);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800">
        <div className="inline-flex items-center gap-2 mb-2 mt-10">
            <p className="prata-regular text-3xl">Login</p>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800"/>
        </div>
      <input
        type="email"
        placeholder="Email"
        {...register("email", {
          required: true,
          pattern: /^\S+@\S+$/i,
        })}
        className="w-full px-3 py-2 border border-gray-800"
      />

      <input
        type="password"
        placeholder="Password"
        {...register("password", { required: true })}
        className="w-full px-3 py-2 border border-gray-800"
      />

      <label className="flex items-center gap-2">
        <input type="checkbox" {...register("remember")} />
        Remember Me
      </label>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-500 text-white px-4 py-2 w-full"
      >
        {loading ? "Loading..." : "Login"}
      </button>
    </form>
  );
}
