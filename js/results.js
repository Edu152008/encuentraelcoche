
/* =========================================================
   CAR MATCH
   RESULTS.JS
   SISTEMA DE RESULTADOS — VERSIÓN LIMPIA
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

let carDatabase = [];

if (
    typeof CAR_MATCH_CARS !== "undefined" &&
    Array.isArray(CAR_MATCH_CARS)
) {

    carDatabase = CAR_MATCH_CARS;

} else if (
    typeof cars !== "undefined" &&
    Array.isArray(cars)
) {

    carDatabase = cars;

} else if (
    Array.isArray(window.CAR_MATCH_CARS)
) {

    carDatabase = window.CAR_MATCH_CARS;

}


/* =========================================================
   USER PROFILE
   ========================================================= */

function getUserProfile() {

    const saved =
        localStorage.getItem("carMatchProfile");

    if (!saved) {
        return null;
    }

    try {

        return JSON.parse(saved);

    } catch (error) {

        console.error(
            "CAR MATCH: Error leyendo el perfil.",
            error
        );

        return null;
    }
}


/* =========================================================
   PRICE
   ========================================================= */

function formatPrice(price) {

    const value = Number(price);

    if (
        price === null ||
        price === undefined ||
        price === "" ||
        Number.isNaN(value)
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
    ).format(value);
}


/* =========================================================
   TEXT
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
   BODY
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

    return (
        names[body] ||
        body ||
        "No especificado"
    );
}


/* =========================================================
   SCORE
   ========================================================= */

function formatScore(value) {

    const number = Number(value);

    if (
        value === null ||
        value === undefined ||
        value === "" ||
        Number.isNaN(number)
    ) {

        return "—";

    }

    return `${number}/10`;
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

    const sportiness =
        Number(car.sportiness || 0);

    const practicality =
        Number(car.practicality || 0);

    const comfort =
        Number(car.comfort || 0);

    const idealFor =
        Array.isArray(car.idealFor)
            ? car.idealFor
            : [];


    if (usage === "sport") {

        return (
            sportiness >= 8 ||
            idealFor.includes("sport")
        )
            ? 100
            : 45;
    }


    if (usage === "family") {

        return (
            practicality >= 8 ||
            idealFor.includes("family")
        )
            ? 100
            : 45;
    }


    if (usage === "city") {

        return practicality >= 7
            ? 90
            : 60;
    }


    if (usage === "highway") {

        return comfort >= 8
            ? 95
            : 65;
    }


    if (usage === "mixed") {

        return Math.min(
            100,
            (
                practicality +
                comfort +
                sportiness
            ) / 3 * 10
        );

    }

    return 60;
}


/* =========================================================
   PASSENGER MATCH
   ========================================================= */

function calculatePassengerMatch(
    passengers,
    seats
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
        Number(seats);

    if (
        Number.isNaN(required) ||
        Number.isNaN(available)
    ) {

        return 70;

    }

    if (available >= required) {

        return available === required
            ? 100
            : 90;

    }

    return Math.max(
        0,
        100 - (
            required -
            available
        ) * 35
    );
}


/* =========================================================
   BUDGET MATCH
   ========================================================= */

