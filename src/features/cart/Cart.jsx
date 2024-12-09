import LinkButton from '../../ui/LinkButton';
import Button from '../../ui/Button';
import CartItem from './CartItem';
import EmptyCart from './EmptyCart';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

function Cart() {
  // TODO:
  // - Use useSelector to get the username and cart from the Redux store.
  // - Use useDispatch to get the dispatch function.
  // - Implement the logic to handle empty carts.
  // - Map over the cart items to render CartItem components.
  // - Dispatch clearCart action when "Clear cart" button is clicked.
  return (
    <div className="">
      {/* TODO: Apply Tailwind CSS classes for your choice of padding and layout to this div*/}
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-7 text-xl font-semibold">Your cart, {username}</h2>

      {/* TODO: Apply Tailwind CSS to style this ul element for spacing between items and border styling */}
      <ul className="">
        {cart.map((item) => (
          <CartItem item={item} key={item.pizzaId} />
        ))}
      </ul>

      {/* TODO: Apply Tailwind CSS to Style this div to layout the buttons horizontally with spacing */}
      <div className="mt-6 space-x-2">
        <Button to="/order/new" type="primary">
          Order pizzas
        </Button>

        <Button type="secondary" onClick={() => dispatch(clearCart())}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
