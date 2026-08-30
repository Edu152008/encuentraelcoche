/* =========================================================
   CAR MATCH
   CAR DATABASE
   ========================================================= */

/*
   =========================================================
   IMPORTANTE
   =========================================================

   Esta es la base de datos principal de CAR MATCH.

   Cada coche contiene:
   - Información básica
   - Precio
   - Carrocería
   - Plazas
   - Prestaciones
   - Lujo
   - Exclusividad
   - Practicidad
   - Confort
   - Tecnología
   - Combustible
   - Transmisión
   - Tracción
   - Uso recomendado
   - Etiquetas para el algoritmo MATCH
   - URL oficial

   El algoritmo de resultados NO debe tener los coches
   escritos manualmente.

   Debe utilizar esta base de datos.
*/


const cars = [


    /* =====================================================
       PORSCHE
       ===================================================== */

    {
        id: "porsche-911-carrera",
        brand: "Porsche",
        model: "911 Carrera",
        year: 2026,
        price: 129000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 9,
        exclusivity: 9,
        practicality: 4,
        performance: 10,
        comfort: 7,
        technology: 9,

        trunk: 4,

        budgetLevel: 5,

        use: [
            "sport",
            "weekend",
            "highway",
            "mixed"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "premium",
            "performance",
            "coupe",
            "enthusiast"
        ],

        image: "https://prs.porsche.com/iod/image/ES/9921S2/1/N4Igxg9gdgZglgcxALlAQynAtmgLnaAZxQG0BdAGnDSwFMAnNFUOAExRFoA9cBaAGwgB3XjHrQ+-WjFwgqEAA74izEADc09OBlnIQrWoQDWuRSAC+5qrShq44qHSi6W7PQHk0hOMXlKCUMSollT8iAAW+FBIqCBsHAAiAIIAmnIgisqBzCEgCuKsAK5gLnFuIACcFQBMAIwAytXpmQFBoJCwiKQgAAwAium1ACpNVADMAEJj6QBsAJLTVADsSQDS6RUAWgCi6QDCABxD6QDitQBi6XMA6osgAFLbdwAyJ0MJAErP6QAKABLpPoAViSgI+FUBADVppRwBBCs56ABPDjberpLAQAz8FK0TQoao9apLSxWECEWi4KIINogGAQeg4XQgABWCloSCouEYgQUmhsuhgaH4FMsQA?clientId=icc",

        description:
            "Un deportivo de referencia que combina prestaciones, elegancia y una enorme capacidad de conducción."
    },


    {
        id: "porsche-911-turbo-s",
        brand: "Porsche",
        model: "911 Turbo S",
        year: 2026,
        price: 265000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 4,
        performance: 10,
        comfort: 8,
        technology: 10,

        trunk: 4,

        budgetLevel: 8,

        use: [
            "sport",
            "weekend",
            "highway"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "supercar",
            "sports-car",
            "performance",
            "premium",
            "exclusive"
        ],

        image: "https://e01-phantom-elmundo.uecdn.es/506e482bb99997e02f95a69145951425/crop/23x103/1199x799/f/webp/assets/multimedia/imagenes/2020/04/21/15874919213363.jpg",

        description:
            "Una de las versiones más extremas del 911, combinando prestaciones excepcionales con un nivel de lujo elevado."
    },

    {
        id: "porsche-718-boxster",
        brand: "Porsche",
        model: "718 Boxster",
        year: 2026,
        price: 95000,

        body: "convertible",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 8,
        exclusivity: 9,
        practicality: 3,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 3,

        budgetLevel: 4,

        use: [
            "sport",
            "weekend",
            "highway"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "roadster",
            "convertible",
            "sports-car",
            "mid-engine",
            "premium"
        ],

        image: "https://racstars.com/cdn/shop/files/racstars-mats-car-model-porsche-boxster-718-2016-2026.jpg?v=1771266764",

        description:
            "Roadster biplaza de motor central centrado en la agilidad, las sensaciones de conducción y el placer de conducir."
    },

    {
        id: "porsche-718-cayman",
        brand: "Porsche",
        model: "718 Cayman",
        year: 2026,
        price: 85000,

        body: "sports",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 8,
        exclusivity: 8,
        practicality: 4,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 3,

        budgetLevel: 4,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "mixed",
            "highway"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "lightweight",
            "coupe",
            "enthusiast"
        ],

        image: "https://fotos.quecochemecompro.com/porsche-cayman/porsche-718-cayman-dinamismo-en-pista.jpeg?size=750x400",

        description:
            "Deportivo compacto de motor central diseñado para ofrecer una conducción especialmente precisa."
    },


    {
        id: "porsche-cayenne",
        brand: "Porsche",
        model: "Cayenne",
        year: 2026,
        price: 100000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 9,
        exclusivity: 8,
        practicality: 9,
        performance: 9,
        comfort: 9,
        technology: 9,

        trunk: 9,

        budgetLevel: 4,

        use: [
            "family",
            "daily",
            "highway",
            "sport",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury"
        ],

        tags: [
            "suv",
            "premium",
            "family",
            "performance",
            "daily"
        ],

        image: "https://img.supercarros.com/AdsPhotos/1024x768/0/13931546.jpg?wmo=8860c90b1261abc2f38b6046bb4dc54673dcd757953f66fc8529cbfa5c83650cdd8387ad8cbd7550db3752a0273bbc9361d8f095eb4d81a37a3b0870358a39d1",

        description:
            "Un SUV premium que combina deportividad, lujo y practicidad para el uso diario."
    },

    {
        id: "porsche-cayenne-electric",
        brand: "Porsche",
        model: "Cayenne Electric",
        year: 2026,
        price: 100000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 9,
        exclusivity: 8,
        practicality: 9,
        performance: 9,
        comfort: 9,
        technology: 9,

        trunk: 9,

        budgetLevel: 4,

        use: [
            "family",
            "daily",
            "highway",
            "sport",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury"
        ],

        tags: [
            "suv",
            "premium",
            "family",
            "performance",
            "daily"
        ],

        image: "https://cdn.motor1.com/images/mgl/P3MmLK/s1/porsche-cayenne-electric-2026-und-porsche-cayenne-turbo-electric-2026.jpg",

        description:
            "Un SUV premium que combina deportividad, lujo y practicidad para el uso diario."
    },


    {
        id: "porsche-macan",
        brand: "Porsche",
        model: "Macan Electric",
        year: 2026,
        price: 75000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 9,
        exclusivity: 8,
        practicality: 8,
        performance: 8,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "daily",
            "family",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "premium",
            "electric",
            "daily",
            "technology"
        ],

        image: "https://a.storyblok.com/f/329189/640x480/975358f7d2/2026-porsche-macan-ev.png",

        description:
            "SUV deportivo de tamaño medio con una combinación equilibrada de lujo, tecnología y prestaciones."
    },

     {
        id: "porsche-macan-gasoline",
        brand: "Porsche",
        model: "Macan",
        year: 2026,
        price: 75000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 9,
        exclusivity: 8,
        practicality: 8,
        performance: 8,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "daily",
            "family",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "premium",
            "gasoline",
            "daily",
            "technology"
        ],

        image: "https://fotos.quecochemecompro.com/porsche-macan/vista-lateral-porsche-macan.jpeg?size=750x400",

        description:
            "SUV deportivo de tamaño medio con una combinación equilibrada de lujo, tecnología y prestaciones."
    },

    {
        id: "porsche-taycan",
        brand: "Porsche",
        model: "Taycan",
        year: 2026,
        price: 110000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 9,
        exclusivity: 8,
        practicality: 7,
        performance: 10,
        comfort: 8,
        technology: 10,

        trunk: 7,

        budgetLevel: 5,

        use: [
            "daily",
            "sport",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "mixed"
        ],

        tags: [
            "electric",
            "sports-sedan",
            "premium",
            "technology",
            "performance"
        ],

        image: "https://hips.hearstapps.com/mtg-prod/6838ef17067aeb00074ff693/1-2026-porsche-taycan-4s-front-view.jpg",

        description:
            "Berlina eléctrica de altas prestaciones que combina tecnología, lujo y deportividad."
    },

    {
        id: "porsche-panamera",
        brand: "Porsche",
        model: "Panamera",
        year: 2026,
        price: 130000,

        body: "sedan",
        doors: 4,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 8,
        exclusivity: 8,
        practicality: 7,
        performance: 9,
        comfort: 8,
        technology: 10,

        trunk: 7,

        budgetLevel: 5,

        use: [
            "daily",
            "sport",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "mixed"
        ],

        tags: [
            "gasoline",
            "sports-sedan",
            "premium",
            "technology",
            "performance"
        ],

        image: "https://www.diariomotor.com/imagenes/2024/01/Porsche-Panamera-Turbo-S-e-hybrid-2025-93-68e66537a5560.jpg?class=XL",

        description:
            "Berlina de altas prestaciones que combina tecnología, lujo y deportividad."
    },

    /* =====================================================
       BMW
       ===================================================== */

    {
        id: "bmw-x1",
        brand: "BMW",
        model: "X1",
        year: 2026,
        price: 52000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 7,
        exclusivity: 6,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 9,

        budgetLevel: 2,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "premium",
            "family",
            "daily",
            "practical"
        ],

        image: "https://media.ed.edmunds-media.com/bmw/x1/2026/oem/2026_bmw_x1_4dr-suv_m35i_fq_oem_1_600.jpg",

        description:
            "SUV compacto premium que combina practicidad, tecnología y confort para el uso diario y familiar."
    },

    {
        id: "bmw-m4",
        brand: "BMW",
        model: "M4 Competition",
        year: 2026,
        price: 115000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 8,
        exclusivity: 8,
        practicality: 6,
        performance: 10,
        comfort: 7,
        technology: 9,

        trunk: 5,

        budgetLevel: 5,

        use: [
            "sport",
            "daily",
            "weekend",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury"
        ],

        tags: [
            "sports-car",
            "coupe",
            "performance",
            "daily",
            "premium"
        ],

        image: "https://images.prismic.io/carwow/8c4b0999-6a4e-4501-a94c-06758e3f445f_P90415136_highRes_the-new-bmw-m4-compe.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Un coupé deportivo de altas prestaciones que combina uso diario con un carácter muy deportivo."
    },


    {
        id: "bmw-m3",
        brand: "BMW",
        model: "M3 Competition",
        year: 2026,
        price: 110000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 8,
        exclusivity: 8,
        practicality: 8,
        performance: 10,
        comfort: 8,
        technology: 9,

        trunk: 7,

        budgetLevel: 5,

        use: [
            "sport",
            "daily",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "mixed"
        ],

        tags: [
            "sports-sedan",
            "performance",
            "family",
            "daily",
            "premium"
        ],

        image: "https://cdn-xy.drivek.com/eyJidWNrZXQiOiJkYXRhay1jZG4teHkiLCJrZXkiOiJjb25maWd1cmF0b3ItaW1ncy9jYXJzL2ttNzdfZXMvb3JpZ2luYWwvQk1XL00zLVNFREFOLzUwOTUzX1NFREFOLTQtUFVFUlRBUy9udWV2by1tMy1iZXJsaW5hLTAuanBnIiwiZWRpdHMiOnsicmVzaXplIjp7IndpZHRoIjoxMDI0LCJoZWlnaHQiOm51bGwsImZpdCI6ImNvdmVyIn19fQ==",

        description:
            "Berlina deportiva de altas prestaciones que combina espacio para cinco ocupantes con un enorme rendimiento."
    },


    {
        id: "bmw-m5",
        brand: "BMW",
        model: "M5",
        year: 2026,
        price: 145000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 9,
        exclusivity: 8,
        practicality: 8,
        performance: 10,
        comfort: 8,
        technology: 10,

        trunk: 7,

        budgetLevel: 6,

        use: [
            "sport",
            "family",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury"
        ],

        tags: [
            "sports-sedan",
            "hybrid",
            "performance",
            "luxury",
            "family"
        ],

        image: "https://hips.hearstapps.com/mtg-prod/671aa037f59902000828163d/001-2025-bmw-m5.jpg",

        description:
            "Una berlina de altas prestaciones capaz de combinar prestaciones deportivas y practicidad."
    },

    {
        id: "bmw-m240i-xdrive",
        brand: "BMW",
        model: "M240i xDrive",
        year: 2026,
        price: 70000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 7,
        exclusivity: 7,
        practicality: 5,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 6,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily"
        ],

        tags: [
            "coupe",
            "performance",
            "sport",
            "premium",
            "awd"
        ],

        image: "https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2022/08/prueba-bmw-m240i-xdrive-coupe.jpg",

        description:
            "Coupé compacto de altas prestaciones que ofrece mucha diversión al volante manteniendo una dimensión razonablemente práctica."
    },

    {
        id: "bmw-m240i",
        brand: "BMW",
        model: "M240i",
        year: 2026,
        price: 65000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 7,
        exclusivity: 7,
        practicality: 5,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 5,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "mixed"
        ],

        tags: [
            "sports-car",
            "coupe",
            "daily",
            "performance"
        ],

        image: "https://cdn.bmwblog.com/wp-content/uploads/2025/07/2025-BMW-M240i-Carbon-Edition-3.jpg",

        description:
            "Coupé compacto de altas prestaciones que ofrece una entrada relativamente accesible al mundo deportivo de BMW."
    },


    {
        id: "bmw-m8",
        brand: "BMW",
        model: "M8 Competition",
        year: 2026,
        price: 175000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 9,
        practicality: 5,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 5,

        budgetLevel: 7,

        use: [
            "sport",
            "luxury",
            "highway",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "grand-tourer",
            "luxury",
            "performance",
            "coupe",
            "premium"
        ],

        image: "https://di-uploads-pod21.dealerinspire.com/bmwofnorthwestarkansas/uploads/2025/09/Screenshot-2025-09-19-110245.png",

        description:
            "Gran turismo de lujo con enormes prestaciones y un interior tecnológico."
    },

    {
        id: "bmw-m8-cabrio",
        brand: "BMW",
        model: "M8 Competition Cabrio",
        year: 2026,
        price: 185000,

        body: "convertible",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 9,
        practicality: 5,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 5,

        budgetLevel: 7,

        use: [
            "sport",
            "luxury",
            "highway",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "grand-tourer",
            "luxury",
            "performance",
            "coupe",
            "premium"
        ],

        image: "https://images.prismic.io/carwow/98f046d1-847c-4d80-959a-a08197c443c1_3_4+frontal+estatica+%286%29.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Gran turismo descapotablede lujo con enormes prestaciones y un interior tecnológico."
    },

    {
        id: "bmw-x3",
        brand: "BMW",
        model: "X3",
        year: 2026,
        price: 65000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 8,
        exclusivity: 7,
        practicality: 9,
        performance: 7,
        comfort: 9,
        technology: 9,

        trunk: 9,

        budgetLevel: 3,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "mixed",
            "sport"
        ],

        tags: [
            "suv",
            "family",
            "daily",
            "premium",
            "practical"
        ],

        image: "https://fotos.quecochemecompro.com/bmw-x3/bmw-x3-vista-delantera-lateral.jpeg?size=750x400",

        description:
            "SUV premium de tamaño medio equilibrado entre practicidad, confort y deportividad."
    },


    {
        id: "bmw-x5",
        brand: "BMW",
        model: "X5",
        year: 2026,
        price: 85000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 9,
        exclusivity: 7,
        practicality: 9,
        performance: 7,
        comfort: 10,
        technology: 9,

        trunk: 10,

        budgetLevel: 4,

        use: [
            "family",
            "daily",
            "highway",
            "luxury",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "luxury",
            "comfort",
            "daily"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/2024-bmw-x5-m60i-134-6602d491051b2.jpg?crop=0.702xw:0.591xh;0.131xw,0.276xh&resize=2048:*",

        description:
            "SUV premium muy equilibrado con gran confort, espacio y calidad interior."
    },


    {
        id: "bmw-x7",
        brand: "BMW",
        model: "X7",
        year: 2026,
        price: 115000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 10,
        exclusivity: 9,
        practicality: 10,
        performance: 8,
        comfort: 10,
        technology: 10,

        trunk: 10,

        budgetLevel: 5,

        use: [
            "family",
            "luxury",
            "highway",
            "daily"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "family",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "suv",
            "7-seats",
            "family",
            "luxury",
            "comfort"
        ],

        image: "https://media.ed.edmunds-media.com/bmw/x7/2026/oem/2026_bmw_x7_4dr-suv_m60i_fq_oem_1_1600.jpg",

        description:
            "SUV de gran tamaño con siete plazas, elevado nivel de lujo y gran confort para viajes largos."
    },

    {
        id: "bmw-m5-touring",
        brand: "BMW",
        model: "M5 Touring",
        year: 2026,
        price: 145000,

        body: "family",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 9,
        exclusivity: 9,
        practicality: 10,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 10,

        budgetLevel: 6,

        use: [
            "sport",
            "family",
            "daily",
            "highway",
            "luxury",
            "weekend",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "wagon",
            "touring",
            "sports-car",
            "performance",
            "hybrid",
            "luxury",
            "family",
            "awd"
        ],

        image: "https://i.gaw.to/vehicles/photos/40/40/404098-2026-bmw-5-series.jpg?1024x640",

        description:
            "Familiar de altas prestaciones que combina la practicidad de un Touring con una potencia y capacidad dinámica propias de un deportivo de alto nivel."
    },

    {
        id: "bmw-m135i",
        brand: "BMW",
        model: "M135i",
        year: 2026,
        price: 60000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 7,
        exclusivity: 7,
        practicality: 8,
        performance: 9,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "city",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "mixed"
        ],

        tags: [
            "hatchback",
            "hot-hatch",
            "sport",
            "premium",
            "performance",
            "awd",
            "daily"
        ],

        image: "https://parkers-images.bauersecure.com/wp-images/345026/cut-out/088-bmw-m135.jpg",

        description:
            "Compacto deportivo premium que combina buenas prestaciones y tracción integral con cinco plazas y suficiente practicidad para el uso diario."
    },

    {
        id: "bmw-serie-1",
        brand: "BMW",
        model: "Serie 1",
        year: 2026,
        price: 43000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 7,
        luxury: 7,
        exclusivity: 7,
        practicality: 8,
        performance: 7,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "highway",
            "mixed",
            "sport"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "sport",
            "luxury",
            "mixed"
        ],

        tags: [
            "hatchback",
            "premium",
            "compact",
            "sport",
            "luxury",
            "daily"
        ],

        image: "https://fotos.quecochemecompro.com/bmw-serie-1/vista-delantera-lateral-bmw-serie1.jpeg?size=750x400",

        description:
            "Compacto premium de BMW que combina tecnología, confort, calidad interior y un carácter más dinámico."
    },

    {
        id: "bmw-7-series",
        brand: "BMW",
        model: "Serie 7",
        year: 2026,
        price: 120000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 10,
        exclusivity: 9,
        practicality: 8,
        performance: 7,
        comfort: 10,
        technology: 10,

        trunk: 8,

        budgetLevel: 5,

        use: [
            "luxury",
            "family",
            "highway",
            "daily"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "luxury",
            "family",
            "exclusivity"
        ],

        tags: [
            "luxury-sedan",
            "executive",
            "comfort",
            "technology"
        ],

        image: "https://fotos.quecochemecompro.com/bmw-serie-7-hibrido/bmw-serie7-hibrido-dinamismo-urbano.jpg?size=750x400",

        description:
            "Berlina de representación que combina tecnología, espacio y lujo."
    },


    {
        id: "bmw-i5-m60",
        brand: "BMW",
        model: "i5 M60",
        year: 2026,
        price: 105000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 9,
        exclusivity: 8,
        practicality: 8,
        performance: 9,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 5,

        use: [
            "sport",
            "luxury",
            "family",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "family"
        ],

        tags: [
            "electric",
            "sports-sedan",
            "luxury",
            "technology",
            "daily"
        ],

        image: "https://www.edmunds.com/assets/m/cs/cms/5b4c88a7-38dd-46bc-8c22-6eabd6e8cc0f/2026-bmw-i5-xdrive40-01-f34.jpg",

        description:
            "Berlina eléctrica premium que combina prestaciones deportivas, tecnología y confort."
    },

    {
        id: "bmw-serie-2-coupe",
        brand: "BMW",
        model: "Serie 2 Coupé",
        year: 2026,
        price: 58000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 7,
        luxury: 7,
        exclusivity: 6,
        practicality: 5,
        performance: 7,
        comfort: 7,
        technology: 8,

        trunk: 6,

        budgetLevel: 2,

        use: [
            "daily",
            "sport",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "mixed"
        ],

        tags: [
            "coupe",
            "premium",
            "sport",
            "daily",
            "rwd"
        ],

        image: "https://noticias.coches.com/wp-content/uploads/2024/06/BMW-M240i-xDrive-Coupe-2024-9.jpeg",

        description:
            "Coupé compacto premium que combina una conducción ágil, diseño deportivo y suficiente comodidad para utilizarlo a diario."
    },

    {
        id: "bmw-serie-5-touring",
        brand: "BMW",
        model: "Serie 5 Touring",
        year: 2026,
        price: 70000,

        body: "family",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 8,
        exclusivity: 7,
        practicality: 10,
        performance: 7,
        comfort: 9,
        technology: 10,

        trunk: 10,

        budgetLevel: 4,

        use: [
            "family",
            "daily",
            "highway",
            "luxury",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "daily",
            "mixed"
        ],

        tags: [
            "wagon",
            "touring",
            "premium",
            "family",
            "practical",
            "luxury"
        ],

        image: "https://fotos.quecochemecompro.com/bmw-serie-5-touring/bmw-serie-5-touring-en-movimiento.jpg?size=750x400",

        description:
            "Familiar ejecutivo premium que ofrece mucho espacio y practicidad sin renunciar al confort ni al carácter dinámico de BMW."
    },

    {
        id: "bmw-serie-4-coupe",
        brand: "BMW",
        model: "Serie 4 Coupé",
        year: 2026,
        price: 70000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 7,
        luxury: 8,
        exclusivity: 7,
        practicality: 6,
        performance: 8,
        comfort: 8,
        technology: 9,

        trunk: 7,

        budgetLevel: 3,

        use: [
            "daily",
            "highway",
            "mixed",
            "sport",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "daily",
            "mixed"
        ],

        tags: [
            "coupe",
            "premium",
            "luxury",
            "sport",
            "daily"
        ],

        image: "https://media.ed.edmunds-media.com/bmw/4-series/2026/oem/2026_bmw_4-series_coupe_m440i_fq_oem_1_1600.jpg",

        description:
            "Coupé premium de tamaño medio que combina elegancia, confort y una conducción dinámica sin ser un deportivo extremo."
    },

    {
        id: "bmw-430i-coupe",
        brand: "BMW",
        model: "430i Coupé",
        year: 2026,
        price: 68000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 7,
        luxury: 8,
        exclusivity: 6,
        practicality: 6,
        performance: 7,
        comfort: 8,
        technology: 9,

        trunk: 7,

        budgetLevel: 3,

        use: [
            "daily",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "sport",
            "luxury",
            "mixed"
        ],

        tags: [
            "coupe",
            "premium",
            "daily",
            "luxury",
            "rwd"
        ],

        image: "https://www.lanacion.com.ar/resizer/v2/el-bmw-430i-tiene-una-silueta-D6LLR3QBENA77PZ2ILLWHTH4JM.jpg?auth=4edcd40951b3fb7e53ef6a57273c89a5d752c8acb731c8d3ded439bd318f323f&width=768&quality=70&smart=false",

        description:
            "Coupé premium equilibrado para quien busca diseño, confort y diversión al volante sin llegar al nivel de un deportivo radical."
    },

    {
        id: "bmw-xm",
        brand: "BMW",
        model: "XM",
        year: 2026,
        price: 180000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 9,
        practicality: 8,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 7,

        use: [
            "sport",
            "luxury",
            "family",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "performance-suv",
            "hybrid",
            "luxury",
            "exclusive",
            "suv"
        ],

        image: "https://www.autonocion.com/wp-content/uploads/2025/06/BMW-XM-Label-2026-0.jpg",

        description:
            "SUV de altas prestaciones con enfoque deportivo, lujo y tecnología avanzada."
    },


    /* =====================================================
       MERCEDES-AMG
       ===================================================== */

    {
        id: "mercedes-amg-e53",
        brand: "Mercedes-AMG",
        model: "E 53",
        year: 2026,
        price: 105000,

        body: "family",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 10,
        exclusivity: 8,
        practicality: 8,
        performance: 9,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 5,

        use: [
            "sport",
            "luxury",
            "daily",
            "highway",
            "family",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "daily",
            "family"
        ],

        tags: [
            "wagon",
            "performance",
            "premium",
            "luxury",
            "awd",
            "executive"
        ],

        image: "https://hips.hearstapps.com/mtg-prod/68dc41c5f37b2c000292afd2/001-2026-mercedes-benz-amg-e53-phev-wagon.jpg?w=768&width=768&q=75&format=webp",

        description:
            "Berlina ejecutiva deportiva que combina el lujo y confort de la Clase E con prestaciones y comportamiento propios de AMG."
    },

    {
        id: "mercedes-amg-cle-53",
        brand: "Mercedes-AMG",
        model: "CLE 53",
        year: 2026,
        price: 95000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 9,
        exclusivity: 8,
        practicality: 6,
        performance: 9,
        comfort: 8,
        technology: 10,

        trunk: 7,

        budgetLevel: 4,

        use: [
            "sport",
            "luxury",
            "daily",
            "highway",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "coupe",
            "performance",
            "luxury",
            "premium",
            "awd"
        ],

        image: "https://i.bstr.es/highmotor/2023/12/Mercedes-AMG-CLE-53-4Matic-2024-17-1220x814.webp",

        description:
            "Coupé deportivo premium que busca equilibrar altas prestaciones, lujo y comodidad para disfrutarlo tanto a diario como los fines de semana."
    },

    {
        id: "mercedes-clase-a",
        brand: "Mercedes-Benz",
        model: "Clase A",
        year: 2026,
        price: 43000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 6,
        luxury: 8,
        exclusivity: 7,
        practicality: 8,
        performance: 6,
        comfort: 8,
        technology: 10,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "luxury",
            "city",
            "mixed"
        ],

        tags: [
            "hatchback",
            "premium",
            "compact",
            "luxury",
            "technology",
            "daily"
        ],

        image: "https://www.autofacil.es/wp-content/uploads/2026/04/mercedes-benz_a_200_amg_line_92.jpg",

        description:
            "Compacto premium orientado al confort y la tecnología, con una imagen más lujosa y una experiencia de uso muy completa."
    },

    {
        id: "mercedes-cle-coupe",
        brand: "Mercedes-Benz",
        model: "CLE Coupé",
        year: 2026,
        price: 76000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 7,
        luxury: 9,
        exclusivity: 8,
        practicality: 6,
        performance: 7,
        comfort: 9,
        technology: 10,

        trunk: 7,

        budgetLevel: 4,

        use: [
            "daily",
            "luxury",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "luxury",
            "daily",
            "mixed"
        ],

        tags: [
            "coupe",
            "premium",
            "luxury",
            "comfort",
            "daily"
        ],

        image: "https://images.prismic.io/carwow/1019778c-17ac-47c1-8d16-68145f571bbf_LHD+Mercedes+CLE+Coupe+2024+Exterior-06.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Coupé premium de enfoque elegante que prioriza el confort, el lujo y la experiencia de conducción para el día a día y los viajes largos."
    },

    {
        id: "mercedes-glc",
        brand: "Mercedes-Benz",
        model: "GLC",
        year: 2026,
        price: 68000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 9,
        exclusivity: 8,
        practicality: 9,
        performance: 7,
        comfort: 10,
        technology: 10,

        trunk: 9,

        budgetLevel: 3,

        use: [
            "family",
            "luxury",
            "daily",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "premium",
            "luxury",
            "family",
            "comfort",
            "daily"
        ],

        image: "https://images.prismic.io/carwow/45535202-198e-4f2d-a3f2-f2522149b1b4_LHD+Mercedes+GLC+2023+Exterior-02.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "SUV premium equilibrado que destaca por su confort, calidad interior, tecnología y versatilidad."
    },

    {
        id: "mercedes-amg-gt",
        brand: "Mercedes-AMG",
        model: "GT 63",
        year: 2026,
        price: 195000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 9,
        practicality: 6,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 5,

        budgetLevel: 7,

        use: [
            "sport",
            "luxury",
            "weekend",
            "highway"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "grand-tourer",
            "luxury",
            "performance",
            "premium"
        ],

        image: "https://images.prismic.io/carwow/49251f28-a961-48f4-92d7-764332eb6c62_LHD+Mercedes-AMG+GT+Coupe+2024+Exterior-12.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Un gran turismo de lujo con prestaciones extremas y una presencia especialmente exclusiva."
    },


    {
        id: "mercedes-amg-gt-4-door",
        brand: "Mercedes-AMG",
        model: "GT 63 4-Door",
        year: 2026,
        price: 190000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 9,
        practicality: 8,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 7,

        use: [
            "sport",
            "family",
            "luxury",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "sports-sedan",
            "luxury",
            "family",
            "performance"
        ],

        image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/04/1205324.jpg",

        description:
            "Una berlina de lujo de altísimas prestaciones pensada para quienes quieren espacio sin renunciar al carácter deportivo."
    },


    {
        id: "mercedes-amg-a45",
        brand: "Mercedes-AMG",
        model: "A 45 S",
        year: 2026,
        price: 70000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 7,
        exclusivity: 7,
        practicality: 7,
        performance: 9,
        comfort: 7,
        technology: 9,

        trunk: 7,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "city"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "sport",
            "mixed"
        ],

        tags: [
            "hot-hatch",
            "sport",
            "daily",
            "compact"
        ],

        image: "https://img-ik.cars.co.za/news-site-za/images/2020/08/Mercedes-AMG-A45S-4.jpg?tr=w-1200,h-800",

        description:
            "Compacto de altas prestaciones que combina practicidad diaria con un carácter muy deportivo."
    },


    {
        id: "mercedes-gle-coupe",
        brand: "Mercedes-Benz",
        model: "GLE-Coupe",
        year: 2026,
        price: 105000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 10,
        exclusivity: 8,
        practicality: 9,
        performance: 8,
        comfort: 10,
        technology: 10,

        trunk: 9,

        budgetLevel: 4,

        use: [
            "family",
            "luxury",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "luxury",
            "family",
            "comfort"
        ],

        image: "https://images.coches.com/_news_/2026/07/Mercedes-GLE-450-e-4MATIC-Coupe-AMG-Line-C167-2026-7.jpeg",

        description:
            "SUV premium de gran tamaño que combina lujo, espacio, tecnología y confort para todo tipo de desplazamientos." 
    },


    {
        id: "mercedes-gls",
        brand: "Mercedes-Benz",
        model: "GLS",
        year: 2026,
        price: 125000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 10,
        exclusivity: 9,
        practicality: 10,
        performance: 8,
        comfort: 10,
        technology: 10,

        trunk: 10,

        budgetLevel: 5,

        use: [
            "family",
            "luxury",
            "highway",
            "daily"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "family",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "suv",
            "7-seats",
            "luxury",
            "family",
            "comfort"
        ],

        image: "https://www.qonecta.com/documents/80345/93398/01-Nuevo_Mercedes-Benz_GLS_2026_mas_potencia_mas_tecnologia_primera_clase_para_todos_pasajeros.jpg/42a32816-283a-474c-91f8-d2527c17cdde",

        description:
            "SUV de gran tamaño con siete plazas y un nivel de confort y lujo muy elevado."
    },


    {
        id: "mercedes-s-class",
        brand: "Mercedes-Benz",
        model: "S-Class",
        year: 2026,
        price: 140000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 10,
        exclusivity: 9,
        practicality: 8,
        performance: 7,
        comfort: 10,
        technology: 10,

        trunk: 8,

        budgetLevel: 6,

        use: [
            "luxury",
            "family",
            "highway",
            "daily"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "luxury",
            "family",
            "exclusivity"
        ],

        tags: [
            "luxury-sedan",
            "executive",
            "comfort",
            "technology"
        ],

        image: "https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2026/01/mercedes-clase-s-2026.jpg",

        description:
            "Una de las grandes referencias del lujo, el confort y la tecnología."
    },


    {
        id: "mercedes-amg-g63",
        brand: "Mercedes-AMG",
        model: "G 63",
        year: 2026,
        price: 220000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 10,
        exclusivity: 10,
        practicality: 8,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 8,

        use: [
            "sport",
            "luxury",
            "family",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "luxury-suv",
            "performance-suv",
            "exclusive",
            "iconic"
        ],

        image: "https://images.prismic.io/carwow/77f3c9b7-0013-4c49-8025-f570520f4772_LHD+Mercedes-AMG+G+63+2018+Exterior-4.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "SUV icónico de altas prestaciones que combina lujo, capacidad y una imagen extremadamente reconocible."
    },


    {
        id: "mercedes-glb",
        brand: "Mercedes-Benz",
        model: "GLB",
        year: 2026,
        price: 55000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 7,
        exclusivity: 6,
        practicality: 10,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 10,

        budgetLevel: 2,

        use: [
            "family",
            "daily",
            "city",
            "mixed"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "family",
            "mixed"
        ],

        tags: [
            "suv",
            "7-seats",
            "family",
            "practical",
            "daily"
        ],

        image: "https://hackercar.com/wp-content/uploads/2025/12/nuevo-mercedes-glb-2026-hackercar-1.webp",

        description:
            "SUV compacto con posibilidad de siete plazas y un enfoque muy práctico."
    },

    {
        id: "mercedes-gle",
        brand: "Mercedes-Benz",
        model: "GLE",
        year: 2026,
        price: 90000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 10,
        exclusivity: 8,
        practicality: 9,
        performance: 7,
        comfort: 10,
        technology: 10,

        trunk: 10,

        budgetLevel: 4,

        use: [
            "family",
            "luxury",
            "daily",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "comfort",
            "mixed"
        ],

        tags: [
            "suv",
            "premium",
            "luxury",
            "family",
            "comfort",
            "daily"
        ],

        image: "https://content.fastly.ccdn.es/pro/cnet/images/f4/f48aafb5-02cd-4a26-97c1-fc1fc418da9e?rule=original",

        description:
            "SUV premium orientado al confort, el lujo y los viajes largos."
    },

    {
        id: "mercedes-amg-glc-53",
        brand: "Mercedes-AMG",
        model: "GLC 53",
        year: 2026,
        price: 115000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 9,
        exclusivity: 9,
        practicality: 9,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 9,

        budgetLevel: 5,

        use: [
            "sport",
            "luxury",
            "family",
            "daily",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "family",
            "exclusivity"
        ],

        tags: [
            "performance-suv",
            "suv",
            "luxury",
            "sport",
            "family",
            "premium"
        ],

        image: "https://www.topgear.com/sites/default/files/2026/02/pre-media_26c0034_013.jpg",

        description:
            "SUV deportivo premium que combina altas prestaciones con espacio, lujo y capacidad para el uso diario."
    },

    {
        id: "mercedes-e-class",
        brand: "Mercedes-Benz",
        model: "E-Class",
        year: 2026,
        price: 75000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 6,
        luxury: 9,
        exclusivity: 7,
        practicality: 9,
        performance: 7,
        comfort: 10,
        technology: 10,

        trunk: 9,

        budgetLevel: 3,

        use: [
            "family",
            "luxury",
            "highway",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "highway"
        ],

        tags: [
            "executive",
            "sedan",
            "comfort",
            "daily",
            "family"
        ],

        image: "https://images.prismic.io/carwow/1bec2db8-c800-4f85-b8f9-0d566452378f_mercedes-clase-e-berlina-3.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Berlina premium equilibrada para viajes largos, trabajo y uso diario."
    },


    {
        id: "mercedes-amg-a35",
        brand: "Mercedes-AMG",
        model: "A 35",
        year: 2026,
        price: 60000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 7,
        exclusivity: 6,
        practicality: 8,
        performance: 8,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "city",
            "mixed"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "mixed"
        ],

        tags: [
            "hot-hatch",
            "sport",
            "daily",
            "compact"
        ],

        image: "https://parkers-images.bauersecure.com/wp-images/231976/cut-out/1200x800/mercedes-amg_a_35_4matic_33.jpeg?mode=max&quality=90&scale=down",

        description:
            "Compacto premium deportivo con buen equilibrio entre rendimiento y uso diario."
    },

    {
        id: "mercedes-class-e",
        brand: "Mercedes-Benz",
        model: "Clase E",
        year: 2026,
        price: 72000,

        body: "family",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 5,
        luxury: 9,
        exclusivity: 8,
        practicality: 8,
        performance: 7,
        comfort: 10,
        technology: 10,

        trunk: 8,

        budgetLevel: 4,

        use: [
            "family",
            "daily",
            "highway",
            "luxury",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "luxury",
            "family",
            "daily"
        ],

        tags: [
            "wagon",
            "executive",
            "premium",
            "luxury",
            "comfort",
            "family"
        ],

        image: "https://cms-assets.autoscout24.com/uaddx06iwzdz/aPCR85pI6BRdT9g53U0ut/a839a6965ebb92c98e414404bca7b34e/mercedes-clase-e-2024.familiar.jpg?w=1100",

        description:
            "Berlina ejecutiva centrada especialmente en el confort, la tecnología, el refinamiento y los viajes largos."
    },


    /* =====================================================
       AUDI
       ===================================================== */

    {
        id: "audi-rs3",
        brand: "Audi",
        model: "RS 3",
        year: 2026,
        price: 75000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 8,
        exclusivity: 8,
        practicality: 8,
        performance: 10,
        comfort: 7,
        technology: 9,

        trunk: 7,

        budgetLevel: 4,

        use: [
            "sport",
            "daily",
            "city",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "exclusivity"
        ],

        tags: [
            "hatchback",
            "hot-hatch",
            "sports-car",
            "premium",
            "performance",
            "awd"
        ],

        image: "https://www.diariomotor.com/imagenes/2021/07/audi-rs3-2021-0721-022.jpg?class=XL",

        description:
            "Compacto deportivo de altas prestaciones que combina cinco plazas, tracción integral, tecnología y un carácter extremadamente deportivo."
    },

    {
        id: "audi-a3",
        brand: "Audi",
        model: "A3",
        year: 2026,
        price: 42000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 6,
        luxury: 7,
        exclusivity: 6,
        practicality: 8,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "luxury",
            "family",
            "mixed"
        ],

        tags: [
            "hatchback",
            "premium",
            "compact",
            "luxury",
            "daily",
            "technology"
        ],

        image: "https://fotos.quecochemecompro.com/audi-a3/43672054.jpg?size=750x400",

        description:
            "Compacto premium equilibrado que combina calidad interior, tecnología, confort y facilidad de uso diario."
    },

    {
        id: "audi-s5-coupe",
        brand: "Audi",
        model: "S5 Coupé",
        year: 2026,
        price: 75000,

        body: "sedan",
        doors: 2,
        seats: 4,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 8,
        exclusivity: 7,
        practicality: 6,
        performance: 8,
        comfort: 8,
        technology: 9,

        trunk: 7,

        budgetLevel: 4,

        use: [
            "sport",
            "daily",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "daily"
        ],

        tags: [
            "sedan",
            "sport",
            "premium",
            "performance",
            "awd"
        ],

        image: "https://cdn.motor1.com/images/mgl/Oo28vB/s3/2025-audi-s5-first-drive-review.jpg",

        description:
            "Coupé premium de orientación deportiva que combina prestaciones, tracción integral, confort y tecnología."
    },

    {
        id: "audi-a5-coupe",
        brand: "Audi",
        model: "A5 Coupé",
        year: 2026,
        price: 55000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 6,
        luxury: 8,
        exclusivity: 6,
        practicality: 6,
        performance: 6,
        comfort: 9,
        technology: 9,

        trunk: 7,

        budgetLevel: 2,

        use: [
            "daily",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "luxury",
            "mixed"
        ],

        tags: [
            "coupe",
            "premium",
            "comfort",
            "luxury",
            "daily"
        ],

        image: "https://images.prismic.io/carwow/84ff38a9-0e48-439c-83a6-a47a1b5a2aea_A1911799_large+%281%29.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Coupé premium elegante pensado para combinar confort, tecnología y diseño con un comportamiento dinámico pero fácil de utilizar a diario."
    },

    {
        id: "audi-q5-sportback",
        brand: "Audi",
        model: "Q5 Sportback",
        year: 2026,
        price: 68000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 8,
        exclusivity: 7,
        practicality: 8,
        performance: 7,
        comfort: 9,
        technology: 9,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "coupe-suv",
            "premium",
            "sport",
            "luxury",
            "daily"
        ],

        image: "https://emea-dam.audi.com/adobe/assets/urn:aaid:aem:e5a2fa2d-ae83-41b8-b2a7-6e11f8d3f650/as/Q5_2024_7221_1-S-L.jpg?width=1024",

        description:
            "SUV coupé premium que combina una imagen deportiva con confort, tecnología y suficiente practicidad para el uso diario."
    },

    {
        id: "audi-q4-sportback-e-tron",
        brand: "Audi",
        model: "Q4 Sportback e-tron",
        year: 2026,
        price: 62000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 8,
        exclusivity: 7,
        practicality: 8,
        performance: 7,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "daily",
            "city",
            "highway",
            "mixed",
            "sport"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "luxury",
            "mixed",
            "sport"
        ],

        tags: [
            "suv",
            "coupe-suv",
            "electric",
            "premium",
            "technology",
            "daily"
        ],

        image: "https://images.coches.com/_news_/2026/06/Audi-Q4-Sportback-e-tron-quattro-S-line-2026-13.jpeg",

        description:
            "SUV coupé eléctrico premium que combina diseño deportivo, tecnología avanzada, confort y facilidad de uso diario."
    },

    {
        id: "audi-q3",
        brand: "Audi",
        model: "Q3",
        year: 2026,
        price: 52000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 8,
        exclusivity: 6,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 9,

        budgetLevel: 2,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "premium",
            "family",
            "daily",
            "practical"
        ],

        image: "https://fotos.quecochemecompro.com/audi-q3/audi-q3-2023-frontal-urbano.jpg?size=750x400",

        description:
            "SUV compacto premium que combina confort, tecnología, practicidad y facilidad de uso diario."
    },

    {
        id: "audi-q3-sportback",
        brand: "Audi",
        model: "Q3 Sportback",
        year: 2026,
        price: 56000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 8,
        exclusivity: 7,
        practicality: 8,
        performance: 7,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 2,

        use: [
            "daily",
            "city",
            "highway",
            "mixed",
            "sport"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "coupe-suv",
            "premium",
            "sport",
            "daily",
            "luxury"
        ],

        image: "https://d1gl66oyi6i593.cloudfront.net/wp-content/uploads/2025/11/prueba-audi-q3-2026-e-hybrid-sportback.jpg",

        description:
            "SUV coupé compacto de carácter premium que combina un diseño más deportivo con tecnología, confort y practicidad para el uso diario."
    },

    {
        id: "audi-rs6",
        brand: "Audi",
        model: "RS6 Avant",
        year: 2026,
        price: 145000,

        body: "family",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 9,
        exclusivity: 8,
        practicality: 10,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 10,

        budgetLevel: 6,

        use: [
            "sport",
            "family",
            "luxury",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury"
        ],

        tags: [
            "performance-wagon",
            "family",
            "performance",
            "luxury",
            "practical"
        ],

        image: "https://images.prismic.io/carwow/3ce7c2b7-3767-4f18-bf1e-8c94ef6306c6_LHD+Aurdi+RS6+Avant++Performance+2023+Exterior-9.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Un familiar de altas prestaciones que combina una enorme capacidad de carga con prestaciones de deportivo."
    },


    {
        id: "audi-r8",
        brand: "Audi",
        model: "R8",
        year: 2026,
        price: 190000,

        body: "sports",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 9,
        exclusivity: 10,
        practicality: 3,
        performance: 10,
        comfort: 7,
        technology: 9,

        trunk: 3,

        budgetLevel: 7,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity",
            "luxury"
        ],

        tags: [
            "supercar",
            "sports-car",
            "exclusive",
            "performance"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/110-audi-r8-coupe-japan-final-edition-001-l-657acb8995827.jpg",

        description:
            "Deportivo de motor central con una combinación excepcional de prestaciones, diseño y exclusividad."
    },


    {
        id: "audi-rs3",
        brand: "Audi",
        model: "RS3",
        year: 2026,
        price: 65000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 7,
        exclusivity: 7,
        practicality: 8,
        performance: 9,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "family",
            "city"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "mixed",
            "family"
        ],

        tags: [
            "sports-sedan",
            "compact",
            "daily",
            "performance"
        ],

        image: "https://media.ed.edmunds-media.com/audi/rs-3/2026/oem/2026_audi_rs-3_sedan_base_fq_oem_1_1280.jpg",

        description:
            "Berlina compacta de altas prestaciones, rápida y suficientemente práctica para el día a día."
    },


    {
        id: "audi-s3",
        brand: "Audi",
        model: "S3",
        year: 2026,
        price: 55000,

        body: "hatchback",
        doors: 4,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 7,
        exclusivity: 6,
        practicality: 8,
        performance: 8,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 2,

        use: [
            "sport",
            "daily",
            "family",
            "city"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "sport",
            "mixed",
            "family"
        ],

        tags: [
            "sports-sedan",
            "compact",
            "daily"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/a242252-large-668fba60ba83c.jpg?resize=2048:*",

        description:
            "Compacto premium rápido y versátil para quienes quieren deportividad sin sacrificar demasiado la practicidad."
    },


    {
        id: "audi-q8",
        brand: "Audi",
        model: "Q8",
        year: 2026,
        price: 95000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 9,
        exclusivity: 8,
        practicality: 8,
        performance: 8,
        comfort: 9,
        technology: 10,

        trunk: 9,

        budgetLevel: 4,

        use: [
            "sport",
            "family",
            "luxury",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury"
        ],

        tags: [
            "suv",
            "luxury",
            "sport",
            "family"
        ],

        image: "https://www.diariomotor.com/imagenes/2023/09/audi-q8-sq8-2024-16-64f8bf4b95800.jpg?class=XL",

        description:
            "SUV coupé premium con diseño elegante, tecnología avanzada y buena capacidad familiar."
    },


    {
        id: "audi-q7",
        brand: "Audi",
        model: "Q7",
        year: 2026,
        price: 85000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 9,
        exclusivity: 7,
        practicality: 10,
        performance: 7,
        comfort: 9,
        technology: 10,

        trunk: 10,

        budgetLevel: 4,

        use: [
            "family",
            "luxury",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "7-seats",
            "family",
            "luxury",
            "practical"
        ],

        image: "https://roadethos.com/.image/NjA6MDAwMDAwMDAwMDA5MzAy/2026-audi-q7.jpg?profile=w2560&x=50&y=50",

        description:
            "SUV premium de siete plazas con gran espacio interior y tecnología avanzada."
    },


    {
        id: "audi-a8",
        brand: "Audi",
        model: "A8",
        year: 2026,
        price: 115000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 10,
        exclusivity: 8,
        practicality: 8,
        performance: 7,
        comfort: 10,
        technology: 10,

        trunk: 8,

        budgetLevel: 5,

        use: [
            "luxury",
            "family",
            "highway",
            "daily"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "luxury",
            "family"
        ],

        tags: [
            "luxury-sedan",
            "executive",
            "comfort",
            "technology"
        ],

        image: "https://hips.hearstapps.com/mtg-prod/68cb4ca487a2260002167346/01-2026-audi-a8-front-view.jpg",

        description:
            "Berlina de lujo centrada en el confort, la tecnología y la elegancia."
    },

    {
        id: "audi-a6",
        brand: "Audi",
        model: "A6",
        year: 2026,
        price: 65000,

        body: "family",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 8,
        exclusivity: 7,
        practicality: 8,
        performance: 7,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "family",
            "daily",
            "highway",
            "luxury",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "daily",
            "mixed"
        ],

        tags: [
            "wagon",
            "executive",
            "premium",
            "family",
            "comfort",
            "daily"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/a250112-medium-67c72884bca86.jpg?crop=0.451xw:0.401xh;0.159xw,0.260xh&resize=980:*",

        description:
            "Berlina ejecutiva premium que combina confort, tecnología, espacio y una conducción refinada para el uso diario y los viajes largos."
    },

    {
        id: "audi-rsq8",
        brand: "Audi",
        model: "RS Q8",
        year: 2026,
        price: 160000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 9,
        exclusivity: 8,
        practicality: 8,
        performance: 10,
        comfort: 9,
        technology: 10,

        trunk: 9,

        budgetLevel: 6,

        use: [
            "sport",
            "family",
            "luxury",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "luxury"
        ],

        tags: [
            "performance-suv",
            "luxury",
            "sport",
            "family"
        ],

        image: "https://autohebdosport.com/images/coches/noticias/audi-q8-2024/audi-q8_01.jpg",

        description:
            "SUV deportivo de gran potencia que combina espacio, lujo y prestaciones."
    },


    {
        id: "audi-q5",
        brand: "Audi",
        model: "Q5",
        year: 2026,
        price: 65000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 8,
        exclusivity: 7,
        practicality: 9,
        performance: 7,
        comfort: 9,
        technology: 9,

        trunk: 9,

        budgetLevel: 3,

        use: [
            "family",
            "luxury",
            "daily",
            "city",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "daily",
            "premium"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/a243951-large-66d1aa80ba08d.jpg?crop=0.7498666666666667xw:1xh;center,top&resize=1200:*",

        description:
            "SUV premium equilibrado con buen espacio interior, confort y tecnología."
    },


    /* =====================================================
       ASTON MARTIN
       ===================================================== */

    {
        id: "aston-martin-vantage",
        brand: "Aston Martin",
        model: "Vantage",
        year: 2026,
        price: 180000,

        body: "sports",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 3,
        performance: 10,
        comfort: 8,
        technology: 9,

        trunk: 3,

        budgetLevel: 7,

        use: [
            "sport",
            "luxury",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "luxury",
            "exclusive",
            "grand-tourer"
        ],

        image: "https://www.diariomotor.com/imagenes/2024/05/aston-martin-vantage-2024-prueba-241-mdm.jpg?class=XL",

        description:
            "Un deportivo británico que combina diseño elegante, lujo y prestaciones de alto nivel."
    },

    {
        id: "aston-martin-vantage-roadster",
        brand: "Aston Martin",
        model: "Vantage Roadster",
        year: 2026,
        price: 185000,

        body: "convertible",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 3,
        performance: 10,
        comfort: 8,
        technology: 9,

        trunk: 3,

        budgetLevel: 7,

        use: [
            "sport",
            "luxury",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "luxury",
            "exclusive",
            "grand-tourer"
        ],

        image: "https://imageio.forbes.com/specials-images/imageserve/681fbe8f1e8809e6dcbe5fcb/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",

        description:
            "Un deportivo británico que combina diseño elegante, lujo y prestaciones de alto nivel."
    },

    {
        id: "aston-martin-db12",
        brand: "Aston Martin",
        model: "DB12",
        year: 2026,
        price: 240000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 9,
        luxury: 10,
        exclusivity: 10,
        practicality: 4,
        performance: 10,
        comfort: 10,
        technology: 9,

        trunk: 4,

        budgetLevel: 8,

        use: [
            "luxury",
            "sport",
            "weekend",
            "highway"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "luxury",
            "sport",
            "exclusivity"
        ],

        tags: [
            "grand-tourer",
            "luxury",
            "exclusive",
            "coupe"
        ],

        image: "https://static.motor.es/fotos-jato/aston-martin/uploads/aston-martin-db12-6658f40794f5a.jpg",

        description:
            "Gran turismo británico de lujo que combina prestaciones, artesanía y una imagen extremadamente exclusiva."
    },


    /* =====================================================
       FERRARI
       ===================================================== */

    {
        id: "ferrari-roma",
        brand: "Ferrari",
        model: "Roma",
        year: 2026,
        price: 250000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 4,
        performance: 10,
        comfort: 8,
        technology: 10,

        trunk: 4,

        budgetLevel: 8,

        use: [
            "sport",
            "luxury",
            "weekend",
            "highway"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "supercar",
            "grand-tourer",
            "luxury",
            "exclusive"
        ],

        image: "https://www.diariomotor.com/imagenes/2020/09/ferrari-roma-elegancia-potencia-718288.jpg?class=XL",

        description:
            "Gran turismo italiano de diseño elegante y prestaciones excepcionales."
    },

        {
        id: "ferrari-roma-spider",
        brand: "Ferrari",
        model: "Roma Spider",
        year: 2026,
        price: 260000,

        body: "convertible",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 4,
        performance: 10,
        comfort: 8,
        technology: 10,

        trunk: 4,

        budgetLevel: 8,

        use: [
            "sport",
            "luxury",
            "weekend",
            "highway"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "supercar",
            "grand-tourer",
            "luxury",
            "exclusive"
        ],

        image: "https://www.dmegtclub.com/wp-content/uploads/2024/08/Ferrari_Roma_Spider.jpg",

        description:
            "Gran turismo italiano de diseño elegante y prestaciones excepcionales."
    },

    {
        id: "ferrari-296-gtb",
        brand: "Ferrari",
        model: "296 GTB",
        year: 2026,
        price: 300000,

        body: "sports",
        doors: 2,
        seats: 2,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 4,
        performance: 10,
        comfort: 7,
        technology: 10,

        trunk: 2,

        budgetLevel: 9,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "supercar",
            "hybrid",
            "exclusive",
            "performance"
        ],

        image: "https://bringatrailer.com/wp-content/uploads/2026/04/2022_ferrari_296-gtb_id-113065122-2022-ferrari-296-gtb-9-20467.jpg",

        description:
            "Superdeportivo italiano con tecnología híbrida y unas prestaciones de primer nivel."
    },

     {
        id: "ferrari-296-gts",
        brand: "Ferrari",
        model: "296 GTS",
        year: 2026,
        price: 330000,

        body: "convertible",
        doors: 2,
        seats: 2,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 3,
        performance: 10,
        comfort: 7,
        technology: 10,

        trunk: 2,

        budgetLevel: 9,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "supercar",
            "hybrid",
            "exclusive",
            "performance"
        ],

        image: "https://cdn.motor1.com/images/mgl/XBBowp/s1/ferrari-296-gts.jpg",

        description:
            "Superdeportivo italiano con tecnología híbrida y unas prestaciones de primer nivel."
    },

    /* =====================================================
       LAMBORGHINI
       ===================================================== */

    {
        id: "lamborghini-huracan",
        brand: "Lamborghini",
        model: "Huracán",
        year: 2026,
        price: 280000,

        body: "sports",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 9,
        exclusivity: 10,
        practicality: 3,
        performance: 10,
        comfort: 6,
        technology: 9,

        trunk: 2,

        budgetLevel: 9,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "supercar",
            "exclusive",
            "performance",
            "exotic"
        ],

        image: "https://parkers-images.bauersecure.com/wp-images/22061/cut-out/930x620/lamborghini-huracan-01.jpg",

        description:
            "Superdeportivo italiano de diseño radical y prestaciones espectaculares."
    },


    {
        id: "lamborghini-urus",
        brand: "Lamborghini",
        model: "Urus",
        year: 2026,
        price: 250000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 10,
        luxury: 10,
        exclusivity: 10,
        practicality: 7,
        performance: 10,
        comfort: 8,
        technology: 10,

        trunk: 8,

        budgetLevel: 8,

        use: [
            "sport",
            "luxury",
            "family",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "performance-suv",
            "super-suv",
            "luxury",
            "exclusive"
        ],

        image: "https://cdn.motor1.com/images/mgl/nAblMo/s1/2025-lamborghini-urus-se-review-09.jpg",

        description:
            "SUV de altas prestaciones con el diseño y carácter agresivo característico de Lamborghini."
    },


    /* =====================================================
       BENTLEY
       ===================================================== */

    {
        id: "bentley-continental-gt",
        brand: "Bentley",
        model: "Continental GT",
        year: 2026,
        price: 260000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 10,
        exclusivity: 10,
        practicality: 4,
        performance: 9,
        comfort: 10,
        technology: 10,

        trunk: 4,

        budgetLevel: 8,

        use: [
            "luxury",
            "sport",
            "highway",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "luxury",
            "exclusivity",
            "sport"
        ],

        tags: [
            "grand-tourer",
            "luxury",
            "exclusive",
            "comfort"
        ],

        image: "https://www.edmunds.com/assets/m/cs/cms/9d655cd2-28a4-415e-b8fa-61fc43b5267e/2026_Bentley_Continental_GT_S_Thunder_KB_02_815.jpg",

        description:
            "Gran turismo de lujo británico que combina materiales artesanales, confort y prestaciones."
    },


    {
        id: "bentley-bentayga",
        brand: "Bentley",
        model: "Bentayga",
        year: 2026,
        price: 240000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 7,
        luxury: 10,
        exclusivity: 10,
        practicality: 8,
        performance: 8,
        comfort: 10,
        technology: 10,

        trunk: 8,

        budgetLevel: 8,

        use: [
            "luxury",
            "family",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "luxury",
            "family",
            "exclusivity"
        ],

        tags: [
            "luxury-suv",
            "exclusive",
            "comfort",
            "family"
        ],

        image: "https://www.topgear.com/sites/default/files/cars-car/image/2025/06/1-Bentley-Bentayga-Speed-review-2025-UK_0.jpg",

        description:
            "SUV de lujo extremo con un enfoque especial en confort, exclusividad y calidad de materiales."
    },


    /* =====================================================
       RANGE ROVER
       ===================================================== */

    {
        id: "range-rover",
        brand: "Range Rover",
        model: "Range Rover",
        year: 2026,
        price: 150000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 10,
        exclusivity: 10,
        practicality: 9,
        performance: 8,
        comfort: 10,
        technology: 10,

        trunk: 9,

        budgetLevel: 6,

        use: [
            "luxury",
            "family",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "luxury",
            "family",
            "exclusivity"
        ],

        tags: [
            "luxury-suv",
            "family",
            "comfort",
            "exclusive"
        ],

        image: "https://www.diariomotor.com/imagenes/2021/10/range-rover-2022-1021-86-61784f6b31244.jpg?class=XL",

        description:
            "SUV de lujo reconocido por su confort, capacidad todoterreno y presencia."
    },

