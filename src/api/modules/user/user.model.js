import Model from '../../../database/db';

const TABLE_NAME = 'users';

/**
 * User model.
 */
export default class User extends Model {
  /**
   * Get table name.
   */
  static get tableName() {
    return TABLE_NAME;
  }


}

