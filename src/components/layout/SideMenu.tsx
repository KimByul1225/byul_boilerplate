import * as React from "react";
import { NavLink } from "react-router-dom";

import {
   Avatar,
   Box,
   IconButton,
   List,
   ListItemButton,
   ListItemIcon,
   Typography,
} from "@mui/material";

import { styled } from "@mui/styles";

/**
 * @description 사이드 메뉴 컴포넌트
 */

const TypographyStyle = styled(Typography)({
   fontSize: "14px !important",
   textDecoration: "none",
   color: "#000",
});
const ListItemButtonStyle = styled(ListItemButton)({
   height: 48,
   borderRadius: "7px !important",
});

const ListItemIconStyle = styled(ListItemIcon)({
   justifyContent: "center",
});

function SideMenu() {
   const [selectedIndex, setSelectedIndex] = React.useState(0);

   const handleListItemClick = (
      event: React.MouseEvent<HTMLDivElement, MouseEvent>,
      index: number
   ) => {
      setSelectedIndex(index);
   };

   // view
   return (
      <Box
         sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            maxWidth: 250,
            height: "100vh",
            padding: "0 8px",
            borderRight: "1px dashed rgba(145, 158, 171, 0.24)",
            backgroundColor: "#F9FAFB",
            zIndex: 10,
         }}
      >
         <Box sx={{ padding: "24px 20px" }}>
            <NavLink to="/">
               Logo
            </NavLink>
         </Box>

         {/* <Box
            sx={{
               display: "flex",
               alignItems: "center",
               position: "relative",
               margin: "0 20px 40px",
               padding: "16px 20px",
               borderRadius: "9px",
               backgroundColor: "rgba(145, 158, 171, 0.12)",
            }}
         >
            <IconButton sx={{ flex: "none" }}>
               <Avatar sx={{ width: 30, height: 30 }} src="/broken-image.jpg" />
            </IconButton>
            <TypographyStyle sx={{ fontWeight: "bold" }}>
               아이디 위치
            </TypographyStyle>
         </Box> */}
         <List component="nav">
            <NavLink to="page01">
               <ListItemButtonStyle
                  selected={selectedIndex === 0}
                  onClick={(event) => handleListItemClick(event, 0)}
               >
                  <ListItemIconStyle>
                     <img
                        src="../assets/icons/navbar/ic_analytics.svg"
                        alt=""
                     />
                  </ListItemIconStyle>
                  <TypographyStyle>Page 01</TypographyStyle>
               </ListItemButtonStyle>
            </NavLink>

            <NavLink to="page02">
               <ListItemButtonStyle
                  selected={selectedIndex === 1}
                  onClick={(event) => handleListItemClick(event, 1)}
               >
                  <ListItemIconStyle>
                     <img src="../assets/icons/navbar/ic_blog.svg" alt="" />
                  </ListItemIconStyle>
                  <TypographyStyle>Page 02</TypographyStyle>
               </ListItemButtonStyle>
            </NavLink>

            <NavLink to="page03">
               <ListItemButtonStyle
                  selected={selectedIndex === 2}
                  onClick={(event) => handleListItemClick(event, 2)}
               >
                  <ListItemIconStyle>
                     <img src="../assets/icons/navbar/ic_cart.svg" alt="" />
                  </ListItemIconStyle>
                  <TypographyStyle>Page 03</TypographyStyle>
               </ListItemButtonStyle>
            </NavLink>

            <NavLink to="page04">
               <ListItemButtonStyle
                  selected={selectedIndex === 3}
                  onClick={(event) => handleListItemClick(event, 3)}
               >
                  <ListItemIconStyle>
                     <img src="../assets/icons/navbar/ic_user.svg" alt="" />
                  </ListItemIconStyle>
                  <TypographyStyle>Page 04</TypographyStyle>
               </ListItemButtonStyle>
            </NavLink>

            <NavLink to="form">
               <ListItemButtonStyle
                  selected={selectedIndex === 4}
                  onClick={(event) => handleListItemClick(event, 4)}
               >
                  <ListItemIconStyle>
                     <img src="../assets/icons/navbar/ic_disabled.svg" alt="" />
                  </ListItemIconStyle>
                  <TypographyStyle>Form</TypographyStyle>
               </ListItemButtonStyle>
            </NavLink>
         </List>
      </Box>
   );
}

export default SideMenu;