{
        id: "land-rover-defender",
        brand: "Land Rover",
        model: "Defender",
        year: 2026,
        price: 75000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 8,
        exclusivity: 9,
        practicality: 10,
        performance: 8,
        comfort: 8,
        technology: 9,

        trunk: 10,

        budgetLevel: 4,

        use: [
            "family",
            "daily",
            "highway",
            "offroad",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "offroad",
            "mixed"
        ],

        idealFor: [
            "family",
            "mixed",
            "luxury"
        ],

        tags: [
            "suv",
            "offroad",
            "premium",
            "family",
            "practical",
            "exclusive"
        ],

        image: "https://images.ctfassets.net/uaddx06iwzdz/2jn2GDP4HGdrO6zIhcEy58/d568bcf98bb6fa8c0b6409aa30871305/land-rover-defender-2026__2_.jpg",

        description:
            "SUV de carácter aventurero que combina una gran capacidad fuera del asfalto con espacio, personalidad y confort."
    },

    {
        id: "range-rover-sport",
        brand: "Range Rover",
        model: "Sport",
        year: 2026,
        price: 170000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 9,
        exclusivity: 9,
        practicality: 8,
        performance: 8,
        comfort: 9,
        technology: 10,

        trunk: 8,

        budgetLevel: 5,

        use: [
            "sport",
            "luxury",
            "family",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "family"
        ],

        tags: [
            "sport-suv",
            "luxury",
            "family",
            "performance"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/2023-land-rover-range-rover-sport-first-edition-101-1663595727.jpg",

        description:
            "SUV premium que añade un carácter más deportivo sin perder el lujo y confort característicos."
    },


    /* =====================================================
       VOLVO
       ===================================================== */

    {
        id: "volvo-s90",
        brand: "Volvo",
        model: "S90",
        year: 2026,
        price: 65000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 8,
        exclusivity: 7,
        practicality: 8,
        performance: 6,
        comfort: 10,
        technology: 9,

        trunk: 8,

        budgetLevel: 3,

        use: [
            "family",
            "daily",
            "highway",
            "luxury",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "daily",
            "mixed"
        ],

        tags: [
            "sedan",
            "premium",
            "executive",
            "family",
            "comfort",
            "luxury"
        ],

        image: "https://images.prismic.io/carwow/05e7a1dc-1a49-4575-aeb4-af18ad804b1c_3_4+delantera+estatica.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Berlina escandinava de carácter premium orientada al confort, la elegancia, la seguridad y los viajes largos."
    },

    {
        id: "volvo-xc90",
        brand: "Volvo",
        model: "XC90",
        year: 2026,
        price: 75000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 8,
        exclusivity: 7,
        practicality: 10,
        performance: 6,
        comfort: 10,
        technology: 9,

        trunk: 10,

        budgetLevel: 3,

        use: [
            "family",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "family",
            "mixed"
        ],

        tags: [
            "suv",
            "7-seats",
            "family",
            "safety",
            "comfort"
        ],

        image: "https://images.prismic.io/carwow/Z1nBw5bqstJ98Vyn_LHDVolvoXC902025-16.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "SUV familiar de hasta siete plazas con gran confort y enfoque práctico."
    },


    {
        id: "volvo-xc60",
        brand: "Volvo",
        model: "XC60",
        year: 2026,
        price: 60000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 8,
        exclusivity: 7,
        practicality: 9,
        performance: 7,
        comfort: 10,
        technology: 9,

        trunk: 9,

        budgetLevel: 3,

        use: [
            "family",
            "daily",
            "highway",
            "luxury"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "mixed",
            "luxury"
        ],

        tags: [
            "suv",
            "family",
            "comfort",
            "safety",
            "premium"
        ],

        image: "https://carwow-es-wp-0.imgix.net/Volvo-XC60-2026-wallpaper.jpg?auto=format&cs=tinysrgb&fit=crop&h=&ixlib=rb-1.1.0&q=60&w=1600",

        description:
            "SUV premium de tamaño medio con especial atención al confort y la seguridad."
    },


    /* =====================================================
       VOLKSWAGEN
       ===================================================== */

    {
        id: "volkswagen-tiguan",
        brand: "Volkswagen",
        model: "Tiguan",
        year: 2026,
        price: 45000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 5,
        luxury: 6,
        exclusivity: 5,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 8,

        trunk: 9,

        budgetLevel: 1,

        use: [
            "family",
            "daily",
            "city",
            "mixed"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "family",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "daily",
            "practical",
            "efficient"
        ],

        image: "https://images.prismic.io/carwow/e18af23c-42c4-43b0-866f-52af244a1c84_LHD+Volkswagen+Tiguan+2024+Exterior-3.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "SUV práctico y equilibrado pensado para el uso diario y familiar."
    },


    {
        id: "volkswagen-golf-gti",
        brand: "Volkswagen",
        model: "Golf GTI",
        year: 2026,
        price: 50000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 8,
        luxury: 6,
        exclusivity: 6,
        practicality: 9,
        performance: 8,
        comfort: 8,
        technology: 8,

        trunk: 8,

        budgetLevel: 2,

        use: [
            "sport",
            "family",
            "daily",
            "city"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "sport",
            "family",
            "mixed"
        ],

        tags: [
            "hot-hatch",
            "sport",
            "daily",
            "practical"
        ],

        image: "https://media.ed.edmunds-media.com/volkswagen/golf-gti/2026/oem/2026_volkswagen_golf-gti_4dr-hatchback_autobahn_fq_oem_1_1280.jpg",

        description:
            "Compacto deportivo que combina prestaciones, practicidad y facilidad de uso diario."
    },

    {
        id: "volkswagen-t-roc",
        brand: "Volkswagen",
        model: "T-Roc",
        year: 2026,
        price: 38000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 6,
        luxury: 6,
        exclusivity: 5,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 9,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "family",
            "mixed"
        ],

        tags: [
            "suv",
            "compact-suv",
            "family",
            "daily",
            "hybrid",
            "practical"
        ],

        image: "https://www.shots.media/wp-content/uploads/2025/11/neutroc-1170x530.jpg",

        description:
            "SUV compacto de Volkswagen que combina diseño, tecnología, espacio y practicidad para el uso diario."
    },

    {
        id: "volkswagen-golf-r",
        brand: "Volkswagen",
        model: "Golf R",
        year: 2026,
        price: 55000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 6,
        exclusivity: 6,
        practicality: 9,
        performance: 9,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 2,

        use: [
            "sport",
            "daily",
            "family",
            "city"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "mixed"
        ],

        tags: [
            "hot-hatch",
            "sport",
            "daily",
            "performance"
        ],

        image: "https://media.ed.edmunds-media.com/volkswagen/golf-r/2026/oem/2026_volkswagen_golf-r_4dr-hatchback_base_fq_oem_4_1600.jpg",

        description:
            "Compacto de altas prestaciones con tracción integral y gran versatilidad."
    },

    {
        id: "volkswagen-golf",
        brand: "Volkswagen",
        model: "Golf",
        year: 2026,
        price: 36000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 6,
        luxury: 6,
        exclusivity: 5,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "family",
            "city",
            "mixed"
        ],

        tags: [
            "hatchback",
            "compact",
            "daily",
            "family",
            "practical"
        ],

        image: "https://www.cochesyconcesionarios.com/media/cache/1170x780/uploads/volkswagen/golf/8/ha/volkswagen-golf-01-edad2f9c76afb264c2c87dd2bafb22dc4768d611.jpeg",

        description:
            "Compacto de referencia orientado al uso diario que combina practicidad, confort, tecnología y un comportamiento equilibrado."
    },



    /* =====================================================
       MINI
       ===================================================== */

    {
        id: "mini-cooper",
        brand: "MINI",
        model: "Cooper",
        year: 2026,
        price: 32000,

        body: "hatchback",
        doors: 3,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 7,
        luxury: 6,
        exclusivity: 7,
        practicality: 6,
        performance: 6,
        comfort: 7,
        technology: 9,

        trunk: 5,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "sport",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "city",
            "daily",
            "sport"
        ],

        tags: [
            "hatchback",
            "premium",
            "city",
            "sport",
            "compact"
        ],

        image: "https://www.deco.proteste.pt/-/media/edideco/images/home/auto/carros_eletricos/green-ncap/greenncap.jpg?rev=4dbaf37e-46ae-41b2-91f7-bb82a2769ce7&mw=660&hash=1F39E53D412546165ADFD5EE22217C36",

        description:
            "Compacto premium de personalidad marcada, especialmente ágil en ciudad y con un carácter más divertido que la mayoría de sus rivales."
    },

    {
        id: "mini-cooper-5-puertas",
        brand: "MINI",
        model: "Cooper 5 Puertas",
        year: 2026,
        price: 35000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 6,
        luxury: 6,
        exclusivity: 7,
        practicality: 8,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 7,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "mixed",
            "highway"
        ],

        environment: [
            "city",
            "mixed",
            "highway"
        ],

        idealFor: [
            "city",
            "daily",
            "family",
            "mixed"
        ],

        tags: [
            "hatchback",
            "premium",
            "compact",
            "family",
            "daily",
            "city"
        ],

        image: "https://cdn.motor1.com/images/mgl/40Yj7J/s1/mini-cooper-s-5-porte-paul-smith-edition-2026.jpg",

        description:
            "Versión de cinco puertas del MINI Cooper que mantiene su personalidad y facilidad de conducción con mayor practicidad para el día a día."
    },

    {
        id: "mini-cooper-cabrio",
        brand: "MINI",
        model: "Cooper Cabrio",
        year: 2026,
        price: 42000,

        body: "convertible",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 7,
        luxury: 7,
        exclusivity: 8,
        practicality: 4,
        performance: 6,
        comfort: 7,
        technology: 9,

        trunk: 4,

        budgetLevel: 2,

        use: [
            "sport",
            "weekend",
            "city",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "weekend",
            "city"
        ],

        tags: [
            "convertible",
            "premium",
            "city",
            "sport",
            "lifestyle"
        ],

        image: "https://media.ed.edmunds-media.com/mini/cooper/2026/oem/2026_mini_cooper_convertible_jcw-iconic_fq_oem_1_1280.jpg",

        description:
            "Descapotable compacto con el carácter del MINI y una orientación especialmente atractiva para conducción urbana y de ocio."
    },

    {
        id: "mini-aceman",
        brand: "MINI",
        model: "Aceman",
        year: 2026,
        price: 39000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 7,
        luxury: 6,
        exclusivity: 8,
        practicality: 8,
        performance: 7,
        comfort: 8,
        technology: 10,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "city",
            "daily",
            "family",
            "mixed"
        ],

        tags: [
            "suv",
            "electric",
            "compact-suv",
            "premium",
            "city",
            "technology"
        ],

        image: "https://www.thecarexpert.co.uk/wp-content/uploads/2025/01/mini-aceman-er-wallpaper-1920x960.jpg",

        description:
            "Crossover eléctrico compacto que combina el diseño de MINI con una mayor versatilidad y una clara orientación urbana."
    },

    {
        id: "mini-john-cooper-works",
        brand: "MINI",
        model: "John Cooper Works",
        year: 2026,
        price: 48000,

        body: "hatchback",
        doors: 3,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 10,
        luxury: 6,
        exclusivity: 8,
        practicality: 5,
        performance: 9,
        comfort: 6,
        technology: 9,

        trunk: 5,

        budgetLevel: 2,

        use: [
            "sport",
            "weekend",
            "daily",
            "city"
        ],

        environment: [
            "city",
            "mixed",
            "highway"
        ],

        idealFor: [
            "sport",
            "weekend"
        ],

        tags: [
            "hatchback",
            "sports-car",
            "hot-hatch",
            "performance",
            "premium"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/2025-mini-cooper-jcw-coupe-1584-67f9166f9b3ca.jpg?crop=0.608xw:0.455xh;0.102xw,0.490xh&resize=1200:*",

        description:
            "Hot hatch compacto de altas prestaciones que lleva el carácter deportivo de MINI a un nivel mucho más radical."
    },


    /* =====================================================
       TOYOTA
       ===================================================== */

    {
        id: "toyota-gr-supra",
        brand: "Toyota",
        model: "GR Supra",
        year: 2026,
        price: 70000,

        body: "sports",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 6,
        exclusivity: 8,
        practicality: 3,
        performance: 9,
        comfort: 6,
        technology: 7,

        trunk: 3,

        budgetLevel: 3,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "coupe",
            "enthusiast",
            "performance"
        ],

        image: "https://di-uploads-pod11.dealerinspire.com/germaintoyotaofcolumbus/uploads/2025/07/Toyota-GR-Supra-Exterior.webp",

        description:
            "Un deportivo compacto centrado en las sensaciones de conducción y el diseño."
    },


    {
        id: "toyota-land-cruiser",
        brand: "Toyota",
        model: "Land Cruiser",
        year: 2026,
        price: 80000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 7,
        exclusivity: 7,
        practicality: 10,
        performance: 8,
        comfort: 8,
        technology: 8,

        trunk: 10,

        budgetLevel: 4,

        use: [
            "family",
            "daily",
            "offroad",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "offroad"
        ],

        idealFor: [
            "family",
            "mixed"
        ],

        tags: [
            "suv",
            "7-seats",
            "offroad",
            "family",
            "practical"
        ],

        image: "https://cdn.motor1.com/images/mgl/ZnzGGo/s1/toyota-land-cruiser-icon-2026.jpg",

        description:
            "SUV de gran capacidad conocido por su robustez, espacio y capacidad fuera del asfalto."
    },


    {
        id: "toyota-rav4",
        brand: "Toyota",
        model: "RAV4",
        year: 2026,
        price: 45000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 6,
        exclusivity: 5,
        practicality: 10,
        performance: 6,
        comfort: 8,
        technology: 8,

        trunk: 10,

        budgetLevel: 1,

        use: [
            "family",
            "city",
            "daily",
            "mixed"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "family",
            "city",
            "mixed"
        ],

        tags: [
            "suv",
            "hybrid",
            "family",
            "efficient",
            "practical"
        ],

        image: "https://www.autopista.es/uploads/s1/14/20/93/07/2026-toyota-rav4-phev-grspor-08-2048x1365.webp",

        description:
            "SUV híbrido práctico y eficiente para el uso diario y familiar."
    },

    {
        id: "toyota-yaris",
        brand: "Toyota",
        model: "Yaris",
        year: 2026,
        price: 21500,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 5,
        luxury: 5,
        exclusivity: 5,
        practicality: 9,
        performance: 5,
        comfort: 8,
        technology: 8,

        trunk: 7,

        budgetLevel: 1,

        use: [
            "city",
            "daily",
            "family",
            "mixed"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "city",
            "daily",
            "family"
        ],

        tags: [
            "hatchback",
            "hybrid",
            "city",
            "compact",
            "efficient",
            "daily"
        ],

        image: "https://content.fastly.ccdn.es/pro/cnet/images/42/424e9e7b-f760-4deb-9b07-e5c7e7012133?rule=original",

        description:
            "Urbano híbrido compacto y eficiente especialmente adecuado para ciudad y uso diario."
    },

    {
        id: "toyota-gr-yaris",
        brand: "Toyota",
        model: "GR Yaris",
        year: 2026,
        price: 50000,

        body: "hatchback",
        doors: 3,
        seats: 4,

        fuel: "gasoline",
        transmission: "manual",
        drive: "awd",

        sportiness: 10,
        luxury: 5,
        exclusivity: 9,
        practicality: 6,
        performance: 10,
        comfort: 6,
        technology: 8,

        trunk: 5,

        budgetLevel: 2,

        use: [
            "sport",
            "weekend",
            "daily",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "weekend"
        ],

        tags: [
            "hot-hatch",
            "hatchback",
            "sports-car",
            "awd",
            "performance",
            "rally"
        ],

        image: "https://cdn.motor1.com/images/mgl/2N2LGg/s3/toyota-gr-yaris-aero-performance-package-2025.jpg",

        description:
            "Hot hatch compacto de altas prestaciones inspirado en la competición, con tracción integral y un enfoque claramente deportivo."
    },

    {
        id: "toyota-corolla",
        brand: "Toyota",
        model: "Corolla",
        year: 2026,
        price: 32000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 4,
        luxury: 5,
        exclusivity: 4,
        practicality: 9,
        performance: 5,
        comfort: 8,
        technology: 8,

        trunk: 7,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "city",
            "family",
            "mixed"
        ],

        tags: [
            "hatchback",
            "compact",
            "hybrid",
            "family",
            "practical",
            "value"
        ],

        image: "https://www.diariomotor.com/imagenes/2021/09/toyota-corolla-hibrido-oferta-septiembre-2021-exterior-01.jpg?class=XL",

        description:
            "Compacto híbrido práctico y eficiente, especialmente adecuado para quienes buscan facilidad de uso y costes contenidos."
    },


    {
        id: "toyota-gr86",
        brand: "Toyota",
        model: "GR86",
        year: 2026,
        price: 45000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "manual",
        drive: "rwd",

        sportiness: 9,
        luxury: 5,
        exclusivity: 7,
        practicality: 4,
        performance: 8,
        comfort: 6,
        technology: 7,

        trunk: 4,

        budgetLevel: 1,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport"
        ],

        tags: [
            "sports-car",
            "coupe",
            "manual",
            "enthusiast",
            "affordable-sport"
        ],

        image: "https://images.prismic.io/carwow/15e73a06-e19b-40f6-8a7d-542abc8dd71b_Toyota+GR86-31.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Coupé ligero centrado en la diversión y la conducción deportiva."
    },


    /* =====================================================
       LEXUS
       ===================================================== */

    {
        id: "lexus-rx",
        brand: "Lexus",
        model: "RX",
        year: 2026,
        price: 80000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 9,
        exclusivity: 8,
        practicality: 9,
        performance: 7,
        comfort: 10,
        technology: 9,

        trunk: 9,

        budgetLevel: 4,

        use: [
            "family",
            "luxury",
            "daily",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "luxury",
            "mixed"
        ],

        tags: [
            "luxury-suv",
            "hybrid",
            "comfort",
            "family"
        ],

        image: "https://media.ed.edmunds-media.com/lexus/rx/2026/oem/2026_lexus_rx_4dr-suv_350-premium-plus_fq_oem_1_1600.jpg",

        description:
            "SUV premium orientado al confort, refinamiento y tecnología híbrida."
    },

    {
        id: "lexus-nx",
        brand: "Lexus",
        model: "NX",
        year: 2026,
        price: 65000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 9,
        exclusivity: 8,
        practicality: 9,
        performance: 7,
        comfort: 9,
        technology: 9,

        trunk: 9,

        budgetLevel: 3,

        use: [
            "family",
            "luxury",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "luxury",
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "premium",
            "luxury",
            "hybrid",
            "family",
            "comfort"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/2024-lexus-nx350-f-sport-exterior-101-641b5446177c1.jpg?crop=0.788xw:0.664xh;0.115xw,0.233xh&resize=1200:*",

        description:
            "SUV premium híbrido que combina refinamiento, confort, tecnología y practicidad para el día a día."
    },


    {
        id: "lexus-lc500",
        brand: "Lexus",
        model: "LC 500",
        year: 2026,
        price: 120000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 9,
        luxury: 10,
        exclusivity: 9,
        practicality: 4,
        performance: 9,
        comfort: 9,
        technology: 9,

        trunk: 4,

        budgetLevel: 5,

        use: [
            "sport",
            "luxury",
            "weekend",
            "highway"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "grand-tourer",
            "coupe",
            "luxury",
            "comfort"
        ],

        image: "https://www.diariomotor.com/imagenes/2025/07/LC-500-Inspiration-Series-1-687e00f984441.jpg?class=XL",

        description:
            "Gran turismo japonés con diseño distintivo, motor potente y elevado nivel de confort."
    },


    /* =====================================================
       JAGUAR
       ===================================================== */

    {
        id: "jaguar-f-type",
        brand: "Jaguar",
        model: "F-Type",
        year: 2026,
        price: 110000,

        body: "coupe",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 9,
        exclusivity: 9,
        practicality: 3,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 3,

        budgetLevel: 5,

        use: [
            "sport",
            "weekend",
            "luxury"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity",
            "luxury"
        ],

        tags: [
            "sports-car",
            "coupe",
            "luxury",
            "exclusive"
        ],

        image: "https://robbreport.com/wp-content/uploads/2020/02/5-12.jpg",

        description:
            "Deportivo británico de diseño elegante y carácter emocional."
    },


    /* =====================================================
       MASERATI
       ===================================================== */

    {
        id: "maserati-granturismo",
        brand: "Maserati",
        model: "GranTurismo",
        year: 2026,
        price: 180000,

        body: "coupe",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 10,
        exclusivity: 10,
        practicality: 5,
        performance: 9,
        comfort: 9,
        technology: 9,

        trunk: 5,

        budgetLevel: 7,

        use: [
            "sport",
            "luxury",
            "highway",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "grand-tourer",
            "luxury",
            "exclusive",
            "coupe"
        ],

        image: "https://cdn.motor1.com/images/mgl/E6N0yv/s1/maserati-granturismo-2026-la-prova-su-strada.jpg",

        description:
            "Gran turismo italiano que combina deportividad, lujo y espacio para cuatro ocupantes."
    },


    {
        id: "maserati-levante",
        brand: "Maserati",
        model: "Levante",
        year: 2026,
        price: 110000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 8,
        luxury: 9,
        exclusivity: 9,
        practicality: 8,
        performance: 8,
        comfort: 9,
        technology: 8,

        trunk: 8,

        budgetLevel: 5,

        use: [
            "sport",
            "luxury",
            "family",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "luxury",
            "exclusivity"
        ],

        tags: [
            "luxury-suv",
            "sport-suv",
            "exclusive",
            "family"
        ],

        image: "https://autotijd.be/images/maserati/2022/levante/specs/maserati-levante-2022-specs-01.jpg",

        description:
            "SUV italiano de carácter deportivo con diseño exclusivo y orientación premium."
    },


    /* =====================================================
       TESLA
       ===================================================== */

    {
        id: "tesla-model-3-performance",
        brand: "Tesla",
        model: "Model 3 Performance",
        year: 2026,
        price: 60000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "awd",

        sportiness: 9,
        luxury: 7,
        exclusivity: 6,
        practicality: 9,
        performance: 9,
        comfort: 8,
        technology: 10,

        trunk: 9,

        budgetLevel: 3,

        use: [
            "sport",
            "daily",
            "city",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "mixed",
            "daily"
        ],

        tags: [
            "electric",
            "sports-sedan",
            "technology",
            "daily",
            "performance"
        ],

        image: "https://www.lanacion.com.ar/resizer/v2/el-valor-actualizado-del-tesla-model-3-en-mayo-de-7APD5RFI35GPJA5EPUHGOSNF7I.jpeg?auth=0f0ddc215a4c8b1275cc18b5b3ff9aa60dd8006a9357f3f923e15fde01c2cd98&width=1200&height=800&quality=70&smart=true",

        description:
            "Berlina eléctrica de altas prestaciones con gran tecnología y uso diario sencillo."
    },


    {
        id: "tesla-model-y",
        brand: "Tesla",
        model: "Model Y",
        year: 2026,
        price: 55000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "electric",
        transmission: "automatic",
        drive: "awd",

        sportiness: 6,
        luxury: 7,
        exclusivity: 6,
        practicality: 10,
        performance: 8,
        comfort: 8,
        technology: 10,

        trunk: 10,

        budgetLevel: 2,

        use: [
            "family",
            "city",
            "daily",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "city",
            "mixed"
        ],

        tags: [
            "electric",
            "suv",
            "family",
            "technology",
            "practical"
        ],

        image: "https://www.diariomotor.com/imagenes/2025/01/tesla-model-y-2025-1138587.jpg?class=XL",

        description:
            "SUV eléctrico práctico y tecnológico especialmente pensado para el uso diario."
    },

    /* =====================================================
       SEAT
       ===================================================== */

    {
        id: "seat-leon",
        brand: "SEAT",
        model: "León",
        year: 2026,
        price: 33000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 6,
        luxury: 5,
        exclusivity: 4,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 8,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "family",
            "city",
            "mixed"
        ],

        tags: [
            "hatchback",
            "compact",
            "family",
            "daily",
            "value"
        ],

        image: "https://fotos.quecochemecompro.com/seat-leon-hibrido/seat-leon-hibrido-vista-delantera-lateral.jpg?size=750x400",

        description:
            "Compacto práctico y equilibrado pensado para el día a día, con buen espacio, tecnología y facilidad de conducción."
    },


    /* =====================================================
       CUPRA
       ===================================================== */

    {
        id: "cupra-formentor",
        brand: "Cupra",
        model: "Formentor",
        year: 2026,
        price: 42000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 8,
        luxury: 6,
        exclusivity: 7,
        practicality: 8,
        performance: 8,
        comfort: 7,
        technology: 8,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "sport",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "sport",
            "performance",
            "daily",
            "premium",
            "coupe-suv"
        ],

        image: "https://cdn.motor1.com/images/mgl/nAgVyl/s3/cupra-formentor-beyond-2026.jpg",

        description:
            "SUV compacto de carácter deportivo que busca combinar diversión al volante con practicidad para el uso diario."
    },

    {
        id: "cupra-leon",
        brand: "CUPRA",
        model: "León",
        year: 2026,
        price: 43000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 8,
        luxury: 6,
        exclusivity: 7,
        practicality: 8,
        performance: 8,
        comfort: 7,
        technology: 9,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "sport",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "mixed"
        ],

        tags: [
            "hatchback",
            "sport",
            "compact",
            "performance",
            "daily"
        ],

        image: "https://images.prismic.io/carwow/ZyNqZa8jQArT0Dny_LHDCUPRALe%C3%B3n2024-07.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Compacto deportivo que combina una imagen agresiva y buenas prestaciones con suficiente practicidad para utilizarlo a diario."
    },


    /* =====================================================
       GENERALIST / FAMILY
       ===================================================== */

    {
        id: "dacia-sandero",
        brand: "Dacia",
        model: "Sandero",
        year: 2026,
        price: 14500,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "manual",
        drive: "fwd",

        sportiness: 3,
        luxury: 3,
        exclusivity: 2,
        practicality: 10,
        performance: 4,
        comfort: 7,
        technology: 7,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "city",
            "family"
        ],

        tags: [
            "hatchback",
            "budget",
            "city",
            "family",
            "practical",
            "value"
        ],

        image: "https://cdn-images.motor.es/image/m/1320w/fotos-noticias/2025/12/precio-dacia-sandero-2026-2025111364-1764589418_1.jpg",

        description:
            "Utilitario sencillo y muy práctico pensado para quienes buscan un coche nuevo funcional con un precio especialmente contenido."
    },

    {
        id: "renault-clio",
        brand: "Renault",
        model: "Clio",
        year: 2026,
        price: 23000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 4,
        luxury: 4,
        exclusivity: 3,
        practicality: 9,
        performance: 5,
        comfort: 7,
        technology: 8,

        trunk: 7,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "city",
            "daily",
            "family",
            "mixed"
        ],

        tags: [
            "hatchback",
            "compact",
            "city",
            "hybrid",
            "daily",
            "practical",
            "value"
        ],

        image: "https://car-images.bauersecure.com/wp-images/12770/renault-clio-2026-20.jpg",

        description:
            "Compacto urbano práctico y eficiente, pensado para el día a día y especialmente cómodo para moverse por ciudad."
    },

    {
        id: "renault-austral",
        brand: "Renault",
        model: "Austral",
        year: 2026,
        price: 38000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 5,
        luxury: 5,
        exclusivity: 4,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 9,

        budgetLevel: 1,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "hybrid",
            "daily",
            "practical",
            "technology"
        ],

        image: "https://www.diariomotor.com/imagenes/2025/12/Renault-Austral-2025-87-6989e212cfd74.jpg?class=XL",

        description:
            "SUV familiar orientado al uso diario que combina tecnología, espacio, eficiencia y facilidad de conducción."
    },

    {
        id: "hyundai-i30-n",
        brand: "Hyundai",
        model: "i30 N",
        year: 2026,
        price: 39000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "manual",
        drive: "fwd",

        sportiness: 10,
        luxury: 5,
        exclusivity: 7,
        practicality: 8,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "sport",
            "daily",
            "city",
            "highway",
            "mixed",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "daily",
            "weekend"
        ],

        tags: [
            "hot-hatch",
            "hatchback",
            "sport",
            "performance",
            "daily",
            "manual"
        ],

        image: "https://images.prismic.io/carwow/61ff55c8-1776-4ece-acd6-00fd1407bd0f_LHD+Hyundai+i30+N+exterior-03.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Compacto deportivo de cinco puertas que combina altas prestaciones y diversión al volante con una practicidad suficiente para el uso diario."
    },

    {
        id: "hyundai-santa-fe",
        brand: "Hyundai",
        model: "Santa Fe",
        year: 2026,
        price: 52000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 6,
        exclusivity: 6,
        practicality: 10,
        performance: 7,
        comfort: 9,
        technology: 9,

        trunk: 10,

        budgetLevel: 2,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "7-seats",
            "family",
            "hybrid",
            "practical",
            "comfort"
        ],

        image: "https://www.gaithersburghyundai.com/blogs/7859/wp-content/uploads/2026/01/800x400_-_6.jpg",

        description:
            "SUV familiar de siete plazas con mucho espacio interior, tecnología y un enfoque especialmente práctico."
    },

    {
        id: "hyundai-tucson",
        brand: "Hyundai",
        model: "Tucson",
        year: 2026,
        price: 38000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 5,
        luxury: 5,
        exclusivity: 4,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 8,

        trunk: 9,

        budgetLevel: 1,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "hybrid",
            "daily",
            "practical",
            "value"
        ],

        image: "https://www.hyundai.com/content/dam/hyundai/canarias/es/images/find-a-car/tucson-phev/2024/banner_tucson_phev_pc.jpg",

        description:
            "SUV familiar muy equilibrado que combina espacio, practicidad, tecnología y un precio contenido."
    },

    {
        id: "kia-sportage",
        brand: "Kia",
        model: "Sportage",
        year: 2026,
        price: 39000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 5,
        exclusivity: 4,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 8,

        trunk: 9,

        budgetLevel: 1,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "hybrid",
            "daily",
            "practical",
            "value"
        ],

        image: "https://cdn-images.motor.es/image/m/1320w/fotos-noticias/2025/08/lo-tiene-todo-por-menos-de-28000-un-suv-de-45-metros-con-7-anos-de-garantia-2025109497-1754383207_3.jpg",

        description:
            "SUV compacto y práctico pensado para el uso diario y familiar, con buen equilibrio entre tecnología, confort y precio."
    },

    {
        id: "honda-cr-v",
        brand: "Honda",
        model: "CR-V",
        year: 2026,
        price: 47000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "awd",

        sportiness: 5,
        luxury: 6,
        exclusivity: 5,
        practicality: 10,
        performance: 6,
        comfort: 9,
        technology: 8,

        trunk: 10,

        budgetLevel: 2,

        use: [
            "family",
            "daily",
            "city",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "daily",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "hybrid",
            "practical",
            "daily",
            "comfort"
        ],

        image: "https://www.diariomotor.com/imagenes/2023/09/honda-cr-v-2023-77-650435fb876c3.jpg?class=XL",

        description:
            "SUV híbrido de enfoque familiar que destaca por su espacio, practicidad, confort y facilidad de uso diario."
    },

    {
        id: "honda-civic",
        brand: "Honda",
        model: "Civic",
        year: 2026,
        price: 37000,

        body: "sedan",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 7,
        luxury: 6,
        exclusivity: 6,
        practicality: 8,
        performance: 7,
        comfort: 8,
        technology: 8,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed",
            "sport"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "sport",
            "family",
            "mixed"
        ],

        tags: [
            "sedan",
            "compact",
            "hybrid",
            "sport",
            "family",
            "daily"
        ],

        image: "https://automobiles.honda.com/-/media/Honda-Automobiles/Vehicles/2026/civic-si-sedan/Car-and-Diver-10Best-Cars-award-banner/2026-honda-civic-si-sedan-platinum-white-pearl-S.jpg?sc_lang=en",

        description:
            "Compacto híbrido que combina practicidad, eficiencia y un carácter de conducción más dinámico que otros modelos de la categoría."
    },

    {
        id: "skoda-fabia",
        brand: "Skoda",
        model: "Fabia",
        year: 2026,
        price: 23000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "manual",
        drive: "fwd",

        sportiness: 4,
        luxury: 5,
        exclusivity: 4,
        practicality: 9,
        performance: 5,
        comfort: 8,
        technology: 8,

        trunk: 9,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "family",
            "city",
            "mixed"
        ],

        tags: [
            "hatchback",
            "compact",
            "family",
            "practical",
            "daily"
        ],

        image: "https://images.prismic.io/carwow/aUP7H3NYClf9oZL7_LHDSkodaFabia1302026-6.jpg?auto=format&cs=tinysrgb&fit=max&q=60",

        description:
            "Compacto práctico y espacioso para su tamaño, pensado para quienes priorizan versatilidad, maletero y facilidad de uso."
    },

    {
        id: "skoda-kodiaq",
        brand: "Skoda",
        model: "Kodiaq",
        year: 2026,
        price: 45000,

        body: "suv",
        doors: 5,
        seats: 7,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 4,
        luxury: 6,
        exclusivity: 5,
        practicality: 10,
        performance: 6,
        comfort: 8,
        technology: 8,

        trunk: 10,

        budgetLevel: 1,

        use: [
            "family",
            "daily",
            "city",
            "highway"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "family",
            "mixed"
        ],

        tags: [
            "suv",
            "7-seats",
            "family",
            "practical",
            "value"
        ],

        image: "https://images.carexpert.com.au/resize/960/-/cms/v1/media/2025-09-2026-skoda-kodiaq-rs34skodakodiaqrs391e8d1c.jpg",

        description:
            "SUV familiar de siete plazas especialmente enfocado en espacio y practicidad."
    },


    {
        id: "peugeot-3008",
        brand: "Peugeot",
        model: "3008",
        year: 2026,
        price: 42000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 5,
        luxury: 6,
        exclusivity: 5,
        practicality: 9,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 9,

        budgetLevel: 1,

        use: [
            "family",
            "city",
            "daily",
            "mixed"
        ],

        environment: [
            "city",
            "mixed"
        ],

        idealFor: [
            "family",
            "city",
            "mixed"
        ],

        tags: [
            "suv",
            "family",
            "daily",
            "technology",
            "value"
        ],

        image: "https://www.topgear.com/sites/default/files/2024/09/PEUGEOT_3008_EXT_13.jpg",

        description:
            "SUV moderno y tecnológico orientado al uso diario y familiar."
    },

    {
        id: "peugeot-308",
        brand: "Peugeot",
        model: "308",
        year: 2026,
        price: 34000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "hybrid",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 5,
        luxury: 6,
        exclusivity: 5,
        practicality: 8,
        performance: 6,
        comfort: 8,
        technology: 9,

        trunk: 8,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "family",
            "highway",
            "mixed"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "city",
            "family",
            "mixed"
        ],

        tags: [
            "hatchback",
            "compact",
            "hybrid",
            "daily",
            "technology"
        ],

        image: "https://objetos-xlk.estaticos-marca.com/uploads/2025/11/18/691c28c109a53.jpeg",

        description:
            "Compacto moderno con diseño distintivo, tecnología y un equilibrio pensado para el uso diario."
    },

    /* =====================================================
       SPORT / AFFORDABLE
       ===================================================== */

    {
        id: "mazda-mx5",
        brand: "Mazda",
        model: "MX-5",
        year: 2026,
        price: 35000,

        body: "convertible",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "manual",
        drive: "rwd",

        sportiness: 9,
        luxury: 5,
        exclusivity: 7,
        practicality: 3,
        performance: 7,
        comfort: 6,
        technology: 7,

        trunk: 2,

        budgetLevel: 1,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "mixed"
        ],

        tags: [
            "convertible",
            "sports-car",
            "manual",
            "fun",
            "affordable-sport"
        ],

        image: "https://www.mazdausa.com/siteassets/vehicles/2026/mx-5-rf/04_btv/004_exterior/ext.-360s/club/46v-soul-red/e360-2026-mx5-rf-club-soulred-018.jpg",

        description:
            "Cabrio ligero y divertido diseñado para disfrutar especialmente de la conducción."
    },

    {
        id: "mazda-3",
        brand: "Mazda",
        model: "3",
        year: 2026,
        price: 35000,

        body: "hatchback",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "fwd",

        sportiness: 7,
        luxury: 7,
        exclusivity: 7,
        practicality: 7,
        performance: 6,
        comfort: 8,
        technology: 8,

        trunk: 7,

        budgetLevel: 1,

        use: [
            "daily",
            "city",
            "highway",
            "mixed",
            "sport"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "daily",
            "sport",
            "mixed"
        ],

        tags: [
            "hatchback",
            "compact",
            "premium",
            "sport",
            "daily"
        ],

        image: "https://media-assets.mazda.eu/image/upload/q_auto,f_auto,w_768/mazdaes/globalassets/cars/2027-mazda3-hatchback/assets/mme-mazda3-hatchback-hero-mobile.jpg?rnd=4a0343",

        description:
            "Compacto de diseño cuidado que ofrece una conducción más dinámica sin renunciar al confort y al uso diario."
    },

    {
        id: "chevrolet-corvette-stingray",
        brand: "Chevrolet",
        model: "Corvette Stingray",
        year: 2026,
        price: 110000,

        body: "sports",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 10,
        luxury: 8,
        exclusivity: 9,
        practicality: 3,
        performance: 10,
        comfort: 7,
        technology: 9,

        trunk: 4,

        budgetLevel: 5,

        use: [
            "sport",
            "weekend",
            "highway",
            "mixed"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "supercar",
            "coupe",
            "mid-engine",
            "performance"
        ],

        image: "https://static0.carbuzzimages.com/wordpress/wp-content/uploads/2024/03/763143-21.jpg",

        description:
            "Deportivo de motor central con prestaciones muy elevadas y una imagen exótica que lo sitúa cerca del territorio de los superdeportivos."
    },

    {
        id: "ford-mustang-convertible",
        brand: "Ford",
        model: "Mustang Convertible",
        year: 2026,
        price: 65000,

        body: "convertible",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "rwd",

        sportiness: 9,
        luxury: 6,
        exclusivity: 8,
        practicality: 5,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 5,

        budgetLevel: 3,

        use: [
            "sport",
            "weekend",
            "highway",
            "mixed"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "weekend",
            "exclusivity"
        ],

        tags: [
            "convertible",
            "muscle-car",
            "v8",
            "sports-car",
            "rwd"
        ],

        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqc4vXPRY3I_M-Chph31MHIrn2_1V2sryojktxHeNCXtYfnB9ZY6-m4gLE&s=10",

        description:
            "Descapotable de carácter americano con motor V8, diseño icónico y una experiencia de conducción especialmente emocional."
    },

    {
        id: "ford-mustang-gt",
        brand: "Ford",
        model: "Mustang GT",
        year: 2026,
        price: 65000,

        body: "sports",
        doors: 2,
        seats: 4,

        fuel: "gasoline",
        transmission: "manual",
        drive: "rwd",

        sportiness: 9,
        luxury: 6,
        exclusivity: 8,
        practicality: 5,
        performance: 9,
        comfort: 7,
        technology: 8,

        trunk: 5,

        budgetLevel: 3,

        use: [
            "sport",
            "weekend",
            "daily"
        ],

        environment: [
            "city",
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "muscle-car",
            "coupe",
            "manual",
            "performance"
        ],

        image: "https://e01-expansion.uecdn.es/assets/multimedia/imagenes/2026/05/15/17788229072930.jpg",

        description:
            "Coupé deportivo de inspiración americana con motor potente y diseño icónico."
    },


    {
        id: "nissan-z",
        brand: "Nissan",
        model: "Z",
        year: 2026,
        price: 60000,

        body: "coupe",
        doors: 2,
        seats: 2,

        fuel: "gasoline",
        transmission: "manual",
        drive: "rwd",

        sportiness: 9,
        luxury: 6,
        exclusivity: 7,
        practicality: 3,
        performance: 8,
        comfort: 6,
        technology: 8,

        trunk: 3,

        budgetLevel: 2,

        use: [
            "sport",
            "weekend"
        ],

        environment: [
            "highway",
            "mixed"
        ],

        idealFor: [
            "sport",
            "exclusivity"
        ],

        tags: [
            "sports-car",
            "coupe",
            "manual",
            "enthusiast"
        ],

        image: "https://cdn.motor1.com/images/mgl/W8KoVj/s1/2027-nissan-z.jpg",

        description:
            "Deportivo japonés de dos plazas con diseño inspirado en la historia del modelo Z."
    },


    /* =====================================================
       ROLLS-ROYCE
       ===================================================== */

    {
        id: "rolls-royce-ghost",
        brand: "Rolls-Royce",
        model: "Ghost",
        year: 2026,
        price: 350000,

        body: "sedan",
        doors: 4,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 4,
        luxury: 10,
        exclusivity: 10,
        practicality: 7,
        performance: 8,
        comfort: 10,
        technology: 10,

        trunk: 8,

        budgetLevel: 10,

        use: [
            "luxury",
            "family",
            "highway"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "luxury",
            "exclusivity"
        ],

        tags: [
            "ultra-luxury",
            "luxury-sedan",
            "exclusive",
            "comfort"
        ],

        image: "https://espirituracer.com/archivos/2017/11/rolls-royce-ghost-series-ii-1.webp",

        description:
            "Berlina de lujo artesanal con un nivel excepcional de confort, exclusividad y personalización."
    },


    {
        id: "rolls-royce-cullinan",
        brand: "Rolls-Royce",
        model: "Cullinan",
        year: 2026,
        price: 400000,

        body: "suv",
        doors: 5,
        seats: 5,

        fuel: "gasoline",
        transmission: "automatic",
        drive: "awd",

        sportiness: 4,
        luxury: 10,
        exclusivity: 10,
        practicality: 8,
        performance: 8,
        comfort: 10,
        technology: 10,

        trunk: 9,

        budgetLevel: 10,

        use: [
            "luxury",
            "family",
            "highway"
        ],

        environment: [
            "city",
            "highway"
        ],

        idealFor: [
            "luxury",
            "family",
            "exclusivity"
        ],

        tags: [
            "ultra-luxury",
            "luxury-suv",
            "exclusive",
            "comfort"
        ],

        image: "https://hips.hearstapps.com/hmg-prod/images/2025-rolls-royce-cullinan-series-2-pr-103-68d449e619fde.jpg?crop=0.829xw:0.700xh;0.160xw,0.149xh&resize=2048:*",

        description:
            "SUV de ultra lujo diseñado para ofrecer máximo confort, espacio y exclusividad."
    }

];


