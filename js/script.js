/* =========================================================
   CAR MATCH
   ADAPTIVE CAR RECOMMENDER
   ========================================================= */


/* =========================================================
   HELP SYSTEM
   ========================================================= */

const helpDefinitions = {

    traction: {
        title: "¿Qué significa tracción?",
        text: "La tracción indica qué ruedas reciben la fuerza del motor. Puede ser delantera, trasera o integral. Si no estás seguro, puedes elegir 'No lo sé'."
    },

    horsepower: {
        title: "¿Qué significa CV?",
        text: "CV significa caballos de vapor y sirve para expresar la potencia del motor. En general, más CV significa más prestaciones, aunque también influyen el peso, la aerodinámica y otros factores."
    },

    hybrid: {
        title: "¿Qué es un coche híbrido?",
        text: "Un coche híbrido combina un motor de combustión con uno o más motores eléctricos. Dependiendo del sistema puede reducir el consumo y circular parcialmente utilizando electricidad."
    },

    electric: {
        title: "¿Qué significa eléctrico?",
        text: "Un coche eléctrico utiliza uno o varios motores eléctricos alimentados por una batería."
    },

    torque: {
        title: "¿Qué es el par motor?",
        text: "El par motor representa la fuerza de giro que produce el motor y afecta a la capacidad de aceleración."
    },

    awd: {
        title: "¿Qué significa tracción integral?",
        text: "La tracción integral puede enviar fuerza a las cuatro ruedas y mejorar la capacidad de tracción en determinadas situaciones."
    }

};


/* =========================================================
   HELP MODAL
   ========================================================= */

function showHelp(type) {

    const help = helpDefinitions[type];

    if (!help) return;

    const oldModal = document.getElementById("helpModal");

    if (oldModal) {
        oldModal.remove();
    }

    const modal = document.createElement("div");

    modal.id = "helpModal";
    modal.className = "help-modal";

    modal.innerHTML = `
        <div
            class="help-overlay"
            onclick="closeHelp()"
        ></div>

        <div class="help-box">

            <button
                class="help-close"
                onclick="closeHelp()"
                type="button"
            >
                ×
            </button>

            <div class="help-icon">
                ?
            </div>

            <h2>
                ${help.title}
            </h2>

            <p>
                ${help.text}
            </p>

            <button
                class="help-understood"
                onclick="closeHelp()"
                type="button"
            >
                LO HE ENTENDIDO
            </button>

        </div>
    `;

    document.body.appendChild(modal);
}


function closeHelp() {

    const modal = document.getElementById("helpModal");

    if (modal) {
        modal.remove();
    }

}


/* =========================================================
   QUESTIONS
   ========================================================= */

