const Recipe = require('../models/recipe');

exports.createRecipe = (req, res, next) => {
    const recipe = new Recipe({
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time
    });
    recipe.save().then(() => {
        res.status(201).json({message: 'Recipe added'});
    }).catch(error => {
        res.status(400).json({message: 'Could not save recipe', error: error});
    });
}

exports.getRecipeById = (req, res, next) => {
    Recipe.findOne({_id: req.body.id}).then(recipe => {
        res.status(200).json({recipe});
    }).catch(error => {
        res.status(404).json({message: 'Recipe not found', error: error});
    });
}

exports.getRecipes = (req, res, next) => {
    Recipe.find().then(recipes => {
        res.status(200).json({recipes});
    }).catch(error => {
        res.status(404).json({message: 'No recipes found', error: error});
    });
}

exports.updateRecipe = (req, res, next) => {
    const recipe = new Recipe({
        _id: req.params.id,
        title: req.body.title,
        ingredients: req.body.ingredients,
        instructions: req.body.instructions,
        difficulty: req.body.difficulty,
        time: req.body.time
    });

    recipe.updateOne({_id: recipe._id}, recipe).then(recipe => {
        res.status(200).json({recipe});
    }).catch(error => {
        res.status(400).json({message: 'Could not update recipe', error: error});
    });
}

exports.deleteRecipe = (req, res, next) => {
    Recipe.deleteOne({_id: req.params.id}).then(() => {
        res.status(200).json({message: 'Recipe deleted'});
    }).catch(error => {
        res.status(400).json({message: 'Could not delete recipe', error: error});
    });
}