/* =========================================================
   OFFICIAL MODEL LINKS
   ========================================================= */

const officialUrls = {

    /* PORSCHE */

    "porsche-911-carrera":
        "https://www.porsche.com/spain/models/911/carrera-models/911-carrera/",

    "porsche-911-turbo-s":
        "https://www.porsche.com/spain/models/911/911-turbo-models/911-turbo-s/",

    "porsche-718-cayman":
        "https://www.porsche.com/spain/models/718/#modelRangeId=718",
    
    "porsche-718-boxster":
        "https://www.porsche.com/spain/models/718/#modelRangeId=718",

    "porsche-cayenne":
        "https://www.porsche.com/spain/models/cayenne/cayenne-models/cayenne/",

    "porsche-cayenne-electric":
        "https://www.porsche.com/spain/models/cayenne/cayenne-electric-models/cayenne-electric/",

    "porsche-macan":
        "https://www.porsche.com/spain/models/macan/macan-electric-models/macan-electric/",

    "porsche-macan-gasoline":
        "https://finder.porsche.com/es/es-ES/search/macan?model=macan&int_ref=globalnav&int_medium=link&int_id=inventory",


    "porsche-taycan":
        "https://www.porsche.com/spain/models/taycan/taycan-models/taycan/",

    "porsche-panamera":
        "https://www.porsche.com/spain/models/panamera/panamera-models/panamera/",

    /* BMW */

    "bmw-x1":
        "https://www.bmw.es/es/coches-bmw/x/x1/bmw-x1.html",

    "bmw-m4":
        "https://www.bmw.es/es/coches-bmw/m/bmw-4-series-m-models/caracteristicas-2024-g82.html",

    "bmw-m3":
        "https://www.bmw.es/es/coches-bmw/m/bmw-serie-3-modelo-m/caracteristicas-bmw-m3-berlina.html",

    "bmw-m5":
        "https://www.bmw.es/es/coches-bmw/m/m5-series/caracteristicas.html",

    "bmw-m240i":
        "https://www.bmw.es/es/coches-bmw/serie-2.html",

    "bmw-m240i-xdrive":
        "https://www.bmw.es/es/coches-bmw/serie-2.html",

    "bmw-m8":
        "https://www.bmw.es/es/coches-bmw/m.html",

    "bmw-m8-cabrio":
        "https://www.bmw.es/es/coches-bmw/m.html",

    "bmw-x3":
        "https://www.bmw.es/es/coches-bmw/x/x3/x3-2024-g45.html",

    "bmw-x5":
        "https://www.bmw.es/es-es/sl/stocklocator/results?filters=%257B%2522MARKETING_MODEL_RANGE%2522%253A%255B%2522X5_G05%2522%255D%252C%2522IS_INSTALLMENT%2522%253Afalse%252C%2522PURCHASE_ONLINE%2522%253A%255Btrue%255D%257D&sorting=PRICE_ASC",

    "bmw-x7":
        "https://www.bmw.es/es/coches-bmw/x/x7/bmw-x7-presentacion.html",

    "bmw-7-series":
        "https://www.bmw.es/es/coches-bmw/serie-7.html",

    "bmw-i5-m60":
        "https://www.bmw.es/es/coches-bmw/serie-5.html",

    "bmw-xm":
        "https://www.bmw.es/es/coches-bmw/m/xm/bmw-xm.html",

    "bmw-m5-touring":
        "https://www.bmw.es/es/coches-bmw/m/m5-series/m5-series-touring-2024-g99.html",

    "bmw-m135i":
        "https://www.bmw.es/es/coches-bmw/m/bmw-m-135/caracteristicas.html",

    "bmw-serie-1":
        "https://www.bmw.es/es/coches-bmw/serie-1/bmw-serie-1/caracteristicas.html#datos-tecnicos",

    "bmw-serie-2-coupe":
        "https://www.bmw.es/es/coches-bmw/serie-2/2-series-coupe/bmw-2er-coupe.html?clc=1a1aed01da11b01basaaf&gclsrc=aw.ds&tl=sea-gl-ES_BMW_NC_2%20COUPE%20MODEL_SPA_BG_ALO_%20_CONV_%20_SEAADW-mix-miy-.-sech-G42_BG_2%20COUPE%20MODEL_MUL_NONE-.-e-bmw%20serie%202%20coupe-.-.&gad_source=1&gad_campaignid=20390678302&gbraid=0AAAAABjoEg7EV4SCxiBbS-_HdF80yKCH9&gclid=CjwKCAjwqc_UBhBKEiwAWbl25htrRBJAnuIo2vFiec_vLVql0ZDBXP4yjM4oJaFbQvcFStaej1S7IRoCrc8QAvD_BwE",

    "bmw-serie-5-touring":
        "https://www.bmw.es/es/coches-bmw/vision-general-serie-5-bmw/5-series-touring/caracteristicas.html?clc=1a1ae201da11b01basaaf&gclsrc=aw.ds&tl=sea-gl-ES_BMW_NC_5%20TOURING%20MODEL_SPA_BG_ALO_%20_CONV_%20_SEAADW-mix-miy-.-sech-G61_BG_5%20TOURING%20MODEL_MUL_NONE-.-e-bmw%20serie%205%20touring-.-.&gad_source=1&gad_campaignid=20390678335&gbraid=0AAAAABjoEg7BJCNLBEy-yENjxhZuzYdgd&gclid=CjwKCAjwqc_UBhBKEiwAWbl25goL15XsnblTTHG3K75q6LNAsIgivJxFgFYcGHCjK0N4A7EEsByH0hoCJzcQAvD_BwE",

    "bmw-serie-4-coupe":
        "https://www.bmw.es/es/coches-bmw/serie-4/coupe/caracteristicas.html?clc=1a1aeq01da11b01basaaf&gclsrc=aw.ds&tl=sea-gl-ES_BMW_NC_4%20COUPE%20MODEL_SPA_BG_ALO_%20_CONV_%20_SEAADW-mix-miy-.-sech-G22_BG_4%20COUPE%20MODEL_MUL_NONE-.-e-bmw%20serie%204%20coup%C3%A9-.-.&gad_source=1&gad_campaignid=20390678323&gbraid=0AAAAABjoEg5D6siU2-uOziTslamtQaSXx&gclid=CjwKCAjwqc_UBhBKEiwAWbl25jYfPXCQHYfw-vuqVj2dEPc4EYIkSiz5FfVU8UuMJH977EDFyMlscBoCrhcQAvD_BwE",

    "bmw-430i-coupe":
        "https://www.bmwpremiumselection.es/serie-4/430i-coupe/",


    /* MERCEDES */

    "mercedes-amg-gt":
        "https://www.mercedes-benz.es/passengercars/models/coupe/amg-gt-2-door/overview.html/gt-63",

    "mercedes-amg-gt-4-door":
        "https://www.mercedes-benz.es/passengercars/models/coupe/amg-gt-4-door/overview.html/gt-63",

    "mercedes-amg-a45":
        "https://www.mercedes-benz.es/passengercars/models/hatchback/a-class/amg.html/a-45-s",

    "mercedes-gle":
        "https://www.mercedes-benz.es/passengercars/models/suv/gle/overview.html",

    "mercedes-gls":
        "https://www.mercedes-benz.es/passengercars/models/suv/gls/overview.html",

    "mercedes-s-class":
        "https://www.mercedes-benz.es/passengercars/models/saloon/s-class/overview.html",

    "mercedes-amg-g63":
        "https://www.mercedes-benz.es/passengercars/models/suv/g-class/amg.html",

    "mercedes-glb":
        "https://www.mercedes-benz.es/passengercars/models/suv/glb/overview.html",

    "mercedes-e-class":
        "https://www.mercedes-benz.es/passengercars/models/saloon/e-class/overview.html",

    "mercedes-amg-a35":
        "https://www.mercedes-benz.es/passengercars/models/hatchback/a-class/amg.html",

    "mercedes-amg-e53":
        "https://www.mercedes-benz.es/passengercars/models/estate/e-class/amg.html?srsltid=AfmBOorfnbg_7jMtGLaX0iHfLxxceNhRnhhY_wstthn6uVlxwhSkougT",

    "mercedes-amg-cle53":
        "https://www.mercedes-benz.es/passengercars/models/coupe/cle/amg.html?srsltid=AfmBOoqXMEcdohyrNT0uL7A9wR_Fnz_F4WKuh5ly62ui9qf8vpnJyInP",
        
    "mercedes-clase-a":
        "https://www.mercedes-benz.es/passengercars/models/hatchback/a-class/overview.html/standard?srsltid=AfmBOor9XiMYoGX5jVZq8dO7G7dxn0rUde7g3KwO2n3jqbNHMaADzJKH",

    "mercedes-cle-coupe":
        "https://www.mercedes-benz.es/passengercars/models/coupe/cle/overview.html?srsltid=AfmBOooNe8tSbf82u5R8OwPF0Mln4rfG6sgYHQ-300hTnnJiUn4ZcdI8",

    "mercedes-glc":
        "https://www.mercedes-benz.es/passengercars/models/suv/glc/overview.html/amg-line?srsltid=AfmBOoq_7dXK12awP-33u3m_DcPoWYseh_noBY6zBNfdg9Vf47qGQ1Tc",

    "mercedes-gle-coupe":
        "https://www.mercedes-benz.es/passengercars/models/suv/gle-coupe/overview.html?srsltid=AfmBOoo-R3-lj4kB4J3jYwWm1PXcWBhxXqeDbFGELL0zaJO6QtTs6512",

    "mercedes-amg-glc-53":
        "https://www.mercedes-benz.es/passengercars/models/suv/glc/amg.html?srsltid=AfmBOorN_QEYXRveIC_ZXqE6tYcUwhH_ucFIFOPmMZKBgUdCnGSqtPhW",

    "mercedes-class-e":
        "https://www.mercedes-benz.es/passengercars/models/estate/e-class/overview.html",


    /* AUDI */

    "audi-rs6":
        "https://www.audi.es/es/modelos/a6/rs-6-avant/",

    "audi-r8":
        "https://www.audi.es/es/modelos/r8/r8-coupe-v10-performance-quattro/",

    "audi-rs3":
        "https://www.audi.es/es/modelos/a3/rs-3-sedan/",

    "audi-s3":
        "https://www.audi.es/es/modelos/a3/s3-sportback/",

    "audi-q8":
        "https://www.audi.es/es/modelos/q8/q8-suv/",

    "audi-q7":
        "https://www.audi.es/es/modelos/q7/q7-suv/",

    "audi-a8":
        "https://www.audi.es/es/modelos/a8/a8/",

    "audi-rsq8":
        "https://www.audi.es/es/modelos/q8/rs-q8-suv-performance/",

    "audi-q5":
        "https://www.audi.es/es/modelos/q5/q5-suv/",

    "audi-rs3":
        "https://www.audi.es/es/modelos/a3/rs-3-sportback/",

    "audi-a3":
        "https://www.audi.es/es/modelos/a3/a3-sportback-e-hybrid/",

    "audi-s5-coupe":
        "https://www.audi.es/es/modelos/a5/s5-coupe/",

    "audi-a5-coupe":
        "https://www.audi.es/es/modelos/a5/a5-coupe/",

    "audi-q5-sportback":
        "https://www.audi.es/es/modelos/q5/q5-sportback/",

    "audi-q4-sportback-e-tron":
        "https://www.audi.es/es/modelos/q4-e-tron/q4-sportback-e-tron/",

    "audi-q3":
        "https://www.audi.es/es/modelos/q3/q3/",
    
    "audi-q3-sportback":
        "https://www.audi.es/es/modelos/q3/q3-sportback/",
           
    "audi-a6":
        "https://www.audi.es/es/modelos/a6/a6-allroad/",



    /* ASTON MARTIN */

    "aston-martin-vantage":
        "https://www.astonmartin.com/en/models/vantage-coupe",

    "aston-martin-vantage-roadster":
        "https://www.astonmartin.com/en/models/vantage-roadster",

    "aston-martin-db12":
        "https://www.astonmartin.com/en/models/db12/",


    /* FERRARI */

    "ferrari-roma":
        "https://www.ferrari.com/en-EN/auto/ferrari-roma",

    "ferrari-roma-spider":
        "https://www.ferrari.com/es-ES/auto/ferrari-roma-spider",

    "ferrari-296-gtb":
        "https://www.ferrari.com/en-EN/auto/296-gtb",

    "ferrari-296-gts":
        "https://www.ferrari.com/en-EN/auto/296-gts",


    /* LAMBORGHINI */

    "lamborghini-huracan":
        "https://preowned.lamborghini.com/es_es/hurac%C3%A1n/searchresults?subregions=Spain&model=Hurac%C3%A1n",

    "lamborghini-urus":
        "https://www.lamborghini.com/en-en/models/urus",


    /* BENTLEY */

    "bentley-continental-gt":
        "https://www.bentleymotors.com/en/models/continental-gt.html",

    "bentley-bentayga":
        "https://www.bentleymotors.com/en/models/bentayga.html",


    /* RANGE ROVER */

    "range-rover":
        "https://www.rangerover.com/es-es/range-rover/index.html",

    "range-rover-sport":
        "https://www.landrover.es/range-rover/range-rover-sport/index.html",

    "land-rover-defender":
        "https://www.landrover.es/defender/index.html",


    /* VOLVO */

    "volvo-xc90":
        "https://www.volvocars.com/es/cars/xc90-hybrid/",

    "volvo-xc60":
        "https://www.volvocars.com/es/cars/xc60-hybrid/",

    "volvo-s90":
        "https://www.volvocars.com/es/cars/s90/",


    /* VOLKSWAGEN */

    "volkswagen-tiguan":
        "https://www.volkswagen.es/es/modelos/tiguan.html",

    "volkswagen-golf-gti":
        "https://www.volkswagen.es/es/modelos/golf-8-gti.html?gclsrc=aw.ds&gad_source=1&gad_campaignid=22904059162&gbraid=0AAAAADNshBUI6wcKeb9EJVWAcH1016wPk&gclid=CjwKCAjwwL_UBhAjEiwAEhuT5LGkAlBWuymaPAlymC_Gna5vcD59P-Y-ongLVv5tacSksCQmbD4FjhoCM-4QAvD_BwE",

    "volkswagen-golf-r":
        "https://www.volkswagen.es/es/modelos/golf-8-r.html",

    

    /* TOYOTA */

    "toyota-gr-supra":
        "https://www.toyota.es/world-of-toyota/toyotagazooracing/toyotagrsupra/caracteristicas",

    "toyota-land-cruiser":
        "https://www.toyota.es/coches/land-cruiser",

    "toyota-rav4":
        "https://www.toyota.es/coches/rav4",

    "toyota-gr86":
        "https://www.toyota.es/coches/gr86",


    /* LEXUS */

    "lexus-rx":
        "https://www.lexusauto.es/modelos/rx",

    "lexus-lc500":
        "https://www.lexusauto.es/lexus-seminuevos/lc-seminuevos",


    /* JAGUAR */

    "jaguar-f-type":
        "https://www.jaguar.es/jaguar-range/f-type/index.html",


    /* MASERATI */

    "maserati-granturismo":
        "https://www.maserati.com/global/en/models/granturismo/granturismo-trim",

    "maserati-levante":
        "https://www.maserati.com/global/en/models/levante",


    /* TESLA */

    "tesla-model-3-performance":
        "https://www.tesla.com/es_es/model3",

    "tesla-model-y":
        "https://www.tesla.com/es_es/modely",


    /* SKODA */

    "skoda-kodiaq":
        "https://www.skoda.es/modelos/kodiaq/kodiaq",


    /* PEUGEOT */

    "peugeot-3008":
        "https://www.peugeot.es/gama/peugeot-3008/hibrido.html",


    /* MAZDA */

    "mazda-mx5":
        "https://www.mazda.es/gama/mazda-mx-5-rf/",


    /* FORD */

    "ford-mustang-gt":
        "https://www.ford.es/turismos/mustang",


    /* NISSAN */

    "nissan-z":
        "https://es.nissanusa.com/vehicles/sports-cars/nissan-z.html",


    /* ROLLS-ROYCE */

    "rolls-royce-ghost":
        "https://www.rolls-roycemotorcars.com/en_GB/showroom/ghost.html",

    "rolls-royce-cullinan":
        "https://www.rolls-roycemotorcars.com/en_GB/showroom/cullinan.html"

};


