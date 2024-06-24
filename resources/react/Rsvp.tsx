import { useState } from 'react';
import { getSearchPerson, updatePerson } from './utils';
import { t } from './translations';

interface IRsvp {
    attend?: string;
    transport?: string;
    meal?: string;
}

interface IPerson {
    id: number;
    name: string;
    updated_at: string;
    attend: string;
    transport: string;
}

const Rsvp = () => {
    const [userName, setUserName] = useState('');
    const [persons, setPersons] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [mealText, setMealText] = useState('');
    const [rsvp, setRsvp] = useState(null);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSearch = () => {
        setSelectedPerson(null);
        setIsSubmitted(false);

        getSearchPerson(userName).then((data) => {
            setPersons(data);
        });
    };

    const handlePersonSelect = (group) => {
        setSelectedPerson(group);
    };

    const handleRsvp = ({ attend, transport }: IRsvp) => {
        setRsvp({ attend, transport });
    };

    const handleMeal = (e) => {
        setMealText(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        updatePerson({ ...rsvp, meal: mealText }, selectedPerson.id).then(() => {
            setIsSubmitted(true);
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

            {isSubmitted ? <p className="submitted-message">{t('rsvpSubmitted')}</p> : null}

            {persons.length && !selectedPerson ? (
                <>
                    <p className="group-description">{t('groupDescription')}</p>
                    {persons.map((user, index) => (
                        <div className="group-wrapper" key={index}>
                            <div className="user-names" key={user.id}>
                                {user.name}
                            </div>

                            <button className="group-select-btn" onClick={() => handlePersonSelect(user)}>
                                {t('select')}
                            </button>
                        </div>
                    ))}
                </>
            ) : null}

            {selectedPerson && !isSubmitted ? (
                <form className="attend-form">
                    <div className="group-wrapper" key={selectedPerson.id}>
                        <div className="user-name">{selectedPerson.name}</div>
                        {selectedPerson.updated_at ? (
                            <div className="form-inputs">
                                <div>{selectedPerson.attend === 'DA' ? t('rsvpAttend') : t('rsvpNoAttend')}</div>
                                <div>{selectedPerson.transport === 'DA' ? t('rsvpBus') : t('rsvpNoBus')}</div>
                            </div>
                        ) : (
                            <div className="form-inputs">
                                <div
                                    className="radio-options"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleRsvp({
                                            attend: e.target.value,
                                            transport: rsvp?.transport ?? selectedPerson.transport,
                                        })
                                    }
                                >
                                    <div className="radio-input">
                                        <input
                                            required
                                            type="radio"
                                            name={`radio-attend-${selectedPerson.id}`}
                                            id={`attending-${selectedPerson.id}`}
                                            value="DA"
                                        />
                                        <label htmlFor={`attending-${selectedPerson.id}`}>{t('rsvpAttend')}</label>
                                    </div>
                                    <div className="radio-input">
                                        <input
                                            required
                                            type="radio"
                                            name={`radio-attend-${selectedPerson.id}`}
                                            id={`not-attending-${selectedPerson.id}`}
                                            value="NE"
                                        />
                                        <label htmlFor={`not-attending-${selectedPerson.id}`}>
                                            {t('rsvpNoAttend')}
                                        </label>
                                    </div>
                                </div>

                                <div
                                    className="radio-options"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                        handleRsvp({
                                            transport: e.target.value,
                                            attend: rsvp?.attend ?? selectedPerson.attend,
                                        })
                                    }
                                >
                                    <div className="radio-input">
                                        <input
                                            required
                                            type="radio"
                                            name={`radio-bus-${selectedPerson.id}`}
                                            id={`bus-${selectedPerson.id}`}
                                            value="DA"
                                        />
                                        <label htmlFor={`bus-${selectedPerson.id}`}>{t('rsvpBus')}</label>
                                    </div>
                                    <div className="radio-input">
                                        <input
                                            required
                                            type="radio"
                                            name={`radio-bus-${selectedPerson.id}`}
                                            id={`not-bus-${selectedPerson.id}`}
                                            value="NE"
                                        />
                                        <label htmlFor={`not-bus-${selectedPerson.id}`}>{t('rsvpNoBus')}</label>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>

                    {!selectedPerson.updated_at ? (
                        <>
                            <div className="meal-input">
                                <label htmlFor={`textarea-attend-${selectedPerson.id}`}>{t('rsvpMeal')}</label>
                                <textarea
                                    name={`textarea-attend-${selectedPerson.id}`}
                                    id={`meal-${selectedPerson.id}`}
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

export default Rsvp;
