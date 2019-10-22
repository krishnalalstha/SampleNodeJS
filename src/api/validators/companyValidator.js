import Joi from 'joi';

import validate from '../../utils/validate';
import * as companyService from '../modules'


const SCHEMA = {
  name: Joi.string()
    .label('name')
    .max(90)
    .required()
};

/**
 * Validate create/update user request.
 *
 * @param   {Object}   req
 * @param   {Object}   res
 * @param   {Function} next
 * @returns {Promise}
 */
function companyValidator(req, res, next) {
return validate(req.body, SCHEMA)
    .then(() => next())
    .catch(err => next(err));
}

/**
 *
 * @param req
 * @param res
 * @param next
 * @returns {Promise<any> | SyncPromise<any> | * | Promise<any> | undefined}
 */
function checkIfCompanyExists(req, res, next) {
return companyService.checkIfCompany(req.body.name)
    .then(() => next())
    .catch(err => next(err));
}



export { companyValidator, checkIfCompanyExists };
