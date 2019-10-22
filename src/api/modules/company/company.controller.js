import HTTP_STATUS_CODE from '../../../utils/httpStatus';

import * as companyService from './company.service';

/**
 * Get all users.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function fetchAll(req, res, next) {
  companyService
    .getAllCompanies()
    .then(data => res.json({ data }))
    .catch(err => next(err));
}

/**
 * Create a new user.
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Function} next
 */
export function create(req, res, next) {
  companyService
    .createCompany(req.body)
    .then(company => {
      if (company) {
        companyService.getAllUsers()
          .then(userList => {
            res.status(HTTP_STATUS_CODE.CREATED).json({ userList, company });
          });
      }

    })
    .catch(err => next(err));
}





