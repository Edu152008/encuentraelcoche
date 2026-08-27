/* =========================================================
   CAR MATCH
   RESULTS.JS
   VERSION CORREGIDA Y COMPATIBLE
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

const carDatabase = Array.isArray(window.CAR_MATCH_CARS)
    ? window.CAR_MATCH_CARS
    : [];


/* =========================================================
   USER PROFILE
   ========================================================= */

function getUserProfile() {

    const savedProfile =
        localStorage.getItem("carMatchProfile");

    if (!savedProfile) {
        return null;
    }

    try {

        return JSON.parse(savedProfile);

    } catch (error) {

        console.error(
            "CAR MATCH: Error leyendo el perfil.",
            error
        );

        return null;
    }
}


/* =========================================================
   PRICE FORMAT
   ========================================================= */

function formatPrice(price) {

    if (
        price === null ||
        price === undefined ||
        isNaN(Number(price))
    ) {
        return "Precio no disponible";
    }

    return new Intl.NumberFormat(
        "es-ES",
        {
            style: "currency",
            currency: "EUR",
            maximumFractionDigits: 0
        }
    ).format(Number(price));
}


/* =========================================================
   BODY FORMAT
   ========================================================= */

function formatBody(body) {

    const names = {

        coupe: "Coupé",

        sedan: "Berlina",

        suv: "SUV",

        family: "Familiar",

        sports: "Deportivo",

        hatchback: "Compacto",

        convertible: "Cabrio",

        wagon: "Familiar"

    };

    return names[body] || body || "No especificado";
}


/* =========================================================
   SCORE FORMAT
   ========================================================= */

function formatScore(value) {

    if (
        value === null ||
        value === undefined ||
        value === "" ||
        isNaN(Number(value))
    ) {
        return "—";
    }

    return `${Number(value)}/10`;
}


/* =========================================================
   SAFE TEXT
   ========================================================= */

function safeText(value, fallback = "") {

    if (
        value === null ||
        value === undefined
    ) {
        return fallback;
    }

    return String(value);
}


/* =========================================================
   BODY MATCH
   ========================================================= */

function calculateBodyMatch(
    userBody,
    carBody
) {

    if (
        !userBody ||
        userBody === "unknown"
    ) {
        return 70;
    }

    if (userBody === carBody) {
        return 100;
    }

    if (
        userBody === "sports" &&
        carBody === "coupe"
    ) {
        return 90;
    }

    if (
        userBody === "sports" &&
        carBody === "sedan"
    ) {
        return 75;
    }

    if (
        userBody === "family" &&
        (
            carBody === "suv" ||
            carBody === "family" ||
            carBody === "sedan"
        )
    ) {
        return 85;
    }

    if (
        userBody === "suv" &&
        carBody === "family"
    ) {
        return 80;
    }

    if (
        userBody === "sedan" &&
        carBody === "coupe"
    ) {
        return 65;
    }

    if (
        userBody === "coupe" &&
        carBody === "sedan"
    ) {
        return 65;
    }

    return 45;
}


/* =========================================================
   USAGE MATCH
   ========================================================= */

function calculateUsageMatch(
    usage,
    car
) {

    if (!usage) {
        return 60;
    }

    if (usage === "sport") {

        if (
            Number(car.sportiness || 0) >= 8 ||
            (
                Array.isArray(car.idealFor) &&
                car.idealFor.includes("sport")
            )
        ) {
            return 100;
        }

        return 45;
    }

    if (usage === "family") {

        if (
            Number(car.practicality || 0) >= 8 ||
            (
                Array.isArray(car.idealFor) &&
                car.idealFor.includes("family")
            )
        ) {
            return 100;
        }

        return 45;
    }

    if (usage === "city") {

        if (
            Number(car.practicality || 0) >= 7
        ) {
            return 90;
        }

        return 60;
    }

    if (usage === "highway") {

        if (
            Number(car.comfort || 0) >= 8
        ) {
            return 95;
        }

        return 65;
    }

    if (usage === "mixed") {

        const average =
            (
                Number(car.practicality || 0) +
                Number(car.comfort || 0) +
                Number(car.sportiness || 0)
            ) / 3;

        return Math.min(
            100,
            average * 10
        );
    }

    return 60;
}


