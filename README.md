# Intercom → HubSpot Sync Service

This project syncs data from **Intercom** into **HubSpot**, including:

- OAuth authentication with Intercom
- Fetching Contacts (Users) & Companies from Intercom (with pagination)
- Upserting Contacts & Companies into HubSpot
- Creating Contact ↔ Company associations in HubSpot
- Batch operations for efficiency

This assignment was completed using **Node.js**, **Express**, and **Axios**.

---

## 🚀 Features

### ✓ 1. OAuth Authentication (Intercom)
Generates an Intercom `access_token` used for all subsequent API calls.

### ✓ 2. Fetch Data with Pagination
Automatically fetches all pages of:
- Intercom Contacts
- Intercom Companies

### ✓ 3. Batch Upsert to HubSpot
- Intercom Contacts → HubSpot Contacts  
- Intercom Companies → HubSpot Companies  
Matching based on:
- `intercom_contact_id`
- `intercom_company_id`

### ✓ 4. Automatic Mapping
After upsert:
- Intercom IDs are mapped to HubSpot IDs  
- These mappings are stored in:
  - `contactIdMap`
  - `companyIdMap`

### ✓ 5. Create Associations

---

## 🔧 Setup Instructions

### 1. Clone the Repo
```bash
git clone <your-repo-url>
cd <your-folder>

**### 2. Install dependencies**
npm install

**### 3. Create .env file**
INTERCOM_CLIENT_ID=your_intercom_client_id
INTERCOM_CLIENT_SECRET=your_intercom_client_secret

HUBSPOT_PRIVATE_APP_KEY=your_hubspot_private_app_key


