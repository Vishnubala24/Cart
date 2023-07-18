import React from "react";

const NavBar = (props) => {

    return (
        <div style={styles.nav}>
            <div style={styles.cartContianer}>
                <img style={styles.cartIcon} src="https://t3.ftcdn.net/jpg/03/22/26/16/240_F_322261628_PRfgKWqp6lkQu91lghdhH4msku9132QJ.jpg" alt="Img icon" />
                <span style={styles.cartCount}>{props.count}</span>
            </div>
        </div>
    )
}


const styles = {
    cartIcon: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    cartCount: {
        fontSize: 18,
        marginRight: 10,
        backgroundColor: 'lightpink',
        borderRadius: 50,
        marginBottom: 40,
        width: 20,
        height: 20,
        fontWeight: 'bold',
        padding: 1,
        textAlign: 'center'
    },
    nav: {
        backgroundColor: 'blue',
        height: 70,
        width: '100%'
    },
    cartContianer: {
        display: 'flex',
        flexDirection: 'row',
        float: 'right',
        margin: 10
    }
}

export default NavBar;