const questions = [

    /* =====================================================
       KNOWLEDGE
       ===================================================== */

    {
        id: "knowledge",

        category: "SOBRE TI",

        help: null,

        title: "Antes de empezar, ¿cuánto sabes de coches?",

        description:
            "No hay respuestas correctas. Solo queremos adaptar la experiencia a ti.",

        type: "single",

        answers: [

            {
                value: "beginner",
                title: "Principiante",
                description: "No sé mucho de coches."
            },

            {
                value: "intermediate",
                title: "Intermedio",
                description: "Conozco los conceptos básicos."
            },

            {
                value: "enthusiast",
                title: "Entusiasta",
                description: "Me gustan mucho los coches."
            },

            {
                value: "expert",
                title: "Experto",
                description: "Conozco bastante de coches y mecánica."
            }

        ]
    },


    /* =====================================================
       BUDGET
       ===================================================== */

    {
        id: "budget",

        category: "PRESUPUESTO",

        help: null,

        title: "¿Cuál es tu presupuesto máximo?",

        description:
            "Indica aproximadamente cuánto quieres gastar en tu próximo coche.",

        type: "single",

        answers: [

            {
                value: 15000,
                title: "Menos de 15.000 €",
                description: "Busco una opción económica."
            },

            {
                value: 25000,
                title: "15.000 – 25.000 €",
                description: "Quiero mantener el presupuesto controlado."
            },

            {
                value: 40000,
                title: "25.000 – 40.000 €",
                description: "Gama media."
            },

            {
                value: 60000,
                title: "40.000 – 60.000 €",
                description: "Gama media-alta."
            },

            {
                value: 100000,
                title: "60.000 – 100.000 €",
                description: "Premium."
            },

            {
                value: 200000,
                title: "100.000 – 200.000 €",
                description: "Alta gama."
            },

            {
                value: 500000,
                title: "Más de 200.000 €",
                description: "Busco algo realmente exclusivo."
            }

        ]
    },


    /* =====================================================
       USAGE
       ===================================================== */

    {
        id: "usage",

        category: "ESTILO DE VIDA",

        help: null,

        title: "¿Para qué utilizarás principalmente el coche?",

        description:
            "Piensa en cómo utilizarás el coche durante la mayor parte del tiempo.",

        type: "single",

        answers: [

            {
                value: "city",
                title: "Ciudad",
                description: "Principalmente trayectos urbanos."
            },

            {
                value: "highway",
                title: "Carretera y autopista",
                description: "Viajes y desplazamientos largos."
            },

            {
                value: "family",
                title: "Familia",
                description: "Necesito espacio y comodidad."
            },

            {
                value: "sport",
                title: "Ocio y conducción",
                description: "Quiero disfrutar conduciendo."
            },

            {
                value: "mixed",
                title: "Un poco de todo",
                description: "Necesito un coche polivalente."
            }

        ]
    },


    /* =====================================================
       PASSENGERS
       ===================================================== */

    {
        id: "passengers",

        category: "ESPACIO",

        help: null,

        title: "¿Cuántas personas viajarán habitualmente?",

        description:
            "Esto nos ayuda a saber cuánto espacio necesitas realmente.",

        type: "single",

        answers: [

            {
                value: 1,
                title: "1 persona",
                description: "Principalmente yo."
            },

            {
                value: 2,
                title: "2 personas",
                description: "Normalmente viajo acompañado."
            },

            {
                value: 4,
                title: "3–4 personas",
                description: "Necesito cierta versatilidad."
            },

            {
                value: 5,
                title: "5 personas",
                description: "Necesito cinco plazas."
            },

            {
                value: 7,
                title: "6 o más",
                description: "Necesito mucho espacio."
            }

        ]
    },


    /* =====================================================
       SPORTINESS
       ===================================================== */

    {
        id: "sportiness",

        category: "PERSONALIDAD",

        help: null,

        title: "¿Cuánto te gusta la deportividad?",

        description:
            "Esto nos ayudará a determinar cuánto peso damos a las prestaciones y sensaciones deportivas.",

        type: "single",

        answers: [

            {
                value: 1,
                title: "Nada",
                description: "Prefiero comodidad y tranquilidad."
            },

            {
                value: 2,
                title: "Poco",
                description: "Un pequeño toque deportivo."
            },

            {
                value: 3,
                title: "Equilibrado",
                description: "Quiero un poco de todo."
            },

            {
                value: 4,
                title: "Bastante",
                description: "Quiero un coche divertido."
            },

            {
                value: 5,
                title: "Muchísimo",
                description: "Quiero emociones y prestaciones."
            }

        ]
    },


    /* =====================================================
       LUXURY
       ===================================================== */

    {
        id: "luxury",

        category: "PERSONALIDAD",

        help: null,

        title: "¿Cuánto valoras el lujo?",

        description:
            "Materiales, confort, tecnología, diseño y sensación de calidad.",

        type: "single",

        answers: [

            {
                value: 1,
                title: "No me importa",
                description: "Prefiero funcionalidad."
            },

            {
                value: 2,
                title: "Poco",
                description: "Un interior agradable es suficiente."
            },

            {
                value: 3,
                title: "Bastante",
                description: "Quiero una buena experiencia."
            },

            {
                value: 4,
                title: "Mucho",
                description: "El lujo es importante."
            },

            {
                value: 5,
                title: "Esencial",
                description: "Quiero una experiencia premium."
            }

        ]
    },


    /* =====================================================
       EXCLUSIVITY
       ===================================================== */

    {
        id: "exclusivity",

        category: "PERSONALIDAD",

        help: null,

        title: "¿Quieres que tu coche sea especial?",

        description:
            "¿Prefieres algo común o quieres un coche que destaque?",

        type: "single",

        answers: [

            {
                value: 1,
                title: "Me da igual",
                description: "No necesito llamar la atención."
            },

            {
                value: 2,
                title: "Poco",
                description: "Prefiero discreción."
            },

            {
                value: 3,
                title: "Algo",
                description: "Un coche diferente estaría bien."
            },

            {
                value: 4,
                title: "Mucho",
                description: "Quiero algo poco habitual."
            },

            {
                value: 5,
                title: "Muchísimo",
                description: "Quiero exclusividad."
            }

        ]
    },


    /* =====================================================
       BODY
       ===================================================== */

    {
        id: "body",

        category: "DISEÑO",

        help: null,

        title: "¿Qué tipo de coche te atrae más?",

        description:
            "Si no lo tienes claro, puedes dejar que CAR MATCH decida.",

        type: "single",

        answers: [

            {
                value: "suv",
                title: "SUV",
                description: "Alto, versátil y práctico."
            },

            {
                value: "sedan",
                title: "Berlina",
                description: "Elegante y equilibrada."
            },

            {
                value: "coupe",
                title: "Coupé",
                description: "Deportivo y elegante."
            },

            {
                value: "sports",
                title: "Deportivo",
                description: "Prestaciones y emoción."
            },

            {
                value: "family",
                title: "Familiar",
                description: "Espacio y practicidad."
            },

            {
                value: "unknown",
                title: "No lo sé",
                description: "Quiero que CAR MATCH me sorprenda."
            }

        ]
    },


    /* =====================================================
       PRIORITY
       ===================================================== */

    {
        id: "priority",

        category: "DECISIÓN FINAL",

        help: null,

        title: "Si solo pudieras elegir una cosa, ¿qué sería?",

        description:
            "Esta respuesta tendrá un peso especial en tu resultado.",

        type: "single",

        answers: [

            {
                value: "practicality",
                title: "Practicidad",
                description: "Quiero que mi coche se adapte a mi vida."
            },

            {
                value: "sport",
                title: "Diversión",
                description: "Quiero disfrutar conduciendo."
            },

            {
                value: "luxury",
                title: "Lujo",
                description: "Quiero una experiencia premium."
            },

            {
                value: "exclusivity",
                title: "Exclusividad",
                description: "Quiero algo especial."
            },

            {
                value: "balance",
                title: "Equilibrio",
                description: "Quiero un coche completo."
            }

        ]
    }

];


