const RECIPES = {

    classic: {

        id: "classic",

        name: "Classic",

        marinadeCoef: 0.542,

        ingredients: [

            {
                id: "salt",
                name: "Salt",
                coef: 0.031,
                unit: "kg"
            },

            {
                id: "sugar",
                name: "Sugar",
                coef: 0.185,
                unit: "kg"
            },

            {
                id: "soy",
                name: "Soy Sauce",
                coef: 0.246,
                unit: "kg"
            },

            {
                id: "sesameOil",
                name: "Sesame Oil",
                coef: 0.051,
                unit: "kg"
            },

            {
                id: "whiteSesame",
                name: "White Sesame",
                coef: 0.009,
                unit: "kg"
            },

            {
                id: "sweetChili",
                name: "Sweet Chili",
                coef: 0.006,
                unit: "kg"
            },

            {
                id: "concentrate",
                name: "50% Concentrate",
                coef: 0.014,
                unit: "kg"
            }

        ]

    },

    sesame: {

        id: "sesame",

        name: "Sesame",

        marinadeCoef: 0.542,

        ingredients: [],

    },

    teriyaki: {

        id: "teriyaki",

        name: "Teriyaki",

        marinadeCoef: 0.542,

        ingredients: [],

    },

    spicy: {

        id: "spicy",

        name: "Spicy",

        marinadeCoef: 0.542,

        ingredients: [],

    }

};

RECIPES.sesame.ingredients =
JSON.parse(JSON.stringify(RECIPES.classic.ingredients));

RECIPES.teriyaki.ingredients =
JSON.parse(JSON.stringify(RECIPES.classic.ingredients));

RECIPES.spicy.ingredients =
JSON.parse(JSON.stringify(RECIPES.classic.ingredients));

let currentRecipe = "classic";