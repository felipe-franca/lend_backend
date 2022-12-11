class Payment {
  constructor(id, cardNumber, expiresIn, cvc, owner, ownerEmail) {
    this._id = id;
    this._cardNumber = cardNumber;
    this._expiresIn = expiresIn;
    this._cvc = cvc;
    this._owner = owner;
    this._ownerEmail = ownerEmail;
  }

  get() {
    return {
      id: this._id,
      cardNumber: this._cardNumber,
      expiresIn: this._expiresIn,
      cvc: this._cvc,
      owner: this._owner,
      ownerEmail: this._ownerEmail
    };
  }

  get id() {
    const id = this._id;
    return id;
  }

  get cardNumber() {
    const cardNumber = this._cardNumber;
    return cardNumber;
  }

  get expiresIn() {
    const expiresIn = this._expiresIn;
    return expiresIn;
  }

  get owner() {
    const owner = this._owner;
    return owner;
  }

  get ownerEmail() {
    const email = this._ownerEmail;
    return email;
  }
}

module.exports = Payment;
