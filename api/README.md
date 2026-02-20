# RAG AI Chat — Deployment Guide

This Azure Function powers the AI chatbot on Mahdi's portfolio website. It uses **Azure OpenAI** with your resume embedded as RAG context.

## Architecture

```
[Browser] → POST /api/chat → [Azure Function] → [Azure OpenAI (GPT-4o-mini)]
                                      ↑
                           Resume context injected as system prompt
```

## Prerequisites

1. **Azure Subscription** (your Microsoft intern subscription works)
2. **Azure OpenAI resource** with a deployed model
3. **Azure Functions Core Tools** (optional, for local testing)

---

## Step 1: Create Azure OpenAI Resource

```bash
# In Azure Portal:
# 1. Search "Azure OpenAI" → Create
# 2. Choose your subscription + resource group
# 3. Region: Sweden Central or East US (best availability)
# 4. Pricing: Standard S0
# 5. After creation → Go to Azure AI Foundry portal
# 6. Deployments → Create → gpt-4o-mini → Name it "gpt-4o-mini"
```

Note the **Endpoint** and **API Key** from the resource's "Keys and Endpoints" page.

## Step 2: Create Azure Function App

### Option A: Azure Portal (easiest)

1. Search **"Function App"** → Create
2. Settings:
   - **Name:** `mahdi-ai-chat` (or any unique name)
   - **Runtime:** Node.js 20 LTS
   - **Region:** Same as your OpenAI resource
   - **Plan:** Consumption (serverless, free tier: 1M executions/month)
3. After creation, go to **Configuration** → **Application Settings** and add:

| Setting | Value |
|---------|-------|
| `AZURE_OPENAI_ENDPOINT` | `https://YOUR-RESOURCE.openai.azure.com` |
| `AZURE_OPENAI_API_KEY` | Your API key |
| `AZURE_OPENAI_DEPLOYMENT` | `gpt-4o-mini` |

4. Go to **CORS** settings → Add `https://syedjaffar313.github.io`

### Option B: Azure CLI

```bash
# Create resource group
az group create --name mahdi-chat-rg --location swedencentral

# Create Function App
az functionapp create \
  --resource-group mahdi-chat-rg \
  --consumption-plan-location swedencentral \
  --runtime node \
  --runtime-version 20 \
  --functions-version 4 \
  --name mahdi-ai-chat \
  --storage-account mahdichatstorage

# Configure secrets
az functionapp config appsettings set \
  --resource-group mahdi-chat-rg \
  --name mahdi-ai-chat \
  --settings \
    AZURE_OPENAI_ENDPOINT="https://YOUR-RESOURCE.openai.azure.com" \
    AZURE_OPENAI_API_KEY="YOUR-KEY" \
    AZURE_OPENAI_DEPLOYMENT="gpt-4o-mini"

# Configure CORS
az functionapp cors add \
  --resource-group mahdi-chat-rg \
  --name mahdi-ai-chat \
  --allowed-origins "https://syedjaffar313.github.io"
```

## Step 3: Deploy the Function

```bash
# From the api/ directory
cd api
func azure functionapp publish mahdi-ai-chat
```

Or use **VS Code Azure Functions extension** → Right-click `api/` folder → Deploy to Function App.

## Step 4: Update the Frontend

In `script.js`, update the `API_URL` constant in the `initChat()` function:

```javascript
const API_URL = 'https://mahdi-ai-chat.azurewebsites.net/api/chat';
```

Replace `mahdi-ai-chat` with your actual Function App name.

## Step 5: Test

1. Open your website
2. Click the blue chat bubble (bottom-right)
3. Ask: "What is Mahdi's current role?"
4. You should get an AI-generated answer based on the resume context

---

## Local Testing

```bash
cd api
npm install
func start
```

Then temporarily change `API_URL` in script.js to `http://localhost:7071/api/chat`.

## Cost Estimate

| Resource | Pricing | Expected Monthly Cost |
|----------|---------|----------------------|
| Azure OpenAI (GPT-4o-mini) | $0.15/1M input tokens, $0.60/1M output tokens | ~$0.50 |
| Azure Functions (Consumption) | Free: 1M executions + 400K GB-s | $0.00 |
| **Total** | | **< $1/month** |

## Security Notes

- API key is stored in Azure Function **App Settings** (not in client code)
- The system prompt (resume context) is sent from the browser — this is fine since it's all public information
- CORS is locked to your GitHub Pages domain
- Messages are capped at last 10 to prevent token abuse
- Max tokens per response: 500

## Troubleshooting

| Issue | Fix |
|-------|-----|
| CORS error in console | Add your domain to Function App → CORS settings |
| 502 error | Check Azure OpenAI endpoint/key in App Settings |
| "Azure OpenAI not configured" | Missing `AZURE_OPENAI_ENDPOINT` or `AZURE_OPENAI_API_KEY` env vars |
| Slow first response | Cold start on Consumption plan — first request takes ~2-3s |
