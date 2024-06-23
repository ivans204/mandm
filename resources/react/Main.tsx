import { useState, useEffect } from 'react';
import { t } from './translations';
import home from './assets/icons/Home.svg';
import nameCover from './assets/ime-cover.png';
import rsvp from './assets/icons/rsvp.svg';
import schedule from './assets/icons/schedule.svg';
import accomodation from './assets/icons/accomontadion.svg';
import qa from './assets/icons/qa.svg';
import chevron from './assets/icons/chevron-down.svg';
import thingsToDo from './assets/things-to-do.png';
import busIcon from './assets/icons/icon-bus.svg';
import hotel from './assets/hotel-akademis.jpg';
import glassesIcon from './assets/icons/icon-glasses.svg';
import churchIcon from './assets/icons/icon-church.svg';
import dinnerIcon from './assets/icons/icon-dinner.svg';
import flower2 from './assets/flowers/FLOWER-2.png';
import leaf from './assets/flowers/LEAF.png';
import goldLeaf1 from './assets/flowers/GOLDEN LEAVES-1.png';
import flower1 from './assets/flowers/FLOWER-1.png';
import goldLeaf from './assets/flowers/GOLDEN LEAVES.png';
import Rsvp from './Rsvp';
import QAItem from './QAItem';

function Main() {
    const [activeLang, setActiveLang] = useState('');

    const handleSaveToLocalStorage = () => {
        if (activeLang === 'eng') {
            setActiveLang('hrv');
            localStorage.setItem('active-lang', JSON.stringify('hrv'));
        } else {
            setActiveLang('eng');
            localStorage.setItem('active-lang', JSON.stringify('eng'));
        }
    };

    useEffect(() => {
        const selectedLang = JSON.parse(localStorage.getItem('active-lang'));

        if (!selectedLang) {
            setActiveLang('eng');
            localStorage.setItem('active-lang', JSON.stringify('eng'));
        } else {
            setActiveLang(selectedLang);
            localStorage.setItem('active-lang', JSON.stringify(selectedLang));
        }
    }, []);

    return (
        <main>
            <div className="mobile-nav">
                <div className="icons">
                    <a href="#home">
                        <img src={home} alt="home" />
                    </a>
                    <a href="#rsvp">
                        <img src={rsvp} alt="rsvp" />
                    </a>
                    <a href="#schedule">
                        <img src={schedule} alt="schedule" />
                    </a>
                    <a href="#accomodation">
                        <img src={accomodation} alt="accomontadion" />
                    </a>
                    <a href="#qa">
                        <img src={qa} alt="qa" />
                    </a>
                </div>
            </div>

            <section id="home">
                <div className="image-container">
                    <nav className="nav">
                        <a href="#home">{t('home')}</a>
                        <a href="#rsvp">{t('rsvp')}</a>
                        <a href="#schedule">{t('schedule')}</a>
                        <a href="#accomodation">{t('accomodation')}</a>
                        <a href="#qa">{t('qa')}</a>

                        <button className="lang-btn" onClick={handleSaveToLocalStorage}>
                            {activeLang === 'eng' ? 'hrv' : 'eng'}
                        </button>
                    </nav>

                    <img className="name-cover-img" src={nameCover} alt="names cover" />

                    <div className="header-info">
                        <p>{t('nameCover')}</p>
                        <p className="place">{t('date')}</p>
                        <p className="place">Dubrovnik</p>
                        <img className="chevron" src={chevron} alt="arrow down" />
                    </div>

                    <div className="tags">
                        <p className="tag">#SelimTiJa #MarijetandMarko</p>
                        <img className="chevron" src={chevron} alt="arrow down" />
                    </div>
                </div>
            </section>

            <section id="rsvp">
                <Rsvp />
            </section>

            <section id="schedule">
                <div className="flowers">
                    <img className="flower flower1" src={flower2} alt="flower" />
                    <img className="leaf leaf1" src={leaf} alt="flower" />
                    <img className="flower flower2" src={flower2} alt="flower" />
                    <img className="leaf leaf2" src={leaf} alt="flower" />

                    <img className="golden-leaf" src={goldLeaf1} alt="leaf" />
                    <img className="flower-right flower-r1" src={flower1} alt="flower" />
                    <img className="golden-leaf-v leaf-right-1" src={goldLeaf} alt="flower" />

                    <img className="golden-leaf g-leaf-2" src={goldLeaf1} alt="leaf" />
                    <img className="flower-right flower-r2" src={flower1} alt="flower" />
                    <img className="golden-leaf-v leaf-right-2" src={goldLeaf} alt="flower" />
                </div>

                <h2 className="title">{t('scheduleTitle')}</h2>
                <p className="date">{t('scheduleTime')}</p>

                <div className="wrapper mt">
                    <div className="line-item">
                        <div className="icon">
                            <img src={glassesIcon} alt="glasses icon" />
                        </div>

                        <div className="text">
                            <h4 className="time">{t('time3Pm')}</h4>
                            <div className="description">
                                <p>{t('welcomeDrink')}</p>
                                <a target="_blank" href="https://maps.app.goo.gl/p4HZ5yPD7nsfeb4Y7">
                                    {t('sponza')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="line-item">
                        <div className="icon">
                            <img src={churchIcon} alt="church icon" />
                        </div>

                        <div className="text">
                            <h4 className="time">{t('time5Pm')}</h4>
                            <div className="description">
                                <p>{t('weddingCeremony')}</p>
                                <a target="_blank" href="https://maps.app.goo.gl/bAPtFkh9RfaHBt6TA">
                                    {t('church')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper mb">
                    <div className="line-item">
                        <div className="icon">
                            <img src={busIcon} alt="bus icon" />
                        </div>

                        <div className="text">
                            <h4 className="time">{t('time630pm')}</h4>
                            <div className="description">
                                <p>{t('busDeparture')}</p>
                                <a target="_blank" href="https://maps.app.goo.gl/UxwVmEr6qZAmofQy8?g_st=iw">
                                    {t('ploceGate')}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="disclaimer">
                    {t('discplaimerPart')}
                    <a target="_blank" href="https://maps.app.goo.gl/UxwVmEr6qZAmofQy8?g_st=iw">
                        {t('thisRoute')}
                    </a>
                    {t('onlyAsItIsTheSafest')}
                </div>

                <div className="wrapper mt">
                    <div className="line-item">
                        <div className="icon">
                            <img src={glassesIcon} alt="glasses icon" />
                        </div>

                        <div className="text">
                            <h4 className="time">{t('time7Pm')}</h4>
                            <div className="description">
                                <p>
                                    {t('warmUp')} <br /> {t('beforeDinner')}
                                </p>
                                <a target="_blank" href="https://maps.app.goo.gl/BqgvSeeJPjvxSXZX7">
                                    Šišini dubi
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="line-item">
                        <div className="icon">
                            <img src={dinnerIcon} alt="dinner icon" />
                        </div>

                        <div className="text">
                            <h4 className="time">{t('time8Pm')}</h4>
                            <div className="description">
                                <p>{t('dinner')}</p>
                                <a target="_blank" href="https://maps.app.goo.gl/BqgvSeeJPjvxSXZX7">
                                    Šišini dubi
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper">
                    <div className="line-item">
                        <div className="icon">
                            <img src={busIcon} alt="bus icon" />
                        </div>

                        <div className="text">
                            <h4 className="time">{t('time1am')}</h4>
                            <div className="description">
                                <p>{t('busDepartureSisiniDubi')}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wrapper mb">
                    <div className="line-item">
                        <div className="icon">
                            <img src={busIcon} alt="bus icon" />
                        </div>

                        <div className="text">
                            <h4 className="time">{t('time3am')}</h4>
                            <div className="description">
                                <p>{t('lastBus')}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="accomodation">
                <div className="wrapper">
                    <h2 className="title">{t('accomodationTitle')}</h2>

                    <div className="cols">
                        <div className="text-col">
                            <p>{t('accomodationContent')}</p>

                            <p>{t('accomodationPrice')}</p>

                            <p>
                                <span>{t('contact')}</span>
                                <br />
                                Mateo Mojaš
                                <a href="mailto:mateo.mojas@scdu.hr">mateo.mojas@scdu.hr</a>
                            </p>

                            <p>
                                <span>{t('prices')}</span>
                                <br />
                                {t('singleRoom')}
                                <br />
                                {t('doubleRoom')}
                            </p>

                            <p>
                                <span>{t('location')}</span>
                                <a href="https://maps.app.goo.gl/tYqX1GJzQRAGuJN96">Ulica Marka Marojice 2b</a>
                            </p>
                        </div>

                        <div className="image-col">
                            <img src={hotel} alt="hotel" />
                        </div>
                    </div>

                    <div className="cols-flat">
                        <h2 className="title">{t('bnbooking')}</h2>
                        <p>{t('weRecommend')}</p>
                        <p>{t('extraRecomment')}</p>
                        <p>
                            Marijeta:{' '}
                            <a className="inline-a" href="tel:+385 98 165 5100">
                                +385 98 165 5100
                            </a>
                        </p>
                        <p>
                            Marko:{' '}
                            <a className="inline-a" href="tel:+41 79 935 30 50">
                                +41 79 935 30 50
                            </a>
                        </p>
                    </div>

                    <div className="cols-flat">
                        <h2 className="title">{t('publicTransport')}</h2>
                        <p>
                            {t('parkingDifficult')} <br /> {t('parking')}
                        </p>
                        <p>
                            <a href="https://maps.app.goo.gl/khEC26FG5nHFia2JA">Tabasco Parking</a>
                            <strong>{t('price')}</strong> {t('tabascoPrice')}
                        </p>
                        <p>
                            <a href=" https://maps.app.goo.gl/DwJPiY1FN9SK8Unp9">Pile Parking</a>
                            <strong>{t('price')}</strong> {t('pilePrice')}
                        </p>
                        <p>
                            <strong>{t('freeParking')}</strong>
                            <a className="inline-a" href="https://maps.app.goo.gl/9nuufiFXBQSqAuC48">
                                {t('showParkingLocation')}
                            </a>
                        </p>
                        <p>
                            <strong>{t('parkingZone3')}</strong> {t('zoneTime')}
                        </p>
                        <p>
                            <strong>{t('prices')}</strong> {t('zonePrices')}
                        </p>
                        <p>
                            <strong>Bus</strong>
                            <br />
                            {t('busNums')}
                            <br />
                            {t('busPrice')}
                        </p>

                        <p>
                            <strong>Taxi</strong>
                            <br />
                            {t('taxiDescription')}
                            <a className="inline-a" href="+385 20 332 222">
                                {t('taxiNum')}
                            </a>{' '}
                            {t('uberDesc')}
                        </p>
                    </div>

                    <div className="cols-flat">
                        <h2 className="title">{t('lokrumIsland')}</h2>
                        <p>{t('favPlace')}</p>
                        <p>
                            {t('moreInfo')}
                            <a className="inline-a" href="https://www.lokrum.hr/eng/">
                                https://www.lokrum.hr/eng/
                            </a>
                        </p>
                    </div>

                    <div className="cols-flat">
                        <h2 className="title">{t('cityWals')}</h2>
                        <p>{t('sight')}</p>
                        <p>
                            {t('moreInfo')}
                            <a
                                className="inline-a"
                                href="https://shop.citywallsdubrovnik.hr/en/buy-tickets-for-the-following-locations"
                            >
                                https://shop.citywallsdubrovnik.hr/en/buy-tickets-for-the-following-locations
                            </a>
                        </p>
                    </div>

                    <div className="cols-flat">
                        <h2 className="title">{t('ston')}</h2>
                        <p>{t('stonDayTrip')}</p>
                        <p>{t('stonBooking')}</p>
                    </div>

                    <div className="cols-flat">
                        <h2 className="title">{t('elafitiIslands')}</h2>
                        <p>{t('elafitiDayTrip')}</p>
                        <p>{t('elafitiBooking')}</p>
                    </div>

                    <div className="cols">
                        <div className="cols-wrap">
                            <div className="text">
                                <h2 className="title">{t('thingsToDo')}</h2>

                                <p>
                                    <strong>{t('restaurantInDubrovnik')}</strong>
                                </p>
                                <p>Dubravka 1836</p>
                                <p>Pizzeria Castro</p>
                                <p>Arsenal</p>
                                <p>Dundo Maroje</p>
                                <p>Kopun</p>
                            </div>

                            <img src={thingsToDo} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="qa">
                <div className="wrapper">
                    <h2 className="title">{t('qna')}</h2>

                    <div className="qa-wrapper">
                        <QAItem title={t('rsvpQuestion')} answer={t('rsvpAnswer')} />
                        <QAItem title={t('dressCodeQuestion')} answer={t('dressCodeAnswer')} />
                        <QAItem title={t('dateQuestion')} answer={t('dateAnswer')} />
                        <QAItem title={t('childrenQuestion')} answer={t('childrenAnswer')} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Main;
