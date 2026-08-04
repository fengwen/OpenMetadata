[🏠 Home](./README.md) > **Platform**

# Platform

> **13 Components** | **160 Files** | **2494 Tests** | **3615 Scenarios** 🚀

## Table of Contents
- [General](#general)
- [SSO](#sso)
- [Other](#other)
- [Entities](#entities)
- [Settings](#settings)
- [Personas & Customizations](#personas-customizations)
- [Navigation](#navigation)
- [Lineage (UI)](#lineage-ui-)
- [Users & Teams](#users-teams)
- [RBAC](#rbac)
- [Onboarding](#onboarding)
- [App Marketplace](#app-marketplace)
- [Authentication](#authentication)

---

<div id="general"></div>

## General

<details open>
<summary>📄 <b>LearningResources.spec.ts</b> (13 tests, 32 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/LearningResources.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/LearningResources.spec.ts)

### Learning Resources Admin Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Learning Resources Admin Page** - should validate required fields when creating a resource | Validate required fields when creating a resource |
| | ↳ *Open create resource drawer* | |
| | ↳ *Attempt to save without required fields* | |
| | ↳ *Close drawer* | |
| 2 | **Learning Resources Admin Page** - should create a new learning resource | Create a new learning resource |
| 3 | **Learning Resources Admin Page** - should preview a learning resource by clicking on row | Preview a learning resource by clicking on row |
| | ↳ *Click row and verify player modal opens* | |
| | ↳ *Close preview modal* | |
| 4 | **Learning Resources Admin Page** - should toggle between table and card views | Toggle between table and card views |
| | ↳ *Verify table view is default* | |
| | ↳ *Switch to card view* | |
| | ↳ *Switch back to table view* | |

### Learning Icon on Pages

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Learning Icon on Pages** - should show correct learning resource in drawer on lineage page | Show correct learning resource in drawer on lineage page |
| | ↳ *Navigate to lineage page* | |
| | ↳ *Open learning drawer and verify resource* | |
| | ↳ *Close drawer* | |
| 2 | **Learning Icon on Pages** - should open resource player when clicking on resource card in drawer | Open resource player when clicking on resource card in drawer |
| | ↳ *Navigate to glossary page* | |
| | ↳ *Open learning drawer* | |
| | ↳ *Click resource card and verify player opens* | |

### Learning Resources - Search and Filters

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Learning Resources - Search and Filters** - should send correct search param to API when searching | Send correct search param to API when searching |
| | ↳ *Type search term and verify API receives search param* | |
| | ↳ *Verify search result is shown in table* | |
| 2 | **Learning Resources - Search and Filters** - should send correct resourceType param when filtering by type | Send correct resourceType param when filtering by type |
| | ↳ *Apply Video type filter and verify API param* | |
| | ↳ *Verify filter chip is shown* | |
| 3 | **Learning Resources - Search and Filters** - should send correct category param when filtering by category | Send correct category param when filtering by category |
| | ↳ *Apply Discovery category filter and verify API param* | |
| | ↳ *Verify filter chip is shown* | |
| 4 | **Learning Resources - Search and Filters** - should send correct pageId param when filtering by context | Send correct pageId param when filtering by context |
| | ↳ *Apply Glossary context filter and verify API param* | |
| | ↳ *Verify filter chip is shown* | |
| 5 | **Learning Resources - Search and Filters** - should send correct status param when filtering by status | Send correct status param when filtering by status |
| | ↳ *Apply Active status filter and verify API param* | |
| | ↳ *Verify filter chip is shown* | |
| 6 | **Learning Resources - Search and Filters** - should clear all filters and reload without filter params | Clear all filters and reload without filter params |
| | ↳ *Apply a filter first* | |
| | ↳ *Clear all filters and verify clean API call* | |
| | ↳ *Verify filter chips are gone* | |

### Learning Resources E2E Flow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Learning Resources E2E Flow** - should create resource via UI and verify learning icon appears on target page | Create resource via UI and verify learning icon appears on target page |
| | ↳ *Navigate to Learning Resources admin page* | |
| | ↳ *Open add resource drawer and fill form* | |
| | ↳ *Save the resource and verify API response* | |
| | ↳ *Navigate to Glossary and verify resource in learning drawer* | |

</details>

<details open>
<summary>📄 <b>LiveIndexingTab.spec.ts</b> (4 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/LiveIndexingTab.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/LiveIndexingTab.spec.ts)

### Search Index Application - Live Indexing Tab

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Index Application - Live Indexing Tab** - Live Indexing tab is visible and loads data | Live Indexing tab is visible and loads data |
| | ↳ *Navigate to SearchIndexingApplication* | |
| | ↳ *Click Live Indexing tab* | |
| | ↳ *Verify table structure* | |
| 2 | **Search Index Application - Live Indexing Tab** - Live Indexing tab shows empty state when no records | Live Indexing tab shows empty state when no records |
| | ↳ *Navigate to SearchIndexingApplication* | |
| | ↳ *Verify empty state message when queue is empty* | |
| 3 | **Search Index Application - Live Indexing Tab** - Live Indexing tab displays records with correct status badges | Live Indexing tab displays records with correct status badges |
| | ↳ *Navigate to SearchIndexingApplication* | |
| | ↳ *Mock and verify retry queue data* | |
| 4 | **Search Index Application - Live Indexing Tab** - Live Indexing tab is not visible for other applications | Live Indexing tab is not visible for other applications |
| | ↳ *Navigate to Applications* | |
| | ↳ *Verify Live Indexing tab is absent on non-search apps* | |

</details>

<details open>
<summary>📄 <b>OktaSelfSignupClaims.spec.ts</b> (2 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Auth/OktaSelfSignupClaims.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Auth/OktaSelfSignupClaims.spec.ts)

### Okta self-signup username resolution — first-match claims order (issue #26591)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Okta self-signup username resolution — first-match claims order (issue #26591)** - resolves a non-empty username on /signup | Resolves a non-empty username on /signup |
| | ↳ *Authenticate at Okta* | |
| | ↳ *Verify the resolved username on /signup* | |

### Okta self-signup username resolution — principal claims mapping (username:preferred_username) (issue #26591)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Okta self-signup username resolution — principal claims mapping (username:preferred_username) (issue #26591)** - resolves a non-empty username on /signup | Resolves a non-empty username on /signup |
| | ↳ *Authenticate at Okta* | |
| | ↳ *Verify the resolved username on /signup* | |

</details>


---

<div id="sso"></div>

## SSO

<details open>
<summary>📄 <b>SSOConfiguration.spec.ts</b> (42 tests, 49 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SSOConfiguration.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SSOConfiguration.spec.ts)

### SSO Configuration Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SSO Configuration Tests** - should display all available SSO providers | Display all available SSO providers |
| 2 | **SSO Configuration Tests** - should enable Configure button when provider is selected | Enable Configure button when provider is selected |
| 3 | **SSO Configuration Tests** - should show correct fields for Google provider with confidential client | Show correct fields for Google provider with confidential client |
| 4 | **SSO Configuration Tests** - should show correct fields for Auth0 provider with confidential client | Show correct fields for Auth0 provider with confidential client |
| 5 | **SSO Configuration Tests** - should show correct fields for Okta provider with confidential client | Show correct fields for Okta provider with confidential client |
| 6 | **SSO Configuration Tests** - should show correct fields when selecting SAML provider | Show correct fields when selecting SAML provider |
| 7 | **SSO Configuration Tests** - should show correct fields when selecting LDAP provider | Show correct fields when selecting LDAP provider |
| 8 | **SSO Configuration Tests** - should show correct fields when selecting Google provider | Show correct fields when selecting Google provider |
| 9 | **SSO Configuration Tests** - should show correct fields when selecting Auth0 provider | Show correct fields when selecting Auth0 provider |
| 10 | **SSO Configuration Tests** - should show correct fields when selecting Okta provider | Show correct fields when selecting Okta provider |
| 11 | **SSO Configuration Tests** - should show OIDC Callback URL as readonly for Google provider | Show OIDC Callback URL as readonly for Google provider |
| 12 | **SSO Configuration Tests** - should show OIDC Callback URL as readonly for Auth0 provider | Show OIDC Callback URL as readonly for Auth0 provider |
| 13 | **SSO Configuration Tests** - should show OIDC Callback URL as readonly for Okta provider | Show OIDC Callback URL as readonly for Okta provider |
| 14 | **SSO Configuration Tests** - should show OIDC Callback URL as readonly for Azure AD provider | Show OIDC Callback URL as readonly for Azure AD provider |
| 15 | **SSO Configuration Tests** - should show SAML SP Entity ID and ACS URL as readonly | Show SAML SP Entity ID and ACS URL as readonly |
| 16 | **SSO Configuration Tests** - should display advanced config collapse for OIDC provider | Display advanced config collapse for OIDC provider |
| 17 | **SSO Configuration Tests** - should show advanced fields when advanced config is expanded | Show advanced fields when advanced config is expanded |
| 18 | **SSO Configuration Tests** - should hide publicKeyUrls field for confidential OIDC providers | Hide publicKeyUrls field for confidential OIDC providers |
| 19 | **SSO Configuration Tests** - should hide serverUrl field for OIDC providers | Hide serverUrl field for OIDC providers |
| 20 | **SSO Configuration Tests** - should hide preferredJwsAlgorithm and responseType for OIDC providers | Hide preferredJwsAlgorithm and responseType for OIDC providers |
| 21 | **SSO Configuration Tests** - should hide tokenValidationAlgorithm for OIDC providers | Hide tokenValidationAlgorithm for OIDC providers |
| 22 | **SSO Configuration Tests** - should hide jwtPrincipalClaims for LDAP provider | Hide jwtPrincipalClaims for LDAP provider |
| 23 | **SSO Configuration Tests** - should hide jwtPrincipalClaims for SAML provider | Hide jwtPrincipalClaims for SAML provider |
| 24 | **SSO Configuration Tests** - should hide publicKeyUrls for SAML provider | Hide publicKeyUrls for SAML provider |
| 25 | **SSO Configuration Tests** - should hide publicKeyUrls for LDAP provider | Hide publicKeyUrls for LDAP provider |
| 26 | **SSO Configuration Tests** - should hide SAML SP callback URL field | Hide SAML SP callback URL field |
| 27 | **SSO Configuration Tests** - should hide clientAuthenticationMethod for Auth0 provider | Hide clientAuthenticationMethod for Auth0 provider |
| 28 | **SSO Configuration Tests** - should show clientAuthenticationMethod for Okta provider | Show clientAuthenticationMethod for Okta provider |
| 29 | **SSO Configuration Tests** - should hide tenant field for Auth0 provider | Hide tenant field for Auth0 provider |
| 30 | **SSO Configuration Tests** - should show tenant field for Azure provider | Show tenant field for Azure provider |
| 31 | **SSO Configuration Tests** - should collapse advanced config by default | Collapse advanced config by default |
| 32 | **SSO Configuration Tests** - should expand and collapse advanced config when clicked | Expand and collapse advanced config when clicked |
| 33 | **SSO Configuration Tests** - should support full LDAP role mapping flow: add, fill, open roles dropdown, detect and resolve duplicates, and remove | Support full LDAP role mapping flow: add, fill, open roles dropdown, detect and resolve duplicates, and remove |
| 34 | **SSO Configuration Tests** - should render authReassignRoles as a searchable dropdown and support role selection, removal, and search filtering | Render authReassignRoles as a searchable dropdown and support role selection, removal, and search filtering |
| 35 | **SSO Configuration Tests** - should not display role mapping widget for non-LDAP providers | Not display role mapping widget for non-LDAP providers |

### SAML Metadata XML Upload

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SAML Metadata XML Upload** - should show upload drop zone for SAML provider | Show upload drop zone for SAML provider |
| 2 | **SAML Metadata XML Upload** - should parse valid SAML metadata XML and populate form fields, then clear fields on invalid XML | Parse valid SAML metadata XML and populate form fields, then clear fields on invalid XML |
| | ↳ *Wait for drop zone and upload valid SAML metadata XML* | |
| | ↳ *Verify success status card is shown* | |
| | ↳ *Verify IdP Entity ID field is populated* | |
| | ↳ *Verify IdP SSO Login URL field is populated* | |
| | ↳ *Verify IdP X509 Certificate field is populated* | |
| | ↳ *Click change file and upload invalid SAML metadata XML* | |
| | ↳ *Verify error status card is shown* | |
| | ↳ *Verify IdP fields are cleared after invalid upload* | |

### SSO Back Navigation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SSO Back Navigation** - should navigate to /settings when pressing back if SSO is already configured | Navigate to /settings when pressing back if SSO is already configured |
| 2 | **SSO Back Navigation** - should stay on /settings/sso when pressing back if SSO is not configured | Stay on /settings/sso when pressing back if SSO is not configured |

### SSO Test Configuration

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SSO Test Configuration** - should show the Test Configuration button and lockout warning for a new configuration | Show the Test Configuration button and lockout warning for a new configuration |
| 2 | **SSO Test Configuration** - should validate the configuration without saving and show a success banner | Validate the configuration without saving and show a success banner |
| 3 | **SSO Test Configuration** - should surface validation errors when the test fails | Surface validation errors when the test fails |

</details>

<details open>
<summary>📄 <b>SSOAuthentication.spec.ts</b> (25 tests, 25 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Auth/SSOAuthentication.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Auth/SSOAuthentication.spec.ts)

### SSO Authentication with Mock OIDC Provider

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SSO Authentication with Mock OIDC Provider** - mock OIDC provider serves valid discovery document | Mock OIDC provider serves valid discovery document |
| 2 | **SSO Authentication with Mock OIDC Provider** - mock OIDC provider serves JWKS endpoint | Mock OIDC provider serves JWKS endpoint |
| 3 | **SSO Authentication with Mock OIDC Provider** - should configure token expiry | Configure token expiry |
| 4 | **SSO Authentication with Mock OIDC Provider** - should force interaction required | Force interaction required |
| 5 | **SSO Authentication with Mock OIDC Provider** - should reset to defaults | Reset to defaults |
| 6 | **SSO Authentication with Mock OIDC Provider** - should show SSO login button and authenticate on click | Show SSO login button and authenticate on click |
| 7 | **SSO Authentication with Mock OIDC Provider** - should receive valid tokens after login | Receive valid tokens after login |
| 8 | **SSO Authentication with Mock OIDC Provider** - should show user info after authentication | Show user info after authentication |
| 9 | **SSO Authentication with Mock OIDC Provider** - should handle token expiry gracefully | Handle token expiry gracefully |
| 10 | **SSO Authentication with Mock OIDC Provider** - should handle 401 response by triggering token renewal | Handle 401 response by triggering token renewal |
| 11 | **SSO Authentication with Mock OIDC Provider** - should handle interaction_required gracefully | Handle interaction_required gracefully |
| 12 | **SSO Authentication with Mock OIDC Provider** - should share authentication state across tabs | Share authentication state across tabs |
| 13 | **SSO Authentication with Mock OIDC Provider** - should recover when refreshInProgress is stuck in localStorage | Recover when refreshInProgress is stuck in localStorage |
| 14 | **SSO Authentication with Mock OIDC Provider** - should handle concurrent renewal attempts gracefully | Handle concurrent renewal attempts gracefully |
| 15 | **SSO Authentication with Mock OIDC Provider** - should trigger session expired redirect on 401 with expired token message | Trigger session expired redirect on 401 with expired token message |
| 16 | **SSO Authentication with Mock OIDC Provider** - should queue multiple 401 responses and refresh only once | Queue multiple 401 responses and refresh only once |
| 17 | **SSO Authentication with Mock OIDC Provider** - should logout when token renewal fails | Logout when token renewal fails |
| 18 | **SSO Authentication with Mock OIDC Provider** - should handle disabled refresh tokens gracefully | Handle disabled refresh tokens gracefully |
| 19 | **SSO Authentication with Mock OIDC Provider** - should clear all auth state on logout | Clear all auth state on logout |
| 20 | **SSO Authentication with Mock OIDC Provider** - should propagate refreshed token to second tab | Propagate refreshed token to second tab |
| 21 | **SSO Authentication with Mock OIDC Provider** - should persist new token to IndexedDB after renewal and survive hard reload | Persist new token to IndexedDB after renewal and survive hard reload |
| 22 | **SSO Authentication with Mock OIDC Provider** - should use renewed token in API request headers after refresh | Use renewed token in API request headers after refresh |
| 23 | **SSO Authentication with Mock OIDC Provider** - should proactively refresh expired token when tab becomes visible | Proactively refresh expired token when tab becomes visible |
| 24 | **SSO Authentication with Mock OIDC Provider** - should reschedule timer when tab becomes visible with valid token | Reschedule timer when tab becomes visible with valid token |
| 25 | **SSO Authentication with Mock OIDC Provider** - should remain authenticated after extended idle period | Remain authenticated after extended idle period |

</details>

<details open>
<summary>📄 <b>SSOTestLogin.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SSOTestLogin.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SSOTestLogin.spec.ts)

### SSO Test Login

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SSO Test Login** - should offer Test Login for google as a public client | Offer Test Login for google as a public client |
| 2 | **SSO Test Login** - should offer Test Login for okta as a public client | Offer Test Login for okta as a public client |
| 3 | **SSO Test Login** - should offer Test Login for auth0 as a public client | Offer Test Login for auth0 as a public client |
| 4 | **SSO Test Login** - should not offer Test Login for a confidential client | Not offer Test Login for a confidential client |
| 5 | **SSO Test Login** - should not offer Test Login for SAML | Not offer Test Login for SAML |
| 6 | **SSO Test Login** - should not offer Test Login for LDAP | Not offer Test Login for LDAP |
| 7 | **SSO Test Login** - should show the resolved identity when the test login succeeds | Show the resolved identity when the test login succeeds |
| 8 | **SSO Test Login** - should show the failure reason when the configuration would reject the login | Show the failure reason when the configuration would reject the login |

</details>

<details open>
<summary>📄 <b>SSOLogin.spec.ts</b> (6 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Auth/SSOLogin.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Auth/SSOLogin.spec.ts)

### SSO Login

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SSO Login** - should display SSO sign-in button on /signin | Display SSO sign-in button on /signin |
| 2 | **SSO Login** - should complete full SSO login and verify user session | Complete full SSO login and verify user session |
| | ↳ *Click SSO button and redirect to IdP* | |
| | ↳ *Authenticate at the identity provider* | |
| | ↳ *Return to OpenMetadata and complete self-signup if needed* | |
| | ↳ *Verify JWT against loggedInUser API* | |
| 3 | **SSO Login** - should keep the session after a page reload | Keep the session after a page reload |
| 4 | **SSO Login** - should share the session with a new page in the same context | Share the session with a new page in the same context |
| 5 | **SSO Login** - should sign out and return to /signin | Sign out and return to /signin |
| 6 | **SSO Login** - should stay signed-out after refreshing | Stay signed-out after refreshing |

</details>

<details open>
<summary>📄 <b>SSORenewal.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Auth/SSORenewal.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Auth/SSORenewal.spec.ts)

### SSO Session Renewal

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SSO Session Renewal** - should silently refresh the access token after expiry | Silently refresh the access token after expiry |
| 2 | **SSO Session Renewal** - should queue concurrent 401s behind a single refresh call | Queue concurrent 401s behind a single refresh call |
| 3 | **SSO Session Renewal** - should force re-login when the SAML session is gone | Force re-login when the SAML session is gone |

</details>

<details open>
<summary>📄 <b>SSOSelfSignup.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Auth/SSOSelfSignup.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Auth/SSOSelfSignup.spec.ts)

### OIDC self-signup with mapped principal claims

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **OIDC self-signup with mapped principal claims** - persists the mapped email claim instead of deriving sub@domain | Persists the mapped email claim instead of deriving sub@domain |

</details>


---

<div id="other"></div>

## Other

<details open>
<summary>📄 <b>CustomProperties.spec.ts</b> (172 tests, 232 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/CustomProperties.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/CustomProperties.spec.ts)

### Add update and delete custom properties for table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for table** - Integer | Integer |
| 2 | **Add update and delete custom properties for table** - String | String |
| 3 | **Add update and delete custom properties for table** - Markdown | Markdown |
| 4 | **Add update and delete custom properties for table** - Duration | Duration |
| 5 | **Add update and delete custom properties for table** - Email | Email |
| 6 | **Add update and delete custom properties for table** - Number | Number |
| 7 | **Add update and delete custom properties for table** - Sql Query | Sql Query |
| 8 | **Add update and delete custom properties for table** - Time Interval | Time Interval |
| 9 | **Add update and delete custom properties for table** - Timestamp | Timestamp |
| 10 | **Add update and delete custom properties for table** - Hyperlink | Hyperlink |
| 11 | **Add update and delete custom properties for table** - Enum | Enum |
| 12 | **Add update and delete custom properties for table** - Table | Table |
| 13 | **Add update and delete custom properties for table** - Entity Reference | Entity Reference |
| 14 | **Add update and delete custom properties for table** - Entity Reference List | Entity Reference List |
| 15 | **Add update and delete custom properties for table** - Date | Date |
| 16 | **Add update and delete custom properties for table** - Time | Time |
| 17 | **Add update and delete custom properties for table** - Date Time | Date Time |
| 18 | **Add update and delete custom properties for table** - Set all CP types and update representative properties on table | Set all CP types and update representative properties on table |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 19 | **Add update and delete custom properties for table** - sqlQuery shows scrollable CodeMirror container and no expand toggle | SqlQuery shows scrollable CodeMirror container and no expand toggle |
| | ↳ *Set multi-line SQL value* | |
| | ↳ *Verify .CodeMirror-scroll is height-constrained and scrollable* | |
| | ↳ *Verify expand/collapse toggle is hidden* | |
| 20 | **Add update and delete custom properties for table** - entityReferenceList shows item count, scrollable list, no expand toggle | EntityReferenceList shows item count, scrollable list, no expand toggle |
| | ↳ *Set 5 user references as value* | |
| | ↳ *Verify item count (7) in property name* | |
| | ↳ *Verify .entity-list-body is scrollable* | |
| | ↳ *Verify expand/collapse toggle is hidden* | |
| 21 | **Add update and delete custom properties for table** - User visible in right panel when added as entityReferenceList custom property | User visible in right panel when added as entityReferenceList custom property |
| 22 | **Add update and delete custom properties for table** - table-cp shows row count, scrollable container, no expand toggle | Table-cp shows row count, scrollable container, no expand toggle |
| | ↳ *Add 5 rows of data to table property* | |
| | ↳ *Verify row count (5) in property name* | |
| | ↳ *Verify .custom-property-scrollable-container is scrollable* | |
| | ↳ *Verify expand/collapse toggle is hidden* | |
| 23 | **Add update and delete custom properties for table** - Enum: Set Value, Verify, Remove Value | Enum: Set Value, Verify, Remove Value |
| 24 | **Add update and delete custom properties for table** - Duration: advanced search equalTo and Contains operators | Duration: advanced search equalTo and Contains operators |
| | ↳ *Assign Custom Property Value* | |
| | ↳ *Verify Duration Type in Advance Search* | |
| 25 | **Add update and delete custom properties for table** - Number CP between operator sends gte/lte bounds (Issue #27482) | Number CP between operator sends gte/lte bounds (Issue #27482) |
| | ↳ *Create number custom property and assign value* | |
| | ↳ *between [50, 60]: query_filter must contain gte:50 and lte:60* | |
| | ↳ *not_between [1, 5]: query_filter must contain must_not with gte:1 and lte:5* | |
| | ↳ *between [100, 200]: entity with value 55.7 should NOT be visible* | |
| | ↳ *Cleanup* | |
| 26 | **Add update and delete custom properties for table** - no duplicate card after update | No duplicate card after update |
| | ↳ *Create property* | |
| | ↳ *Set initial value* | |
| | ↳ *Update value and verify only one card exists* | |
| | ↳ *Value persists after reload* | |
| | ↳ *Updated value is searchable via Advanced Search* | |
| 27 | **Add update and delete custom properties for table** - Should display custom properties for table in right panel | Display custom properties for table in right panel |
| 28 | **Add update and delete custom properties for table** - Should search custom properties for table in right panel | Search custom properties for table in right panel |
| 29 | **Add update and delete custom properties for table** - Should clear search and show all properties for table in right panel | Clear search and show all properties for table in right panel |
| 30 | **Add update and delete custom properties for table** - Should verify property name is visible for table in right panel | Property name is visible for table in right panel |

### Add update and delete custom properties for container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for container** - String | String |
| 2 | **Add update and delete custom properties for container** - Set & Update String CP on container | Set & Update String CP on container |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for container** - should show No Data placeholder when hyperlink has no value | Show No Data placeholder when hyperlink has no value |
| 4 | **Add update and delete custom properties for container** - should reject javascript: protocol URLs for XSS protection | Reject javascript: protocol URLs for XSS protection |
| 5 | **Add update and delete custom properties for container** - should accept valid http and https URLs | Accept valid http and https URLs |
| 6 | **Add update and delete custom properties for container** - should display URL when no display text is provided | Display URL when no display text is provided |
| 7 | **Add update and delete custom properties for container** - Should display custom properties for container in right panel | Display custom properties for container in right panel |
| 8 | **Add update and delete custom properties for container** - Should search custom properties for container in right panel | Search custom properties for container in right panel |
| 9 | **Add update and delete custom properties for container** - Should clear search and show all properties for container in right panel | Clear search and show all properties for container in right panel |
| 10 | **Add update and delete custom properties for container** - Should verify property name is visible for container in right panel | Property name is visible for container in right panel |

### Add update and delete custom properties for dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for dashboard** - String | String |
| 2 | **Add update and delete custom properties for dashboard** - Set & Update String CP on dashboard | Set & Update String CP on dashboard |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for dashboard** - Create custom property and configure search for Dashboard | Create custom property and configure search for Dashboard |
| | ↳ *Create and assign custom property to Dashboard* | |
| | ↳ *Configure search settings for Dashboard custom property* | |
| | ↳ *Search for Dashboard using custom property value* | |
| 4 | **Add update and delete custom properties for dashboard** - Verify Dashboard custom property persists in search settings | Dashboard custom property persists in search settings |
| 5 | **Add update and delete custom properties for dashboard** - Should display custom properties for dashboard in right panel | Display custom properties for dashboard in right panel |
| 6 | **Add update and delete custom properties for dashboard** - Should search custom properties for dashboard in right panel | Search custom properties for dashboard in right panel |
| 7 | **Add update and delete custom properties for dashboard** - Should clear search and show all properties for dashboard in right panel | Clear search and show all properties for dashboard in right panel |
| 8 | **Add update and delete custom properties for dashboard** - Should verify property name is visible for dashboard in right panel | Property name is visible for dashboard in right panel |
| 9 | **Add update and delete custom properties for dashboard** - String CP with all operators | String CP with all operators |
| 10 | **Add update and delete custom properties for dashboard** - String CP with numeric-like string value | String CP with numeric-like string value |
| | ↳ *Setup dashboard with numeric-like string value* | |
| | ↳ *Equal operator finds dashboard with string value "100"* | |
| | ↳ *Not_equal operator excludes dashboard with string value "100"* | |
| | ↳ *Contains operator finds dashboard with partial numeric-like string "10"* | |
| | ↳ *Not contains operator excludes dashboard with partial numeric-like string "10"* | |
| | ↳ *Is not null operator finds dashboard with numeric-like string value* | |
| 11 | **Add update and delete custom properties for dashboard** - Email CP with all operators | Email CP with all operators |
| 12 | **Add update and delete custom properties for dashboard** - Markdown CP with all operators | Markdown CP with all operators |
| 13 | **Add update and delete custom properties for dashboard** - SQL Query CP with all operators | SQL Query CP with all operators |
| 14 | **Add update and delete custom properties for dashboard** - Duration CP with all operators | Duration CP with all operators |
| 15 | **Add update and delete custom properties for dashboard** - Time CP with all operators | Time CP with all operators |
| 16 | **Add update and delete custom properties for dashboard** - Integer CP with all operators | Integer CP with all operators |
| 17 | **Add update and delete custom properties for dashboard** - Number CP with all operators | Number CP with all operators |
| 18 | **Add update and delete custom properties for dashboard** - Timestamp CP with all operators | Timestamp CP with all operators |
| 19 | **Add update and delete custom properties for dashboard** - Entity Reference CP with all operators | Entity Reference CP with all operators |
| 20 | **Add update and delete custom properties for dashboard** - Entity Reference List CP with all operators | Entity Reference List CP with all operators |
| 21 | **Add update and delete custom properties for dashboard** - DateTime CP with all operators | DateTime CP with all operators |
| 22 | **Add update and delete custom properties for dashboard** - Date CP with all operators | Date CP with all operators |
| 23 | **Add update and delete custom properties for dashboard** - Enum CP with all operators | Enum CP with all operators |
| 24 | **Add update and delete custom properties for dashboard** - Time Interval CP with operators | Time Interval CP with operators |
| 25 | **Add update and delete custom properties for dashboard** - Hyperlink CP with operators | Hyperlink CP with operators |
| 26 | **Add update and delete custom properties for dashboard** - Table CP - Name column with all operators | Table CP - Name column with all operators |
| 27 | **Add update and delete custom properties for dashboard** - Table CP - Role column with all operators | Table CP - Role column with all operators |
| 28 | **Add update and delete custom properties for dashboard** - Table CP - Sr No column with all operators | Table CP - Sr No column with all operators |

### Add update and delete custom properties for topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for topic** - String | String |
| 2 | **Add update and delete custom properties for topic** - Set & Update String CP on topic | Set & Update String CP on topic |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for topic** - Should display custom properties for topic in right panel | Display custom properties for topic in right panel |
| 4 | **Add update and delete custom properties for topic** - Should search custom properties for topic in right panel | Search custom properties for topic in right panel |
| 5 | **Add update and delete custom properties for topic** - Should clear search and show all properties for topic in right panel | Clear search and show all properties for topic in right panel |
| 6 | **Add update and delete custom properties for topic** - Should verify property name is visible for topic in right panel | Property name is visible for topic in right panel |

### Add update and delete custom properties for pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for pipeline** - String | String |
| 2 | **Add update and delete custom properties for pipeline** - Set & Update String CP on pipeline | Set & Update String CP on pipeline |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for pipeline** - Create custom property and configure search for Pipeline | Create custom property and configure search for Pipeline |
| | ↳ *Create and assign custom property to Pipeline* | |
| | ↳ *Configure search settings for Pipeline custom property* | |
| | ↳ *Search for Pipeline using custom property value* | |
| 4 | **Add update and delete custom properties for pipeline** - Verify Pipeline custom property persists in search settings | Pipeline custom property persists in search settings |
| 5 | **Add update and delete custom properties for pipeline** - Should display custom properties for pipeline in right panel | Display custom properties for pipeline in right panel |
| 6 | **Add update and delete custom properties for pipeline** - Should search custom properties for pipeline in right panel | Search custom properties for pipeline in right panel |
| 7 | **Add update and delete custom properties for pipeline** - Should clear search and show all properties for pipeline in right panel | Clear search and show all properties for pipeline in right panel |
| 8 | **Add update and delete custom properties for pipeline** - Should verify property name is visible for pipeline in right panel | Property name is visible for pipeline in right panel |

### Add update and delete custom properties for database

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for database** - String | String |
| 2 | **Add update and delete custom properties for database** - Set & Update String CP on database | Set & Update String CP on database |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for database** - Should display custom properties for database in right panel | Display custom properties for database in right panel |
| 4 | **Add update and delete custom properties for database** - Should search custom properties for database in right panel | Search custom properties for database in right panel |
| 5 | **Add update and delete custom properties for database** - Should clear search and show all properties for database in right panel | Clear search and show all properties for database in right panel |
| 6 | **Add update and delete custom properties for database** - Should verify property name is visible for database in right panel | Property name is visible for database in right panel |

### Add update and delete custom properties for databaseSchema

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for databaseSchema** - String | String |
| 2 | **Add update and delete custom properties for databaseSchema** - Set & Update String CP on databaseSchema | Set & Update String CP on databaseSchema |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for databaseSchema** - Should display custom properties for databaseSchema in right panel | Display custom properties for databaseSchema in right panel |
| 4 | **Add update and delete custom properties for databaseSchema** - Should search custom properties for databaseSchema in right panel | Search custom properties for databaseSchema in right panel |
| 5 | **Add update and delete custom properties for databaseSchema** - Should clear search and show all properties for databaseSchema in right panel | Clear search and show all properties for databaseSchema in right panel |
| 6 | **Add update and delete custom properties for databaseSchema** - Should verify property name is visible for databaseSchema in right panel | Property name is visible for databaseSchema in right panel |

### Add update and delete custom properties for glossaryTerm

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for glossaryTerm** - String | String |
| 2 | **Add update and delete custom properties for glossaryTerm** - Set & Update String CP on glossaryTerm | Set & Update String CP on glossaryTerm |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for glossaryTerm** - Should display custom properties for glossaryTerm in right panel | Display custom properties for glossaryTerm in right panel |
| 4 | **Add update and delete custom properties for glossaryTerm** - Should search custom properties for glossaryTerm in right panel | Search custom properties for glossaryTerm in right panel |
| 5 | **Add update and delete custom properties for glossaryTerm** - Should clear search and show all properties for glossaryTerm in right panel | Clear search and show all properties for glossaryTerm in right panel |
| 6 | **Add update and delete custom properties for glossaryTerm** - Should verify property name is visible for glossaryTerm in right panel | Property name is visible for glossaryTerm in right panel |

### Add update and delete custom properties for mlmodel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for mlmodel** - String | String |
| 2 | **Add update and delete custom properties for mlmodel** - Set & Update String CP on mlmodel | Set & Update String CP on mlmodel |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for mlmodel** - Should display custom properties for mlmodel in right panel | Display custom properties for mlmodel in right panel |
| 4 | **Add update and delete custom properties for mlmodel** - Should search custom properties for mlmodel in right panel | Search custom properties for mlmodel in right panel |
| 5 | **Add update and delete custom properties for mlmodel** - Should clear search and show all properties for mlmodel in right panel | Clear search and show all properties for mlmodel in right panel |
| 6 | **Add update and delete custom properties for mlmodel** - Should verify property name is visible for mlmodel in right panel | Property name is visible for mlmodel in right panel |

### Add update and delete custom properties for searchIndex

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for searchIndex** - String | String |
| 2 | **Add update and delete custom properties for searchIndex** - Set & Update String CP on searchIndex | Set & Update String CP on searchIndex |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for searchIndex** - Should display custom properties for searchIndex in right panel | Display custom properties for searchIndex in right panel |
| 4 | **Add update and delete custom properties for searchIndex** - Should search custom properties for searchIndex in right panel | Search custom properties for searchIndex in right panel |
| 5 | **Add update and delete custom properties for searchIndex** - Should clear search and show all properties for searchIndex in right panel | Clear search and show all properties for searchIndex in right panel |
| 6 | **Add update and delete custom properties for searchIndex** - Should verify property name is visible for searchIndex in right panel | Property name is visible for searchIndex in right panel |

### Add update and delete custom properties for storedProcedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for storedProcedure** - String | String |
| 2 | **Add update and delete custom properties for storedProcedure** - Set & Update String CP on storedProcedure | Set & Update String CP on storedProcedure |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for storedProcedure** - Should display custom properties for storedProcedure in right panel | Display custom properties for storedProcedure in right panel |
| 4 | **Add update and delete custom properties for storedProcedure** - Should search custom properties for storedProcedure in right panel | Search custom properties for storedProcedure in right panel |
| 5 | **Add update and delete custom properties for storedProcedure** - Should clear search and show all properties for storedProcedure in right panel | Clear search and show all properties for storedProcedure in right panel |
| 6 | **Add update and delete custom properties for storedProcedure** - Should verify property name is visible for storedProcedure in right panel | Property name is visible for storedProcedure in right panel |

### Add update and delete custom properties for dashboardDataModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for dashboardDataModel** - String | String |
| 2 | **Add update and delete custom properties for dashboardDataModel** - Set & Update String CP on dashboardDataModel | Set & Update String CP on dashboardDataModel |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for dashboardDataModel** - Should display custom properties for dashboardDataModel in right panel | Display custom properties for dashboardDataModel in right panel |
| 4 | **Add update and delete custom properties for dashboardDataModel** - Should search custom properties for dashboardDataModel in right panel | Search custom properties for dashboardDataModel in right panel |
| 5 | **Add update and delete custom properties for dashboardDataModel** - Should clear search and show all properties for dashboardDataModel in right panel | Clear search and show all properties for dashboardDataModel in right panel |
| 6 | **Add update and delete custom properties for dashboardDataModel** - Should verify property name is visible for dashboardDataModel in right panel | Property name is visible for dashboardDataModel in right panel |

### Add update and delete custom properties for metric

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for metric** - String | String |
| 2 | **Add update and delete custom properties for metric** - Set & Update String CP on metric | Set & Update String CP on metric |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for metric** - Should display custom properties for metric in right panel | Display custom properties for metric in right panel |
| 4 | **Add update and delete custom properties for metric** - Should search custom properties for metric in right panel | Search custom properties for metric in right panel |
| 5 | **Add update and delete custom properties for metric** - Should clear search and show all properties for metric in right panel | Clear search and show all properties for metric in right panel |
| 6 | **Add update and delete custom properties for metric** - Should verify property name is visible for metric in right panel | Property name is visible for metric in right panel |

### Add update and delete custom properties for chart

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for chart** - String | String |
| 2 | **Add update and delete custom properties for chart** - Set & Update String CP on chart | Set & Update String CP on chart |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for chart** - Should display custom properties for chart in right panel | Display custom properties for chart in right panel |
| 4 | **Add update and delete custom properties for chart** - Should search custom properties for chart in right panel | Search custom properties for chart in right panel |
| 5 | **Add update and delete custom properties for chart** - Should clear search and show all properties for chart in right panel | Clear search and show all properties for chart in right panel |
| 6 | **Add update and delete custom properties for chart** - Should verify property name is visible for chart in right panel | Property name is visible for chart in right panel |

### Add update and delete custom properties for apiCollection

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for apiCollection** - String | String |
| 2 | **Add update and delete custom properties for apiCollection** - Set & Update String CP on apiCollection | Set & Update String CP on apiCollection |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for apiCollection** - Should display custom properties for apiCollection in right panel | Display custom properties for apiCollection in right panel |
| 4 | **Add update and delete custom properties for apiCollection** - Should search custom properties for apiCollection in right panel | Search custom properties for apiCollection in right panel |
| 5 | **Add update and delete custom properties for apiCollection** - Should clear search and show all properties for apiCollection in right panel | Clear search and show all properties for apiCollection in right panel |
| 6 | **Add update and delete custom properties for apiCollection** - Should verify property name is visible for apiCollection in right panel | Property name is visible for apiCollection in right panel |

### Add update and delete custom properties for apiEndpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for apiEndpoint** - String | String |
| 2 | **Add update and delete custom properties for apiEndpoint** - Set & Update String CP on apiEndpoint | Set & Update String CP on apiEndpoint |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for apiEndpoint** - Should display custom properties for apiEndpoint in right panel | Display custom properties for apiEndpoint in right panel |
| 4 | **Add update and delete custom properties for apiEndpoint** - Should search custom properties for apiEndpoint in right panel | Search custom properties for apiEndpoint in right panel |
| 5 | **Add update and delete custom properties for apiEndpoint** - Should clear search and show all properties for apiEndpoint in right panel | Clear search and show all properties for apiEndpoint in right panel |
| 6 | **Add update and delete custom properties for apiEndpoint** - Should verify property name is visible for apiEndpoint in right panel | Property name is visible for apiEndpoint in right panel |

### Add update and delete custom properties for dataProduct

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for dataProduct** - String | String |
| 2 | **Add update and delete custom properties for dataProduct** - Set & Update String CP on dataProduct | Set & Update String CP on dataProduct |
| | ↳ *Set ${...}* | |
| | ↳ *Update representative properties* | |
| | ↳ *Update a representative property in Right Panel* | |
| 3 | **Add update and delete custom properties for dataProduct** - Should display custom properties for dataProduct in right panel | Display custom properties for dataProduct in right panel |
| 4 | **Add update and delete custom properties for dataProduct** - Should search custom properties for dataProduct in right panel | Search custom properties for dataProduct in right panel |
| 5 | **Add update and delete custom properties for dataProduct** - Should clear search and show all properties for dataProduct in right panel | Clear search and show all properties for dataProduct in right panel |
| 6 | **Add update and delete custom properties for dataProduct** - Should verify property name is visible for dataProduct in right panel | Property name is visible for dataProduct in right panel |

### Add update and delete custom properties for domain

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for domain** - String | String |

### Add update and delete custom properties for tableColumn

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add update and delete custom properties for tableColumn** - String | String |
| 2 | **Add update and delete custom properties for tableColumn** - Set string custom property on column and verify in UI | Set string custom property on column and verify in UI |

### Custom property name validation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Custom property name validation** - should show error when name starts with a non-alphanumeric character | Show error when name starts with a non-alphanumeric character |
| 2 | **Custom property name validation** - should show error when name contains a colon | Show error when name contains a colon |
| 3 | **Custom property name validation** - should show error when name contains a dollar sign | Show error when name contains a dollar sign |
| 4 | **Custom property name validation** - should show error when name contains a caret | Show error when name contains a caret |
| 5 | **Custom property name validation** - should show error when name contains a double quote | Show error when name contains a double quote |
| 6 | **Custom property name validation** - should show error when name contains a backslash | Show error when name contains a backslash |
| 7 | **Custom property name validation** - should show error when name contains a less-than sign | Show error when name contains a less-than sign |
| 8 | **Custom property name validation** - should show error when name contains a greater-than sign | Show error when name contains a greater-than sign |
| 9 | **Custom property name validation** - should show error when name contains an ampersand | Show error when name contains an ampersand |
| 10 | **Custom property name validation** - should show error when name contains an asterisk | Show error when name contains an asterisk |
| 11 | **Custom property name validation** - should show error when name contains a forward slash | Show error when name contains a forward slash |
| 12 | **Custom property name validation** - should show error when name contains a tilde | Show error when name contains a tilde |
| 13 | **Custom property name validation** - should accept a valid name starting with a letter | Accept a valid name starting with a letter |
| 14 | **Custom property name validation** - should accept a valid name with allowed special characters | Accept a valid name with allowed special characters |
| 15 | **Custom property name validation** - should show error when name exceeds 256 characters | Show error when name exceeds 256 characters |

</details>

<details open>
<summary>📄 <b>ODCSImportExport.spec.ts</b> (47 tests, 50 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ODCSImportExport.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ODCSImportExport.spec.ts)

### ODCS Import/Export

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ODCS Import/Export** - Import basic ODCS contract from test-data file | Import basic ODCS contract from test-data file |
| 2 | **ODCS Import/Export** - Import full ODCS contract with all sections from test-data file | Import full ODCS contract with all sections from test-data file |
| 3 | **ODCS Import/Export** - Import ODCS contract with draft status from test-data file | Import ODCS contract with draft status from test-data file |
| 4 | **ODCS Import/Export** - Import ODCS contract with v3.1.0 timestamp types from test-data file | Import ODCS contract with v3.1.0 timestamp types from test-data file |
| 5 | **ODCS Import/Export** - Import ODCS contract with SLA properties from test-data file | Import ODCS contract with SLA properties from test-data file |
| 6 | **ODCS Import/Export** - Import malformed ODCS YAML from test-data file shows error | Import malformed ODCS YAML from test-data file shows error |
| 7 | **ODCS Import/Export** - Import ODCS missing apiVersion from test-data file shows error | Import ODCS missing apiVersion from test-data file shows error |
| 8 | **ODCS Import/Export** - Import ODCS missing status from test-data file shows error | Import ODCS missing status from test-data file shows error |
| 9 | **ODCS Import/Export** - Import empty ODCS file from test-data shows error | Import empty ODCS file from test-data shows error |
| 10 | **ODCS Import/Export** - Import basic ODCS contract from JSON file | Import basic ODCS contract from JSON file |
| 11 | **ODCS Import/Export** - Import malformed JSON shows error | Import malformed JSON shows error |
| 12 | **ODCS Import/Export** - Import ODCS with missing kind shows error | Import ODCS with missing kind shows error |
| 13 | **ODCS Import/Export** - Import ODCS with wrong apiVersion shows error | Import ODCS with wrong apiVersion shows error |
| 14 | **ODCS Import/Export** - Import ODCS with wrong kind shows error | Import ODCS with wrong kind shows error |
| 15 | **ODCS Import/Export** - Import minimal ODCS contract (inline) | Import minimal ODCS contract (inline) |
| 16 | **ODCS Import/Export** - Import malformed ODCS YAML shows error (inline) | Import malformed ODCS YAML shows error (inline) |
| 17 | **ODCS Import/Export** - Export ODCS YAML and verify download | Export ODCS YAML and verify download |
| 18 | **ODCS Import/Export** - Import and Export round trip preserves data | Import and Export round trip preserves data |
| 19 | **ODCS Import/Export** - Merge mode - adds SLA to existing contract and verifies export | Merge mode - adds SLA to existing contract and verifies export |
| 20 | **ODCS Import/Export** - Replace mode - replaces existing contract completely and verifies export | Replace mode - replaces existing contract completely and verifies export |
| 21 | **ODCS Import/Export** - Import modal shows merge/replace options for existing contract | Import modal shows merge/replace options for existing contract |
| 22 | **ODCS Import/Export** - Import modal shows contract preview | Import modal shows contract preview |
| 23 | **ODCS Import/Export** - Import ODCS and export as OpenMetadata YAML | Import ODCS and export as OpenMetadata YAML |
| 24 | **ODCS Import/Export** - Import ODCS with description and verify OpenMetadata export | Import ODCS with description and verify OpenMetadata export |
| 25 | **ODCS Import/Export** - Import ODCS full contract and export both formats | Import ODCS full contract and export both formats |
| 26 | **ODCS Import/Export** - Verify SLA mapping from ODCS to OpenMetadata format | SLA mapping from ODCS to OpenMetadata format |
| 27 | **ODCS Import/Export** - Import ODCS with timezone in SLA properties | Import ODCS with timezone in SLA properties |
| 28 | **ODCS Import/Export** - Import ODCS with security/roles | Import ODCS with security/roles |
| 29 | **ODCS Import/Export** - Import ODCS with quality rules | Import ODCS with quality rules |
| 30 | **ODCS Import/Export** - Import ODCS with mustBeBetween quality rules | Import ODCS with mustBeBetween quality rules |
| 31 | **ODCS Import/Export** - Import ODCS with team owner | Import ODCS with team owner |
| 32 | **ODCS Import/Export** - Import ODCS with team - contract created successfully | Import ODCS with team - contract created successfully |
| 33 | **ODCS Import/Export** - Import invalid ODCS missing required fields shows error | Import invalid ODCS missing required fields shows error |
| 34 | **ODCS Import/Export** - Import button disabled for empty/invalid file | Import button disabled for empty/invalid file |
| 35 | **ODCS Import/Export** - Schema validation shows warning when fields do not exist in entity | Schema validation shows warning when fields do not exist in entity |
| 36 | **ODCS Import/Export** - Import button disabled when schema validation fails | Import button disabled when schema validation fails |
| 37 | **ODCS Import/Export** - Schema validation shows loading state during validation | Schema validation shows loading state during validation |
| 38 | **ODCS Import/Export** - Schema validation passes for contract without schema definition | Schema validation passes for contract without schema definition |
| 39 | **ODCS Import/Export** - Multi-object ODCS contract shows object selector | Multi-object ODCS contract shows object selector |
| 40 | **ODCS Import/Export** - Multi-object ODCS contract - selecting object enables import and completes import | Multi-object ODCS contract - selecting object enables import and completes import |
| 41 | **ODCS Import/Export** - Multi-object ODCS contract - object selector shows all schema objects | Multi-object ODCS contract - object selector shows all schema objects |
| 42 | **ODCS Import/Export** - Single-object ODCS contract does not show object selector | Single-object ODCS contract does not show object selector |
| 43 | **ODCS Import/Export** - Import ODCS, modify via UI, export and verify changes | Import ODCS, modify via UI, export and verify changes |
| 44 | **ODCS Import/Export** - Import ODCS with SLA, modify SLA via UI, export and verify SLA changes | Import ODCS with SLA, modify SLA via UI, export and verify SLA changes |
| 45 | **ODCS Import/Export** - Import ODCS with markdown description and verify proper rendering | Import ODCS with markdown description and verify proper rendering |
| 46 | **ODCS Import/Export** - Create contract from UI, export OM format, import with merge, verify data | Create contract from UI, export OM format, import with merge, verify data |
| | ↳ *Create contract from UI with SLA* | |
| | ↳ *Export as OM format and modify description* | |
| | ↳ *Import modified OM YAML with merge option* | |
| | ↳ *Verify merged contract preserves SLA and updates description* | |
| 47 | **ODCS Import/Export** - OM format export and import round trip - create, export, delete, reimport | OM format export and import round trip - create, export, delete, reimport |

</details>

<details open>
<summary>📄 <b>TaskAllEntities.spec.ts</b> (46 tests, 46 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskAllEntities.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskAllEntities.spec.ts)

### Task Resolution - Table Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Table Entity (All Task Types)** - DescriptionUpdate task for Table | DescriptionUpdate task for Table |
| 2 | **Task Resolution - Table Entity (All Task Types)** - OwnershipUpdate task for Table | OwnershipUpdate task for Table |
| 3 | **Task Resolution - Table Entity (All Task Types)** - TierUpdate task for Table | TierUpdate task for Table |
| 4 | **Task Resolution - Table Entity (All Task Types)** - DomainUpdate task for Table | DomainUpdate task for Table |

### Task Resolution - Topic Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Topic Entity (All Task Types)** - DescriptionUpdate task for Topic | DescriptionUpdate task for Topic |
| 2 | **Task Resolution - Topic Entity (All Task Types)** - OwnershipUpdate task for Topic | OwnershipUpdate task for Topic |
| 3 | **Task Resolution - Topic Entity (All Task Types)** - TierUpdate task for Topic | TierUpdate task for Topic |
| 4 | **Task Resolution - Topic Entity (All Task Types)** - DomainUpdate task for Topic | DomainUpdate task for Topic |

### Task Resolution - Dashboard Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Dashboard Entity (All Task Types)** - DescriptionUpdate task for Dashboard | DescriptionUpdate task for Dashboard |
| 2 | **Task Resolution - Dashboard Entity (All Task Types)** - OwnershipUpdate task for Dashboard | OwnershipUpdate task for Dashboard |
| 3 | **Task Resolution - Dashboard Entity (All Task Types)** - TierUpdate task for Dashboard | TierUpdate task for Dashboard |
| 4 | **Task Resolution - Dashboard Entity (All Task Types)** - DomainUpdate task for Dashboard | DomainUpdate task for Dashboard |

### Task Resolution - Pipeline Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Pipeline Entity (All Task Types)** - DescriptionUpdate task for Pipeline | DescriptionUpdate task for Pipeline |
| 2 | **Task Resolution - Pipeline Entity (All Task Types)** - OwnershipUpdate task for Pipeline | OwnershipUpdate task for Pipeline |
| 3 | **Task Resolution - Pipeline Entity (All Task Types)** - TierUpdate task for Pipeline | TierUpdate task for Pipeline |
| 4 | **Task Resolution - Pipeline Entity (All Task Types)** - DomainUpdate task for Pipeline | DomainUpdate task for Pipeline |

### Task Resolution - Container Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Container Entity (All Task Types)** - DescriptionUpdate task for Container | DescriptionUpdate task for Container |
| 2 | **Task Resolution - Container Entity (All Task Types)** - OwnershipUpdate task for Container | OwnershipUpdate task for Container |
| 3 | **Task Resolution - Container Entity (All Task Types)** - TierUpdate task for Container | TierUpdate task for Container |
| 4 | **Task Resolution - Container Entity (All Task Types)** - DomainUpdate task for Container | DomainUpdate task for Container |

### Task Resolution - MLModel Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - MLModel Entity (All Task Types)** - DescriptionUpdate task for MLModel | DescriptionUpdate task for MLModel |
| 2 | **Task Resolution - MLModel Entity (All Task Types)** - OwnershipUpdate task for MLModel | OwnershipUpdate task for MLModel |
| 3 | **Task Resolution - MLModel Entity (All Task Types)** - TierUpdate task for MLModel | TierUpdate task for MLModel |
| 4 | **Task Resolution - MLModel Entity (All Task Types)** - DomainUpdate task for MLModel | DomainUpdate task for MLModel |

### Task Resolution - SearchIndex Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - SearchIndex Entity (All Task Types)** - DescriptionUpdate task for SearchIndex | DescriptionUpdate task for SearchIndex |
| 2 | **Task Resolution - SearchIndex Entity (All Task Types)** - OwnershipUpdate task for SearchIndex | OwnershipUpdate task for SearchIndex |
| 3 | **Task Resolution - SearchIndex Entity (All Task Types)** - TierUpdate task for SearchIndex | TierUpdate task for SearchIndex |
| 4 | **Task Resolution - SearchIndex Entity (All Task Types)** - DomainUpdate task for SearchIndex | DomainUpdate task for SearchIndex |

### Task Resolution - Metric Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Metric Entity (All Task Types)** - DescriptionUpdate task for Metric | DescriptionUpdate task for Metric |
| 2 | **Task Resolution - Metric Entity (All Task Types)** - OwnershipUpdate task for Metric | OwnershipUpdate task for Metric |
| 3 | **Task Resolution - Metric Entity (All Task Types)** - TierUpdate task for Metric | TierUpdate task for Metric |
| 4 | **Task Resolution - Metric Entity (All Task Types)** - DomainUpdate task for Metric | DomainUpdate task for Metric |

### Task Resolution - Glossary Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Glossary Entity (All Task Types)** - DescriptionUpdate task for Glossary | DescriptionUpdate task for Glossary |
| 2 | **Task Resolution - Glossary Entity (All Task Types)** - OwnershipUpdate task for Glossary | OwnershipUpdate task for Glossary |
| 3 | **Task Resolution - Glossary Entity (All Task Types)** - DomainUpdate task for Glossary | DomainUpdate task for Glossary |

### Task Resolution - GlossaryTerm Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - GlossaryTerm Entity (All Task Types)** - DescriptionUpdate task for GlossaryTerm | DescriptionUpdate task for GlossaryTerm |
| 2 | **Task Resolution - GlossaryTerm Entity (All Task Types)** - OwnershipUpdate task for GlossaryTerm | OwnershipUpdate task for GlossaryTerm |
| 3 | **Task Resolution - GlossaryTerm Entity (All Task Types)** - DomainUpdate task for GlossaryTerm | DomainUpdate task for GlossaryTerm |

### Task Resolution - File Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - File Entity (All Task Types)** - DescriptionUpdate task for File | DescriptionUpdate task for File |
| 2 | **Task Resolution - File Entity (All Task Types)** - OwnershipUpdate task for File | OwnershipUpdate task for File |
| 3 | **Task Resolution - File Entity (All Task Types)** - DomainUpdate task for File | DomainUpdate task for File |

### Task Resolution - Directory Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Directory Entity (All Task Types)** - DescriptionUpdate task for Directory | DescriptionUpdate task for Directory |
| 2 | **Task Resolution - Directory Entity (All Task Types)** - OwnershipUpdate task for Directory | OwnershipUpdate task for Directory |
| 3 | **Task Resolution - Directory Entity (All Task Types)** - DomainUpdate task for Directory | DomainUpdate task for Directory |

### Task Resolution - DataProduct Entity (All Task Types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - DataProduct Entity (All Task Types)** - DescriptionUpdate task for DataProduct | DescriptionUpdate task for DataProduct |
| 2 | **Task Resolution - DataProduct Entity (All Task Types)** - OwnershipUpdate task for DataProduct | OwnershipUpdate task for DataProduct |

</details>

<details open>
<summary>📄 <b>InputOutputPorts.spec.ts</b> (43 tests, 148 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/InputOutputPorts.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/InputOutputPorts.spec.ts)

### Input Output Ports

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Input Output Ports** - Input port button visible, output port button hidden when no assets | Input port button visible, output port button hidden when no assets |
| | ↳ *Create data product via API* | |
| | ↳ *Navigate to data product ports tab* | |
| | ↳ *Verify button states* | |
| 2 | **Input Output Ports** - Tab renders with empty state when no ports exist | Tab renders with empty state when no ports exist |
| | ↳ *Create data product with assets via API* | |
| | ↳ *Navigate to data product* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify empty states* | |
| | ↳ *Verify lineage section shows zero counts* | |
| 3 | **Input Output Ports** - Tab displays correct port counts | Tab displays correct port counts |
| | ↳ *Create data product with ports via API* | |
| | ↳ *Navigate to data product ports tab* | |
| | ↳ *Verify port counts* | |
| 4 | **Input Output Ports** - Lineage section is collapsed by default | Lineage section is collapsed by default |
| | ↳ *Create data product via API* | |
| | ↳ *Navigate to data product* | |
| | ↳ *Verify lineage is collapsed* | |
| 5 | **Input Output Ports** - Add single input port | Add single input port |
| | ↳ *Setup* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Add input port* | |
| | ↳ *Verify port was added* | |
| 6 | **Input Output Ports** - Add single output port | Add single output port |
| | ↳ *Setup* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Add output port* | |
| | ↳ *Verify port was added* | |
| 7 | **Input Output Ports** - Add multiple input ports at once | Add multiple input ports at once |
| | ↳ *Setup* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Add multiple input ports* | |
| | ↳ *Verify both ports were added* | |
| 8 | **Input Output Ports** - Add different entity types as ports | Add different entity types as ports |
| | ↳ *Setup* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Add table as input port* | |
| | ↳ *Add topic as input port* | |
| | ↳ *Add dashboard as output port* | |
| | ↳ *Verify different entity types are shown* | |
| 9 | **Input Output Ports** - Cancel adding port | Cancel adding port |
| | ↳ *Setup* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Open and cancel input port drawer* | |
| | ↳ *Verify empty state still shown* | |
| 10 | **Input Output Ports** - Input port drawer shows assets from outside data product | Input port drawer shows assets from outside data product |
| | ↳ *Create data product with ONE asset* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Open input port drawer and verify unfiltered assets* | |
| 11 | **Input Output Ports** - Add input port from asset not in data product | Add input port from asset not in data product |
| | ↳ *Create data product WITHOUT any assets* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Add input port from external asset* | |
| | ↳ *Verify port was added* | |
| 12 | **Input Output Ports** - Output port drawer shows info banner about data product assets | Output port drawer shows info banner about data product assets |
| | ↳ *Create data product with assets* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Open output port drawer and verify info banner* | |
| 13 | **Input Output Ports** - Input port drawer does not show info banner | Input port drawer does not show info banner |
| | ↳ *Create data product* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Open input port drawer and verify no info banner* | |
| 14 | **Input Output Ports** - Input port drawer quick filter - behaviour matrix | Input port drawer quick filter - behaviour matrix |
| | ↳ *Navigate to ports tab* | |
| 15 | **Input Output Ports** - Output port drawer quick filter - behaviour matrix | Output port drawer quick filter - behaviour matrix |
| | ↳ *Navigate to ports tab* | |
| 16 | **Input Output Ports** - Output port drawer only shows data product assets | Output port drawer only shows data product assets |
| | ↳ *Create data product with specific assets* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Open output port drawer and verify filtering* | |
| 17 | **Input Output Ports** - Input ports list displays entity cards | Input ports list displays entity cards |
| | ↳ *Create data product with input ports via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify input ports list* | |
| 18 | **Input Output Ports** - Output ports list displays entity cards | Output ports list displays entity cards |
| | ↳ *Create data product with output ports via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify output ports list* | |
| 19 | **Input Output Ports** - Port action dropdown visible with EditAll permission | Port action dropdown visible with EditAll permission |
| | ↳ *Create data product with ports via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify action dropdown is visible* | |
| 20 | **Input Output Ports** - Remove single input port | Remove single input port |
| | ↳ *Create data product with input ports via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Remove first input port* | |
| | ↳ *Verify port was removed* | |
| 21 | **Input Output Ports** - Remove single output port | Remove single output port |
| | ↳ *Create data product with output ports via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Remove first output port* | |
| | ↳ *Verify port was removed* | |
| 22 | **Input Output Ports** - Cancel port removal | Cancel port removal |
| | ↳ *Create data product with input port via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Open and cancel removal dialog* | |
| | ↳ *Verify port still exists* | |
| 23 | **Input Output Ports** - Remove last port shows empty state | Remove last port shows empty state |
| | ↳ *Create data product with single input port via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Remove the only input port* | |
| | ↳ *Verify empty state appears* | |
| 24 | **Input Output Ports** - Lineage loads on expand | Lineage loads on expand |
| | ↳ *Create data product with ports via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Expand lineage section* | |
| | ↳ *Verify lineage view is visible* | |
| 25 | **Input Output Ports** - Lineage displays data product center node | Lineage displays data product center node |
| | ↳ *Create data product with ports via API* | |
| | ↳ *Navigate to ports tab and expand lineage* | |
| | ↳ *Verify data product node is visible* | |
| 26 | **Input Output Ports** - Lineage displays input and output ports | Lineage displays input and output ports |
| | ↳ *Create data product with input and output ports* | |
| | ↳ *Navigate to ports tab and expand lineage* | |
| | ↳ *Verify input port nodes are visible* | |
| | ↳ *Verify output port nodes are visible* | |
| 27 | **Input Output Ports** - Lineage with only input ports | Lineage with only input ports |
| | ↳ *Create data product with only input ports* | |
| | ↳ *Navigate and expand lineage* | |
| | ↳ *Verify only input port is shown* | |
| 28 | **Input Output Ports** - Lineage with only output ports | Lineage with only output ports |
| | ↳ *Create data product with only output ports* | |
| | ↳ *Navigate and expand lineage* | |
| | ↳ *Verify only output port is shown* | |
| 29 | **Input Output Ports** - Lineage controls work | Lineage controls work |
| | ↳ *Create data product with ports* | |
| | ↳ *Navigate and expand lineage* | |
| | ↳ *Verify ReactFlow controls are visible* | |
| 30 | **Input Output Ports** - Lineage section collapse/expand | Lineage section collapse/expand |
| | ↳ *Create data product with ports* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify initially collapsed* | |
| | ↳ *Expand lineage* | |
| | ↳ *Collapse lineage* | |
| 31 | **Input Output Ports** - Input ports section collapse/expand | Input ports section collapse/expand |
| | ↳ *Create data product with input port* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify initially expanded* | |
| | ↳ *Collapse input ports section* | |
| | ↳ *Expand input ports section* | |
| 32 | **Input Output Ports** - Output ports section collapse/expand | Output ports section collapse/expand |
| | ↳ *Create data product with output port* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify initially expanded* | |
| | ↳ *Collapse output ports section* | |
| | ↳ *Expand output ports section* | |
| 33 | **Input Output Ports** - Multiple sections can be collapsed independently | Multiple sections can be collapsed independently |
| | ↳ *Create data product with ports* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Collapse input ports only* | |
| | ↳ *Expand lineage while keeping input collapsed* | |
| 34 | **Input Output Ports** - Toggle fullscreen mode | Toggle fullscreen mode |
| | ↳ *Create data product with ports* | |
| | ↳ *Navigate and expand lineage* | |
| | ↳ *Enter fullscreen mode* | |
| 35 | **Input Output Ports** - Exit fullscreen with button | Exit fullscreen with button |
| | ↳ *Create data product with ports* | |
| | ↳ *Navigate and expand lineage* | |
| | ↳ *Enter and exit fullscreen mode* | |
| 36 | **Input Output Ports** - Exit fullscreen with Escape key | Exit fullscreen with Escape key |
| | ↳ *Create data product with ports* | |
| | ↳ *Navigate and expand lineage* | |
| | ↳ *Enter fullscreen and exit with Escape* | |
| 37 | **Input Output Ports** - Fullscreen lineage is interactive | Fullscreen lineage is interactive |
| | ↳ *Create data product with ports* | |
| | ↳ *Navigate and expand lineage* | |
| | ↳ *Enter fullscreen and verify controls* | |
| 38 | **Input Output Ports** - Input ports list pagination | Input ports list pagination |
| | ↳ *Create data product with many input ports via API* | |
| | ↳ *Navigate to ports tab* | |
| | ↳ *Verify ports list displays* | |
| 39 | **Input Output Ports** - Warning shown when removing asset that is also an output port | Warning shown when removing asset that is also an output port |
| | ↳ *Create data product with asset as output port via API* | |
| | ↳ *Navigate to data product assets tab* | |
| | ↳ *Delete asset and verify warning* | |
| 40 | **Input Output Ports** - No warning when removing asset that is NOT an output port | No warning when removing asset that is NOT an output port |
| | ↳ *Create data product with asset (not output port) via API* | |
| | ↳ *Navigate to data product assets tab* | |
| | ↳ *Delete asset that is NOT an output port* | |
| 41 | **Input Output Ports** - Bulk delete shows warning listing only assets in output ports | Bulk delete shows warning listing only assets in output ports |
| | ↳ *Create data product with mixed assets via API* | |
| | ↳ *Navigate to data product assets tab* | |
| | ↳ *Select all assets and click bulk delete* | |
| 42 | **Input Output Ports** - No warning when data product has no output ports | No warning when data product has no output ports |
| | ↳ *Create data product with assets but no output ports* | |
| | ↳ *Navigate and delete asset* | |
| 43 | **Input Output Ports** - Removing asset from data product also removes it from output ports | Removing asset from data product also removes it from output ports |
| | ↳ *Create data product with two assets as output ports via API* | |
| | ↳ *Navigate to data product and verify output ports* | |
| | ↳ *Go to assets tab and remove one asset* | |
| | ↳ *Verify output port was also removed* | |

</details>

<details open>
<summary>📄 <b>ContextCenterArticles.spec.ts</b> (40 tests, 66 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ContextCenterArticles.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ContextCenterArticles.spec.ts)

### Context Center Articles

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center Articles** - Empty article can be deleted immediately without polluting the list | Empty article can be deleted immediately without polluting the list |
| 2 | **Context Center Articles** - Article list basics and creation entrypoints | Article list basics and creation entrypoints |
| | ↳ *dashboard create article redirects to detail page* | |
| | ↳ *dashboard view all articles opens article list* | |
| | ↳ *articles page renders header and create menu* | |
| | ↳ *articles list create article redirects to detail page* | |
| 3 | **Context Center Articles** - Article listing search filters, clears, and shows empty state | Article listing search filters, clears, and shows empty state |
| 4 | **Context Center Articles** - Global search and Explore Knowledge Center filter navigate to articles | Global search and Explore Knowledge Center filter navigate to articles |
| | ↳ *global search opens article detail page* | |
| | ↳ *Explore Knowledge Center filter returns results* | |
| 5 | **Context Center Articles** - Quick link lifecycle validates, creates, edits, and deletes from card | Quick link lifecycle validates, creates, edits, and deletes from card |
| 6 | **Context Center Articles** - Quick link created from API can be opened and deleted from hierarchy | Quick link created from API can be opened and deleted from hierarchy |
| 7 | **Context Center Articles** - Quick link card opens the configured url in a new tab | Quick link card opens the configured url in a new tab |
| 8 | **Context Center Articles** - Article card metadata, widgets, and listing search update from UI edits | Article card metadata, widgets, and listing search update from UI edits |
| 9 | **Context Center Articles** - Article list cards, recently viewed widget, and pagination work | Article list cards, recently viewed widget, and pagination work |
| 10 | **Context Center Articles** - Left hierarchy pagination and expand collapse actions work | Left hierarchy pagination and expand collapse actions work |
| 11 | **Context Center Articles** - Expanding a multi-level hierarchy does not throw and renders no duplicate nodes | Expanding a multi-level hierarchy does not throw and renders no duplicate nodes |
| 12 | **Context Center Articles** - Article detail layout, drawer, activity tab, and version page work | Article detail layout, drawer, activity tab, and version page work |
| 13 | **Context Center Articles** - Article edit persistence and unsaved title behavior are correct | Article edit persistence and unsaved title behavior are correct |
| 14 | **Context Center Articles** - Article copy, delete, sidebar delete, and same-name recreate do not preserve stale metadata | Article copy, delete, sidebar delete, and same-name recreate do not preserve stale metadata |
| 15 | **Context Center Articles** - Related assets, activity feed, user mentions, and article mentions work | Related assets, activity feed, user mentions, and article mentions work |
| | ↳ *related articles are visible on asset page* | |
| | ↳ *activity feed supports create, edit, and delete* | |
| | ↳ *user mention notification redirects to article* | |
| | ↳ *article mention in asset description links to article* | |
| 16 | **Context Center Articles** - Other user editing is visible in the article header editor list | Other user editing is visible in the article header editor list |
| 17 | **Context Center Articles** - Slash commands and basic blocks | Slash commands and basic blocks |
| 18 | **Context Center Articles** - Text formatting | Text formatting |
| 19 | **Context Center Articles** - Editor operations | Editor operations |
| 20 | **Context Center Articles** - Nested lists | Nested lists |
| 21 | **Context Center Articles** - Content persistence | Content persistence |
| 22 | **Context Center Articles** - Advanced blocks | Advanced blocks |
| 23 | **Context Center Articles** - Slash commands and basic blocks | Slash commands and basic blocks |
| 24 | **Context Center Articles** - Text formatting | Text formatting |
| 25 | **Context Center Articles** - Editor operations | Editor operations |
| 26 | **Context Center Articles** - Nested lists | Nested lists |
| 27 | **Context Center Articles** - Content persistence | Content persistence |
| 28 | **Context Center Articles** - Advanced blocks | Advanced blocks |
| 29 | **Context Center Articles** - Slash commands and basic blocks | Slash commands and basic blocks |
| 30 | **Context Center Articles** - Text formatting | Text formatting |
| 31 | **Context Center Articles** - Editor operations | Editor operations |
| 32 | **Context Center Articles** - Nested lists | Nested lists |
| 33 | **Context Center Articles** - Content persistence | Content persistence |
| 34 | **Context Center Articles** - Advanced blocks | Advanced blocks |
| 35 | **Context Center Articles** - description: switching articles does not bleed unsaved content into next article | Description: switching articles does not bleed unsaved content into next article |
| | ↳ *Navigate to draft article A and type new content without saving* | |
| | ↳ *Navigate to draft article B via left hierarchy* | |
| | ↳ *Article B should show its own content, not Article A unsaved content* | |
| | ↳ *Navigate back to Article A — should show updated description* | |
| | ↳ *Article list card should reflect updated description* | |
| 36 | **Context Center Articles** - displayName: switching articles does not bleed unsaved title into next article | DisplayName: switching articles does not bleed unsaved title into next article |
| | ↳ *Navigate to draft article A and type new display name without saving* | |
| | ↳ *Navigate to draft article B via left hierarchy* | |
| | ↳ *Article B should show its own title, not Article A unsaved title* | |
| | ↳ *Navigate back to Article A — should show updated display name* | |
| | ↳ *Article list card should reflect updated display name* | |
| 37 | **Context Center Articles** - draft syncs on page reload — skeleton shown, content saved | Draft syncs on page reload — skeleton shown, content saved |
| | ↳ *Navigate to draft article A and type content without saving* | |
| | ↳ *Reload the page (simulates browser refresh before auto-save)* | |
| | ↳ *Content should be synced and badge shows Saved* | |
| 38 | **Context Center Articles** - no spurious sync when content is already saved — no PATCH on clean reload | No spurious sync when content is already saved — no PATCH on clean reload |
| | ↳ *Navigate to draft article A, type content, wait for auto-save* | |
| | ↳ *Reload the same article* | |
| | ↳ *No PATCH should be fired (draft was already cleared after save)* | |
| 39 | **Context Center Articles** - draft cleared from localStorage when article is deleted | Draft cleared from localStorage when article is deleted |
| | ↳ *Create a temporary article via API* | |
| | ↳ *Navigate to the article and type content to create a draft* | |
| | ↳ *Navigate away to ensure draft is persisted in localStorage* | |
| | ↳ *Delete the article via the manage menu* | |
| | ↳ *Draft should be removed from localStorage after deletion* | |
| 40 | **Context Center Articles** - multiple articles hold independent drafts simultaneously | Multiple articles hold independent drafts simultaneously |
| | ↳ *Type in draft article A without saving* | |
| | ↳ *Navigate to draft article B and type without saving* | |
| | ↳ *Reload Article B — its own draft should be synced* | |
| | ↳ *Navigate to Article A — its independent draft should also be synced* | |

</details>

<details open>
<summary>📄 <b>NestedChildrenUpdates.spec.ts</b> (36 tests, 36 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/NestedChildrenUpdates.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/NestedChildrenUpdates.spec.ts)

### API Endpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **API Endpoint** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **API Endpoint** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **API Endpoint** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 4 | **API Endpoint** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **Container** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **Container** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 4 | **Container** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |

### Data Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Model** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **Data Model** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **Data Model** - should update nested column displayName immediately without refresh | Update nested column displayName immediately without refresh |
| 4 | **Data Model** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 5 | **Data Model** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 6 | **Data Model** - should update nested column displayName immediately without refresh | Update nested column displayName immediately without refresh |

### File

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **File** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **File** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **File** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 4 | **File** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |

### Search Index

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Index** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **Search Index** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **Search Index** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 4 | **Search Index** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **Table** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **Table** - should update nested column displayName immediately without refresh | Update nested column displayName immediately without refresh |
| 4 | **Table** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 5 | **Table** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 6 | **Table** - should update nested column displayName immediately without refresh | Update nested column displayName immediately without refresh |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **Topic** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **Topic** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 4 | **Topic** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |

### Worksheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Worksheet** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 2 | **Worksheet** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |
| 3 | **Worksheet** - should update nested column description immediately without page refresh | Update nested column description immediately without page refresh |
| 4 | **Worksheet** - should add and remove tags to nested column immediately without refresh | Add and remove tags to nested column immediately without refresh |

</details>

<details open>
<summary>📄 <b>ContextCenterPermission.spec.ts</b> (34 tests, 61 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ContextCenterPermission.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ContextCenterPermission.spec.ts)

### Context Center Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center Permissions** - user with view-only permission cannot see create or upload actions | User with view-only permission cannot see create or upload actions |
| 2 | **Context Center Permissions** - user with createAll permission can see create and upload actions and perform them | User with createAll permission can see create and upload actions and perform them |
| | ↳ *can create an article* | |
| | ↳ *can upload a document* | |
| 3 | **Context Center Permissions** - user with editAll permission cannot see create or upload actions | User with editAll permission cannot see create or upload actions |
| 4 | **Context Center Permissions** - user with deleteAll permission cannot see create or upload actions | User with deleteAll permission cannot see create or upload actions |
| 5 | **Context Center Permissions** - user with all permissions can see create and upload actions | User with all permissions can see create and upload actions |
| 6 | **Context Center Permissions** - user with view-only permission cannot see create or delete actions, but can use share/vote/conversation actions | User with view-only permission cannot see create or delete actions, but can use share/vote/conversation actions |
| | ↳ *articles list create action is hidden* | |
| | ↳ *hierarchy tree delete button is hidden for articles* | |
| | ↳ *quick link card has no edit or delete buttons* | |
| | ↳ *article detail manage (delete) and edit-domain/edit-owner actions are hidden* | |
| | ↳ *can copy article link* | |
| | ↳ *can upvote and downvote the article* | |
| | ↳ *can start a conversation on the article* | |
| | ↳ *can follow and unfollow the article* | |
| 7 | **Context Center Permissions** - user with createAll permission can see create action but not delete action, and can create an article | User with createAll permission can see create action but not delete action, and can create an article |
| | ↳ *articles list create action is visible* | |
| | ↳ *hierarchy tree delete button is hidden for articles* | |
| | ↳ *can create a quick link* | |
| | ↳ *article detail manage (delete) action is hidden* | |
| | ↳ *can create an article from the articles page* | |
| | ↳ *cannot be able to move an article under another article* | |
| 8 | **Context Center Permissions** - user with editAll permission cannot see create or delete actions, and can move an article under another article | User with editAll permission cannot see create or delete actions, and can move an article under another article |
| | ↳ *articles list create action is hidden* | |
| | ↳ *quick link card shows edit button but not delete button* | |
| | ↳ *article detail manage (delete) action is hidden, but edit-domain/edit-owner actions are visible* | |
| | ↳ *can move an article under another article* | |
| 9 | **Context Center Permissions** - user with deleteAll permission can see delete action but not create action, and can delete an article | User with deleteAll permission can see delete action but not create action, and can delete an article |
| | ↳ *quick link card shows delete button but not edit button, and can delete the quick link* | |
| | ↳ *articles list create action is hidden* | |
| | ↳ *article detail manage (delete) action is visible* | |
| | ↳ *can delete a disposable article* | |
| 10 | **Context Center Permissions** - user with all permissions can see create and delete actions | User with all permissions can see create and delete actions |
| | ↳ *articles list create action is visible* | |
| | ↳ *article detail manage (delete) action is visible* | |
| 11 | **Context Center Permissions** - user with view-only permission cannot see upload, folder, or row actions | User with view-only permission cannot see upload, folder, or row actions |
| | ↳ *selecting a document shows only download in bulk bar (no move or delete)* | |
| 12 | **Context Center Permissions** - user with createAll permission can see upload and folder create actions but no row actions, and can create a folder | User with createAll permission can see upload and folder create actions but no row actions, and can create a folder |
| | ↳ *can create a folder* | |
| | ↳ *can upload a document from the documents page* | |
| 13 | **Context Center Permissions** - user with editAll permission sees row move action but no upload, folder create, or delete actions, and can move a document | User with editAll permission sees row move action but no upload, folder create, or delete actions, and can move a document |
| | ↳ *selecting a document shows download and move in bulk bar but not delete* | |
| | ↳ *can move a document into a folder* | |
| 14 | **Context Center Permissions** - user with deleteAll permission sees row delete action but no upload, folder create, or move actions, and can delete a document | User with deleteAll permission sees row delete action but no upload, folder create, or move actions, and can delete a document |
| | ↳ *selecting a document shows download and delete in bulk bar but not move* | |
| | ↳ *can delete a document* | |
| 15 | **Context Center Permissions** - user with all permissions can see upload, folder create, and all row actions | User with all permissions can see upload, folder create, and all row actions |
| 16 | **Context Center Permissions** - user with view-only permission cannot see restore or delete actions on an archived document | User with view-only permission cannot see restore or delete actions on an archived document |
| 17 | **Context Center Permissions** - user with createAll permission cannot see restore or delete actions on an archived document | User with createAll permission cannot see restore or delete actions on an archived document |
| 18 | **Context Center Permissions** - user with editAll permission can see restore action but not delete action on an archived document, and can restore it | User with editAll permission can see restore action but not delete action on an archived document, and can restore it |
| | ↳ *can restore a disposable archived document* | |
| 19 | **Context Center Permissions** - user with deleteAll permission can see delete action but not restore action on an archived document, and can delete it | User with deleteAll permission can see delete action but not restore action on an archived document, and can delete it |
| | ↳ *can delete a disposable archived document* | |
| 20 | **Context Center Permissions** - user with all permissions can see restore and delete actions on an archived document | User with all permissions can see restore and delete actions on an archived document |
| 21 | **Context Center Permissions** - a document archived by a different user can be permanently deleted, via the UI, by a user with Delete permission | A document archived by a different user can be permanently deleted, via the UI, by a user with Delete permission |
| 22 | **Context Center Permissions** - created-by-me filter on the archive page shows only the current user's archived documents | Created-by-me filter on the archive page shows only the current user's archived documents |
| | ↳ *both documents are visible under the All tab* | |
| | ↳ *switching to the created-by-me tab issues a request with updatedBy set to the current user* | |
| | ↳ *own archived document is visible under created-by-me* | |
| | ↳ *the other user's archived document is not visible under created-by-me* | |
| 23 | **Context Center Permissions** - user with view-only permission sees no Add Memory button, no row actions, and no modal action buttons | User with view-only permission sees no Add Memory button, no row actions, and no modal action buttons |
| 24 | **Context Center Permissions** - user with view-only permission who owns a memory still cannot edit or delete it | User with view-only permission who owns a memory still cannot edit or delete it |
| 25 | **Context Center Permissions** - user with createAll permission sees Add Memory button but no row edit/delete actions or modal action buttons, and can create a memory | User with createAll permission sees Add Memory button but no row edit/delete actions or modal action buttons, and can create a memory |
| | ↳ *can create a memory* | |
| 26 | **Context Center Permissions** - user with editAll permission sees no row edit action on memories they do not own, but can edit and save their own memory | User with editAll permission sees no row edit action on memories they do not own, but can edit and save their own memory |
| | ↳ *can edit and save own memory* | |
| 27 | **Context Center Permissions** - user with deleteAll permission sees no row delete action on memories they do not own, but can delete their own memory from the modal | User with deleteAll permission sees no row delete action on memories they do not own, but can delete their own memory from the modal |
| | ↳ *can delete own memory from the modal* | |
| 28 | **Context Center Permissions** - user with all permissions but not owner sees read-only banner and no edit/delete on the row | User with all permissions but not owner sees read-only banner and no edit/delete on the row |
| 29 | **Context Center Permissions** - admin user can edit and save a memory owned by another user | Admin user can edit and save a memory owned by another user |
| | ↳ *edit button is visible on another user memory row when clicked in view modal* | |
| | ↳ *edit button is visible on row and admin can edit and save the memory* | |
| 30 | **Context Center Permissions** - user with all permissions and owner can see Add Memory button and all row/modal actions | User with all permissions and owner can see Add Memory button and all row/modal actions |
| 31 | **Context Center Permissions** - ViewAll-only user cannot create or edit articles | ViewAll-only user cannot create or edit articles |
| 32 | **Context Center Permissions** - Data Consumer can view and edit content but cannot add article, domain, reviewer, data product, or data assets | Data Consumer can view and edit content but cannot add article, domain, reviewer, data product, or data assets |
| 33 | **Context Center Permissions** - Data Steward can edit content, title, owners, tags, and glossary terms but cannot add article, domain, reviewer, data product, or data assets | Data Steward can edit content, title, owners, tags, and glossary terms but cannot add article, domain, reviewer, data product, or data assets |
| 34 | **Context Center Permissions** - selecting "Updated By" actually reorders rows by updatedBy | Selecting "Updated By" actually reorders rows by updatedBy |

</details>

<details open>
<summary>📄 <b>AuditLogs.spec.ts</b> (27 tests, 68 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/AuditLogs.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/AuditLogs.spec.ts)

### Audit Logs Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Audit Logs Page** - should display page header with correct title and subtitle | Display page header with correct title and subtitle |
| | ↳ *Verify page header* | |
| 2 | **Audit Logs Page** - should apply and clear filters | Apply and clear filters |
| | ↳ *Clear button should not be visible initially* | |
| | ↳ *Select a Time filter* | |
| | ↳ *Verify filter tag appears and Clear button shows* | |
| | ↳ *Clear filters* | |
| 3 | **Audit Logs Page** - should support multiple filters from different categories | Support multiple filters from different categories |
| | ↳ *Select Time filter* | |
| | ↳ *Add Entity Type filter (should add to existing filters)* | |
| 4 | **Audit Logs Page** - should allow searching within User filter | Allow searching within User filter |
| | ↳ *Open User filter category* | |
| | ↳ *Verify search input is available* | |
| 5 | **Audit Logs Page** - should allow searching within Entity Type filter | Allow searching within Entity Type filter |
| | ↳ *Open Entity Type filter category* | |
| | ↳ *Verify entity types are searchable* | |
| 6 | **Audit Logs Page** - should remove individual filter by clicking close icon | Remove individual filter by clicking close icon |
| | ↳ *Add a Time filter* | |
| | ↳ *Verify filter tag is displayed* | |
| | ↳ *Remove filter by clicking close icon* | |
| 7 | **Audit Logs Page** - should replace filter value when selecting new value in same category | Replace filter value when selecting new value in same category |
| | ↳ *Select Yesterday filter* | |
| | ↳ *Verify Yesterday filter is active* | |
| | ↳ *Select Last 7 Days filter (should replace Yesterday)* | |
| | ↳ *Verify Last 7 Days filter replaced Yesterday* | |
| 8 | **Audit Logs Page** - should apply both User and EntityType filters simultaneously | Apply both User and EntityType filters simultaneously |
| | ↳ *Navigate to audit logs page* | |
| | ↳ *Apply User filter (select admin)* | |
| | ↳ *Add EntityType filter (should coexist with User filter)* | |
| | ↳ *Verify both User and EntityType filters are active simultaneously* | |
| | ↳ *Remove User filter and verify EntityType filter remains* | |
| 9 | **Audit Logs Page** - should search audit logs | Search audit logs |
| | ↳ *Enter search term and press Enter* | |
| | ↳ *Verify Clear button appears after search* | |
| | ↳ *Clear search* | |
| 10 | **Audit Logs Page** - should support case-insensitive search | Support case-insensitive search |
| | ↳ *Search with lowercase term* | |
| 11 | **Audit Logs Page** - should support pagination and page size selection | Support pagination and page size selection |
| | ↳ *Verify pagination area exists* | |
| | ↳ *Verify default page size* | |
| | ↳ *Change page size* | |
| | ↳ *Navigate pages if available* | |
| 12 | **Audit Logs Page** - should display list items with profile picture and user info | Display list items with profile picture and user info |
| | ↳ *Verify list items have correct structure* | |
| | ↳ *Verify list item has user info and event type* | |
| | ↳ *Verify list item has metadata section* | |
| 13 | **Audit Logs Page** - should display entity type in list item metadata | Display entity type in list item metadata |
| | ↳ *Filter by Entity Type to get results* | |
| | ↳ *Verify entity type badge is displayed* | |
| 14 | **Audit Logs Page** - should display relative timestamp in list items | Display relative timestamp in list items |
| | ↳ *Verify timestamp is displayed* | |

### Audit Logs - Search Functionality

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Audit Logs - Search Functionality** - should verify search API returns proper response structure | Search API returns proper response structure |
| | ↳ *Perform search and validate response structure* | |

### Audit Logs - Export Functionality

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Audit Logs - Export Functionality** - should complete export flow and trigger download | Complete export flow and trigger download |
| | ↳ *Open Export modal* | |
| | ↳ *Verify modal displays description and date picker* | |
| | ↳ *Select date range* | |
| | ↳ *Verify Export button is enabled after date selection* | |
| | ↳ *Trigger export and verify API call* | |
| 2 | **Audit Logs - Export Functionality** - should include filters and search in export request | Include filters and search in export request |
| | ↳ *Enter a search term* | |
| | ↳ *Open Export modal* | |
| | ↳ *Select date range and verify export includes search term* | |
| 3 | **Audit Logs - Export Functionality** - should validate export response structure | Validate export response structure |
| | ↳ *Open Export modal and select date range* | |
| | ↳ *Trigger export and validate response* | |

### Audit Logs - Export Non-Admin Access

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Audit Logs - Export Non-Admin Access** - should deny export access for non-admin users | Deny export access for non-admin users |
| | ↳ *Verify non-admin cannot access export functionality* | |

### Audit Logs Page - Non-Admin Access

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Audit Logs Page - Non-Admin Access** - should handle audit logs access for non-admin users | Handle audit logs access for non-admin users |
| | ↳ *Verify page responds without server error* | |

### Audit Logs - Event Verification

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Audit Logs - Event Verification** - should create audit log entry when glossary is created | Create audit log entry when glossary is created |
| | ↳ *Create a glossary via API* | |
| | ↳ *Wait for entityCreated audit log entry* | |
| 2 | **Audit Logs - Event Verification** - should create audit log entry when glossary is updated | Create audit log entry when glossary is updated |
| | ↳ *Update the glossary description* | |
| | ↳ *Wait for entityUpdated/entityFieldsChanged audit log entry* | |
| 3 | **Audit Logs - Event Verification** - should create audit log entry when glossary is soft deleted | Create audit log entry when glossary is soft deleted |
| | ↳ *Soft delete the glossary* | |
| | ↳ *Wait for entitySoftDeleted audit log entry* | |
| 4 | **Audit Logs - Event Verification** - should create audit log entry when glossary is restored | Create audit log entry when glossary is restored |
| | ↳ *Restore the glossary* | |
| | ↳ *Wait for entityRestored audit log entry* | |
| 5 | **Audit Logs - Event Verification** - should create audit log entry when glossary is hard deleted | Create audit log entry when glossary is hard deleted |
| | ↳ *Hard delete the glossary* | |
| | ↳ *Wait for entityDeleted audit log entry* | |
| 6 | **Audit Logs - Event Verification** - should verify complete audit trail for entity lifecycle | Complete audit trail for entity lifecycle |
| | ↳ *Verify entityCreated event* | |
| | ↳ *Verify entityUpdated/entityFieldsChanged event* | |
| | ↳ *Verify entitySoftDeleted event* | |
| | ↳ *Verify entityRestored event* | |
| | ↳ *Verify entityDeleted event* | |
| 7 | **Audit Logs - Event Verification** - should display audit log entry in UI after entity creation | Display audit log entry in UI after entity creation |
| | ↳ *Filter by entityType=glossary* | |
| | ↳ *Verify the created glossary appears in the list* | |
| | ↳ *Verify the created glossary entry is visible in the UI list* | |

</details>

<details open>
<summary>📄 <b>ContextCenterDocument.spec.ts</b> (26 tests, 26 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ContextCenterDocument.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ContextCenterDocument.spec.ts)

### Context Center - Documents Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center - Documents Page** - scrolling to the bottom of the list loads the next page of documents | Scrolling to the bottom of the list loads the next page of documents |
| 2 | **Context Center - Documents Page** - shows header with Upload File button | Shows header with Upload File button |
| 3 | **Context Center - Documents Page** - documents view container is rendered | Documents view container is rendered |
| 4 | **Context Center - Documents Page** - Upload File button opens upload modal with correct title and hint | Upload File button opens upload modal with correct title and hint |
| 5 | **Context Center - Documents Page** - file upload attaches file and closes modal, then appears in list | File upload attaches file and closes modal, then appears in list |
| 6 | **Context Center - Documents Page** - uploaded document card shows name, size, updatedBy, updatedAt, and folder | Uploaded document card shows name, size, updatedBy, updatedAt, and folder |
| 7 | **Context Center - Documents Page** - delete single document from card menu removes it from the list | Delete single document from card menu removes it from the list |
| 8 | **Context Center - Documents Page** - create folder appears in sidebar tree and delete folder removes it | Create folder appears in sidebar tree and delete folder removes it |
| 9 | **Context Center - Documents Page** - move document to folder via card menu shows folder name on the card | Move document to folder via card menu shows folder name on the card |
| 10 | **Context Center - Documents Page** - moving document to folder shows folder on card; re-opening menu shows current folder selected; clicking it again removes document from folder | Moving document to folder shows folder on card; re-opening menu shows current folder selected; clicking it again removes document from folder |
| 11 | **Context Center - Documents Page** - clicking document row opens preview panel with name, status, size, folder, updatedBy, updatedAt and copy button copies correct link | Clicking document row opens preview panel with name, status, size, folder, updatedBy, updatedAt and copy button copies correct link |
| 12 | **Context Center - Documents Page** - copy link button on document list row copies URL with correct document id and opening the link shows the preview panel | Copy link button on document list row copies URL with correct document id and opening the link shows the preview panel |
| 13 | **Context Center - Documents Page** - bulk move moves selected documents to a folder with a single API call and folder name appears on both cards | Bulk move moves selected documents to a folder with a single API call and folder name appears on both cards |
| 14 | **Context Center - Documents Page** - bulk delete 2 documents removes them from the list and both appear in the archive | Bulk delete 2 documents removes them from the list and both appear in the archive |
| 15 | **Context Center - Documents Page** - document appears nested in the folder tree after being moved to a folder | Document appears nested in the folder tree after being moved to a folder |
| 16 | **Context Center - Documents Page** - clicking folder in sidebar shows only that folder documents and move menu show the current folder | Clicking folder in sidebar shows only that folder documents and move menu show the current folder |
| 17 | **Context Center - Documents Page** - duplicate filename in same folder shows retry error; uploading same name to different folder succeeds; delete file and folder from UI | Duplicate filename in same folder shows retry error; uploading same name to different folder succeeds; delete file and folder from UI |
| 18 | **Context Center - Documents Page** - duplicate filename upload fails case-insensitively in the same folder | Duplicate filename upload fails case-insensitively in the same folder |
| 19 | **Context Center - Documents Page** - oversized file appears in list with failed state and Attach button stays disabled | Oversized file appears in list with failed state and Attach button stays disabled |
| 20 | **Context Center - Documents Page** - expanding a folder shows 10 files, view more loads the rest, and show less collapses back | Expanding a folder shows 10 files, view more loads the rest, and show less collapses back |
| 21 | **Context Center - Documents Page** - scrolling the sidebar folder tree loads the next page and reveals the page-2 folder | Scrolling the sidebar folder tree loads the next page and reveals the page-2 folder |
| 22 | **Context Center - Documents Page** - scrolling the per-file "Move to Folder" submenu loads the next page and reveals the page-2 folder | Scrolling the per-file "Move to Folder" submenu loads the next page and reveals the page-2 folder |
| 23 | **Context Center - Documents Page** - scrolling the bulk "Move" dropdown loads the next page and reveals the page-2 folder | Scrolling the bulk "Move" dropdown loads the next page and reveals the page-2 folder |
| 24 | **Context Center - Documents Page** - searching documents filters the list to matching results | Searching documents filters the list to matching results |
| 25 | **Context Center - Documents Page** - searching documents with no match shows empty state | Searching documents with no match shows empty state |
| 26 | **Context Center - Documents Page** - clearing document search restores the full list | Clearing document search restores the full list |

</details>

<details open>
<summary>📄 <b>ConditionalPermissions.spec.ts</b> (22 tests, 22 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ConditionalPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ConditionalPermissions.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | User with owner permission can only view owned Api Services | User with owner permission can only view owned Api Services |
| 2 | User with matchAnyTag permission can only view Api Services with the tag | User with matchAnyTag permission can only view Api Services with the tag |
| 3 | User with owner permission can only view owned Storage Services | User with owner permission can only view owned Storage Services |
| 4 | User with matchAnyTag permission can only view Storage Services with the tag | User with matchAnyTag permission can only view Storage Services with the tag |
| 5 | User with owner permission can only view owned Dashboard Services | User with owner permission can only view owned Dashboard Services |
| 6 | User with matchAnyTag permission can only view Dashboard Services with the tag | User with matchAnyTag permission can only view Dashboard Services with the tag |
| 7 | User with owner permission can only view owned Mlmodel Services | User with owner permission can only view owned Mlmodel Services |
| 8 | User with matchAnyTag permission can only view Mlmodel Services with the tag | User with matchAnyTag permission can only view Mlmodel Services with the tag |
| 9 | User with owner permission can only view owned Pipeline Services | User with owner permission can only view owned Pipeline Services |
| 10 | User with matchAnyTag permission can only view Pipeline Services with the tag | User with matchAnyTag permission can only view Pipeline Services with the tag |
| 11 | User with owner permission can only view owned Search Services | User with owner permission can only view owned Search Services |
| 12 | User with matchAnyTag permission can only view Search Services with the tag | User with matchAnyTag permission can only view Search Services with the tag |
| 13 | User with owner permission can only view owned Database Services | User with owner permission can only view owned Database Services |
| 14 | User with matchAnyTag permission can only view Database Services with the tag | User with matchAnyTag permission can only view Database Services with the tag |
| 15 | User with owner permission can only view owned Messaging Services | User with owner permission can only view owned Messaging Services |
| 16 | User with matchAnyTag permission can only view Messaging Services with the tag | User with matchAnyTag permission can only view Messaging Services with the tag |
| 17 | User with owner permission can only view owned Database | User with owner permission can only view owned Database |
| 18 | User with matchAnyTag permission can only view Database with the tag | User with matchAnyTag permission can only view Database with the tag |
| 19 | User with owner permission can only view owned Database Schema | User with owner permission can only view owned Database Schema |
| 20 | User with matchAnyTag permission can only view Database Schema with the tag | User with matchAnyTag permission can only view Database Schema with the tag |
| 21 | User with owner permission can only view owned Container | User with owner permission can only view owned Container |
| 22 | User with matchAnyTag permission can only view Container with the tag | User with matchAnyTag permission can only view Container with the tag |

</details>

<details open>
<summary>📄 <b>CustomPropertiesApiContract.spec.ts</b> (18 tests, 18 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/CustomPropertiesApiContract.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/CustomPropertiesApiContract.spec.ts)

### Custom property instance-value API compatibility contract

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Custom property instance-value API compatibility contract** - container supports removed property value variants | Container supports removed property value variants |
| 2 | **Custom property instance-value API compatibility contract** - dashboard supports removed property value variants | Dashboard supports removed property value variants |
| 3 | **Custom property instance-value API compatibility contract** - topic supports removed property value variants | Topic supports removed property value variants |
| 4 | **Custom property instance-value API compatibility contract** - pipeline supports removed property value variants | Pipeline supports removed property value variants |
| 5 | **Custom property instance-value API compatibility contract** - database supports removed property value variants | Database supports removed property value variants |
| 6 | **Custom property instance-value API compatibility contract** - databaseSchema supports removed property value variants | DatabaseSchema supports removed property value variants |
| 7 | **Custom property instance-value API compatibility contract** - glossaryTerm supports removed property value variants | GlossaryTerm supports removed property value variants |
| 8 | **Custom property instance-value API compatibility contract** - mlmodel supports removed property value variants | Mlmodel supports removed property value variants |
| 9 | **Custom property instance-value API compatibility contract** - searchIndex supports removed property value variants | SearchIndex supports removed property value variants |
| 10 | **Custom property instance-value API compatibility contract** - storedProcedure supports removed property value variants | StoredProcedure supports removed property value variants |
| 11 | **Custom property instance-value API compatibility contract** - dashboardDataModel supports removed property value variants | DashboardDataModel supports removed property value variants |
| 12 | **Custom property instance-value API compatibility contract** - metric supports removed property value variants | Metric supports removed property value variants |
| 13 | **Custom property instance-value API compatibility contract** - apiCollection supports removed property value variants | ApiCollection supports removed property value variants |
| 14 | **Custom property instance-value API compatibility contract** - apiEndpoint supports removed property value variants | ApiEndpoint supports removed property value variants |
| 15 | **Custom property instance-value API compatibility contract** - dataProduct supports removed property value variants | DataProduct supports removed property value variants |
| 16 | **Custom property instance-value API compatibility contract** - domain supports removed property value variants | Domain supports removed property value variants |
| 17 | **Custom property instance-value API compatibility contract** - tableColumn supports removed property value variants | TableColumn supports removed property value variants |

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | custom property value contract covers the exact removed browser matrix | Custom property value contract covers the exact removed browser matrix |

</details>

<details open>
<summary>📄 <b>DataObservabilityGovernanceTab.spec.ts</b> (14 tests, 34 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/DataObservabilityGovernanceTab.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/DataObservabilityGovernanceTab.spec.ts)

### Tag detail page — Data Observability tab

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Tag detail page — Data Observability tab** - clicking Data Observability tab loads DQ dashboard widgets | Clicking Data Observability tab loads DQ dashboard widgets |
| | ↳ *Data Observability tab is visible* | |
| | ↳ *clicking tab triggers DQ API with tag filter* | |
| | ↳ *DQ dashboard widgets are visible* | |
| 2 | **Tag detail page — Data Observability tab** - DQ dashboard API carries tag filter | DQ dashboard API carries tag filter |
| | ↳ *navigate to tag page* | |
| | ↳ *DQ API response carries tag filter* | |
| 3 | **Tag detail page — Data Observability tab** - tag filter is hidden on Tag Data Observability tab | Tag filter is hidden on Tag Data Observability tab |
| | ↳ *navigate to tag Data Observability tab* | |
| | ↳ *pre-applied tag filter button is hidden; owner filter remains visible* | |
| 4 | **Tag detail page — Data Observability tab** - switching back to Overview tab hides the DQ dashboard | Switching back to Overview tab hides the DQ dashboard |
| | ↳ *navigate to tag Data Observability tab* | |
| | ↳ *switching to Overview tab hides DQ dashboard* | |

### GlossaryTerm detail page — Data Observability tab

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **GlossaryTerm detail page — Data Observability tab** - clicking Data Observability tab loads DQ dashboard widgets | Clicking Data Observability tab loads DQ dashboard widgets |
| | ↳ *Data Observability tab is visible* | |
| | ↳ *clicking tab triggers DQ API* | |
| | ↳ *DQ dashboard widgets are visible* | |
| 2 | **GlossaryTerm detail page — Data Observability tab** - DQ dashboard API carries glossaryTerms filter | DQ dashboard API carries glossaryTerms filter |
| | ↳ *navigate to glossary term Data Observability tab* | |
| | ↳ *DQ API carries glossaryTerms as tags filter* | |
| 3 | **GlossaryTerm detail page — Data Observability tab** - glossaryTerms filter is hidden on GlossaryTerm Data Observability tab | GlossaryTerms filter is hidden on GlossaryTerm Data Observability tab |
| | ↳ *navigate to glossary term Data Observability tab* | |
| | ↳ *pre-applied glossaryTerms filter button is hidden; owner filter remains visible* | |
| 4 | **GlossaryTerm detail page — Data Observability tab** - Data Observability tab absent in version history view | Data Observability tab absent in version history view |
| | ↳ *navigate to glossary term page* | |
| | ↳ *open version history* | |
| | ↳ *Data Observability tab is not visible in version history* | |

### Domain detail page — Data Observability tab

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Domain detail page — Data Observability tab** - clicking Data Observability tab loads DQ dashboard widgets | Clicking Data Observability tab loads DQ dashboard widgets |
| | ↳ *Data Observability tab is visible on domain page* | |
| | ↳ *navigating to Data Observability tab loads DQ dashboard* | |
| | ↳ *DQ dashboard widgets are visible* | |
| 2 | **Domain detail page — Data Observability tab** - DQ dashboard API carries domainFqn filter | DQ dashboard API carries domainFqn filter |
| | ↳ *navigate to domain Data Observability tab* | |
| | ↳ *DQ API response carries domainFqn filter* | |
| 3 | **Domain detail page — Data Observability tab** - filter bar is visible on Domain Data Observability tab | Filter bar is visible on Domain Data Observability tab |
| | ↳ *navigate to domain Data Observability tab* | |
| | ↳ *all filter bar buttons are visible for additional drill-down* | |
| 4 | **Domain detail page — Data Observability tab** - Data Observability tab absent in version history view | Data Observability tab absent in version history view |
| | ↳ *navigate to domain page* | |
| | ↳ *open version history* | |
| | ↳ *Data Observability tab is not visible in version history* | |

### Standalone DQ Dashboard — regression

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Standalone DQ Dashboard — regression** - standalone DQ dashboard still shows the filter bar | Standalone DQ dashboard still shows the filter bar |
| | ↳ *navigate to standalone DQ dashboard* | |
| | ↳ *filter bar buttons are visible* | |
| 2 | **Standalone DQ Dashboard — regression** - applying tag filter returns a successful DQ API response | Applying tag filter returns a successful DQ API response |
| | ↳ *navigate to standalone DQ dashboard* | |
| | ↳ *open tag filter dropdown and select tag* | |
| | ↳ *applying tag filter returns successful DQ API responses* | |

</details>

<details open>
<summary>📄 <b>TaskPermissions.spec.ts</b> (13 tests, 13 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskPermissions.spec.ts)

### Task Permissions - Assignee Must Have Edit Permission

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Permissions - Assignee Must Have Edit Permission** - assignee WITHOUT EditDescription should NOT be able to resolve RequestDescription task | Assignee WITHOUT EditDescription should NOT be able to resolve RequestDescription task |
| 2 | **Task Permissions - Assignee Must Have Edit Permission** - owner (has EditDescription) CAN resolve task | Owner (has EditDescription) CAN resolve task |
| 3 | **Task Permissions - Assignee Must Have Edit Permission** - admin CAN resolve any task | Admin CAN resolve any task |
| 4 | **Task Permissions - Assignee Must Have Edit Permission** - assignee WITHOUT EditTags should NOT be able to resolve RequestTag task | Assignee WITHOUT EditTags should NOT be able to resolve RequestTag task |

### Task Permissions - UI Button Visibility

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Permissions - UI Button Visibility** - assignee (owner) should see approve/reject buttons | Assignee (owner) should see approve/reject buttons |
| 2 | **Task Permissions - UI Button Visibility** - non-assignee without permissions should NOT see approve/reject buttons | Non-assignee without permissions should NOT see approve/reject buttons |
| 3 | **Task Permissions - UI Button Visibility** - admin should always see approve/reject buttons | Admin should always see approve/reject buttons |

### Task Permissions - Team Assignment

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Permissions - Team Assignment** - team member CAN resolve task assigned to team (team owns entity) | Team member CAN resolve task assigned to team (team owns entity) |
| 2 | **Task Permissions - Team Assignment** - non-team member should NOT see approve button | Non-team member should NOT see approve button |

### Task Permissions - Task Creator

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Permissions - Task Creator** - task creator CAN close their own task | Task creator CAN close their own task |
| 2 | **Task Permissions - Task Creator** - non-creator non-assignee CANNOT close task | Non-creator non-assignee CANNOT close task |

### Task Permissions - Edge Cases

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Permissions - Edge Cases** - resolving already closed task should preserve closed status | Resolving already closed task should preserve closed status |
| 2 | **Task Permissions - Edge Cases** - task without assignees should still allow admin to resolve | Task without assignees should still allow admin to resolve |

</details>

<details open>
<summary>📄 <b>Tasks.spec.ts</b> (13 tests, 13 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks.spec.ts)

### Task Workflow Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Workflow Tests** - should create request description task from entity page | Create request description task from entity page |
| 2 | **Task Workflow Tests** - should allow manual assignee selection when entity has no owner | Allow manual assignee selection when entity has no owner |
| 3 | **Task Workflow Tests** - should create suggest tags task | Create suggest tags task |
| 4 | **Task Workflow Tests** - clicking task in activity feed should navigate to entity page with task tab | Clicking task in activity feed should navigate to entity page with task tab |
| 5 | **Task Workflow Tests** - task link should NOT navigate to wrong URL like /table/TASK-xxxxx | Task link should NOT navigate to wrong URL like /table/TASK-xxxxx |
| 6 | **Task Workflow Tests** - assignee should be able to approve task | Assignee should be able to approve task |
| 7 | **Task Workflow Tests** - non-assignee without edit permissions should NOT see approve button | Non-assignee without edit permissions should NOT see approve button |
| 8 | **Task Workflow Tests** - accepting task without edit permission should be rejected by backend | Accepting task without edit permission should be rejected by backend |
| 9 | **Task Workflow Tests** - task count in Activity Feed tab should match actual tasks | Task count in Activity Feed tab should match actual tasks |
| 10 | **Task Workflow Tests** - /tasks/count API should return correct counts for aboutEntity filter | /tasks/count API should return correct counts for aboutEntity filter |
| 11 | **Task Workflow Tests** - creating a task should appear in entity activity feed | Creating a task should appear in entity activity feed |
| 12 | **Task Workflow Tests** - task should appear in "My Tasks" filter for assignee | Task should appear in "My Tasks" filter for assignee |
| 13 | **Task Workflow Tests** - tasks should respect domain filter when domain is selected | Tasks should respect domain filter when domain is selected |

</details>

<details open>
<summary>📄 <b>ODCSImportExportPermissions.spec.ts</b> (13 tests, 13 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ODCSImportExportPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ODCSImportExportPermissions.spec.ts)

### ODCS Import/Export - RBAC Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ODCS Import/Export - RBAC Permissions** - Admin should see all import and export options for existing contract | Verify admin can see all import/export options for existing contract |
| 2 | **ODCS Import/Export - RBAC Permissions** - Admin should successfully export ODCS contract | Verify admin can export ODCS contract |
| 3 | **ODCS Import/Export - RBAC Permissions** - Admin should successfully import ODCS contract | Verify admin can import ODCS contract on table without contract |
| 4 | **ODCS Import/Export - RBAC Permissions** - Data Consumer should see export but not import options | Data Consumer should see export options but not import options |
| 5 | **ODCS Import/Export - RBAC Permissions** - Data Consumer can export ODCS contract | Data Consumer can successfully export ODCS contract |
| 6 | **ODCS Import/Export - RBAC Permissions** - Data Steward should see export but not import options | Data Steward should see export options but not import options |
| 7 | **ODCS Import/Export - RBAC Permissions** - Data Steward can export ODCS contract | Data Steward can successfully export ODCS contract |
| 8 | **ODCS Import/Export - RBAC Permissions** - User with EditAll should see all import and export options | User with EditAll permission should see all import and export options |
| 9 | **ODCS Import/Export - RBAC Permissions** - User with EditAll can export ODCS contract | User with EditAll permission can export ODCS contract |
| 10 | **ODCS Import/Export - RBAC Permissions** - User with EditAll can import ODCS contract | User with EditAll permission can import ODCS contract |
| 11 | **ODCS Import/Export - RBAC Permissions** - User with ViewOnly should see export but not import options | User with ViewOnly permission should see export but not import options |
| 12 | **ODCS Import/Export - RBAC Permissions** - User with ViewOnly can export ODCS contract | User with ViewOnly permission can export ODCS contract |
| 13 | **ODCS Import/Export - RBAC Permissions** - API should allow export for users with view permission | Verify API allows export for users with view permission |

</details>

<details open>
<summary>📄 <b>AutoPilot.spec.ts</b> (12 tests, 12 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/AutoPilot.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/AutoPilot.spec.ts)

### Rest

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Rest** - Create Service and check the AutoPilot status | Create Service and check the AutoPilot status |
| 2 | **Rest** - Agents created by AutoPilot should be deleted | Agents created by AutoPilot should be deleted |

### Metabase

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metabase** - Create Service and check the AutoPilot status | Create Service and check the AutoPilot status |
| 2 | **Metabase** - Agents created by AutoPilot should be deleted | Agents created by AutoPilot should be deleted |

### Mysql

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Mysql** - Create Service and check the AutoPilot status | Create Service and check the AutoPilot status |
| 2 | **Mysql** - Agents created by AutoPilot should be deleted | Agents created by AutoPilot should be deleted |

### Kafka

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Kafka** - Create Service and check the AutoPilot status | Create Service and check the AutoPilot status |
| 2 | **Kafka** - Agents created by AutoPilot should be deleted | Agents created by AutoPilot should be deleted |

### Mlflow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Mlflow** - Create Service and check the AutoPilot status | Create Service and check the AutoPilot status |
| 2 | **Mlflow** - Agents created by AutoPilot should be deleted | Agents created by AutoPilot should be deleted |

### Airflow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Airflow** - Create Service and check the AutoPilot status | Create Service and check the AutoPilot status |
| 2 | **Airflow** - Agents created by AutoPilot should be deleted | Agents created by AutoPilot should be deleted |

</details>

<details open>
<summary>📄 <b>TasksUIFlow.spec.ts</b> (12 tests, 44 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/TasksUIFlow.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/TasksUIFlow.spec.ts)

### Tasks UI Flow - Multi Entity Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Tasks UI Flow - Multi Entity Tests** - Create and resolve description task for Table via UI | Create and resolve description task for Table via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create description task via UI* | |
| | ↳ *Verify task appears in activity feed* | |
| | ↳ *Resolve task with approval* | |
| 2 | **Tasks UI Flow - Multi Entity Tests** - Create and reject tag task for Table via UI | Create and reject tag task for Table via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create tag task via UI* | |
| | ↳ *Verify task in activity feed* | |
| | ↳ *Reject task with comment* | |
| 3 | **Tasks UI Flow - Multi Entity Tests** - Create and resolve description task for Dashboard via UI | Create and resolve description task for Dashboard via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create description task via UI* | |
| | ↳ *Verify task appears in activity feed* | |
| | ↳ *Resolve task with approval* | |
| 4 | **Tasks UI Flow - Multi Entity Tests** - Create and reject tag task for Dashboard via UI | Create and reject tag task for Dashboard via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create tag task via UI* | |
| | ↳ *Verify task in activity feed* | |
| | ↳ *Reject task with comment* | |
| 5 | **Tasks UI Flow - Multi Entity Tests** - Create and resolve description task for Topic via UI | Create and resolve description task for Topic via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create description task via UI* | |
| | ↳ *Verify task appears in activity feed* | |
| | ↳ *Resolve task with approval* | |
| 6 | **Tasks UI Flow - Multi Entity Tests** - Create and reject tag task for Topic via UI | Create and reject tag task for Topic via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create tag task via UI* | |
| | ↳ *Verify task in activity feed* | |
| | ↳ *Reject task with comment* | |
| 7 | **Tasks UI Flow - Multi Entity Tests** - Create and resolve description task for Pipeline via UI | Create and resolve description task for Pipeline via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create description task via UI* | |
| | ↳ *Verify task appears in activity feed* | |
| | ↳ *Resolve task with approval* | |
| 8 | **Tasks UI Flow - Multi Entity Tests** - Create and reject tag task for Pipeline via UI | Create and reject tag task for Pipeline via UI |
| | ↳ *Navigate to entity page* | |
| | ↳ *Create tag task via UI* | |
| | ↳ *Verify task in activity feed* | |
| | ↳ *Reject task with comment* | |

### Task Workflow - Table Column Tasks

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Workflow - Table Column Tasks** - Create description task for table column via UI | Create description task for table column via UI |
| | ↳ *Navigate to table and open column task menu* | |
| | ↳ *Fill task form and submit* | |
| | ↳ *Resolve the column task* | |
| 2 | **Task Workflow - Table Column Tasks** - Create tag task for table column via UI | Create tag task for table column via UI |
| | ↳ *Navigate to table and open column task menu* | |
| | ↳ *Fill tag task form and submit* | |
| | ↳ *Resolve the column tag task* | |

### Task Activity Feed Integration

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Activity Feed Integration** - Verify task lifecycle in activity feed | Task lifecycle in activity feed |
| | ↳ *Create a task* | |
| | ↳ *Verify task appears in Open tasks tab* | |
| | ↳ *Resolve task and verify it moves to Closed* | |
| 2 | **Task Activity Feed Integration** - Verify task shows correct metadata | Task shows correct metadata |
| | ↳ *Create a task* | |
| | ↳ *Verify task metadata in feed* | |
| | ↳ *Cleanup - resolve task* | |

</details>

<details open>
<summary>📄 <b>staticPages.spec.ts</b> (12 tests, 12 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/VisualRegression/staticPages.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/VisualRegression/staticPages.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | landing-page matches baseline | Landing-page matches baseline |
| 2 | explore matches baseline | Explore matches baseline |
| 3 | glossary matches baseline | Glossary matches baseline |
| 4 | settings matches baseline | Settings matches baseline |
| 5 | database-services matches baseline | Database-services matches baseline |
| 6 | data-quality matches baseline | Data-quality matches baseline |
| 7 | incident-manager matches baseline | Incident-manager matches baseline |
| 8 | users matches baseline | Users matches baseline |
| 9 | teams matches baseline | Teams matches baseline |
| 10 | bots matches baseline | Bots matches baseline |
| 11 | applications matches baseline | Applications matches baseline |
| 12 | landing page with collapsed sidebar matches baseline | Landing page with collapsed sidebar matches baseline |

</details>

<details open>
<summary>📄 <b>NestedColumnsExpandCollapse.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/NestedColumnsExpandCollapse.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/NestedColumnsExpandCollapse.spec.ts)

### Table - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### Topic - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### API Endpoint - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **API Endpoint - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### Data Model - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Model - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### Container - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### Search Index - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Index - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### Worksheet - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Worksheet - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### File - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **File - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names | Not duplicate rows when expanding and collapsing nested columns with same names |

### Table Version History - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Version History - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names in Version History | Not duplicate rows when expanding and collapsing nested columns with same names in Version History |

### Table Profiler Tab - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Profiler Tab - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names in Profiler Tab | Not duplicate rows when expanding and collapsing nested columns with same names in Profiler Tab |

### API Endpoint Entity Summary Panel - Nested columns with duplicate names

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **API Endpoint Entity Summary Panel - Nested columns with duplicate names** - should not duplicate rows when expanding and collapsing nested columns with same names in Explore Summary Panel | Not duplicate rows when expanding and collapsing nested columns with same names in Explore Summary Panel |

</details>

<details open>
<summary>📄 <b>TaskComments.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskComments.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskComments.spec.ts)

### Task Comments - Add Comment

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Comments - Add Comment** - assignee should be able to add comment to task | Assignee should be able to add comment to task |
| 2 | **Task Comments - Add Comment** - non-assignee should be able to add comment | Non-assignee should be able to add comment |
| 3 | **Task Comments - Add Comment** - admin should be able to add comment to any task | Admin should be able to add comment to any task |

### Task Comments - @Mention

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Comments - @Mention** - typing @ should show user suggestion dropdown | Typing @ should show user suggestion dropdown |
| 2 | **Task Comments - @Mention** - selecting user from @ dropdown should add mention | Selecting user from @ dropdown should add mention |

### Task Comments - Edit/Delete

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Comments - Edit/Delete** - comment author should see edit/delete options | Comment author should see edit/delete options |
| 2 | **Task Comments - Edit/Delete** - should be able to edit own comment | Be able to edit own comment |
| 3 | **Task Comments - Edit/Delete** - should be able to delete own comment | Be able to delete own comment |
| 4 | **Task Comments - Edit/Delete** - non-author should not see edit/delete options | Non-author should not see edit/delete options |

### Task Comments - API Validation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Comments - API Validation** - POST /tasks/{id}/comments should add comment | POST /tasks/{id}/comments should add comment |
| 2 | **Task Comments - API Validation** - GET /tasks/{id}?fields=comments should return comments | GET /tasks/{id}?fields=comments should return comments |

</details>

<details open>
<summary>📄 <b>TaskComments.spec.ts</b> (10 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/TaskComments.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/TaskComments.spec.ts)

### Task Comments - API Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Comments - API Tests** - Add comment to a task | Add comment to a task |
| 2 | **Task Comments - API Tests** - Add multiple comments to a task | Add multiple comments to a task |
| 3 | **Task Comments - API Tests** - Edit own comment - author can edit | Edit own comment - author can edit |
| 4 | **Task Comments - API Tests** - Delete own comment - author can delete | Delete own comment - author can delete |
| 5 | **Task Comments - API Tests** - Admin can delete any comment | Admin can delete any comment |
| 6 | **Task Comments - API Tests** - Comment supports markdown formatting | Comment supports markdown formatting |
| 7 | **Task Comments - API Tests** - Comment with @mention syntax | Comment with @mention syntax |

### Task Comments - Permission Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Comments - Permission Tests** - Non-author cannot edit comment - returns 403 | Non-author cannot edit comment - returns 403 |
| 2 | **Task Comments - Permission Tests** - Non-author non-admin cannot delete comment - returns 403 | Non-author non-admin cannot delete comment - returns 403 |

### Task Comments - UI Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Comments - UI Tests** - View comments on task in activity feed | View comments on task in activity feed |

</details>

<details open>
<summary>📄 <b>TaskResolution.spec.ts</b> (9 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskResolution.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskResolution.spec.ts)

### Task Resolution - Approve/Reject

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Approve/Reject** - assignee should see approve/reject buttons | Assignee should see approve/reject buttons |
| 2 | **Task Resolution - Approve/Reject** - non-assignee should NOT see approve/reject buttons | Non-assignee should NOT see approve/reject buttons |
| 3 | **Task Resolution - Approve/Reject** - admin should be able to approve task | Admin should be able to approve task |
| 4 | **Task Resolution - Approve/Reject** - recognizer-style data quality task should reject via /tasks/{id}/resolve | Recognizer-style data quality task should reject via /tasks/{id}/resolve |

### Task Resolution - Team Assignee

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Team Assignee** - team member should be able to approve task assigned to team | Team member should be able to approve task assigned to team |
| 2 | **Task Resolution - Team Assignee** - non-team member should NOT see approve button for team task | Non-team member should NOT see approve button for team task |

### Task Resolution - Permission Validation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Permission Validation** - resolving task should require edit permission on target entity | Resolving task should require edit permission on target entity |
| 2 | **Task Resolution - Permission Validation** - owner/assignee with edit permission should successfully resolve task | Owner/assignee with edit permission should successfully resolve task |

### Task Resolution - Close by Creator

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Close by Creator** - task creator should be able to close/reject their own task | Task creator should be able to close/reject their own task |

</details>

<details open>
<summary>📄 <b>DescriptionVisibility.spec.ts</b> (9 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/DescriptionVisibility.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/DescriptionVisibility.spec.ts)

### Long Description Visibility

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Long Description Visibility** - Domain long description is scrollable and end of text is visible after scroll | Domain long description is scrollable and end of text is visible after scroll |
| 2 | **Long Description Visibility** - Domain description comment-thread button opens the activity feed drawer | Domain description comment-thread button opens the activity feed drawer |
| 3 | **Long Description Visibility** - Data Product truncates long description and end of text is not visible before expand | Data Product truncates long description and end of text is not visible before expand |
| 4 | **Long Description Visibility** - Data Product long description is scrollable and end of text is visible after expanding | Data Product long description is scrollable and end of text is visible after expanding |
| 5 | **Long Description Visibility** - Glossary truncates long description and end of text is not visible before expand | Glossary truncates long description and end of text is not visible before expand |
| 6 | **Long Description Visibility** - Glossary long description is visible after expanding | Glossary long description is visible after expanding |
| 7 | **Long Description Visibility** - Glossary Term truncates long description and end of text is not visible before expand | Glossary Term truncates long description and end of text is not visible before expand |
| 8 | **Long Description Visibility** - Glossary Term long description is visible after expanding | Glossary Term long description is visible after expanding |
| 9 | **Long Description Visibility** - Customized Table detail page Description widget shows long description | Customized Table detail page Description widget shows long description |

</details>

<details open>
<summary>📄 <b>Tasks.spec.ts</b> (9 tests, 18 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Tasks.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Tasks.spec.ts)

### Task Entity API Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Entity API Tests** - Create task with different built-in categories | Create task with different built-in categories |
| | ↳ *Create MetadataUpdate task* | |
| | ↳ *Create Approval task* | |
| | ↳ *Create Review task* | |
| 2 | **Task Entity API Tests** - Task ID sequence is unique | Task ID sequence is unique |
| 3 | **Task Entity API Tests** - Resolve task with approval | Resolve task with approval |
| | ↳ *Create task* | |
| | ↳ *Resolve with approval* | |
| | ↳ *Cleanup* | |
| 4 | **Task Entity API Tests** - Resolve task with rejection | Resolve task with rejection |
| | ↳ *Create task* | |
| | ↳ *Resolve with rejection* | |
| | ↳ *Cleanup* | |
| 5 | **Task Entity API Tests** - Create task with assignees | Create task with assignees |
| 6 | **Task Entity API Tests** - List tasks by status | List tasks by status |
| 7 | **Task Entity API Tests** - Task CRUD operations | Task CRUD operations |
| | ↳ *Create task* | |
| | ↳ *Get task by ID* | |
| | ↳ *Get task by taskId (human-readable)* | |
| | ↳ *Delete task* | |
| 8 | **Task Entity API Tests** - All built-in task categories can be created | All built-in task categories can be created |
| 9 | **Task Entity API Tests** - Task priority levels | Task priority levels |

</details>

<details open>
<summary>📄 <b>CsvJobsTray.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/CsvJobsTray.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/CsvJobsTray.spec.ts)

### CsvJobsTray

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **CsvJobsTray** - shows a running export job and its progress text | Shows a running export job and its progress text |
| 2 | **CsvJobsTray** - shows an import job in the tray | Shows an import job in the tray |
| 3 | **CsvJobsTray** - can cancel a running job from the tray | Can cancel a running job from the tray |
| 4 | **CsvJobsTray** - shows Download button for a completed export job | Shows Download button for a completed export job |
| 5 | **CsvJobsTray** - FAILED import job shows error styling and dismiss button | FAILED import job shows error styling and dismiss button |
| 6 | **CsvJobsTray** - dismiss button removes a completed import job and hides the tray | Dismiss button removes a completed import job and hides the tray |
| 7 | **CsvJobsTray** - multiple jobs co-exist in the tray | Multiple jobs co-exist in the tray |
| 8 | **CsvJobsTray** - Clear completed removes all terminal jobs and hides the tray | Clear completed removes all terminal jobs and hides the tray |

</details>

<details open>
<summary>📄 <b>TestConnectionModal.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/TestConnectionModal.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/TestConnectionModal.spec.ts)

### TestConnectionModal UI states

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **TestConnectionModal UI states** - validation shows all required field errors on first click when all fields are empty | Validation shows all required field errors on first click when all fields are empty |
| 2 | **TestConnectionModal UI states** - validation shows RJSF field errors on first click when only service name is filled | Validation shows RJSF field errors on first click when only service name is filled |
| 3 | **TestConnectionModal UI states** - modal opens with gate card and capability checks sections | Modal opens with gate card and capability checks sections |
| 4 | **TestConnectionModal UI states** - success state shows Done button and hides Edit Connection and Retry Test | Success state shows Done button and hides Edit Connection and Retry Test |
| 5 | **TestConnectionModal UI states** - failure state shows Edit Connection button and Retry Test button | Failure state shows Edit Connection button and Retry Test button |
| 6 | **TestConnectionModal UI states** - failure state shows remediation card with error content | Failure state shows remediation card with error content |
| 7 | **TestConnectionModal UI states** - Edit Connection click dismisses the modal | Edit Connection click dismisses the modal |
| 8 | **TestConnectionModal UI states** - raw log toggle shows and hides connection log | Raw log toggle shows and hides connection log |

</details>

<details open>
<summary>📄 <b>ColumnSorting.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ColumnSorting.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ColumnSorting.spec.ts)

### Table Column Sorting

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Column Sorting** - Sort dropdown should be visible on table schema tab | Sort dropdown should be visible on table schema tab |
| 2 | **Table Column Sorting** - Sort dropdown should show Alphabetical and Original Order options | Sort dropdown should show Alphabetical and Original Order options |
| 3 | **Table Column Sorting** - Clicking Alphabetical option should sort columns by name | Clicking Alphabetical option should sort columns by name |
| 4 | **Table Column Sorting** - Clicking Original Order option should sort columns by ordinal position | Clicking Original Order option should sort columns by ordinal position |
| 5 | **Table Column Sorting** - Clicking Name column header should toggle sort order | Clicking Name column header should toggle sort order |
| 6 | **Table Column Sorting** - Switching sort field should reset sort order to ascending | Switching sort field should reset sort order to ascending |
| 7 | **Table Column Sorting** - Sort state should be preserved when searching columns | Sort state should be preserved when searching columns |

</details>

<details open>
<summary>📄 <b>DescriptionSuggestion.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DescriptionSuggestion.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DescriptionSuggestion.spec.ts)

### Description Task Workflows

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Description Task Workflows** - should add and accept a requested table description | Add and accept a requested table description |
| 2 | **Description Task Workflows** - should edit and accept a suggested table column description | Edit and accept a suggested table column description |
| 3 | **Description Task Workflows** - should add and accept a requested topic schema field description | Add and accept a requested topic schema field description |
| 4 | **Description Task Workflows** - should add and accept a requested api endpoint request schema field description | Add and accept a requested api endpoint request schema field description |
| 5 | **Description Task Workflows** - should edit and accept a suggested api endpoint response schema field description | Edit and accept a suggested api endpoint response schema field description |
| 6 | **Description Task Workflows** - should decline a requested api endpoint request schema field description | Decline a requested api endpoint request schema field description |
| 7 | **Description Task Workflows** - should decline a suggested container column description | Decline a suggested container column description |

</details>

<details open>
<summary>📄 <b>TaskCreation.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskCreation.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskCreation.spec.ts)

### Task Creation - Request Description

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation - Request Description** - should create request description task for table | Create request description task for table |
| 2 | **Task Creation - Request Description** - should create request description task for column | Create request description task for column |
| 3 | **Task Creation - Request Description** - should allow manual assignee selection when entity has no owner | Allow manual assignee selection when entity has no owner |
| 4 | **Task Creation - Request Description** - should prevent task creation without assignee | Prevent task creation without assignee |

### Task Creation - Request Tags

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation - Request Tags** - should create request tags task for table | Create request tags task for table |

### Task Creation - Suggest Description

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation - Suggest Description** - should create suggest description task with suggested value | Create suggest description task with suggested value |

### Task Creation - Suggest Tags

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation - Suggest Tags** - should create suggest tags task with suggested tags | Create suggest tags task with suggested tags |

</details>

<details open>
<summary>📄 <b>TaskSuggestionAPIs.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskSuggestionAPIs.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskSuggestionAPIs.spec.ts)

### Task Suggestion APIs

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Suggestion APIs** - should apply suggestion via PUT /api/v1/tasks/{id}/suggestion/apply | Apply suggestion via PUT /api/v1/tasks/{id}/suggestion/apply |
| 2 | **Task Suggestion APIs** - should reject non-suggestion task via apply endpoint | Reject non-suggestion task via apply endpoint |
| 3 | **Task Suggestion APIs** - should perform bulk approve on multiple tasks | Perform bulk approve on multiple tasks |
| 4 | **Task Suggestion APIs** - should perform bulk reject on multiple tasks | Perform bulk reject on multiple tasks |
| 5 | **Task Suggestion APIs** - should perform bulk assign operation | Perform bulk assign operation |
| 6 | **Task Suggestion APIs** - should perform bulk cancel operation | Perform bulk cancel operation |
| 7 | **Task Suggestion APIs** - should handle partial failures in bulk operations | Handle partial failures in bulk operations |

</details>

<details open>
<summary>📄 <b>Collect.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/Collect.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/Collect.spec.ts)

### Collect end point should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Collect end point should work properly** - Visit Settings page should trigger collect API | Visit Settings page should trigger collect API |
| 2 | **Collect end point should work properly** - Visit Explore page should trigger collect API | Visit Explore page should trigger collect API |
| 3 | **Collect end point should work properly** - Visit Quality page should trigger collect API | Visit Quality page should trigger collect API |
| 4 | **Collect end point should work properly** - Visit Incident Manager page should trigger collect API | Visit Incident Manager page should trigger collect API |
| 5 | **Collect end point should work properly** - Visit Insights page should trigger collect API | Visit Insights page should trigger collect API |
| 6 | **Collect end point should work properly** - Visit Glossary page should trigger collect API | Visit Glossary page should trigger collect API |
| 7 | **Collect end point should work properly** - Visit Tags page should trigger collect API | Visit Tags page should trigger collect API |

</details>

<details open>
<summary>📄 <b>ActivityStream.spec.ts</b> (6 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ActivityStream.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ActivityStream.spec.ts)

### Activity Stream on Entity Pages

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity Stream on Entity Pages** - activity feed tab shows activity events for entity | Activity feed tab shows activity events for entity |
| 2 | **Activity Stream on Entity Pages** - activity events are created when entity description is updated | Activity events are created when entity description is updated |
| 3 | **Activity Stream on Entity Pages** - activity events are created when entity tags are updated | Activity events are created when entity tags are updated |
| 4 | **Activity Stream on Entity Pages** - activity count badge is displayed in tab header | Activity count badge is displayed in tab header |
| 5 | **Activity Stream on Entity Pages** - activity stream API is called when visiting entity page | Activity stream API is called when visiting entity page |
| 6 | **Activity Stream on Entity Pages** - activity feed left panel shows All and Tasks options | Activity feed left panel shows All and Tasks options |

</details>

<details open>
<summary>📄 <b>KnowledgeGraph.spec.ts</b> (6 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/KnowledgeGraph.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/KnowledgeGraph.spec.ts)

### Knowledge Graph

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Knowledge Graph** - Verify the knowledge graph tab loads and fetches depth-1 graph data | The knowledge graph tab loads and fetches depth-1 graph data |
| 2 | **Knowledge Graph** - Verify changing the depth refetches the graph at the new depth | Changing the depth refetches the graph at the new depth |
| 3 | **Knowledge Graph** - Verify the relationship lens can be switched to Ontology | The relationship lens can be switched to Ontology |
| 4 | **Knowledge Graph** - Verify the graph can be expanded to fullscreen and restored | The graph can be expanded to fullscreen and restored |
| 5 | **Knowledge Graph** - Verify reset-view and export controls are available once the graph loads | Reset-view and export controls are available once the graph loads |
| 6 | **Knowledge Graph** - Verify switching the level updates the caption to the domain view | Switching the level updates the caption to the domain view |

</details>

<details open>
<summary>📄 <b>TaskNestedFields.spec.ts</b> (6 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskNestedFields.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskNestedFields.spec.ts)

### Task Resolution - ApiEndpoint Schema Fields

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - ApiEndpoint Schema Fields** - should create and approve requestSchema field description task | Create and approve requestSchema field description task |
| 2 | **Task Resolution - ApiEndpoint Schema Fields** - should create and approve responseSchema field description task | Create and approve responseSchema field description task |

### Task Resolution - DashboardDataModel Columns

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - DashboardDataModel Columns** - should create and approve column description task for DashboardDataModel | Create and approve column description task for DashboardDataModel |

### Task Resolution - MlModel Features

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - MlModel Features** - should create and approve mlFeature description task for MlModel | Create and approve mlFeature description task for MlModel |

### Task Resolution - SearchIndex Fields

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - SearchIndex Fields** - should create and approve field description task for SearchIndex | Create and approve field description task for SearchIndex |
| 2 | **Task Resolution - SearchIndex Fields** - should create and approve nested field description task for SearchIndex | Create and approve nested field description task for SearchIndex |

</details>

<details open>
<summary>📄 <b>AssetHealthWidget.spec.ts</b> (6 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/AssetHealthWidget.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/AssetHealthWidget.spec.ts)

### Asset Health widget

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Asset Health widget** - renders the widget with all four category rows | Renders the widget with all four category rows |
| 2 | **Asset Health widget** - shows setup CTAs for unconfigured categories | Shows setup CTAs for unconfigured categories |
| 3 | **Asset Health widget** - Add tests CTA navigates to the Profiler tab | Add tests CTA navigates to the Profiler tab |
| 4 | **Asset Health widget** - Enable observability CTA navigates to the Profiler tab | Enable observability CTA navigates to the Profiler tab |
| 5 | **Asset Health widget** - Create contract CTA navigates to the Contract tab | Create contract CTA navigates to the Contract tab |
| 6 | **Asset Health widget** - replaces the setup CTAs with status badges once tests are configured | Replaces the setup CTAs with status badges once tests are configured |

</details>

<details open>
<summary>📄 <b>CertificationDropdown.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/CertificationDropdown.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/CertificationDropdown.spec.ts)

### Certification Dropdown

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Certification Dropdown** - should show enabled certification tag in dropdown | Show enabled certification tag in dropdown |
| 2 | **Certification Dropdown** - should NOT show disabled certification tag in dropdown | NOT show disabled certification tag in dropdown |
| 3 | **Certification Dropdown** - should show certification after re-enabling disabled tag | Show certification after re-enabling disabled tag |
| 4 | **Certification Dropdown** - should handle multiple disabled tags correctly | Handle multiple disabled tags correctly |

</details>

<details open>
<summary>📄 <b>CertificationFilter.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/CertificationFilter.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/CertificationFilter.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Certification filter is rendered between Tier and Tag in the filter row | Certification filter is rendered between Tier and Tag in the filter row |
| 2 | Certification filter narrows both table- and testCase-index queries via the flat field path | Certification filter narrows both table- and testCase-index queries via the flat field path |
| 3 | Certification tags are not listed in the generic Tag dropdown | Certification tags are not listed in the generic Tag dropdown |
| 4 | TagPage: Certification detail page routes through certification.tagLabel.tagFQN | TagPage: Certification detail page routes through certification.tagLabel.tagFQN |

</details>

<details open>
<summary>📄 <b>MultipleRename.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/MultipleRename.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/MultipleRename.spec.ts)

### Multiple Rename Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Multiple Rename Tests** - Glossary - should handle multiple consecutive renames | Glossary - should handle multiple consecutive renames |
| 2 | **Multiple Rename Tests** - GlossaryTerm - should handle multiple consecutive renames | GlossaryTerm - should handle multiple consecutive renames |
| 3 | **Multiple Rename Tests** - Classification - should handle multiple consecutive renames | Classification - should handle multiple consecutive renames |
| 4 | **Multiple Rename Tests** - Tag - should handle multiple consecutive renames | Tag - should handle multiple consecutive renames |

</details>

<details open>
<summary>📄 <b>ContextCenterArchive.spec.ts</b> (3 tests, 28 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ContextCenterArchive.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ContextCenterArchive.spec.ts)

### Context Center - Archive Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center - Archive Page** - full document lifecycle: folder expand icon, upload, delete, restore, and permanent delete | Full document lifecycle: folder expand icon, upload, delete, restore, and permanent delete |
| | ↳ *navigate to documents page and verify folder is in sidebar* | |
| | ↳ *expand icon is not visible for an empty folder* | |
| | ↳ *upload document to folder via UI* | |
| | ↳ *expand icon is visible after uploading a file to the folder* | |
| | ↳ *folder name is visible on the document card row* | |
| | ↳ *expanding folder in sidebar shows the uploaded file* | |
| | ↳ *soft delete the document* | |
| | ↳ *expand icon is not visible after deleting the only file* | |
| | ↳ *searching for the deleted document returns no results* | |
| | ↳ *archive API returns the soft-deleted document* | |
| | ↳ *restore the archived document* | |
| | ↳ *restored document is visible on the documents page* | |
| | ↳ *restored document has folder name (restored to root)* | |
| | ↳ *restored document appears in search results* | |
| | ↳ *soft delete the restored document* | |
| | ↳ *archive API returns the re-deleted document* | |
| | ↳ *permanently delete the document from the archive* | |
| | ↳ *permanently deleted document is absent from the archive API* | |
| | ↳ *permanently deleted document is absent from the documents page* | |
| | ↳ *permanently deleted document is absent from documents search* | |

### Context Center - Folder Delete: file absent from search and archive

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center - Folder Delete: file absent from search and archive** - file in deleted folder is absent from search and not added to archive | File in deleted folder is absent from search and not added to archive |
| | ↳ *navigate to documents page and verify folder in sidebar* | |
| | ↳ *upload document into folder via UI* | |
| | ↳ *uploaded file is visible with correct folder label* | |
| | ↳ *soft-delete the folder via API* | |
| | ↳ *file is no longer visible in documents search after folder delete* | |
| | ↳ *file should be visibile in the archive page* | |

### Context Center - Archive Page Lazy Loading

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center - Archive Page Lazy Loading** - archive page lazy-loads more rows on scroll within its own scroll container | Archive page lazy-loads more rows on scroll within its own scroll container |
| | ↳ *navigate to archive and wait for the initial page of results* | |
| | ↳ *scrolling to the bottom of the archive list fetches more rows (after= request) and appends them* | |

</details>

<details open>
<summary>📄 <b>OntologyImportRdf.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyImportRdf.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyImportRdf.spec.ts)

### Ontology RDF Import

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology RDF Import** - imports an OWL/SKOS ontology from the manage menu and round-trips through the RDF backend | Imports an OWL/SKOS ontology from the manage menu and round-trips through the RDF backend |
| 2 | **Ontology RDF Import** - reports a validation summary and blocks import for an ontology with no terms | Reports a validation summary and blocks import for an ontology with no terms |
| 3 | **Ontology RDF Import** - hides Import Ontology from a user without glossary edit permission | Hides Import Ontology from a user without glossary edit permission |

</details>

<details open>
<summary>📄 <b>StorageMetadataAgentForm.spec.ts</b> (3 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/StorageMetadataAgentForm.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/StorageMetadataAgentForm.spec.ts)

### Storage metadata agent manifest widget

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Storage metadata agent manifest widget** - edit form renders and manifest edits are saved | Edit form renders and manifest edits are saved |
| | ↳ *Manifest widget renders without crashing* | |
| | ↳ *Saved manifest is loaded into the widget* | |
| | ↳ *Manifest value can be edited in the widget* | |
| | ↳ *Edited manifest is persisted on save* | |
| | ↳ *Reopening the agent shows the persisted manifest* | |
| 2 | **Storage metadata agent manifest widget** - manifest editor is full width, clears cleanly and keeps caret stable | Manifest editor is full width, clears cleanly and keeps caret stable |
| | ↳ *Editor spans the full form width* | |
| | ↳ *Clearing the editor leaves it empty, not the sample* | |
| | ↳ *Typing valid JSON is not live-reformatted* | |
| 3 | **Storage metadata agent manifest widget** - auto-close keeps the caret between the inserted pair | Auto-close keeps the caret between the inserted pair |

</details>

<details open>
<summary>📄 <b>TierDropdown.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TierDropdown.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TierDropdown.spec.ts)

