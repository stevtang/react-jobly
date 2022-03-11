import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_URL || "http://localhost:3001";

/** API Class.
 *
 * Static class tying together methods used to get/send to to the API.
 * There shouldn't be any frontend-specific stuff here, and there shouldn't
 * be any API-aware stuff elsewhere in the frontend.
 *
 */

class JoblyApi {

  // DON'T MODIFY THIS TOKEN
  // static token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZ" +
  //   "SI6InRlc3R1c2VyIiwiaXNBZG1pbiI6ZmFsc2UsImlhdCI6MTU5ODE1OTI1OX0." +
  //   "FtrMwBQwe6Ue-glIFgz_Nf8XxRT2YecFCiSpYL0fCXc";
  static token = '';

  static async request(endpoint, data = {}, method = "get") {
    console.debug("API Call:", endpoint, data, method);

    const url = `${BASE_URL}/${endpoint}`;
    const headers = { Authorization: `Bearer ${JoblyApi.token}` };
    const params = (method === "get")
      ? data
      : {};

    try {
      return (await axios({ url, method, data, params, headers })).data;
    } catch (err) {
      console.error("API Error:", err.response);
      let message = err.response.data.error.message;
      throw Array.isArray(message) ? message : [message];
    }
  }

  // Individual API routes

  /** Get details on a company by handle. */

  static async getCompany(handle) {
    let res = await this.request(`companies/${handle}`);
    return res.company;
  }

  /** Get all companies */
  static async getAllCompanies() {
    let res = await this.request(`companies/`);
    return res.companies;
  }

  /** Get company by name filter */
  static async getCompanyByNameFilter(filterInput) {
    let res = await this.request(`companies/?name=${filterInput}`);
    return res.companies;
  }

  /** Get all jobs */
  static async getAllJobs() {
    let res = await this.request(`jobs/`);
    return res.jobs;
  }

  /** Get job by title filter */
  static async getJobByTitleFilter(filterInput) {
    let res = await this.request(`jobs/?title=${filterInput}`);
    return res.jobs;
  }

  /** Login with username, password */
  static async login(userInput) {
    let res = await this.request('auth/token', userInput, "post");
    JoblyApi.token = res.token;
    return res.token;
  }

  /** Get user by username */
  static async getUserByUsername(username) {
    let res = await this.request(`users/${username}`);
    return res;
  }
  /** Register with username, password, firstname, lastname, email */
  static async signUp(userInput) {
    let res = await this.request('auth/register', userInput, "post");
    JoblyApi.token = res.token;
    return res.token;
  }

}

export default JoblyApi;