/* =========================================================
   USER STATE
   ========================================================= */

let currentQuestion = 0;

let activeQuestions = [];

const userAnswers = {};


/* =========================================================
   ADAPTIVE QUESTION SYSTEM
   ========================================================= */

function getAdaptiveQuestions() {

    const result = [];

    result.push(
        questions.find(
            q => q.id === "knowledge"
        )
    );

    result.push(
        questions.find(
            q => q.id === "budget"
        )
    );

    result.push(
        questions.find(
            q => q.id === "usage"
        )
    );

    result.push(
        questions.find(
            q => q.id === "passengers"
        )
    );


    /* SPORT */

    if (userAnswers.usage === "sport") {

        result.push(
            questions.find(
                q => q.id === "sportiness"
            )
        );

        result.push(
            questions.find(
                q => q.id === "luxury"
            )
        );

        result.push(
            questions.find(
                q => q.id === "exclusivity"
            )
        );

    }


    /* MIXED */

    if (userAnswers.usage === "mixed") {

        result.push(
            questions.find(
                q => q.id === "sportiness"
            )
        );

    }


    /* FAMILY */

    if (userAnswers.usage === "family") {

        result.push(
            questions.find(
                q => q.id === "luxury"
            )
        );

    }


    /* BODY */

    result.push(
        questions.find(
            q => q.id === "body"
        )
    );


    /* PRIORITY */

    result.push(
        questions.find(
            q => q.id === "priority"
        )
    );


    /* CLEAN */

    const cleaned = result.filter(Boolean);

    const unique = [];

    const ids = new Set();

    cleaned.forEach(question => {

        if (!ids.has(question.id)) {

            ids.add(question.id);

            unique.push(question);

        }

    });

    return unique;
}


