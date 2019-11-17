const express = require('express');
const router = express.Router();
const controls = require('../controllers/recipe');

router.post('/', controls.createRecipe); 

router.get('/:id', controls.getRecipeById);

router.put('/:id', controls.updateRecipe);

router.delete('/:id', controls.deleteRecipe);

router.get('/', controls.getRecipes);

module.exports = router;