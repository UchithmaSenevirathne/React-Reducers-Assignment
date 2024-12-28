import '../pages/textField.css';

export function Modal(props) {
    return (
        <div className="flex flex-col gap-5 items-start">
            <h3 className="text-xl font-semibold text-gray-700">{props.title}</h3>
            <div className="flex items-center gap-5">
                {props.type === 'customer' ? (
                    <>
                        <input
                            type="text"
                            placeholder="name"
                            onChange={(e) => props.setName(e.target.value)}
                            className="text-filed"
                        />
                        <input
                            type="text"
                            placeholder="email"
                            onChange={(e) => props.setEmail(e.target.value)}
                            className="text-filed"
                        />
                        <input
                            type="text"
                            placeholder="phone"
                            onChange={(e) => props.setPhone(e.target.value)}
                            className="text-filed"
                        />
                    </>
                ) : (
                    <>
                        <input
                            type="text"
                            placeholder="item id"
                            onChange={(e) => props.setId(e.target.value)}
                            className="text-filed"
                        />
                        <input
                            type="text"
                            placeholder="item name"
                            onChange={(e) => props.setItem_name(e.target.value)}
                            className="text-filed"
                        />
                        <input
                            type="text"
                            placeholder="price"
                            onChange={(e) => props.setPrice(e.target.value)}
                            className="text-filed"
                        />
                        <input
                            type="text"
                            placeholder="quantity"
                            onChange={(e) => props.setQuantity(e.target.value)}
                            className="text-filed"
                        />
                    </>
                )}
            </div>
            <button onClick={props.handleSubmit} className="button-field">{props.children}</button>
        </div>
    )
}