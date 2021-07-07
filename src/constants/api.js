// API URL
const API_URL = 'https://api.integra.co.id/';

// API End Points
const LOGIN_URL = `${API_URL}v1/login`;
const CLIENTS_URL = `${API_URL}v1/clients`;
const EMPLOYEES_URL = `${API_URL}v3/employees`;
const PIPELINES_URL = `${API_URL}v3/pipelines`;
const PROSPECTS_URL = `${API_URL}v3/prospects`;
const REQUESTS_URL = `${API_URL}v3/requests`;
const RENEWALS_URL = `${API_URL}v3/renewals`;
const PROPOSALS_URL = `${API_URL}v3/proposals`;
const RELEASES_URL = `${API_URL}v3/releases`;
const PLACINGS_URL = `${API_URL}v3/placings`;
const QUOTATIONS_URL = `${API_URL}v3/quotations`;
const REIMBURSEMENTS_URL = `${API_URL}v3/reimbursements`;
const CASHLESSES_URL = `${API_URL}v3/cashlesses`;
const TIMESHEETS_URL = `${API_URL}v3/timesheets`;

const api = {
	LOGIN_URL,
	EMPLOYEES_URL,
	CLIENTS_URL,
	PIPELINES_URL,
	PROSPECTS_URL,
	REQUESTS_URL,
	RENEWALS_URL,
	PROPOSALS_URL,
	RELEASES_URL,
	PLACINGS_URL,
	QUOTATIONS_URL,
	REIMBURSEMENTS_URL,
	CASHLESSES_URL,
	TIMESHEETS_URL
};

export default api;