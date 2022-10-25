// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';

const sessionStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    clear: jest.fn()
};
global.sessionStorage = sessionStorageMock;

const localStorageMock = {
    getItem: jest.fn(),
    setItem: jest.fn(),
    removeItem: jest.fn(),
    clear: jest.fn(),
  };
global.localStorage = localStorageMock;

const config = {
    setupFiles: ['<rootDir>/jest.config.js'],
    testEnvironment: 'node',
};

global.sessionStorage.setItem("token", "eyJhbGciOiJSUzI1NiIsImtpZCI6IjNmNjcyNDYxOTk4YjJiMzMyYWQ4MTY0ZTFiM2JlN2VkYTY4NDZiMzciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vaWZyaWRnZS05YmIxZSIsImF1ZCI6ImlmcmlkZ2UtOWJiMWUiLCJhdXRoX3RpbWUiOjE2NjY2NjgyODAsInVzZXJfaWQiOiJIUnVBODVGSEwzWGhjam5CdFJaUGZWVXN1WEEzIiwic3ViIjoiSFJ1QTg1RkhMM1hoY2puQnRSWlBmVlVzdVhBMyIsImlhdCI6MTY2NjY2ODI4MCwiZXhwIjoxNjY2NjcxODgwLCJlbWFpbCI6Im5hdGRhdDQ3QGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJuYXRkYXQ0N0BnbWFpbC5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.ofRp73r54xEFgUkPOZynR0Mo3aCaN3zwQGPpyR4tw0cc90yVEO6e_naPDh4mSYdA2gVvJYZ0QclqmVtqIT4fwGatk7k_T59piY_lw-6KJuXR_h2H_Ny8PJ_Jt4lthfqOrd8l3zSPJt8SGwu7bzVeBUkQnd8Jk0kVfBMWjX_8TrAOHf_792BssCq_RNYjMgOdpvj881NMaMDVaT6CrZWdO4lydzZ0CccgS91oTDCwhzg0Lanpuvx7DbVgsfWQ6xeD2BXDCoTCa4Wx7zN_9dzYWao4ydEzyaoTayIJWzZ8stsmQcamJsyOJA5QbxvCcr6mt0zi97i6gKzwZh1j6WG6tQ");
global.sessionStorage.setItem("userId", "HRuA85FHL3XhcjnBtRZPfVUsuXA3");
module.exports = config;