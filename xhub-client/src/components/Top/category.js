import React from 'react';
import CategoryDetail from "./categoryDetail";
import Cat from "../../static/cat.svg";
import Cat2 from "../../static/cat2.svg";
import Cat3 from "../../static/cat3.svg";

const allImage = [{ img: Cat, title: "Unity"  }, { img: Cat2, title: "Unity"},{ img: Cat3, title: "XRデザイン"}, { img: Cat3, title: "VR-UI/UX"}];

const Category = () => {
    return(
        <div className="category-wrapper">
            <div className="category-title" style = { styles.categoryTitle }>
                CATEGORY
            </div>
            <div className="cat-main-wrapper" style = { styles.categoryMainWrapper }>
                <div className="category-1-wrapper" style={styles.categoryMain}>
                    {allImage.map(cat => {
                        return <CategoryDetail 
                            img={cat.img}
                            title = {cat.title}
                        />
                    }) }
                </div>
            </div>
        </div>
    )
}

const styles = {
    categoryWrapper: {
        width: "100%"
    },
    categoryTitle: {
        width: "188px",
        fontFamily: "Noto Sans CJK JP",
        fontSize: "36px",
        fontWeight: "bold",
        lineHeight: "53px",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
        color: "#3D4043"
    },
    categoryMainWrapper: {
        width: "880px",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "88px",
    },
    categoryMain: {
        width: "100%",
        display: "flex",
        justifyContent: "space-around",

    }

}

export default Category;

