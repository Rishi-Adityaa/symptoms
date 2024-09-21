declare const AiproductsAskyodaV2AddFileCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly data_type: {
                readonly enum: readonly ["pdf", "audio", "csv", "xml"];
                readonly type: "string";
                readonly description: "* `pdf` - pdf\n* `audio` - audio\n* `csv` - csv\n* `xml` - xml";
            };
            readonly file: {
                readonly type: "string";
                readonly format: "binary";
                readonly description: "File to analyse in binary format to be used with *content-type*: **multipart/form-data** <br> **Does not work with application/json !**";
                readonly pattern: "(?:pdf|csv|amr|flac|wav|ogg|mp3|mp4|webm|xml)$";
            };
            readonly file_url: {
                readonly type: readonly ["string", "null"];
                readonly format: "uri";
                readonly description: "File **URL** to analyse to be used with with *content-type*: **application/json**.";
            };
            readonly metadata: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Optional parameter: Attach metadata to the uploaded file data in your database. Provide a stringified JSON with key-value pairs. Useful in `filter_document` when querying the language model, it allows you to filter data with your Chatbot by considering only documents that have the specified metadata.";
            };
            readonly provider: {
                readonly type: readonly ["string", "null"];
                readonly minLength: 1;
                readonly description: "Select a provider to use, only for audio (speech-to-text) & pdf (ocr-async) files.";
            };
        };
        readonly required: readonly ["data_type"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
};
declare const AiproductsAskyodaV2AddTextCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly texts: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly minLength: 1;
                };
                readonly description: "LLM Query";
            };
            readonly metadata: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly default: readonly [];
            };
        };
        readonly required: readonly ["texts"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
};
declare const AiproductsAskyodaV2AddUrlCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly urls: {
                readonly type: "array";
                readonly items: {
                    readonly type: "string";
                    readonly minLength: 1;
                };
                readonly description: "Add multiple urls into the database, it loads all the text from HTML webpages into a document format.";
            };
            readonly metadata: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                };
                readonly default: readonly [];
            };
        };
        readonly required: readonly ["urls"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
};
declare const AiproductsAskyodaV2AskLlmCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly query: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Enter your question or query about the data. The large language model (LLM) will provide a response.";
            };
            readonly llm_provider: {
                readonly type: "string";
                readonly minLength: 1;
                readonly default: "openai";
                readonly description: "Select a provider for the large language model for processing. Leave empty for default.";
            };
            readonly llm_model: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Specify the model to use for language processing. Leave empty for default.";
            };
            readonly k: {
                readonly type: "integer";
                readonly minimum: 1;
                readonly default: 3;
                readonly description: "How many results chunk you want to return";
            };
            readonly history: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly description: "A dictionary representing a single conversation in the previous history. Must contain 'user' and 'assistant' fields.";
                };
                readonly default: readonly [];
                readonly description: "A list containing all the previous conversations between the user and the chatbot AI. Each item in the list should be a dictionary with two keys: 'user' and 'assistant'.";
            };
            readonly chatbot_global_action: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "A system message that helps set the behavior of the assistant.";
            };
            readonly filter_documents: {
                readonly type: "object";
                readonly additionalProperties: true;
                readonly description: "Filter uploaded documents based on their metadata. Specify key-value pairs where the key represents the metadata field and the value is the desired metadata value. Please ensure that the provided metadata keys are available in your database.";
            };
            readonly temperature: {
                readonly type: "number";
                readonly format: "double";
                readonly maximum: 2;
                readonly minimum: 0;
                readonly default: 0;
                readonly description: "Higher values mean the model will take more risks and value 0 (argmax sampling) works better for scenarios with a well-defined answer.";
            };
            readonly max_tokens: {
                readonly type: "integer";
                readonly maximum: 16385;
                readonly minimum: 1;
                readonly default: 100;
                readonly description: "The maximum number of tokens to generate in the completion. The token count of your prompt plus max_tokens cannot exceed the model's context length.";
            };
            readonly conversation_id: {
                readonly type: "string";
                readonly format: "uuid";
            };
        };
        readonly required: readonly ["query"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly result: {
                    readonly items: {
                        readonly properties: {
                            readonly id: {
                                readonly format: "uuid";
                                readonly title: "Id";
                                readonly type: "string";
                            };
                            readonly version: {
                                readonly title: "Version";
                                readonly type: "integer";
                            };
                            readonly score: {
                                readonly title: "Score";
                                readonly type: "integer";
                            };
                            readonly payload: {
                                readonly properties: {
                                    readonly metadata: {
                                        readonly title: "Metadata";
                                        readonly type: "object";
                                        readonly additionalProperties: true;
                                    };
                                    readonly page_content: {
                                        readonly title: "Page Content";
                                        readonly type: "string";
                                    };
                                };
                                readonly required: readonly ["metadata", "page_content"];
                                readonly title: "YodaQueryResponsePayload";
                                readonly type: "object";
                            };
                            readonly vector: {
                                readonly title: "Vector";
                            };
                        };
                        readonly required: readonly ["id", "version", "score", "payload", "vector"];
                        readonly title: "YodaQueryResponseItem";
                        readonly type: "object";
                    };
                    readonly title: "Result";
                    readonly type: "array";
                };
            };
            readonly required: readonly ["result"];
            readonly title: "YodaQueryResponse";
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "object";
                            readonly properties: {
                                readonly "<parameter_name>": {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly required: readonly ["<parameter_name>"];
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly details: {
                    readonly type: "string";
                    readonly default: "Not Found";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2ConversationsCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: readonly ["string", "null"];
                readonly maxLength: 255;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "201": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly name: {
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 255;
                };
            };
            readonly required: readonly ["id"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2ConversationsDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversation_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["conversation_id", "project_id"];
        }];
    };
};
declare const AiproductsAskyodaV2ConversationsList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly readOnly: true;
                    };
                    readonly name: {
                        readonly type: readonly ["string", "null"];
                        readonly maxLength: 255;
                    };
                };
                readonly required: readonly ["id"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2ConversationsPartialUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: readonly ["string", "null"];
                readonly maxLength: 255;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversation_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["conversation_id", "project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly name: {
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 255;
                };
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly user_text: {
                                readonly type: "string";
                            };
                            readonly assistant_text: {
                                readonly type: readonly ["string", "null"];
                            };
                        };
                        readonly required: readonly ["user_text"];
                    };
                    readonly readOnly: true;
                };
            };
            readonly required: readonly ["id", "messages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2ConversationsRetrieve: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversation_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["conversation_id", "project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly name: {
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 255;
                };
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly user_text: {
                                readonly type: "string";
                            };
                            readonly assistant_text: {
                                readonly type: readonly ["string", "null"];
                            };
                        };
                        readonly required: readonly ["user_text"];
                    };
                    readonly readOnly: true;
                };
            };
            readonly required: readonly ["id", "messages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2ConversationsUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly name: {
                readonly type: readonly ["string", "null"];
                readonly maxLength: 255;
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly conversation_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["conversation_id", "project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly name: {
                    readonly type: readonly ["string", "null"];
                    readonly maxLength: 255;
                };
                readonly messages: {
                    readonly type: "array";
                    readonly items: {
                        readonly type: "object";
                        readonly properties: {
                            readonly user_text: {
                                readonly type: "string";
                            };
                            readonly assistant_text: {
                                readonly type: readonly ["string", "null"];
                            };
                        };
                        readonly required: readonly ["user_text"];
                    };
                    readonly readOnly: true;
                };
            };
            readonly required: readonly ["id", "messages"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2Create: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly credential: {
                readonly type: readonly ["string", "null"];
                readonly description: "The credential resource name";
                readonly maxLength: 255;
            };
            readonly asset: {
                readonly type: readonly ["string", "null"];
                readonly description: "The asset sub_resource name";
                readonly maxLength: 255;
            };
            readonly ocr_provider: {
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly speech_to_text_provider: {
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly llm_provider: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Select a default LLM provider to use in your project.";
            };
            readonly llm_model: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Select a default Model for LLM provider to use in your project";
            };
            readonly chunk_size: {
                readonly type: readonly ["integer", "null"];
                readonly maximum: 10000;
                readonly minimum: 1;
            };
            readonly chunk_separators: {
                readonly type: readonly ["array", "null"];
                readonly items: {
                    readonly type: "string";
                };
            };
            readonly project_name: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Project name";
            };
            readonly collection_name: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Database Collection Name";
            };
            readonly db_provider: {
                readonly default: "qdrant";
                readonly description: "* `qdrant` - qdrant\n* `supabase` - supabase\n\nDefault: `qdrant`";
                readonly enum: readonly ["qdrant", "supabase"];
                readonly type: "string";
            };
            readonly embeddings_provider: {
                readonly type: "string";
                readonly minLength: 1;
                readonly default: "cohere";
                readonly description: "Select an embedding provider to use in your search database. Leave empty for default.";
            };
        };
        readonly required: readonly ["collection_name", "ocr_provider", "project_name", "speech_to_text_provider"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly project_id: {
                    readonly format: "uuid";
                    readonly title: "Project Id";
                    readonly type: "string";
                };
            };
            readonly required: readonly ["project_id"];
            readonly title: "YodaCreateProjectResponse";
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "object";
                            readonly properties: {
                                readonly "<parameter_name>": {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly required: readonly ["<parameter_name>"];
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly details: {
                    readonly type: "string";
                    readonly default: "Not Found";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2DeleteChunkDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }, {
            readonly type: "object";
            readonly properties: {
                readonly id: {
                    readonly type: "string";
                    readonly minLength: 1;
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "chunk_id";
                };
            };
            readonly required: readonly ["id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly result: {
                    readonly default: "Done!";
                    readonly title: "Result";
                    readonly type: "string";
                };
            };
            readonly title: "YodaDeleteResponse";
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "object";
                            readonly properties: {
                                readonly "<parameter_name>": {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly required: readonly ["<parameter_name>"];
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly details: {
                    readonly type: "string";
                    readonly default: "Not Found";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2FilesDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly file_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["file_id", "project_id"];
        }];
    };
};
declare const AiproductsAskyodaV2FilesList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly file_id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly readOnly: true;
                    };
                    readonly user: {
                        readonly type: "string";
                        readonly readOnly: true;
                    };
                    readonly project: {
                        readonly type: "string";
                        readonly readOnly: true;
                    };
                    readonly file_type: {
                        readonly type: "string";
                        readonly maxLength: 255;
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                    readonly status: {
                        readonly nullable: true;
                        readonly oneOf: readonly [{
                            readonly enum: readonly ["succeeded", "failed", "finished", "processing"];
                            readonly type: "string";
                            readonly description: "* `succeeded` - Status Succeeded\n* `failed` - Status Failed\n* `finished` - Status Finished\n* `processing` - Status Processing\n\n`succeeded` `failed` `finished` `processing`";
                        }, {
                            readonly enum: readonly [any];
                        }];
                    };
                };
                readonly required: readonly ["created_at", "file_id", "file_type", "project", "user"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2FilesRetrieve: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly file_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["file_id", "project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly file_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly user: {
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly project: {
                    readonly type: "string";
                    readonly readOnly: true;
                };
                readonly file_type: {
                    readonly type: "string";
                    readonly maxLength: 255;
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly status: {
                    readonly nullable: true;
                    readonly oneOf: readonly [{
                        readonly enum: readonly ["succeeded", "failed", "finished", "processing"];
                        readonly type: "string";
                        readonly description: "* `succeeded` - Status Succeeded\n* `failed` - Status Failed\n* `finished` - Status Finished\n* `processing` - Status Processing\n\n`succeeded` `failed` `finished` `processing`";
                    }, {
                        readonly enum: readonly [any];
                    }];
                };
            };
            readonly required: readonly ["created_at", "file_id", "file_type", "project", "user"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2InfoRetrieve: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly db_provider: {
                    readonly title: "Db Provider";
                    readonly type: "string";
                };
                readonly embeddings_provider: {
                    readonly title: "Embeddings Provider";
                    readonly type: "string";
                };
                readonly llm_provider: {
                    readonly title: "Llm Provider";
                    readonly type: "string";
                };
                readonly llm_model: {
                    readonly title: "Llm Model";
                    readonly type: "string";
                };
                readonly collection_size: {
                    readonly title: "Collection Size";
                    readonly type: "integer";
                };
            };
            readonly required: readonly ["db_provider", "embeddings_provider", "llm_provider", "llm_model", "collection_size"];
            readonly title: "YodaInfoResponse";
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "object";
                            readonly properties: {
                                readonly "<parameter_name>": {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly required: readonly ["<parameter_name>"];
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly details: {
                    readonly type: "string";
                    readonly default: "Not Found";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2QueryCreate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly query: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Enter your question or query about the data. The large language model (LLM) will provide a response.";
            };
            readonly llm_provider: {
                readonly type: "string";
                readonly minLength: 1;
                readonly default: "openai";
                readonly description: "Select a provider for the large language model for processing. Leave empty for default.";
            };
            readonly llm_model: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Specify the model to use for language processing. Leave empty for default.";
            };
            readonly k: {
                readonly type: "integer";
                readonly minimum: 1;
                readonly default: 3;
                readonly description: "How many results chunk you want to return";
            };
            readonly history: {
                readonly type: "array";
                readonly items: {
                    readonly type: "object";
                    readonly additionalProperties: true;
                    readonly description: "A dictionary representing a single conversation in the previous history. Must contain 'user' and 'assistant' fields.";
                };
                readonly default: readonly [];
                readonly description: "A list containing all the previous conversations between the user and the chatbot AI. Each item in the list should be a dictionary with two keys: 'user' and 'assistant'.";
            };
            readonly chatbot_global_action: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "A system message that helps set the behavior of the assistant.";
            };
            readonly filter_documents: {
                readonly type: "object";
                readonly additionalProperties: true;
                readonly description: "Filter uploaded documents based on their metadata. Specify key-value pairs where the key represents the metadata field and the value is the desired metadata value. Please ensure that the provided metadata keys are available in your database.";
            };
            readonly temperature: {
                readonly type: "number";
                readonly format: "double";
                readonly maximum: 2;
                readonly minimum: 0;
                readonly default: 0;
                readonly description: "Higher values mean the model will take more risks and value 0 (argmax sampling) works better for scenarios with a well-defined answer.";
            };
            readonly max_tokens: {
                readonly type: "integer";
                readonly maximum: 16385;
                readonly minimum: 1;
                readonly default: 100;
                readonly description: "The maximum number of tokens to generate in the completion. The token count of your prompt plus max_tokens cannot exceed the model's context length.";
            };
            readonly conversation_id: {
                readonly type: "string";
                readonly format: "uuid";
            };
        };
        readonly required: readonly ["query"];
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly properties: {
                readonly result: {
                    readonly title: "Result";
                    readonly type: "string";
                };
                readonly llm_provider: {
                    readonly title: "Llm Provider";
                    readonly type: "string";
                };
                readonly llm_model: {
                    readonly title: "Llm Model";
                    readonly type: "string";
                };
            };
            readonly required: readonly ["result", "llm_provider", "llm_model"];
            readonly title: "YodaAskLlmResponse";
            readonly type: "object";
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "400": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "object";
                            readonly properties: {
                                readonly "<parameter_name>": {
                                    readonly type: "array";
                                    readonly items: {
                                        readonly type: "string";
                                    };
                                };
                            };
                            readonly required: readonly ["<parameter_name>"];
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "403": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "404": {
            readonly type: "object";
            readonly properties: {
                readonly details: {
                    readonly type: "string";
                    readonly default: "Not Found";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "500": {
            readonly type: "object";
            readonly properties: {
                readonly error: {
                    readonly type: "object";
                    readonly properties: {
                        readonly type: {
                            readonly type: "string";
                        };
                        readonly message: {
                            readonly type: "string";
                        };
                    };
                    readonly required: readonly ["message", "type"];
                };
            };
            readonly required: readonly ["error"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsAskyodaV2UpdateProjectPartialUpdate: {
    readonly body: {
        readonly type: "object";
        readonly properties: {
            readonly ocr_provider: {
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly speech_to_text_provider: {
                readonly type: "string";
                readonly minLength: 1;
            };
            readonly llm_provider: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Select a default LLM provider to use in your project.";
            };
            readonly llm_model: {
                readonly type: "string";
                readonly minLength: 1;
                readonly description: "Select a default Model for LLM provider to use in your project";
            };
            readonly chunk_size: {
                readonly type: readonly ["integer", "null"];
                readonly maximum: 10000;
                readonly minimum: 1;
            };
            readonly chunk_separators: {
                readonly type: readonly ["array", "null"];
                readonly items: {
                    readonly type: "string";
                };
            };
        };
        readonly $schema: "http://json-schema.org/draft-04/schema#";
    };
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
};
declare const AiproductsDeleteDestroy: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
};
declare const AiproductsRootList: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_type: {
                    readonly type: "string";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly [];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "array";
            readonly items: {
                readonly type: "object";
                readonly properties: {
                    readonly project_id: {
                        readonly type: "string";
                        readonly format: "uuid";
                        readonly readOnly: true;
                    };
                    readonly project_name: {
                        readonly type: "string";
                        readonly maxLength: 100;
                    };
                    readonly project_type: {
                        readonly enum: readonly ["AskYoDa", "Translathor", "X-Merge"];
                        readonly type: "string";
                        readonly description: "* `AskYoDa` - Askyoda\n* `Translathor` - Translathor\n* `X-Merge` - X Merge\n\n`AskYoDa` `Translathor` `X-Merge`";
                    };
                    readonly created_at: {
                        readonly type: "string";
                        readonly format: "date-time";
                        readonly readOnly: true;
                    };
                    readonly user: {
                        readonly type: "string";
                        readonly format: "uuid";
                    };
                };
                readonly required: readonly ["created_at", "project_id", "project_name", "project_type", "user"];
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const AiproductsRootRetrieve: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["project_id"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly project_id: {
                    readonly type: "string";
                    readonly format: "uuid";
                    readonly readOnly: true;
                };
                readonly project_name: {
                    readonly type: "string";
                    readonly maxLength: 100;
                };
                readonly project_type: {
                    readonly enum: readonly ["AskYoDa", "Translathor", "X-Merge"];
                    readonly type: "string";
                    readonly description: "* `AskYoDa` - Askyoda\n* `Translathor` - Translathor\n* `X-Merge` - X Merge\n\n`AskYoDa` `Translathor` `X-Merge`";
                };
                readonly created_at: {
                    readonly type: "string";
                    readonly format: "date-time";
                    readonly readOnly: true;
                };
                readonly user: {
                    readonly type: "string";
                    readonly format: "uuid";
                };
            };
            readonly required: readonly ["created_at", "project_id", "project_name", "project_type", "user"];
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { AiproductsAskyodaV2AddFileCreate, AiproductsAskyodaV2AddTextCreate, AiproductsAskyodaV2AddUrlCreate, AiproductsAskyodaV2AskLlmCreate, AiproductsAskyodaV2ConversationsCreate, AiproductsAskyodaV2ConversationsDestroy, AiproductsAskyodaV2ConversationsList, AiproductsAskyodaV2ConversationsPartialUpdate, AiproductsAskyodaV2ConversationsRetrieve, AiproductsAskyodaV2ConversationsUpdate, AiproductsAskyodaV2Create, AiproductsAskyodaV2DeleteChunkDestroy, AiproductsAskyodaV2FilesDestroy, AiproductsAskyodaV2FilesList, AiproductsAskyodaV2FilesRetrieve, AiproductsAskyodaV2InfoRetrieve, AiproductsAskyodaV2QueryCreate, AiproductsAskyodaV2UpdateProjectPartialUpdate, AiproductsDeleteDestroy, AiproductsRootList, AiproductsRootRetrieve };
