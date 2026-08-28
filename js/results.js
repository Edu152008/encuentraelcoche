/* =========================================================
   CAR MATCH
   RESULTS.JS
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

let carDatabase = [];

if (
    typeof cars !== "undefined" &&
    Array.isArray(cars)
) {

    carDatabase = cars;

}

else if (
    typeof CAR_MATCH_CARS !== "undefined" &&
    Array.isArray(CAR_MATCH_CARS)
) {

    carDatabase = CAR_MATCH_CARS;

}

else if (
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
            "CAR MATCH: No se pudo leer el perfil.",
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
        safeText(body, "No especificado")
    );
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
                sportiness +
                practicality +
                comfort
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
        ) / values.length
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
   CALCULATE CAR MATCH
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
        )

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
            "CAR MATCH: Error guardando resultados.",
            error
        );

    }
}


/* =========================================================
   GET RESULTS
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
   RENDER BEST MATCH
   ========================================================= */

function renderBestMatch(car) {

    if (!car) {
        return;
    }


    const image =
        document.getElementById("bestImage");

    const brand =
        document.getElementById("bestBrand");

    const model =
        document.getElementById("bestModel");

    const description =
        document.getElementById("bestDescription");

    const price =
        document.getElementById("bestPrice");

    const score =
        document.getElementById("bestMatchScore");

    const button =
        document.getElementById("bestViewButton");


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
            formatPrice(car.price);

    }


    if (score) {

        score.textContent =
            `${Number(car.match || 0)}%`;

    }


    if (button) {

        button.onclick =
            function () {

                viewCar(car.id);

            };

    }

}


/* =========================================================
   RENDER OTHER RESULTS
   ========================================================= */

function renderOtherResults(results) {

    const container =
        document.getElementById("results");

    if (!container) {
        return;
    }


    const otherResults =
        results.slice(1, 7);


    if (!otherResults.length) {

        container.innerHTML = "";

        return;

    }


    container.innerHTML =
        otherResults
            .map(
                car => `

                    <article class="result-card">

                        <div class="result-card-image">

                            <img
                                src="${safeText(car.image)}"
                                alt="${safeText(car.brand)} ${safeText(car.model)}"
                                loading="lazy"
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
                                    data-car-id="${safeText(car.id)}"
                                >
                                    VER COCHE
                                </button>

                            </div>

                        </div>

                    </article>

                `
            )
            .join("");


    container
        .querySelectorAll("[data-car-id]")
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    function () {

                        viewCar(
                            button.dataset.carId
                        );

                    }
                );

            }
        );
}


/* =========================================================
   VIEW CAR
   ========================================================= */

