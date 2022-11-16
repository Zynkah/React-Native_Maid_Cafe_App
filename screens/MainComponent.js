import { useState } from "react";
// import { BANQUETS } from "../shared/BANQUETS";
// import { COMMENTS } from "../shared/COMMENTS";
// import { MAIDS } from "../shared/MAIDS";
import { MENU } from "../shared/MENU";
import MenuScreen from "./MenuScreen";
// import HomeScreen from "./HomeScreen";
// import ContactScreen from "./ContactScreen";
// import MaidScreen from "./MaidScreen";
// import MenuScreen from "./MenuScreen";

const Main = () => {
  //   const [banquets, setBanquets] = useState(BANQUETS);
  //   const [comments, setComments] = useState(COMMENTS);
  //   const [maids, setMaids] = useState(MAIDS);
  const [menu, setMenu] = useState(MENU);

  return (
    <>
      <MenuScreen menu={menu} />
    </>
  );
};

export default Main;