/* =========================================================
   UPDATE ACTIVE QUESTIONS
   ========================================================= */

function updateAdaptiveQuestions() {

    activeQuestions = getAdaptiveQuestions();

}


/* =========================================================
   LOAD QUESTION
   ========================================================= */

function loadQuestion() {

    updateAdaptiveQuestions();

    const question =
        activeQuestions[currentQuestion];

    if (!question) {

        finishQuiz();

        return;

    }


    const questionNumber =
        document.getElementById(
            "questionNumber"
        );

    const progressText =
        document.getElementById(
            "progressText"
        );

    const progress =
        document.getElementById(
            "progress"
        );

    const questionCategory =
        document.getElementById(
            "questionCategory"
        );

    const questionTitle =
        document.getElementById(
            "questionTitle"
        );

    const questionDescription =
        document.getElementById(
            "questionDescription"
        );

    const answersContainer =
        document.getElementById(
            "answers"
        ) ||
        document.getElementById(
            "answersContainer"
        );

    const backButton =
        document.getElementById(
            "backButton"
        );


    /* ANSWERS CONTAINER */

    if (!answersContainer) {

        console.error(
            "CAR MATCH ERROR: No se encuentra el contenedor de respuestas."
        );

        return;

    }


    /* NUMBER */

    if (questionNumber) {

        questionNumber.textContent =
            `PREGUNTA ${String(
                currentQuestion + 1
            ).padStart(2, "0")}`;

    }


    /* PROGRESS TEXT */

    if (progressText) {

        progressText.textContent =
            `${currentQuestion + 1} / ${activeQuestions.length}`;

    }


    /* PROGRESS BAR */

    if (progress) {

        progress.style.width =
            `${(
                (
                    currentQuestion + 1
                ) /
                activeQuestions.length
            ) * 100}%`;

    }


    /* CATEGORY */

    if (questionCategory) {

        if (question.help) {

            questionCategory.innerHTML = `

                ${question.category}

                <button
                    class="help-button"
                    onclick="showHelp('${question.help}')"
                    type="button"
                    title="¿Qué significa?"
                >
                    ?
                </button>

            `;

        } else {

            questionCategory.textContent =
                question.category;

        }

    }


    /* TITLE */

    if (questionTitle) {

        questionTitle.textContent =
            question.title;

    }


    /* DESCRIPTION */

    if (questionDescription) {

        questionDescription.textContent =
            question.description;

    }


    /* ANSWERS */

    answersContainer.innerHTML = "";

    question.answers.forEach(answer => {

        const element =
            document.createElement("div");

        element.className = "answer";


        /* SELECTED */

        if (
            userAnswers[question.id] !== undefined &&
            userAnswers[question.id] === answer.value
        ) {

            element.classList.add("selected");

        }


        /* HTML */

        element.innerHTML = `

            <div class="answer-title">
                ${answer.title}
            </div>

            <div class="answer-description">
                ${answer.description}
            </div>

        `;


        /* CLICK */

        element.addEventListener(
            "click",
            () => {

                selectAnswer(
                    question.id,
                    answer.value
                );

            }
        );


        answersContainer.appendChild(element);

    });


    /* BACK BUTTON */

    if (backButton) {

        backButton.style.visibility =
            currentQuestion === 0
                ? "hidden"
                : "visible";

    }

}


/* =========================================================
   SELECT ANSWER
   ========================================================= */

function selectAnswer(questionId, value) {

    userAnswers[questionId] = value;

    loadQuestion();

}


/* =========================================================
   NEXT QUESTION
   ========================================================= */