/* =========================================================
   PASSENGER MATCH
   ========================================================= */

function calculatePassengerMatch(
    passengers,
    carSeats
) {

    if (
        passengers === null ||
        passengers === undefined ||
        passengers === ""
    ) {
        return 70;
    }

    const required =
        Number(passengers);

    const available =
        Number(carSeats);

    if (
        isNaN(required) ||
        isNaN(available)
    ) {
        return 70;
    }

    if (available >= required) {

        if (available === required) {
            return 100;
        }

        return 90;
    }

    const difference =
        required - available;

    return Math.max(
        0,
        100 - difference * 35
    );
}


/* =========================================================
   BUDGET MATCH
   ========================================================= */

function calculateBudgetMatch(
    budget,
    carPrice
) {

    if (
        budget === null ||
        budget === undefined ||
        budget === ""
    ) {
        return 60;
    }

    const maximumBudget =
        Number(budget);

    const price =
        Number(carPrice);

    if (
        isNaN(maximumBudget) ||
        maximumBudget <= 0 ||
        isNaN(price)
    ) {
        return 60;
    }

    if (price <= maximumBudget) {

        if (
            price <=
            maximumBudget * 0.8
        ) {
            return 100;
        }

        return 95;
    }

    const difference =
        (
            price -
            maximumBudget
        ) /
        maximumBudget;

    if (difference <= 0.10) {
        return 75;
    }

    if (difference <= 0.25) {
        return 50;
    }

    if (difference <= 0.50) {
        return 25;
    }

    return 5;
}


/* =========================================================
   PERSONALITY MATCH
   ========================================================= */

function calculatePersonalityMatch(
    profile,
    car
) {

    const values = [];

    if (
        profile.sportiness !== null &&
        profile.sportiness !== undefined
    ) {

        const desired =
            Number(profile.sportiness) * 2;

        const actual =
            Number(car.sportiness || 0);

        const difference =
            Math.abs(
                desired -
                actual
            );

        values.push(
            Math.max(
                0,
                100 - difference * 10
            )
        );
    }

    if (
        profile.luxury !== null &&
        profile.luxury !== undefined
    ) {

        const desired =
            Number(profile.luxury) * 2;

        const actual =
            Number(car.luxury || 0);

        const difference =
            Math.abs(
                desired -
                actual
            );

        values.push(
            Math.max(
                0,
                100 - difference * 10
            )
        );
    }

    if (
        profile.exclusivity !== null &&
        profile.exclusivity !== undefined
    ) {

        const desired =
            Number(profile.exclusivity) * 2;

        const actual =
            Number(car.exclusivity || 0);

        const difference =
            Math.abs(
                desired -
                actual
            );

        values.push(
            Math.max(
                0,
                100 - difference * 10
            )
        );
    }

    if (!values.length) {
        return 60;
    }

    return (
        values.reduce(
            (sum, value) =>
                sum + value,
            0
        ) /
        values.length
    );
}


/* =========================================================
   PRIORITY MATCH
   ========================================================= */

function calculatePriorityMatch(
    priority,
    car
) {

    if (!priority) {
        return 60;
    }

    if (priority === "sport") {

        return Math.min(
            100,
            Number(car.sportiness || 0) * 10
        );
    }

    if (priority === "luxury") {

        return Math.min(
            100,
            Number(car.luxury || 0) * 10
        );
    }

    if (priority === "exclusivity") {

        return Math.min(
            100,
            Number(car.exclusivity || 0) * 10
        );
    }

    if (priority === "practicality") {

        return Math.min(
            100,
            Number(car.practicality || 0) * 10
        );
    }

    if (priority === "balance") {

        const average =
            (
                Number(car.sportiness || 0) +
                Number(car.luxury || 0) +
                Number(car.practicality || 0) +
                Number(car.comfort || 0) +
                Number(car.technology || 0)
            ) / 5;

        return Math.min(
            100,
            average * 10
        );
    }

    return 60;
}


/* =========================================================
   CALCULATE ONE CAR
   ========================================================= */

