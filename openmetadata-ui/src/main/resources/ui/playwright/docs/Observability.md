[🏠 Home](./README.md) > **Observability**

# Observability

> **7 Components** | **35 Files** | **207 Tests** | **431 Scenarios** 🚀

## Table of Contents
- [Data Quality](#data-quality)
- [Incident Manager](#incident-manager)
- [Profiler](#profiler)
- [Test Library](#test-library)
- [Rules Library](#rules-library)
- [Alerts & Notifications](#alerts-notifications)
- [Logs Viewer](#logs-viewer)

---

<div id="data-quality"></div>

## Data Quality

<details open>
<summary>📄 <b>DataQualityPermissions.spec.ts</b> (25 tests, 25 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/DataQualityPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/DataQualityPermissions.spec.ts)

### Observability Permission Coverage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Observability Permission Coverage** - Data Consumer cannot create or delete test cases | Data Consumer cannot create or delete test cases |
| 2 | **Observability Permission Coverage** - Data Consumer can VIEW test cases but sees no edit controls in UI | Data Consumer can VIEW test cases but sees no edit controls in UI |
| 3 | **Observability Permission Coverage** - Data Steward cannot create or delete test cases (default) | Data Steward cannot create or delete test cases (default) |
| 4 | **Observability Permission Coverage** - Data Consumer cannot create or delete test suites | Data Consumer cannot create or delete test suites |
| 5 | **Observability Permission Coverage** - Data Consumer cannot edit test case | Data Consumer cannot edit test case |
| 6 | **Observability Permission Coverage** - User with TEST_CASE.CREATE cannot delete test cases | User with TEST_CASE.CREATE cannot delete test cases |
| 7 | **Observability Permission Coverage** - User with TEST_CASE.DELETE cannot create test cases | User with TEST_CASE.DELETE cannot create test cases |
| 8 | **Observability Permission Coverage** - User with TEST_CASE.VIEW_BASIC cannot edit test cases | User with TEST_CASE.VIEW_BASIC cannot edit test cases |
| 9 | **Observability Permission Coverage** - User without TEST_SUITE.CREATE cannot create test suites | User without TEST_SUITE.CREATE cannot create test suites |
| 10 | **Observability Permission Coverage** - User without TEST_SUITE.DELETE cannot delete test suites | User without TEST_SUITE.DELETE cannot delete test suites |
| 11 | **Observability Permission Coverage** - User without TEST_SUITE.EDIT cannot add test case to logical suite | User without TEST_SUITE.EDIT cannot add test case to logical suite |
| 12 | **Observability Permission Coverage** - User with TEST_CASE.CREATE can see Add button for test case | User with TEST_CASE.CREATE can see Add button for test case |
| 13 | **Observability Permission Coverage** - User with TEST_CASE.DELETE can see delete option for test case | User with TEST_CASE.DELETE can see delete option for test case |
| 14 | **Observability Permission Coverage** - User with TABLE.CREATE_TESTS can see Add button (Table Permission) | User with TABLE.CREATE_TESTS can see Add button (Table Permission) |
| 15 | **Observability Permission Coverage** - User with TEST_CASE.EDIT_ALL can see edit action on test case | User with TEST_CASE.EDIT_ALL can see edit action on test case |
| 16 | **Observability Permission Coverage** - User with TABLE.EDIT_TESTS can see edit action on test case | User with TABLE.EDIT_TESTS can see edit action on test case |
| 17 | **Observability Permission Coverage** - User with VIEW_BASIC cannot see edit action in UI | User with VIEW_BASIC cannot see edit action in UI |
| 18 | **Observability Permission Coverage** - User with TEST_CASE.VIEW_BASIC can view test case in UI | User with TEST_CASE.VIEW_BASIC can view test case in UI |
| 19 | **Observability Permission Coverage** - User with TEST_CASE.VIEW_BASIC can view test case CONTENT details in UI | User with TEST_CASE.VIEW_BASIC can view test case CONTENT details in UI |
| 20 | **Observability Permission Coverage** - User with TEST_SUITE.CREATE can see Add test suite button | User with TEST_SUITE.CREATE can see Add test suite button |
| 21 | **Observability Permission Coverage** - User with TEST_SUITE.VIEW_ALL can view test suites page and list suites | User with TEST_SUITE.VIEW_ALL can view test suites page and list suites |
| 22 | **Observability Permission Coverage** - User with TEST_SUITE.VIEW_ALL can view test suite CONTENT but cannot add test case | User with TEST_SUITE.VIEW_ALL can view test suite CONTENT but cannot add test case |
| 23 | **Observability Permission Coverage** - User with TEST_SUITE.EDIT_ALL can see add test case button on suite details | User with TEST_SUITE.EDIT_ALL can see add test case button on suite details |
| 24 | **Observability Permission Coverage** - User with TABLE.VIEW_TESTS can view test suites page (alternative permission) | User with TABLE.VIEW_TESTS can view test suites page (alternative permission) |
| 25 | **Observability Permission Coverage** - Admin can see Data Quality UI controls (add test case, add test suite) | Admin can see Data Quality UI controls (add test case, add test suite) |

</details>

<details open>
<summary>📄 <b>TestCaseImportExportBasic.spec.ts</b> (24 tests, 30 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseImportExportBasic.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseImportExportBasic.spec.ts)

### Test Case Bulk Import/Export - Admin User

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Case Bulk Import/Export - Admin User** - should export test cases from Data Quality tab | Test Case Description: Verify that test cases can be exported from the Data Quality tab on the Table details page. The export should trigger a download of a CSV file. |
| 2 | **Test Case Bulk Import/Export - Admin User** - should navigate to import page from Data Quality tab | Test Case Description: Verify navigation to the Import page from the Data Quality tab on the Table details page. |
| 3 | **Test Case Bulk Import/Export - Admin User** - should export all test cases from global data quality page | Test Case Description: Verify that all test cases can be exported from the Global Data Quality page. The export should trigger a download of a CSV file. |
| 4 | **Test Case Bulk Import/Export - Admin User** - should navigate to import page from global data quality page | Test Case Description: Verify navigation to the Import page from the Global Data Quality page. |
| 5 | **Test Case Bulk Import/Export - Admin User** - should upload and validate CSV file | Test Case Description: Verify that a valid CSV file can be uploaded and validated successfully. 1. Create a temporary valid CSV file 2. Upload the file 3. Validate the grid and import status |
| | ↳ *Navigate to Import Page* | |
| | ↳ *Upload CSV and Validate Grid* | |
| | ↳ *Verify Import Status* | |
| 6 | **Test Case Bulk Import/Export - Admin User** - should show validation errors for invalid CSV | Test Case Description: Verify that an invalid CSV file triggers appropriate validation errors. 1. Create a temporary invalid CSV file (e.g. missing headers) 2. Upload the file 3. Verify error messages are displayed |
| | ↳ *Navigate to Import Page* | |
| | ↳ *Upload Invalid CSV and Verify Errors* | |

### Test Case Import/Export/Edits - Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Case Import/Export/Edits - Permissions** - Data Consumer should see export but not import & edit options | Test Case Description: Verify that Data Consumer role has restricted access. Should only see Export option, but not Import or Bulk Edit. |
| | ↳ *Verify Table Level Access* | |
| | ↳ *Verify Global Level Access* | |
| 2 | **Test Case Import/Export/Edits - Permissions** - Data Consumer can successfully export test cases | Test Case Description: Verify that Data Consumer can successfully export test cases. |
| 3 | **Test Case Import/Export/Edits - Permissions** - Data Consumer should be blocked from import page | Test Case Description: Verify that Data Consumer is blocked from accessing the Import page directly via URL. |
| 4 | **Test Case Import/Export/Edits - Permissions** - Data Consumer should be blocked from bulk edit page | Test Case Description: Verify that Data Consumer is blocked from accessing the Bulk Edit page directly via URL. |
| 5 | **Test Case Import/Export/Edits - Permissions** - Data Steward should see export but not import & edit options | Test Case Description: Verify that Data Steward role has restricted access. Should only see Export option, but not Import or Bulk Edit. |
| | ↳ *Verify Table Level Access* | |
| | ↳ *Verify Global Level Access* | |
| 6 | **Test Case Import/Export/Edits - Permissions** - Data Steward can successfully export test cases | Test Case Description: Verify that Data Steward can successfully export test cases. |
| 7 | **Test Case Import/Export/Edits - Permissions** - Data Steward should be blocked from import page | Test Case Description: Verify that Data Steward is blocked from accessing the Import page directly via URL. |
| 8 | **Test Case Import/Export/Edits - Permissions** - Data Steward should be blocked from bulk edit page | Test Case Description: Verify that Data Steward is blocked from accessing the Bulk Edit page directly via URL. |
| 9 | **Test Case Import/Export/Edits - Permissions** - User with EditAll & ViewAll on TEST_CASE resource should see import, export & edit options | Test Case Description: Verify that a User with specific EditAll and ViewAll permissions on TestCase resource can see all options: Export, Import, and Bulk Edit. |
| | ↳ *Verify Table Level Access* | |
| | ↳ *Verify Global Level Access* | |
| 10 | **Test Case Import/Export/Edits - Permissions** - User with ViewAll on TEST_CASE resource can successfully export test cases | Test Case Description: Verify that a User with ViewAll on TEST_CASE resource can successfully export test cases. |
| 11 | **Test Case Import/Export/Edits - Permissions** - User with EditAll on TEST_CASE resource should not be blocked from import page | Test Case Description: Verify that a User with EditAll on TEST_CASE resource is ALLOWED to access the Import page. |
| 12 | **Test Case Import/Export/Edits - Permissions** - User with EditAll on TEST_CASE resource should not be blocked from bulk edit page | Test Case Description: Verify that a User with EditAll on TEST_CASE resource is ALLOWED from the Bulk Edit page. (Bulk Edit requires specific bulk edit permissions or higher level access, not just EditAll on resource) |

### Test Case Bulk Edit - Cancel Redirect

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Case Bulk Edit - Cancel Redirect** - should redirect to Data Quality page when canceling global bulk edit | Test Case Description: Verify that canceling a global bulk edit action redirects the user back to the global Data Quality page. |
| 2 | **Test Case Bulk Edit - Cancel Redirect** - should redirect to Table Data Quality tab when canceling table-level bulk edit | Test Case Description: Verify that canceling a table-level bulk edit action redirects the user back to the Table's Data Quality tab. |

### Logical Test Suite - Bulk Import/Export/Edit Operations

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Logical Test Suite - Bulk Import/Export/Edit Operations** - should export test cases from Logical Test Suite page | Test Case Description: Verify that test cases can be exported from a Logical Test Suite details page. |
| 2 | **Logical Test Suite - Bulk Import/Export/Edit Operations** - should navigate to import page from Logical Test Suite page | Test Case Description: Verify navigation to Import page from Logical Test Suite details page. |
| 3 | **Logical Test Suite - Bulk Import/Export/Edit Operations** - should navigate to bulk edit page from Logical Test Suite page | Test Case Description: Verify navigation to Bulk Edit page from Logical Test Suite details page. |
| 4 | **Logical Test Suite - Bulk Import/Export/Edit Operations** - should redirect to Test Suite page when canceling bulk edit | Test Case Description: Verify that canceling bulk edit from Logical Test Suite redirects back to Test Suite page. |

</details>

<details open>
<summary>📄 <b>ColumnLevelTests.spec.ts</b> (16 tests, 48 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/ColumnLevelTests.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/ColumnLevelTests.spec.ts)

### Column Level Data Quality Test Cases

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Column Level Data Quality Test Cases** - Column Values To Be Not Null | Column Values To Be Not Null test case  Creates a column-level `columnValuesToBeNotNull` test for a numeric column with description; verifies, edits display name and description, and deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and description; submit; verify visibility in Data Quality tab. 3. Edit display name and description; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 2 | **Column Level Data Quality Test Cases** - Column Values To Be Between | Column Values To Be Between test case  Creates a `columnValuesToBeBetween` test for a numeric column with min and max values; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max values; submit; verify visibility in Data Quality tab. 3. Edit min/max values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 3 | **Column Level Data Quality Test Cases** - Column Values To Be Unique | Column Values To Be Unique test case  Creates a `columnValuesToBeUnique` test for a column to verify all values are unique; verifies visibility in the Data Quality tab, edits display name, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name; submit; verify visibility in Data Quality tab. 3. Edit display name; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 4 | **Column Level Data Quality Test Cases** - Column Values To Be In Set | Column Values To Be In Set test case  Creates a `columnValuesToBeInSet` test to verify column values are within allowed set; verifies visibility in the Data Quality tab, edits the allowed values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and allowed values array; submit; verify visibility in Data Quality tab. 3. Edit allowed values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 5 | **Column Level Data Quality Test Cases** - Column Values To Be Not In Set | Column Values To Be Not In Set test case  Creates a `columnValuesToBeNotInSet` test to verify column values are NOT in forbidden set; verifies visibility in the Data Quality tab, edits the forbidden values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and forbidden values array; submit; verify visibility in Data Quality tab. 3. Edit forbidden values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 6 | **Column Level Data Quality Test Cases** - Column Values To Match Regex | Column Values To Match Regex test case  Creates a `columnValuesToMatchRegex` test to verify column values match a regex pattern; verifies visibility in the Data Quality tab, edits the regex pattern, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and regex pattern; submit; verify visibility in Data Quality tab. 3. Edit regex pattern; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 7 | **Column Level Data Quality Test Cases** - Column Values To Not Match Regex | Column Values To Not Match Regex test case  Creates a `columnValuesToNotMatchRegex` test to verify column values do NOT match a regex pattern; verifies visibility in the Data Quality tab, edits the regex pattern, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and regex pattern; submit; verify visibility in Data Quality tab. 3. Edit regex pattern; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 8 | **Column Level Data Quality Test Cases** - Column Value Max To Be Between | Column Value Max To Be Between test case  Creates a `columnValueMaxToBeBetween` test to verify maximum value in column is between range; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max for max value; submit; verify visibility in Data Quality tab. 3. Edit range values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 9 | **Column Level Data Quality Test Cases** - Column Value Min To Be Between | Column Value Min To Be Between test case  Creates a `columnValueMinToBeBetween` test to verify minimum value in column is between range; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max for min value; submit; verify visibility in Data Quality tab. 3. Edit range values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 10 | **Column Level Data Quality Test Cases** - Column Value Mean To Be Between | Column Value Mean To Be Between test case  Creates a `columnValueMeanToBeBetween` test to verify mean value of column is between range; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max for mean value; submit; verify visibility in Data Quality tab. 3. Edit range values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 11 | **Column Level Data Quality Test Cases** - Column Value Median To Be Between | Column Value Median To Be Between test case  Creates a `columnValueMedianToBeBetween` test to verify median value of column is between range; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max for median value; submit; verify visibility in Data Quality tab. 3. Edit range values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 12 | **Column Level Data Quality Test Cases** - Column Value StdDev To Be Between | Column Value StdDev To Be Between test case  Creates a `columnValueStdDevToBeBetween` test to verify standard deviation of column is between range; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max for std dev value; submit; verify visibility in Data Quality tab. 3. Edit range values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 13 | **Column Level Data Quality Test Cases** - Column Values Sum To Be Between | Column Values Sum To Be Between test case  Creates a `columnValuesSumToBeBetween` test to verify sum of column values is between range; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max for sum value; submit; verify visibility in Data Quality tab. 3. Edit range values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 14 | **Column Level Data Quality Test Cases** - Column Values Length To Be Between | Column Values Length To Be Between test case  Creates a `columnValuesLengthToBeBetween` test to verify string lengths in column are between range; verifies visibility in the Data Quality tab, edits the range values, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and min/max length values; submit; verify visibility in Data Quality tab. 3. Edit range values; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 15 | **Column Level Data Quality Test Cases** - Column Values Missing Count To Be Equal | Column Values Missing Count To Be Equal test case  Creates a `columnValuesMissingCount` test to verify missing/null count equals expected value; verifies visibility in the Data Quality tab, edits the missing count value, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name and missing count value; submit; verify visibility in Data Quality tab. 3. Edit missing count value; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 16 | **Column Level Data Quality Test Cases** - Column Value To Be At Expected Location | Column Value To Be At Expected Location test case  Creates a `columnValuesToBeAtExpectedLocation` test to verify a value at a specific row location; verifies visibility in the Data Quality tab, edits the expected value and row, and finally deletes the test case. Steps 1. From entity page, open create test case (Column Level), select column and definition. 2. Fill name, expected value, and row number; submit; verify visibility in Data Quality tab. 3. Edit expected value and row number; delete the test case. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |

</details>

<details open>
<summary>📄 <b>DataQualityDashboard.spec.ts</b> (11 tests, 42 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/DataQualityDashboard.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/DataQualityDashboard.spec.ts)

### Data Quality Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Quality Dashboard** - DataQualityDashboardTab | DataQualityDashboardTab |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Filter by Owner and verify all API responses succeed* | |
| | ↳ *Filter by Tier and verify all API responses succeed* | |
| | ↳ *Filter by Tag and verify all API responses succeed* | |
| | ↳ *Filter by Glossary Term and verify all API responses succeed* | |
| | ↳ *Filter by Data Product and verify all API responses succeed* | |
| | ↳ *Verify New incident for Consistency test case on table3 DQ tab* | |
| | ↳ *Verify Resolved incident chip for Uniqueness test case on table4 DQ tab* | |
| | ↳ *Filter by Certification and verify Uniqueness widget shows 1 Failed test case* | |
| 2 | **Data Quality Dashboard** - Reopen resolved incident in place from the Test Case page | Reopen resolved incident in place from the Test Case page |
| | ↳ *Open the resolved test case from the DQ tab* | |
| | ↳ *Test Case page shows the resolved incident with its edit affordance* | |
| | ↳ *Reopen the incident as Acknowledged from the header* | |
| 3 | **Data Quality Dashboard** - Dashboard batches all report aggregations into one request (no N+1) | Dashboard batches all report aggregations into one request (no N+1) |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Widgets coalesce into batch POST(s) with no per-widget GET fan-out* | |
| 4 | **Data Quality Dashboard** - Tier filter sends tier.tagFQN field in ES query (not tags.tagFQN) | Tier filter sends tier.tagFQN field in ES query (not tags.tagFQN) |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Apply Tier filter* | |
| | ↳ *Verify ES query uses tier.tagFQN field (not tags.tagFQN)* | |
| 5 | **Data Quality Dashboard** - Tag filter sends tags.tagFQN field in ES query | Tag filter sends tags.tagFQN field in ES query |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Apply Tag filter* | |
| | ↳ *Verify ES query uses tags.tagFQN field* | |
| 6 | **Data Quality Dashboard** - Tier and Tag filters produce independent ES filter clauses | Tier and Tag filters produce independent ES filter clauses |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Apply Tier filter* | |
| | ↳ *Apply Tag filter* | |
| | ↳ *Verify tier and tag appear in separate must clauses* | |
| 7 | **Data Quality Dashboard** - Dimension card click should redirect to test cases with applied filters | Dimension card click should redirect to test cases with applied filters |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Click ${...} dimension card and verify redirect* | |
| 8 | **Data Quality Dashboard** - Entity Health pie chart segment click redirects to Test Cases with correct status | Entity Health pie chart segment click redirects to Test Cases with correct status |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Click failed segment and verify redirect to failed test cases* | |
| 9 | **Data Quality Dashboard** - Test Case Result pie chart segment click redirects to Test Cases with correct status | Case Result pie chart segment click redirects to Test Cases with correct status |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Click success segment and verify redirect* | |
| | ↳ *Navigate back to Data Quality dashboard* | |
| | ↳ *Click failed segment and verify redirect* | |
| | ↳ *Navigate back to Data Quality dashboard* | |
| | ↳ *Click aborted segment and verify redirect* | |
| 10 | **Data Quality Dashboard** - Data Assets Coverage pie chart segment click redirects to Test Suites and Explore | Data Assets Coverage pie chart segment click redirects to Test Suites and Explore |
| | ↳ *Navigate to Data Quality dashboard* | |
| | ↳ *Click covered segment and verify redirect to Test Suites* | |
| | ↳ *Navigate back to Data Quality dashboard* | |
| | ↳ *Click not covered segment and verify redirect to Explore* | |
| 11 | **Data Quality Dashboard** - Test Cases list filter — Data Product | Cases list filter — Data Product |
| | ↳ *Navigate to DQ Test Cases tab* | |
| | ↳ *Add Data Product advanced filter* | |
| | ↳ *Select data product and verify API carries dataProductFqn* | |
| | ↳ *Remove Data Product filter* | |

</details>

<details open>
<summary>📄 <b>TestCaseResultPermissions.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseResultPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseResultPermissions.spec.ts)

### TestCaseResult Permission Coverage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **TestCaseResult Permission Coverage** - User with TEST_CASE.VIEW_ALL can view test case and results in UI | User with TEST_CASE.VIEW_ALL can view test case and results in UI |
| 2 | **TestCaseResult Permission Coverage** - User with TEST_CASE.VIEW_ALL can view test RESULT CONTENT in UI | User with TEST_CASE.VIEW_ALL can view test RESULT CONTENT in UI |
| 3 | **TestCaseResult Permission Coverage** - User with TABLE.VIEW_TESTS can view test case and results in UI (alternative) | User with TABLE.VIEW_TESTS can view test case and results in UI (alternative) |
| 4 | **TestCaseResult Permission Coverage** - User with only TABLE.EDIT_TESTS (no TEST_CASE.VIEW_ALL) can still view results in UI via TABLE.VIEW_TESTS | User with only TABLE.EDIT_TESTS (no TEST_CASE.VIEW_ALL) can still view results in UI via TABLE.VIEW_TESTS |
| 5 | **TestCaseResult Permission Coverage** - User with TEST_CASE.EDIT_ALL can see edit action on test case | User with TEST_CASE.EDIT_ALL can see edit action on test case |
| 6 | **TestCaseResult Permission Coverage** - User with TABLE.EDIT_TESTS can see edit action on test case (alternative) | User with TABLE.EDIT_TESTS can see edit action on test case (alternative) |
| 7 | **TestCaseResult Permission Coverage** - User with TABLE.DELETE + TEST_CASE.DELETE can see delete option for test case | User with TABLE.DELETE + TEST_CASE.DELETE can see delete option for test case |
| 8 | **TestCaseResult Permission Coverage** - User with only VIEW cannot see edit action and cannot POST results | User with only VIEW cannot see edit action and cannot POST results |
| 9 | **TestCaseResult Permission Coverage** - User with only VIEW cannot PATCH results | User with only VIEW cannot PATCH results |
| 10 | **TestCaseResult Permission Coverage** - User with only TEST_CASE.DELETE (no TABLE.DELETE) cannot DELETE results | User with only TEST_CASE.DELETE (no TABLE.DELETE) cannot DELETE results |
| 11 | **TestCaseResult Permission Coverage** - User with only TABLE.DELETE (no TEST_CASE.DELETE) cannot DELETE results | User with only TABLE.DELETE (no TEST_CASE.DELETE) cannot DELETE results |

</details>

<details open>
<summary>📄 <b>TableLevelTests.spec.ts</b> (9 tests, 27 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TableLevelTests.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TableLevelTests.spec.ts)

### Table Level Data Quality Test Cases

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Level Data Quality Test Cases** - Table Row Count To Be Between | Table Row Count To Be Between test case  Creates a `tableRowCountToBeBetween` test with min and max row count values; verifies visibility in the Data Quality tab, edits the threshold values, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableRowCountToBeBetween`, set min and max values. 3. Submit and verify in Data Quality tab; then edit threshold values; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 2 | **Table Level Data Quality Test Cases** - Table Row Count To Equal | Table Row Count To Equal test case  Creates a `tableRowCountToEqual` test with an exact row count value; verifies visibility in the Data Quality tab, edits the value, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableRowCountToEqual`, set exact row count value. 3. Submit and verify in Data Quality tab; then edit the value; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 3 | **Table Level Data Quality Test Cases** - Table Column Count To Be Between | Table Column Count To Be Between test case  Creates a `tableColumnCountToBeBetween` test with min and max column count values; verifies visibility in the Data Quality tab, edits the threshold values, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableColumnCountToBeBetween`, set min and max values. 3. Submit and verify in Data Quality tab; then edit threshold values; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 4 | **Table Level Data Quality Test Cases** - Table Column Count To Equal | Table Column Count To Equal test case  Creates a `tableColumnCountToEqual` test with an exact column count value; verifies visibility in the Data Quality tab, edits the value, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableColumnCountToEqual`, set exact column count value. 3. Submit and verify in Data Quality tab; then edit the value; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 5 | **Table Level Data Quality Test Cases** - Table Column Name To Exist | Table Column Name To Exist test case  Creates a `tableColumnNameToExist` test to verify a column exists; verifies visibility in the Data Quality tab, edits the column name, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableColumnNameToExist`, set column name. 3. Submit and verify in Data Quality tab; then edit the column name; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 6 | **Table Level Data Quality Test Cases** - Table Column To Match Set | Table Column To Match Set test case  Creates a `tableColumnToMatchSet` test to verify columns match expected set; verifies visibility in the Data Quality tab, edits the column names, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableColumnToMatchSet`, set column names array. 3. Submit and verify in Data Quality tab; then edit the column names; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 7 | **Table Level Data Quality Test Cases** - Table Difference | Table Difference test case  Creates a `tableDiff` test by selecting a second table, setting key columns, use columns, and threshold; verifies visibility in the Data Quality tab, edits to add more columns, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableDiff`, pick Table 2 and its key columns; define Table 1 key/use columns and threshold. 3. Submit and verify in Data Quality tab; then edit to add additional key/use columns; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 8 | **Table Level Data Quality Test Cases** - Custom SQL Query | Custom SQL Query test case  Creates a `tableCustomSQLQuery` test with SQL in CodeMirror, selects strategy and threshold; verifies, edits display name, SQL and strategy, updates threshold, and deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select `tableCustomSQLQuery`, input SQL, choose strategy (ROWS/COUNT), set threshold. 3. Submit and verify in Data Quality tab; then edit display name, SQL and strategy; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |
| 9 | **Table Level Data Quality Test Cases** - Table Row Inserted Count To Be Between | Table Row Inserted Count To Be Between test case  Creates a `tableRowInsertedCountToBeBetween` test with min and max inserted row count values; verifies visibility in the Data Quality tab, edits the threshold values, and finally deletes the test case. Steps 1. Navigate to entity → Data Observability → Table Profile. 2. Open Test Case form, select type `tableRowInsertedCountToBeBetween`, set min and max values. 3. Submit and verify in Data Quality tab; then edit threshold values; delete at the end. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Delete* | |

</details>

<details open>
<summary>📄 <b>TestCaseIncidentPermissions.spec.ts</b> (8 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseIncidentPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseIncidentPermissions.spec.ts)

### TestCaseIncidentStatus Permission Coverage

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **TestCaseIncidentStatus Permission Coverage** - User with TEST_CASE.VIEW_ALL can view incidents in UI | User with TEST_CASE.VIEW_ALL can view incidents in UI |
| 2 | **TestCaseIncidentStatus Permission Coverage** - User with TEST_CASE.VIEW_ALL can view incident CONTENT in UI | User with TEST_CASE.VIEW_ALL can view incident CONTENT in UI |
| 3 | **TestCaseIncidentStatus Permission Coverage** - User with TABLE.VIEW_TESTS can view incidents in UI (alternative) | User with TABLE.VIEW_TESTS can view incidents in UI (alternative) |
| 4 | **TestCaseIncidentStatus Permission Coverage** - User with TEST_CASE.EDIT_ALL can see edit icon on incidents | User with TEST_CASE.EDIT_ALL can see edit icon on incidents |
| 5 | **TestCaseIncidentStatus Permission Coverage** - User with TABLE.EDIT_TESTS can see edit icon on incidents (alternative) | User with TABLE.EDIT_TESTS can see edit icon on incidents (alternative) |
| 6 | **TestCaseIncidentStatus Permission Coverage** - User with only VIEW cannot see edit icon and cannot POST incidents | User with only VIEW cannot see edit icon and cannot POST incidents |
| 7 | **TestCaseIncidentStatus Permission Coverage** - User with only VIEW cannot PATCH incidents | User with only VIEW cannot PATCH incidents |
| 8 | **TestCaseIncidentStatus Permission Coverage** - Consumer-like user cannot see edit icon and cannot create/edit incidents | Consumer-like user cannot see edit icon and cannot create/edit incidents |

</details>

<details open>
<summary>📄 <b>DataQuality.spec.ts</b> (6 tests, 18 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/DataQuality.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/DataQuality.spec.ts)

### Data Quality

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Quality** - Table test case | Table test case  Creates, edits, and deletes a table-level test case with tags and glossary terms. Verifies incident breadcrumb navigation and test case property changes. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Redirect to IncidentPage and verify breadcrumb* | |
| | ↳ *Delete* | |
| 2 | **Data Quality** - Column test case | Column test case  Creates, edits, and deletes a column-level test case with tags and glossary terms. Validates parameter changes and property persistence. |
| | ↳ *Create* | |
| | ↳ *Edit* | |
| | ↳ *Redirect to IncidentPage and verify breadcrumb* | |
| | ↳ *Delete* | |
| 3 | **Data Quality** - TestCase with Array params value | TestCase with Array params value |
| | ↳ *Array params value should be visible while editing the test case* | |
| | ↳ *Validate patch request for edit test case* | |
| | ↳ *Update test case display name from Data Quality page* | |
| 4 | **Data Quality** - TestCase filters | TestCase filters |
| 5 | **Data Quality** - Pagination functionality in test cases list | Pagination functionality in test cases list |
| | ↳ *Verify pagination controls are visible* | |
| | ↳ *Verify first page state* | |
| | ↳ *Navigate to next page* | |
| | ↳ *Navigate back to previous page* | |
| | ↳ *Test page size dropdown* | |
| 6 | **Data Quality** - Editing display name does not emit a phantom tags patch op | Editing display name does not emit a phantom tags patch op |

</details>

<details open>
<summary>📄 <b>AddTestCaseNewFlow.spec.ts</b> (4 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/AddTestCaseNewFlow.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/AddTestCaseNewFlow.spec.ts)

### Add TestCase New Flow

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Add TestCase New Flow** - Add Table Test Case | Tests creating a table-level test case  Creates a table-row-count Equals test case from the Data Quality page and verifies the test entity and associated pipeline visibility. Steps 1. Open the test case form and select a table via indexed search. 2. Fill the test name, select "table row count to equal", set params, and submit. 3. Assert that TestSuite pipeline creation call occurs and the created test case is visible on the entity page. |
| | ↳ *Create table-level test case* | |
| | ↳ *Validate test case in Entity Page* | |
| 2 | **Add TestCase New Flow** - Add Column Test Case | Tests creating a column-level test case  Creates a Column Values To Be Unique test case from the Data Quality page and validates the created test entity and test suite pipeline. Steps 1. Open the test case form, switch to Column Level, select table and a column. 2. Fill test metadata and submit the form. 3. Verify the created test displays on the entity page and pipeline tab shows the TestSuite pipeline. |
| | ↳ *Create column-level test case* | |
| | ↳ *Validate test case in Entity Page* | |
| 3 | **Add TestCase New Flow** - Add multiple test case from table details page and validate pipeline | Tests bulk creation from entity page and pipeline validation  Adds a table-level and a column-level test case from the table details page and verifies test counts and the TestSuite pipeline, including edit navigation. Steps 1. From the table details page, add a table-level test case. 2. Add a column-level test case (scheduler card hidden; verify no pipeline POST). 3. Assert test count is 2 and pipeline count is 1; open pipeline list and navigate to edit. |
| 4 | **Add TestCase New Flow** - Non-owner user should not able to add test case | Tests permission enforcement for non-owner roles  Validates that Data Consumer and Data Steward roles cannot create test cases and see the correct form validation message. Steps 1. As Data Consumer and Data Steward, open the create test case form. 2. Select a table and attempt to submit. 3. Verify the form helper shows lack-of-permission message and creation is blocked. |

</details>

<details open>
<summary>📄 <b>TestCaseImportExportE2eFlow.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseImportExportE2eFlow.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseImportExportE2eFlow.spec.ts)

### Test Case Import/Export/Edit - End-to-End Flow with Admin

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Case Import/Export/Edit - End-to-End Flow with Admin** - Admin: Complete export-import-validate flow | Test Case Description: 1. Export test cases to download folder 2. Import CSV with new rows (Complete, Missing Name, Missing Definition, Missing EntityFQN) 3. Validate import status and error messages 4. Update and verify successful creation 5. Verify Bulk Edit capabilities (Display Name, Tags) |

### Test Case Import/Export/Edit - End-to-End Flow with EditAll User on TestCase resource

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Case Import/Export/Edit - End-to-End Flow with EditAll User on TestCase resource** - EditAll User: Complete export-import-validate flow | Test Case Description: 1. Export test cases to download folder 2. Import CSV with new rows (Complete, Missing Name, Missing Definition, Missing EntityFQN) 3. Validate import status and error messages 4. Update and verify successful creation 5. Verify Bulk Edit capabilities (Display Name, Tags) |

</details>

<details open>
<summary>📄 <b>FailedTestCaseSampleData.spec.ts</b> (2 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/FailedTestCaseSampleData.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/FailedTestCaseSampleData.spec.ts)

### Failed rows sample fetch gating

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Failed rows sample fetch gating** - gates the sample fetch on failed status | Gates the sample fetch on failed status |
| | ↳ *passing test case does not request the failed-rows sample* | |
| | ↳ *failed test case without a sample gets a 404 and shows no error toast* | |

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | FailedTestCaseSampleData | FailedTestCaseSampleData |
| | ↳ *Highlight the failed test case sample data* | |
| | ↳ *Delete sample data* | |

</details>

<details open>
<summary>📄 <b>TestSuiteMultiPipeline.spec.ts</b> (2 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TestSuiteMultiPipeline.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TestSuiteMultiPipeline.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | TestSuite multi pipeline support | Create, update, and delete a TestSuite pipeline from the entity page  Creates a test case, configures and deploys a weekly TestSuite pipeline, updates the schedule, and finally deletes pipelines to validate the empty state and action CTA visibility. |
| | ↳ *Create a new pipeline* | |
| | ↳ *Verify test case count column displays correct values* | |
| | ↳ *Update the pipeline* | |
| | ↳ *Delete the pipeline* | |
| 2 | Edit the pipeline's test case | Edit the pipeline's test cases  Creates multiple test cases and a TestSuite pipeline, edits the pipeline to unselect a test case, deploys the change, and verifies the persisted selection on re-open. |

</details>

<details open>
<summary>📄 <b>TestSuite.spec.ts</b> (2 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/TestSuite.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/TestSuite.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Test suite tab switching keeps active bundle suite data after stale table suite response | Suite tab switching keeps active bundle suite data after stale table suite response |
| 2 | Logical TestSuite | Logical TestSuite |
| | ↳ *Open create test suite form* | |
| | ↳ *Verify add test case modal filter dropdowns are visible* | |
| | ↳ *Filter by Test Type Table and wait for API* | |
| | ↳ *Filter by Status Success and wait for API* | |
| | ↳ *Filter by Table and wait for API* | |
| | ↳ *Filter by Column and wait for API* | |
| | ↳ *Reset Test Type to All and clear filters, wait for API* | |
| | ↳ *Select all then unselect all test cases* | |
| | ↳ *Select test case and create suite* | |
| | ↳ *Domain Add, Update and Remove* | |
| | ↳ *User as Owner assign, update & delete for test suite* | |
| | ↳ *Add test case to logical test suite by owner* | |
| | ↳ *Add test suite pipeline* | |
| | ↳ *Remove test case from logical test suite by owner* | |
| | ↳ *Test suite filters* | |
| | ↳ *Delete test suite by owner* | |

</details>

<details open>
<summary>📄 <b>Dimensionality.spec.ts</b> (1 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/Dimensionality.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/Dimensionality.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Dimensionality Tests | Dimensionality Tests  Creates a dimension-level test case, edits dimension columns, and validates the dimension selector in the details view. |
| | ↳ *Add dimensionality test case* | |
| | ↳ *Edit dimensionality from entity page* | |
| | ↳ *Details page should show updated dimensions* | |

</details>

<details open>
<summary>📄 <b>TableTestCasePagination.spec.ts</b> (1 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TableTestCasePagination.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TableTestCasePagination.spec.ts)

### Table Data Quality tab pagination

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Data Quality tab pagination** - renders pagination and navigates when test cases exceed the page size | Renders pagination and navigates when test cases exceed the page size |
| | ↳ *Pagination control is visible on the Data Quality tab* | |
| | ↳ *Next page fetches data and updates the page indicator* | |

</details>

<details open>
<summary>📄 <b>TestCaseStatusAfterReindex.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseStatusAfterReindex.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestCaseStatusAfterReindex.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Test case status survives a full entity reindex | Case status survives a full entity reindex |

</details>

<details open>
<summary>📄 <b>TestSuiteListAfterReindex.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestSuiteListAfterReindex.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestSuiteListAfterReindex.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Basic test suite stays listed on the table-suites page after a full reindex | Basic test suite stays listed on the table-suites page after a full reindex |

</details>

<details open>
<summary>📄 <b>TestSuiteSummaryAfterReindex.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestSuiteSummaryAfterReindex.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestSuiteSummaryAfterReindex.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Test suite lastResultTimestamp survives a full entity reindex | Suite lastResultTimestamp survives a full entity reindex |

</details>

<details open>
<summary>📄 <b>TestSuitePipelineRedeploy.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TestSuitePipelineRedeploy.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TestSuitePipelineRedeploy.spec.ts)

### Bulk Re-Deploy pipelines 

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Bulk Re-Deploy pipelines ** - Re-deploy all test-suite ingestion pipelines | Re-deploy all TestSuite ingestion pipelines  Navigates to Data Observability settings, selects multiple pipelines, triggers bulk redeploy, and verifies success confirmation. |

</details>

<details open>
<summary>📄 <b>TestSuiteDetailsPage.spec.ts</b> (1 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/TestSuiteDetailsPage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/TestSuiteDetailsPage.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Add test case modal on Test Suite details page - filters and select | Add test case modal on Test Suite details page - filters and select |
| | ↳ *Create logical test suite* | |
| | ↳ *Open Add test case modal on details page* | |
| | ↳ *Verify add test case modal filter dropdowns are visible* | |
| | ↳ *Filter by Test Type Table and wait for API* | |
| | ↳ *Filter by Status Success and wait for API* | |
| | ↳ *Filter by Table and wait for API* | |
| | ↳ *Filter by Column and wait for API* | |
| | ↳ *Reset Test Type to All and clear filters, wait for API* | |
| | ↳ *Select all then unselect all test cases in modal* | |
| | ↳ *Select test case in modal then cancel* | |

</details>

<details open>
<summary>📄 <b>TestCaseVersionPage.spec.ts</b> (1 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/VersionPages/TestCaseVersionPage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/VersionPages/TestCaseVersionPage.spec.ts)

### TestCase Version Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **TestCase Version Page** - should show the test case version page | View and verify Test Case version changes  Opens the Test Case details, performs sequential edits, and verifies version bumps with diffs. |
| | ↳ *Display name change* | |
| | ↳ *Description change* | |
| | ↳ *Parameter change* | |

</details>


---

<div id="incident-manager"></div>

## Incident Manager

<details open>
<summary>📄 <b>IncidentManagerDateFilter.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/IncidentManagerDateFilter.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/IncidentManagerDateFilter.spec.ts)

### Incident Manager Date Filter

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Incident Manager Date Filter** - Date picker shows placeholder when no date is selected | Date picker shows placeholder when no date is selected |
| 2 | **Incident Manager Date Filter** - Select preset date range | Select preset date range |
| 3 | **Incident Manager Date Filter** - Clear selected date range | Clear selected date range |
| 4 | **Incident Manager Date Filter** - Date filter persists on page reload | Date filter persists on page reload |

### Incident Manager - Date Field Sort Dropdown

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Incident Manager - Date Field Sort Dropdown** - should show "Created At" as the default sort field label | Show "Created At" as the default sort field label |
| 2 | **Incident Manager - Date Field Sort Dropdown** - should open sort field dropdown on click | Open sort field dropdown on click |
| 3 | **Incident Manager - Date Field Sort Dropdown** - should switch to "Updated At" and call API with dateField=updatedAt | Switch to "Updated At" and call API with dateField=updatedAt |
| 4 | **Incident Manager - Date Field Sort Dropdown** - should switch back to "Created at" and call API with dateField=timestamp | Switch back to "Created at" and call API with dateField=timestamp |
| 5 | **Incident Manager - Date Field Sort Dropdown** - should close sort dropdown after selecting an option | Close sort dropdown after selecting an option |

### Incident Manager Date Filter - Sidebar

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Incident Manager Date Filter - Sidebar** - Date picker shows placeholder by default on Incident Manager page | Date picker shows placeholder by default on Incident Manager page |
| 2 | **Incident Manager Date Filter - Sidebar** - Select and clear date range on Incident Manager page | Select and clear date range on Incident Manager page |

</details>

<details open>
<summary>📄 <b>IncidentManager.spec.ts</b> (5 tests, 18 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/IncidentManager.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/IncidentManager.spec.ts)

### Incident Manager

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Incident Manager** - Complete Incident lifecycle with table owner | Complete incident lifecycle with table owner  Claims table ownership, acknowledges a failed test case, assigns and reassigns the incident, validates notifications for mentions, and resolves the incident. |
| | ↳ *Claim ownership of table* | |
| | ↳ *Acknowledge table test case's failure* | |
| | ↳ *Assign incident to user* | |
| | ↳ *Re-assign incident to user* | |
| | ↳ *Verify that incident mentions are created for the incident manager* | |
| | ↳ *Re-assign incident from test case page's header* | |
| | ↳ *Resolve incident* | |
| 2 | **Incident Manager** - Resolving incident & re-run pipeline | Resolve incident and rerun pipeline  Resolves a failed incident from the list page, confirms closed status, and reruns the TestSuite pipeline to re-evaluate incident state. |
| | ↳ *Acknowledge table test case's failure* | |
| | ↳ *Resolve task from incident list page* | |
| | ↳ *Task should be closed* | |
| | ↳ *Re-run pipeline* | |
| | ↳ *Verify open and closed task* | |
| 3 | **Incident Manager** - Rerunning pipeline for an open incident | Rerun pipeline for open incident  Acknowledges and assigns an open incident, reruns pipeline, and validates status reflects Assigned. |
| | ↳ *Ack incident and verify open task* | |
| | ↳ *Assign incident to user* | |
| | ↳ *Re-run pipeline* | |
| | ↳ *Verify incident's status on DQ page* | |
| 4 | **Incident Manager** - Validate Incident Tab in Entity details page | Validate Incident tab in entity page  Verifies incidents list within entity details, lineage incident counts, and navigation back to tab. |
| 5 | **Incident Manager** - Verify filters in Incident Manager's page | Verify filters in Incident Manager page  Tests Assignee, Status, Test Case, and Date filters and confirms list updates accordingly. |

</details>

<details open>
<summary>📄 <b>IncidentManagerPagination.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/IncidentManagerPagination.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/IncidentManagerPagination.spec.ts)

### Incident Manager pagination

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Incident Manager pagination** - Next, Previous and page indicator | Next, Previous and page indicator |
| 2 | **Incident Manager pagination** - Page size dropdown updates list limit and resets to page 1 | Page size dropdown updates list limit and resets to page 1 |

</details>

<details open>
<summary>📄 <b>IncidentManagerAfterOwnerChange.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/IncidentManagerAfterOwnerChange.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/IncidentManagerAfterOwnerChange.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Incident Manager renders after a test case owner change | Incident Manager renders after a test case owner change |

</details>

<details open>
<summary>📄 <b>IncidentManagerAfterSoftDelete.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/IncidentManagerAfterSoftDelete.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/IncidentManagerAfterSoftDelete.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Incident Manager renders without Jackson error after a test case is soft-deleted | Incident Manager renders without Jackson error after a test case is soft-deleted |

</details>


---

<div id="profiler"></div>

## Profiler

<details open>
<summary>📄 <b>ProfilerIngestionForm.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/ProfilerIngestionForm.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/ProfilerIngestionForm.spec.ts)

### Profiler ingestion form — profile sample config

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Profiler ingestion form — profile sample config** - STATIC config sends profileSample and no DYNAMIC-only keys | STATIC config sends profileSample and no DYNAMIC-only keys |
| 2 | **Profiler ingestion form — profile sample config** - STATIC config sends all three static-only fields when set | STATIC config sends all three static-only fields when set |
| 3 | **Profiler ingestion form — profile sample config** - DYNAMIC with smart sampling ON sends only DYNAMIC keys | DYNAMIC with smart sampling ON sends only DYNAMIC keys |
| 4 | **Profiler ingestion form — profile sample config** - DYNAMIC with smart sampling OFF and thresholds sends thresholds array | DYNAMIC with smart sampling OFF and thresholds sends thresholds array |
| 5 | **Profiler ingestion form — profile sample config** - DYNAMIC threshold remove drops only the selected row | DYNAMIC threshold remove drops only the selected row |
| 6 | **Profiler ingestion form — profile sample config** - **switching DYNAMIC** → STATIC does not leak smartSampling or thresholds | Switching DYNAMIC → STATIC does not leak smartSampling or thresholds |
| 7 | **Profiler ingestion form — profile sample config** - **switching STATIC** → DYNAMIC does not leak static-only fields | Switching STATIC → DYNAMIC does not leak static-only fields |

</details>

<details open>
<summary>📄 <b>Profiler.spec.ts</b> (4 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/Profiler.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/Profiler.spec.ts)

### Profiler Role Access Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Profiler Role Access Tests** - Admin role can access profiler and view test case graphs | Admin role profiler access  Verifies that admin users can access profiler data, view table/column profiles, and see test case graphs. |
| 2 | **Profiler Role Access Tests** - Data consumer role can access profiler and view test case graphs | Data consumer role profiler access  Verifies that data consumer users can access profiler data, view table/column profiles, and see test case graphs. |
| 3 | **Profiler Role Access Tests** - Data steward role can access profiler and view test case graphs | Data steward role profiler access  Verifies that data steward users can access profiler data, view table/column profiles, and see test case graphs. |
| 4 | **Profiler Role Access Tests** - Update profiler setting modal | Update profiler setting modal  Tests profiler configuration updates including profile sample, exclude/include columns, partition settings, and validates settings persistence and reset functionality. |
| | ↳ *Update profiler setting* | |
| | ↳ *Reset profile sample type* | |

</details>

<details open>
<summary>📄 <b>ProfilerConfigurationPage.spec.ts</b> (3 tests, 8 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ProfilerConfigurationPage.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ProfilerConfigurationPage.spec.ts)

### Profiler Configuration Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Profiler Configuration Page** - Admin user | Admin user profiler configuration  Validates form validation, profiler config creation, updates, and removal for admin users. Verifies metric selection, data type filtering, and API interactions. |
| | ↳ *Verify validation* | |
| | ↳ *Update profiler configuration* | |
| | ↳ *Remove Configuration* | |
| 2 | **Profiler Configuration Page** - Sample Data Ingestion Configuration | Sample Data Ingestion Configuration  Validates the sample data config section: toggle rendering, default state, and the "store enables read" auto-toggle behavior. |
| | ↳ *Verify sample data config section renders* | |
| | ↳ *Toggling store ON auto-enables read* | |
| | ↳ *Toggling off one does not affect the other* | |
| | ↳ *Sample data config is included in save payload* | |
| 3 | **Profiler Configuration Page** - Non admin user | Non-admin user access restriction  Verifies that non-admin users cannot access profiler configuration preferences. |

</details>


---

<div id="test-library"></div>

## Test Library

<details open>
<summary>📄 <b>TestLibrary.spec.ts</b> (15 tests, 33 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestLibrary.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestLibrary.spec.ts)

### Test Library

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Library** - should navigate to Test Library page | Navigate to Test Library page |
| 2 | **Test Library** - should display test definitions table with columns | Display test definitions table with columns |
| 3 | **Test Library** - should display system test definitions | Display system test definitions |
| 4 | **Test Library** - should create, edit, and delete a test definition | Create, edit, and delete a test definition |
| | ↳ *Create a new test definition* | |
| | ↳ *Edit Test Definition* | |
| | ↳ *should enable/disable test definition* | |
| | ↳ *should delete a test definition* | |
| 5 | **Test Library** - should validate required fields in create form | Validate required fields in create form |
| 6 | **Test Library** - should require supported data types only when OpenMetadata platform is selected | Require supported data types only when OpenMetadata platform is selected |
| | ↳ *Open create form* | |
| | ↳ *Verify supported data types is required with default OpenMetadata platform* | |
| | ↳ *Remove OpenMetadata and select only dbt — field should not be required* | |
| 7 | **Test Library** - should cancel form and close drawer | Cancel form and close drawer |
| 8 | **Test Library** - should display pagination when test definitions exceed page size | Display pagination when test definitions exceed page size |
| 9 | **Test Library** - should display test platform badges correctly | Display test platform badges correctly |
| 10 | **Test Library** - should not show edit and delete buttons for system test definitions | Not show edit and delete buttons for system test definitions |
| 11 | **Test Library** - should allow enabling/disabling system test definitions | Allow enabling/disabling system test definitions |
| 12 | **Test Library** - should disable toggle for external test definitions | Disable toggle for external test definitions |
| 13 | **Test Library** - should handle external test definitions with read-only fields | Handle external test definitions with read-only fields |
| | ↳ *Create external test definition* | |
| | ↳ *Verify fields are read-only in edit mode* | |
| | ↳ *Verify allowed fields can be edited and DQ Dimension can be added* | |
| | ↳ *Delete external test definition* | |
| 14 | **Test Library** - should handle supported services field correctly | Handle supported services field correctly |
| | ↳ *Create test definition with specific supported services* | |
| | ↳ *Verify supported services are saved correctly* | |
| | ↳ *Verify test definition appears when filtering by supported services* | |
| | ↳ *Edit and change supported services* | |
| | ↳ *Verify updated supported services are persisted* | |
| | ↳ *Clear all supported services (should apply to all services)* | |
| | ↳ *Delete test definition* | |
| 15 | **Test Library** - should maintain page on edit and reset to first page on delete | Maintain page on edit and reset to first page on delete |
| | ↳ *Create a test definition starting with "z"* | |
| | ↳ *Change page size to 25* | |
| | ↳ *Navigate until we find our test definition or reach last page* | |
| | ↳ *Edit the test definition and verify we stay on the same page* | |
| | ↳ *Delete the test definition and verify redirect to first page* | |

</details>

<details open>
<summary>📄 <b>TestDefinitionFilters.spec.ts</b> (7 tests, 24 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestDefinitionFilters.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestDefinitionFilters.spec.ts)

### Test Definition Filters

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Definition Filters** - should filter test definitions with single-select filters | Filter test definitions with single-select filters |
| | ↳ *Select entity type filter* | |
| | ↳ *Verify radio button is checked* | |
| | ↳ *Change filter selection* | |
| | ↳ *Verify previous selection is cleared* | |
| 2 | **Test Definition Filters** - should restore and persist filters from URL | Restore and persist filters from URL |
| | ↳ *Load page with URL parameters* | |
| | ↳ *Verify filters are pre-selected* | |
| | ↳ *Verify persistence through browser navigation* | |
| 3 | **Test Definition Filters** - should handle filter UI interactions correctly | Handle filter UI interactions correctly |
| | ↳ *Verify radio button rendering* | |
| | ↳ *Test toggle selection behavior* | |
| | ↳ *Verify update button and dropdown closing* | |
| | ↳ *Verify no clear all button in single-select mode* | |
| 4 | **Test Definition Filters** - should handle multiple filter operations | Handle multiple filter operations |
| | ↳ *Apply first filter* | |
| | ↳ *Apply second filter* | |
| | ↳ *Remove first filter* | |
| | ↳ *Remove second filter* | |
| 5 | **Test Definition Filters** - should make correct API calls and show filtered results | Make correct API calls and show filtered results |
| | ↳ *Apply filter and validate API* | |
| | ↳ *Verify filtered results in UI* | |
| 6 | **Test Definition Filters** - should reset pagination when filters change | Reset pagination when filters change |
| | ↳ *Apply initial filter* | |
| | ↳ *Navigate to page 2 and verify pagination resets on filter change* | |
| 7 | **Test Definition Filters** - should not revert to previous value when changing filter selection | Not revert to previous value when changing filter selection |
| | ↳ *Select initial testPlatform filter (dbt)* | |
| | ↳ *Change to a different testPlatform filter (OpenMetadata)* | |
| | ↳ *Verify the new filter persists after page reload* | |
| | ↳ *Change back to previous testPlatform filter (dbt)* | |
| | ↳ *Verify final selection persists* | |

</details>


---

<div id="rules-library"></div>

## Rules Library

<details open>
<summary>📄 <b>TestDefinitionPermissions.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataQuality/TestDefinitionPermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataQuality/TestDefinitionPermissions.spec.ts)

### Test Definition Permissions - View Only User

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Definition Permissions - View Only User** - should allow viewing test definitions but not create, edit, or delete | Allow viewing test definitions but not create, edit, or delete |

### Test Definition Permissions - Data Consumer

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Definition Permissions - Data Consumer** - should allow viewing test definitions but not create, edit, or delete | Allow viewing test definitions but not create, edit, or delete |

### Test Definition Permissions - Data Steward

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Definition Permissions - Data Steward** - should allow viewing and editing but not creating or deleting test definitions | Allow viewing and editing but not creating or deleting test definitions |
| 2 | **Test Definition Permissions - Data Steward** - should not be able to edit system test definitions | Not be able to edit system test definitions |

### Test Definition Permissions - API Level Validation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Test Definition Permissions - API Level Validation** - should prevent unauthorized users from creating test definitions via API | Prevent unauthorized users from creating test definitions via API |
| 2 | **Test Definition Permissions - API Level Validation** - should prevent unauthorized users from deleting test definitions via API | Prevent unauthorized users from deleting test definitions via API |
| 3 | **Test Definition Permissions - API Level Validation** - should prevent all users from modifying system test definition entity type via API | Prevent all users from modifying system test definition entity type via API |

</details>


---

<div id="alerts-notifications"></div>

## Alerts & Notifications

<details open>
<summary>📄 <b>ObservabilityAlerts.spec.ts</b> (7 tests, 22 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ObservabilityAlerts.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ObservabilityAlerts.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Pipeline Alert | Pipeline Alert |
| | ↳ *Create alert* | |
| | ↳ *Verify diagnostic info tab* | |
| | ↳ *Check created alert details* | |
| | ↳ *Edit alert* | |
| | ↳ *Delete alert* | |
| 2 | Table alert | Table alert |
| | ↳ *Create alert* | |
| | ↳ *Check created alert details* | |
| | ↳ *Delete alert* | |
| 3 | Ingestion Pipeline alert | Ingestion Pipeline alert |
| | ↳ *Create alert* | |
| | ↳ *Check created alert details* | |
| | ↳ *Delete alert* | |
| 4 | Test case alert | Case alert |
| | ↳ *Create alert* | |
| | ↳ *Check created alert details* | |
| | ↳ *Delete alert* | |
| 5 | Test Suite alert | Suite alert |
| | ↳ *Create alert* | |
| | ↳ *Check created alert details* | |
| | ↳ *Delete alert* | |
| 6 | Data Contract Name filter lists matching data contracts | Data Contract Name filter lists matching data contracts |
| 7 | Alert operations for a user with and without permissions | Alert operations for a user with and without permissions |
| | ↳ *Create and trigger alert* | |
| | ↳ *Checks for user without permission* | |
| | ↳ *Check alert details page and Recent Events tab* | |
| | ↳ *Delete alert* | |

</details>

<details open>
<summary>📄 <b>NotificationAlerts.spec.ts</b> (6 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/NotificationAlerts.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/NotificationAlerts.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Single Filter Alert | Single Filter Alert  Creates an alert with a single filter and verifies alert details; edits by adding filters and destinations, then deletes the alert. |
| | ↳ *Create alert* | |
| | ↳ *Check created alert details* | |
| | ↳ *Edit alert by adding multiple filters and internal destinations* | |
| | ↳ *Delete alert* | |
| 2 | Multiple Filters Alert | Multiple Filters Alert  Creates an alert with multiple filters and destinations; edits by removing filters/destinations, verifies changes, then deletes the alert. |
| | ↳ *Create alert* | |
| | ↳ *Edit alert by removing added filters and internal destinations* | |
| | ↳ *Delete alert* | |
| 3 | Task source alert | Task Source Alert  Creates an alert scoped to Task source and then deletes it. |
| | ↳ *Create alert* | |
| | ↳ *Delete alert* | |
| 4 | Conversation source alert | Conversation Source Alert  Creates a Conversation source alert, adds a mentions filter and Slack destination, then deletes it. |
| | ↳ *Create alert* | |
| | ↳ *Edit alert by adding mentions filter* | |
| | ↳ *Delete alert* | |
| 5 | Alert operations for a user with and without permissions | Alert operations with permissions  Creates and triggers a Table source alert; verifies alert details for permissive user and limited behavior for a non-permissive user; deletes the alert. |
| | ↳ *Create and trigger alert* | |
| | ↳ *Checks for user without permission* | |
| | ↳ *Check alert details page and Recent Events tab* | |
| | ↳ *Delete alert* | |
| 6 | destination should work properly | Destination test flow  Validates internal/external destination configuration, tests destinations, and verifies UI result statuses. |

</details>


---

<div id="logs-viewer"></div>

## Logs Viewer

<details open>
<summary>📄 <b>LogsViewer.spec.ts</b> (1 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/LogsViewer.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/LogsViewer.spec.ts)

### Logs viewer page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Logs viewer page** - Logs page shows breadcrumb, summary, and log viewer or empty state after opening from bundle suite pipeline tab | Logs page shows breadcrumb, summary, and log viewer or empty state after opening from bundle suite pipeline tab |
| | ↳ *Open Data Quality → Bundle Suites and click on the newly created bundle* | |
| | ↳ *Open Pipeline tab and click Logs for first pipeline* | |
| | ↳ *The logs viewer modal opens in place with its toolbar* | |
| | ↳ *Toggling fullscreen expands and restores the modal* | |
| | ↳ *Hovering a toolbar button shows its tooltip* | |
| | ↳ *Toggling wrap flips its pressed state* | |
| | ↳ *Copying the logs switches the button to the copied state* | |
| | ↳ *Searching a non-matching term shows the empty state* | |
| | ↳ *Jump-to-end keeps the log body visible* | |
| | ↳ *Closing the modal returns to the pipeline tab* | |

</details>


---

