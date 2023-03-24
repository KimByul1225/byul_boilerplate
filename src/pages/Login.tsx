import { useNavigate, useLocation } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useLayoutEffect } from "react";
import { toast } from "react-toastify";
import Cookies from "js-cookie";

import { useLoginState } from "@/global/loginState";
import client from "@/plugin/client";
import { Box, Button, TextField } from "@mui/material";

type Inputs = {
   email: string;
   password: string;
};

/**
 * @description 샘플 로그인 페이지
 */
function Login() {
   // global state
   const { setLogin } = useLoginState();

   // router-info
   const navigate = useNavigate();
   const location = useLocation();

   // hook-form
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm<Inputs>();

   // event
   const onSubmit: SubmitHandler<Inputs> = (data) => {
      const { email, password } = data;

      // login success
      if (email === "111" && password === "222") {
         Cookies.set("access_token", "success", { expires: 1 });
         client.defaults.headers.common["Authorization"] = "success";

         setLogin({ isLogin: true });
         navigate("/");
      }
      // login failed
      else {
         const message = "로그인 정보가 올바르지 않습니다.";
         toast.error(message);
      }
   };

   // watch
   useLayoutEffect(() => {
      const isLogin = Cookies.get("access_token");

      if (isLogin) {
         setLogin({ isLogin: true });
         navigate("/");
      }
   }, [location.pathname, navigate, setLogin]);

   // view
   return (
      <Box sx={{ width: "400px" }}>
         <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSubmit(onSubmit)}>
               <div className="Auth-form-content">
                  <h3 className="Auth-form-title">Sign In / (email: 111, pw: 222)</h3>
                  <div className="form-group mt-3">
                     {/* <label>Email address</label>
                  <input
                     className="form-control mt-1"
                     placeholder="Enter email"
                     {...register("email", { required: true })}
                  /> */}
                     <TextField
                        fullWidth
                        id="outlined-basic"
                        label="Enter email"
                        variant="outlined"
                        className="form-control mt-1"
                        placeholder="Enter email"
                        sx={{ margin: "10px 0" }}
                        {...register("email", { required: true })}
                     />
                     {errors.email && (
                        <span style={{ color: "red" }}>
                           This field is required
                        </span>
                     )}
                  </div>
                  <div className="form-group mt-3">
                     {/* <label>Password</label>
                  <input
                     className="form-control mt-1"
                     placeholder="Enter password"
                     autoComplete="off"
                     {...register("password", { required: true })}
                  /> */}
                     <TextField
                        fullWidth
                        id="outlined-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        className="form-control mt-1"
                        placeholder="Enter password"
                        {...register("password", { required: true })}
                     />
                     {errors.password && (
                        <span style={{ color: "red" }}>
                           This field is required
                        </span>
                     )}
                  </div>
                  <div className="d-grid gap-2 mt-3">
                     {/* <button type="submit" className="btn btn-primary">
                     Submit
                  </button> */}
                     <Button
                        type="submit"
                        variant="contained"
                        size="large"
                        sx={{ width: "100%", marginTop: "10px" }}
                     >
                        Submit
                     </Button>
                  </div>
                  {/* <p className="forgot-password text-right mt-2">
                     Forgot <a href="!#">password?</a>
                  </p> */}
               </div>
            </form>
         </div>
         
      </Box>
   );
}

export default Login;
