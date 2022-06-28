import { Outlet } from "react-router-dom";

import useAsyncInterceptors from "@/hook/useAsyncInterceptors";
import useCheckLoginState from "@/hook/useCheckLoginState";
import Header from "@/components/layout/Header";

/* mui */
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";

import { useLoginState } from "@/global/loginState";
import SideMenu from "@/components/layout/SideMenu";

/**
 * @description 루트 컴포넌트
 */
function Root() {
   // hook
   useAsyncInterceptors();
   useCheckLoginState();

   // global state
   const { login } = useLoginState();

   // view
   return (
      <>
         <CssBaseline />

         <Container
            sx={{
               display: "flex",
               maxWidth: "100%",
               minWidth: "100%",
               boxSizing: "border-box",
            }}
            disableGutters
         >
            <SideMenu />
            <Box
               sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  paddingTop: "56px",
               }}
            >
               <Header />
               {login.isLogin}
               <Box
                  sx={{
                     overflow: "hidden",
                     padding: "20px",
                     boxSizing: "border-box",
                  }}
               >
                  <Outlet />
               </Box>
            </Box>
         </Container>
      </>
   );
}

export default Root;