function calculateCarMatch(
    profile,
    car
) {

    const budgetMatch =
        calculateBudgetMatch(
            profile.budget,
            car.price
        );

    const usageMatch =
        calculateUsageMatch(
            profile.usage,
            car
        );

    const passengerMatch =
        calculatePassengerMatch(
            profile.passengers,
            car.seats
        );

    const bodyMatch =
        calculateBodyMatch(
            profile.body,
            car.body
        );

    const personalityMatch =
        calculatePersonalityMatch(
            profile,
            car
        );

    const priorityMatch =
        calculatePriorityMatch(
            profile.priority,
            car
        );

    const score =
        budgetMatch * 0.20 +
        usageMatch * 0.15 +
        passengerMatch * 0.15 +
        bodyMatch * 0.15 +
        personalityMatch * 0.20 +
        priorityMatch * 0.15;

    const percentage =
        Math.round(
            Math.max(
                0,
                Math.min(
                    100,
                    score
                )
            )
        );

    return {

        ...car,

        match: percentage,

        matchDetails: {

            budget:
                Math.round(
                    budgetMatch
                ),

            usage:
                Math.round(
                    usageMatch
                ),

            passengers:
                Math.round(
                    passengerMatch
                ),

            body:
                Math.round(
                    bodyMatch
                ),

            personality:
                Math.round(
                    personalityMatch
                ),

            priority:
                Math.round(
                    priorityMatch
                )

        }

    };
}


/* =========================================================
   CALCULATE ALL RESULTS
   ========================================================= */

function calculateResults(profile) {

    if (
        !profile ||
        !carDatabase.length
    ) {
        return [];
    }

    const results =
        carDatabase.map(
            car =>
                calculateCarMatch(
                    profile,
                    car
                )
        );

    results.sort(
        (a, b) =>
            Number(b.match || 0) -
            Number(a.match || 0)
    );

    return results;
}


/* =========================================================
   SAVE RESULTS
   ========================================================= */

function saveResults(results) {

    try {

        localStorage.setItem(
            "carMatchResults",
            JSON.stringify(results)
        );

    } catch (error) {

        console.error(
            "CAR MATCH: No se pudieron guardar los resultados.",
            error
        );
    }
}


/* =========================================================
   GET SAVED RESULTS
   ========================================================= */

function getSavedResults() {

    const saved =
        localStorage.getItem(
            "carMatchResults"
        );

    if (!saved) {
        return null;
    }

    try {

        const parsed =
            JSON.parse(saved);

        if (!Array.isArray(parsed)) {
            return null;
        }

        return parsed;

    } catch (error) {

        console.error(
            "CAR MATCH: Error leyendo resultados.",
            error
        );

        return null;
    }
}


/* =========================================================
   GET CAR BY ID
   ========================================================= */

function getCarById(id) {

    return carDatabase.find(
        car =>
            String(car.id) === String(id)
    );
}


/* =========================================================
   GET RESULT BY ID
   ========================================================= */

function getResultById(id) {

    const results =
        getSavedResults() || [];

    return results.find(
        car =>
            String(car.id) === String(id)
    );
}


/* =========================================================
   FORMAT IDEAL FOR
   ========================================================= */

function formatIdealFor(value) {

    const names = {

        sport: "Deportivo",

        luxury: "Lujo",

        exclusivity: "Exclusividad",

        family: "Familia",

        mixed: "Uso mixto",

        city: "Ciudad",

        highway: "Carretera",

        daily: "Uso diario"

    };

    return (
        names[value] ||
        value ||
        "Uso general"
    );
}


/* =========================================================
   BUILD SPECIFICATIONS
   ========================================================= */

