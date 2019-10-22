import Company from './companies.model';


/**
 * Get all users.
 *
 * @returns {Promise}
 */
export function getAllCompanies() {
  return Company.fetchAll();
}