### Tier Dropdown

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Tier Dropdown** - should show enabled tier tag in dropdown | Show enabled tier tag in dropdown |
| 2 | **Tier Dropdown** - should NOT show disabled tier tag in dropdown | NOT show disabled tier tag in dropdown |
| 3 | **Tier Dropdown** - should show tier again after re-enabling disabled tag | Show tier again after re-enabling disabled tag |

</details>

<details open>
<summary>📄 <b>ConnectionConfigLayout.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ConnectionConfigLayout.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ConnectionConfigLayout.spec.ts)

### Connection config layout

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Connection config layout** - should render connector forms that previously stalled at loading | Render connector forms that previously stalled at loading |
| 2 | **Connection config layout** - should align nested sample data storage config fields without overlap | Align nested sample data storage config fields without overlap |
| 3 | **Connection config layout** - should clear inactive Snowflake auth fields before test connection and unlock ingestion filters | Clear inactive Snowflake auth fields before test connection and unlock ingestion filters |

</details>

<details open>
<summary>📄 <b>ContextCenter.spec.ts</b> (3 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/nightly/ContextCenter.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/nightly/ContextCenter.spec.ts)

### Context Center - Download

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center - Download** - download button triggers file download | Download button triggers file download |
| 2 | **Context Center - Download** - bulk download downloads selected documents as a zip with a single API call | Bulk download downloads selected documents as a zip with a single API call |

