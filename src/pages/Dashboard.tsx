import {useContext} from "react";
import {CustomerContext} from "../store/CustomerProvider.tsx";
import {Customer} from "../models/Customer.ts";
import './Dashboard.css';
import {ItemContext} from "../store/ItemProvider.tsx";
import {Item} from "../models/Item.ts";

export function Dashboard() {
    const [customers, setCustomers] = useContext(CustomerContext)
    const [items, setItems] = useContext(ItemContext)

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold text-gray-700 mb-6">Dashboard</h1>

            {/* main section */}
            <div className="grid grid-cols-2 gap-10">
                {/* left  */}
                <div className="py-5">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Customers</h1>

                    <div className="flex flex-col gap-5">
                        {customers.map((customer: Customer) => (
                            <div
                                className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col gap-3">

                                <h2 className="text-lg font-semibold text-blue-600">
                                    {customer.name}
                                </h2>
                                <p className="text-gray-600">{customer.email}</p>
                                <p className="text-gray-600">{customer.phone}</p>

                            </div>
                        ))}
                    </div>
                </div>

                {/* right */}
                <div className="py-5">
                    <h1 className="text-2xl font-bold text-gray-800 mb-1">Items</h1>

                    <div className="grid grid-cols-2 gap-5">
                        {items.map((item: Item) => (
                            <div
                                className="bg-white shadow-md rounded-lg p-4 border border-gray-200 flex flex-col gap-3">
                                <div className="flex justify-between">
                                    <h2 className="text-lg font-semibold text-red-600">
                                        #{item.id}
                                    </h2>
                                    <h2 className="text-lg font-semibold text-blue-600">
                                        {item.item_name}
                                    </h2>
                                </div>
                                <div className="flex justify-between">
                                    <p className="text-gray-600">Rs. {item.price}</p>
                                    <p className="text-gray-600">{item.quantity} qty</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
