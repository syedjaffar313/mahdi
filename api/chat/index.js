// Azure Function: RAG Chat endpoint for Mahdi's portfolio
// Receives user messages + system prompt, forwards to Azure OpenAI

module.exports = async function (context, req) {
    // CORS preflight
    if (req.method === 'OPTIONS') {
        context.res = {
            status: 204,
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            }
        };
        return;
    }

    const corsHeaders = {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    };

    try {
        const { messages, systemPrompt } = req.body;

        if (!messages || !Array.isArray(messages)) {
            context.res = {
                status: 400,
                headers: corsHeaders,
                body: JSON.stringify({ error: 'Missing messages array' })
            };
            return;
        }

        const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
        const apiKey = process.env.AZURE_OPENAI_API_KEY;
        const deployment = process.env.AZURE_OPENAI_DEPLOYMENT || 'gpt-4o-mini';
        const apiVersion = '2024-08-01-preview';

        if (!endpoint || !apiKey) {
            context.res = {
                status: 500,
                headers: corsHeaders,
                body: JSON.stringify({ error: 'Azure OpenAI not configured' })
            };
            return;
        }

        // Build messages array with system prompt (RAG context)
        const chatMessages = [
            {
                role: 'system',
                content: systemPrompt || 'You are a helpful assistant for a portfolio website.'
            },
            // Keep only last 10 messages to stay within token limits
            ...messages.slice(-10)
        ];

        // Call Azure OpenAI REST API directly (no SDK needed)
        const url = `${endpoint}/openai/deployments/${deployment}/chat/completions?api-version=${apiVersion}`;

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'api-key': apiKey
            },
            body: JSON.stringify({
                messages: chatMessages,
                max_tokens: 500,
                temperature: 0.7,
                top_p: 0.9
            })
        });

        if (!response.ok) {
            const errorBody = await response.text();
            context.log.error(`Azure OpenAI error: ${response.status} - ${errorBody}`);
            context.res = {
                status: 502,
                headers: corsHeaders,
                body: JSON.stringify({ error: 'AI service error' })
            };
            return;
        }

        const data = await response.json();
        const reply = data.choices?.[0]?.message?.content || 'Sorry, I could not generate a response.';

        context.res = {
            status: 200,
            headers: corsHeaders,
            body: JSON.stringify({ reply })
        };

    } catch (error) {
        context.log.error('Chat function error:', error);
        context.res = {
            status: 500,
            headers: corsHeaders,
            body: JSON.stringify({ error: 'Internal server error' })
        };
    }
};
