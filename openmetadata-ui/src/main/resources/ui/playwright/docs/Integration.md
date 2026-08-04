[🏠 Home](./README.md) > **Integration**

# Integration

> **1 Components** | **10 Files** | **79 Tests** | **90 Scenarios** 🚀

## Table of Contents
- [Connectors](#connectors)

---

<div id="connectors"></div>

## Connectors

<details open>
<summary>📄 <b>ServiceIngestion.spec.ts</b> (38 tests, 38 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/nightly/ServiceIngestion.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/nightly/ServiceIngestion.spec.ts)

### Api Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Api Service** - Create & Ingest Api Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Api Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Api Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |

### Metabase Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metabase Service** - Create & Ingest Metabase Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Metabase Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Metabase Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |

### Mysql Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Mysql Service** - Create & Ingest Mysql Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Mysql Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Mysql Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |
| 4 | **Mysql Service** - Profiler ingestion workflow | Tests database-specific ingestion behaviors  Runs additional checks for Postgres, Redshift, and MySQL services |

### BigQuery Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **BigQuery Service** - Create & Ingest BigQuery Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **BigQuery Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **BigQuery Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |

### Kafka Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Kafka Service** - Create & Ingest Kafka Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Kafka Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Kafka Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |

### MlFlow Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlFlow Service** - Create & Ingest MlFlow Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **MlFlow Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **MlFlow Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |

### Superset Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Superset Service** - Create & Ingest Superset Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Superset Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Superset Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |

### Postgres Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Postgres Service** - Create & Ingest Postgres Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Postgres Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Postgres Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |
| 4 | **Postgres Service** - Service specific tests | Tests database-specific ingestion behaviors  Runs additional checks for Postgres, Redshift, and MySQL services |

### Redshift Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Redshift Service** - Create & Ingest Redshift Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Redshift Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Redshift Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |
| 4 | **Redshift Service** - Service specific tests | Tests database-specific ingestion behaviors  Runs additional checks for Postgres, Redshift, and MySQL services |

### Airflow Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Airflow Service** - Create & Ingest Airflow Service service | Tests service creation and first ingestion run  Creates the service and triggers ingestion |
| 2 | **Airflow Service** - Update description and verify description after re-run | Tests description update persistence across reruns  Updates service description and verifies it after rerun |
| 3 | **Airflow Service** - Update schedule options and verify | Tests schedule option updates  Updates ingestion schedule options and verifies they persist |

### Service form

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service form** - name field gates the Configure & Connect step | Tests service-name gating on the Configure & Connect step.  The merged step's advance button stays disabled until a valid service name is entered. Character-constraint validation is no longer done client-side in this form (the field enforces required + uniqueness only), so this test asserts the enable/disable gating rather than inline character-error messages. |

### Service Ingestion Pagination

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service Ingestion Pagination** - Default Pagination size should be 15 | Tests default ingestion pagination size  Verifies ingestion pipelines load with a default page size of 15 |

### Agent Run History - Last 5 Runs Visible

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Agent Run History - Last 5 Runs Visible** - Run metadata agent 5 times and verify all run statuses are visible | Tests that all 5 run statuses are visible in the UI without running the agent for real — the run-history data is mocked so the test stays fast and deterministic (no ingestion runtime dependency).  Validates the fix for #25800 — agent status shows true last 5 runs |

### Action buttons visible despite slow pipelineStatus API

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Action buttons visible despite slow pipelineStatus API** - Action buttons and pause visible when pipelineStatus API is slow | Validates that action buttons (logs, pause, run) are visible and functional even when the pipelineStatus API response is delayed (simulated via route mock). Regression test for the issue where high pipelineStatus API latency blocked rendering of action icons and the pause/resume button until the slow API resolved. |

### Edit agent wizard step navigation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Edit agent wizard step navigation** - Next advances to the schedule step right after opening the edit wizard | Regression guard for the nightly `Update schedule options` failures: the Configure Ingestion form loads its RJSF templates lazily while the wizard footer renders immediately, so advancing used to be a silent no-op that stranded the wizard on step 1 with no error. |

</details>

<details open>
<summary>📄 <b>ServiceDocPanel.spec.ts</b> (14 tests, 14 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ServiceDocPanel.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ServiceDocPanel.spec.ts)

### ServiceDocPanel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ServiceDocPanel** - should render headings not raw markdown | Render headings not raw markdown |
| 2 | **ServiceDocPanel** - should render admonition blocks with correct class | Render admonition blocks with correct class |
| 3 | **ServiceDocPanel** - should render code blocks inside pre > code, not as raw text | Render code blocks inside pre > code, not as raw text |
| 4 | **ServiceDocPanel** - should render links that open in a new tab | Render links that open in a new tab |
| 5 | **ServiceDocPanel** - should render image in Mssql doc panel | Render image in Mssql doc panel |
| 6 | **ServiceDocPanel** - should show field documentation when the corresponding form field is focused | Show field documentation when the corresponding form field is focused |
| 7 | **ServiceDocPanel** - should replace focused documentation when a new field is focused | Replace focused documentation when a new field is focused |
| 8 | **ServiceDocPanel** - should show service name docs without requirements when service name is focused | Show service name docs without requirements when service name is focused |
| 9 | **ServiceDocPanel** - should auto-focus service name input and show name docs when entering step 2 | Auto-focus service name input and show name docs when entering step 2 |
| 10 | **ServiceDocPanel** - should update panel when a oneOf select field is focused | Update panel when a oneOf select field is focused |
| 11 | **ServiceDocPanel** - should show section docs without a field fallback for fields with no markdown docs | Show section docs without a field fallback for fields with no markdown docs |
| 12 | **ServiceDocPanel** - should show general docs when no field is focused | Show general docs when no field is focused |
| 13 | **ServiceDocPanel** - should load the correct doc file for the selected service type | Load the correct doc file for the selected service type |
| 14 | **ServiceDocPanel** - should copy code block content to clipboard and show copied tooltip | Copy code block content to clipboard and show copied tooltip |

</details>

<details open>
<summary>📄 <b>ServiceCreationPermissions.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ServiceCreationPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ServiceCreationPermissions.spec.ts)

