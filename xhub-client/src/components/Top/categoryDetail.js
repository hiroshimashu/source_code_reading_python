import React from 'react'

// TODO 
// 画像の大きさと文字の位置の固定

const CategorDetail = (props) => {
    return (
        <div className = "category-detail-wrapper" style = { styles.categoryDetailWrapper }>
            <img className = "category-detail-img" src={props.img} alt={props.title} />
            <div className="category-detail-title" style = { styles.catTitle }>
                { props.title }
            </div>
        </div>
    )
}


const styles = {
    categoryDetailWrapper: {
        width: "150px",
        height: "119px"
    },
    catTitle: {
        textAlign: "center"
    }
}
export default CategorDetail;