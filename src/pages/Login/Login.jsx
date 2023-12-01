import Lottie from "lottie-react";
import loginAnimation from '../../assets/login.json'
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import SocialLogin from "../../components/SocialLogin/SocialLogin";
import useAuth from "../../hooks/useAuth";
const Login = () => {
  const { signIn } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const onSubmit = (data) => {
    signIn(data.email, data.password)
    .then(result => {
        const user = result.user;
        console.log(user);
        Swal.fire({
            title: 'User Login Successful.',
            showClass: {
                popup: 'animate__animated animate__fadeInDown'
            },
            hideClass: {
                popup: 'animate__animated animate__fadeOutUp'
            }
        });
        navigate(from, { replace: true });
    }).catch((error) => console.log(error));
  };
  return (
    <div>
      <Helmet>
        <title>DormDine | Login</title>
      </Helmet>
      <Link to={"/"} className=" uppercase text-blue-600 font-medium pt-10">
        {"< back to home "}
      </Link>
      <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-11">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold"> Login</h1>
            <div className="py-6 w-[500px]">
            <Lottie animationData={loginAnimation} />
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl border ">
            <div>
              <h1 className="text-2xl pl-5 pt-5 font-bold">
                Login to your account
              </h1>
              <p className="pl-5 text-gray-500">
                Enter your email below to login your account
              </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-600">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                />{" "}
                {errors.password && (
                  <span className="text-red-600">Password is required</span>
                )}
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="px-6">
              <small>
                Don't have an account?
                <Link to="/register" className="text-blue-700">
                  Register
                </Link>
              </small>
            </p>
            <SocialLogin></SocialLogin>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
