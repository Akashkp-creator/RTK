import { useSelector } from "react-redux";
import { CartIcon } from "../icons";

const Navbar = () => {
  //v r console in Browser (v can access the "entire Store" using "useSelector" Hook).
  const { amount } = useSelector((store) => store.cart);
  //   *************************************************************************************************
  // cart: {cartItem: Array(0), amount: 0, total: 0, isLoading: true}

  //   *************************************************************************************************
  return (
    <nav>
      <div className="nav-center">
        <h3>redux toolkit</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="total-amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