function calculateBudgetMatch(
    budget,
    price
) {

    const maximum =
        Number(budget);

    const carPrice =
        Number(price);

    if (
        !budget ||
        Number.isNaN(maximum) ||
        maximum <= 0 ||
        Number.isNaN(carPrice)
    ) {

        return 60;

    }

    if (carPrice <= maximum) {

        return carPrice <= maximum * 0.8
            ? 100
            : 95;

    }

    const difference =
        (
            carPrice -
            maximum
        ) / maximum;


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


    const categories = [
        ["sportiness", car.sportiness],
        ["luxury", car.luxury],
        ["exclusivity", car.exclusivity]
    ];


    categories.forEach(
        ([key, actualValue]) => {

            if (
                profile[key] === null ||
                profile[key] === undefined ||
                profile[key] === ""
            ) {

                return;

            }

            const desired =
                Number(profile[key]) * 2;

            const actual =
                Number(actualValue || 0);

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
    );


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


    const sport =
        Number(car.sportiness || 0);

    const luxury =
        Number(car.luxury || 0);

    const exclusivity =
        Number(car.exclusivity || 0);

    const practicality =
        Number(car.practicality || 0);

    const comfort =
        Number(car.comfort || 0);

    const technology =
        Number(car.technology || 0);


    if (priority === "sport") {

        return Math.min(
            100,
            sport * 10
        );

    }


    if (priority === "luxury") {

        return Math.min(
            100,
            luxury * 10
        );

    }


    if (priority === "exclusivity") {

        return Math.min(
            100,
            exclusivity * 10
        );

    }


    if (priority === "practicality") {

        return Math.min(
            100,
            practicality * 10
        );

    }


    if (priority === "balance") {

        return Math.min(
            100,
            (
                sport +
                luxury +
                practicality +
                comfort +
                technology
            ) / 5 * 10
        );

    }


    return 60;
}


/* =========================================================
   CALCULATE CAR
   ========================================================= */

function calculateCarMatch(
    profile,
    car
) {

    const budget =
        calculateBudgetMatch(
            profile.budget,
            car.price
        );


    const usage =
        calculateUsageMatch(
            profile.usage,
            car
        );


    const passengers =
        calculatePassengerMatch(
            profile.passengers,
            car.seats
        );


    const body =
        calculateBodyMatch(
            profile.body,
            car.body
        );


    const personality =
        calculatePersonalityMatch(
            profile,
            car
        );


    const priority =
        calculatePriorityMatch(
            profile.priority,
            car
        );


    const score =
        budget * 0.20 +
        usage * 0.15 +
        passengers * 0.15 +
        body * 0.15 +
        personality * 0.20 +
        priority * 0.15;


    return {

        ...car,

        match: Math.round(
            Math.max(
                0,
                Math.min(
                    100,
                    score
                )
            )
        ),

        matchDetails: {

            budget: Math.round(budget),

            usage: Math.round(usage),

            passengers: Math.round(passengers),

            body: Math.round(body),

            personality: Math.round(personality),

            priority: Math.round(priority)

        }

    };
}


/* =========================================================
   CALCULATE RESULTS
   ========================================================= */

function calculateResults(profile) {

    if (
        !profile ||
        !carDatabase.length
    ) {

        return [];

    }


    return carDatabase
        .map(
            car =>
                calculateCarMatch(
                    profile,
                    car
                )
        )
        .sort(
            (a, b) =>
                b.match -
                a.match
        );
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

        return Array.isArray(parsed)
            ? parsed
            : null;

    } catch (error) {

        return null;

    }
}


/* =========================================================
   FIND CAR
   ========================================================= */

function getCarById(id) {

    return carDatabase.find(
        car =>
            String(car.id) ===
            String(id)
    );
}


/* =========================================================
   RESULT BY ID
   ========================================================= */

function getResultById(id) {

    const results =
        getSavedResults() || [];

    return results.find(
        car =>
            String(car.id) ===
            String(id)
    );
}


/* =========================================================
   IDEAL FOR
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
   RESULTS CONTAINER
   ========================================================= */

function getResultsContainer() {

    return document.getElementById(
        "results"
    );
}


/* =========================================================
   RENDER BEST MATCH
   ========================================================= */

