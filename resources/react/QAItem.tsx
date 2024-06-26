import { useState } from 'react';
import iconPlus from './assets/icons/icon-plus.svg';

const QAItem = ({ title, children }) => {
    const [isExpand, setIsExpand] = useState(false);

    const handleExpand = () => {
        setIsExpand(!isExpand);
    };

    return (
        <div className={`qa-item ${isExpand && 'qa-height'}`}>
            <div className="qa-title" onClick={handleExpand}>
                <p>{title}</p>
                <img src={iconPlus} alt="plus" />
            </div>

            <p className="qa-answer">{children}</p>
        </div>
    );
};

export default QAItem;
