import { useState } from "react";
import iconPlus from "./assets/icons/icon-plus.svg";

const QAItem = ({ title, answer }) => {
    const [isExpand, setIsExpand] = useState(false);

    const handleExpand = () => {
        setIsExpand(!isExpand);
    };

    return (
        <div className={`qa-item ${isExpand && "qa-height"}`} onClick={handleExpand}>
            <div className="qa-title">
                <p>{title}</p>
                <img src={iconPlus} alt="plus" />
            </div>

            <p className="qa-answer">{answer}</p>
        </div>
    );
};

export default QAItem;
