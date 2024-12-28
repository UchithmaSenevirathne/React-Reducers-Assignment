import {useContext, useState} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import './textField.css'
import {useNavigate} from "react-router";
import {Modal} from "../component/Modal.tsx";
import {ItemContext} from "../store/ItemProvider.tsx";
import {Customer} from "../models/Customer.ts";
import {Item} from "../models/Item.ts";

export function Update() {
    const navigate = useNavigate();
    const [customers, customer_dispatch] = useContext(CustomerContext);
    const [items, item_dispatch] = useContext(ItemContext);

    // Customer states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    // Item states
    const [id, setId] = useState('');
    const [item_name, setItem_name] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    function handleCustomerSubmit() {
        const updatedCustomer = new Customer(name, email, phone);
        customer_dispatch({type:'UPDATE_CUSTOMER', payload:updatedCustomer});
        navigate('/');
    }

    function handleItemSubmit() {
        const updatedItem = new Item(id, item_name, price, quantity);
        item_dispatch({type:'UPDATE_ITEM', payload:updatedItem});
        navigate('/');
    }

    return (
        <div className="bg-white p-6">


            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-4 border rounded-lg">
                    <Modal
                        type="customer"
                        title="Update Customer"
                        handleSubmit={handleCustomerSubmit}
                        setName={setName}
                        setEmail={setEmail}
                        setPhone={setPhone}
                    >
                        Update Customer
                    </Modal>
                    <table className="table-auto border border-gray-200 w-full mt-20">
                        <thead>
                        <tr>
                            <td className="custom-table-td font-medium">Name</td>
                            <td className="custom-table-td font-medium">Email</td>
                            <td className="custom-table-td font-medium">Phone</td>
                        </tr>
                        </thead>
                        <tbody>
                        {customers.map((customer: Customer) => (
                            <tr>
                                <td className="custom-table-td">{customer.name}</td>
                                <td className="custom-table-td text-gray-600">
                                    {customer.email}
                                </td>
                                <td className="custom-table-td">{customer.phone}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border rounded-lg">
                    <Modal
                        type="item"
                        title="Update Item"
                        handleSubmit={handleItemSubmit}
                        setId={setId}
                        setItem_name={setItem_name}
                        setPrice={setPrice}
                        setQuantity={setQuantity}
                    >
                        Update Item
                    </Modal>
                    <table className="table-auto border border-gray-200 w-full mt-20">
                        <thead>
                        <tr>
                            <td className="custom-table-td font-medium">ID</td>
                            <td className="custom-table-td font-medium">Name</td>
                            <td className="custom-table-td font-medium">Price</td>
                            <td className="custom-table-td font-medium">Quantity</td>
                        </tr>
                        </thead>
                        <tbody>
                        {items.map((item: Item) => (
                            <tr>
                                <td className="custom-table-td">{item.id}</td>
                                <td className="custom-table-td text-gray-600">
                                    {item.item_name}
                                </td>
                                <td className="custom-table-td">{item.price}</td>
                                <td className="custom-table-td">{item.quantity}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}