### Context Center - Article Attachments

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center - Article Attachments** - image insert via upload and URL renders in editor, persists on reload, and is downloadable from the attachment widget | Image insert via upload and URL renders in editor, persists on reload, and is downloadable from the attachment widget |
| | ↳ *navigate to the article* | |
| | ↳ *insert image via file upload* | |
| | ↳ *insert image via URL embed* | |
| | ↳ *verify autosave* | |
| | ↳ *reload and verify persistence and attachment widget* | |
| | ↳ *download attachment from the widget* | |

</details>

<details open>
<summary>📄 <b>AppStopRunModal.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/AppStopRunModal.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/AppStopRunModal.spec.ts)

### App Stop Run Modal

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **App Stop Run Modal** - should show stop button for running app runs with supportsInterrupt=true | Show stop button for running app runs with supportsInterrupt=true |
| 2 | **App Stop Run Modal** - should open stop modal when stop button is clicked and call stop API with runId | Open stop modal when stop button is clicked and call stop API with runId |
| 3 | **App Stop Run Modal** - should close stop modal when cancel is clicked | Close stop modal when cancel is clicked |

</details>

<details open>
<summary>📄 <b>RTL.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/RTL.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/RTL.spec.ts)

### Verify RTL Layout for landing page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Verify RTL Layout for landing page** - Verify DataAssets widget functionality | DataAssets widget functionality |
| 2 | **Verify RTL Layout for landing page** - Verify Following widget functionality | Following widget functionality |