function nextQuestion() {

    updateAdaptiveQuestions();

    const question =
        activeQuestions[currentQuestion];

    if (!question) {

        finishQuiz();

        return;

    }


    /* CHECK ANSWER */

    if (
        userAnswers[question.id] === undefined
    ) {

        alert(
            "Selecciona una respuesta para continuar."
        );

        return;

    }


    /* NEXT */

    if (
        currentQuestion <
        activeQuestions.length - 1
    ) {

        currentQuestion++;

        loadQuestion();

    } else {

        finishQuiz();

    }

}


/* =========================================================
   PREVIOUS QUESTION
   ========================================================= */

function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;

        loadQuestion();

    }

}


/* =========================================================
   CREATE USER PROFILE
   ========================================================= */

function createUserProfile() {

    return {

        knowledge:
            userAnswers.knowledge ?? null,

        budget:
            userAnswers.budget ?? null,

        usage:
            userAnswers.usage ?? null,

        passengers:
            userAnswers.passengers ?? null,

        sportiness:
            userAnswers.sportiness ?? null,

        luxury:
            userAnswers.luxury ?? null,

        exclusivity:
            userAnswers.exclusivity ?? null,

        body:
            userAnswers.body ?? null,

        priority:
            userAnswers.priority ?? null

    };

}


/* =========================================================
   FINISH QUIZ
   ========================================================= */

function finishQuiz() {

    const profile =
        createUserProfile();


    /* SAVE PROFILE */

    localStorage.setItem(
        "carMatchProfile",
        JSON.stringify(profile)
    );


    console.log(
        "CAR MATCH PROFILE:",
        profile
    );


    /* GO TO RESULTS */

    window.location.href =
        "results.html";

}


/* =========================================================
   RESET QUIZ
   ========================================================= */

function resetQuiz() {

    localStorage.removeItem(
        "carMatchProfile"
    );

    window.location.href =
        "quiz.html";

}


/* =========================================================
   START QUIZ
   ========================================================= */

function startQuiz() {

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
   INITIALIZE CAR MATCH
   ========================================================= */

function initializeCarMatch() {

    const answersContainer =
        document.getElementById(
            "answers"
        ) ||
        document.getElementById(
            "answersContainer"
        );


    /*
       Si no estamos en quiz.html,
       no hacemos nada.
    */

    if (!answersContainer) {

        return;

    }


    activeQuestions =
        getAdaptiveQuestions();

    currentQuestion = 0;

    loadQuestion();

}


/* =========================================================
   DOM READY
   ========================================================= */

if (
    document.readyState === "loading"
) {

    document.addEventListener(
        "DOMContentLoaded",
        initializeCarMatch
    );

} else {

    initializeCarMatch();

}

document.addEventListener("DOMContentLoaded", function () {

    const heroCar = document.getElementById("heroCar");

    if (!heroCar) return;

    const images = [
        "images/hero-car-1.png",
        "images/hero-car-2.png",
        "images/hero-car-3.png",
        "images/hero-car-4.png",
        "images/hero-car-5.png"
    ];

    let currentImage = 0;

    setInterval(function () {

        currentImage++;

        if (currentImage >= images.length) {
            currentImage = 0;
        }

        heroCar.src = images[currentImage];

    }, 8000);

});

```javascript
/* =========================================================
   CAR MATCH — MENÚ MÓVIL
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const menuButton = document.querySelector(".mobile-menu-button");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (!menuButton || !mobileMenu) return;


    /* ABRIR / CERRAR MENÚ */

    menuButton.addEventListener("click", function () {

        const isOpen = mobileMenu.classList.toggle("open");

        menuButton.classList.toggle("open", isOpen);

        menuButton.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );

        menuButton.setAttribute(
            "aria-label",
            isOpen ? "Cerrar menú" : "Abrir menú"
        );

    });


    /* CERRAR AL PULSAR UN ENLACE */

    const menuLinks = mobileMenu.querySelectorAll("a");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            mobileMenu.classList.remove("open");
            menuButton.classList.remove("open");

            menuButton.setAttribute(
                "aria-expanded",
                "false"
            );

            menuButton.setAttribute(
                "aria-label",
                "Abrir menú"
            );

        });

    });

});
```
