import { useSelector } from 'react-redux';
import CreateUser from '../features/user/CreateUser';
import Button from './Button';

function Home() {
  // TODO:
  // 1. Use useSelector to get the username from the Redux store.
  // 2. Implement conditional rendering: if username is empty, show CreateUser component; else, show Button with username.

  return (
    <div className="my-10 px-4 text-center sm:my-16">
    {/*TODO: Style the header and div with Tailwind CSS: make the header bold and the div centered */}
      <h1 className="mb-8  text-xl font-semibold md:text-3xl">
        The best pizza.
        <br />
      </h1>
    </div>
  );
}

export default Home;
