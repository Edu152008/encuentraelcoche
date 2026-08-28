/* =========================================================
   CAR MATCH
   COMPARE.JS
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

const compareCars =
    Array.isArray(window.CAR_MATCH_CARS)
        ? window.CAR_MATCH_CARS
        : [];


/* =========================================================
   ELEMENTS
   ========================================================= */

const compareCar1 =
    document.getElementById("compareCar1");

const compareCar2 =
    document.getElementById("compareCar2");

const compareCar3 =
    document.getElementById("compareCar3");

const compareResults =
    document.getElementById("compareResults");

const compareEmpty =
    document.getElementById("compareEmpty");

const clearCompare =
    document.getElementById("clearCompare");


/* =========================================================
   FORMAT PRICE
   ========================================================= */

function compareFormatPrice(price) {

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
   FORMAT BODY
   ========================================================= */

function compareFormatBody(body) {

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

    return names[body] || body || "—";

}


/* =========================================================
   ADD CARS TO SELECTS
   ========================================================= */

function populateCompareSelects() {

    if (!compareCars.length) {

        console.warn(
            "CAR MATCH: No se han encontrado coches."
        );

        return;

    }


    const selects = [
        compareCar1,
        compareCar2,
        compareCar3
    ];


    selects.forEach(select => {

        if (!select) {
            return;
        }


        compareCars.forEach(car => {

            const option =
                document.createElement("option");

            option.value =
                car.id;

            option.textContent =
                `${car.brand} ${car.model}`;

            select.appendChild(option);

        });

    });

}


/* =========================================================
   GET SELECTED CARS
   ========================================================= */

function getSelectedCompareCars() {

    const ids = [

        compareCar1
            ? compareCar1.value
            : "",

        compareCar2
            ? compareCar2.value
            : "",

        compareCar3
            ? compareCar3.value
            : ""

    ].filter(Boolean);


    return ids
        .map(id =>
            compareCars.find(
                car =>
                    String(car.id) ===
                    String(id)
            )
        )
        .filter(Boolean);

}


/* =========================================================
   CREATE SPECIFICATION
   ========================================================= */

function compareSpec(
    label,
    values
) {

    const validValues =
        values.map(
            value =>
                value === null ||
                value === undefined ||
                value === ""
                    ? "—"
                    : value
        );


    return `

        <div class="compare-row">

            <div class="compare-label">
                ${label}
            </div>

            ${validValues
                .map(value => `
                    <div class="compare-value">
                        ${value}
                    </div>
                `)
                .join("")}

        </div>

    `;

}


/* =========================================================
   RENDER COMPARISON
   ========================================================= */

function renderComparison() {

    if (!compareResults) {
        return;
    }


    const selectedCars =
        getSelectedCompareCars();


    /* =====================================================
       MENOS DE DOS COCHES
       ===================================================== */

    if (selectedCars.length < 2) {

        compareResults.innerHTML = "";

        if (compareEmpty) {

            compareEmpty.style.display =
                "block";

        }

        return;

    }


    /* =====================================================
       MOSTRAR COMPARACIÓN
       ===================================================== */

    if (compareEmpty) {

        compareEmpty.style.display =
            "none";

    }


    /* =====================================================
       HEADERS
       ===================================================== */

    const headers =
        selectedCars
            .map(car => `

                <div class="compare-car-header">

                    <div class="compare-car-image">

                        <img
                            src="${String(
                                car.image || ""
                            )}"
                            alt="${String(
                                car.brand || ""
                            )} ${String(
                                car.model || ""
                            )}"
                            onerror="
                                this.style.display='none';
                            "
                        >

                    </div>


                    <p class="compare-brand">

                        ${String(
                            car.brand || ""
                        )}

                    </p>


                    <h3>

                        ${String(
                            car.model || ""
                        )}

                    </h3>


                    <strong>

                        ${compareFormatPrice(
                            car.price
                        )}

                    </strong>

                </div>

            `)
            .join("");


    /* =====================================================
       VALUES
       ===================================================== */

    const specifications = [

        compareSpec(
            "CARROCERÍA",
            selectedCars.map(
                car =>
                    compareFormatBody(
                        car.body
                    )
            )
        ),

        compareSpec(
            "PLAZAS",
            selectedCars.map(
                car => car.seats
            )
        ),

        compareSpec(
            "AÑO",
            selectedCars.map(
                car => car.year
            )
        ),

        compareSpec(
            "MOTOR",
            selectedCars.map(
                car => car.engine
            )
        ),

        compareSpec(
            "CILINDRADA",
            selectedCars.map(
                car => car.engineSize
            )
        ),

        compareSpec(
            "POTENCIA",
            selectedCars.map(
                car =>
                    car.horsepower
                        ? `${car.horsepower} CV`
                        : null
            )
        ),

        compareSpec(
            "COMBUSTIBLE",
            selectedCars.map(
                car => car.fuel
            )
        ),

        compareSpec(
            "CAMBIO",
            selectedCars.map(
                car => car.transmission
            )
        ),

        compareSpec(
            "TRACCIÓN",
            selectedCars.map(
                car => car.drive
            )
        ),

        compareSpec(
            "PRESTACIONES",
            selectedCars.map(
                car =>
                    car.performance !== undefined &&
                    car.performance !== null
                        ? `${car.performance}/10`
                        : null
            )
        ),

        compareSpec(
            "DEPORTIVIDAD",
            selectedCars.map(
                car =>
                    car.sportiness !== undefined &&
                    car.sportiness !== null
                        ? `${car.sportiness}/10`
                        : null
            )
        ),

        compareSpec(
            "LUJO",
            selectedCars.map(
                car =>
                    car.luxury !== undefined &&
                    car.luxury !== null
                        ? `${car.luxury}/10`
                        : null
            )
        ),

        compareSpec(
            "EXCLUSIVIDAD",
            selectedCars.map(
                car =>
                    car.exclusivity !== undefined &&
                    car.exclusivity !== null
                        ? `${car.exclusivity}/10`
                        : null
            )
        ),

        compareSpec(
            "PRACTICIDAD",
            selectedCars.map(
                car =>
                    car.practicality !== undefined &&
                    car.practicality !== null
                        ? `${car.practicality}/10`
                        : null
            )
        ),

        compareSpec(
            "CONFORT",
            selectedCars.map(
                car =>
                    car.comfort !== undefined &&
                    car.comfort !== null
                        ? `${car.comfort}/10`
                        : null
            )
        ),

        compareSpec(
            "TECNOLOGÍA",
            selectedCars.map(
                car =>
                    car.technology !== undefined &&
                    car.technology !== null
                        ? `${car.technology}/10`
                        : null
            )
        )

    ].join("");


    /* =====================================================
       HTML
       ===================================================== */

    compareResults.innerHTML = `

        <div class="compare-table">

            <div class="compare-header">

                <div class="compare-label">
                    CARACTERÍSTICA
                </div>

                ${headers}

            </div>


            <div class="compare-specifications">

                ${specifications}

            </div>

        </div>

    `;

}


/* =========================================================
   URL PARAMETER
   ========================================================= */

function loadCompareFromURL() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const carId =
        params.get("car");


    if (!carId) {
        return;
    }


    const carExists =
        compareCars.some(
            car =>
                String(car.id) ===
                String(carId)
        );


    if (!carExists) {
        return;
    }


    if (compareCar1) {

        compareCar1.value =
            carId;

    }


    renderComparison();

}


/* =========================================================
   SELECT EVENTS
   ========================================================= */

[
    compareCar1,
    compareCar2,
    compareCar3

].forEach(select => {

    if (!select) {
        return;
    }


    select.addEventListener(
        "change",
        renderComparison
    );

});


/* =========================================================
   CLEAR
   ========================================================= */

if (clearCompare) {

    clearCompare.addEventListener(
        "click",
        () => {

            if (compareCar1) {
                compareCar1.value = "";
            }

            if (compareCar2) {
                compareCar2.value = "";
            }

            if (compareCar3) {
                compareCar3.value = "";
            }

            renderComparison();

        }
    );

}


/* =========================================================
   INITIALIZE
   ========================================================= */

populateCompareSelects();

loadCompareFromURL();

renderComparison();

