import React from 'react'
import "../../community.css";
import Stub from "../../static/stub.svg";

// TODO
// Stateの反映とgnereによる切り替え
// Stubの部分をComponent化

const Community = () => {
    return (
        <div className="community-wrapper">
            <div className = "community-title">
                 COMMUNITY
            </div>
            <div className = "community-genre">
                <div className="genre1">
                    <div className = "genre1-main">
                    初学者向け
                    </div>
                    <div className = "genre1-sub">
                    -1on1メンターを探す-
                    </div>
                </div> 
                <div className="genre2">
                    <div className = "genre2-main">
                    現役クリエイター向け
                    </div>
                    <div className = "genre2-sub">
                    -専門コミュニティを探す-
                    </div>
                </div> 
            </div>
            <div>
                <img src = {Stub} alt = "stub" />
            </div>
            <div>
                <img src = {Stub} alt = "stub" />
            </div>
            <div>
                <img src = {Stub} alt = "stub" />
            </div>
        </div>
    )
}

export default Community;