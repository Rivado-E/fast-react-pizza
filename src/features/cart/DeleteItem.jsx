import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { deleteItem } from './cartSlice';

function DeleteItem({ pizzaId }) {
  //TODO: GET THE DISPATCH FUNCTION

  return (
    <Button type="small" onClick={/* TODO: DISPATCH THE DELETEITEM ACTION*/}>
      Delete
    </Button>
  );
}

export default DeleteItem;
