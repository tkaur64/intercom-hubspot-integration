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
```

### 2. Install dependencies
npm install

### 3. Create .env file
INTERCOM_CLIENT_ID=your_intercom_client_id
INTERCOM_CLIENT_SECRET=your_intercom_client_secret

HUBSPOT_PRIVATE_APP_KEY=your_hubspot_private_app_key

## 🔧 How to run

### 1. Run the server
node index.js

### 2. Open browser and visit http://localhost:3000/auth/intercom

### 3. Allow all access

### 4. Run the APIs in the following order:
#### i. http://localhost:3000/contacts
#### ii. http://localhost:3000/companies
#### iii. http://localhost:3000/map-contacts
#### iv. http://localhost:3000/map-companies
#### v. http://localhost:3000/associate-contact-company

## Output Screenshots
<img width="1918" height="971" alt="image" src="https://github.com/user-attachments/assets/a465047d-be47-4a0a-b483-04d05a9d5410" />

<img width="1918" height="972" alt="image" src="https://github.com/user-attachments/assets/0c801615-d698-40a5-ac96-ba2f2e3de8ac" />





