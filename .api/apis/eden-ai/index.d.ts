import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
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
    auth(...values: string[] | number[]): this;
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
    server(url: string, variables?: {}): void;
    /**
     * List Projects
     *
     */
    aiproducts_root_list(metadata?: types.AiproductsRootListMetadataParam): Promise<FetchResponse<200, types.AiproductsRootListResponse200>>;
    /**
     * Retrieve Project
     *
     */
    aiproducts_root_retrieve(metadata: types.AiproductsRootRetrieveMetadataParam): Promise<FetchResponse<200, types.AiproductsRootRetrieveResponse200>>;
    /**
     * Allows you to create a new Ask YODA project with specified details.
     *
     * @summary Create Project
     * @throws FetchError<400, types.AiproductsAskyodaV2CreateResponse400>
     * @throws FetchError<403, types.AiproductsAskyodaV2CreateResponse403>
     * @throws FetchError<404, types.AiproductsAskyodaV2CreateResponse404>
     * @throws FetchError<500, types.AiproductsAskyodaV2CreateResponse500>
     */
    aiproducts_askyoda_v2_create(body: types.AiproductsAskyodaV2CreateBodyParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2CreateResponse200>>;
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
    aiproducts_askyoda_v2_add_file_create(body: types.AiproductsAskyodaV2AddFileCreateBodyParam, metadata: types.AiproductsAskyodaV2AddFileCreateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add text data in your project, which will be stored as embeddings
     * within your chosen database provider.
     *
     * @summary Add Texts
     */
    aiproducts_askyoda_v2_add_text_create(body: types.AiproductsAskyodaV2AddTextCreateBodyParam, metadata: types.AiproductsAskyodaV2AddTextCreateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Add a list of URLs into your projects,
     * they will be processed and stored as text embeddings within your project.
     *
     * @summary Add Urls
     */
    aiproducts_askyoda_v2_add_url_create(body: types.AiproductsAskyodaV2AddUrlCreateBodyParam, metadata: types.AiproductsAskyodaV2AddUrlCreateMetadataParam): Promise<FetchResponse<number, unknown>>;
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
    aiproducts_askyoda_v2_ask_llm_create(body: types.AiproductsAskyodaV2AskLlmCreateBodyParam, metadata: types.AiproductsAskyodaV2AskLlmCreateMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2AskLlmCreateResponse200>>;
    /**
     * List Conversations
     *
     */
    aiproducts_askyoda_v2_conversations_list(metadata: types.AiproductsAskyodaV2ConversationsListMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2ConversationsListResponse200>>;
    /**
     * Create Conversation
     *
     */
    aiproducts_askyoda_v2_conversations_create(body: types.AiproductsAskyodaV2ConversationsCreateBodyParam, metadata: types.AiproductsAskyodaV2ConversationsCreateMetadataParam): Promise<FetchResponse<201, types.AiproductsAskyodaV2ConversationsCreateResponse201>>;
    aiproducts_askyoda_v2_conversations_create(metadata: types.AiproductsAskyodaV2ConversationsCreateMetadataParam): Promise<FetchResponse<201, types.AiproductsAskyodaV2ConversationsCreateResponse201>>;
    /**
     * Retrieve Conversation Details
     *
     */
    aiproducts_askyoda_v2_conversations_retrieve(metadata: types.AiproductsAskyodaV2ConversationsRetrieveMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2ConversationsRetrieveResponse200>>;
    /**
     * Update Conversation Name
     *
     */
    aiproducts_askyoda_v2_conversations_update(body: types.AiproductsAskyodaV2ConversationsUpdateBodyParam, metadata: types.AiproductsAskyodaV2ConversationsUpdateMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2ConversationsUpdateResponse200>>;
    aiproducts_askyoda_v2_conversations_update(metadata: types.AiproductsAskyodaV2ConversationsUpdateMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2ConversationsUpdateResponse200>>;
    /**
     * Update Conversation Name
     *
     */
    aiproducts_askyoda_v2_conversations_partial_update(body: types.AiproductsAskyodaV2ConversationsPartialUpdateBodyParam, metadata: types.AiproductsAskyodaV2ConversationsPartialUpdateMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2ConversationsPartialUpdateResponse200>>;
    aiproducts_askyoda_v2_conversations_partial_update(metadata: types.AiproductsAskyodaV2ConversationsPartialUpdateMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2ConversationsPartialUpdateResponse200>>;
    /**
     * Delete Conversation
     *
     */
    aiproducts_askyoda_v2_conversations_destroy(metadata: types.AiproductsAskyodaV2ConversationsDestroyMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * Delete a query from your project by its ID.
     *
     * @summary Delete Chunk
     * @throws FetchError<400, types.AiproductsAskyodaV2DeleteChunkDestroyResponse400>
     * @throws FetchError<403, types.AiproductsAskyodaV2DeleteChunkDestroyResponse403>
     * @throws FetchError<404, types.AiproductsAskyodaV2DeleteChunkDestroyResponse404>
     * @throws FetchError<500, types.AiproductsAskyodaV2DeleteChunkDestroyResponse500>
     */
    aiproducts_askyoda_v2_delete_chunk_destroy(metadata: types.AiproductsAskyodaV2DeleteChunkDestroyMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2DeleteChunkDestroyResponse200>>;
    /**
     * List Files
     *
     */
    aiproducts_askyoda_v2_files_list(metadata: types.AiproductsAskyodaV2FilesListMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2FilesListResponse200>>;
    /**
     * Get File
     *
     */
    aiproducts_askyoda_v2_files_retrieve(metadata: types.AiproductsAskyodaV2FilesRetrieveMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2FilesRetrieveResponse200>>;
    /**
     * Delete File
     *
     */
    aiproducts_askyoda_v2_files_destroy(metadata: types.AiproductsAskyodaV2FilesDestroyMetadataParam): Promise<FetchResponse<number, unknown>>;
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
    aiproducts_askyoda_v2_info_retrieve(metadata: types.AiproductsAskyodaV2InfoRetrieveMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2InfoRetrieveResponse200>>;
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
    aiproducts_askyoda_v2_query_create(body: types.AiproductsAskyodaV2QueryCreateBodyParam, metadata: types.AiproductsAskyodaV2QueryCreateMetadataParam): Promise<FetchResponse<200, types.AiproductsAskyodaV2QueryCreateResponse200>>;
    /**
     * Update the default settings of the Yoda project.
     * It allows you to modify the project's default settings,
     * specifically changing the llm_provider (language model provider),
     * llm_model (language model), ocr_provider (upload pdf), speech_to_text provider (upload
     * audio)
     * and the default chunks parameter associated with the default project.
     *
     * @summary Update Project
     */
    aiproducts_askyoda_v2_update_project_partial_update(body: types.AiproductsAskyodaV2UpdateProjectPartialUpdateBodyParam, metadata: types.AiproductsAskyodaV2UpdateProjectPartialUpdateMetadataParam): Promise<FetchResponse<number, unknown>>;
    aiproducts_askyoda_v2_update_project_partial_update(metadata: types.AiproductsAskyodaV2UpdateProjectPartialUpdateMetadataParam): Promise<FetchResponse<number, unknown>>;
    /**
     * View to delete an AI project.
     *
     * @summary Delete Project
     */
    aiproducts_delete_destroy(metadata: types.AiproductsDeleteDestroyMetadataParam): Promise<FetchResponse<number, unknown>>;
}
declare const createSDK: SDK;
export = createSDK;