</details>

<details open>
<summary>📄 <b>ApiEndpoint.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/ApiEndpoint.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/ApiEndpoint.spec.ts)

### ApiEndpoint | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ApiEndpoint | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **ApiEndpoint | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>MlModel.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/MlModel.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/MlModel.spec.ts)

### MlModel | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlModel | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **MlModel | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>StoredProcedure.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/StoredProcedure.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/StoredProcedure.spec.ts)

### StoredProcedure | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **StoredProcedure | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **StoredProcedure | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>FrequentlyJoined.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/FrequentlyJoined.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/FrequentlyJoined.spec.ts)

### Frequently Joined

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Frequently Joined** - should display frequently joined columns | Display frequently joined columns |
| 2 | **Frequently Joined** - should display frequently joined table | Display frequently joined table |

</details>

<details open>
<summary>📄 <b>interactiveStates.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/VisualRegression/interactiveStates.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/VisualRegression/interactiveStates.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | add-service connector config form (RJSF) matches baseline | Add-service connector config form (RJSF) matches baseline |
| 2 | delete confirmation modal matches baseline | Delete confirmation modal matches baseline |

</details>

<details open>
<summary>📄 <b>auth.setup.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/auth.setup.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/auth.setup.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | authenticate all users | Authenticate all users |

</details>

<details open>
<summary>📄 <b>dataInsightApp.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/dataInsightApp.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/dataInsightApp.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Run Data Insight application and wait until success | Run Data Insight application and wait until success |

</details>

<details open>
<summary>📄 <b>entity-data.setup.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/entity-data.setup.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/entity-data.setup.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | create entity data prerequisites | Create entity data prerequisites |

</details>

<details open>
<summary>📄 <b>entity-data.teardown.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/entity-data.teardown.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/entity-data.teardown.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | cleanup entity data prerequisites | Cleanup entity data prerequisites |

</details>

<details open>
<summary>📄 <b>LanguageOverride.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/LanguageOverride.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/LanguageOverride.spec.ts)

### Language Override Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Language Override Tests** - App language should override browser language on landing page and user dropdown | App language should override browser language on landing page and user dropdown |

</details>

<details open>
<summary>📄 <b>Markdown.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Markdown.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Markdown.spec.ts)

### Markdown

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Markdown** - should render markdown | Render markdown |

</details>

<details open>
<summary>📄 <b>Permission.spec.ts</b> (1 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Permission.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Permission.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Permissions | Permissions |
| | ↳ *ViewBasic permission* | |
| | ↳ *EditQuery permission* | |
| | ↳ *EditTest permission* | |

</details>

<details open>
<summary>📄 <b>TaskAssigneeManagement.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskAssigneeManagement.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskAssigneeManagement.spec.ts)

### Task Assignee Management

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Assignee Management** - admin can reassign an existing metadata task from the task details page | Admin can reassign an existing metadata task from the task details page |

</details>

<details open>
<summary>📄 <b>ApiDocs.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ApiDocs.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ApiDocs.spec.ts)

### API docs should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **API docs should work properly** - API docs should work properly | API docs should work properly |

</details>

<details open>
<summary>📄 <b>AppBasic.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/AppBasic.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/AppBasic.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | should call installed app api and it should respond with 200 | Call installed app api and it should respond with 200 |

</details>

<details open>
<summary>📄 <b>SmokeH2.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Http2/SmokeH2.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Http2/SmokeH2.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | serves JS assets over HTTP/2 with brotli encoding | Serves JS assets over HTTP/2 with brotli encoding |

</details>

<details open>
<summary>📄 <b>AppRunsHistoryLogs.spec.ts</b> (1 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/AppRunsHistoryLogs.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/AppRunsHistoryLogs.spec.ts)

### App Runs History logs viewer (mocked external app)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **App Runs History logs viewer (mocked external app)** - External app run logs open in the LogViewerModal | External app run logs open in the LogViewerModal |
| | ↳ *Open the logs modal from the run row* | |
| | ↳ *The modal shows the application logs* | |
| | ↳ *Closing the modal hides it* | |

</details>

<details open>
<summary>📄 <b>Bots.spec.ts</b> (1 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Bots.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Bots.spec.ts)

### Bots Page should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Bots Page should work properly** - Bots Page should work properly | Bots Page should work properly |
| | ↳ *Verify ingestion bot delete button is always disabled* | |
| | ↳ *Create Bot* | |
| | ↳ *Update display name and description* | |
| | ↳ *Search bot by display name* | |
| | ↳ *Search bot by bot name* | |
| | ↳ *Search bot by email* | |
| | ↳ *Search with no match shows empty state* | |
| | ↳ *Clear search restores full list* | |
| | ↳ *Verify generateToken API contract* | |
| | ↳ *Update token expiration* | |
| | ↳ *Delete Bot* | |

</details>

<details open>
<summary>📄 <b>CSVImportWithQuotesAndCommas.spec.ts</b> (1 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/CSVImportWithQuotesAndCommas.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/CSVImportWithQuotesAndCommas.spec.ts)

### CSV Import with Commas and Quotes - All Entity Types

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **CSV Import with Commas and Quotes - All Entity Types** - Create glossary with CSV, export it, create new glossary and import exported data | Create glossary with CSV, export it, create new glossary and import exported data |
| | ↳ *Create glossary and import CSV with quotes and commas* | |
| | ↳ *Export CSV and verify it contains properly escaped quotes* | |
| | ↳ *Create new glossary and import exported CSV* | |

</details>

<details open>
<summary>📄 <b>HealthCheck.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/HealthCheck.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/HealthCheck.spec.ts)

### Health Check for OpenMetadata

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Health Check for OpenMetadata** - All 5 checks should be successful | All 5 checks should be successful |

</details>

<details open>
<summary>📄 <b>OmdURLConfiguration.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/OmdURLConfiguration.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/OmdURLConfiguration.spec.ts)

### OM URL configuration

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **OM URL configuration** - update om url configuration should work | Update om url configuration should work |

</details>

<details open>
<summary>📄 <b>search-rbac.setup.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/search-rbac.setup.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/search-rbac.setup.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | enable search RBAC | Enable search RBAC |

</details>

<details open>
<summary>📄 <b>search-rbac.teardown.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/search-rbac.teardown.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/search-rbac.teardown.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | disable search RBAC | Disable search RBAC |

</details>

<details open>
<summary>📄 <b>entityDetails.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/VisualRegression/entityDetails.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/VisualRegression/entityDetails.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | table entity details (schema tab) matches baseline | Table entity details (schema tab) matches baseline |

</details>


---

<div id="entities"></div>

## Entities

<details open>
<summary>📄 <b>Entity.spec.ts</b> (353 tests, 402 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Entity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Entity.spec.ts)

