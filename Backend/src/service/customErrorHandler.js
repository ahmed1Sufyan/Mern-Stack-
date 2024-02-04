class customErrorHandler extends Error {
  constructor(message, statuscode, accessToken) {
    super();
    this.message = message;
    this.statuscode = statuscode;
    this.accessToken = accessToken;
  }

  static alreadyexist(message) {
    return new customErrorHandler(message, 409);
  }

  static DatanotSaved(message) {
    return new customErrorHandler(message, 400);
  }

  static Usernotfound(message) {
    return new customErrorHandler(message, 404);
  }
  static invalidcredentials(message) {
    return new customErrorHandler(message, 401, null);
  }
  static missingRequiredFields(message) {
    return new customErrorHandler(message, 422, null);
  }
  static unauthorized(message) {
    return new customErrorHandler(message, 422, null);
  }
  static invalidToken(message) {
    return new customErrorHandler(message, 422, null);
  }
}

exports.customErrorHandler = customErrorHandler;
