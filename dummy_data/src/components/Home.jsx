import "../Styles/home.css"

const Home=()=>{
    return (
        <div>
            <div className="header">
               <img src="https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-campus-recreation-university-nebraska-lincoln-30.png"/>
            </div>
            <h1>Home component</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="https://freepngimg.com/save/85245-smartphone-mobile-accessories-phone-plus-iphone/868x1740" alt="img" />
                </div>
                <div className="text-wrapper item" >
                    <span>
                        I-phone
                    </span>
                    <span>
                        Price : $1000.00
                    </span>
                </div>
                <div className="btn-wrapper item">
                       <button>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
 export default Home