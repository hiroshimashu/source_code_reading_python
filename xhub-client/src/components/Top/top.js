import React from 'react'
import "../../experimental-style.css";
import Background from "../../static/ellipse-background.svg";
import Vector from "../../static/Vector.svg";
import Vector1 from "../../static/Vector-1.svg";
import Vector2 from "../../static/Vector-2.svg";

// TODO
  // Stylingの精緻化(Responsive対応)

const Top = () => {
    return (
        <div className="top-wrapper">
            <div className="ellipse">
                <img 
                    className = "background-img"
                    src={Background}
                    alt = "background"
                />
            </div>
            <div className="rectangle"></div>
            <div className="rectangle1"></div>
            <div className="rectangle2"></div>
            <div className = "text-title">
                AR・VRを楽しく学ぶ<br/>
                ものづくりコミュニティ
            </div>
            <div className = "text-sub">
            好きなことで生きていくために。スキルは目的達成のための強力な手段。<br/>
            困った時に相談できるメンターをつけて学習スピードを加速しませんか？<br />
            MENTAは個人が教えたり、教えてもらったりできるサービスです。
            </div>
            <div className="vector">
                <img className = "vector-img" src={Vector} alt = "vector" />
            </div>
            <div className="vector1">
                <img className = "vector1-img" src={Vector1} alt = "vector1" />
            </div>
            <div className="vector2">
                <img className = "vector2-img" src={Vector2} alt = "vector2" />
            </div>
        </div>
    )
}

export default Top;

