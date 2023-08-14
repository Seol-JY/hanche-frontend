import react from "react";
import "../../styles/Product/ProductReview.css"

const ProductReview = ({ product, list }) => {
    return (
        <div className="ProductReview_container">
            <img src="../img/imgProduct/product.png" alt="상품이미지"></img>
            <div className="ProductReview_content">
                <div className="ProductReview_writer">작성자 : {list.username}</div>
                <div className="ProductReview_name">{product.name}</div>
                <div className="ProductReview_rating">
                    <img src="../img/imgProduct/rating_img.png"></img>
                </div>
                <div className="ProductReview_coment">
                    {list.comment}
                </div>
            </div>
        </div>
    )
}

export default ProductReview;