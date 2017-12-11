import React from 'react';




function CompanyProfileMain(props) {
    return(
        <div style = { styles.mainWrapper }>
            <svg style = {{ ...props.img, position:'absolute'}} src = {props.src} alt = {props.subtitle}/>
            <img style = {{ ...props.main, position: 'absolute' }}  src = {props.src2} />
        </div>
    );
}

const styles = {
    mainWrapper: {
        display: 'flex',
    }
};

export default CompanyProfileMain;