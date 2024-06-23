const t = (key: string) => {
    const selectedLang = JSON.parse(localStorage.getItem('active-lang'));
    return selectedLang === 'eng' ? engTranslate[key] : hrvTranslate[key];
};

const engTranslate = {
    home: 'Home',
    rsvp: 'RSVP',
    schedule: 'Schedule',
    accomodation: 'Accomodation',
    qa: 'Q&A',
    nameCover: 'We invite you to our wedding',
    date: 'October 5, 2024',
    rsvpTitle: 'RSVP',
    rsvpContent:
        'Please, enter your first and last name to confirm RSVP, meal preferences and transportation. Please indicate any dietary restrictions or meal preferences: Meat menu, Vegetarian menu, allergies or food restrictions (Please, provide us with more information).We want you to relax and safely enjoy our Big Day. That is why we have arranged complimentary transportation to and from the wedding ceremony and reception. Please, confirm shuttle transportation.',
    rsvpNamePlaceholder: 'First and Last name',
    rsvpAttend: 'Will attend',
    rsvpNoAttend: 'Will not attend',
    rsvpBus: 'Will use shuttle',
    rsvpNoBus: 'Will not use shuttle',
    rsvpMeal: 'Please indicate any dietary restrictions or meal preferences:',
    submit: 'Submit',
    groupDescription: 'Select your info below or try searching again.',
    groupSelect: 'Select',
    nameExample: 'Ex. Sarah Fortune (not The Fortune Family or Dr. & Mr. Fortune)',
    continue: 'Continue',
    select: 'Select',
    scheduleTitle: 'Schedule',
    scheduleTime: 'Saturday, October 5, 2024',
    time3Pm: '3:00 PM',
    welcomeDrink: 'Welcome Drink',
    sponza: 'The Palace of Sponza',
    time5Pm: '5:00 PM',
    weddingCeremony: 'Wedding ceremony',
    church: 'The Church of St. Blasie',
    time630pm: '6:30 PM',
    busDeparture: 'Bus departure for Šišini dubi',
    ploceGate: 'from the Ploče gate',
    discplaimerPart: 'Important: If you are traveling in your own vehicle, please use ',
    thisRoute: 'this route',
    onlyAsItIsTheSafest: ' only as it is the safest option. The parking will be available in Šišini dubi.',
    time7Pm: '7:00 PM',
    warmUp: 'Drinks and warm up',
    beforeDinner: 'before the dinner',
    sisiniDubi: 'Šišini dubi',
    time8Pm: '8:00 PM',
    dinner: 'Reception: Dinner',
    time1am: '1:00 AM',
    busDepartureSisiniDubi: 'Return drive to the Ploče Gate from Šišini dubi',
    time3am: '3:00 AM',
    lastBus: 'Return drive to the Ploče Gate (the last bus) from Šišini dubi',
    accomodationTitle: 'Travel Note',
    accomodationContent:
        'The Hotel Akademis Academia is offering a special price for our guests with included breakfast and parking in their garage.',
    accomodationPrice: 'You must refer to our wedding when booking.',
    contact: 'Contact:',
    prices: 'Prices:',
    singleRoom: '77,00 EUR + tourist tax of 1,65 EUR/per person, per night',
    doubleRoom: '90,00 EUR + tourist tax of 1,65 EUR/per person, per night',
    location: 'Location:',
    bnbooking: 'Airbnb and Booking',
    weRecommend: 'We recommend staying as close as possible to the Old Town.',
    extraRecomment:
        'If you need extra recommendations for your accommodation in Dubrovnik, do not hesitate to contact one of us.',
    publicTransport: 'Parking, public transport and Taxi services',
    parkingDifficult: 'As you can imagine, parking in Dubrovnik can be difficult. However, here are a few suggestions.',
    parking:
        'Please note that you cannot park around the Old Town as parking is allowed only for users with special permits or at high prices at two selected locations.',
    price: 'Price:',
    tabascoPrice: '5,30 EUR/hour',
    pilePrice: '5,30 EUR/hour',
    freeParking: 'Guerrilla parking/free parking: ',
    showParkingLocation: 'Show parking location',
    parkingZone3: 'Parking zone 3:',
    zoneTime: 'Every day 6 am - 10 pm',
    zonePrices: '1,30 EUR/h, 17,30 EUR/day',
    busNums:
        'The best way to get to the Old Town is by public transport. Buses run very often. To get to the Pile Gate (one of the main entrances to the Old Town), please, use the buses numbers: 1A, 1B, 3, 4, 6, 8, 9.',
    busPrice:
        'The price of the one-way ticket is 2,00 EUR if you buy from the driver or 1,73 EUR if you buy it on the kiosk.',
    taxiDescription: 'We have Uber in Dubrovnik, as well as Bolt, and some other Taxi apps, and local Taxi service ',
    taxiNum: '(Plavi taxi: +385 20 332 222)',
    uberDesc:
        'While we will have organized transport available, some of you might opt for using Taxis, in which case we recommend Uber.',
    lokrumIsland: 'Lokrum Island',
    favPlace: 'Our favorite place - easy to get to from the Old town port.',
    moreInfo: 'For more information: ',
    cityWals: 'Dubrovnik City Walls',
    sight: 'The number one sight to see in Dubrovnik!',
    ston: 'City of Ston and Mali Ston',
    stonDayTrip:
        'This is a day trip but totally worth it. Enjoy wine tasting, visit the oyster farm, the oldest salt beds in Europe and walk on the Walls of Ston.',
    stonBooking: 'Please, let us know if you need help with booking this tour.',
    elafitiIslands: 'Elafiti Islands',
    elafitiDayTrip: 'A full day trip in a Galleon ship to the Elafiti islands.',
    elafitiBooking: 'Please, let us know if you need help with booking.',
    thingsToDo: 'Things to do',
    restaurantInDubrovnik: 'Restaurants in Dubrovnik:',
    qna: 'Q & A',
    rsvpQuestion: 'When should I RSVP?',
    rsvpAnswer:
        "We would greatly appreciate it if you could kindly RSVP by August 31, 2024. As our venue has limited capacity, your confirmation is incredibly important to ensure we can accommodate everyone. Without your response, we may regrettably assume you won't be attending and won't be able to reserve a seat for you.",
    dressCodeQuestion: 'Is there a dress code?',
    dressCodeAnswer:
        'The dress code for our wedding day is formal. Even though the temperatures in Dubrovnik are quite high in October (15 °C - 30 °C / 59 °F - 86 °F), we highly recommend bringing some cover (blazers) for dinner time as in Šišini dubi can be chilly.',
    dateQuestion: 'Can I bring a date?',
    dateAnswer:
        'Due to the limited capacity of our venue, we are having an intimate wedding with close family and friends. We are only able to accommodate guests if they are formally invited to your wedding invitation.',
    childrenQuestion: 'Can I bring my children?',
    childrenAnswer:
        'We love your little ones; however, we have decided to make the wedding adults-only due to the limited capacity of our venue, unless they are listed on your invitation. Thank you for your understanding.',
};