function renderBestMatch(car) {

    if (!car) {
        return;
    }


    const image =
        document.getElementById(
            "bestImage"
        );

    const brand =
        document.getElementById(
            "bestBrand"
        );

    const model =
        document.getElementById(
            "bestModel"
        );

    const description =
        document.getElementById(
            "bestDescription"
        );

    const price =
        document.getElementById(
            "bestPrice"
        );

    const score =
        document.getElementById(
            "bestMatchScore"
        );

    const button =
        document.getElementById(
            "bestViewButton"
        );


    if (image) {

        image.src =
            safeText(car.image);

        image.alt =
            `${safeText(car.brand)} ${safeText(car.model)}`;

    }


    if (brand) {

        brand.textContent =
            safeText(car.brand);

    }


    if (model) {

        model.textContent =
            safeText(car.model);

    }


    if (description) {

        description.textContent =
            safeText(
                car.description,
                "Este vehículo encaja especialmente bien con tus preferencias."
            );

    }


    if (price) {

        price.textContent =
            formatPrice(
                car.price
            );

    }


    if (score) {

        score.textContent =
            `${Number(car.match || 0)}%`;

    }


    if (button) {

        button.onclick =
            () =>
                viewCar(car.id);

    }
}


/* =========================================================
   RENDER OTHER RESULTS
   ========================================================= */

function renderOtherResults(results) {

    const container =
        getResultsContainer();

    if (!container) {
        return;
    }


    const otherResults =
        results.slice(1, 7);


    container.innerHTML =
        otherResults
            .map(
                car => `

                    <article
                        class="result-card"
                        data-car-id="${safeText(car.id)}"
                    >

                        <div class="result-card-image">

                            <img
                                src="${safeText(car.image)}"
                                alt="${safeText(car.brand)} ${safeText(car.model)}"
                                loading="lazy"
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


                            <p class="result-card-description">

                                ${safeText(
                                    car.description,
                                    "Una opción que puede encajar con tus preferencias."
                                )}

                            </p>


                            <div class="result-card-bottom">

                                <span class="result-card-price">

                                    ${formatPrice(car.price)}

                                </span>


                                <button
                                    class="result-view-button"
                                    type="button"
                                    data-view-car="${safeText(car.id)}"
                                >

                                    VER COCHE →

                                </button>

                            </div>

                        </div>

                    </article>

                `
            )
            .join("");


    container
        .querySelectorAll(
            "[data-view-car]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        viewCar(
                            button.dataset.viewCar
                        );

                    }
                );

            }
        );
}


/* =========================================================
   CAR SPECIFICATIONS
   ========================================================= */

function buildCarSpecifications(car) {

    return [

        ["AÑO", car.year],
        ["PLAZAS", car.seats],
        ["CARROCERÍA", formatBody(car.body)],
        ["PRESTACIONES", formatScore(car.performance)],
        ["DEPORTIVIDAD", formatScore(car.sportiness)],
        ["LUJO", formatScore(car.luxury)],
        ["EXCLUSIVIDAD", formatScore(car.exclusivity)],
        ["PRACTICIDAD", formatScore(car.practicality)],
        ["CONFORT", formatScore(car.comfort)],
        ["TECNOLOGÍA", formatScore(car.technology)]

    ];
}


/* =========================================================
   VIEW CAR
   ========================================================= */

