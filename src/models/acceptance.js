class Acceptance {
	constructor(request_id, pipeline_id, request_code, business_type, type_cover, allocated_budget) {
		this.request_id = request_id;
		this.pipeline_id = pipeline_id;
		this.request_code = request_code;
		this.business_type = business_type;
		this.type_cover = type_cover;
		this.allocated_budget = allocated_budget;
	}
}

export default Acceptance;