function buildCarSpecifications(car) {

    const specifications = [

        {
            name: "AÑO",
            value: car.year || "—"
        },

        {
            name: "PLAZAS",
            value: car.seats || "—"
        },

        {
            name: "CARROCERÍA",
            value: formatBody(car.body)
        },

        {
            name: "PRESTACIONES",
            value: formatScore(car.performance)
        },

        {
            name: "DEPORTIVIDAD",
            value: formatScore(car.sportiness)
        },

        {
            name: "LUJO",
            value: formatScore(car.luxury)
        },

        {
            name: "EXCLUSIVIDAD",
            value: formatScore(car.exclusivity)
        },

        {
            name: "PRACTICIDAD",
            value: formatScore(car.practicality)
        },

        {
            name: "CONFORT",
            value: formatScore(car.comfort)
        },

        {
            name: "TECNOLOGÍA",
            value: formatScore(car.technology)
        }

    ];

    const ignoredKeys = [

        "id",
        "brand",
        "model",
        "image",
        "description",
        "price",
        "year",
        "seats",
        "body",
        "performance",
        "sportiness",
        "luxury",
        "exclusivity",
        "practicality",
        "comfort",
        "technology",
        "idealFor",
        "officialUrl",
        "match",
        "matchDetails"

    ];

    Object.keys(car).forEach(
        key => {

            if (
                ignoredKeys.includes(key)
            ) {
                return;
            }

            const value =
                car[key];

            if (
                value === null ||
                value === undefined ||
                value === ""
            ) {
                return;
            }

            if (
                typeof value === "object"
            ) {
                return;
            }

            const alreadyExists =
                specifications.some(
                    spec =>
                        spec.name.toLowerCase() ===
                        key.toLowerCase()
                );

            if (!alreadyExists) {

                specifications.push({

                    name:
                        key
                            .replace(
                                /([A-Z])/g,
                                " $1"
                            )
                            .replace(
                                /^./,
                                letter =>
                                    letter.toUpperCase()
                            ),

                    value:
                        String(value)

                });

            }

        }
    );

    return specifications;
}


/* =========================================================
   VIEW CAR
   ========================================================= */

