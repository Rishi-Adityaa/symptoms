"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var oas_1 = __importDefault(require("oas"));
var core_1 = __importDefault(require("api/dist/core"));
var openapi_json_1 = __importDefault(require("./openapi.json"));
var SDK = /** @class */ (function () {
    function SDK() {
        this.spec = oas_1.default.init(openapi_json_1.default);
        this.core = new core_1.default(this.spec, 'eden-ai/2.0 (api/6.1.2)');
    }
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    SDK.prototype.config = function (config) {
        this.core.setConfig(config);
    };
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    SDK.prototype.auth = function () {
        var _a;
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        (_a = this.core).setAuth.apply(_a, values);
        return this;
    };
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    SDK.prototype.server = function (url, variables) {
        if (variables === void 0) { variables = {}; }
        this.core.setServer(url, variables);
    };
    /**
     * List Projects
     *
     */
    SDK.prototype.aiproducts_root_list = function (metadata) {
        return this.core.fetch('/aiproducts/', 'get', metadata);
    };
    /**
     * Retrieve Project
     *
     */
    SDK.prototype.aiproducts_root_retrieve = function (metadata) {
        return this.core.fetch('/aiproducts/{project_id}', 'get', metadata);
    };
    /**
     * Allows you to create a new Ask YODA project with specified details.
     *
     * @summary Create Project
     * @throws FetchError<400, types.AiproductsAskyodaV2CreateResponse400>
     * @throws FetchError<403, types.AiproductsAskyodaV2CreateResponse403>
     * @throws FetchError<404, types.AiproductsAskyodaV2CreateResponse404>
     * @throws FetchError<500, types.AiproductsAskyodaV2CreateResponse500>
     */
    SDK.prototype.aiproducts_askyoda_v2_create = function (body) {
        return this.core.fetch('/aiproducts/askyoda/v2/', 'post', body);
    };
    /**
     * This endpoint enables you to upload files (**CSV**, **AUDIO**, **PDF**, or **XML**) into
     * your project. <br> Upon upload, the file will be processed and stored as text embeddings
     * within the project's database. <br>
     *
     * ### Supported File Types
     * - **CSV**: Comma-separated values files.
     * - **Audio**: Supported audio formats for transcription to text.
     * - **PDF**: Portable Document Format files.
     * - **XML**: Extensible Markup Language files.
     *
     * ### OCR Processing and Speech-to-Text
     * If the uploaded file is a PDF, it will undergo Optical Character Recognition (OCR)
     * processing using the default provider chosen during the project creation step. <br>
     * Similarly, audio files will be converted to text using Speech-to-Text, also utilizing
     * the default provider configured during project setup.
     *
     * ### Accepted File Extensions
     * - **PDF**
     * - **CSV**
     * - **AMR**
     * - **FLAC**
     * - **WAV**
     * - **OGG**
     * - **MP3**
     * - **MP4**
     * - **WEBM**
     * - **XML**
     *
     *
     *
     *
     * @summary Add File
     */
    SDK.prototype.aiproducts_askyoda_v2_add_file_create = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/add_file', 'post', body, metadata);
    };
    /**
     * Add text data in your project, which will be stored as embeddings
     * within your chosen database provider.
     *
     * @summary Add Texts
     */
    SDK.prototype.aiproducts_askyoda_v2_add_text_create = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/add_text', 'post', body, metadata);
    };
    /**
     * Add a list of URLs into your projects,
     * they will be processed and stored as text embeddings within your project.
     *
     * @summary Add Urls
     */
    SDK.prototype.aiproducts_askyoda_v2_add_url_create = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/add_url', 'post', body, metadata);
    };
    /**
     * Retrieve a list of search query responses and compare them to your
     * input. Provide a query, and in return, receive scores for the most relevant items from
     * your project,
     * ranked by their proximity to your query.
     *
     * @summary Ask LLM
     * @throws FetchError<400, types.AiproductsAskyodaV2AskLlmCreateResponse400>
     * @throws FetchError<403, types.AiproductsAskyodaV2AskLlmCreateResponse403>
     * @throws FetchError<404, types.AiproductsAskyodaV2AskLlmCreateResponse404>
     * @throws FetchError<500, types.AiproductsAskyodaV2AskLlmCreateResponse500>
     */
    SDK.prototype.aiproducts_askyoda_v2_ask_llm_create = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/ask_llm', 'post', body, metadata);
    };
    /**
     * List Conversations
     *
     */
    SDK.prototype.aiproducts_askyoda_v2_conversations_list = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/conversations/', 'get', metadata);
    };
    SDK.prototype.aiproducts_askyoda_v2_conversations_create = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/conversations/', 'post', body, metadata);
    };
    /**
     * Retrieve Conversation Details
     *
     */
    SDK.prototype.aiproducts_askyoda_v2_conversations_retrieve = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/conversations/{conversation_id}/', 'get', metadata);
    };
    SDK.prototype.aiproducts_askyoda_v2_conversations_update = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/conversations/{conversation_id}/', 'put', body, metadata);
    };
    SDK.prototype.aiproducts_askyoda_v2_conversations_partial_update = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/conversations/{conversation_id}/', 'patch', body, metadata);
    };
    /**
     * Delete Conversation
     *
     */
    SDK.prototype.aiproducts_askyoda_v2_conversations_destroy = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/conversations/{conversation_id}/', 'delete', metadata);
    };
    /**
     * Delete a query from your project by its ID.
     *
     * @summary Delete Chunk
     * @throws FetchError<400, types.AiproductsAskyodaV2DeleteChunkDestroyResponse400>
     * @throws FetchError<403, types.AiproductsAskyodaV2DeleteChunkDestroyResponse403>
     * @throws FetchError<404, types.AiproductsAskyodaV2DeleteChunkDestroyResponse404>
     * @throws FetchError<500, types.AiproductsAskyodaV2DeleteChunkDestroyResponse500>
     */
    SDK.prototype.aiproducts_askyoda_v2_delete_chunk_destroy = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/delete_chunk', 'delete', metadata);
    };
    /**
     * List Files
     *
     */
    SDK.prototype.aiproducts_askyoda_v2_files_list = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/files/', 'get', metadata);
    };
    /**
     * Get File
     *
     */
    SDK.prototype.aiproducts_askyoda_v2_files_retrieve = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/files/{file_id}/', 'get', metadata);
    };
    /**
     * Delete File
     *
     */
    SDK.prototype.aiproducts_askyoda_v2_files_destroy = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/files/{file_id}/', 'delete', metadata);
    };
    /**
     * Retrieve details about your project within your Ask YODA project,
     * including the total number of items stored in your project collection and default models
     *
     * @summary Get info
     * @throws FetchError<400, types.AiproductsAskyodaV2InfoRetrieveResponse400>
     * @throws FetchError<403, types.AiproductsAskyodaV2InfoRetrieveResponse403>
     * @throws FetchError<404, types.AiproductsAskyodaV2InfoRetrieveResponse404>
     * @throws FetchError<500, types.AiproductsAskyodaV2InfoRetrieveResponse500>
     */
    SDK.prototype.aiproducts_askyoda_v2_info_retrieve = function (metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/info', 'get', metadata);
    };
    /**
     * Interact with your data by selecting your preferred Language Model
     * provider. The chosen provider will then respond to queries based on the data you have
     * added
     * to your collection
     *
     * @summary Query
     * @throws FetchError<400, types.AiproductsAskyodaV2QueryCreateResponse400>
     * @throws FetchError<403, types.AiproductsAskyodaV2QueryCreateResponse403>
     * @throws FetchError<404, types.AiproductsAskyodaV2QueryCreateResponse404>
     * @throws FetchError<500, types.AiproductsAskyodaV2QueryCreateResponse500>
     */
    SDK.prototype.aiproducts_askyoda_v2_query_create = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/query', 'post', body, metadata);
    };
    SDK.prototype.aiproducts_askyoda_v2_update_project_partial_update = function (body, metadata) {
        return this.core.fetch('/aiproducts/askyoda/v2/{project_id}/update_project', 'patch', body, metadata);
    };
    /**
     * View to delete an AI project.
     *
     * @summary Delete Project
     */
    SDK.prototype.aiproducts_delete_destroy = function (metadata) {
        return this.core.fetch('/aiproducts/delete/{project_id}', 'delete', metadata);
    };
    return SDK;
}());
var createSDK = (function () { return new SDK(); })();
module.exports = createSDK;