### Api Endpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Api Endpoint** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Api Endpoint** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Api Endpoint** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Api Endpoint** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Api Endpoint** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Api Endpoint** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Api Endpoint** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Api Endpoint** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Api Endpoint** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Api Endpoint** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Api Endpoint** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Api Endpoint** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| | ↳ *Add and remove tags via column detail panel* | |
| 13 | **Api Endpoint** - Tag and Glossary Term preservation in column detail panel | Tag and Glossary Term preservation in column detail panel |
| | ↳ *Verify tag updates preserve glossary terms* | |
| 14 | **Api Endpoint** - Column detail panel data type display and nested column navigation | Column detail panel data type display and nested column navigation |
| | ↳ *Verify data type display and nested column counting* | |
| 15 | **Api Endpoint** - Filter columns by tag prunes non-matching rows | Tests the Tags column header filter across every entity whose child table supports it.  Verifies each entity's table wiring prunes non-matching rows when a tag filter is applied (regression for the bug where every row stayed visible). |
| | ↳ *Tag a child row* | |
| | ↳ *Apply tag filter and verify pruning* | |
| | ↳ *Clear filter and verify rows return* | |
| | ↳ *Cleanup tag* | |
| 16 | **Api Endpoint** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| | ↳ *Add and remove glossary terms via column detail panel* | |
| 17 | **Api Endpoint** - Description Add, Update and Remove for child entities | Tests description management for child entities  Tests adding, updating, and removing descriptions on child entities within a parent entity |
| | ↳ *Update description via column detail panel and test panel features* | |
| 18 | **Api Endpoint** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 19 | **Api Endpoint** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 20 | **Api Endpoint** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 21 | **Api Endpoint** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 22 | **Api Endpoint** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 23 | **Api Endpoint** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 24 | **Api Endpoint** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Table** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Table** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Table** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Table** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Table** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Table** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Table** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Table** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Table** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Table** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Table** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| | ↳ *Add and remove tags via column detail panel* | |
| 13 | **Table** - Tag and Glossary Term preservation in column detail panel | Tag and Glossary Term preservation in column detail panel |
| | ↳ *Verify tag updates preserve glossary terms* | |
| 14 | **Table** - Column detail panel data type display and nested column navigation | Column detail panel data type display and nested column navigation |
| | ↳ *Verify data type display and nested column counting* | |
| 15 | **Table** - Complex nested column structures - comprehensive validation | Complex nested column structures - comprehensive validation |
| | ↳ *Verify nested column has expand icon in main table* | |
| | ↳ *Open column detail panel for nested column* | |
| | ↳ *Verify NestedColumnsSection renders with correct structure* | |
| | ↳ *Verify count badge shows only top-level columns* | |
| | ↳ *Verify proper indentation for nested levels* | |
| | ↳ *Verify clicking on nested column navigates correctly* | |
| | ↳ *Verify clicking on intermediate nested levels (non-leaf nodes)* | |
| | ↳ *Verify multiple sibling columns at same nesting level* | |
| | ↳ *Verify deep nesting (3+ levels) if available* | |
| | ↳ *Close panel* | |
| 16 | **Table** - Array type columns with nested structures in NestedColumnsSection | Array type columns with nested structures in NestedColumnsSection |
| | ↳ *Verify array column with nested children renders correctly* | |
| 17 | **Table** - Mixed sibling columns (simple + nested) at same level | Mixed sibling columns (simple + nested) at same level |
| | ↳ *Verify mixed siblings have consistent indentation* | |
| 18 | **Table** - Filter columns by tag prunes non-matching rows | Tests the Tags column header filter across every entity whose child table supports it.  Verifies each entity's table wiring prunes non-matching rows when a tag filter is applied (regression for the bug where every row stayed visible). |
| | ↳ *Tag a child row* | |
| | ↳ *Apply tag filter and verify pruning* | |
| | ↳ *Clear filter and verify rows return* | |
| | ↳ *Cleanup tag* | |
| 19 | **Table** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| | ↳ *Add and remove glossary terms via column detail panel* | |
| 20 | **Table** - DisplayName Add, Update and Remove for child entities | DisplayName Add, Update and Remove for child entities |
| 21 | **Table** - Description Add, Update and Remove for child entities | Tests description management for child entities  Tests adding, updating, and removing descriptions on child entities within a parent entity |
| | ↳ *Update description via column detail panel and test panel features* | |
| 22 | **Table** - Column detail panel key profile metrics validation | Column detail panel key profile metrics validation |
| | ↳ *Verify key profile metrics are displayed in column detail panel* | |
| 23 | **Table** - Column detail panel - Data Quality tab shows test cases | Column detail panel - Data Quality tab shows test cases |
| | ↳ *Open column detail panel and navigate to DQ tab* | |
| | ↳ *Verify stat cards and filter by failed* | |
| | ↳ *Filter by success and verify test case card* | |
| 24 | **Table** - Column detail panel - Data Quality Incidents tab | Column detail panel - Data Quality Incidents tab |
| | ↳ *Open column detail panel and navigate to Incidents tab* | |
| | ↳ *Verify incidents stats container and cards* | |
| 25 | **Table** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 26 | **Table** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 27 | **Table** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 28 | **Table** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 29 | **Table** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 30 | **Table** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 31 | **Table** - Switch from Data Observability tab to Activity Feed tab and verify data appears | Switch from Data Observability tab to Activity Feed tab and verify data appears |
| | ↳ *Navigate to Data Observability tab* | |
| | ↳ *Verify tabs UI component is rendered in Data Observability tab* | |
| | ↳ *Switch to Activity Feed tab* | |
| | ↳ *Verify tabs or left component is rendered in Activity Feed tab* | |
| 32 | **Table** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |
| 33 | **Table** - Data Consumer should be denied access to queries and sample data tabs when deny policy rule is applied on table level | Data Consumer should be denied access to queries and sample data tabs when deny policy rule is applied on table level |
| 34 | **Table** - Data Consumer should be denied edit access in column detail panel when deny policy rule is applied | Data Consumer should be denied edit access in column detail panel when deny policy rule is applied |

### Stored Procedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Stored Procedure** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Stored Procedure** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Stored Procedure** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Stored Procedure** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Stored Procedure** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Stored Procedure** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Stored Procedure** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Stored Procedure** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Stored Procedure** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Stored Procedure** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Stored Procedure** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 12 | **Stored Procedure** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 13 | **Stored Procedure** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 14 | **Stored Procedure** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 15 | **Stored Procedure** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 16 | **Stored Procedure** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 17 | **Stored Procedure** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Dashboard** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Dashboard** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Dashboard** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Dashboard** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Dashboard** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Dashboard** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Dashboard** - Dashboard page should show the project name | Tests project name visibility on Dashboard and DashboardDataModel pages  Verifies that the project name is displayed on Dashboard and DashboardDataModel entity pages |
| 9 | **Dashboard** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 10 | **Dashboard** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 11 | **Dashboard** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 12 | **Dashboard** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 13 | **Dashboard** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 14 | **Dashboard** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 15 | **Dashboard** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 16 | **Dashboard** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 17 | **Dashboard** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 18 | **Dashboard** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 19 | **Dashboard** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Pipeline** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Pipeline** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Pipeline** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Pipeline** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Pipeline** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Pipeline** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Pipeline** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Pipeline** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Pipeline** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Pipeline** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Pipeline** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| | ↳ *Add and remove tags via column detail panel* | |
| 13 | **Pipeline** - Tag and Glossary Term preservation in column detail panel | Tag and Glossary Term preservation in column detail panel |
| | ↳ *Verify tag updates preserve glossary terms* | |
| 14 | **Pipeline** - Column detail panel data type display and nested column navigation | Column detail panel data type display and nested column navigation |
| | ↳ *Verify data type display and nested column counting* | |
| 15 | **Pipeline** - Filter columns by tag prunes non-matching rows | Tests the Tags column header filter across every entity whose child table supports it.  Verifies each entity's table wiring prunes non-matching rows when a tag filter is applied (regression for the bug where every row stayed visible). |
| | ↳ *Tag a child row* | |
| | ↳ *Apply tag filter and verify pruning* | |
| | ↳ *Clear filter and verify rows return* | |
| | ↳ *Cleanup tag* | |
| 16 | **Pipeline** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| | ↳ *Add and remove glossary terms via column detail panel* | |
| 17 | **Pipeline** - Description Add, Update and Remove for child entities | Tests description management for child entities  Tests adding, updating, and removing descriptions on child entities within a parent entity |
| | ↳ *Update description via column detail panel and test panel features* | |
| 18 | **Pipeline** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 19 | **Pipeline** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 20 | **Pipeline** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 21 | **Pipeline** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 22 | **Pipeline** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 23 | **Pipeline** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 24 | **Pipeline** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Topic** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Topic** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Topic** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Topic** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Topic** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Topic** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Topic** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Topic** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Topic** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Topic** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Topic** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| | ↳ *Add and remove tags via column detail panel* | |
| 13 | **Topic** - Tag and Glossary Term preservation in column detail panel | Tag and Glossary Term preservation in column detail panel |
| | ↳ *Verify tag updates preserve glossary terms* | |
| 14 | **Topic** - Column detail panel data type display and nested column navigation | Column detail panel data type display and nested column navigation |
| | ↳ *Verify data type display and nested column counting* | |
| 15 | **Topic** - Filter columns by tag prunes non-matching rows | Tests the Tags column header filter across every entity whose child table supports it.  Verifies each entity's table wiring prunes non-matching rows when a tag filter is applied (regression for the bug where every row stayed visible). |
| | ↳ *Tag a child row* | |
| | ↳ *Apply tag filter and verify pruning* | |
| | ↳ *Clear filter and verify rows return* | |
| | ↳ *Cleanup tag* | |
| 16 | **Topic** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| | ↳ *Add and remove glossary terms via column detail panel* | |
| 17 | **Topic** - Description Add, Update and Remove for child entities | Tests description management for child entities  Tests adding, updating, and removing descriptions on child entities within a parent entity |
| | ↳ *Update description via column detail panel and test panel features* | |
| 18 | **Topic** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 19 | **Topic** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 20 | **Topic** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 21 | **Topic** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 22 | **Topic** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 23 | **Topic** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 24 | **Topic** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Ml Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ml Model** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Ml Model** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Ml Model** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Ml Model** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Ml Model** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Ml Model** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Ml Model** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Ml Model** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Ml Model** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Ml Model** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Ml Model** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Ml Model** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| | ↳ *Add and remove tags via column detail panel* | |
| 13 | **Ml Model** - Tag and Glossary Term preservation in column detail panel | Tag and Glossary Term preservation in column detail panel |
| | ↳ *Verify tag updates preserve glossary terms* | |
| 14 | **Ml Model** - Column detail panel data type display and nested column navigation | Column detail panel data type display and nested column navigation |
| | ↳ *Verify data type display and nested column counting* | |
| 15 | **Ml Model** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| | ↳ *Add and remove glossary terms via column detail panel* | |
| 16 | **Ml Model** - Description Add, Update and Remove for child entities | Tests description management for child entities  Tests adding, updating, and removing descriptions on child entities within a parent entity |
| | ↳ *Update description via column detail panel and test panel features* | |
| 17 | **Ml Model** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 18 | **Ml Model** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 19 | **Ml Model** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 20 | **Ml Model** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 21 | **Ml Model** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 22 | **Ml Model** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 23 | **Ml Model** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Container** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Container** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Container** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Container** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Container** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Container** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Container** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Container** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Container** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Container** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Container** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 13 | **Container** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 14 | **Container** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 15 | **Container** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 16 | **Container** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 17 | **Container** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 18 | **Container** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Search Index

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Index** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Search Index** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Search Index** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Search Index** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Search Index** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Search Index** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Search Index** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Search Index** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Search Index** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Search Index** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Search Index** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Search Index** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| | ↳ *Add and remove tags via column detail panel* | |
| 13 | **Search Index** - Tag and Glossary Term preservation in column detail panel | Tag and Glossary Term preservation in column detail panel |
| | ↳ *Verify tag updates preserve glossary terms* | |
| 14 | **Search Index** - Column detail panel data type display and nested column navigation | Column detail panel data type display and nested column navigation |
| | ↳ *Verify data type display and nested column counting* | |
| 15 | **Search Index** - Filter columns by tag prunes non-matching rows | Tests the Tags column header filter across every entity whose child table supports it.  Verifies each entity's table wiring prunes non-matching rows when a tag filter is applied (regression for the bug where every row stayed visible). |
| | ↳ *Tag a child row* | |
| | ↳ *Apply tag filter and verify pruning* | |
| | ↳ *Clear filter and verify rows return* | |
| | ↳ *Cleanup tag* | |
| 16 | **Search Index** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| | ↳ *Add and remove glossary terms via column detail panel* | |
| 17 | **Search Index** - Description Add, Update and Remove for child entities | Tests description management for child entities  Tests adding, updating, and removing descriptions on child entities within a parent entity |
| | ↳ *Update description via column detail panel and test panel features* | |
| 18 | **Search Index** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 19 | **Search Index** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 20 | **Search Index** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 21 | **Search Index** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 22 | **Search Index** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 23 | **Search Index** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 24 | **Search Index** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Dashboard Data Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard Data Model** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Dashboard Data Model** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Dashboard Data Model** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Dashboard Data Model** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Dashboard Data Model** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Dashboard Data Model** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Dashboard Data Model** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Dashboard Data Model** - DashboardDataModel page should show the project name | Tests project name visibility on Dashboard and DashboardDataModel pages  Verifies that the project name is displayed on Dashboard and DashboardDataModel entity pages |
| 9 | **Dashboard Data Model** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 10 | **Dashboard Data Model** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 11 | **Dashboard Data Model** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 12 | **Dashboard Data Model** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 13 | **Dashboard Data Model** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| | ↳ *Add and remove tags via column detail panel* | |
| 14 | **Dashboard Data Model** - Tag and Glossary Term preservation in column detail panel | Tag and Glossary Term preservation in column detail panel |
| | ↳ *Verify tag updates preserve glossary terms* | |
| 15 | **Dashboard Data Model** - Column detail panel data type display and nested column navigation | Column detail panel data type display and nested column navigation |
| | ↳ *Verify data type display and nested column counting* | |
| 16 | **Dashboard Data Model** - Filter columns by tag prunes non-matching rows | Tests the Tags column header filter across every entity whose child table supports it.  Verifies each entity's table wiring prunes non-matching rows when a tag filter is applied (regression for the bug where every row stayed visible). |
| | ↳ *Tag a child row* | |
| | ↳ *Apply tag filter and verify pruning* | |
| | ↳ *Clear filter and verify rows return* | |
| | ↳ *Cleanup tag* | |
| 17 | **Dashboard Data Model** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| | ↳ *Add and remove glossary terms via column detail panel* | |
| 18 | **Dashboard Data Model** - DisplayName Add, Update and Remove for child entities | DisplayName Add, Update and Remove for child entities |
| 19 | **Dashboard Data Model** - Description Add, Update and Remove for child entities | Tests description management for child entities  Tests adding, updating, and removing descriptions on child entities within a parent entity |
| | ↳ *Update description via column detail panel and test panel features* | |
| 20 | **Dashboard Data Model** - Column detail panel does not call /columns/name GET for DashboardDataModel | Column detail panel does not call /columns/name GET for DashboardDataModel |
| | ↳ *Open column detail panel and verify no /columns/name GET fires* | |
| 21 | **Dashboard Data Model** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 22 | **Dashboard Data Model** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 23 | **Dashboard Data Model** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 24 | **Dashboard Data Model** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 25 | **Dashboard Data Model** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 26 | **Dashboard Data Model** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 27 | **Dashboard Data Model** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Metric

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Metric** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Metric** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Metric** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Metric** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Metric** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Metric** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Metric** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Metric** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Metric** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Metric** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 12 | **Metric** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 13 | **Metric** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 14 | **Metric** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 15 | **Metric** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 16 | **Metric** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 17 | **Metric** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Chart

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Chart** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Chart** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Chart** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Chart** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Chart** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Chart** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Chart** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Chart** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Chart** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Chart** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Chart** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 12 | **Chart** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 13 | **Chart** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 14 | **Chart** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 15 | **Chart** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 16 | **Chart** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 17 | **Chart** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Directory

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Directory** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Directory** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Directory** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Directory** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Directory** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Directory** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Directory** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Directory** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Directory** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Directory** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Directory** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 12 | **Directory** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 13 | **Directory** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 14 | **Directory** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 15 | **Directory** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 16 | **Directory** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 17 | **Directory** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### File

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **File** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **File** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **File** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **File** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **File** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **File** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **File** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **File** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **File** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **File** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **File** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 12 | **File** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 13 | **File** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 14 | **File** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 15 | **File** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 16 | **File** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 17 | **File** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Spreadsheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Spreadsheet** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Spreadsheet** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Spreadsheet** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Spreadsheet** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Spreadsheet** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Spreadsheet** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Spreadsheet** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Spreadsheet** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Spreadsheet** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Spreadsheet** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Spreadsheet** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 12 | **Spreadsheet** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 13 | **Spreadsheet** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 14 | **Spreadsheet** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 15 | **Spreadsheet** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 16 | **Spreadsheet** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 17 | **Spreadsheet** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Worksheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Worksheet** - Domain Add, Update and Remove | Tests domain management on entities  Tests adding a domain to an entity, updating it to a different domain, and removing the domain |
| 2 | **Worksheet** - Domain Propagation | Tests domain propagation from service to entity  Verifies that a domain assigned to a service propagates to its child entities, and that removing the domain from the service removes it from the entity |
| 3 | **Worksheet** - User as Owner Add, Update and Remove | Tests user ownership management on entities  Tests adding users as owners, updating owner list, and removing owners from an entity |
| 4 | **Worksheet** - Team as Owner Add, Update and Remove | Tests team ownership management on entities  Tests adding teams as owners, updating team owner list, and removing teams from an entity |
| 5 | **Worksheet** - User as Owner with unsorted list | Tests multi-user ownership with unsorted owner list  Tests adding multiple owners in different order, removing individual owners, and verifying the owner list maintains proper state |
| 6 | **Worksheet** - Tier Add, Update and Remove | Tests tier management on entities  Tests assigning a tier to an entity, updating it to a different tier, and removing the tier |
| 7 | **Worksheet** - Certification Add Remove | Tests certification management on entities  Tests adding a certification badge to an entity, updating it to a different certification, and removing it |
| 8 | **Worksheet** - Update description | Tests description update functionality  Tests adding and updating entity description |
| 9 | **Worksheet** - Tag Add, Update and Remove | Tests tag management on entities  Tests adding tags to an entity, updating the tag selection, and removing tags |
| 10 | **Worksheet** - Glossary Term Add, Update and Remove | Tests glossary term management on entities  Tests assigning glossary terms to an entity, updating term selection, and removing glossary terms |
| 11 | **Worksheet** - Tag and Glossary Selector should close vice versa | Tests tag and glossary selector mutual exclusivity  Verifies that opening the tag selector closes the glossary selector and vice versa |
| 12 | **Worksheet** - Announcement create, edit & delete | Tests announcement lifecycle management  Tests creating an announcement on an entity, editing it, and deleting it |
| 13 | **Worksheet** - Inactive Announcement create & delete | Tests inactive announcement management  Tests creating an inactive announcement and then deleting it |
| 14 | **Worksheet** - UpVote & DownVote entity | Tests entity voting functionality  Tests upvoting an entity and downvoting it, verifying vote state changes |
| 15 | **Worksheet** - Follow & Un-follow entity | Tests entity following functionality  Tests following an entity and unfollowing it, verifying follow state changes |
| 16 | **Worksheet** - Copy entity URL from header | Tests copying the entity URL from the header  Tests that the header copy button copies the current entity page URL to the clipboard |
| 17 | **Worksheet** - Update displayName | Tests entity display name update  Tests renaming an entity by updating its display name |
| 18 | **Worksheet** - User should be denied access to edit description when deny policy rule is applied on an entity | User should be denied access to edit description when deny policy rule is applied on an entity |

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Delete Api Endpoint | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 2 | Delete Table | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 3 | Delete Stored Procedure | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 4 | Delete Dashboard | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 5 | Delete Pipeline | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 6 | Delete Topic | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 7 | Delete Ml Model | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 8 | Delete Container | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 9 | Delete Search Index | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 10 | Delete Dashboard Data Model | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 11 | Delete Metric | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 12 | Delete Chart | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 13 | Delete Directory | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 14 | Delete File | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 15 | Delete Spreadsheet | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 16 | Delete Worksheet | Tests entity deletion (soft and hard delete)  Tests soft deleting an entity and then hard deleting it to completely remove it from the system |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |

</details>

<details open>
<summary>📄 <b>EntityDataSteward.spec.ts</b> (158 tests, 158 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/EntityDataSteward.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/EntityDataSteward.spec.ts)

### ApiEndpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ApiEndpoint** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **ApiEndpoint** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **ApiEndpoint** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **ApiEndpoint** - Update description | Update description |
| 5 | **ApiEndpoint** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **ApiEndpoint** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **ApiEndpoint** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 8 | **ApiEndpoint** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **ApiEndpoint** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 10 | **ApiEndpoint** - UpVote & DownVote entity | UpVote & DownVote entity |
| 11 | **ApiEndpoint** - Follow & Un-follow entity | Follow & Un-follow entity |
| 12 | **ApiEndpoint** - Update displayName | Update displayName |

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Table** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Table** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Table** - Update description | Update description |
| 5 | **Table** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Table** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Table** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 8 | **Table** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **Table** - DisplayName Add, Update and Remove for child entities | DisplayName Add, Update and Remove for child entities |
| 10 | **Table** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 11 | **Table** - UpVote & DownVote entity | UpVote & DownVote entity |
| 12 | **Table** - Follow & Un-follow entity | Follow & Un-follow entity |
| 13 | **Table** - Update displayName | Update displayName |

### Store Procedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Store Procedure** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Store Procedure** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Store Procedure** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Store Procedure** - Update description | Update description |
| 5 | **Store Procedure** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Store Procedure** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Store Procedure** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **Store Procedure** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **Store Procedure** - Update displayName | Update displayName |

### Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Dashboard** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Dashboard** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Dashboard** - Update description | Update description |
| 5 | **Dashboard** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Dashboard** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Dashboard** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **Dashboard** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **Dashboard** - Update displayName | Update displayName |

### Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Pipeline** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Pipeline** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Pipeline** - Update description | Update description |
| 5 | **Pipeline** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Pipeline** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Pipeline** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 8 | **Pipeline** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **Pipeline** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 10 | **Pipeline** - UpVote & DownVote entity | UpVote & DownVote entity |
| 11 | **Pipeline** - Follow & Un-follow entity | Follow & Un-follow entity |
| 12 | **Pipeline** - Update displayName | Update displayName |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Topic** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Topic** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Topic** - Update description | Update description |
| 5 | **Topic** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Topic** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Topic** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 8 | **Topic** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **Topic** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 10 | **Topic** - UpVote & DownVote entity | UpVote & DownVote entity |
| 11 | **Topic** - Follow & Un-follow entity | Follow & Un-follow entity |
| 12 | **Topic** - Update displayName | Update displayName |

### MlModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlModel** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **MlModel** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **MlModel** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **MlModel** - Update description | Update description |
| 5 | **MlModel** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **MlModel** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **MlModel** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 8 | **MlModel** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **MlModel** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 10 | **MlModel** - UpVote & DownVote entity | UpVote & DownVote entity |
| 11 | **MlModel** - Follow & Un-follow entity | Follow & Un-follow entity |
| 12 | **MlModel** - Update displayName | Update displayName |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Container** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Container** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Container** - Update description | Update description |
| 5 | **Container** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Container** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Container** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **Container** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **Container** - Update displayName | Update displayName |

### SearchIndex

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SearchIndex** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **SearchIndex** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **SearchIndex** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **SearchIndex** - Update description | Update description |
| 5 | **SearchIndex** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **SearchIndex** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **SearchIndex** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 8 | **SearchIndex** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **SearchIndex** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 10 | **SearchIndex** - UpVote & DownVote entity | UpVote & DownVote entity |
| 11 | **SearchIndex** - Follow & Un-follow entity | Follow & Un-follow entity |
| 12 | **SearchIndex** - Update displayName | Update displayName |

### DashboardDataModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **DashboardDataModel** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **DashboardDataModel** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **DashboardDataModel** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **DashboardDataModel** - Update description | Update description |
| 5 | **DashboardDataModel** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **DashboardDataModel** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **DashboardDataModel** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 8 | **DashboardDataModel** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **DashboardDataModel** - DisplayName Add, Update and Remove for child entities | DisplayName Add, Update and Remove for child entities |
| 10 | **DashboardDataModel** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 11 | **DashboardDataModel** - UpVote & DownVote entity | UpVote & DownVote entity |
| 12 | **DashboardDataModel** - Follow & Un-follow entity | Follow & Un-follow entity |
| 13 | **DashboardDataModel** - Update displayName | Update displayName |

### Metric

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Metric** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Metric** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Metric** - Update description | Update description |
| 5 | **Metric** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Metric** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Metric** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **Metric** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **Metric** - Update displayName | Update displayName |

### Directory

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Directory** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Directory** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Directory** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Directory** - Update description | Update description |
| 5 | **Directory** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Directory** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Directory** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **Directory** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **Directory** - Update displayName | Update displayName |

### File

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **File** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **File** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **File** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **File** - Update description | Update description |
| 5 | **File** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **File** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **File** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **File** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **File** - Update displayName | Update displayName |

### Spreadsheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Spreadsheet** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Spreadsheet** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Spreadsheet** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Spreadsheet** - Update description | Update description |
| 5 | **Spreadsheet** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Spreadsheet** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Spreadsheet** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **Spreadsheet** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **Spreadsheet** - Update displayName | Update displayName |

### Worksheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Worksheet** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 2 | **Worksheet** - Team as Owner Add, Update and Remove | Team as Owner Add, Update and Remove |
| 3 | **Worksheet** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 4 | **Worksheet** - Update description | Update description |
| 5 | **Worksheet** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 6 | **Worksheet** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 7 | **Worksheet** - UpVote & DownVote entity | UpVote & DownVote entity |
| 8 | **Worksheet** - Follow & Un-follow entity | Follow & Un-follow entity |
| 9 | **Worksheet** - Update displayName | Update displayName |

</details>

<details open>
<summary>📄 <b>EntityDataConsumer.spec.ts</b> (143 tests, 143 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/EntityDataConsumer.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/EntityDataConsumer.spec.ts)

### ApiEndpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ApiEndpoint** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **ApiEndpoint** - Update description | Update description |
| 3 | **ApiEndpoint** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **ApiEndpoint** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **ApiEndpoint** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 6 | **ApiEndpoint** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 7 | **ApiEndpoint** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 8 | **ApiEndpoint** - UpVote & DownVote entity | UpVote & DownVote entity |
| 9 | **ApiEndpoint** - Follow & Un-follow entity | Follow & Un-follow entity |
| 10 | **ApiEndpoint** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 11 | **ApiEndpoint** - No edit owner permission | No edit owner permission |

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Table** - Update description | Update description |
| 3 | **Table** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Table** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Table** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 6 | **Table** - DisplayName edit for child entities should not be allowed | DisplayName edit for child entities should not be allowed |
| 7 | **Table** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 8 | **Table** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **Table** - UpVote & DownVote entity | UpVote & DownVote entity |
| 10 | **Table** - Follow & Un-follow entity | Follow & Un-follow entity |
| 11 | **Table** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 12 | **Table** - No edit owner permission | No edit owner permission |

### Store Procedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Store Procedure** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Store Procedure** - Update description | Update description |
| 3 | **Store Procedure** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Store Procedure** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Store Procedure** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **Store Procedure** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **Store Procedure** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **Store Procedure** - No edit owner permission | No edit owner permission |

### Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Dashboard** - Update description | Update description |
| 3 | **Dashboard** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Dashboard** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Dashboard** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **Dashboard** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **Dashboard** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **Dashboard** - No edit owner permission | No edit owner permission |

### Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Pipeline** - Update description | Update description |
| 3 | **Pipeline** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Pipeline** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Pipeline** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 6 | **Pipeline** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 7 | **Pipeline** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 8 | **Pipeline** - UpVote & DownVote entity | UpVote & DownVote entity |
| 9 | **Pipeline** - Follow & Un-follow entity | Follow & Un-follow entity |
| 10 | **Pipeline** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 11 | **Pipeline** - No edit owner permission | No edit owner permission |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Topic** - Update description | Update description |
| 3 | **Topic** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Topic** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Topic** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 6 | **Topic** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 7 | **Topic** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 8 | **Topic** - UpVote & DownVote entity | UpVote & DownVote entity |
| 9 | **Topic** - Follow & Un-follow entity | Follow & Un-follow entity |
| 10 | **Topic** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 11 | **Topic** - No edit owner permission | No edit owner permission |

### MlModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlModel** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **MlModel** - Update description | Update description |
| 3 | **MlModel** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **MlModel** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **MlModel** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 6 | **MlModel** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 7 | **MlModel** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 8 | **MlModel** - UpVote & DownVote entity | UpVote & DownVote entity |
| 9 | **MlModel** - Follow & Un-follow entity | Follow & Un-follow entity |
| 10 | **MlModel** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 11 | **MlModel** - No edit owner permission | No edit owner permission |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Container** - Update description | Update description |
| 3 | **Container** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Container** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Container** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **Container** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **Container** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **Container** - No edit owner permission | No edit owner permission |

### SearchIndex

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SearchIndex** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **SearchIndex** - Update description | Update description |
| 3 | **SearchIndex** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **SearchIndex** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **SearchIndex** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 6 | **SearchIndex** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 7 | **SearchIndex** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 8 | **SearchIndex** - UpVote & DownVote entity | UpVote & DownVote entity |
| 9 | **SearchIndex** - Follow & Un-follow entity | Follow & Un-follow entity |
| 10 | **SearchIndex** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 11 | **SearchIndex** - No edit owner permission | No edit owner permission |

### DashboardDataModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **DashboardDataModel** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **DashboardDataModel** - Update description | Update description |
| 3 | **DashboardDataModel** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **DashboardDataModel** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **DashboardDataModel** - Tag Add, Update and Remove for child entities | Tag Add, Update and Remove for child entities |
| 6 | **DashboardDataModel** - DisplayName edit for child entities should not be allowed | DisplayName edit for child entities should not be allowed |
| 7 | **DashboardDataModel** - Description Add, Update and Remove for child entities | Description Add, Update and Remove for child entities |
| 8 | **DashboardDataModel** - Glossary Term Add, Update and Remove for child entities | Glossary Term Add, Update and Remove for child entities |
| 9 | **DashboardDataModel** - UpVote & DownVote entity | UpVote & DownVote entity |
| 10 | **DashboardDataModel** - Follow & Un-follow entity | Follow & Un-follow entity |
| 11 | **DashboardDataModel** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 12 | **DashboardDataModel** - No edit owner permission | No edit owner permission |

### Metric

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Metric** - Update description | Update description |
| 3 | **Metric** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Metric** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Metric** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **Metric** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **Metric** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **Metric** - No edit owner permission | No edit owner permission |

### Directory

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Directory** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Directory** - Update description | Update description |
| 3 | **Directory** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Directory** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Directory** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **Directory** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **Directory** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **Directory** - No edit owner permission | No edit owner permission |

### File

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **File** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **File** - Update description | Update description |
| 3 | **File** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **File** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **File** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **File** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **File** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **File** - No edit owner permission | No edit owner permission |

### Spreadsheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Spreadsheet** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Spreadsheet** - Update description | Update description |
| 3 | **Spreadsheet** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Spreadsheet** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Spreadsheet** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **Spreadsheet** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **Spreadsheet** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **Spreadsheet** - No edit owner permission | No edit owner permission |

### Worksheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Worksheet** - Tier Add, Update and Remove | Tier Add, Update and Remove |
| 2 | **Worksheet** - Update description | Update description |
| 3 | **Worksheet** - Tag Add, Update and Remove | Tag Add, Update and Remove |
| 4 | **Worksheet** - Glossary Term Add, Update and Remove | Glossary Term Add, Update and Remove |
| 5 | **Worksheet** - UpVote & DownVote entity | UpVote & DownVote entity |
| 6 | **Worksheet** - Follow & Un-follow entity | Follow & Un-follow entity |
| 7 | **Worksheet** - User as Owner Add, Update and Remove | User as Owner Add, Update and Remove |
| 8 | **Worksheet** - No edit owner permission | No edit owner permission |

</details>

<details open>
<summary>📄 <b>ServiceEntity.spec.ts</b> (135 tests, 146 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ServiceEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ServiceEntity.spec.ts)

### Api Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Api Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Api Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Api Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Api Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Api Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Api Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Api Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Api Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Api Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Api Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Api Service** - Verify Search Placeholder | Search Placeholder |

### Database Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Database Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Database Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Database Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Database Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Database Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Database Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Database Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Database Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Database Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Database Service** - Follow & Un-follow entity for Database Entity | Tests follow and unfollow actions  Follows the service and then unfollows it to verify state changes |
| 11 | **Database Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 12 | **Database Service** - Verify Search Placeholder | Search Placeholder |

### Dashboard Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Dashboard Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Dashboard Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Dashboard Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Dashboard Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Dashboard Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Dashboard Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Dashboard Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Dashboard Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Dashboard Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Dashboard Service** - Verify Search Placeholder | Search Placeholder |

### Messaging Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Messaging Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Messaging Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Messaging Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Messaging Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Messaging Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Messaging Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Messaging Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Messaging Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Messaging Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Messaging Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Messaging Service** - Verify Search Placeholder | Search Placeholder |

### Mlmodel Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Mlmodel Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Mlmodel Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Mlmodel Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Mlmodel Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Mlmodel Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Mlmodel Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Mlmodel Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Mlmodel Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Mlmodel Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Mlmodel Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Mlmodel Service** - Verify Search Placeholder | Search Placeholder |

### Pipeline Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Pipeline Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Pipeline Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Pipeline Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Pipeline Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Pipeline Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Pipeline Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Pipeline Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Pipeline Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Pipeline Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Pipeline Service** - Verify Search Placeholder | Search Placeholder |

### Search Index Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Index Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Search Index Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Search Index Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Search Index Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Search Index Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Search Index Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Search Index Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Search Index Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Search Index Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Search Index Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Search Index Service** - Verify Search Placeholder | Search Placeholder |

### Storage Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Storage Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Storage Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Storage Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Storage Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Storage Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Storage Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Storage Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Storage Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Storage Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Storage Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Storage Service** - Verify Search Placeholder | Search Placeholder |

### Database

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Database** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Database** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Database** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Database** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Database** - Certification Add Remove | Tests certification lifecycle  Adds a certification to the service, updates it, and removes it |
| 6 | **Database** - Update description | Tests description updates  Edits the service description |
| 7 | **Database** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 8 | **Database** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 9 | **Database** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 10 | **Database** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 11 | **Database** - Follow & Un-follow entity for Database Entity | Tests follow and unfollow actions  Follows the service and then unfollows it to verify state changes |
| 12 | **Database** - Update displayName | Tests display name updates  Renames the service by updating its display name |

### Database Schema

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Database Schema** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Database Schema** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Database Schema** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Database Schema** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Database Schema** - Certification Add Remove | Tests certification lifecycle  Adds a certification to the service, updates it, and removes it |
| 6 | **Database Schema** - Update description | Tests description updates  Edits the service description |
| 7 | **Database Schema** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 8 | **Database Schema** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 9 | **Database Schema** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 10 | **Database Schema** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 11 | **Database Schema** - Follow & Un-follow entity for Database Entity | Tests follow and unfollow actions  Follows the service and then unfollows it to verify state changes |
| 12 | **Database Schema** - Update displayName | Tests display name updates  Renames the service by updating its display name |

### Drive Service

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Drive Service** - Domain Add, Update and Remove | Tests domain management on services  Adds a domain, switches to another, then removes it from the service |
| 2 | **Drive Service** - User as Owner Add, Update and Remove | Tests user ownership management  Adds user owners, updates the owner list, and removes owners from the service |
| 3 | **Drive Service** - Team as Owner Add, Update and Remove | Tests team ownership management  Adds team owners, updates the list, and removes teams from the service |
| 4 | **Drive Service** - Tier Add, Update and Remove | Tests tier management  Assigns a tier to the service, updates it, and removes it |
| 5 | **Drive Service** - Update description | Tests description updates  Edits the service description |
| 6 | **Drive Service** - Tag Add, Update and Remove | Tests tag management  Adds tags to the service, updates them, and removes them |
| 7 | **Drive Service** - Glossary Term Add, Update and Remove | Tests glossary term management  Assigns glossary terms to the service, updates them, and removes them |
| 8 | **Drive Service** - Announcement create, edit & delete | Tests announcement lifecycle  Creates, edits, and deletes an announcement on the service |
| 9 | **Drive Service** - Inactive Announcement create & delete | Tests inactive announcements  Creates an inactive announcement and then deletes it |
| 10 | **Drive Service** - Update displayName | Tests display name updates  Renames the service by updating its display name |
| 11 | **Drive Service** - Verify Search Placeholder | Search Placeholder |

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Delete Api Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 2 | Delete Database Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 3 | Delete Dashboard Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 4 | Delete Messaging Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 5 | Delete Mlmodel Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 6 | Delete Pipeline Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 7 | Delete Search Index Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 8 | Delete Storage Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 9 | Delete Database | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 10 | Delete Database Schema | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |
| 11 | Delete Drive Service | Tests service deletion  Soft deletes the service and then hard deletes it to remove it permanently |
| | ↳ *Soft delete* | |
| | ↳ *Hard delete* | |

</details>

<details open>
<summary>📄 <b>EntityPermissions.spec.ts</b> (46 tests, 46 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Permissions/EntityPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Permissions/EntityPermissions.spec.ts)

### DataAsset Header – EditTier / EditOwners / EditCertification permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **DataAsset Header – EditTier / EditOwners / EditCertification permissions** - EditAll allowed but EditTier, EditOwners, EditCertification denied – edit buttons not visible | EditAll allowed but EditTier, EditOwners, EditCertification denied – edit buttons not visible |
| 2 | **DataAsset Header – EditTier / EditOwners / EditCertification permissions** - EditTier, EditOwners, EditCertification allowed but EditAll denied – edit buttons not visible | EditTier, EditOwners, EditCertification allowed but EditAll denied – edit buttons not visible |

### Table Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Permissions** - Table allow common operations permissions | Table allow common operations permissions |
| 2 | **Table Permissions** - Table allow entity-specific permission operations | Table allow entity-specific permission operations |
| 3 | **Table Permissions** - Table deny common operations permissions | Table deny common operations permissions |
| 4 | **Table Permissions** - Table deny entity-specific permission operations | Table deny entity-specific permission operations |

### Dashboard Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard Permissions** - Dashboard allow common operations permissions | Dashboard allow common operations permissions |
| 2 | **Dashboard Permissions** - Dashboard allow entity-specific permission operations | Dashboard allow entity-specific permission operations |
| 3 | **Dashboard Permissions** - Dashboard deny common operations permissions | Dashboard deny common operations permissions |
| 4 | **Dashboard Permissions** - Dashboard deny entity-specific permission operations | Dashboard deny entity-specific permission operations |

### Pipeline Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline Permissions** - Pipeline allow common operations permissions | Pipeline allow common operations permissions |
| 2 | **Pipeline Permissions** - Pipeline allow entity-specific permission operations | Pipeline allow entity-specific permission operations |
| 3 | **Pipeline Permissions** - Pipeline deny common operations permissions | Pipeline deny common operations permissions |
| 4 | **Pipeline Permissions** - Pipeline deny entity-specific permission operations | Pipeline deny entity-specific permission operations |

### Topic Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic Permissions** - Topic allow common operations permissions | Topic allow common operations permissions |
| 2 | **Topic Permissions** - Topic allow entity-specific permission operations | Topic allow entity-specific permission operations |
| 3 | **Topic Permissions** - Topic deny common operations permissions | Topic deny common operations permissions |
| 4 | **Topic Permissions** - Topic deny entity-specific permission operations | Topic deny entity-specific permission operations |

### MlModel Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlModel Permissions** - MlModel allow common operations permissions | MlModel allow common operations permissions |
| 2 | **MlModel Permissions** - MlModel allow entity-specific permission operations | MlModel allow entity-specific permission operations |
| 3 | **MlModel Permissions** - MlModel deny common operations permissions | MlModel deny common operations permissions |
| 4 | **MlModel Permissions** - MlModel deny entity-specific permission operations | MlModel deny entity-specific permission operations |

### Container Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container Permissions** - Container allow common operations permissions | Container allow common operations permissions |
| 2 | **Container Permissions** - Container deny common operations permissions | Container deny common operations permissions |

