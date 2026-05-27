export type AgentStreamParams = {
  /** Provider stream params override (best-effort). */
  temperature?: number;
  maxTokens?: number;
  /** Provider fast-mode override (best-effort). */
  fastMode?: boolean;
  /** LiteLLM provider metadata forwarded to spend logs. */
  litellmMetadata?: Record<string, unknown>;
  /** LiteLLM provider request tags forwarded to spend logs. */
  litellmTags?: string[];
  /** LiteLLM/OpenAI-compatible prompt cache namespace. */
  litellmPromptCacheKey?: string;
  /** LiteLLM/OpenAI-compatible prompt cache retention, e.g. "24h". */
  litellmPromptCacheRetention?: string;
};

// Simplified tool definition for client-provided tools (OpenResponses hosted tools)
export type ClientToolDefinition = {
  type: "function";
  function: {
    name: string;
    description?: string;
    parameters?: Record<string, unknown>;
    /** Strict argument enforcement (Responses API). Propagated from the request. */
    strict?: boolean;
  };
};
