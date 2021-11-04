export default function CheckoutScreen(props) {

return(
        <form className="form" onSubmit={submitHandler}>
    <div>
        <h1>Delivery Details</h1>
    </div>
    <div>
        <label htmlFor="Home Address">Email Address</label>
        <input placeholder="Home Address">
        </input>
    </div>
    <div>
        <label htmlFor="Closest Junction">Closest Junction</label>
        <input type="text" placeholder="Closest Junction">
        </input>
    </div>
    <div>
        <label htmlFor="City">City</label>
        <input type="text" placeholder="Enter City">
        </input>
    </div>
    <div>
        <label htmlFor="State">City</label>
        <input type="text" placeholder="Enter State">
        </input>
    </div>
    <div>
        <label />
        <button className="primary" type="submit">
            Submit
        </button>
    </div>
    <div>
        <label />
        <div>
            New Customer? {' '}
            <Link to={`/checkout?redirect=${redirect}`}>Create your account</Link>
        </div>
    </div>
    </form>
)
}