### SearchIndex Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SearchIndex Permissions** - SearchIndex allow common operations permissions | SearchIndex allow common operations permissions |
| 2 | **SearchIndex Permissions** - SearchIndex allow entity-specific permission operations | SearchIndex allow entity-specific permission operations |
| 3 | **SearchIndex Permissions** - SearchIndex deny common operations permissions | SearchIndex deny common operations permissions |
| 4 | **SearchIndex Permissions** - SearchIndex deny entity-specific permission operations | SearchIndex deny entity-specific permission operations |

### DashboardDataModel Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **DashboardDataModel Permissions** - DashboardDataModel allow common operations permissions | DashboardDataModel allow common operations permissions |
| 2 | **DashboardDataModel Permissions** - DashboardDataModel allow entity-specific permission operations | DashboardDataModel allow entity-specific permission operations |
| 3 | **DashboardDataModel Permissions** - DashboardDataModel deny common operations permissions | DashboardDataModel deny common operations permissions |
| 4 | **DashboardDataModel Permissions** - DashboardDataModel deny entity-specific permission operations | DashboardDataModel deny entity-specific permission operations |

### Metric Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric Permissions** - Metric allow common operations permissions | Metric allow common operations permissions |
| 2 | **Metric Permissions** - Metric deny common operations permissions | Metric deny common operations permissions |

### Directory Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Directory Permissions** - Directory allow common operations permissions | Directory allow common operations permissions |
| 2 | **Directory Permissions** - Directory deny common operations permissions | Directory deny common operations permissions |

### File Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **File Permissions** - File allow common operations permissions | File allow common operations permissions |
| 2 | **File Permissions** - File deny common operations permissions | File deny common operations permissions |

### Spreadsheet Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Spreadsheet Permissions** - Spreadsheet allow common operations permissions | Spreadsheet allow common operations permissions |
| 2 | **Spreadsheet Permissions** - Spreadsheet deny common operations permissions | Spreadsheet deny common operations permissions |

### Worksheet Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Worksheet Permissions** - Worksheet allow common operations permissions | Worksheet allow common operations permissions |
| 2 | **Worksheet Permissions** - Worksheet deny common operations permissions | Worksheet deny common operations permissions |

### Database Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Database Permissions** - Database allow common operations permissions | Database allow common operations permissions |
| 2 | **Database Permissions** - Database allow entity-specific permission operations | Database allow entity-specific permission operations |
| 3 | **Database Permissions** - Database deny common operations permissions | Database deny common operations permissions |
| 4 | **Database Permissions** - Database deny entity-specific permission operations | Database deny entity-specific permission operations |

</details>

<details open>
<summary>📄 <b>ServiceEntityPermissions.spec.ts</b> (44 tests, 44 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Permissions/ServiceEntityPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Permissions/ServiceEntityPermissions.spec.ts)

### Api Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Api Service Permissions** - Api Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **Api Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 3 | **Api Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 4 | **Api Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 5 | **Api Service Permissions** - Api Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |

### Dashboard Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard Service Permissions** - Dashboard Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **Dashboard Service Permissions** - Dashboard Service allow entity-specific permission operations | Dashboard Service allow entity-specific permission operations |
| 3 | **Dashboard Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 4 | **Dashboard Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 5 | **Dashboard Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 6 | **Dashboard Service Permissions** - Dashboard Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |
| 7 | **Dashboard Service Permissions** - Dashboard Service deny entity-specific permission operations | Dashboard Service deny entity-specific permission operations |

### Database Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Database Service Permissions** - Database Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **Database Service Permissions** - Database Service allow entity-specific permission operations | Database Service allow entity-specific permission operations |
| 3 | **Database Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 4 | **Database Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 5 | **Database Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 6 | **Database Service Permissions** - Database Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |
| 7 | **Database Service Permissions** - Database Service deny entity-specific permission operations | Database Service deny entity-specific permission operations |

### Messaging Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Messaging Service Permissions** - Messaging Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **Messaging Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 3 | **Messaging Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 4 | **Messaging Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 5 | **Messaging Service Permissions** - Messaging Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |

### Mlmodel Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Mlmodel Service Permissions** - Mlmodel Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **Mlmodel Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 3 | **Mlmodel Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 4 | **Mlmodel Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 5 | **Mlmodel Service Permissions** - Mlmodel Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |

### Pipeline Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline Service Permissions** - Pipeline Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **Pipeline Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 3 | **Pipeline Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 4 | **Pipeline Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 5 | **Pipeline Service Permissions** - Pipeline Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |

### SearchIndex Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SearchIndex Service Permissions** - SearchIndex Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **SearchIndex Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 3 | **SearchIndex Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 4 | **SearchIndex Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 5 | **SearchIndex Service Permissions** - SearchIndex Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |

### Storage Service Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Storage Service Permissions** - Storage Service allow common operations permissions | Tests allow permissions for common service operations  Verifies that a user with allow permissions can perform all common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations |
| 2 | **Storage Service Permissions** - AutoPilot trigger button is visible with Trigger permission | AutoPilot trigger button is visible with Trigger permission |
| 3 | **Storage Service Permissions** - AutoPilot trigger button is hidden with view-only permission | AutoPilot trigger button is hidden with view-only permission |
| 4 | **Storage Service Permissions** - AutoPilot trigger button is hidden with denied trigger permission | AutoPilot trigger button is hidden with denied trigger permission |
| 5 | **Storage Service Permissions** - Storage Service deny common operations permissions | Tests deny permissions for common service operations  Verifies that a user with deny permissions cannot perform common operations on the service, including EditDescription, EditOwners, EditTier, EditDisplayName, EditTags, EditGlossaryTerms, EditCustomFields, and Delete operations. UI elements for these actions should be hidden or disabled |

</details>

<details open>
<summary>📄 <b>ColumnBulkOperations.spec.ts</b> (25 tests, 64 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ColumnBulkOperations.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ColumnBulkOperations.spec.ts)

### Column Bulk Operations - Page Load & Stats

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Bulk Operations - Page Load & Stats** - should load the page with stats cards and grid data | Load the page with stats cards and grid data |
| | ↳ *Verify stats cards are visible* | |
| | ↳ *Verify the grid table is visible with rows* | |
| 2 | **Column Bulk Operations - Page Load & Stats** - should show no results when searching for nonexistent column | Show no results when searching for nonexistent column |
| | ↳ *Search for a nonexistent column name* | |
| | ↳ *Verify empty state or zero rows* | |

### Column Bulk Operations - Filters & Search

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Bulk Operations - Filters & Search** - should filter by metadata status and verify API param | Filter by metadata status and verify API param |
| | ↳ *Open metadata status filter and select MISSING* | |
| | ↳ *Verify filter chip is displayed* | |
| 2 | **Column Bulk Operations - Filters & Search** - should filter by entity type (Table) | Filter by entity type (Table) |
| | ↳ *Open Asset Type filter and select Table* | |
| 3 | **Column Bulk Operations - Filters & Search** - should restore filters from URL on page load | Restore filters from URL on page load |
| | ↳ *Navigate to page with metadataStatus in URL* | |
| | ↳ *Verify filter chip is restored* | |
| 4 | **Column Bulk Operations - Filters & Search** - should search columns with server-side API call | Search columns with server-side API call |
| | ↳ *Type search query and verify API call* | |
| 5 | **Column Bulk Operations - Filters & Search** - should not reset stats to zero while search request is loading | Not reset stats to zero while search request is loading |
| 6 | **Column Bulk Operations - Filters & Search** - should clear individual filter and update URL | Clear individual filter and update URL |
| | ↳ *Navigate with metadataStatus filter in URL* | |
| | ↳ *Verify filter chip is present* | |
| | ↳ *Deselect the MISSING filter* | |
| | ↳ *Verify filter chip removed and URL updated* | |
| 7 | **Column Bulk Operations - Filters & Search** - should keep latest search results when responses arrive out of order | Keep latest search results when responses arrive out of order |
| 8 | **Column Bulk Operations - Filters & Search** - should show Service filter chip from URL | Show Service filter chip from URL |
| | ↳ *Navigate with service filter in URL* | |
| | ↳ *Verify service chip is visible* | |

### Column Bulk Operations - Selection & Edit Drawer

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Bulk Operations - Selection & Edit Drawer** - should show disabled edit button when no columns are selected | Show disabled edit button when no columns are selected |
| 2 | **Column Bulk Operations - Selection & Edit Drawer** - should update pending changes counter when editing selected columns | Update pending changes counter when editing selected columns |
| | ↳ *Search and select a shared column* | |
| | ↳ *Open drawer and edit display name* | |
| | ↳ *Verify pending changes value shows edited/selected count* | |
| 3 | **Column Bulk Operations - Selection & Edit Drawer** - should not count aggregate parent row in drawer selected count | Not count aggregate parent row in drawer selected count |
| | ↳ *Search and select shared grouped column* | |
| | ↳ *Open drawer and verify selected count matches occurrences* | |
| 4 | **Column Bulk Operations - Selection & Edit Drawer** - should show pending progress spinner after submitting bulk update | Show pending progress spinner after submitting bulk update |
| | ↳ *Search, select, and open edit drawer* | |
| | ↳ *Submit update request* | |
| | ↳ *Verify pending progress indicator and counter are visible* | |
| 5 | **Column Bulk Operations - Selection & Edit Drawer** - should select column, open drawer, and verify form fields | Select column, open drawer, and verify form fields |
| | ↳ *Search for shared column* | |
| | ↳ *Select the column checkbox* | |
| | ↳ *Verify edit button is enabled and click it* | |
| | ↳ *Verify drawer opens with all form fields* | |
| | ↳ *Close drawer with Escape* | |
| 6 | **Column Bulk Operations - Selection & Edit Drawer** - should show column count for multiple column selection | Show column count for multiple column selection |
| | ↳ *Select two columns via header checkbox then individual* | |
| | ↳ *Open drawer and verify multi-select title* | |
| | ↳ *Close drawer* | |
| 7 | **Column Bulk Operations - Selection & Edit Drawer** - should cancel selection and disable edit button | Cancel selection and disable edit button |
| | ↳ *Search and select a column* | |
| | ↳ *Cancel selection* | |
| | ↳ *Verify edit button is disabled again* | |
| 8 | **Column Bulk Operations - Selection & Edit Drawer** - should discard changes when closing drawer without saving | Discard changes when closing drawer without saving |
| | ↳ *Search and select a column* | |
| | ↳ *Open drawer and enter a display name* | |
| | ↳ *Close drawer without saving* | |
| | ↳ *Reopen drawer and verify changes were discarded* | |
| | ↳ *Close drawer* | |
| 9 | **Column Bulk Operations - Selection & Edit Drawer** - should open edit drawer when clicking on aggregate row | Open edit drawer when clicking on aggregate row |
| | ↳ *Click on a column name cell to open drawer* | |
| | ↳ *Verify drawer opens* | |
| | ↳ *Close drawer* | |
| 10 | **Column Bulk Operations - Selection & Edit Drawer** - should accept text with spaces in the description field | Accept text with spaces in the description field |
| | ↳ *Search and select a shared column* | |
| | ↳ *Open the edit drawer* | |
| | ↳ *Type text with spaces in the description editor* | |
| | ↳ *Close drawer* | |

### Column Bulk Operations - Bulk Update Flow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Bulk Operations - Bulk Update Flow** - should update display name and propagate to all occurrences | Update display name and propagate to all occurrences |
| | ↳ *Search for shared column* | |
| | ↳ *Select the column* | |
| | ↳ *Open drawer and fill display name* | |
| | ↳ *Submit update and verify API request* | |
| 2 | **Column Bulk Operations - Bulk Update Flow** - should show success notification after bulk update | Show success notification after bulk update |
| | ↳ *Search and select column* | |
| | ↳ *Fill display name and submit* | |
| | ↳ *Verify success toast* | |

### Column Bulk Operations - Nested STRUCT Columns

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Bulk Operations - Nested STRUCT Columns** - should expand STRUCT column to show nested fields | Expand STRUCT column to show nested fields |
| | ↳ *Search for STRUCT column* | |
| | ↳ *Verify STRUCT row is visible* | |
| | ↳ *Expand the STRUCT row* | |
| 2 | **Column Bulk Operations - Nested STRUCT Columns** - should select and edit nested STRUCT field | Select and edit nested STRUCT field |
| | ↳ *Search for STRUCT column* | |
| | ↳ *Expand STRUCT row* | |
| | ↳ *Select a nested child column* | |

### Column Bulk Operations - Pagination

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Bulk Operations - Pagination** - should navigate through pages | Navigate through pages |
| | ↳ *Click Next and verify Previous becomes enabled* | |

</details>

<details open>
<summary>📄 <b>EntitySummaryPanel.spec.ts</b> (19 tests, 19 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/EntitySummaryPanel.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/EntitySummaryPanel.spec.ts)

### Entity Summary Panel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity Summary Panel** - should display summary panel for table | Display summary panel for table |
| 2 | **Entity Summary Panel** - should display summary panel for tableColumn | Display summary panel for tableColumn |
| 3 | **Entity Summary Panel** - should display summary panel for database | Display summary panel for database |
| 4 | **Entity Summary Panel** - should display summary panel for databaseSchema | Display summary panel for databaseSchema |
| 5 | **Entity Summary Panel** - should display summary panel for dashboard | Display summary panel for dashboard |
| 6 | **Entity Summary Panel** - should display summary panel for dashboardDataModel | Display summary panel for dashboardDataModel |
| 7 | **Entity Summary Panel** - should display summary panel for pipeline | Display summary panel for pipeline |
| 8 | **Entity Summary Panel** - should display summary panel for topic | Display summary panel for topic |
| 9 | **Entity Summary Panel** - should display summary panel for mlmodel | Display summary panel for mlmodel |
| 10 | **Entity Summary Panel** - should display summary panel for container | Display summary panel for container |
| 11 | **Entity Summary Panel** - should display summary panel for searchIndex | Display summary panel for searchIndex |
| 12 | **Entity Summary Panel** - should render entity title section with link | Render entity title section with link |
| 13 | **Entity Summary Panel** - should display owners section | Display owners section |
| 14 | **Entity Summary Panel** - should display domain section | Display domain section |
| 15 | **Entity Summary Panel** - should display tags section | Display tags section |
| 16 | **Entity Summary Panel** - should navigate between tabs | Navigate between tabs |
| 17 | **Entity Summary Panel** - should display description section | Display description section |

### Entity Title Section - Edit Display Name

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity Title Section - Edit Display Name** - should edit display name from entity summary panel | Edit display name from entity summary panel |
| 2 | **Entity Title Section - Edit Display Name** - should cancel edit display name modal | Cancel edit display name modal |

</details>

<details open>
<summary>📄 <b>EntityHeaderBreadcrumb.spec.ts</b> (19 tests, 19 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/EntityHeaderBreadcrumb.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/EntityHeaderBreadcrumb.spec.ts)

### Entity header breadcrumb - Database

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Database** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Database Schema

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Database Schema** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Metric

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Metric** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Table** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Stored Procedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Stored Procedure** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Dashboard** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Pipeline** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Topic** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Ml Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Ml Model** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Container** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Search Index

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Search Index** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Dashboard Data Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Dashboard Data Model** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Chart

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Chart** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Api Collection

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Api Collection** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Api Endpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Api Endpoint** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Directory

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Directory** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - File

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - File** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Spreadsheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Spreadsheet** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

### Entity header breadcrumb - Worksheet

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header breadcrumb - Worksheet** - should render every breadcrumb crumb exactly once | Render every breadcrumb crumb exactly once |

</details>

<details open>
<summary>📄 <b>EntityVersionPages.spec.ts</b> (18 tests, 74 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/VersionPages/EntityVersionPages.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/VersionPages/EntityVersionPages.spec.ts)

### Entity Version pages

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity Version pages** - ApiEndpoint | ApiEndpoint |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 2 | **Entity Version pages** - Table | Table |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 3 | **Entity Version pages** - Store Procedure | Store Procedure |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 4 | **Entity Version pages** - Dashboard | Dashboard |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 5 | **Entity Version pages** - Pipeline | Pipeline |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 6 | **Entity Version pages** - Topic | Topic |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 7 | **Entity Version pages** - MlModel | MlModel |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 8 | **Entity Version pages** - Container | Container |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 9 | **Entity Version pages** - SearchIndex | SearchIndex |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 10 | **Entity Version pages** - DashboardDataModel | DashboardDataModel |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 11 | **Entity Version pages** - Directory | Directory |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 12 | **Entity Version pages** - File | File |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 13 | **Entity Version pages** - Spreadsheet | Spreadsheet |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 14 | **Entity Version pages** - Worksheet | Worksheet |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show column display name changes properly* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 15 | **Entity Version pages** - Table - should show historical column descriptions in version view | Table - should show historical column descriptions in version view |
| 16 | **Entity Version pages** - Table - closing version drawer navigates to entity page without tab | Table - closing version drawer navigates to entity page without tab |
| 17 | **Entity Version pages** - Database - closing version drawer navigates to entity page without tab | Database - closing version drawer navigates to entity page without tab |
| 18 | **Entity Version pages** - DatabaseSchema - closing version drawer navigates to entity page without tab | DatabaseSchema - closing version drawer navigates to entity page without tab |

</details>

<details open>
<summary>📄 <b>ServiceEntityVersionPage.spec.ts</b> (12 tests, 48 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/VersionPages/ServiceEntityVersionPage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/VersionPages/ServiceEntityVersionPage.spec.ts)

### Service Version pages

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Service Version pages** - Api Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 2 | **Service Version pages** - Api Collection | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 3 | **Service Version pages** - Dashboard Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 4 | **Service Version pages** - Database Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 5 | **Service Version pages** - Messaging Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 6 | **Service Version pages** - Mlmodel Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 7 | **Service Version pages** - Pipeline Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 8 | **Service Version pages** - SearchIndex Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 9 | **Service Version pages** - Storage Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 10 | **Service Version pages** - Database | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 11 | **Service Version pages** - Database Schema | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |
| 12 | **Service Version pages** - Drive Service | Tests comprehensive version history tracking for service entities  This test validates the version history feature for service entities across multiple version increments. It verifies that the version page correctly displays visual diffs (additions, modifications, deletions) for: - Version 0.2: Initial changes including domain assignment, description updates, and tag additions (PersonalData.SpecialCategory, PII.Sensitive) - Version 0.3: Owner assignments showing user ownership changes - Version 0.3: Tier assignments displaying tier classification updates - Version 0.4: Soft deletion state with appropriate deleted badge visibility The test ensures that each version increment is properly tracked and the diff indicators (diff-added) are correctly rendered in the UI to highlight what changed between versions |
| | ↳ *should show edited tags and description changes* | |
| | ↳ *should show owner changes* | |
| | ↳ *should show tier changes* | |
| | ↳ *should show version details after soft deleted* | |

</details>

<details open>
<summary>📄 <b>RestoreEntityInheritedFields.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/RestoreEntityInheritedFields.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/RestoreEntityInheritedFields.spec.ts)

### ApiEndpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ApiEndpoint** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### Store Procedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Store Procedure** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### MlModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlModel** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### SearchIndex

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SearchIndex** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### DashboardDataModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **DashboardDataModel** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

### Chart

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Chart** - Validate restore with Inherited domain and data products assigned | Validate restore with Inherited domain and data products assigned |

</details>

<details open>
<summary>📄 <b>EntityRenameConsolidation.spec.ts</b> (9 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/EntityRenameConsolidation.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/EntityRenameConsolidation.spec.ts)

### Entity Rename + Field Update Consolidation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity Rename + Field Update Consolidation** - Glossary - rename then update description should preserve terms | Glossary - rename then update description should preserve terms |
| 2 | **Entity Rename + Field Update Consolidation** - Glossary - multiple rename + update cycles should preserve terms | Glossary - multiple rename + update cycles should preserve terms |
| 3 | **Entity Rename + Field Update Consolidation** - GlossaryTerm - rename then update description should work | GlossaryTerm - rename then update description should work |
| 4 | **Entity Rename + Field Update Consolidation** - Classification - rename then update description should preserve tags | Classification - rename then update description should preserve tags |
| 5 | **Entity Rename + Field Update Consolidation** - Classification - multiple rename + update cycles should preserve tags | Classification - multiple rename + update cycles should preserve tags |
| 6 | **Entity Rename + Field Update Consolidation** - Tag - rename then update description should work | Tag - rename then update description should work |
| 7 | **Entity Rename + Field Update Consolidation** - Tag - multiple rename + update cycles should work | Tag - multiple rename + update cycles should work |
| 8 | **Entity Rename + Field Update Consolidation** - Domain - rename then update description should work | Domain - rename then update description should work |
| 9 | **Entity Rename + Field Update Consolidation** - Domain - multiple rename + update cycles should work | Domain - multiple rename + update cycles should work |

</details>

<details open>
<summary>📄 <b>BulkImportWithDotInName.spec.ts</b> (8 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/BulkImportWithDotInName.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/BulkImportWithDotInName.spec.ts)

### Bulk Import Export with Dot in Service Name

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Bulk Import Export with Dot in Service Name** - Database service with dot in name - export and reimport | Test export and re-import of a database service with a dot in the name. This verifies that: 1. Export generates valid CSV with properly escaped FQN values 2. Import can parse the CSV with quoted FQN values 3. The full hierarchy (database, schema, table, columns) is preserved |
| | ↳ *Export database service with dot in name* | |
| | ↳ *Import exported CSV and verify parsing succeeds* | |
| 2 | **Bulk Import Export with Dot in Service Name** - CSV with quoted FQN loads correctly in import grid | Test that CSV with quoted FQN values can be loaded into the import grid. This is the core test for issue #24401 - verifying that the CSV parsing doesn't fail when FQN values contain escaped quotes. |
| | ↳ *Export and verify CSV loads without parsing errors* | |
| 3 | **Bulk Import Export with Dot in Service Name** - Full import cycle with dot in service name | Test the full import cycle - export, modify in grid, and reimport. This tests that the CSV reconstruction from grid data properly escapes quotes in FQN values. |
| | ↳ *Export, load into grid, validate, and update* | |
| 4 | **Bulk Import Export with Dot in Service Name** - Service name with multiple dots | Test with multiple dots in service name (e.g., "org.team.mysql.prod") |
| | ↳ *Export and reimport with multiple dots in name* | |
| 5 | **Bulk Import Export with Dot in Service Name** - Column with dot in name under service with dot | Test column with dot in name under a service with dot in name. This tests double quoting scenario where both service and column have dots. Column FQN: """service.name"".db.schema.table.""column.name""" |
| | ↳ *Export and reimport with column dots* | |
| 6 | **Bulk Import Export with Dot in Service Name** - Bulk edit existing entity with dot in service name | Test bulk edit via import - modify description of existing entity. This tests that editing in the grid and reimporting works with quoted FQNs. |
| | ↳ *Export, edit description in grid, and update* | |
| 7 | **Bulk Import Export with Dot in Service Name** - Import at database level with dot in service name | Test import at database level (not service level). This ensures the fix works when importing from database page. |
| | ↳ *Export and import at database level* | |
| 8 | **Bulk Import Export with Dot in Service Name** - Import at schema level with dot in service name | Test import at schema level with dot in service name. |
| | ↳ *Export and import at schema level* | |

</details>

<details open>
<summary>📄 <b>TaskDashboardEntity.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskDashboardEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskDashboardEntity.spec.ts)

### Task Creation and Resolution - Dashboard Entity

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation and Resolution - Dashboard Entity** - should create and approve entity-level description task for Dashboard | Create and approve entity-level description task for Dashboard |
| 2 | **Task Creation and Resolution - Dashboard Entity** - should create and approve TagUpdate task for Dashboard | Create and approve TagUpdate task for Dashboard |
| 3 | **Task Creation and Resolution - Dashboard Entity** - should create OwnershipUpdate task for Dashboard | Create OwnershipUpdate task for Dashboard |
| 4 | **Task Creation and Resolution - Dashboard Entity** - should create TierUpdate task for Dashboard | Create TierUpdate task for Dashboard |
| 5 | **Task Creation and Resolution - Dashboard Entity** - should create DomainUpdate task for Dashboard | Create DomainUpdate task for Dashboard |
| 6 | **Task Creation and Resolution - Dashboard Entity** - rejected task should NOT apply changes | Rejected task should NOT apply changes |

### Dashboard Task UI Flow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard Task UI Flow** - should show task in activity feed after creation | Show task in activity feed after creation |

</details>

<details open>
<summary>📄 <b>TaskEntityResolution.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskEntityResolution.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskEntityResolution.spec.ts)

### Task Resolution - OwnershipUpdate

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - OwnershipUpdate** - should create and approve OwnershipUpdate task | Create and approve OwnershipUpdate task |
| 2 | **Task Resolution - OwnershipUpdate** - rejected OwnershipUpdate should NOT change ownership | Rejected OwnershipUpdate should NOT change ownership |

### Task Resolution - TierUpdate

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - TierUpdate** - should create and approve TierUpdate task | Create and approve TierUpdate task |
| 2 | **Task Resolution - TierUpdate** - rejected TierUpdate should NOT apply tier | Rejected TierUpdate should NOT apply tier |

### Task Resolution - DomainUpdate

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - DomainUpdate** - should create and approve DomainUpdate task | Create and approve DomainUpdate task |

### Task Resolution - DescriptionUpdate at Entity Level

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - DescriptionUpdate at Entity Level** - should approve description update task and apply to entity | Approve description update task and apply to entity |

### Task Resolution - Column Level Description

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Resolution - Column Level Description** - should approve column description update task | Approve column description update task |

</details>

<details open>
<summary>📄 <b>BulkEditEntity.spec.ts</b> (6 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/BulkEditEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/BulkEditEntity.spec.ts)

### Bulk Edit Entity

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Bulk Edit Entity** - Database service | Database service |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *Perform bulk edit action* | |
| 2 | **Bulk Edit Entity** - Database | Database |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *Perform bulk edit action* | |
| 3 | **Bulk Edit Entity** - Database Schema | Database Schema |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *Perform bulk edit action* | |
| 4 | **Bulk Edit Entity** - Table | Table |
| | ↳ *Perform bulk edit action* | |
| 5 | **Bulk Edit Entity** - Glossary | Glossary |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *Perform bulk edit action* | |
| 6 | **Bulk Edit Entity** - Glossary Term (Nested) | Glossary Term (Nested) |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *Perform bulk edit action on nested glossary term* | |

</details>

<details open>
<summary>📄 <b>BulkEditOperationBadges.spec.ts</b> (6 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/BulkEditOperationBadges.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/BulkEditOperationBadges.spec.ts)

### BulkEditEntity — OperationBadges and Search (all entity types)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **BulkEditEntity — OperationBadges and Search (all entity types)** - Glossary bulk edit shows NO_CHANGE badge and OperationSummary on unmodified rows | Glossary bulk edit shows NO_CHANGE badge and OperationSummary on unmodified rows |
| 2 | **BulkEditEntity — OperationBadges and Search (all entity types)** - Glossary bulk edit shows UPDATE badge and increments summary after editing a cell | Glossary bulk edit shows UPDATE badge and increments summary after editing a cell |
| 3 | **BulkEditEntity — OperationBadges and Search (all entity types)** - Glossary bulk edit Revert Changes restores all rows to NO_CHANGE | Glossary bulk edit Revert Changes restores all rows to NO_CHANGE |
| 4 | **BulkEditEntity — OperationBadges and Search (all entity types)** - Glossary bulk edit search filters rows and clear restores them | Glossary bulk edit search filters rows and clear restores them |
| 5 | **BulkEditEntity — OperationBadges and Search (all entity types)** - Database service bulk edit shows NO_CHANGE badge and OperationSummary for all rows | Database service bulk edit shows NO_CHANGE badge and OperationSummary for all rows |
| 6 | **BulkEditEntity — OperationBadges and Search (all entity types)** - Database service bulk edit search filters rows and clear restores them | Database service bulk edit search filters rows and clear restores them |

</details>

<details open>
<summary>📄 <b>BulkImport.spec.ts</b> (6 tests, 26 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/BulkImport.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/BulkImport.spec.ts)

### Bulk Import Export

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Bulk Import Export** - Database service | Database service |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *should export data database service details* | |
| | ↳ *should import and edit with two additional database* | |
| 2 | **Bulk Import Export** - Database | Database |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *should export data database details* | |
| | ↳ *should import and edit with two additional database schema* | |
| 3 | **Bulk Import Export** - Database Schema | Database Schema |
| | ↳ *create custom properties for extension edit* | |
| | ↳ *should export data database schema details* | |
| | ↳ *should import and edit with two additional table* | |
| 4 | **Bulk Import Export** - Table | Table |
| | ↳ *should export data table details* | |
| | ↳ *should import and edit with two additional columns* | |
| 5 | **Bulk Import Export** - Keyboard Delete selection | Keyboard Delete selection |
| | ↳ *should export data database schema details* | |
| | ↳ *should import and perform edit operation on entity* | |
| | ↳ *should export data database schema details after edit changes* | |
| | ↳ *Perform Column Select and Delete Operation* | |
| | ↳ *Perform Cell Delete Operation and Save* | |
| | ↳ *should verify the removed value from entity* | |
| 6 | **Bulk Import Export** - Range selection | Range selection |
| | ↳ *should export data database details* | |
| | ↳ *should import and test range selection* | |
| | ↳ *Ctrl+a should select all cells in the grid and deselect all cells by clicking on second cell of .rdg-row* | |
| | ↳ *should select all the cells in the column by clicking on column header* | |
| | ↳ *allow multiple column selection* | |
| | ↳ *allow multiple column selection using keyboard* | |
| | ↳ *allow multiple cell selection using mouse on rightDown and leftUp and extend selection using shift+click* | |
| | ↳ *perform single cell copy-paste and undo-redo* | |
| | ↳ *Select range, copy-paste and undo-redo* | |

</details>

<details open>
<summary>📄 <b>TaskContainerEntity.spec.ts</b> (5 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskContainerEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskContainerEntity.spec.ts)

### Task Creation and Resolution - Container Entity

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation and Resolution - Container Entity** - should create and approve entity-level description task for Container | Create and approve entity-level description task for Container |
| 2 | **Task Creation and Resolution - Container Entity** - should create and approve dataModel column description task for Container | Create and approve dataModel column description task for Container |
| 3 | **Task Creation and Resolution - Container Entity** - should create OwnershipUpdate task for Container | Create OwnershipUpdate task for Container |
| 4 | **Task Creation and Resolution - Container Entity** - should create TierUpdate task for Container | Create TierUpdate task for Container |
| 5 | **Task Creation and Resolution - Container Entity** - should create DomainUpdate task for Container | Create DomainUpdate task for Container |

</details>

<details open>
<summary>📄 <b>TaskPipelineEntity.spec.ts</b> (5 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskPipelineEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskPipelineEntity.spec.ts)

### Task Creation and Resolution - Pipeline Entity

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation and Resolution - Pipeline Entity** - should create and approve entity-level description task for Pipeline | Create and approve entity-level description task for Pipeline |
| 2 | **Task Creation and Resolution - Pipeline Entity** - should create and approve pipeline task description update | Create and approve pipeline task description update |
| 3 | **Task Creation and Resolution - Pipeline Entity** - should create OwnershipUpdate task for Pipeline | Create OwnershipUpdate task for Pipeline |
| 4 | **Task Creation and Resolution - Pipeline Entity** - should create TierUpdate task for Pipeline | Create TierUpdate task for Pipeline |
| 5 | **Task Creation and Resolution - Pipeline Entity** - should create DomainUpdate task for Pipeline | Create DomainUpdate task for Pipeline |

</details>

<details open>
<summary>📄 <b>TaskTopicEntity.spec.ts</b> (5 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskTopicEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskTopicEntity.spec.ts)

### Task Creation and Resolution - Topic Entity

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Creation and Resolution - Topic Entity** - should create and approve entity-level description task for Topic | Create and approve entity-level description task for Topic |
| 2 | **Task Creation and Resolution - Topic Entity** - should create and approve schema field description task for Topic | Create and approve schema field description task for Topic |
| 3 | **Task Creation and Resolution - Topic Entity** - should create OwnershipUpdate task for Topic | Create OwnershipUpdate task for Topic |
| 4 | **Task Creation and Resolution - Topic Entity** - should create TierUpdate task for Topic | Create TierUpdate task for Topic |
| 5 | **Task Creation and Resolution - Topic Entity** - should create DomainUpdate task for Topic | Create DomainUpdate task for Topic |

</details>

<details open>
<summary>📄 <b>BulkEditImportPermissions.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/BulkEditImportPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/BulkEditImportPermissions.spec.ts)

### Bulk Edit / Import - Non-admin permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Bulk Edit / Import - Non-admin permissions** - Editor with EditAll can access every bulk edit and import page | Editor with EditAll can access every bulk edit and import page |
| 2 | **Bulk Edit / Import - Non-admin permissions** - Data Consumer is blocked from every bulk edit and import page | Data Consumer is blocked from every bulk edit and import page |
| 3 | **Bulk Edit / Import - Non-admin permissions** - Data Steward is blocked from every bulk edit and import page | Data Steward is blocked from every bulk edit and import page |
| 4 | **Bulk Edit / Import - Non-admin permissions** - View-only user is blocked from every bulk edit and import page | View-only user is blocked from every bulk edit and import page |

</details>

<details open>
<summary>📄 <b>AnnouncementEntity.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Announcements/AnnouncementEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Announcements/AnnouncementEntity.spec.ts)

### Announcement Entity Lifecycle

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Announcement Entity Lifecycle** - creates an announcement on a domain | Creates an announcement on a domain |
| 2 | **Announcement Entity Lifecycle** - edits an existing announcement on a domain | Edits an existing announcement on a domain |
| 3 | **Announcement Entity Lifecycle** - deletes an existing announcement on a domain | Deletes an existing announcement on a domain |

</details>

<details open>
<summary>📄 <b>EntityHeaderAnnouncements.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Announcements/EntityHeaderAnnouncements.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Announcements/EntityHeaderAnnouncements.spec.ts)

### Entity header announcements (data asset)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Entity header announcements (data asset)** - shows announcements one at a time and pages through them with the counter | Shows announcements one at a time and pages through them with the counter |
| 2 | **Entity header announcements (data asset)** - hides the counter when a single announcement is active | Hides the counter when a single announcement is active |
| 3 | **Entity header announcements (data asset)** - opens the announcement drawer from the View all button | Opens the announcement drawer from the View all button |

</details>

<details open>
<summary>📄 <b>BundleSuiteBulkOperations.spec.ts</b> (3 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/BundleSuiteBulkOperations.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/BundleSuiteBulkOperations.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Create new Bundle Suite with bulk selected test cases | Create new Bundle Suite with bulk selected test cases |
| | ↳ *Navigate and select test case* | |
| | ↳ *Open create bundle suite form* | |
| | ↳ *Fill form and create bundle suite* | |
| | ↳ *Verify bundle suite created with test case* | |
| 2 | Add test case to existing Bundle Suite | Add test case to existing Bundle Suite |
| | ↳ *Navigate and select test case* | |
| | ↳ *Add to existing bundle suite* | |
| | ↳ *Verify test case added to bundle suite* | |
| 3 | Bulk selection operations | Bulk selection operations |
| | ↳ *Verify button not visible when no selection* | |
| | ↳ *Select test cases and verify button appears* | |
| | ↳ *Clear selection and verify button hidden* | |
| | ↳ *Select all and unselect all* | |

</details>

<details open>
<summary>📄 <b>QueryEntity.spec.ts</b> (3 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/QueryEntity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/QueryEntity.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Query Entity | Query Entity |
| | ↳ *Create a new query entity* | |
| | ↳ *Update owner, description and tag* | |
| | ↳ *Update query and QueryUsedIn* | |
| | ↳ *Verify query filter* | |
| | ↳ *Verify vote for query* | |
| | ↳ *Visit full screen view of query and Delete* | |
| 2 | Verify query duration | Query duration |
| 3 | Verify Query Pagination | Query Pagination |

</details>

<details open>
<summary>📄 <b>EntityRightCollapsablePanel.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/EntityRightCollapsablePanel.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/EntityRightCollapsablePanel.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Show and Hide Right Collapsable Panel | Show and Hide Right Collapsable Panel |

</details>

<details open>
<summary>📄 <b>StoredProcedureServiceBulkFetch.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/StoredProcedureServiceBulkFetch.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/StoredProcedureServiceBulkFetch.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Stored procedure carries service via the bulk field path even when service is not requested | Stored procedure carries service via the bulk field path even when service is not requested |

</details>


---

<div id="settings"></div>

## Settings

<details open>
<summary>📄 <b>SearchSettings.spec.ts</b> (10 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/SearchSettings.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/SearchSettings.spec.ts)

### Search Settings

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Settings** - Update global search settings | Update global search settings |
| 2 | **Search Settings** - Update entity search settings | Update entity search settings |
| 3 | **Search Settings** - Restore default search settings | Restore default search settings |
| 4 | **Search Settings** - Reset global search settings to default via confirmation modal | Reset global search settings to default via confirmation modal |
| 5 | **Search Settings** - Search preview for searchable table | Search preview for searchable table |
| 6 | **Search Settings** - Preview config reflects reverted n-gram weight after save | Preview config reflects reverted n-gram weight after save |
| 7 | **Search Settings** - Preview config updates when restore defaults returns empty search fields | Preview config updates when restore defaults returns empty search fields |
| 8 | **Search Settings** - Latest preview config wins when a superseded request resolves late | Latest preview config wins when a superseded request resolves late |
| 9 | **Search Settings** - Configure column search field settings | Configure column search field settings |
| 10 | **Search Settings** - Search preview displays column results correctly | Search preview displays column results correctly |

</details>

<details open>
<summary>📄 <b>SettingsNavigationPage.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SettingsNavigationPage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SettingsNavigationPage.spec.ts)

### Settings Navigation Page Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Settings Navigation Page Tests** - should update navigation sidebar | Update navigation sidebar |
| 2 | **Settings Navigation Page Tests** - should show navigation blocker when leaving with unsaved changes | Show navigation blocker when leaving with unsaved changes |
| 3 | **Settings Navigation Page Tests** - should save changes and navigate when "Save changes" is clicked in blocker | Save changes and navigate when "Save changes" is clicked in blocker |
| 4 | **Settings Navigation Page Tests** - should handle reset functionality and prevent navigation blocker after save | Handle reset functionality and prevent navigation blocker after save |
| 5 | **Settings Navigation Page Tests** - should support drag and drop reordering of navigation items | Support drag and drop reordering of navigation items |
| 6 | **Settings Navigation Page Tests** - should handle multiple items being hidden at once | Handle multiple items being hidden at once |
| 7 | **Settings Navigation Page Tests** - should persist a reordered sub-item after reload | Persist a reordered sub-item after reload |
| 8 | **Settings Navigation Page Tests** - should reflect a sub-item moved to another group in the sidebar after applying the persona | Reflect a sub-item moved to another group in the sidebar after applying the persona |

</details>

<details open>
<summary>📄 <b>DataInsightSettings.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/DataInsightSettings.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/DataInsightSettings.spec.ts)

