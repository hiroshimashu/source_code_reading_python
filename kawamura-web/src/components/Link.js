import React, { Component} from 'react';
import Title from './Title';

class Link extends Component {
    render() {
        return(
            <div className="linkWrapper" style = {{position: 'relative'}}>
                <Title>リンク</Title>
                <div style = {{ marginTop: '30px', marginBottom: '30px', marginLeft: '120px'}}>
                    <div>
                        川村結花オフィシャルHP
                    </div>
                    <a href = 'http://www.kawamurayuka.com/' target="_blank"　style ={{color: '#0000ff'}}>http://www.kawamurayuka.com/</a>
                </div>
                <div style = {{ marginBottom: '30px',marginLeft: '120px'}}>
                    <div>川村結花オフィシャルFacebook</div>
                    <a href = 'https://www.facebook.com/yukakawamurayuka/' target="_blank" style ={{color: '#0000ff'}}>https://www.facebook.com/yukakawamurayuka/</a>
                </div>
                <div style = {{ marginBottom: '30px',marginLeft: '120px'}}>
                    <div>日本クラウンサイト<br/>
                        川村結花
                    </div>
                    <a href = 'http://www.crownrecord.co.jp/artist/kawamura/' target="_blank" style ={{color: '#0000ff'}}>http://www.crownrecord.co.jp/artist/kawamura/</a>
                </div>
                <div style = {{ marginBottom: '30px',marginLeft: '120px'}}>
                    <div>Darleeling</div>
                    <a href = 'http://www.crownrecord.co.jp/artist/darjeeling/' target="_blank" style ={{color: '#0000ff'}}>http://www.crownrecord.co.jp/artist/darjeeling/</a>
                </div>

            </div>
        );
    }
}

export default Link;