const hrvTranslate = {
    home: 'Početna',
    rsvp: 'RSVP',
    schedule: 'Kad i gdje?',
    accomodation: 'Napomena za putovanje',
    qa: 'Pitanja i odgovori',
    nameCover: 'Pozivamo vas na naše vjenčanje',
    date: '5. listopada 2024.',
    rsvpTitle: 'RSVP',
    rsvpContent:
        'Molimo, potvrdite svoj dolazak. Unesite svoje ime i prezime kako biste potvrdili dolazak, odabrali meni i potvrdili dogovoreni prijevoz autobusom. Molimo, navedite sve prehrambene restrikcije ili preferencije: mesni meni, vegetarijanski meni, alergije ili prehrambene restrikcije. Želimo da se opustite i sigurno uživate na naš veliki dan pa smo zato organizirali besplatan prijevoz s mjesta ceremonije vjenčanja do mjesta svadbene večere i obratno. Molimo, potvrdite prijevoz autobusom.',
    rsvpNamePlaceholder: 'Ime i prezime',
    rsvpAttend: 'Potvrđuje dolazak',
    rsvpNoAttend: 'Ne potvrđuje dolazi',
    rsvpBus: 'Potvrđuje prijevoz autobusom',
    rsvpNoBus: 'Ne potvrđuje prijevoz autobusom',
    rsvpMeal: 'Please indicate any dietary restrictions or meal preferences:',
    submit: 'Submit',
    groupDescription: 'Odaberite svoje podatke ispod ili pokušajte ponovno.',
    groupSelect: 'Odaberi',
    nameExample: 'Na primjer: Ivan Horvat (ne obitelj Horvat i sl.)',
    continue: 'Nastavi',
    select: 'Odaberi',
    scheduleTitle: 'Kad i gdje?',
    scheduleTime: 'Subota, 5. listopada 2024.',
    time3Pm: '15.00 h',
    welcomeDrink: 'Zajedničko okupljanje',
    sponza: 'Palača Sponza',
    time5Pm: '17.00 h',
    weddingCeremony: 'Obred vjenčanja',
    church: 'Crkva svetog Vlaha',
    time630pm: '18.30 h',
    busDeparture: 'Polazak organiziranog autobusa za Šišine dube',
    ploceGate: 'iz Ploča',
    discplaimerPart: 'Važno: Ako putujete vlastitim vozilom, molimo Vas da koristite samo ',
    thisRoute: 'ovu rutu',
    onlyAsItIsTheSafest: '  jer je najsigurnija i najjednostavnija. Osiguran je parking u Šišinim dubima.',
    time7Pm: '19.00 h',
    warmUp: 'Aperitiv',
    beforeDinner: '',
    sisiniDubi: 'Šišini dubi',
    time8Pm: '20.00 h',
    dinner: 'Svadbena večera',
    time1am: '1.00 h',
    busDepartureSisiniDubi: 'Povratak organiziranim autobusom do Ploča iz Šišinih duba',
    time3am: '3.00 h',
    lastBus: 'Povratak organiziranim autobusom do Ploča (zadnji autobus) iz Šišinih duba',
    accomodationTitle: 'Napomena za putovanje',
    accomodationContent:
        'Hotel Akademis Academia nudi posebne cijene za naše goste s uključenim doručkom i parkiranjem u garaži. Prilikom rezervacije navedite da ste naši gosti.',
    accomodationPrice: '',
    contact: 'Kontakt:',
    prices: 'Cijena:',
    singleRoom: 'Jednokrevetna soba 77,00 EUR + boravišna pristojba od 1,65 EUR/po osobi i po noćenju',
    doubleRoom: 'Dvokrevetna soba 90,00 EUR + boravišna pristojba od 1,65 EUR/ po osobi po noćenju',
    location: 'Lokacija:',
    bnbooking: 'Airbnb i Booking',
    weRecommend: 'Preporučujemo da odsjednete što bliže Starom gradu.',
    extraRecomment:
        'Ako trebate dodatne preporuke za smještaj u Dubrovniku, slobodno nas kontaktirajte. Rado ćemo Vam pomoći sa sugestijama.',
    publicTransport: 'Parkiranje, javni prijevoz i taxiji',
    parkingDifficult:
        'Kao što možete pretpostaviti, parkiranje u Dubrovniku može biti izazovno. Međutim, evo nekoliko prijedloga.',
    parking:
        'Imajte na umu da ne možete parkirati oko Starog grada jer je parkiranje dopušteno samo za korisnike posebnih povlaštenih karata ili po visokim cijenama na 2 odabrane lokacije.',
    price: 'Cijena:',
    tabascoPrice: '5,30 EUR/sat',
    pilePrice: '5,30 EUR/sat',
    freeParking: 'Besplatno parkiranje: ',
    showParkingLocation: 'Prikaži lokaciju',
    parkingZone3: 'Parking zona 3:',
    zoneTime: 'svaki dan od 6 do 22 sata',
    zonePrices: '1,30 EUR/sat, 17,25 EUR/dan',
    busNums:
        'Najbolji način za dolazak do Starog grada je javnim gradskim prijevozom. Autobusi voze vrlo često. Da biste stigli do Pila (jedan od glavnih ulaza u Stari grad), koristite autobuse broj: 1A, 1B, 3, 4, 6, 8, 9.',
    busPrice: 'Cijena jednosmjerne karte je 2,00 EUR ako je kupite kod vozača ili 1,73 EUR ako je kupite na kiosku.',
    taxiDescription: 'U Dubrovniku imamo Uber, Bolt, kao i neke druge taxi aplikacije te lokalnu taxi službu ',
    taxiNum: '(Plavi taxi: +385 20 332 222)',
    uberDesc:
        'Iako ćemo imati organizirani prijevoz, neki od Vas možda će koristiti taxi. U tom slučaju preporučujemo Uber.',
    lokrumIsland: 'Lokrum Island',
    favPlace: 'Naše omiljeno mjesto - lako dostupno iz luke u Starom gradu.',
    moreInfo: 'Za više informacija: ',
    cityWals: 'Gradske zidine',
    sight: 'Broj jedan atrakcija u Dubrovniku!',
    ston: 'Grad Ston i Mali Ston',
    stonDayTrip:
        'Cjelodnevni izlet, ali se isplati. Uživajte u degustaciji vina, posjetite farmu kamenica, najstariju solanu u Europi i prošećite zidinama Stona.',
    stonBooking: 'Molimo, javite nam ako trebate pomoć pri rezervaciji ovog izleta.',
    elafitiIslands: 'Elafitski otoci',
    elafitiDayTrip: 'Cjelodnevni izlet galijom do Elafitskih otoka.',
    elafitiBooking: 'Molimo, javite nam ako trebate pomoć pri rezervaciji ovog izleta.',
    thingsToDo: 'Ostale stvari',
    restaurantInDubrovnik: 'Kada trebam potvrditi dolazak?',
    qna: 'Pitanja i odgovori',
    rsvpQuestion: 'When should I RSVP?',
    rsvpAnswer:
        'Bili bismo Vam jako zahvalni ako biste mogli potvrditi svoj dolazak do 31. kolovoza 2024. Budući da prostor za svadbenu večeru ima ograničen kapacitet, Vaša potvrda dolaska nam je izuzetno važna. Bez potvrde Vašeg dolaska do 31. kolovoza 2024. pretpostavit ćemo da ne možete doći te Vam nećemo moći rezervirati mjesto za svadbenu večeru.',
    dressCodeQuestion: 'Postoji li dress code?',
    dressCodeAnswer:
        'Dress code za naš dan vjenčanja je formalan. Iako su temperature u Dubrovniku u listopadu prilično visoke (15 °C - 30 °C), preporučujemo da ponesete nešto za pokriti se (npr. sako) za vrijeme večere jer u Šišinim dubima navečer može biti prohladno.',
    dateQuestion: 'Mogu li povesti pratnju?',
    dateAnswer:
        'Zbog ograničenog kapaciteta našeg prostora, odlučili smo se za intimno vjenčanje s obitelji i bliskim prijateljima. Možemo primiti goste samo ako su formalno pozvani na Vašoj pozivnici za vjenčanje.',
    childrenQuestion: 'Mogu li povesti djecu?',
    childrenAnswer:
        'Jako volimo Vaše mališane, ali odlučili smo da vjenčanje bude samo za odrasle s obzirom na ograničeni kapacitet našeg prostora za svadbenu večeru, osim ako Vaša djeca nisu navedena na Vašoj pozivnici. Hvala na razumijevanju.',
};

export { t, engTranslate, hrvTranslate };