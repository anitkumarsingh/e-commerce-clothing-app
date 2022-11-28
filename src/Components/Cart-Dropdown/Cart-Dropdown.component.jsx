import CustomButton from '../Custom-Button/Custom-Button.component';
import './Cart-Dropdown.styles.scss';


const CartDropdown = () =>{
  return(
    <div className='cart-dropdown'>
     <div className='cart-items'/>
     <CustomButton>CHECKOUT</CustomButton>
    </div>
  )
}
export default CartDropdown;