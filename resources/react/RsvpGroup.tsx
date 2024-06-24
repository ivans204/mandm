import { useState } from 'react';
import { getSearchUsers, updateUsers } from './utils';
import { t } from './translations';

interface IRsvpGroup {
    userId: number;
    attend?: string;
    transport?: string;
    meal?: string;
}

const RsvpGroup = () => {
    const [userName, setUserName] = useState('');
    const [userGroups, setUserGroups] = useState([]);
    const [selectedGroup, setSelectedGroup] = useState([]);
    const [mealText, setMealText] = useState('');
    const [rsvp, setRsvp] = useState([]);

    const handleSearch = () => {
        setUserGroups([]);
        setSelectedGroup([]);

        getSearchUsers(userName).then((data) => {
            const dataArray = data.map((obj) => Object.values(obj));
            setUserGroups(dataArray);
        });
    };

    const handleGroupSelect = (group) => {
        setSelectedGroup(group);
    };

    const handleRsvp = ({ userId, attend, transport }: IRsvpGroup) => {
        setRsvp({ ...rsvp, [userId]: { userId, attend, transport } });
    };

    const handleMeal = (e) => {
        setMealText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        for (const key in rsvp) {
            if (rsvp.hasOwnProperty(key)) {
                rsvp[key].meal = mealText;
            }
        }

        updateUsers(Object.values(rsvp)).then(() => {
            setSelectedGroup([]);
        });
    };

    return (
        <div className="rsvp-container">
            <h2 className="title">{t('rsvpTitle')}</h2>
            <p className="content">{t('rsvpContent')}</p>

            <input
                className="input"
                type="text"
                name="name"
                id="name"
                placeholder={t('rsvpNamePlaceholder')}
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') handleSearch();
                }}
            />

            <p className="post-label">{t('nameExample')}</p>

            <button onClick={handleSearch} className="submit-btn" disabled={!userName}>
                {t('continue')}
            </button>

            {userGroups.length && !selectedGroup.length ? (
                <>
                    <p className="group-description">{t('groupDescription')}</p>
                    {userGroups.map((users, index) => (
                        <div className="group-wrapper" key={index}>
                            <div>
                                {users.map((user) => (
                                    <div className="user-names" key={user.id}>
                                        {user.name}
                                    </div>
                                ))}
                            </div>
                            <button className="group-select-btn" onClick={() => handleGroupSelect(users)}>
                                {t('select')}
                            </button>
                        </div>
                    ))}
                </>
            ) : null}

            {selectedGroup.length ? (
                <form className="attend-form">
                    {selectedGroup.map((user) => (
                        <div className="group-wrapper" key={user.id}>
                            <div className="user-name">{user.name}</div>
                            {user.updated_at ? (
                                user.attend === 'DA' ? (
                                    t('rsvpAttend')
                                ) : (
                                    t('rsvpNoAttend')
                                )
                            ) : (
                                <div className="form-inputs">
                                    <div
                                        className="radio-options"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleRsvp({
                                                userId: user.id,
                                                attend: e.target.value,
                                                transport: rsvp[user.id]?.transport ?? null,
                                            })
                                        }
                                    >
                                        <div className="radio-input">
                                            <input
                                                required
                                                type="radio"
                                                name={`radio-attend-${user.id}`}
                                                id={`attending-${user.id}`}
                                                value="DA"
                                            />
                                            <label htmlFor={`attending-${user.id}`}>{t('rsvpAttend')}</label>
                                        </div>
                                        <div className="radio-input">
                                            <input
                                                required
                                                type="radio"
                                                name={`radio-attend-${user.id}`}
                                                id={`not-attending-${user.id}`}
                                                value="NE"
                                            />
                                            <label htmlFor={`not-attending-${user.id}`}>{t('rsvpNoAttend')}</label>
                                        </div>
                                    </div>

                                    <div
                                        className="radio-options"
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                            handleRsvp({
                                                userId: user.id,
                                                transport: e.target.value,
                                                attend: rsvp[user.id]?.attend ?? null,
                                            })
                                        }
                                    >
                                        <div className="radio-input">
                                            <input
                                                required
                                                type="radio"
                                                name={`radio-bus-${user.id}`}
                                                id={`bus-${user.id}`}
                                                value="DA"
                                            />
                                            <label htmlFor={`bus-${user.id}`}>{t('rsvpBus')}</label>
                                        </div>
                                        <div className="radio-input">
                                            <input
                                                required
                                                type="radio"
                                                name={`radio-bus-${user.id}`}
                                                id={`not-bus-${user.id}`}
                                                value="NE"
                                            />
                                            <label htmlFor={`not-bus-${user.id}`}>{t('rsvpNoBus')}</label>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {!selectedGroup[0].updated_at ? (
                        <>
                            <div className="meal-input">
                                <label htmlFor={`textarea-attend-${selectedGroup[0].id}`}>{t('rsvpMeal')}</label>
                                <textarea
                                    name={`textarea-attend-${selectedGroup[0].id}`}
                                    id={`meal-${selectedGroup[0].id}`}
                                    onChange={handleMeal}
                                    rows={4}
                                ></textarea>
                            </div>

                            <button className="submit-bnt" onClick={handleSubmit}>
                                {t('submit')}
                            </button>
                        </>
                    ) : null}
                </form>
            ) : null}
        </div>
    );
};

export default RsvpGroup;