/* =========================================================
   ADD OFFICIAL URL TO EACH CAR
   ========================================================= */

cars.forEach(car => {

    if (officialUrls[car.id]) {
        car.officialUrl = officialUrls[car.id];
    }

});


/* =========================================================
   DATABASE HELPERS
   ========================================================= */

/*
   Estas funciones nos facilitarán el trabajo cuando
   construyamos results.js.
*/


/* Buscar un coche por ID */

function getCarById(id) {

    return cars.find(car => car.id === id);

}


/* Buscar coches por marca */

function getCarsByBrand(brand) {

    return cars.filter(
        car => car.brand.toLowerCase() === brand.toLowerCase()
    );

}


/* Buscar coches por carrocería */

function getCarsByBody(body) {

    return cars.filter(
        car => car.body === body
    );

}


/* Buscar coches dentro de un presupuesto */

function getCarsByBudget(maxPrice) {

    return cars.filter(
        car => car.price <= maxPrice
    );

}


/* Buscar coches por combustible */

function getCarsByFuel(fuel) {

    return cars.filter(
        car => car.fuel === fuel
    );

}


/* Buscar coches por número mínimo de plazas */

function getCarsBySeats(minSeats) {

    return cars.filter(
        car => car.seats >= minSeats
    );

}


/* Buscar coches por etiqueta */

function getCarsByTag(tag) {

    return cars.filter(
        car => car.tags.includes(tag)
    );

}


/* =========================================================
   GLOBAL ACCESS
   ========================================================= */

window.CAR_MATCH_CARS = cars;

window.CAR_MATCH_HELPERS = {

    getCarById,
    getCarsByBrand,
    getCarsByBody,
    getCarsByBudget,
    getCarsByFuel,
    getCarsBySeats,
    getCarsByTag

};


/* =========================================================
   DATABASE INFORMATION
   ========================================================= */

console.log(
    `CAR MATCH: ${cars.length} vehículos cargados correctamente.`
);

console.log(
    "CAR MATCH: Base de datos preparada para el algoritmo."
);

