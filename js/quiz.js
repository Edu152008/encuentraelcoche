/* =========================================================
   CAR MATCH
   QUIZ LOGIC
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /* =====================================================
       GET QUIZ FORM
       ===================================================== */

    const quizForm = document.getElementById("quizForm");

    if (!quizForm) {
        console.warn("CAR MATCH: No se encontró el formulario del quiz.");
        return;
    }


    /* =====================================================
       SUBMIT QUIZ
       ===================================================== */

    quizForm.addEventListener("submit", (event) => {

        event.preventDefault();


        /* =================================================
           GET ANSWERS
           ================================================= */

        const formData = new FormData(quizForm);

        const answers = {};


        for (const [name, value] of formData.entries()) {
            answers[name] = value;
        }


        /* =================================================
           VALIDATION
           ================================================= */

        const requiredFields = [
            "budget",
            "body",
            "seats",
            "priority",
            "usage"
        ];


        const missingFields = requiredFields.filter(
            field => !answers[field]
        );


        if (missingFields.length > 0) {

            alert("Por favor, completa todas las preguntas antes de continuar.");

            return;
        }


        /* =================================================
           SAVE USER ANSWERS
           ================================================= */

        localStorage.setItem(
            "carMatchAnswers",
            JSON.stringify(answers)
        );


        /* =================================================
           GO TO RESULTS
           ================================================= */

        window.location.href = "results.html";

    });

});