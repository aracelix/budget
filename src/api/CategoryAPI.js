import { mock_categories } from './mock_transactions';

class CategoriesAPI {
  constructor() {

  }

  getParentCategories() {
    return mock_categories.filter(category => category.parentCategoryId === null);
  }

  getSubCategories(parentId) {
    return mock_categories.filter(category => category.parentCategoryId === parentId);
  }
}

const instance = new CategoriesAPI();
Object.freeze(instance);

export default instance;