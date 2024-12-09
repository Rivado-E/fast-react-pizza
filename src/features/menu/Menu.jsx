import { getMenu } from '../../services/apiRestaurant';
import MenuItem from './MenuItem';

function Menu() {
  // TODO: COMPLETE THE MENU COMPONENT THAT USES useLoaderData() AND renders an unordered list (<ul>)
  // where each pizza item in the menu array is passed as a prop to the MenuItem component.
  const menu = useLoaderData();

  return (
    <ul className="divide-y divide-stone-200 px-2">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// TODO: COMPLETE THE LOADER FUNCTION THAT FETCHES DATA BY CALLING getMenu FROM apiRestaurant
export async function loader() {}

export default Menu;
