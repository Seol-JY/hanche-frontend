import react, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../../styles/ShoppingCart/ShoppingCartList.css"

const ShoppingCartList = ({ PROXY, shoppingCart, selectAll }) => {
    const [quantity, setQuantity] = useState(shoppingCart.quantity);
    const [isSelected, setIsSelected] = useState(false); // Added isSelected state

    const toggleSelect = () => {
        setIsSelected(!isSelected);
    };

    const handlePlusClick = () => {
        setQuantity(quantity + 1);
    };

    const handleMinusClick = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handleUpdate = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');

            await axios({
                method: 'patch',
                url: `${PROXY}/api/cart`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    id: shoppingCart.id, // Update this to the correct ID
                    quantity: quantity,
                },
            });
            window.alert("수정되었습니다.");
        } catch (error) {
            console.log(error);
        }
    }, [])

    const handleDelete = useCallback(async () => {
        try {
            const token = localStorage.getItem('access_token');

            await axios({
                method: 'post',
                url: `${PROXY}/api/cart/delete`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {
                    id: shoppingCart.id
                }
            })
        } catch (error) {
            console.log(error);
        }
    }, [])

    return (
        <div className={`ShoppingCartList_container ${isSelected ? "select" : ""}`}>
            <div className="ShoppingCartList_top">
                <div className="ShoppingCartList_top_left">
                    <div
                        className={`ShoppingCartList_select_circle ${isSelected ? "select" : ""} ${selectAll ? "select" : ""}`}
                        onClick={() => {
                            toggleSelect();
                            if (selectAll) {
                                toggleSelect();
                            }
                        }}
                    ></div>
                    <div className="Product_info">상품정보</div>
                    <img src="./img/imgShoppingCart/ProductInfo_icon.png" alt="상품정보 아이콘"></img>
                </div>
                <div className="ShoppingCartList_delete" onClick={handleDelete}>
                    <img src="../img/imgShoppingCart/close.png" alt="닫기"></img>
                </div>
            </div>
            <div className="ShoppingCartList_content">
                <img src={shoppingCart.img_url} alt="상품이미지"></img>
                <div className="Product_detail_info">
                    <div className="Product_name">{shoppingCart.name}</div>
                    <div className="quantity">수량</div>
                    <div className="quantity_info">
                        <div className="Product_quantity">{quantity}개</div>
                        <div className="quantity_update_bar">
                            <div className="plus_bar" onClick={handlePlusClick}>+</div>
                            <div className="quantity_bar">{quantity}</div>
                            <div className="minus_bar" onClick={handleMinusClick}>-</div>
                        </div>
                        <div className="update_button" onClick={handleUpdate}>수정</div>
                    </div>
                    <div className="price_info">
                        <div className="price">가격</div>
                        <div className="Product_price">{shoppingCart.totalPrice * quantity}원</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCartList;