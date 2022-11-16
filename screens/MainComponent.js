import { useState } from "react";
import { View } from "react-native";
// import { BANQUETS } from "../shared/BANQUETS";
// import { COMMENTS } from "../shared/COMMENTS";
// import { MAIDS } from "../shared/MAIDS";
import { MENU } from "../shared/MENU";
import MenuScreen from "./MenuScreen";
import MenuInfoScreen from "./MenuInfoScreen";
// import HomeScreen from "./HomeScreen";
// import ContactScreen from "./ContactScreen";
// import MaidScreen from "./MaidScreen";

const Main = () => {
  //   const [banquets, setBanquets] = useState(BANQUETS);
  //   const [comments, setComments] = useState(COMMENTS);
  //   const [maids, setMaids] = useState(MAIDS);
  const [menu, setMenu] = useState(MENU);
  const [selectedMenuId, setSelectedMenuId] = useState();

  return (
    <View style={{ flex: 1 }}>
      <MenuScreen menu={menu} onPress={(menuId) => setSelectedMenuId(menuId)} />
      <MenuInfoScreen
        menu={menu.filter((menu) => menu.id === selectedMenuId)[0]}
      />
    </View>
  );
};

export default Main;