### Service Creation with isOwner() Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service Creation with isOwner() Permissions** - User with service creation permission can create a new database service | User with service creation permission can create a new database service |
| 2 | **Service Creation with isOwner() Permissions** - User can view but cannot modify services they do not own | User can view but cannot modify services they do not own |
| 3 | **Service Creation with isOwner() Permissions** - User can update connection details of their own service | User can update connection details of their own service |
| 4 | **Service Creation with isOwner() Permissions** - Different user can view but cannot modify service owned by another user | Different user can view but cannot modify service owned by another user |
| 5 | **Service Creation with isOwner() Permissions** - Owner can delete their own service | Owner can delete their own service |
| 6 | **Service Creation with isOwner() Permissions** - Owner can update description of their service | Owner can update description of their service |
| 7 | **Service Creation with isOwner() Permissions** - User with Trigger permission can run an ingestion pipeline without EditAll | User with Trigger permission can run an ingestion pipeline without EditAll |
| 8 | **Service Creation with isOwner() Permissions** - User with EditAll but not Trigger cannot run a pipeline | User with EditAll but not Trigger cannot run a pipeline |

</details>

<details open>
<summary>📄 <b>ServiceForm.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ServiceForm.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ServiceForm.spec.ts)

### Service form functionality

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service form functionality** - Verify form selects are working properly | Form selects are working properly |
| 2 | **Service form functionality** - Verify SSL cert upload with long filename and UI overflow handling | SSL cert upload with long filename and UI overflow handling |
| 3 | **Service form functionality** - Verify service name field validation errors | Service name field validation errors |
| 4 | **Service form functionality** - Verify if string input inside oneOf config works properly | If string input inside oneOf config works properly |
| 5 | **Service form functionality** - should persist empty schemaRegistryTopicSuffixName when the field is cleared | Persist empty schemaRegistryTopicSuffixName when the field is cleared |
| 6 | **Service form functionality** - should show service name error and not open modal when test connection clicked without service name | Show service name error and not open modal when test connection clicked without service name |
| 7 | **Service form functionality** - should include service name in missing required field count shown on test connection card | Include service name in missing required field count shown on test connection card |
| 8 | **Service form functionality** - should focus the service name input when test connection is clicked without a name | Focus the service name input when test connection is clicked without a name |

