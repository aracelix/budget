class AccountAPI {
  getAccounts() {
    return [{
      id: 303,
      name: "Bank of America"
    }];
  }

}

const instance = new AccountAPI();
Object.freeze(instance);

export default instance;