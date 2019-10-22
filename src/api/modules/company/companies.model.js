import Model from '../../../database/db';

const TABLE_NAME = 'companies';

/**
 * Company model.
 */
export default class Company extends Model {
  /**
   *
   * @returns {string}
   */
  static get tableName() {
    return TABLE_NAME;
  }

  /**
   *
   * @returns {string}
   */
  static get idColumn() {
    return 'id';
  }

}

