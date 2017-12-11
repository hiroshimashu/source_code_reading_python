import React from 'react';
import CompanyProfileMain2 from '../CompanyProfileMain2';
import building from  '../../../static/building.svg';
import Placeholder from '../../../static/placeholder.svg';
import Calender from '../../../static/calendar.svg';
import User from '../../../static/user.svg';
import Coin from '../../../static/coins.svg';
import Calculator from '../../../static/calculator.svg';
import Bank from '../../../static/bank.svg';
import Pencil from '../../../static/pencil.svg';
import profileStyle from './profileStyle';


function CompanyProfile() {
    return(
        <div>
            <CompanyProfileMain2 img = {profileStyle.img1} src = {building} subtitle = '社名' information = '株式会社コラージュ' main = { profileStyle.main1 }/>
            <CompanyProfileMain2 img = {profileStyle.img2} src = {Placeholder} subtitle = '住所' information ='〒106-0032 東京都港区六本木　5-9-20' main = { profileStyle.main2 }/>
            <CompanyProfileMain2 img = {profileStyle.img3} src = {Calender} subtitle = 'カレンダー' information ='株式会社コラージュ' main = { profileStyle.main3 }/>
            <CompanyProfileMain2 img = {profileStyle.img4} src = {User} subtitle = 'user' information ='和田 嘉吉郎' main = { profileStyle.main4 }/>
            <CompanyProfileMain2 img = {profileStyle.img5} src = {Coin} subtitle = 'coin' information ='800万円' main = { profileStyle.main5 }/>
            <CompanyProfileMain2 img = {profileStyle.img6} src = {Calculator} subtitle = '決算' information ='1月' main = { profileStyle.main6 }/>
            <CompanyProfileMain2
                img = {profileStyle.img7}
                src = {Bank} subtitle = 'bank'
                information = {<div>みずほ銀行 神谷町支店<br/>三菱東京UFJ銀行 恵比寿支店<br/>三井住友銀行 恵比寿支店<br/></div>}
                main = { profileStyle.main7 }
            />
            <CompanyProfileMain2 img = {profileStyle.img8} src = {Pencil} subtitle = 'pencil' information ='広告・宣伝に関する業務全般 + α' main = {profileStyle.main8 }/>
        </div>
    );
}

export default CompanyProfile;