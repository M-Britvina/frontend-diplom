import { NavLink } from "react-router";

const Payment = () => {
    return (
        <div className="main">
            Payment
            <NavLink to="/order-confirmation">confirm order</NavLink>
        </div>
    )
}

export default Payment;
