import React from "react";
import TableCart from "../Components/cart/TableCart";
import Footer from "../Components/ShareComponents/Footer"
import FormCart from "../Components/cart/FormCart";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deleteCart, increaseQuantity } from "../redux/slice/cartSlice";
import { NavLink } from "react-router-dom";




export default function CartPage() {
 const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.carts);
    
    console.log(cart);
        const handleDecreaseQuantity = (product) => {
       if (product.quantity === 1) {
      // Nếu số lượng là 1, xóa sản phẩm khỏi giỏ hàng
       dispatch(deleteCart(product.id));
       } else {
      // Giảm số lượng đi 1
       dispatch(decreaseQuantity(product.id));
       }
       };

      const handleIncreaseQuantity = (product) => {
    // Tăng số lượng đi 1
    dispatch(increaseQuantity(product.id));
  };
  
    return (
     <section className="product spad">
                <div className="container">
                <div className="bodyCart">
                    <h2 className="bg-light-subtle mb-2" >Products List</h2>
                        { cart?.length > 0 ? cart.map((itemCart,index)=>{
                          
                return <>
                <div key={index} className="main-cart row ">
              <table className="table">
                <thead>
                  <th>STT</th>
                  <th>Tên</th>
                  <th style={{width:402}}>Ảnh</th>
                  <th>Số Lượng</th>
                  <th>Giá</th>
                  </thead>       
                <tbody>
                  <tr >
                    <td><div className="name-product-list">{itemCart.id}</div></td>
                    <td ><h4 className="name-main-list"  > {itemCart.nameFood}</h4></td>
                    <td><div className="image-product-list"><img src={itemCart.img}/></div></td>
                    <td><div className="main-btn row" >
                          <button className="add-button-main col-4"  onClick={() => handleDecreaseQuantity(itemCart)}><h3 style={{margin:-10}}>-</h3></button>
                           <h3 className="add-button-main col-4">{itemCart?.quantity !== '' ? itemCart?.quantity : ''}</h3>
                           <button className="add-button-main col-4" onClick={() => handleIncreaseQuantity(itemCart)}><h3 style={{margin:-10}}>+</h3></button>
                         </div>  
                    </td> 
                    <td ><h5 className="price-main-list" style = {{ background :"white",height: 200}} >{itemCart.price * itemCart?.quantity}</h5></td>
                    <td> <button className="subtract-button" onClick={()=>{dispatch(deleteCart(itemCart))}}>
                                          delete
                          </button></td>
                  </tr>
                
                </tbody>
            </table>
            </div>
                    
                </>
            }) : <div> khong co san pham,<NavLink to='/menu'>   mua ngay</NavLink> </div>
            }
 <FormCart></FormCart>
            </div>
                </div>
            </section>
               
        
    )
}