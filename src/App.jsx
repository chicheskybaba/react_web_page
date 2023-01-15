import React from "react";
import { MuiCard } from "./components/MuiCard";
import DrawerItemState from "./components/MuiDrawerRespon";
//import MiniDrawer from "./components/MuiDrawerRespon";
//import { MuiDrawer } from "./components/MuiDrawer";
//import { MuiDialog } from "./components/MuiDialog";
import { MuiNavbar } from "./components/MuiNavbar";
import { MuiTypography } from "./components/MuiTypography";









const App = () => {
  return ( 
    <div>
      <MuiNavbar />
      {/* <MuiDialog/> */}
      {/* <MuiDrawer/> */}
      {/*<MiniDrawer/>*/}
      <DrawerItemState />
      <MuiTypography />
      <MuiCard/>
      
      
    </div>
  )
  
};

export default App;