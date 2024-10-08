/// <reference types="bun" />
interface DoFunctionHTTP {
	path: string;
	method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "OPTIONS";
	body?: any;
	headers: {
		accept: string;
		"accept-encoding": string;
		"content-type": string;
		host: string;
		"user-agent": string;
		"x-forwarded-for": string;
		"x-forwarded-proto": string;
		"x-request-id": string;
		[k: string]: any;
	};
}
interface DoFunctionArgs {
	/** @deprecated Use http.headers */
	__ow_headers?: Record<string, any>;
	/** @deprecated Use http.path */
	__ow_path?: string;
	/** @deprecated Use http.method */
	__ow_method?: "get" | "post" | "put" | "patch" | "delete" | "options";
	/** @deprecated Get body data from root */
	__ow_body?: string | Record<string, any>;
	/** @deprecated Get query params from root */
	__ow_query?: string;

	http: DoFunctionHTTP;

	[k: string]: any;
}

interface DoFunctionReturn {
	body?: any;
	statusCode?: number;
	headers?: Record<string, any>;
}

interface DoFunction {
	(args: DoFunctionArgs): Promise<DoFunctionReturn | undefined>;
}