function viewCar(carId) {

    const car =
        getCarById(carId);

    if (!car) {

        console.error(
            "CAR MATCH: Coche no encontrado:",
            carId
        );

        return;
    }

    const result =
        getResultById(carId);

    const match =
        result &&
        result.match !== undefined
            ? result.match
            : 0;

    const oldModal =
        document.getElementById(
            "carModal"
        );

    if (oldModal) {
        oldModal.remove();
    }

    const modal =
        document.createElement("div");

    modal.id =
        "carModal";

    modal.className =
        "cm-car-modal";

    const specifications =
        buildCarSpecifications(car);

    const idealFor =
        Array.isArray(car.idealFor) &&
        car.idealFor.length
            ? car.idealFor
                .map(
                    item =>
                        `<span>${safeText(formatIdealFor(item))}</span>`
                )
                .join("")
            : "<span>Uso general</span>";

    const officialUrl =
        safeText(
            car.officialUrl,
            ""
        );

    const officialButton =
        officialUrl
            ? `
                <div class="cm-official-section">

                    <a
                        class="cm-official-button"
                        href="${officialUrl}"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        VISITAR WEB OFICIAL →
                    </a>

                </div>
            `
            : "";

    modal.innerHTML = `

        <div
            class="cm-modal-overlay"
            onclick="closeCarModal()"
        ></div>

        <div class="cm-modal-box">

            <button
                class="cm-modal-close"
                type="button"
                onclick="closeCarModal()"
                aria-label="Cerrar"
            >
                ×
            </button>

            <div class="cm-modal-image">

                <img
                    src="${safeText(car.image)}"
                    alt="${safeText(car.brand)} ${safeText(car.model)}"
                    onerror="this.style.display='none';"
                >

            </div>

            <div class="cm-modal-content">

                <div class="cm-modal-header">

                    <div>

                        <p class="cm-modal-brand">
                            ${safeText(car.brand)}
                        </p>

                        <h2>
                            ${safeText(car.model)}
                        </h2>

                    </div>

                    <div class="cm-modal-match">

                        <strong>
                            ${Number(match || 0)}%
                        </strong>

                        <span>
                            MATCH
                        </span>

                    </div>

                </div>

                <p class="cm-modal-description">

                    ${safeText(
                        car.description,
                        "Sin descripción disponible."
                    )}

                </p>

                <div class="cm-modal-price">

                    ${formatPrice(car.price)}

                </div>

                <div class="cm-specs-title">
                    ESPECIFICACIONES DEL VEHÍCULO
                </div>

                <div class="cm-specs-grid">

                    ${
                        specifications
                            .map(
                                specification => `

                                    <div class="cm-spec">

                                        <span>
                                            ${safeText(
                                                specification.name
                                            )}
                                        </span>

                                        <strong>
                                            ${safeText(
                                                specification.value,
                                                "—"
                                            )}
                                        </strong>

                                    </div>

                                `
                            )
                            .join("")
                    }

                </div>

                <div class="cm-ideal-title">
                    IDEAL PARA
                </div>

                <div class="cm-ideal-list">

                    ${idealFor}

                </div>

                ${officialButton}

            </div>

        </div>

    `;

    document.body.appendChild(
        modal
    );

    addModalStyles();

    document.body.style.overflow =
        "hidden";
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeCarModal() {

    const modal =
        document.getElementById(
            "carModal"
        );

    if (modal) {
        modal.remove();
    }

    document.body.style.overflow =
        "";
}


/* =========================================================
   MODAL STYLES
   ========================================================= */

function addModalStyles() {

    if (
        document.getElementById(
            "carMatchModalStyles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "carMatchModalStyles";

    style.textContent = `

        .cm-car-modal {

            position: fixed;
            inset: 0;
            z-index: 99999;

            display: flex;
            align-items: center;
            justify-content: center;

            padding: 25px;
            box-sizing: border-box;

        }

        .cm-modal-overlay {

            position: absolute;
            inset: 0;

            background:
                rgba(0,0,0,0.78);

            backdrop-filter:
                blur(8px);

        }

        .cm-modal-box {

            position: relative;
            z-index: 2;

            width:
                min(1050px, 100%);

            max-height: 92vh;
            overflow-y: auto;

            background: #ffffff;
            color: #111111;

            border-radius: 4px;

            box-shadow:
                0 30px 80px
                rgba(0,0,0,0.35);

        }

        .cm-modal-close {

            position: absolute;

            top: 15px;
            right: 18px;

            z-index: 5;

            width: 42px;
            height: 42px;

            border: 0;
            border-radius: 50%;

            background:
                rgba(0,0,0,0.65);

            color: #ffffff;

            font-size: 28px;
            cursor: pointer;

            line-height: 42px;

        }

        .cm-modal-image {

            width: 100%;
            height: 380px;

            overflow: hidden;
            background: #eeeeee;

        }

        .cm-modal-image img {

            width: 100%;
            height: 100%;

            object-fit: cover;
            display: block;

        }

        .cm-modal-content {

            padding: 35px;

        }

        .cm-modal-header {

            display: flex;

            align-items: flex-start;
            justify-content: space-between;

            gap: 25px;

        }

        .cm-modal-brand {

            margin:
                0 0 5px;

            font-size: 13px;
            font-weight: 700;

            letter-spacing: 2px;

            text-transform:
                uppercase;

            opacity: 0.6;

        }

        .cm-modal-header h2 {

            margin: 0;

            font-size: 38px;

            line-height: 1.1;

        }

        .cm-modal-match {

            display: flex;

            flex-direction: column;

            align-items: center;

            min-width: 100px;

            padding:
                12px 18px;

            border:
                1px solid #dddddd;

        }

        .cm-modal-match strong {

            font-size: 30px;

            line-height: 1;

        }

        .cm-modal-match span {

            margin-top: 5px;

            font-size: 10px;

            letter-spacing: 1.5px;

            font-weight: 700;

        }

        .cm-modal-description {

            margin:
                25px 0 15px;

            max-width: 800px;

            line-height: 1.7;

            color: #555555;

        }

        .cm-modal-price {

            font-size: 24px;
            font-weight: 700;

            margin-bottom: 35px;

        }

        .cm-specs-title,
        .cm-ideal-title {

            font-size: 12px;
            font-weight: 800;

            letter-spacing: 2px;

            margin-bottom: 15px;

        }

        .cm-specs-grid {

            display: grid;

            grid-template-columns:
                repeat(
                    2,
                    minmax(0, 1fr)
                );

            gap: 1px;

            background: #dddddd;

            border:
                1px solid #dddddd;

            margin-bottom: 30px;

        }

        .cm-spec {

            display: flex;

            align-items: center;
            justify-content: space-between;

            gap: 20px;

            padding: 18px;

            background: #ffffff;

            min-height: 24px;

        }

        .cm-spec span {

            font-size: 11px;
            font-weight: 700;

            letter-spacing: 1px;

            color: #777777;

        }

        .cm-spec strong {

            font-size: 15px;

            text-align: right;

        }

        .cm-ideal-list {

            display: flex;

            flex-wrap: wrap;

            gap: 8px;

        }

        .cm-ideal-list span {

            padding:
                9px 13px;

            background: #f1f1f1;

            font-size: 12px;
            font-weight: 700;

        }

        /* =================================================
           OFFICIAL WEBSITE BUTTON
           ================================================= */

        .cm-official-section {

            margin-top: 30px;

            padding-top: 25px;

            border-top:
                1px solid #dddddd;

        }

        .cm-official-button {

            display: inline-block;

            padding:
                14px 22px;

            background: #111111;

            color: #ffffff;

            text-decoration: none;

            font-size: 11px;

            font-weight: 800;

            letter-spacing: 1.5px;

            transition:
                opacity 0.2s ease;

        }

        .cm-official-button:hover {

            opacity: 0.75;

        }

        @media (max-width: 700px) {

            .cm-car-modal {

                padding: 10px;

            }

            .cm-modal-image {

                height: 230px;

            }

            .cm-modal-content {

                padding: 22px;

            }

            .cm-modal-header {

                flex-direction: column;

            }

            .cm-modal-header h2 {

                font-size: 30px;

            }

            .cm-modal-match {

                align-self:
                    flex-start;

            }

            .cm-specs-grid {

                grid-template-columns:
                    1fr;

            }

            .cm-official-button {

                width: 100%;

                box-sizing: border-box;

                text-align: center;

            }

        }

    `;

    document.head.appendChild(
        style
    );
}


/* =========================================================
   FIND RESULTS CONTAINER
   ========================================================= */

function getResultsContainer() {

    return (
        document.getElementById("results") ||
        document.getElementById("resultsContainer")
    );
}


/* =========================================================
   OTHER RESULTS STYLES
   ========================================================= */

function addOtherResultsStyles() {

    if (
        document.getElementById(
            "carMatchOtherResultsStyles"
        )
    ) {
        return;
    }

    const style =
        document.createElement("style");

    style.id =
        "carMatchOtherResultsStyles";

    style.textContent = `

        /* CONTENEDOR DE LOS MATCH SUGERIDOS */

        .results-grid {

            display: grid !important;

            grid-template-columns:
                repeat(
                    3,
                    minmax(260px, 1fr)
                ) !important;

            gap: 40px !important;

            width: 100% !important;

            max-width: 1200px !important;

            margin-top: 45px !important;

            margin-left: auto !important;
            margin-right: auto !important;

            box-sizing: border-box !important;

        }


        /* TARJETAS */

        .results-grid .result-card {

            width: 100% !important;

            min-width: 0 !important;

            box-sizing: border-box !important;

            margin: 0 !important;

        }


        /* IMAGEN */

        .results-grid .result-card-image {

            width: 100% !important;

            height: 300px !important;

            overflow: hidden !important;

        }


        .results-grid .result-card-image img {

            width: 100% !important;

            height: 100% !important;

            object-fit: cover !important;

            display: block !important;

        }


        /* CONTENIDO */

        .results-grid .result-card-content {

            width: 100% !important;

            box-sizing: border-box !important;

            padding: 24px !important;

        }


        .results-grid .result-card h3 {

            font-size: 24px !important;

            margin-top: 5px !important;

            margin-bottom: 5px !important;

        }


        .results-grid .result-brand {

            font-size: 12px !important;

            letter-spacing: 2px !important;

        }


        .results-grid .result-card-price {

            font-size: 18px !important;

            margin-top: 8px !important;

        }


        .results-grid .result-view-button {

            margin-top: 15px !important;

            padding: 11px 18px !important;

        }


        /* MATCH */

        .results-grid .result-card-match {

            font-size: 12px !important;

            padding: 8px 12px !important;

        }


        /* TABLET */

        @media (max-width: 1000px) {

            .results-grid {

                grid-template-columns:
                    repeat(
                        2,
                        minmax(260px, 1fr)
                    ) !important;

                gap: 30px !important;

            }

        }


        /* MÓVIL */

        @media (max-width: 650px) {

            .results-grid {

                grid-template-columns:
                    1fr !important;

                gap: 25px !important;

                margin-top: 30px !important;

            }

            .results-grid .result-card-image {

                height: 260px !important;

            }

        }

    `;

    document.head.appendChild(
        style
    );
}


/* =========================================================
   RENDER OTHER RESULTS
   ========================================================= */

function renderOtherResults(results) {

    const container =
        getResultsContainer();

    if (!container) {

        console.error(
            "CAR MATCH: No se encuentra #results ni #resultsContainer."
        );

        return;
    }

    const otherResults =
        results.slice(1, 7);

    if (!otherResults.length) {

        return;
    }

    let grid =
        container.querySelector(
            ".results-grid"
        );

    if (!grid) {

        grid =
            document.createElement(
                "div"
            );

        grid.className =
            "results-grid";

        container.appendChild(
            grid
        );
    }

    addOtherResultsStyles();

    grid.innerHTML =
        otherResults.map(
            car => `

                <article class="result-card">

                    <div class="result-card-image">

                        <img
                            src="${safeText(car.image)}"
                            alt="${safeText(car.brand)} ${safeText(car.model)}"
                            onerror="this.style.display='none';"
                        >

                        <div class="result-card-match">

                            ${Number(car.match || 0)}% MATCH

                        </div>

                    </div>

                    <div class="result-card-content">

                        <p class="result-brand">

                            ${safeText(car.brand)}

                        </p>

                        <h3>

                            ${safeText(car.model)}

                        </h3>

                        <p class="result-card-price">

                            ${formatPrice(car.price)}

                        </p>

                        <button
                            class="result-view-button"
                            type="button"
                            onclick="viewCar('${safeText(car.id)}')"
                        >

                            VER COCHE →

                        </button>

                    </div>

                </article>

            `
        ).join("");
}


/* =========================================================
   RENDER BEST MATCH
   ========================================================= */

function renderBestMatch(bestMatch) {

    if (!bestMatch) {
        return;
    }

    const bestImage =
        document.getElementById(
            "bestImage"
        );

    const bestBrand =
        document.getElementById(
            "bestBrand"
        );

    const bestModel =
        document.getElementById(
            "bestModel"
        );

    const bestDescription =
        document.getElementById(
            "bestDescription"
        );

    const bestPrice =
        document.getElementById(
            "bestPrice"
        );

    if (bestImage) {

        bestImage.src =
            bestMatch.image || "";

        bestImage.alt =
            `${safeText(bestMatch.brand)} ${safeText(bestMatch.model)}`;

    }

    if (bestBrand) {

        bestBrand.textContent =
            bestMatch.brand || "";

    }

    if (bestModel) {

        bestModel.textContent =
            bestMatch.model || "";

    }

    if (bestDescription) {

        bestDescription.textContent =
            bestMatch.description ||
            "Este coche encaja especialmente bien con tus preferencias.";

    }

    if (bestPrice) {

        bestPrice.textContent =
            formatPrice(
                bestMatch.price
            );

    }

    let bestContent =
        document.querySelector(
            ".best-match-content"
        );

    if (!bestContent) {

        bestContent =
            document.querySelector(
                ".top-match-content"
            );

    }

    if (!bestContent) {

        bestContent =
            document.querySelector(
                ".best-match"
            );

    }

    if (!bestContent) {
        return;
    }

    const oldInfo =
        bestContent.querySelector(
            ".cm-best-extra"
        );

    if (oldInfo) {
        oldInfo.remove();
    }

    const extra =
        document.createElement(
            "div"
        );

    extra.className =
        "cm-best-extra";

    extra.innerHTML = `

        <div class="cm-best-match-score">

            <strong>
                ${Number(bestMatch.match || 0)}%
            </strong>

            <span>
                MATCH
            </span>

        </div>

        <button
            class="primary-button"
            type="button"
            onclick="viewCar('${safeText(bestMatch.id)}')"
        >

            VER COCHE

        </button>

    `;

    bestContent.appendChild(
        extra
    );

    addBestMatchStyles();
}


/* =========================================================
   BEST MATCH EXTRA STYLES
   ========================================================= */

function addBestMatchStyles() {

    if (
        document.getElementById(
            "carMatchBestStyles"
        )
    ) {
        return;
    }

    const style =
        document.createElement(
            "style"
        );

    style.id =
        "carMatchBestStyles";

    style.textContent = `

        .cm-best-extra {

            display: flex;

            align-items: center;

            gap: 20px;

            margin-top: 25px;

            flex-wrap: wrap;

        }

        .cm-best-match-score {

            display: flex;

            align-items: baseline;

            gap: 8px;

            padding:
                10px 15px;

            border:
                1px solid
                rgba(0,0,0,0.15);

        }

        .cm-best-match-score strong {

            font-size: 28px;

            line-height: 1;

        }

        .cm-best-match-score span {

            font-size: 10px;

            font-weight: 700;

            letter-spacing: 1.5px;

        }

        .cm-best-extra .primary-button {

            cursor: pointer;

        }

    `;

    document.head.appendChild(
        style
    );
}


/* =========================================================
   RESTART QUIZ
   ========================================================= */

function restartQuiz() {

    localStorage.removeItem(
        "carMatchProfile"
    );

    localStorage.removeItem(
        "carMatchResults"
    );

    window.location.href =
        "quiz.html";
}


/* =========================================================
   HOME
   ========================================================= */

function goHome() {

    window.location.href =
        "index.html";
}


/* =========================================================
   INITIALIZE RESULTS
   ========================================================= */

function initializeResults() {

    const resultsContainer =
        getResultsContainer();

    const bestImage =
        document.getElementById(
            "bestImage"
        );

    const bestModel =
        document.getElementById(
            "bestModel"
        );

    if (
        !resultsContainer &&
        !bestImage &&
        !bestModel
    ) {
        return;
    }

    if (!carDatabase.length) {

        console.error(
            "CAR MATCH: La base de coches está vacía."
        );

        if (resultsContainer) {

            resultsContainer.innerHTML = `

                <div class="results-empty">

                    <h2>
                        No se ha podido cargar la base de vehículos.
                    </h2>

                    <p>
                        Comprueba que cars.js se carga antes de results.js.
                    </p>

                </div>

            `;

        }

        return;
    }

    const profile =
        getUserProfile();

    if (!profile) {

        console.error(
            "CAR MATCH: No existe carMatchProfile."
        );

        if (resultsContainer) {

            resultsContainer.innerHTML = `

                <div class="results-empty">

                    <h2>
                        No encontramos tus respuestas.
                    </h2>

                    <p>
                        Repite el test para encontrar tu coche ideal.
                    </p>

                    <button
                        class="primary-button"
                        type="button"
                        onclick="restartQuiz()"
                    >
                        HACER EL TEST
                    </button>

                </div>

            `;

        }

        return;
    }

    let results =
        getSavedResults();

    let needsRecalculation =
        !Array.isArray(results) ||
        results.length !== carDatabase.length;

    if (
        !needsRecalculation &&
        results.length
    ) {

        const firstResult =
            results[0];

        if (
            !firstResult ||
            firstResult.match === undefined
        ) {

            needsRecalculation =
                true;

        }

    }

    if (needsRecalculation) {

        results =
            calculateResults(
                profile
            );

        saveResults(
            results
        );

    }

    if (
        !Array.isArray(results) ||
        !results.length
    ) {

        if (resultsContainer) {

            resultsContainer.innerHTML = `

                <div class="results-empty">

                    <h2>
                        No se han encontrado vehículos.
                    </h2>

                    <p>
                        Intenta realizar el test de nuevo.
                    </p>

                    <button
                        class="primary-button"
                        type="button"
                        onclick="restartQuiz()"
                    >
                        REPETIR TEST
                    </button>

                </div>

            `;

        }

        return;
    }

    const bestMatch =
        results[0];

    renderBestMatch(
        bestMatch
    );

    renderOtherResults(
        results
    );

    const restartButtons =
        document.querySelectorAll(
            '[data-action="restart-quiz"]'
        );

    restartButtons.forEach(
        button => {

            button.onclick =
                restartQuiz;

        }
    );

    console.log(
        "CAR MATCH: Resultados cargados correctamente.",
        results
    );
}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeResults
    );

} else {

    initializeResults();

}