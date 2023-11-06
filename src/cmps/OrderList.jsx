import { useState } from "react"
import { OrderPreview } from "./OrderPreview"
import { Link } from "react-router-dom"



export function OrderList({ orders, loggedUser, mode, openModal, onApproveOrder, onDeclineOrder, onFulfillOrder }) {

    const [selectedBtn, setSelectedBtn] = useState(null)

    if (mode === 'buyer') {
        orders = orders.filter(order => order.buyer._id === loggedUser._id)
    } else if (mode === 'seller') {
        orders = orders.filter(order => order.seller._id === loggedUser._id)
    }

    if (mode === 'buyer' && !orders.length) return (
        <>
            <Link to={'/gig'} className="logo">
                <i className="empty-tray fa-solid fa-inbox"></i>
                <span>
                    No orders yet <span className="dot">{','}</span> <br /> Click to find services on sixerr<span className="dot">.</span>
                </span>
            </Link>
        </>
    )

    if (mode === 'seller' && !orders.length) {
        return (
            <span className="logo">No orders to fulfill yet<span className="dot">.</span></span>
        )
    }

    return (
        <>
            <section className={`${mode === 'buyer' ? 'order-layout' : ''}`}>
                {orders.length > 0 && <table className={`order-list ${mode === 'buyer' ? 'buyer' : ''}`}>
                    <thead>
                        <tr>
                            {mode === 'buyer' ? <td>Seller</td> : <td>Buyer</td>}
                            <td>Gig</td>
                            {mode === 'buyer' && <td>Package</td>}
                            {mode === 'buyer' && <td>Category</td>}
                            <td>Due on</td>
                            <td>Total</td>
                            <td className="order-status">Status</td>
                        </tr>
                    </thead>

                    {
                        <tbody>
                            {orders.map(order => (
                                <OrderPreview key={order._id} order={order} mode={mode} openModal={openModal} onApproveOrder={onApproveOrder} onDeclineOrder={onDeclineOrder} onFulfillOrder={onFulfillOrder} selectedBtn={selectedBtn} setSelectedBtn={setSelectedBtn} />
                            ))}
                        </tbody>}

                </table>}
            </section>
        </>

    )
}