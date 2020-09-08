import * as React from 'react';
import CategoryAPI from '../api/CategoryAPI';
import TransactionAPI from '../api/TransactionAPI';

class Budget extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      parentCategories: CategoryAPI.getParentCategories(),
      transactions: TransactionAPI.getAllTransactions()
    }
  }

  render() {
    return(
      <section>
        <ul>
          {this.state.parentCategories.map((category: any) => 
            <li key={category.id}>
              {category.name}
              <ul>
                {CategoryAPI.getSubCategories(category.id).map((subCategory: any) => <li key={subCategory.id}>{subCategory.name}</li>)}
              </ul>
            </li>
          )}
        </ul>
      </section>
    )
  }
}

export default Budget;