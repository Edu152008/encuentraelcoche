/* =========================================================
   CAR MATCH
   EXPLORE.JS
   VERSION COMPLETA
   ========================================================= */


/* =========================================================
   DATABASE
   ========================================================= */

const exploreCars =
    Array.isArray(window.CAR_MATCH_CARS)
        ? window.CAR_MATCH_CARS
        : [];



/* =========================================================
   ELEMENTS
   ========================================================= */

const exploreGrid =
    document.getElementById("exploreGrid");

const resultsCount =
    document.getElementById("resultsCount");

const exploreEmpty =
    document.getElementById("exploreEmpty");

const searchInput =
    document.getElementById("searchInput");

const priceFilter =
    document.getElementById("priceFilter");

const bodyFilter =
    document.getElementById("bodyFilter");

const seatsFilter =
    document.getElementById("seatsFilter");

const sportinessFilter =
    document.getElementById("sportinessFilter");

const luxuryFilter =
    document.getElementById("luxuryFilter");

const exclusivityFilter =
    document.getElementById("exclusivityFilter");

const sortFilter =
    document.getElementById("sortFilter");

const clearFilters =
    document.getElementById("clearFilters");



/* =========================================================
   FORMAT PRICE
   ========================================================= */

function exploreFormatPrice(price) {

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

function exploreFormatBody(body) {

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
   FORMAT VALUE
   ========================================================= */

function exploreValue(
    value,
    fallback = "—"
) {

    if (
        value === null ||
        value === undefined ||
        value === ""
    ) {

        return fallback;

    }

    return String(value);

}



/* =========================================================
   GET FILTERED CARS
   ========================================================= */

function getFilteredCars() {

    let cars =
        [...exploreCars];


    /* =====================================================
       SEARCH
    ===================================================== */

    const search =
        searchInput
            ? searchInput.value
                .trim()
                .toLowerCase()
            : "";


    if (search) {

        cars =
            cars.filter(car => {

                const brand =
                    String(
                        car.brand || ""
                    ).toLowerCase();

                const model =
                    String(
                        car.model || ""
                    ).toLowerCase();

                return (
                    brand.includes(search) ||
                    model.includes(search)
                );

            });

    }



    /* =====================================================
       PRICE
    ===================================================== */

    const maxPrice =
        priceFilter
            ? Number(priceFilter.value)
            : 0;


    if (maxPrice) {

        cars =
            cars.filter(car => {

                const price =
                    Number(car.price);

                return price <= maxPrice;

            });

    }



    /* =====================================================
       BODY
    ===================================================== */

    const body =
        bodyFilter
            ? bodyFilter.value
            : "";


    if (body) {

        cars =
            cars.filter(car =>
                car.body === body
            );

    }



    /* =====================================================
       SEATS
    ===================================================== */

    const seats =
        seatsFilter
            ? Number(seatsFilter.value)
            : 0;


    if (seats) {

        cars =
            cars.filter(car =>
                Number(car.seats) === seats
            );

    }



    /* =====================================================
       SPORTINESS
    ===================================================== */

    const sportiness =
        sportinessFilter
            ? Number(
                sportinessFilter.value
            )
            : 0;


    if (sportiness) {

        cars =
            cars.filter(car =>
                Number(
                    car.sportiness || 0
                ) >= sportiness
            );

    }



    /* =====================================================
       LUXURY
    ===================================================== */

    const luxury =
        luxuryFilter
            ? Number(
                luxuryFilter.value
            )
            : 0;


    if (luxury) {

        cars =
            cars.filter(car =>
                Number(
                    car.luxury || 0
                ) >= luxury
            );

    }



    /* =====================================================
       EXCLUSIVITY
    ===================================================== */

    const exclusivity =
        exclusivityFilter
            ? Number(
                exclusivityFilter.value
            )
            : 0;


    if (exclusivity) {

        cars =
            cars.filter(car =>
                Number(
                    car.exclusivity || 0
                ) >= exclusivity
            );

    }



    /* =====================================================
       SORT
    ===================================================== */

    const sort =
        sortFilter
            ? sortFilter.value
            : "default";


    if (sort === "priceAsc") {

        cars.sort(
            (a, b) =>
                Number(a.price || 0) -
                Number(b.price || 0)
        );

    }


    if (sort === "priceDesc") {

        cars.sort(
            (a, b) =>
                Number(b.price || 0) -
                Number(a.price || 0)
        );

    }


    if (sort === "sportDesc") {

        cars.sort(
            (a, b) =>
                Number(b.sportiness || 0) -
                Number(a.sportiness || 0)
        );

    }


    if (sort === "luxuryDesc") {

        cars.sort(
            (a, b) =>
                Number(b.luxury || 0) -
                Number(a.luxury || 0)
        );

    }


    if (sort === "exclusiveDesc") {

        cars.sort(
            (a, b) =>
                Number(b.exclusivity || 0) -
                Number(a.exclusivity || 0)
        );

    }


    return cars;

}



/* =========================================================
   RENDER
   ========================================================= */

function renderExploreCars() {

    if (!exploreGrid) {
        return;
    }


    const cars =
        getFilteredCars();


    /* =====================================================
       RESULTS COUNT
    ===================================================== */

    if (resultsCount) {

        resultsCount.textContent =
            `${cars.length} ${
                cars.length === 1
                    ? "coche encontrado"
                    : "coches encontrados"
            }`;

    }



    /* =====================================================
       EMPTY
    ===================================================== */

    if (!cars.length) {

        exploreGrid.innerHTML = "";


        if (exploreEmpty) {

            exploreEmpty.style.display =
                "block";

        }

        return;

    }


    if (exploreEmpty) {

        exploreEmpty.style.display =
            "none";

    }



    /* =====================================================
       CARDS
    ===================================================== */

    exploreGrid.innerHTML =
        cars.map(car => `

            <article
                class="explore-card"
            >

                <div
                    class="explore-card-image"
                >

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

                    <div
                        class="explore-card-body"
                    >

                        ${exploreFormatBody(
                            car.body
                        )}

                    </div>

                </div>


                <div
                    class="explore-card-content"
                >

                    <p
                        class="explore-card-brand"
                    >

                        ${String(
                            car.brand || ""
                        )}

                    </p>


                    <h3>

                        ${String(
                            car.model || ""
                        )}

                    </h3>


                    <p
                        class="explore-card-description"
                    >

                        ${String(
                            car.description ||
                            "Sin descripción disponible."
                        )}

                    </p>


                    <div
                        class="explore-card-bottom"
                    >

                        <strong>

                            ${exploreFormatPrice(
                                car.price
                            )}

                        </strong>


                        <button
                            type="button"
                            onclick="
                                viewExploreCar(
                                    '${String(car.id)}'
                                )
                            "
                        >

                            VER COCHE →

                        </button>

                    </div>

                </div>

            </article>

        `).join("");

}



/* =========================================================
   BUILD SPECIFICATIONS
   ========================================================= */

function buildExploreSpecifications(car) {

    const specifications = [];


    /* =====================================================
       BASIC
    ===================================================== */

    if (
        car.year !== null &&
        car.year !== undefined &&
        car.year !== ""
    ) {

        specifications.push({

            name: "AÑO",

            value:
                exploreValue(
                    car.year
                )

        });

    }


    if (
        car.seats !== null &&
        car.seats !== undefined &&
        car.seats !== ""
    ) {

        specifications.push({

            name: "PLAZAS",

            value:
                exploreValue(
                    car.seats
                )

        });

    }


    if (car.body) {

        specifications.push({

            name: "CARROCERÍA",

            value:
                exploreFormatBody(
                    car.body
                )

        });

    }



    /* =====================================================
       ENGINE
    ===================================================== */

    if (car.engine) {

        specifications.push({

            name: "MOTOR",

            value:
                exploreValue(
                    car.engine
                )

        });

    }


    if (car.engineSize) {

        specifications.push({

            name: "CILINDRADA",

            value:
                exploreValue(
                    car.engineSize
                )

        });

    }


    if (car.horsepower) {

        specifications.push({

            name: "POTENCIA",

            value:
                `${car.horsepower} CV`

        });

    }


    if (car.fuel) {

        specifications.push({

            name: "COMBUSTIBLE",

            value:
                exploreValue(
                    car.fuel
                )

        });

    }


    if (car.transmission) {

        specifications.push({

            name: "TRANSMISIÓN",

            value:
                exploreValue(
                    car.transmission
                )

        });

    }


    if (car.drive) {

        specifications.push({

            name: "TRACCIÓN",

            value:
                exploreValue(
                    car.drive
                )

        });

    }



    /* =====================================================
       PERFORMANCE
    ===================================================== */

    if (
        car.performance !== null &&
        car.performance !== undefined &&
        car.performance !== ""
    ) {

        specifications.push({

            name: "PRESTACIONES",

            value:
                `${car.performance}/10`

        });

    }


    if (
        car.sportiness !== null &&
        car.sportiness !== undefined &&
        car.sportiness !== ""
    ) {

        specifications.push({

            name: "DEPORTIVIDAD",

            value:
                `${car.sportiness}/10`

        });

    }


    if (
        car.luxury !== null &&
        car.luxury !== undefined &&
        car.luxury !== ""
    ) {

        specifications.push({

            name: "LUJO",

            value:
                `${car.luxury}/10`

        });

    }


    if (
        car.exclusivity !== null &&
        car.exclusivity !== undefined &&
        car.exclusivity !== ""
    ) {

        specifications.push({

            name: "EXCLUSIVIDAD",

            value:
                `${car.exclusivity}/10`

        });

    }


    if (
        car.practicality !== null &&
        car.practicality !== undefined &&
        car.practicality !== ""
    ) {

        specifications.push({

            name: "PRACTICIDAD",

            value:
                `${car.practicality}/10`

        });

    }


    if (
        car.comfort !== null &&
        car.comfort !== undefined &&
        car.comfort !== ""
    ) {

        specifications.push({

            name: "CONFORT",

            value:
                `${car.comfort}/10`

        });

    }


    if (
        car.technology !== null &&
        car.technology !== undefined &&
        car.technology !== ""
    ) {

        specifications.push({

            name: "TECNOLOGÍA",

            value:
                `${car.technology}/10`

        });

    }



    /* =====================================================
       EXTRA DATABASE FIELDS
    ===================================================== */

    const knownFields = [

        "id",
        "brand",
        "model",
        "image",
        "description",
        "price",

        "year",
        "seats",
        "body",

        "engine",
        "engineSize",
        "horsepower",
        "fuel",
        "transmission",
        "drive",

        "performance",
        "sportiness",
        "luxury",
        "exclusivity",
        "practicality",
        "comfort",
        "technology",

        "idealFor",
        "officialUrl"

    ];


    Object.keys(car).forEach(
        key => {

            if (
                knownFields.includes(key)
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
    );


    return specifications;

}



/* =========================================================
   IDEAL FOR
   ========================================================= */

function buildExploreIdealFor(car) {

    if (
        !Array.isArray(car.idealFor) ||
        !car.idealFor.length
    ) {

        return "";

    }


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


    const items =
        car.idealFor
            .map(
                item =>
                    names[item] ||
                    item
            );


    return `

        <div
            class="explore-modal-ideal"
        >

            <div
                class="explore-modal-section-title"
            >
                IDEAL PARA
            </div>


            <div
                class="explore-modal-ideal-list"
            >

                ${
                    items
                        .map(
                            item => `

                                <span>
                                    ${String(item)}
                                </span>

                            `
                        )
                        .join("")
                }

            </div>

        </div>

    `;

}



/* =========================================================
   VIEW CAR
   ========================================================= */

function viewExploreCar(id) {

    const car =
        exploreCars.find(
            item =>
                String(item.id) ===
                String(id)
        );


    if (!car) {

        console.error(
            "CAR MATCH: Coche no encontrado:",
            id
        );

        return;

    }


    const oldModal =
        document.getElementById(
            "exploreCarModal"
        );


    if (oldModal) {
        oldModal.remove();
    }


    const modal =
        document.createElement("div");


    modal.id =
        "exploreCarModal";


    modal.className =
        "explore-car-modal";


    /* =====================================================
       HELPERS
    ===================================================== */

    function valueOrNull(value) {

        if (
            value === null ||
            value === undefined ||
            value === ""
        ) {
            return null;
        }

        return value;

    }


    function addSpec(
        label,
        value,
        suffix = ""
    ) {

        const cleanValue =
            valueOrNull(value);

        if (cleanValue === null) {
            return "";
        }

        return `

            <div class="explore-modal-spec">

                <span>
                    ${label}
                </span>

                <strong>
                    ${cleanValue}${suffix}
                </strong>

            </div>

        `;

    }


    /* =====================================================
       SPECIFICATIONS
    ===================================================== */

    const specifications = [

        addSpec(
            "CARROCERÍA",
            exploreFormatBody(car.body)
        ),

        addSpec(
            "PLAZAS",
            car.seats
        ),

        addSpec(
            "AÑO",
            car.year
        ),

        addSpec(
            "POTENCIA",
            car.horsepower,
            " CV"
        ),

        addSpec(
            "MOTOR",
            car.engine
        ),

        addSpec(
            "COMBUSTIBLE",
            car.fuel
        ),

        addSpec(
            "CAMBIO",
            car.transmission
        ),

        addSpec(
            "TRACCIÓN",
            car.drive
        ),

        addSpec(
            "PRESTACIONES",
            car.performance,
            "/10"
        ),

        addSpec(
            "CONFORT",
            car.comfort,
            "/10"
        ),

        addSpec(
            "TECNOLOGÍA",
            car.technology,
            "/10"
        ),

        addSpec(
            "DEPORTIVIDAD",
            car.sportiness,
            "/10"
        ),

        addSpec(
            "LUJO",
            car.luxury,
            "/10"
        ),

        addSpec(
            "EXCLUSIVIDAD",
            car.exclusivity,
            "/10"
        ),

        addSpec(
            "PRACTICIDAD",
            car.practicality,
            "/10"
        )

    ].filter(Boolean).join("");


    /* =====================================================
       OFFICIAL WEBSITE
    ===================================================== */

    const officialButton =
        car.officialUrl
            ? `

                <a
                    href="${String(
                        car.officialUrl
                    )}"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="secondary-button"
                >
                    VISITAR WEB OFICIAL →
                </a>

            `
            : "";


    /* =====================================================
       MODAL HTML
    ===================================================== */

    modal.innerHTML = `

        <div
            class="explore-modal-overlay"
            onclick="closeExploreCar()"
        ></div>


        <div
            class="explore-modal-box"
        >


            <!-- CLOSE -->

            <button
                class="explore-modal-close"
                type="button"
                onclick="closeExploreCar()"
                aria-label="Cerrar"
            >
                ×
            </button>



            <!-- IMAGE -->

            <div
                class="explore-modal-image"
            >

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



            <!-- CONTENT -->

            <div
                class="explore-modal-content"
            >


                <!-- BRAND -->

                <p
                    class="explore-card-brand"
                >
                    ${String(
                        car.brand || ""
                    )}
                </p>



                <!-- MODEL -->

                <h2>
                    ${String(
                        car.model || ""
                    )}
                </h2>



                <!-- DESCRIPTION -->

                <p
                    class="explore-modal-description"
                >
                    ${String(
                        car.description ||
                        "Sin descripción disponible."
                    )}
                </p>



                <!-- PRICE -->

                <div
                    class="explore-modal-price"
                >
                    ${exploreFormatPrice(
                        car.price
                    )}
                </div>



                <!-- SPECIFICATIONS -->

                ${
                    specifications
                        ? `

                            <div
                                class="explore-modal-specs-title"
                            >
                                ESPECIFICACIONES
                            </div>


                            <div
                                class="explore-modal-specs"
                            >

                                ${specifications}

                            </div>

                        `
                        : ""
                }



                <!-- ACTIONS -->

                <div
                    class="explore-modal-actions"
                >


                    <button
                        type="button"
                        class="primary-button"
                        onclick="
                            closeExploreCar();
                            window.location.href =
                            'compare.html?car=${String(
                                car.id
                            )}';
                        "
                    >
                        COMPARAR COCHE
                    </button>


                    ${officialButton}


                </div>


            </div>


        </div>

    `;


    document.body.appendChild(
        modal
    );


    document.body.style.overflow =
        "hidden";

}



/* =========================================================
   CLOSE MODAL
   ========================================================= */

function closeExploreCar() {

    const modal =
        document.getElementById(
            "exploreCarModal"
        );


    if (modal) {

        modal.remove();

    }


    document.body.style.overflow =
        "";

}



/* =========================================================
   FILTER EVENTS
   ========================================================= */

[
    searchInput,
    priceFilter,
    bodyFilter,
    seatsFilter,
    sportinessFilter,
    luxuryFilter,
    exclusivityFilter,
    sortFilter

].forEach(element => {

    if (!element) {

        return;

    }


    element.addEventListener(
        "input",
        renderExploreCars
    );


    element.addEventListener(
        "change",
        renderExploreCars
    );

});



/* =========================================================
   CLEAR FILTERS
   ========================================================= */

if (clearFilters) {

    clearFilters.addEventListener(
        "click",
        () => {


            if (searchInput) {

                searchInput.value = "";

            }


            if (priceFilter) {

                priceFilter.value = "";

            }


            if (bodyFilter) {

                bodyFilter.value = "";

            }


            if (seatsFilter) {

                seatsFilter.value = "";

            }


            if (sportinessFilter) {

                sportinessFilter.value = "";

            }


            if (luxuryFilter) {

                luxuryFilter.value = "";

            }


            if (exclusivityFilter) {

                exclusivityFilter.value = "";

            }


            if (sortFilter) {

                sortFilter.value =
                    "default";

            }


            renderExploreCars();

        }
    );

}



/* =========================================================
   INITIALIZE
   ========================================================= */

renderExploreCars();

document.addEventListener("DOMContentLoaded", function () {

    const params = new URLSearchParams(window.location.search);
    const body = params.get("body");

    const bodyFilter = document.getElementById("bodyFilter");

    if (!bodyFilter || !body) {
        return;
    }

    bodyFilter.value = body;

    bodyFilter.dispatchEvent(new Event("change"));

});