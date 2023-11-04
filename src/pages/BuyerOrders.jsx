import { useSelector } from "react-redux";
import { OrderCard } from "../cmps/OrderCard";
import { OrderModal } from "../cmps/OrderModal";
import { useState } from "react";
import { OrderList } from "../cmps/OrderList";

export function BuyerOrders() {
    const [isModalOpen, setModalOpen] = useState(null)
    const [selectedOrder, setSelectedOrder] = useState(null)
    const [isTableDisplay, setTableDisplay] = useState(false)
    const loggedUser = useSelector(storeState => storeState.userModule.user)
    let orders = useSelector(storeState => storeState.orderModule.orders)
    orders = orders.filter(order => order.buyer._id === loggedUser._id)

    async function showTable() {
        setTableDisplay(true)
    }

    async function hideTable() {
        setTableDisplay(false)
    }

    async function openOrderModal(order) {
        setModalOpen(true)
        setSelectedOrder(order)
    }

    async function closeModal() {
        setModalOpen(false)
    }

    function handleBackgroundClick(ev) {
        if (ev.target.classList.contains("modal-background")) {
            setModalOpen(false)
        }
    }

    return (
        <>
            {isModalOpen && (
                <OrderModal order={selectedOrder} userSeller={false} closeModal={closeModal} handleBackgroundClick={handleBackgroundClick} />
            )}
            {!isTableDisplay && 
                <section className="buyer-orders-container full">
                    <div className="buyer-orders main-layout">
                        <div className="user-orders">
                            <h1 className="header"><i className="fa-solid fa-box"></i> My orders</h1>
                            <button onClick={hideTable}><i class="fa-solid fa-grip"></i></button>
                            <button onClick={showTable}><i class="fa-solid fa-table"></i></button>
                        </div>

                        <section className="orders-layout">
                            {orders.map(order => (
                                <OrderCard order={order} loggedUser={loggedUser} openModal={openOrderModal} />
                            ))}
                        </section>
                    </div>
                </section>}

            {isTableDisplay &&
                <>
                    <div className="user-orders">
                        <h1 className="header"><i className="fa-solid fa-box"></i> My orders</h1>
                        <button onClick={hideTable}><i class="fa-solid fa-grip"></i></button>
                        <button onClick={showTable}><i class="fa-solid fa-table"></i></button>
                    </div>
                    <OrderList orders={orders} openModal={openOrderModal} loggedUser={loggedUser} mode={'buyer'} />
                </>
            }
        </>
    )
}