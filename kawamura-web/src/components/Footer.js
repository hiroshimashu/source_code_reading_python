import React from 'react';
import FB from '../static/fbbtn.png';

function Footer() {
    return(
        <div className="footer" style = {styles.footer}>
            <ul style = {styles.footBox}>
                <li className="cr" style = {styles.cr}>Copyright ©2013 Sony Music Artists Inc. / Yuka Kawamura. All Rights Reserved.</li>
                <li className="tweet" style = { styles.tweet }>
                    <iframe
                        className = 'twitter'
                        scrolling="no"
                        frameBorder = {0}
                        title="Twitter Tweet Button"
                        src="http://platform.twitter.com/widgets/tweet_button.c7112f7adf6a24ddcb78d834866e1439.ja.html#dnt=false&amp;id=twitter-widget-0&amp;lang=ja&amp;original_referer=http%3A%2F%2Fwww.kawamurayuka.com%2Fspecial%2F&amp;size=m&amp;text=%E5%B7%9D%E6%9D%91%E7%B5%90%E8%8A%B1%E3%80%8Cprivate%20exhibition%E3%80%8D%E7%89%B9%E8%A8%AD%E3%82%B5%E3%82%A4%E3%83%88&amp;time=1509962531225&amp;type=share&amp;url=http%3A%2F%2Fwww.kawamurayuka.com%2Fspecial%2F"
                        style= {styles.tweetIcon}
                    />
                </li>
                <li className = 'fb' style = {styles.facebook} >
                    <a href = "https://www.facebook.com/yukakawamurayuka" target="_blank">
                        <img src = {FB} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

const styles = {
    footer: {
        position: 'relative',
        height: '55px',
        width: '100%',
        top: '70px',
        margin: 0,
        padding: 0,
        border: 0,
        outline: 0,
        verticalAlign:'baseline'
    },
    footBox: {
        width:'960px',
        height:'39px',
        margin:'9px auto 0 auto',
        minWidth: '960px',
        listStyle: 'none'
    },
    cr: {
        fontSize: '9px',
        marginTop: '14px',
        float: 'left'
    },
    tweet: {
        width: '70px',
        height: '23px',
        overflow: 'hidden',
        marginTop: '10px',
        marginRight: '50px',
        display: 'inline',
        float:'right'
    },
    tweetIcon: {
        position: 'static',
        visibility: 'visible',
        width: '75px',
        height: '20px'
    },
    facebook: {
        width: '154px',
        height: '20px',
        marginTop: '10px',
        marginRight: '4px',
        float:  'right'
    }

}

export default Footer;