### Data Insight settings page should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Insight settings page should work properly** - Edit data insight application | Edit data insight application |
| 2 | **Data Insight settings page should work properly** - Uninstall application | Uninstall application |
| 3 | **Data Insight settings page should work properly** - Install application | Install application |
| 4 | **Data Insight settings page should work properly** - Run application | Run application |

</details>

<details open>
<summary>📄 <b>LineageSettings.spec.ts</b> (3 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/LineageSettings.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/LineageSettings.spec.ts)

### Lineage Settings Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Lineage Settings Tests** - Verify global lineage config | Global lineage config |
| | ↳ *Lineage config should throw error if upstream depth is less than 0* | |
| | ↳ *Update global lineage config and verify lineage for column layer* | |
| | ↳ *Update global lineage config and verify lineage for entity layer* | |
| | ↳ *Verify Upstream and Downstream expand collapse buttons* | |
| | ↳ *Reset global lineage config and verify lineage* | |
| 2 | **Lineage Settings Tests** - Verify lineage time filter and tab switch reuse loaded graph | Lineage time filter and tab switch reuse loaded graph |
| 3 | **Lineage Settings Tests** - Verify lineage settings for PipelineViewMode as Edge | Lineage settings for PipelineViewMode as Edge |

</details>

<details open>
<summary>📄 <b>TaskFormSettings.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/TaskFormSettings.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/TaskFormSettings.spec.ts)

### Task Form Settings

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Form Settings** - loads built-in tag suggestion schema in the visual designer | Loads built-in tag suggestion schema in the visual designer |
| 2 | **Task Form Settings** - creates and updates a task form schema from settings | Creates and updates a task form schema from settings |

</details>

<details open>
<summary>📄 <b>CronValidations.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/CronValidations.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/CronValidations.spec.ts)

### Cron Validations

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Cron Validations** - Validate different cron expressions | Validate different cron expressions |

</details>


---

<div id="personas-customizations"></div>

## Personas & Customizations

<details open>
<summary>📄 <b>CustomizeDetailPage.spec.ts</b> (25 tests, 83 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/CustomizeDetailPage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/CustomizeDetailPage.spec.ts)

### Persona customize UI tab

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Persona customize UI tab** - should show all the customize options | Show all the customize options |
| 2 | **Persona customize UI tab** - should show all the data assets customize options | Show all the data assets customize options |
| 3 | **Persona customize UI tab** - should show all the governance customize options | Show all the governance customize options |
| 4 | **Persona customize UI tab** - Navigation check default state | Navigation check default state |
| 5 | **Persona customize UI tab** - customize navigation should work | Customize navigation should work |
| | ↳ *hide navigation items and validate with persona* | |
| | ↳ *show navigation items and validate with persona* | |

### Persona customization

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Persona customization** - Table - customization should work | Table - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 2 | **Persona customization** - Topic - customization should work | Topic - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 3 | **Persona customization** - Dashboard - customization should work | Dashboard - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 4 | **Persona customization** - Ml Model - customization should work | Ml Model - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 5 | **Persona customization** - Pipeline - customization should work | Pipeline - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 6 | **Persona customization** - Dashboard Data Model - customization should work | Dashboard Data Model - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 7 | **Persona customization** - API Collection - customization should work | API Collection - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 8 | **Persona customization** - Search Index - customization should work | Search Index - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 9 | **Persona customization** - Container - customization should work | Container - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 10 | **Persona customization** - Database - customization should work | Database - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 11 | **Persona customization** - Database Schema - customization should work | Database Schema - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 12 | **Persona customization** - Stored Procedure - customization should work | Stored Procedure - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 13 | **Persona customization** - API Endpoint - customization should work | API Endpoint - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 14 | **Persona customization** - Domain - customization should work | Domain - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 15 | **Persona customization** - Data Product - customization should work | Data Product - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 16 | **Persona customization** - Glossary - customization should work | Glossary - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 17 | **Persona customization** - Glossary Term - customization should work | Glossary Term - customization should work |
| | ↳ *pre-requisite* | |
| | ↳ *should show all the tabs & widget as default when no customization is done* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 18 | **Persona customization** - Validate Glossary Term details page after customization of tabs | Validate Glossary Term details page after customization of tabs |
| | ↳ *pre-requisite* | |
| | ↳ *apply customization* | |
| | ↳ *Validate customization* | |
| 19 | **Persona customization** - customize tab label should only render if it's customize by user | Customize tab label should only render if it's customize by user |
| | ↳ *pre-requisite* | |
| | ↳ *apply tab label customization for Table* | |
| | ↳ *validate applied label change and language support for page* | |
| 20 | **Persona customization** - Domain - customize tab label should only render if it's customized by user | Domain - customize tab label should only render if it's customized by user |
| | ↳ *pre-requisite* | |
| | ↳ *apply tab label customization for Domain* | |
| | ↳ *validate applied label change for Domain Documentation tab* | |

</details>

<details open>
<summary>📄 <b>PersonaAIContext.spec.ts</b> (15 tests, 15 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/PersonaAIContext.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/PersonaAIContext.spec.ts)

### Persona AI Context

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Persona AI Context** - round-trips real configuration, rule CRUD, and preview endpoints | Round-trips real configuration, rule CRUD, and preview endpoints |
| 2 | **Persona AI Context** - configures every entity type, behavior, section, filter, and setting | Configures every entity type, behavior, section, filter, and setting |
| 3 | **Persona AI Context** - edits and deletes a persisted rule and returns to the empty state | Edits and deletes a persisted rule and returns to the empty state |
| 4 | **Persona AI Context** - previews one byte-consistent document in rendered and raw modes | Previews one byte-consistent document in rendered and raw modes |
| 5 | **Persona AI Context** - measures the large-document preview render cost | Measures the large-document preview render cost |
| 6 | **Persona AI Context** - builds real version history and restores an earlier version | Builds real version history and restores an earlier version |
| 7 | **Persona AI Context** - rolls back the optimistic rule and toasts when the save fails | Rolls back the optimistic rule and toasts when the save fails |
| 8 | **Persona AI Context** - reverts the enabled toggle when the settings update fails | Reverts the enabled toggle when the settings update fails |
| 9 | **Persona AI Context** - surfaces the generating cache state and settles to fresh | Surfaces the generating cache state and settles to fresh |
| 10 | **Persona AI Context** - retries the preview after a failed document load | Retries the preview after a failed document load |
| 11 | **Persona AI Context** - blocks saving a rule whose name already exists | Blocks saving a rule whose name already exists |
| 12 | **Persona AI Context** - clears and persists the character budget and cache TTL | Clears and persists the character budget and cache TTL |
| 13 | **Persona AI Context** - links View in Explore to the entity-type explore tab | Links View in Explore to the entity-type explore tab |
| 14 | **Persona AI Context** - shows the empty version history state | Shows the empty version history state |
| 15 | **Persona AI Context** - shows the truncated count in the preview stats | Shows the truncated count in the preview stats |

</details>

<details open>
<summary>📄 <b>PersonaFlow.spec.ts</b> (11 tests, 19 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/PersonaFlow.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/PersonaFlow.spec.ts)

### Persona operations

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Persona operations** - Persona creation should work properly with breadcrumb navigation | Persona creation should work properly with breadcrumb navigation |
| 2 | **Persona operations** - Persona update description flow should work properly | Persona update description flow should work properly |
| 3 | **Persona operations** - Persona rename flow should work properly | Persona rename flow should work properly |
| 4 | **Persona operations** - Remove users in persona should work properly | Remove users in persona should work properly |
| 5 | **Persona operations** - Delete persona should work properly | Delete persona should work properly |

### Default persona setting and removal flow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Default persona setting and removal flow** - Set and remove default persona should work properly | Set and remove default persona should work properly |
| | ↳ *Admin creates a persona and sets the default persona* | |
| | ↳ *User refreshes and checks the default persona is applied* | |
| | ↳ *Changing default persona* | |
| | ↳ *Verify changed default persona for new user* | |
| | ↳ *Admin removes the default persona* | |
| | ↳ *User refreshes and sees no default persona* | |

### Team persona setting flow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team persona setting flow** - Set default persona for team should work properly | Set default persona for team should work properly |
| | ↳ *Admin sets default persona for a team* | |
| | ↳ *Team persona is not auto-applied as the user default persona* | |
| 2 | **Team persona setting flow** - Admin can remove the default persona for a team | Admin can remove the default persona for a team |
| | ↳ *Admin removes the default persona for a team* | |
| 3 | **Team persona setting flow** - User without permissions cannot edit team persona | User without permissions cannot edit team persona |
| | ↳ *User without permissions cannot edit team persona* | |
| 4 | **Team persona setting flow** - Non-group team types do not have a default persona setting | Non-group team types do not have a default persona setting |
| | ↳ *Verify non-group teams cannot set a persona* | |

### Curated Assets – Description filter

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Curated Assets – Description filter** - Description Contains filter – table with matching description appears in widget | Description Contains filter – table with matching description appears in widget |
| | ↳ *Navigate to persona settings and add curated assets widget* | |
| | ↳ *Click Create in curated assets widget and fill Description Contains filter* | |
| | ↳ *Save and verify table appears in curated assets widget* | |

</details>

<details open>
<summary>📄 <b>CustomizeWidgets.spec.ts</b> (9 tests, 45 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/CustomizeWidgets.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/CustomizeWidgets.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Activity Feed Widget | Activity Feed Widget |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget filters* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Test widget customization* | |
| 2 | Data Assets Widget | Data Assets Widget |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget displays entities and navigation* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Test widget customization* | |
| 3 | My Data Widget | My Data Widget |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget filters* | |
| | ↳ *Test widget displays entities and navigation* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Test widget customization* | |
| 4 | KPI Widget | KPI Widget |
| | ↳ *Add KPI* | |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Test widget loads KPI data correctly* | |
| | ↳ *Test widget customization* | |
| 5 | Total Data Assets Widget | Total Data Assets Widget |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget filters* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Test widget customization* | |
| 6 | Following Assets Widget | Following Assets Widget |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget filters* | |
| | ↳ *Test widget displays followed entities* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Test widget customization* | |
| 7 | Domains Widget | Domains Widget |
| | ↳ *Add widget* | |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget filters* | |
| | ↳ *Test widget displays entities and navigation* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Remove widget* | |
| 8 | My Tasks Widget | My Tasks Widget |
| | ↳ *Create a task* | |
| | ↳ *Add widget* | |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget filters* | |
| | ↳ *Test widget displays entities and navigation* | |
| | ↳ *Remove widget* | |
| 9 | Data Products Widget | Data Products Widget |
| | ↳ *Add widget* | |
| | ↳ *Test widget header and navigation* | |
| | ↳ *Test widget filters* | |
| | ↳ *Test widget displays entities and navigation* | |
| | ↳ *Test widget footer navigation* | |
| | ↳ *Remove widget* | |

</details>

<details open>
<summary>📄 <b>PersonaAIContextRuleCardAndStates.spec.ts</b> (6 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/PersonaAIContextRuleCardAndStates.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/PersonaAIContextRuleCardAndStates.spec.ts)

### Persona AI Context - rule card & settings/cache states

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Persona AI Context - rule card & settings/cache states** - rule card shows the all-entities state when no filter is set | Rule card shows the all-entities state when no filter is set |
| 2 | **Persona AI Context - rule card & settings/cache states** - rule card shows the condition count for a multi-condition filter | Rule card shows the condition count for a multi-condition filter |
| 3 | **Persona AI Context - rule card & settings/cache states** - caps max assets at the backend maximum of 1000 | Caps max assets at the backend maximum of 1000 |
| 4 | **Persona AI Context - rule card & settings/cache states** - surfaces the persisted generation error on the settings card | Surfaces the persisted generation error on the settings card |
| 5 | **Persona AI Context - rule card & settings/cache states** - renders the failed cache-state badge | Renders the failed cache-state badge |
| 6 | **Persona AI Context - rule card & settings/cache states** - renders the stale cache-state badge | Renders the stale cache-state badge |

</details>

<details open>
<summary>📄 <b>CustomizeLandingPage.spec.ts</b> (4 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/CustomizeLandingPage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/CustomizeLandingPage.spec.ts)

### Customize Landing Page Flow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Customize Landing Page Flow** - Check all default widget present | All default widget present |
| 2 | **Customize Landing Page Flow** - Add, Remove and Reset widget should work properly | Add, Remove and Reset widget should work properly |
| | ↳ *Remove widget* | |
| | ↳ *Add widget* | |
| | ↳ *Resetting the layout flow should work properly* | |
| 3 | **Customize Landing Page Flow** - Widget drag and drop reordering | Widget drag and drop reordering |
| 4 | **Customize Landing Page Flow** - Cancel button should show a single confirmation modal and Discard should exit the customize landing page | Cancel button should show a single confirmation modal and Discard should exit the customize landing page |

</details>

<details open>
<summary>📄 <b>CustomThemeConfig.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/CustomThemeConfig.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/CustomThemeConfig.spec.ts)

### Custom Theme Config Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Custom Theme Config Page** - Update and reset custom theme config | Update and reset custom theme config |
| 2 | **Custom Theme Config Page** - Update Hover and selected Color  | Update Hover and selected Color  |
| 3 | **Custom Theme Config Page** - Should call customMonogramUrlPath only once after save if the monogram is not valid | Call customMonogramUrlPath only once after save if the monogram is not valid |

</details>

<details open>
<summary>📄 <b>CustomizeNavigationNewItems.spec.ts</b> (2 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/CustomizeNavigationNewItems.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/CustomizeNavigationNewItems.spec.ts)

### Persona navigation — new sidebar items hidden by default

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Persona navigation — new sidebar items hidden by default** - new sidebar items absent from saved persona nav are toggled OFF in admin settings and hidden in sidebar | New sidebar items absent from saved persona nav are toggled OFF in admin settings and hidden in sidebar |
| | ↳ *admin: Ontology Explorer toggle is OFF for items absent from saved nav* | |
| | ↳ *user: switch to the test persona* | |
| | ↳ *sidebar: top-level item absent from saved nav is hidden* | |
| | ↳ *sidebar: top-level item explicitly set isHidden is not visible* | |
| | ↳ *sidebar: governance children — present item visible, absent and hidden items not visible* | |
| 2 | **Persona navigation — new sidebar items hidden by default** - cancel button on customize navigation shows a single confirmation modal and Discard exits the page | Cancel button on customize navigation shows a single confirmation modal and Discard exits the page |

</details>


---

<div id="navigation"></div>

## Navigation

<details open>
<summary>📄 <b>Pagination.spec.ts</b> (35 tests, 35 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Pagination.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Pagination.spec.ts)

### Pagination Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pagination Tests** - should test pagination on Users page | Pagination on Users page |
| 2 | **Pagination Tests** - should test Users complete flow with search | Users complete flow with search |
| 3 | **Pagination Tests** - should test Database Schema Tables normal pagination | Database Schema Tables normal pagination |
| 4 | **Pagination Tests** - should test Database Schema Tables complete flow with search | Database Schema Tables complete flow with search |
| 5 | **Pagination Tests** - should test pagination on Table columns | Pagination on Table columns |
| 6 | **Pagination Tests** - should test Table columns complete flow with search | Table columns complete flow with search |
| 7 | **Pagination Tests** - should test pagination on Service Databases page | Pagination on Service Databases page |
| 8 | **Pagination Tests** - should test Service Database Tables complete flow with search | Service Database Tables complete flow with search |
| 9 | **Pagination Tests** - should test pagination on Classification Tags page | Pagination on Classification Tags page |
| 10 | **Pagination Tests** - should test pagination on Metrics page | Pagination on Metrics page |
| 11 | **Pagination Tests** - should test pagination on Notification Alerts page | Pagination on Notification Alerts page |
| 12 | **Pagination Tests** - should test pagination on Observability Alerts page | Pagination on Observability Alerts page |
| 13 | **Pagination Tests** - should test API Collection normal pagination | API Collection normal pagination |
| 14 | **Pagination Tests** - should test API Collection complete flow with search | API Collection complete flow with search |
| 15 | **Pagination Tests** - should test Stored Procedures normal pagination | Stored Procedures normal pagination |
| 16 | **Pagination Tests** - should test Stored Procedures complete flow with search | Stored Procedures complete flow with search |
| 17 | **Pagination Tests** - should test Database Schemas normal pagination | Database Schemas normal pagination |
| 18 | **Pagination Tests** - should test Database Schemas complete flow with search | Database Schemas complete flow with search |
| 19 | **Pagination Tests** - should test Data Models normal pagination | Data Models normal pagination |
| 20 | **Pagination Tests** - should test Data Models complete flow with search | Data Models complete flow with search |
| 21 | **Pagination Tests** - should test Directories normal pagination | Directories normal pagination |
| 22 | **Pagination Tests** - should test Directories complete flow with search | Directories complete flow with search |
| 23 | **Pagination Tests** - should test Files normal pagination | Files normal pagination |
| 24 | **Pagination Tests** - should test Files complete flow with search | Files complete flow with search |
| 25 | **Pagination Tests** - should reset pagination when switching between Files and Spreadsheets tabs and also verify the api is called with correct payload | Reset pagination when switching between Files and Spreadsheets tabs and also verify the api is called with correct payload |
| 26 | **Pagination Tests** - should test Spreadsheets normal pagination | Spreadsheets normal pagination |
| 27 | **Pagination Tests** - should test Spreadsheets complete flow with search | Spreadsheets complete flow with search |
| 28 | **Pagination Tests** - should test pagination on Roles page | Pagination on Roles page |
| 29 | **Pagination Tests** - should test pagination on Policies page | Pagination on Policies page |
| 30 | **Pagination Tests** - should test pagination on Bots page | Pagination on Bots page |
| 31 | **Pagination Tests** - should test Pipeline Tasks normal pagination | Pipeline Tasks normal pagination |
| 32 | **Pagination Tests** - should display at most pageSize rows on each page and total matches task count | Display at most pageSize rows on each page and total matches task count |
| 33 | **Pagination Tests** - should test pagination on Table version page columns | Pagination on Table version page columns |
| 34 | **Pagination Tests** - should test search on Table version page columns | Search on Table version page columns |
| 35 | **Pagination Tests** - should test pagination on Service version page | Pagination on Service version page |

</details>

<details open>
<summary>📄 <b>Navbar.spec.ts</b> (22 tests, 22 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/Navbar.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/Navbar.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Search Term - All | Search Term - All |
| 2 | Search Term - Database | Search Term - Database |
| 3 | Search Term - Database Schema | Search Term - Database Schema |
| 4 | Search Term - Table | Search Term - Table |
| 5 | Search Term - Topic | Search Term - Topic |
| 6 | Search Term - Dashboard | Search Term - Dashboard |
| 7 | Search Term - Pipeline | Search Term - Pipeline |
| 8 | Search Term - ML Model | Search Term - ML Model |
| 9 | Search Term - Container | Search Term - Container |
| 10 | Search Term - Stored Procedure | Search Term - Stored Procedure |
| 11 | Search Term - Data Model | Search Term - Data Model |
| 12 | Search Term - Glossary | Search Term - Glossary |
| 13 | Search Term - Tag | Search Term - Tag |
| 14 | Search Term - Search Index | Search Term - Search Index |
| 15 | Search Term - Data Product | Search Term - Data Product |
| 16 | Search Term - API Endpoint | Search Term - API Endpoint |
| 17 | Search Term - API Collection | Search Term - API Collection |
| 18 | Search Term - Metric | Search Term - Metric |
| 19 | Search Term - Directory | Search Term - Directory |
| 20 | Search Term - File | Search Term - File |
| 21 | Search Term - Spreadsheet | Search Term - Spreadsheet |
| 22 | Search Term - Worksheet | Search Term - Worksheet |

</details>

<details open>
<summary>📄 <b>TaskNavigation.spec.ts</b> (11 tests, 20 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TaskNavigation.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TaskNavigation.spec.ts)

### Task Navigation - Activity Feed Widget

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Navigation - Activity Feed Widget** - clicking task in home feed widget should navigate to entity page | Clicking task in home feed widget should navigate to entity page |
| 2 | **Task Navigation - Activity Feed Widget** - task link should contain correct entity FQN, not task ID | Task link should contain correct entity FQN, not task ID |

### Task Navigation - Entity Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Navigation - Entity Page** - should display tasks in entity activity feed tab | Display tasks in entity activity feed tab |
| 2 | **Task Navigation - Entity Page** - clicking task card should open task detail drawer | Clicking task card should open task detail drawer |
| 3 | **Task Navigation - Entity Page** - task count badge should match actual task count | Task count badge should match actual task count |

### Task Navigation - Notification Box

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Navigation - Notification Box** - assignee should see task in notification box | Assignee should see task in notification box |
| 2 | **Task Navigation - Notification Box** - clicking task notification should navigate correctly | Clicking task notification should navigate correctly |

### Task Navigation - URL Validation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Navigation - URL Validation** - navigating to /table/TASK-XXXXX should show 404 (invalid URL pattern) | Navigating to /table/TASK-XXXXX should show 404 (invalid URL pattern) |
| 2 | **Task Navigation - URL Validation** - task detail page with valid task ID should work | Task detail page with valid task ID should work |

### Task Notification - activity-feed tab refreshes after clicking notification

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Task Notification - activity-feed tab refreshes after clicking notification** - clicking task notification while on entity task tab refreshes the task list | Clicking task notification while on entity task tab refreshes the task list |
| | ↳ *Log in and navigate to entity page* | |
| | ↳ *Open Activity Feed & Tasks tab and stay there* | |
| | ↳ *Create task via API assigned to the logged-in user* | |
| | ↳ *Open notification bell and click the latest task notification* | |
| | ↳ *Task list is refreshed with the latest task details* | |
| 2 | **Task Notification - activity-feed tab refreshes after clicking notification** - two sessions: admin on Columns tab creates task, assignee sees refresh on notification click | Two sessions: admin on Columns tab creates task, assignee sees refresh on notification click |
| | ↳ *Log in both sessions* | |
| | ↳ *Admin navigates to entity Columns (Schema) tab* | |
| | ↳ *Other user navigates to entity Activity Feed & Tasks tab* | |
| | ↳ *Admin creates a task via API and assigns to other user* | |
| | ↳ *Other user clicks bell icon and latest task notification* | |
| | ↳ *Task list is refreshed with the new task on the other user page* | |

</details>

<details open>
<summary>📄 <b>NavigationBlocker.spec.ts</b> (5 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/NavigationBlocker.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/NavigationBlocker.spec.ts)

### Navigation Blocker Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Navigation Blocker Tests** - should show navigation blocker modal when trying to navigate away with unsaved changes | Show navigation blocker modal when trying to navigate away with unsaved changes |
| 2 | **Navigation Blocker Tests** - should confirm navigation when "Save changes" is clicked | Confirm navigation when "Save changes" is clicked |
| 3 | **Navigation Blocker Tests** - should navigate to new page when "Leave" is clicked | Navigate to new page when "Leave" is clicked |
| 4 | **Navigation Blocker Tests** - should not show navigation blocker after saving changes | Not show navigation blocker after saving changes |
| 5 | **Navigation Blocker Tests** - should stay on current page and keep changes when X button is clicked | Stay on current page and keep changes when X button is clicked |

</details>

<details open>
<summary>📄 <b>GlobalPageSize.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/GlobalPageSize.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/GlobalPageSize.spec.ts)

### Table & Data Model columns table pagination

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table & Data Model columns table pagination** - Page size should persist across different pages | Page size should persist across different pages |

</details>


---

<div id="lineage-ui-"></div>

## Lineage (UI)

<details open>
<summary>📄 <b>DataAssetLineage.spec.ts</b> (85 tests, 354 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Lineage/DataAssetLineage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Lineage/DataAssetLineage.spec.ts)

### Data asset lineage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data asset lineage** - verify create lineage for entity - Table | Create lineage for entity - Table |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 2 | **Data asset lineage** - verify create lineage for entity - Container | Create lineage for entity - Container |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 3 | **Data asset lineage** - verify create lineage for entity - Topic | Create lineage for entity - Topic |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 4 | **Data asset lineage** - verify create lineage for entity - Dashboard | Create lineage for entity - Dashboard |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 5 | **Data asset lineage** - verify create lineage for entity - Mlmodel | Create lineage for entity - Mlmodel |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 6 | **Data asset lineage** - verify create lineage for entity - Pipeline | Create lineage for entity - Pipeline |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 7 | **Data asset lineage** - verify create lineage for entity - Stored Procedure | Create lineage for entity - Stored Procedure |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 8 | **Data asset lineage** - verify create lineage for entity - Search Index | Create lineage for entity - Search Index |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 9 | **Data asset lineage** - verify create lineage for entity - Data Model | Create lineage for entity - Data Model |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 10 | **Data asset lineage** - verify create lineage for entity - Api Endpoint | Create lineage for entity - Api Endpoint |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 11 | **Data asset lineage** - verify create lineage for entity - Metric | Create lineage for entity - Metric |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 12 | **Data asset lineage** - verify create lineage for entity - Directory | Create lineage for entity - Directory |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 13 | **Data asset lineage** - verify create lineage for entity - File | Create lineage for entity - File |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 14 | **Data asset lineage** - verify create lineage for entity - Spreadsheet | Create lineage for entity - Spreadsheet |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |
| 15 | **Data asset lineage** - verify create lineage for entity - Worksheet | Create lineage for entity - Worksheet |
| | ↳ *prepare entity* | |
| | ↳ *should create lineage with normal edge* | |
| | ↳ *should create lineage with edge having pipeline* | |
| | ↳ *Verify Lineage Export CSV* | |
| | ↳ *Verify Lineage Export PNG* | |
| | ↳ *Remove lineage between nodes for the entity* | |

### Column Level Lineage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Level Lineage** - Column lineage for table -> table | Column lineage for table -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 2 | **Column Level Lineage** - Column lineage for table -> container | Column lineage for table -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 3 | **Column Level Lineage** - Column lineage for table -> topic | Column lineage for table -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 4 | **Column Level Lineage** - Column lineage for table -> apiEndpoint | Column lineage for table -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 5 | **Column Level Lineage** - Column lineage for table -> dashboard | Column lineage for table -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 6 | **Column Level Lineage** - Column lineage for table -> dashboardDataModel | Column lineage for table -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 7 | **Column Level Lineage** - Column lineage for table -> searchIndex | Column lineage for table -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 8 | **Column Level Lineage** - Column lineage for table -> mlModel | Column lineage for table -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 9 | **Column Level Lineage** - Column lineage for container -> table | Column lineage for container -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 10 | **Column Level Lineage** - Column lineage for container -> container | Column lineage for container -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 11 | **Column Level Lineage** - Column lineage for container -> topic | Column lineage for container -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 12 | **Column Level Lineage** - Column lineage for container -> apiEndpoint | Column lineage for container -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 13 | **Column Level Lineage** - Column lineage for container -> dashboard | Column lineage for container -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 14 | **Column Level Lineage** - Column lineage for container -> dashboardDataModel | Column lineage for container -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 15 | **Column Level Lineage** - Column lineage for container -> searchIndex | Column lineage for container -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 16 | **Column Level Lineage** - Column lineage for container -> mlModel | Column lineage for container -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 17 | **Column Level Lineage** - Column lineage for topic -> table | Column lineage for topic -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 18 | **Column Level Lineage** - Column lineage for topic -> container | Column lineage for topic -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 19 | **Column Level Lineage** - Column lineage for topic -> topic | Column lineage for topic -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 20 | **Column Level Lineage** - Column lineage for topic -> apiEndpoint | Column lineage for topic -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 21 | **Column Level Lineage** - Column lineage for topic -> dashboard | Column lineage for topic -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 22 | **Column Level Lineage** - Column lineage for topic -> dashboardDataModel | Column lineage for topic -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 23 | **Column Level Lineage** - Column lineage for topic -> searchIndex | Column lineage for topic -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 24 | **Column Level Lineage** - Column lineage for topic -> mlModel | Column lineage for topic -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 25 | **Column Level Lineage** - Column lineage for apiEndpoint -> table | Column lineage for apiEndpoint -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 26 | **Column Level Lineage** - Column lineage for apiEndpoint -> container | Column lineage for apiEndpoint -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 27 | **Column Level Lineage** - Column lineage for apiEndpoint -> topic | Column lineage for apiEndpoint -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 28 | **Column Level Lineage** - Column lineage for apiEndpoint -> apiEndpoint | Column lineage for apiEndpoint -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 29 | **Column Level Lineage** - Column lineage for apiEndpoint -> dashboard | Column lineage for apiEndpoint -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 30 | **Column Level Lineage** - Column lineage for apiEndpoint -> dashboardDataModel | Column lineage for apiEndpoint -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 31 | **Column Level Lineage** - Column lineage for apiEndpoint -> searchIndex | Column lineage for apiEndpoint -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 32 | **Column Level Lineage** - Column lineage for apiEndpoint -> mlModel | Column lineage for apiEndpoint -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 33 | **Column Level Lineage** - Column lineage for dashboard -> table | Column lineage for dashboard -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 34 | **Column Level Lineage** - Column lineage for dashboard -> container | Column lineage for dashboard -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 35 | **Column Level Lineage** - Column lineage for dashboard -> topic | Column lineage for dashboard -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 36 | **Column Level Lineage** - Column lineage for dashboard -> apiEndpoint | Column lineage for dashboard -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 37 | **Column Level Lineage** - Column lineage for dashboard -> dashboard | Column lineage for dashboard -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 38 | **Column Level Lineage** - Column lineage for dashboard -> dashboardDataModel | Column lineage for dashboard -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 39 | **Column Level Lineage** - Column lineage for dashboard -> searchIndex | Column lineage for dashboard -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 40 | **Column Level Lineage** - Column lineage for dashboard -> mlModel | Column lineage for dashboard -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 41 | **Column Level Lineage** - Column lineage for dashboardDataModel -> table | Column lineage for dashboardDataModel -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 42 | **Column Level Lineage** - Column lineage for dashboardDataModel -> container | Column lineage for dashboardDataModel -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 43 | **Column Level Lineage** - Column lineage for dashboardDataModel -> topic | Column lineage for dashboardDataModel -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 44 | **Column Level Lineage** - Column lineage for dashboardDataModel -> apiEndpoint | Column lineage for dashboardDataModel -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 45 | **Column Level Lineage** - Column lineage for dashboardDataModel -> dashboard | Column lineage for dashboardDataModel -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 46 | **Column Level Lineage** - Column lineage for dashboardDataModel -> dashboardDataModel | Column lineage for dashboardDataModel -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 47 | **Column Level Lineage** - Column lineage for dashboardDataModel -> searchIndex | Column lineage for dashboardDataModel -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 48 | **Column Level Lineage** - Column lineage for dashboardDataModel -> mlModel | Column lineage for dashboardDataModel -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 49 | **Column Level Lineage** - Column lineage for searchIndex -> table | Column lineage for searchIndex -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 50 | **Column Level Lineage** - Column lineage for searchIndex -> container | Column lineage for searchIndex -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 51 | **Column Level Lineage** - Column lineage for searchIndex -> topic | Column lineage for searchIndex -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 52 | **Column Level Lineage** - Column lineage for searchIndex -> apiEndpoint | Column lineage for searchIndex -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 53 | **Column Level Lineage** - Column lineage for searchIndex -> dashboard | Column lineage for searchIndex -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 54 | **Column Level Lineage** - Column lineage for searchIndex -> dashboardDataModel | Column lineage for searchIndex -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 55 | **Column Level Lineage** - Column lineage for searchIndex -> searchIndex | Column lineage for searchIndex -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 56 | **Column Level Lineage** - Column lineage for searchIndex -> mlModel | Column lineage for searchIndex -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 57 | **Column Level Lineage** - Column lineage for mlModel -> table | Column lineage for mlModel -> table |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 58 | **Column Level Lineage** - Column lineage for mlModel -> container | Column lineage for mlModel -> container |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 59 | **Column Level Lineage** - Column lineage for mlModel -> topic | Column lineage for mlModel -> topic |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 60 | **Column Level Lineage** - Column lineage for mlModel -> apiEndpoint | Column lineage for mlModel -> apiEndpoint |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 61 | **Column Level Lineage** - Column lineage for mlModel -> dashboard | Column lineage for mlModel -> dashboard |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 62 | **Column Level Lineage** - Column lineage for mlModel -> dashboardDataModel | Column lineage for mlModel -> dashboardDataModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 63 | **Column Level Lineage** - Column lineage for mlModel -> searchIndex | Column lineage for mlModel -> searchIndex |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 64 | **Column Level Lineage** - Column lineage for mlModel -> mlModel | Column lineage for mlModel -> mlModel |
| | ↳ *Add column lineage* | |
| | ↳ *Column lineage export as CSV* | |
| | ↳ *Verify nodes in Platform Lineage* | |
| | ↳ *Remove column lineage* | |
| 65 | **Column Level Lineage** - Verify column layer is applied on entering edit mode | Column layer is applied on entering edit mode |
| | ↳ *Verify column layer is inactive initially* | |
| | ↳ *Enter edit mode and verify column layer is active* | |
| 66 | **Column Level Lineage** - Verify there is no traced nodes and columns on exiting edit mode | There is no traced nodes and columns on exiting edit mode |
| | ↳ *Verify node tracing is cleared on exiting edit mode* | |
| | ↳ *Verify column tracing is cleared on exiting edit mode* | |

### Temp lineage table nodes

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Temp lineage table nodes** - should render temp lineage table nodes on canvas | Render temp lineage table nodes on canvas |

### Lineage Settings modal

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Lineage Settings modal** - Verify opening config modal | Opening config modal |
| 2 | **Lineage Settings modal** - Verify updating depth configuration | Updating depth configuration |
| 3 | **Lineage Settings modal** - Verify validation for invalid depth | Validation for invalid depth |

</details>

<details open>
<summary>📄 <b>ImpactAnalysis.spec.ts</b> (23 tests, 23 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ImpactAnalysis.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ImpactAnalysis.spec.ts)

### Impact Analysis

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Impact Analysis** - validate upstream/ downstream counts | Validate upstream/ downstream counts |
| 2 | **Impact Analysis** - Verify impact analysis requests include entityType and explicit depth bounds | Impact analysis requests include entityType and explicit depth bounds |
| 3 | **Impact Analysis** - Verify Downstream connections | Downstream connections |
| 4 | **Impact Analysis** - Verify Upstream connections | Upstream connections |
| 5 | **Impact Analysis** - verify owner filter for Asset level impact analysis | Owner filter for Asset level impact analysis |
| 6 | **Impact Analysis** - verify domain for Asset level impact analysis | Domain for Asset level impact analysis |
| 7 | **Impact Analysis** - verify tier for Asset level impact analysis | Tier for Asset level impact analysis |
| 8 | **Impact Analysis** - Verify upstream/downstream counts for column level | Upstream/downstream counts for column level |
| 9 | **Impact Analysis** - Verify column mode switches direction with directional lineage requests | Column mode switches direction with directional lineage requests |
| 10 | **Impact Analysis** - Verify column level downstream connections | Column level downstream connections |
| 11 | **Impact Analysis** - Verify column level upstream connections | Column level upstream connections |
| 12 | **Impact Analysis** - Verify entity popover card appears on asset hover in lineage-card-table | Entity popover card appears on asset hover in lineage-card-table |
| 13 | **Impact Analysis** - Verify search functionality filters table results | Search functionality filters table results |
| 14 | **Impact Analysis** - Verify depth configuration changes impact analysis results | Depth configuration changes impact analysis results |
| 15 | **Impact Analysis** - Verify service type filter for Asset level impact analysis | Service type filter for Asset level impact analysis |
| 16 | **Impact Analysis** - Verify tag filter for column level impact analysis | Tag filter for column level impact analysis |
| 17 | **Impact Analysis** - Verify column search in column level impact analysis | Column search in column level impact analysis |
| 18 | **Impact Analysis** - Verify switching between table and column level clears filters | Switching between table and column level clears filters |
| 19 | **Impact Analysis** - Verify node depth display in table level impact analysis | Node depth display in table level impact analysis |
| 20 | **Impact Analysis** - Verify glossary term filter for column level impact analysis | Glossary term filter for column level impact analysis |
| 21 | **Impact Analysis** - Verify table columns visibility and content | Table columns visibility and content |
| 22 | **Impact Analysis** - Verify column level table has correct columns | Column level table has correct columns |
| 23 | **Impact Analysis** - Verify upstream downstream toggle persists pagination | Upstream downstream toggle persists pagination |

</details>

<details open>
<summary>📄 <b>LineageRightPanel.spec.ts</b> (17 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageRightPanel.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageRightPanel.spec.ts)

### Verify custom properties tab visibility logic for supported entity types lineage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: table | Custom properties tab IS visible for supported type: table |
| 2 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: topic | Custom properties tab IS visible for supported type: topic |
| 3 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: dashboard | Custom properties tab IS visible for supported type: dashboard |
| 4 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: pipeline | Custom properties tab IS visible for supported type: pipeline |
| 5 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: mlmodel | Custom properties tab IS visible for supported type: mlmodel |
| 6 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: container | Custom properties tab IS visible for supported type: container |
| 7 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: searchIndex | Custom properties tab IS visible for supported type: searchIndex |
| 8 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: apiEndpoint | Custom properties tab IS visible for supported type: apiEndpoint |
| 9 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: metric | Custom properties tab IS visible for supported type: metric |
| 10 | **Verify custom properties tab visibility logic for supported entity types lineage** - Verify custom properties tab IS visible for supported type: chart | Custom properties tab IS visible for supported type: chart |