function viewCar(carId) {

    console.log("CAR MATCH: viewCar iniciado:", carId);

    const car = getCarById(carId);

    console.log("CAR MATCH: coche encontrado:", car);

    if (!car) {
        console.error("CAR MATCH: coche no encontrado:", carId);
        return;
    }

    /* -----------------------------------------------------
       ELIMINAR MODAL ANTERIOR
    ----------------------------------------------------- */

    const oldModal = document.getElementById("carModal");

    if (oldModal) {
        oldModal.remove();
    }

    /* -----------------------------------------------------
       MATCH
    ----------------------------------------------------- */

    const results = getSavedResults() || [];

    const result = results.find(
        item =>
            String(item.id) === String(carId)
    );

    const match = result
        ? Number(result.match || 0)
        : Number(car.match || 0);


    /* -----------------------------------------------------
       CREAR MODAL
    ----------------------------------------------------- */

    const modal = document.createElement("div");

    modal.id = "carModal";
    modal.className = "cm-car-modal";


    modal.innerHTML = `

        <div class="cm-modal-overlay"></div>

        <div
            class="cm-modal-box"
            role="dialog"
            aria-modal="true"
        >

            <button
                class="cm-modal-close"
                type="button"
                aria-label="Cerrar"
            >
                ×
            </button>


            <div class="cm-modal-image">

                <img
                    src="${safeText(car.image)}"
                    alt="${safeText(car.brand)} ${safeText(car.model)}"
                >

                <div class="cm-modal-match-floating">

                    <strong>${match}%</strong>

                    <span>MATCH</span>

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

                    ${buildSpecifications(car)}

                </div>


                <div class="cm-ideal-title">
                    IDEAL PARA
                </div>

                <div class="cm-ideal-list">

                    ${buildIdealFor(car)}

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


    /* -----------------------------------------------------
       INSERTAR EN LA PÁGINA
    ----------------------------------------------------- */

    document.body.appendChild(modal);

    console.log("CAR MATCH: modal insertado correctamente");


    /* -----------------------------------------------------
       CERRAR CON X
    ----------------------------------------------------- */

    const closeButton =
        modal.querySelector(".cm-modal-close");

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            function () {

                modal.remove();

                document.body.style.overflow = "";

            }
        );

    }


    /* -----------------------------------------------------
       CERRAR HACIENDO CLICK FUERA
    ----------------------------------------------------- */

    const overlay =
        modal.querySelector(".cm-modal-overlay");

    if (overlay) {

        overlay.addEventListener(
            "click",
            function () {

                modal.remove();

                document.body.style.overflow = "";

            }
        );

    }


    /* -----------------------------------------------------
       ESC
    ----------------------------------------------------- */

    function closeWithEscape(event) {

        if (event.key === "Escape") {

            if (document.getElementById("carModal")) {

                modal.remove();

                document.body.style.overflow = "";

            }

            document.removeEventListener(
                "keydown",
                closeWithEscape
            );

        }

    }

    document.addEventListener(
        "keydown",
        closeWithEscape
    );


    /* -----------------------------------------------------
       BLOQUEAR SCROLL DEL FONDO
    ----------------------------------------------------- */

    document.body.style.overflow = "hidden";

}


/* =========================================================
   SPECIFICATIONS
   ========================================================= */

function buildSpecifications(car) {

    const specifications = [

        ["AÑO", car.year],
        ["PLAZAS", car.seats],
        ["CARROCERÍA", formatBody(car.body)],
        ["PRESTACIONES", car.performance],
        ["DEPORTIVIDAD", car.sportiness],
        ["LUJO", car.luxury],
        ["EXCLUSIVIDAD", car.exclusivity],
        ["PRACTICIDAD", car.practicality],
        ["CONFORT", car.comfort],
        ["TECNOLOGÍA", car.technology]

    ];


    return specifications
        .map(
            specification => `

                <div class="cm-spec">

                    <span>
                        ${safeText(specification[0])}
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
        .join("");
}


/* =========================================================
   IDEAL FOR
   ========================================================= */

function buildIdealFor(car) {

    const idealFor =
        Array.isArray(car.idealFor)
            ? car.idealFor
            : [];


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


    if (!idealFor.length) {

        return `
            <span>
                Uso general
            </span>
        `;

    }


    return idealFor
        .map(
            item => `

                <span>
                    ${safeText(
                        names[item] || item
                    )}
                </span>

            `
        )
        .join("");
}


/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeCarModal() {

    const modal =
        document.getElementById("carModal");

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


    button.addEventListener(
        "click",
        function (event) {

            event.stopPropagation();


            const open =
                menu.classList.toggle("open");


            button.classList.toggle(
                "open",
                open
            );


            button.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );


    menu
        .querySelectorAll("a")
        .forEach(
            link => {

                link.addEventListener(
                    "click",
                    function () {

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
        function (event) {

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
   INITIALIZE
   ========================================================= */

function initializeResults() {

    initializeResultsMenu();


    const container =
        document.getElementById("results");


    if (!container) {
        return;
    }


    if (!carDatabase.length) {

        container.innerHTML = `

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

        container.innerHTML = `

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


    if (
        !Array.isArray(results) ||
        results.length !== carDatabase.length
    ) {

        results =
            calculateResults(profile);

        saveResults(results);

    }


    if (!results.length) {
        return;
    }


    renderBestMatch(
        results[0]
    );


    renderOtherResults(
        results
    );


    console.log(
        "CAR MATCH: resultados cargados correctamente.",
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