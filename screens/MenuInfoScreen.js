import RenderMenu from "../features/menu/RenderMenu";

const MenuInfoScreen = ({ route }) => {
  const { menu } = route.params;
  return <RenderMenu menu={menu} />;
};
export default MenuInfoScreen;