function viewCar(carId) {

    const car =
        getCarById(carId);

    if (!car) {

        console.error(
            "CAR MATCH: coche no encontrado",
            carId
        );

        return;
    }


    closeCarModal();


    const result =
        getResultById(carId);


    const match =
        result
            ? Number(result.match || 0)
            : 0;


    const specifications =
        buildCarSpecifications(car);


    const idealFor =
        Array.isArray(car.idealFor)
            ? car.idealFor
            : [];


    const modal =
        document.createElement(
            "div"
        );


    modal.id =
        "carModal";


    modal.className =
        "cm-car-modal";


    modal.innerHTML = `

        <div
            class="cm-modal-overlay"
            data-close-modal
        ></div>


        <div
            class="cm-modal-box"
            role="dialog"
            aria-modal="true"
            aria-label="${safeText(car.brand)} ${safeText(car.model)}"
        >

            <button
                class="cm-modal-close"
                type="button"
                aria-label="Cerrar"
                data-close-modal
            >
                ×
            </button>


            <div class="cm-modal-image">

                <img
                    src="${safeText(car.image)}"
                    alt="${safeText(car.brand)} ${safeText(car.model)}"
                >

                <div class="cm-modal-match-floating">

                    <strong>
                        ${match}%
                    </strong>

                    <span>
                        MATCH
                    </span>

                </div>

            </div>


            <div class="cm-modal-content">

                <p class="cm-modal-brand">

                    ${safeText(car.brand)}

                </p>


                <h2>

                    ${safeText(car.model)}

                </h2>


                <div class="cm-modal-price">

                    ${formatPrice(car.price)}

                </div>


                <p class="cm-modal-description">

                    ${safeText(
                        car.description,
                        "Sin descripción disponible."
                    )}

                </p>


                <div class="cm-specs-title">

                    ESPECIFICACIONES

                </div>


                <div class="cm-specs-grid">

                    ${specifications
                        .map(
                            specification => `

                                <div class="cm-spec">

                                    <span>
                                        ${safeText(
                                            specification[0]
                                        )}
                                    </span>

                                    <strong>
                                        ${safeText(
                                            specification[1],
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

                    ${
                        idealFor.length
                            ? idealFor
                                .map(
                                    item =>
                                        `<span>${safeText(formatIdealFor(item))}</span>`
                                )
                                .join("")
                            : "<span>Uso general</span>"
                    }

                </div>


                ${
                    car.officialUrl
                        ? `

                            <a
                                class="cm-official-button"
                                href="${safeText(car.officialUrl)}"
                                target="_blank"
                                rel="noopener noreferrer"
                            >

                                VISITAR WEB OFICIAL →

                            </a>

                        `
                        : ""
                }

            </div>

        </div>

    `;


    document.body.appendChild(
        modal
    );


    modal
        .querySelectorAll(
            "[data-close-modal]"
        )
        .forEach(
            element => {

                element.addEventListener(
                    "click",
                    closeCarModal
                );

            }
        );


    document.addEventListener(
        "keydown",
        handleModalEscape
    );


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


    document.removeEventListener(
        "keydown",
        handleModalEscape
    );


    document.body.style.overflow =
        "";
}


/* =========================================================
   ESCAPE
   ========================================================= */

function handleModalEscape(event) {

    if (event.key === "Escape") {

        closeCarModal();

    }
}


/* =========================================================
   RESULTS STYLES
   ========================================================= */

function addResultsStyles() {

    if (
        document.getElementById(
            "carMatchResultsStyles"
        )
    ) {

        return;

    }


    const style =
        document.createElement(
            "style"
        );


    style.id =
        "carMatchResultsStyles";


    style.textContent = `

        /* =================================================
           RESULTS GRID
           ================================================= */

        .results-results-container {

            display: grid;

            grid-template-columns:
                repeat(
                    3,
                    minmax(0, 1fr)
                );

            gap: 28px;

            width: 100%;

            margin-top: 40px;

        }


        /* =================================================
           RESULT CARD
           ================================================= */

        .result-card {

            background: #ffffff;

            border:
                1px solid #e5e5e5;

            overflow: hidden;

            transition:
                transform 0.3s ease,
                box-shadow 0.3s ease;

        }


        .result-card:hover {

            transform:
                translateY(-5px);

            box-shadow:
                0 20px 45px
                rgba(0,0,0,0.10);

        }


        /* =================================================
           IMAGE
           ================================================= */

        .result-card-image {

            position: relative;

            height: 280px;

            background: #eeeeee;

            overflow: hidden;

        }


        .result-card-image img {

            width: 100%;

            height: 100%;

            object-fit: cover;

            display: block;

            transition:
                transform 0.5s ease;

        }


        .result-card:hover
        .result-card-image img {

            transform:
                scale(1.04);

        }


        /* =================================================
           MATCH BADGE
           ================================================= */

        .result-card-match {

            position: absolute;

            top: 16px;

            right: 16px;

            padding:
                8px 11px;

            background:
                rgba(255,255,255,0.94);

            color: #111111;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 1.3px;

        }


        /* =================================================
           CONTENT
           ================================================= */

        .result-card-content {

            padding: 25px;

        }


        .result-brand {

            margin: 0 0 7px;

            font-size: 11px;

            font-weight: 800;

            letter-spacing: 2px;

            text-transform: uppercase;

            color: #777777;

        }


        .result-card h3 {

            margin: 0;

            font-size: 25px;

            line-height: 1.1;

            letter-spacing: -0.5px;

        }


        .result-card-description {

            margin:
                15px 0 22px;

            color: #666666;

            font-size: 13px;

            line-height: 1.65;

            display:
                -webkit-box;

            -webkit-line-clamp: 3;

            -webkit-box-orient:
                vertical;

            overflow: hidden;

        }


        .result-card-bottom {

            display: flex;

            align-items: center;

            justify-content: space-between;

            gap: 15px;

            padding-top: 18px;

            border-top:
                1px solid #eeeeee;

        }


        .result-card-price {

            font-size: 16px;

            font-weight: 800;

            white-space: nowrap;

        }


        .result-view-button {

            border: 0;

            background: #111111;

            color: #ffffff;

            padding:
                12px 15px;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 1.2px;

            cursor: pointer;

            transition:
                opacity 0.2s ease;

        }


        .result-view-button:hover {

            opacity: 0.72;

        }


        /* =================================================
           MODAL
           ================================================= */

        .cm-car-modal {

            position: fixed;

            inset: 0;

            z-index: 999999;

            display: flex;

            align-items: center;

            justify-content: center;

            padding: 24px;

        }


        .cm-modal-overlay {

            position: absolute;

            inset: 0;

            background:
                rgba(0,0,0,0.78);

            backdrop-filter:
                blur(12px);

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

            box-shadow:
                0 35px 100px
                rgba(0,0,0,0.35);

        }


        .cm-modal-image {

            position: relative;

            height: 390px;

            background: #eeeeee;

            overflow: hidden;

        }


        .cm-modal-image img {

            width: 100%;

            height: 100%;

            object-fit: cover;

            display: block;

        }


        .cm-modal-close {

            position: absolute;

            top: 18px;

            right: 18px;

            z-index: 5;

            width: 42px;

            height: 42px;

            border: 0;

            border-radius: 50%;

            background:
                rgba(0,0,0,0.70);

            color: #ffffff;

            font-size: 28px;

            line-height: 42px;

            cursor: pointer;

        }


        .cm-modal-match-floating {

            position: absolute;

            left: 24px;

            bottom: 24px;

            display: flex;

            flex-direction: column;

            align-items: center;

            min-width: 85px;

            padding:
                12px 15px;

            background:
                rgba(255,255,255,0.95);

        }


        .cm-modal-match-floating strong {

            font-size: 28px;

            line-height: 1;

        }


        .cm-modal-match-floating span {

            margin-top: 5px;

            font-size: 9px;

            font-weight: 800;

            letter-spacing: 1.5px;

        }


        .cm-modal-content {

            padding: 38px;

        }


        .cm-modal-brand {

            margin: 0 0 6px;

            color: #777777;

            font-size: 12px;

            font-weight: 800;

            letter-spacing: 2px;

            text-transform: uppercase;

        }


        .cm-modal-content h2 {

            margin: 0;

            font-size: 42px;

            line-height: 1;

            letter-spacing: -1px;

        }


        .cm-modal-price {

            margin-top: 18px;

            font-size: 22px;

            font-weight: 800;

        }


        .cm-modal-description {

            max-width: 850px;

            margin:
                22px 0 35px;

            color: #5f5f5f;

            font-size: 14px;

            line-height: 1.75;

        }


        .cm-specs-title,
        .cm-ideal-title {

            margin-bottom: 14px;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 2px;

        }


        .cm-specs-grid {

            display: grid;

            grid-template-columns:
                repeat(2, 1fr);

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

            padding: 16px;

            background: #ffffff;

        }


        .cm-spec span {

            color: #777777;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 1px;

        }


        .cm-spec strong {

            font-size: 14px;

            text-align: right;

        }


        .cm-ideal-list {

            display: flex;

            flex-wrap: wrap;

            gap: 8px;

        }


        .cm-ideal-list span {

            padding:
                8px 12px;

            background: #f1f1f1;

            font-size: 11px;

            font-weight: 700;

        }


        .cm-official-button {

            display: inline-block;

            margin-top: 30px;

            padding:
                15px 22px;

            background: #111111;

            color: #ffffff;

            text-decoration: none;

            font-size: 10px;

            font-weight: 800;

            letter-spacing: 1.5px;

        }


        /* =================================================
           TABLET
           ================================================= */

        @media (max-width: 1000px) {

            .results-results-container {

                grid-template-columns:
                    repeat(2, minmax(0, 1fr));

            }

        }


        /* =================================================
           MOBILE
           ================================================= */

        @media (max-width: 650px) {

            .results-results-container {

                grid-template-columns: 1fr;

                gap: 22px;

                margin-top: 30px;

            }


            .result-card-image {

                height: 245px;

            }


            .result-card-content {

                padding: 21px;

            }


            .result-card-bottom {

                align-items: flex-start;

                flex-direction: column;

            }


            .result-view-button {

                width: 100%;

            }


            .cm-car-modal {

                padding: 8px;

            }


            .cm-modal-image {

                height: 230px;

            }


            .cm-modal-content {

                padding: 23px;

            }


            .cm-modal-content h2 {

                font-size: 31px;

            }


            .cm-specs-grid {

                grid-template-columns: 1fr;

            }


            .cm-official-button {

                display: block;

                text-align: center;

            }

        }

    `;


    document.head.appendChild(
        style
    );
}


/* =========================================================
   MOBILE MENU
   ========================================================= */

function initializeResultsMenu() {

    const button =
        document.querySelector(
            ".results-menu-button"
        );

    const menu =
        document.querySelector(
            ".results-mobile-menu"
        );


    if (!button || !menu) {
        return;
    }


    if (
        button.dataset.menuReady === "true"
    ) {

        return;

    }


    button.dataset.menuReady =
        "true";


    button.addEventListener(
        "click",
        function(event) {

            event.stopPropagation();

            const isOpen =
                menu.classList.toggle(
                    "open"
                );


            button.classList.toggle(
                "open",
                isOpen
            );


            button.setAttribute(
                "aria-expanded",
                String(isOpen)
            );

        }
    );


    menu
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    () => {

                        menu.classList.remove(
                            "open"
                        );

                        button.classList.remove(
                            "open"
                        );

                        button.setAttribute(
                            "aria-expanded",
                            "false"
                        );

                    }
                );

            }
        );


    document.addEventListener(
        "click",
        function(event) {

            if (
                !menu.contains(event.target) &&
                !button.contains(event.target)
            ) {

                menu.classList.remove(
                    "open"
                );

                button.classList.remove(
                    "open"
                );

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }

        }
    );
}


/* =========================================================
   RESTART
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
   INITIALIZE
   ========================================================= */

function initializeResults() {

    addResultsStyles();

    initializeResultsMenu();


    const resultsContainer =
        getResultsContainer();


    if (
        !resultsContainer
    ) {

        return;

    }


    if (
        !carDatabase.length
    ) {

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

        console.error(
            "CAR MATCH: carDatabase está vacío."
        );

        return;

    }


    const profile =
        getUserProfile();


    if (!profile) {

        resultsContainer.innerHTML = `

            <div class="results-empty">

                <h2>
                    No encontramos tus respuestas.
                </h2>

                <p>
                    Realiza el test para descubrir tus coches ideales.
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

        return;

    }


    let results =
        getSavedResults();


    const mustCalculate =
        !Array.isArray(results) ||
        results.length !== carDatabase.length;


    if (mustCalculate) {

        results =
            calculateResults(
                profile
            );

        saveResults(
            results
        );

    }


    if (
        !results.length
    ) {

        return;

    }


    renderBestMatch(
        results[0]
    );


    renderOtherResults(
        results
    );


    console.log(
        "CAR MATCH: resultados cargados",
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

