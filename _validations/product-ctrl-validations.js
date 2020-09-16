const { body, param, validationResult } = require('express-validator');
module.exports = {
    addProductValidtions:[
        body('name').not().isEmpty().withMessage('name required'),
        body('category').not().isEmpty().withMessage('category required'),
        body('price').not().isEmpty().withMessage('price required'),
        body('stock').not().isEmpty().withMessage('stock required'),
        body('description').not().isEmpty().withMessage('description required'),
    ],
    updateProductValidtions:[
        body('_id').not().isEmpty().withMessage('_id required'),
        body('name').not().isEmpty().withMessage('name required'),
        body('category').not().isEmpty().withMessage('category required'),
        body('price').not().isEmpty().withMessage('price required'),
        body('stock').not().isEmpty().withMessage('stock required'),
        body('description').not().isEmpty().withMessage('description required'),
    ]
}