</details>

<details open>
<summary>📄 <b>ServiceListing.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ServiceListing.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ServiceListing.spec.ts)

### Service Listing

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service Listing** - should render the service listing page | Render the service listing page |
| 2 | **Service Listing** - should send wildcard query_filter on name and displayName when searching | Send wildcard query_filter on name and displayName when searching |
| 3 | **Service Listing** - should find service when searching by displayName | Find service when searching by displayName |
| 4 | **Service Listing** - service listing pages should use the correct search index for search | Service listing pages should use the correct search index for search |
| | ↳ *${...} uses ${...}* | |

</details>

<details open>
<summary>📄 <b>ServiceAgentsLiveProgress.spec.ts</b> (3 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ServiceAgentsLiveProgress.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ServiceAgentsLiveProgress.spec.ts)

### Service Agents live progress (SSE)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service Agents live progress (SSE)** - agent card and summary update live from the progress stream | Agent card and summary update live from the progress stream |
| | ↳ *Seeded run renders before any live event* | |
| | ↳ *Card shows the configured schedule* | |
| | ↳ *First progress frame flips the card to running* | |
| | ↳ *Next frame advances the counters* | |
| | ↳ *Terminal frame completes the run* | |

### Service Agents stream discovery (SSE)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service Agents stream discovery (SSE)** - agent discovered from the stream updates card and tab counts without reload | Agent discovered from the stream updates card and tab counts without reload |
| | ↳ *Card appears live without a reload* | |
| | ↳ *Agents tab count includes the discovered agent* | |
| | ↳ *Metadata sub-tab count includes the discovered agent* | |
| 2 | **Service Agents stream discovery (SSE)** - agent discovered while on another tab updates count and appears on Agents tab | Agent discovered while on another tab updates count and appears on Agents tab |
| | ↳ *Agents tab count updates while on another tab* | |
| | ↳ *Discovered agent card is present on the Agents tab without reload* | |

</details>

<details open>
<summary>📄 <b>ServiceAgentsPauseResume.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ServiceAgentsPauseResume.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ServiceAgentsPauseResume.spec.ts)

### Service Agents pause and resume

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service Agents pause and resume** - should offer pause for an enabled agent and resume in disabled state | Offer pause for an enabled agent and resume in disabled state |

</details>

<details open>
<summary>📄 <b>ApiCollection.spec.ts</b> (1 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ApiCollection.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ApiCollection.spec.ts)

### API Collection Entity Special Test Cases

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **API Collection Entity Special Test Cases** - Verify Owner Propagation: owner should be propagated to the API Collection's API Endpoint | Owner Propagation: owner should be propagated to the API Collection's API Endpoint |
| | ↳ *Verify user Owner Propagation: owner should be propagated to the API Collection's API Endpoint* | |
| | ↳ *Verify team Owner Propagation: owner should be propagated to the API Collection's API Endpoint* | |

</details>

<details open>
<summary>📄 <b>ApiServiceRest.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ApiServiceRest.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ApiServiceRest.spec.ts)

### API service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **API service** - add update and delete api service type REST | Add update and delete api service type REST |

</details>

<details open>
<summary>📄 <b>IngestionBot.spec.ts</b> (1 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/IngestionBot.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/IngestionBot.spec.ts)

### Ingestion Bot 

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ingestion Bot ** - Ingestion bot should be able to access domain specific domain | Ingestion bot should be able to access domain specific domain |
| | ↳ *Assign assets to domains* | |
| | ↳ *Ingestion bot should access domain assigned assets* | |
| | ↳ *Assign services to domains* | |
| | ↳ *Ingestion bot should access domain assigned services* | |

</details>


---

