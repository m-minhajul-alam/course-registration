const Cart = () => {

    return (
        <div className="p-5">

            <p className="text-base font-bold text-blue-500 text-center py-2">Credit Hour Remaining 20hr</p>

            <hr />

            <p className="text-sm font-bold py-2">Course Name</p>


            <ol className="text-sm font-normal text-gray-400 list-decimal list-inside pb-3">
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>

            <hr />

            <p className="text-sm font-medium py-2">Total Credit Hour : 13</p>

            <hr />

            <p className="text-sm font-semibold py-2">Total Price : 48000 USD</p>

        </div>
    );
};

export default Cart;