### Verify custom properties tab is NOT visible for unsupported entity types in platform lineage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Verify custom properties tab is NOT visible for unsupported entity types in platform lineage** - Verify custom properties tab is NOT visible for databaseService in platform lineage | Custom properties tab is NOT visible for databaseService in platform lineage |
| 2 | **Verify custom properties tab is NOT visible for unsupported entity types in platform lineage** - Verify custom properties tab is NOT visible for messagingService in platform lineage | Custom properties tab is NOT visible for messagingService in platform lineage |
| 3 | **Verify custom properties tab is NOT visible for unsupported entity types in platform lineage** - Verify custom properties tab is NOT visible for dashboardService in platform lineage | Custom properties tab is NOT visible for dashboardService in platform lineage |
| 4 | **Verify custom properties tab is NOT visible for unsupported entity types in platform lineage** - Verify custom properties tab is NOT visible for pipelineService in platform lineage | Custom properties tab is NOT visible for pipelineService in platform lineage |
| 5 | **Verify custom properties tab is NOT visible for unsupported entity types in platform lineage** - Verify custom properties tab is NOT visible for mlmodelService in platform lineage | Custom properties tab is NOT visible for mlmodelService in platform lineage |
| 6 | **Verify custom properties tab is NOT visible for unsupported entity types in platform lineage** - Verify custom properties tab is NOT visible for storageService in platform lineage | Custom properties tab is NOT visible for storageService in platform lineage |
| 7 | **Verify custom properties tab is NOT visible for unsupported entity types in platform lineage** - Verify custom properties tab is NOT visible for apiService in platform lineage | Custom properties tab is NOT visible for apiService in platform lineage |

</details>

<details open>
<summary>📄 <b>LineageFilters.spec.ts</b> (15 tests, 19 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageFilters.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageFilters.spec.ts)

### Lineage Filters

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Lineage Filters** - Verify Domains filter for Lineage | Domains filter for Lineage |
| | ↳ *Verify filters working for Lineage tab* | |
| | ↳ *Verify filters working for Impact Analysis tab* | |
| 2 | **Lineage Filters** - Verify Owners filter for Lineage | Owners filter for Lineage |
| | ↳ *Verify filters working for Lineage tab* | |
| | ↳ *Verify filters working for Impact Analysis tab* | |
| 3 | **Lineage Filters** - Verify Tag filter for Lineage | Tag filter for Lineage |
| | ↳ *Verify filters working for Lineage tab* | |
| | ↳ *Verify filters working for Impact Analysis tab* | |
| 4 | **Lineage Filters** - Verify Tier filter for Lineage | Tier filter for Lineage |
| | ↳ *Verify filters working for Lineage tab* | |
| | ↳ *Verify filters working for Impact Analysis tab* | |
| 5 | **Lineage Filters** - Verify lineage filter panel toggle | Lineage filter panel toggle |
| 6 | **Lineage Filters** - Verify Impact Analysis service filter selection | Impact Analysis service filter selection |
| | ↳ *Select service for ${...}* | |
| 7 | **Lineage Filters** - Verify lineage service filter selection | Lineage service filter selection |
| | ↳ *Select service for ${...}* | |
| 8 | **Lineage Filters** - Verify Impact Analysis service type filter selection | Impact Analysis service type filter selection |
| | ↳ *Select service type for ${...}* | |
| 9 | **Lineage Filters** - Verify lineage service type filter selection | Lineage service type filter selection |
| | ↳ *Select service type for ${...}* | |
| 10 | **Lineage Filters** - Verify LineageSearchSelect in lineage mode | LineageSearchSelect in lineage mode |
| 11 | **Lineage Filters** - Verify lineage database filter selection | Lineage database filter selection |
| 12 | **Lineage Filters** - Verify lineage schema filter selection | Lineage schema filter selection |
| 13 | **Lineage Filters** - Verify lineage column filter selection | Lineage column filter selection |
| 14 | **Lineage Filters** - verify downstream count for all the entities | Downstream count for all the entities |
| 15 | **Lineage Filters** - verify upstream count for all the entities | Upstream count for all the entities |

</details>

<details open>
<summary>📄 <b>LineageInteraction.spec.ts</b> (15 tests, 18 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageInteraction.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageInteraction.spec.ts)

### Lineage Interactions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Lineage Interactions** - Verify cycle lineage should be handled properly | Cycle lineage should be handled properly |
| 2 | **Lineage Interactions** - Verify multiple non-platform layers can be active simultaneously | Multiple non-platform layers can be active simultaneously |
| 3 | **Lineage Interactions** - Verify edge click opens edge drawer | Edge click opens edge drawer |
| 4 | **Lineage Interactions** - Verify edge delete button in drawer | Edge delete button in drawer |
| 5 | **Lineage Interactions** - Verify function data in edge drawer | Function data in edge drawer |
| 6 | **Lineage Interactions** - Node edge tracing state responds to column selection and pane click | Node edge tracing state responds to column selection and pane click |
| | ↳ *1. Create 2 tables and column level lineage between them* | |
| | ↳ *2. Edge is in default state before any selection* | |
| | ↳ *3. Selecting a column activates tracing on the node edge* | |
| | ↳ *4. Clicking the pane clears the tracing and restores the default state* | |
| 7 | **Lineage Interactions** - Verify node panel opens on click | Node panel opens on click |
| 8 | **Lineage Interactions** - Verify node full path is present as breadcrumb in lineage node | Node full path is present as breadcrumb in lineage node |
| 9 | **Lineage Interactions** - highlights traced node-to-node edges when a node is selected | Highlights traced node-to-node edges when a node is selected |
| 10 | **Lineage Interactions** - hides column-to-column edges when a node is selected | Hides column-to-column edges when a node is selected |
| 11 | **Lineage Interactions** - grays out non-traced node-to-node edges when a node is selected | Grays out non-traced node-to-node edges when a node is selected |
| 12 | **Lineage Interactions** - highlights traced column-to-column edges when a column is selected | Highlights traced column-to-column edges when a column is selected |
| 13 | **Lineage Interactions** - hides non-traced column-to-column edges when a column is selected | Hides non-traced column-to-column edges when a column is selected |
| 14 | **Lineage Interactions** - grays out node-to-node edges when a column is selected | Grays out node-to-node edges when a column is selected |
| 15 | **Lineage Interactions** - Verify edit mode with edge operations | Edit mode with edge operations |

</details>

<details open>
<summary>📄 <b>LineageControls.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageControls.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageControls.spec.ts)

### Canvas Controls

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Canvas Controls** - Verify zoom in and zoom out controls | Zoom in and zoom out controls |
| 2 | **Canvas Controls** - Verify fit view options menu | Fit view options menu |
| 3 | **Canvas Controls** - Verify minimap toggle functionality | Minimap toggle functionality |
| 4 | **Canvas Controls** - Verify fullscreen toggle | Fullscreen toggle |

### Lineage Layers

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Lineage Layers** - Verify DQ layer toggle activation | DQ layer toggle activation |
| 2 | **Lineage Layers** - Verify DQ layer toggle off removes highlights | DQ layer toggle off removes highlights |
| 3 | **Lineage Layers** - Verify invalid entity search handling | Invalid entity search handling |
| 4 | **Lineage Layers** - Verify lineage tab with no lineage data | Lineage tab with no lineage data |

</details>

<details open>
<summary>📄 <b>LineageNodePagination.spec.ts</b> (5 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageNodePagination.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Lineage/LineageNodePagination.spec.ts)

### Test pagination in column level lineage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test pagination in column level lineage** - Verify column visibility across pagination pages | Column visibility across pagination pages |
| | ↳ *Verify T1-P1: C1-C10 visible, C10-C21 hidden* | |
| | ↳ *Verify T2-P1: C1-C10 visible, C10-C22 hidden* | |
| | ↳ *Navigate to T1-P2 and verify visibility* | |
| | ↳ *Navigate to T2-P2 and verify visibility* | |
| | ↳ *Navigate to T1-P3 and verify visibility* | |
| | ↳ *Navigate to T2-P3 and verify visibility* | |
| 2 | **Test pagination in column level lineage** - Verify edges when no column is hovered or selected | Edges when no column is hovered or selected |
| | ↳ *Verify T1-P1 and T2-P1: Only (T1,C1)-(T2,C1), (T1,C2)-(T2,C2), (T1,C3)-(T2,C3) edges visible* | |
| | ↳ *Navigate to T2-P2 and verify (T1,C1)-(T2,C6), (T1,C2)-(T2,C7), (T1,C4)-(T2,C8), (T1,C5)-(T2,C8) edges visible* | |
| | ↳ *Navigate to T1-P2 and verify (T1,C6)-(T2,C6), (T1,C7)-(T2,C7), (T1,C9)-(T2,C8) edges visible* | |
| 3 | **Test pagination in column level lineage** - Verify columns and edges when a column is hovered | Columns and edges when a column is hovered |
| | ↳ *Hover on (T1,C1) and verify highlighted columns and edges* | |
| 4 | **Test pagination in column level lineage** - Verify columns and edges when a column is clicked | Columns and edges when a column is clicked |
| | ↳ *Navigate to T1-P2 and T2-P2, click (T2,C6) and verify highlighted columns and edges* | |
| 5 | **Test pagination in column level lineage** - Verify edges for column level lineage between 2 nodes when filter is toggled | Edges for column level lineage between 2 nodes when filter is toggled |
| | ↳ *1. Verify edges visible and hidden for page1 of both the tables* | |
| | ↳ *3. Enable the filter for table1 by clicking filter button* | |
| | ↳ *4. Verify that only columns with lineage are visible in table1* | |
| | ↳ *5. Enable the filter for table2 by clicking filter button* | |
| | ↳ *6. Verify that only columns with lineage are visible in table2* | |
| | ↳ *7. Verify new edges are now visible.* | |

</details>

<details open>
<summary>📄 <b>LineagePipelineAnnotator.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/LineagePipelineAnnotator.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/LineagePipelineAnnotator.spec.ts)

### Lineage Pipeline Annotator

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Lineage Pipeline Annotator** - entity lineage does not include service nodes | Entity lineage does not include service nodes |
| 2 | **Lineage Pipeline Annotator** - entity lineage edge preserves pipeline annotation | Entity lineage edge preserves pipeline annotation |
| 3 | **Lineage Pipeline Annotator** - service lineage has pipeline service connected to both services | Service lineage has pipeline service connected to both services |
| 4 | **Lineage Pipeline Annotator** - database service has pipeline service as downstream in service lineage | Database service has pipeline service as downstream in service lineage |

</details>

<details open>
<summary>📄 <b>PlatformLineage.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Lineage/PlatformLineage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Lineage/PlatformLineage.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Verify table search with special characters as handled | Table search with special characters as handled |
| 2 | Verify service platform view | Service platform view |
| 3 | Verify domain platform view | Domain platform view |
| 4 | Verify platform view switching | Platform view switching |

</details>

<details open>
<summary>📄 <b>LineageExportPNGSnapshot.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/LineageExportPNGSnapshot.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/LineageExportPNGSnapshot.spec.ts)

### Lineage PNG export — snapshot regression

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Lineage PNG export — snapshot regression** - exported PNG includes edge lines between nodes | Exported PNG includes edge lines between nodes |

</details>

<details open>
<summary>📄 <b>PlatformLineage.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/PlatformLineage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/PlatformLineage.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Verify Platform Lineage View | Platform Lineage View |

</details>


---

<div id="users-teams"></div>

## Users & Teams

<details open>
<summary>📄 <b>Users.spec.ts</b> (29 tests, 35 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Users.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Users.spec.ts)

### User with Admin Roles

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User with Admin Roles** - Update own admin details | Update own admin details |
| 2 | **User with Admin Roles** - Create and Delete user | Create and Delete user |
| | ↳ *User is searchable by email* | |
| | ↳ *User shouldn't be allowed to create User with same Email* | |
| 3 | **User with Admin Roles** - Admin is searchable by email | Admin is searchable by email |
| 4 | **User with Admin Roles** - Admin soft & hard delete and restore user | Admin soft & hard delete and restore user |
| 5 | **User with Admin Roles** - Admin soft & hard delete and restore user from profile page | Admin soft & hard delete and restore user from profile page |

### User with Data Consumer Roles

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User with Data Consumer Roles** - Token generation & revocation for Data Consumer | Token generation & revocation for Data Consumer |
| 2 | **User with Data Consumer Roles** - Update token expiration for Data Consumer | Update token expiration for Data Consumer |
| 3 | **User with Data Consumer Roles** - User should have only view permission for glossary and tags for Data Consumer | User should have only view permission for glossary and tags for Data Consumer |
| 4 | **User with Data Consumer Roles** - Operations for settings page for Data Consumer | Operations for settings page for Data Consumer |
| 5 | **User with Data Consumer Roles** - Permissions for table details page for Data Consumer | Permissions for table details page for Data Consumer |
| 6 | **User with Data Consumer Roles** - Update user details for Data Consumer | Update user details for Data Consumer |
| 7 | **User with Data Consumer Roles** - Reset Password for Data Consumer | Reset Password for Data Consumer |

### User with Data Steward Roles

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User with Data Steward Roles** - Update user details for Data Steward | Update user details for Data Steward |
| 2 | **User with Data Steward Roles** - Token generation & revocation for Data Steward | Token generation & revocation for Data Steward |
| 3 | **User with Data Steward Roles** - Update token expiration for Data Steward | Update token expiration for Data Steward |
| 4 | **User with Data Steward Roles** - Operations for settings page for Data Steward | Operations for settings page for Data Steward |
| 5 | **User with Data Steward Roles** - Check permissions for Data Steward | Permissions for Data Steward |
| 6 | **User with Data Steward Roles** - Reset Password for Data Steward | Reset Password for Data Steward |

### User Profile Feed Interactions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User Profile Feed Interactions** - Should navigate to user profile from feed card avatar click | Navigate to user profile from feed card avatar click |
| 2 | **User Profile Feed Interactions** - Close the profile dropdown after redirecting to user profile page | Close the profile dropdown after redirecting to user profile page |

### User Profile Dropdown Persona Interactions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User Profile Dropdown Persona Interactions** - Should display persona dropdown with pagination | Display persona dropdown with pagination |
| 2 | **User Profile Dropdown Persona Interactions** - Should display default persona tag correctly | Display default persona tag correctly |
| 3 | **User Profile Dropdown Persona Interactions** - Should switch personas correctly | Switch personas correctly |
| 4 | **User Profile Dropdown Persona Interactions** - Should handle persona sorting correctly | Handle persona sorting correctly |
| 5 | **User Profile Dropdown Persona Interactions** - Should revert to default persona after page refresh when non-default is selected | Revert to default persona after page refresh when non-default is selected |
| 6 | **User Profile Dropdown Persona Interactions** - Should handle default persona change and removal correctly | Handle default persona change and removal correctly |

### User Profile Persona Interactions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User Profile Persona Interactions** - Should add, remove, and navigate to persona pages for Personas section | Add, remove, and navigate to persona pages for Personas section |
| | ↳ *Navigate to persona page by clicking on persona chip* | |
| | ↳ *Navigate back to user profile* | |
| | ↳ *Remove personas from user profile* | |
| 2 | **User Profile Persona Interactions** - Should add, remove, and navigate to persona pages for Default Persona section | Add, remove, and navigate to persona pages for Default Persona section |
| | ↳ *Add default persona to user profile* | |
| | ↳ *Navigate to persona page by clicking on default persona chip* | |
| | ↳ *Navigate back to user profile* | |
| | ↳ *Remove default persona from user profile* | |

### Users Performance around application with multiple team inheriting roles and policy

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Users Performance around application with multiple team inheriting roles and policy** - User Performance across different entities pages | User Performance across different entities pages |

</details>

<details open>
<summary>📄 <b>Teams.spec.ts</b> (19 tests, 32 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Teams.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Teams.spec.ts)

### Teams Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Teams Page** - Teams Page Flow | Teams Page Flow |
| | ↳ *Create a new team* | |
| | ↳ *Add owner to created team* | |
| | ↳ *Update email of created team* | |
| | ↳ *Add user to created team* | |
| | ↳ *Remove added user from created team* | |
| | ↳ *Join team should work properly* | |
| | ↳ *Update display name for created team* | |
| | ↳ *Update description for created team* | |
| | ↳ *Leave team flow should work properly* | |
| | ↳ *Soft Delete Team* | |
| | ↳ *Hard Delete Team* | |
| 2 | **Teams Page** - Create a new public team | Create a new public team |
| 3 | **Teams Page** - Create a new private team and check if its visible to admin in teams selection dropdown on user profile | Create a new private team and check if its visible to admin in teams selection dropdown on user profile |
| 4 | **Teams Page** - Permanently deleting a team without soft deleting should work properly | Permanently deleting a team without soft deleting should work properly |
| 5 | **Teams Page** - Team search should work properly | Team search should work properly |
| 6 | **Teams Page** - Export team | Export team |
| 7 | **Teams Page** - Team assets should | Team assets should |
| 8 | **Teams Page** - Delete a user from the table | Delete a user from the table |
| 9 | **Teams Page** - Verify breadcrumb navigation for a team with a dot in its name | Breadcrumb navigation for a team with a dot in its name |
| 10 | **Teams Page** - Total User Count should be rendered | Total User Count should be rendered |
| 11 | **Teams Page** - should fetch teams with correct include parameter | Fetch teams with correct include parameter |
| | ↳ *Wait for teams table to be visible* | |
| | ↳ *Toggle Show Deleted and verify include=deleted is sent* | |

### Teams Page with EditUser Permission

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Teams Page with EditUser Permission** - Add and Remove User for Team | Add and Remove User for Team |
| | ↳ *Add user in Team from the placeholder* | |
| | ↳ *Add user in Team for the header manage area* | |
| | ↳ *Remove user from Team* | |

### Teams Page with Data Consumer User

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Teams Page with Data Consumer User** - Should not have edit access on team page with no data available | Not have edit access on team page with no data available |
| 2 | **Teams Page with Data Consumer User** - Should not have edit access on team page with data available | Not have edit access on team page with data available |

### Teams Page action as Owner of Team

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Teams Page action as Owner of Team** - User as not owner should not have edit/create permission on Team | User as not owner should not have edit/create permission on Team |
| 2 | **Teams Page action as Owner of Team** - Add New Team in BusinessUnit Team | Add New Team in BusinessUnit Team |
| 3 | **Teams Page action as Owner of Team** - Add New Team in Department Team | Add New Team in Department Team |
| 4 | **Teams Page action as Owner of Team** - Add New Team in Division Team | Add New Team in Division Team |
| 5 | **Teams Page action as Owner of Team** - Add New User in Group Team | Add New User in Group Team |

</details>

<details open>
<summary>📄 <b>TeamSubscriptions.spec.ts</b> (17 tests, 44 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TeamSubscriptions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TeamSubscriptions.spec.ts)

### Team Subscriptions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Subscriptions** - should display subscription as None when no subscription configured | Display subscription as None when no subscription configured |
| | ↳ *Verify no subscription is configured* | |
| 2 | **Team Subscriptions** - should open and close subscription edit modal | Open and close subscription edit modal |
| | ↳ *Open subscription modal* | |
| | ↳ *Close subscription modal* | |
| 3 | **Team Subscriptions** - should configure MS Teams webhook subscription | Configure MS Teams webhook subscription |
| | ↳ *Open subscription modal and select MS Teams* | |
| | ↳ *Enter endpoint and save* | |
| | ↳ *Verify MS Teams icon is displayed* | |
| 4 | **Team Subscriptions** - should configure Slack webhook subscription | Configure Slack webhook subscription |
| | ↳ *Configure Slack webhook* | |
| | ↳ *Verify Slack icon is displayed* | |
| 5 | **Team Subscriptions** - should configure Google Chat webhook subscription | Configure Google Chat webhook subscription |
| | ↳ *Configure Google Chat webhook* | |
| | ↳ *Verify Google Chat icon is displayed* | |
| 6 | **Team Subscriptions** - should configure Generic webhook subscription | Configure Generic webhook subscription |
| | ↳ *Configure Generic webhook* | |
| | ↳ *Verify Generic webhook icon is displayed* | |
| 7 | **Team Subscriptions** - should validate endpoint URL format | Validate endpoint URL format |
| | ↳ *Open subscription modal and select webhook* | |
| | ↳ *Enter invalid URL and verify error* | |
| | ↳ *Close modal* | |
| 8 | **Team Subscriptions** - should require endpoint when webhook type is selected | Require endpoint when webhook type is selected |
| | ↳ *Open subscription modal and select Slack* | |
| | ↳ *Submit without endpoint and verify error* | |
| | ↳ *Close modal* | |
| 9 | **Team Subscriptions** - should disable endpoint input when webhook type is None | Disable endpoint input when webhook type is None |
| | ↳ *Open subscription modal* | |
| | ↳ *Select Slack and verify endpoint is enabled* | |
| | ↳ *Select None and verify endpoint is disabled* | |
| | ↳ *Close modal* | |
| 10 | **Team Subscriptions** - should update existing subscription to different webhook type | Update existing subscription to different webhook type |
| | ↳ *Configure MS Teams webhook* | |
| | ↳ *Update to Generic webhook* | |
| | ↳ *Verify updated webhook icon* | |
| 11 | **Team Subscriptions** - should remove subscription by setting webhook to None | Remove subscription by setting webhook to None |
| | ↳ *Configure Slack webhook* | |
| | ↳ *Remove subscription by selecting None* | |
| | ↳ *Verify subscription is removed* | |
| 12 | **Team Subscriptions** - should persist subscription after page reload | Persist subscription after page reload |
| | ↳ *Configure Generic webhook* | |
| | ↳ *Reload page and verify persistence* | |
| 13 | **Team Subscriptions** - admin can edit subscriptions for any team | Admin can edit subscriptions for any team |
| | ↳ *Verify admin can see edit button* | |
| | ↳ *Admin can configure all webhook types* | |

### Team Subscriptions - Owner Permission Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Subscriptions - Owner Permission Tests** - team owner can manage subscriptions | Team owner can manage subscriptions |
| | ↳ *Owner can see edit button* | |
| | ↳ *Owner can configure webhook* | |
| | ↳ *Owner can update webhook type* | |
| | ↳ *Owner can remove subscription* | |
| 2 | **Team Subscriptions - Owner Permission Tests** - team member without owner role cannot edit subscriptions | Team member without owner role cannot edit subscriptions |
| | ↳ *Create team with member (non-owner)* | |
| | ↳ *Verify member cannot edit subscriptions* | |
| | ↳ *Cleanup resources* | |

### Team Subscriptions - Data Consumer Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Subscriptions - Data Consumer Tests** - data consumer cannot edit team subscriptions | Data consumer cannot edit team subscriptions |
| | ↳ *Login as data consumer and visit team page* | |
| | ↳ *Verify edit button is not visible* | |
| | ↳ *Verify subscription details are visible (read-only)* | |

### Team Subscriptions - Data Steward Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Subscriptions - Data Steward Tests** - data steward cannot edit team subscriptions | Data steward cannot edit team subscriptions |
| | ↳ *Login as data steward and visit team page* | |
| | ↳ *Verify edit button is not visible* | |

</details>

<details open>
<summary>📄 <b>TeamActivity.spec.ts</b> (10 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/TeamActivity.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/TeamActivity.spec.ts)

### Team Activity - Membership Changes

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Activity - Membership Changes** - team member should see team membership changes in activity feed | Team member should see team membership changes in activity feed |
| 2 | **Team Activity - Membership Changes** - removing team member should create activity | Removing team member should create activity |

### Team Activity - Team Owned Entities

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Activity - Team Owned Entities** - team member should see team-owned entity changes | Team member should see team-owned entity changes |
| 2 | **Team Activity - Team Owned Entities** - non-team member should not see team-only activity | Non-team member should not see team-only activity |

### Team Activity - Tasks Assigned to Team

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Activity - Tasks Assigned to Team** - team member should see tasks assigned to their team | Team member should see tasks assigned to their team |
| 2 | **Team Activity - Tasks Assigned to Team** - different team member should also see team-assigned task | Different team member should also see team-assigned task |
| 3 | **Team Activity - Tasks Assigned to Team** - non-team member should NOT see team-assigned task in their tasks | Non-team member should NOT see team-assigned task in their tasks |
| 4 | **Team Activity - Tasks Assigned to Team** - team member should be able to resolve team-assigned task | Team member should be able to resolve team-assigned task |

### Team Activity - Team Page Feed

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Activity - Team Page Feed** - team page should show activity feed for team | Team page should show activity feed for team |

### Team Activity - Notifications

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Activity - Notifications** - team member should receive notification for team-assigned task | Team member should receive notification for team-assigned task |

</details>

<details open>
<summary>📄 <b>TeamAssetsRightPanel.spec.ts</b> (10 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/TeamAssetsRightPanel.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/TeamAssetsRightPanel.spec.ts)

### Team Details Assets Tab - Right Panel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Team Details Assets Tab - Right Panel** - Should open right panel when clicking asset in team assets tab | Open right panel when clicking asset in team assets tab |
| 2 | **Team Details Assets Tab - Right Panel** - Should display correct tabs for table entity in team assets context | Display correct tabs for table entity in team assets context |
| 3 | **Team Details Assets Tab - Right Panel** - Should edit description from team assets context | Edit description from team assets context |
| 4 | **Team Details Assets Tab - Right Panel** - Should display entity name link in panel header in team assets context | Display entity name link in panel header in team assets context |
| 5 | **Team Details Assets Tab - Right Panel** - Should display overview tab content in team assets context | Display overview tab content in team assets context |
| 6 | **Team Details Assets Tab - Right Panel** - Should edit tags from team assets context | Edit tags from team assets context |
| 7 | **Team Details Assets Tab - Right Panel** - Should assign tier from team assets context | Assign tier from team assets context |
| 8 | **Team Details Assets Tab - Right Panel** - Should edit domain from team assets context | Edit domain from team assets context |
| 9 | **Team Details Assets Tab - Right Panel** - Should edit glossary terms from team assets context | Edit glossary terms from team assets context |
| 10 | **Team Details Assets Tab - Right Panel** - Should edit owners from team assets context | Edit owners from team assets context |

</details>

<details open>
<summary>📄 <b>UserDetails.spec.ts</b> (9 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/UserDetails.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/UserDetails.spec.ts)

### User with different Roles

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User with different Roles** - Admin user can edit teams from the user profile | Admin user can edit teams from the user profile |
| 2 | **User with different Roles** - Create team with domain and verify visibility of inherited domain in user profile after team removal | Create team with domain and verify visibility of inherited domain in user profile after team removal |
| 3 | **User with different Roles** - User can search for a domain | User can search for a domain |
| 4 | **User with different Roles** - Admin user can assign and remove domain from a user | Admin user can assign and remove domain from a user |
| 5 | **User with different Roles** - Subdomain is visible when expanding parent domain in tree | Subdomain is visible when expanding parent domain in tree |
| 6 | **User with different Roles** - Admin user can get all the roles hierarchy and edit roles | Admin user can get all the roles hierarchy and edit roles |
| 7 | **User with different Roles** - Non admin user should be able to edit display name and description on own profile | Non admin user should be able to edit display name and description on own profile |
| 8 | **User with different Roles** - Non admin user should not be able to edit the persona or roles | Non admin user should not be able to edit the persona or roles |
| 9 | **User with different Roles** - My Data Tab - AssetsTabs search functionality | My Data Tab - AssetsTabs search functionality |

</details>

<details open>
<summary>📄 <b>TeamsDragAndDrop.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TeamsDragAndDrop.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TeamsDragAndDrop.spec.ts)

### Teams drag and drop should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Teams drag and drop should work properly** - Add teams in hierarchy | Add teams in hierarchy |
| 2 | **Teams drag and drop should work properly** - Should fail when drop team type is Group | Fail when drop team type is Group |
| 3 | **Teams drag and drop should work properly** - Should fail when droppable team type is Department | Fail when droppable team type is Department |
| 4 | **Teams drag and drop should work properly** - Should fail when draggable team type is BusinessUnit and droppable team type is Division | Fail when draggable team type is BusinessUnit and droppable team type is Division |
| 5 | **Teams drag and drop should work properly** - Should drag and drop on BusinessUnit team type | Drag and drop on BusinessUnit team type |
| 6 | **Teams drag and drop should work properly** - Should drag and drop on Division team type | Drag and drop on Division team type |
| 7 | **Teams drag and drop should work properly** - Should drag and drop on Department team type | Drag and drop on Department team type |
| 8 | **Teams drag and drop should work properly** - Should drag and drop team on table level | Drag and drop team on table level |

</details>

<details open>
<summary>📄 <b>OnlineUsers.spec.ts</b> (7 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OnlineUsers.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OnlineUsers.spec.ts)

### Online Users Feature

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Online Users Feature** - Should show online users under Settings > Members > Online Users for admins | Show online users under Settings > Members > Online Users for admins |
| 2 | **Online Users Feature** - Should update user activity time when user navigates | Update user activity time when user navigates |
| 3 | **Online Users Feature** - Should not show bots in online users list | Not show bots in online users list |
| 4 | **Online Users Feature** - Should filter users by time window | Filter users by time window |
| 5 | **Online Users Feature** - Non-admin users should not see Online Users page | Non-admin users should not see Online Users page |
| 6 | **Online Users Feature** - Should show correct last activity format | Show correct last activity format |
| 7 | **Online Users Feature** - Should show user displayName in online users table | Show user displayName in online users table |
| | ↳ *Visit Explore Page as New User* | |
| | ↳ *Verify Online User as Admin* | |

</details>

<details open>
<summary>📄 <b>UserProfileOnlineStatus.spec.ts</b> (5 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/UserProfileOnlineStatus.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/UserProfileOnlineStatus.spec.ts)

### User Profile Online Status

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User Profile Online Status** - Should show online status badge on user profile for active users | Show online status badge on user profile for active users |
| 2 | **User Profile Online Status** - Should show "Active recently" for users active within last hour | Show "Active recently" for users active within last hour |
| 3 | **User Profile Online Status** - Should not show online status for inactive users | Not show online status for inactive users |
| 4 | **User Profile Online Status** - Should show online status below email in user profile card | Show online status below email in user profile card |
| 5 | **User Profile Online Status** - Should update online status in real-time when user becomes active | Update online status in real-time when user becomes active |

</details>

<details open>
<summary>📄 <b>TeamsHierarchy.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TeamsHierarchy.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TeamsHierarchy.spec.ts)

### Add Nested Teams and Test TeamsSelectable

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add Nested Teams and Test TeamsSelectable** - Add teams in hierarchy | Add teams in hierarchy |
| 2 | **Add Nested Teams and Test TeamsSelectable** - Check hierarchy in Add User page | Hierarchy in Add User page |
| 3 | **Add Nested Teams and Test TeamsSelectable** - Delete Parent Team | Delete Parent Team |
| | ↳ *Deleted team is no longer searchable* | |

</details>

<details open>
<summary>📄 <b>PersonaDeletionUserProfile.spec.ts</b> (1 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/PersonaDeletionUserProfile.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/PersonaDeletionUserProfile.spec.ts)

### User profile works after persona deletion

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **User profile works after persona deletion** - User profile loads correctly before and after persona deletion | User profile loads correctly before and after persona deletion |
| | ↳ *Verify persona with user* | |
| | ↳ *Verify persona appears on user profile* | |
| | ↳ *Delete the persona* | |
| | ↳ *Verify user profile still loads after persona deletion* | |

</details>

<details open>
<summary>📄 <b>UsersPagination.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/UsersPagination.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/UsersPagination.spec.ts)

### Soft Delete User Pagination

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Soft Delete User Pagination** - Testing user API calls and pagination | Testing user API calls and pagination |

</details>

<details open>
<summary>📄 <b>UserCreationWithPersona.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/UserCreationWithPersona.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/UserCreationWithPersona.spec.ts)

### Create user with persona

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Create user with persona** - Create user with persona and verify on profile | Create user with persona and verify on profile |

</details>


---

<div id="rbac"></div>

## RBAC

<details open>
<summary>📄 <b>SearchRBAC.spec.ts</b> (29 tests, 29 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/SearchRBAC.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/SearchRBAC.spec.ts)

### API Endpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **API Endpoint** - User with permission | User with permission |
| 2 | **API Endpoint** - User without permission | User without permission |

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - User with permission | User with permission |
| 2 | **Table** - User without permission | User without permission |

### Stored Procedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Stored Procedure** - User with permission | User with permission |
| 2 | **Stored Procedure** - User without permission | User without permission |

### Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard** - User with permission | User with permission |
| 2 | **Dashboard** - User without permission | User without permission |

### Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline** - User with permission | User with permission |
| 2 | **Pipeline** - User without permission | User without permission |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - User with permission | User with permission |
| 2 | **Topic** - User without permission | User without permission |

### ML Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ML Model** - User with permission | User with permission |
| 2 | **ML Model** - User without permission | User without permission |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - User with permission | User with permission |
| 2 | **Container** - User without permission | User without permission |

### Search Index

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Index** - User with permission | User with permission |
| 2 | **Search Index** - User without permission | User without permission |

### Dashboard Data Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard Data Model** - User with permission | User with permission |
| 2 | **Dashboard Data Model** - User without permission | User without permission |

### Metric

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric** - User with permission | User with permission |
| 2 | **Metric** - User without permission | User without permission |

### Table Column

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Column** - User with permission | User with permission |
| 2 | **Table Column** - User without permission | User without permission |

### Explore browse respects search RBAC across users

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore browse respects search RBAC across users** - a user permitted on all asset types browses both | A user permitted on all asset types browses both |
| 2 | **Explore browse respects search RBAC across users** - a table-scoped user sees tables but never dashboards | A table-scoped user sees tables but never dashboards |
| 3 | **Explore browse respects search RBAC across users** - a dashboard-scoped user sees dashboards but never tables | A dashboard-scoped user sees dashboards but never tables |
| 4 | **Explore browse respects search RBAC across users** - a fully denied user sees neither asset type when browsing | A fully denied user sees neither asset type when browsing |
| 5 | **Explore browse respects search RBAC across users** - the browse tree only shows the asset-type categories a user can access | The browse tree only shows the asset-type categories a user can access |

</details>

<details open>
<summary>📄 <b>AddRoleAndAssignToUser.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/AddRoleAndAssignToUser.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/AddRoleAndAssignToUser.spec.ts)

### Add role and assign it to the user

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add role and assign it to the user** - Create role | Create role |
| 2 | **Add role and assign it to the user** - Create new user and assign new role to him | Create new user and assign new role to him |
| 3 | **Add role and assign it to the user** - Verify assigned role to new user | Assigned role to new user |

</details>

<details open>
<summary>📄 <b>Policies.spec.ts</b> (3 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Policies.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Policies.spec.ts)

### Policy page should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Policy page should work properly** - Add new policy with invalid condition | Add new policy with invalid condition |
| | ↳ *Default Policies and Roles should be displayed* | |
| | ↳ *Add new policy* | |
| | ↳ *Edit policy description* | |
| | ↳ *Edit policy display name* | |
| | ↳ *Add new rule* | |
| | ↳ *Edit rule name for created Rule* | |
| | ↳ *Delete new rule* | |
| | ↳ *Delete last rule and validate* | |
| | ↳ *Delete created policy* | |
| 2 | **Policy page should work properly** - Policy should have associated rules and teams | Policy should have associated rules and teams |
| 3 | **Policy page should work properly** - Delete policy action from manage button options | Delete policy action from manage button options |

</details>

<details open>
<summary>📄 <b>Roles.spec.ts</b> (2 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Roles.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Roles.spec.ts)

### Roles page tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Roles page tests** - Roles page should work properly | Roles page should work properly |
| | ↳ *Add new role and check all tabs data* | |
| | ↳ *Add new role without selecting data* | |
| | ↳ *Edit created role* | |
| | ↳ *Edit role display name* | |
| | ↳ *Add new policy to created role* | |
| | ↳ *Remove added policy from created role* | |
| | ↳ *Check if last policy is not removed* | |
| | ↳ *Delete created Role* | |
| 2 | **Roles page tests** - Delete role action from manage button options | Delete role action from manage button options |

</details>


---

<div id="onboarding"></div>

## Onboarding

<details open>
<summary>📄 <b>Tour.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/Tour.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/Tour.spec.ts)

### Tour should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Tour should work properly** - Tour should work from help section | Tour should work from help section |
| 2 | **Tour should work properly** - Tour should work from welcome screen | Tour should work from welcome screen |
| 3 | **Tour should work properly** - Tour should work from URL directly | Tour should work from URL directly |

</details>


---

<div id="app-marketplace"></div>

## App Marketplace

<details open>
<summary>📄 <b>DataInsightReportApplication.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/DataInsightReportApplication.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/DataInsightReportApplication.spec.ts)

### Data Insight Report Application

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Insight Report Application** - Install application | Install application |
| 2 | **Data Insight Report Application** - Edit application | Edit application |
| 3 | **Data Insight Report Application** - Run application | Run application |
| 4 | **Data Insight Report Application** - Uninstall application | Uninstall application |

</details>

<details open>
<summary>📄 <b>SearchIndexApplication.spec.ts</b> (1 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/SearchIndexApplication.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/SearchIndexApplication.spec.ts)

### Search Index Application

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Index Application** - Search Index Application | Search Index Application |
| | ↳ *Visit Application page* | |
| | ↳ *Verify last execution run* | |
| | ↳ *View App Run Config* | |
| | ↳ *Edit application* | |
| | ↳ *Uninstall application* | |
| | ↳ *Install application* | |
| | ↳ *Run application and rerun with table-only config* | |

</details>


---

<div id="authentication"></div>

## Authentication

<details open>
<summary>📄 <b>Login.spec.ts</b> (5 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/Login.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/Login.spec.ts)

### Login flow should work properly

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Login flow should work properly** - Signup and Login with signed up credentials | Signup and Login with signed up credentials |
| 2 | **Login flow should work properly** - Signin using invalid credentials | Signin using invalid credentials |
| 3 | **Login flow should work properly** - Forgot password and login with new password | Forgot password and login with new password |
| 4 | **Login flow should work properly** - Refresh should work | Refresh should work |
| | ↳ *Login and wait for refresh call is made* | |
| 5 | **Login flow should work properly** - accessing app with expired token should do auto renew token | Accessing app with expired token should do auto renew token |

</details>

<details open>
<summary>📄 <b>LoginConfiguration.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/LoginConfiguration.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/LoginConfiguration.spec.ts)

### Login configuration

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Login configuration** - update login configuration should work | Update login configuration should work |
| 2 | **Login configuration** - reset login configuration should work | Reset login configuration should work |

</details>


---

