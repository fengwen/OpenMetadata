[🏠 Home](./README.md) > **Discovery**

# Discovery

> **8 Components** | **65 Files** | **898 Tests** | **1214 Scenarios** 🚀

## Table of Contents
- [General](#general)
- [Feed](#feed)
- [Search](#search)
- [Data Assets](#data-assets)
- [Curated Assets](#curated-assets)
- [Explore](#explore)
- [Home Page](#home-page)
- [Data Insights](#data-insights)

---

<div id="general"></div>

## General

<details open>
<summary>📄 <b>DataMarketplace.spec.ts</b> (8 tests, 33 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/DataMarketplace.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/DataMarketplace.spec.ts)

### Data Marketplace - Core

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Marketplace - Core** - Page renders with greeting, search, and default widgets | Page renders with greeting, search, and default widgets |
| | ↳ *Navigate to marketplace via sidebar* | |
| | ↳ *Verify greeting banner* | |
| | ↳ *Verify search bar is present* | |
| | ↳ *Verify data products widget* | |
| | ↳ *Verify domains widget* | |
| | ↳ *Verify admin action buttons* | |
| 2 | **Data Marketplace - Core** - Search returns results and clicking navigates to entity | Search returns results and clicking navigates to entity |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Search for a data product* | |
| | ↳ *Click data product result and verify navigation* | |
| | ↳ *Navigate back and search for a domain* | |
| | ↳ *Click domain result and verify navigation* | |
| 3 | **Data Marketplace - Core** - Widget card click navigates to entity detail page | Widget card click navigates to entity detail page |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Click data product card and verify navigation* | |
| | ↳ *Navigate back and click domain card* | |
| 4 | **Data Marketplace - Core** - View All links navigate correctly | View All links navigate correctly |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Click View All Data Products and verify* | |
| | ↳ *Navigate back and click View All Domains* | |
| 5 | **Data Marketplace - Core** - Admin can create a data product via marketplace drawer | Admin can create a data product via marketplace drawer |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Open add data product drawer* | |
| | ↳ *Fill data product form and select domain* | |
| | ↳ *Submit form and verify creation* | |
| | ↳ *Verify drawer closes and widget refreshes* | |
| 6 | **Data Marketplace - Core** - Admin can create a domain via marketplace drawer | Admin can create a domain via marketplace drawer |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Open add domain drawer* | |
| | ↳ *Fill domain form and select type* | |
| | ↳ *Submit form and verify creation* | |
| | ↳ *Verify drawer closes and widget refreshes* | |
| 7 | **Data Marketplace - Core** - Search with no results shows empty state | Search with no results shows empty state |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Search for non-existent term* | |
| | ↳ *Verify empty state message* | |
| 8 | **Data Marketplace - Core** - Search popover dismisses when input is cleared | Search popover dismisses when input is cleared |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Search for an existing entity* | |
| | ↳ *Clear input and verify popover closes* | |

</details>

<details open>
<summary>📄 <b>ActivityAPI.spec.ts</b> (7 tests, 12 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ActivityAPI.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ActivityAPI.spec.ts)

### Activity API - Entity Changes

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity API - Entity Changes** - renders a description-updated activity item in the feed | Renders a description-updated activity item in the feed |
| | ↳ *Seed a DescriptionUpdated activity event* | |
| | ↳ *Verify the event renders with actor and entity link* | |

### Activity API - Reactions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity API - Reactions** - adds a reaction to a feed item | Adds a reaction to a feed item |
| | ↳ *Open the activity feed* | |
| | ↳ *Add thumbs-up reaction and verify it is visible* | |
| 2 | **Activity API - Reactions** - removes an existing reaction from a feed item | Removes an existing reaction from a feed item |
| | ↳ *Open the activity feed* | |
| | ↳ *Add and then remove thumbs-up reaction* | |

### Activity API - Comments

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity API - Comments** - adds a comment to a feed item | Adds a comment to a feed item |
| | ↳ *Open the activity feed* | |
| | ↳ *Open the feed detail and post a comment* | |
| 2 | **Activity API - Comments** - shows the activity detail layout | Shows the activity detail layout |
| | ↳ *Open the activity feed* | |
| | ↳ *Open the detail view and verify layout regions* | |

### Activity API - Homepage Widget

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity API - Homepage Widget** - displays feed content in the Activity Feed widget | Displays feed content in the Activity Feed widget |
| 2 | **Activity API - Homepage Widget** - shows Activity Feed widget filter options | Shows Activity Feed widget filter options |

</details>

<details open>
<summary>📄 <b>ChangeSummaryBadge.spec.ts</b> (5 tests, 12 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ChangeSummaryBadge.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ChangeSummaryBadge.spec.ts)

### ChangeSummary DescriptionSourceBadge

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ChangeSummary DescriptionSourceBadge** - AI badge should appear on entity description with Suggested source | AI badge should appear on entity description with Suggested source |
| | ↳ *Navigate to entity page and verify AI badge* | |
| | ↳ *Verify badge tooltip shows metadata* | |
| | ↳ *Verify AI badge on table description in Explore summary panel* | |
| 2 | **ChangeSummary DescriptionSourceBadge** - AI badge should appear on column description with Suggested source | AI badge should appear on column description with Suggested source |
| | ↳ *Navigate to entity page and verify column badge* | |
| | ↳ *Verify AI badge on column description in Explore summary panel* | |
| 3 | **ChangeSummary DescriptionSourceBadge** - Automated badge should appear on entity description with Automated source | Automated badge should appear on entity description with Automated source |
| | ↳ *Create table with Automated description* | |
| | ↳ *Navigate and verify Automated badge on entity description* | |
| | ↳ *Verify AI badge on column description with Suggested source* | |
| 4 | **ChangeSummary DescriptionSourceBadge** - Propagated badge should appear on entity description with Propagated source | Propagated badge should appear on entity description with Propagated source |
| | ↳ *Create table with Propagated description* | |
| | ↳ *Navigate and verify Propagated badge* | |
| 5 | **ChangeSummary DescriptionSourceBadge** - AI badge should NOT appear for manually-edited descriptions | AI badge should NOT appear for manually-edited descriptions |
| | ↳ *Create table with manual description* | |
| | ↳ *Navigate and verify no AI badge* | |

</details>

<details open>
<summary>📄 <b>DataMarketplacePermissions.spec.ts</b> (3 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/DataMarketplacePermissions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/DataMarketplacePermissions.spec.ts)

### Data Marketplace - Permissions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Marketplace - Permissions** - Admin sees add buttons and customize button | Admin sees add buttons and customize button |
| | ↳ *Navigate to marketplace as admin* | |
| | ↳ *Verify admin action buttons* | |
| | ↳ *Verify greeting banner shows admin name* | |
| 2 | **Data Marketplace - Permissions** - Data consumer does NOT see add buttons | Data consumer does NOT see add buttons |
| | ↳ *Navigate to marketplace as consumer* | |
| | ↳ *Verify add buttons are not visible* | |
| | ↳ *Verify consumer can still see widgets and greeting* | |
| | ↳ *Verify greeting banner shows consumer name* | |
| 3 | **Data Marketplace - Permissions** - Data consumer can search and view results | Data consumer can search and view results |
| | ↳ *Navigate to marketplace as consumer* | |
| | ↳ *Search and verify results appear* | |
| | ↳ *Click result and verify navigation* | |

</details>

<details open>
<summary>📄 <b>DataMarketplaceAnnouncements.spec.ts</b> (2 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/DataMarketplaceAnnouncements.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/DataMarketplaceAnnouncements.spec.ts)

### Data Marketplace - Announcements

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Marketplace - Announcements** - Announcements widget renders with active announcements | Announcements widget renders with active announcements |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Verify announcements widget is visible* | |
| | ↳ *Verify announcement items are displayed* | |
| 2 | **Data Marketplace - Announcements** - Clicking announcement navigates to entity page | Clicking announcement navigates to entity page |
| | ↳ *Navigate to marketplace* | |
| | ↳ *Click domain announcement and verify navigation* | |
| | ↳ *Navigate back and click data product announcement* | |

</details>

<details open>
<summary>📄 <b>MetricListSearch.spec.ts</b> (1 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/MetricListSearch.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/MetricListSearch.spec.ts)

### Metric List Page - Search

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric List Page - Search** - typing in the search box filters the metric list server-side | Typing in the search box filters the metric list server-side |
| | ↳ *search fires a scoped metric query and narrows the results* | |
| | ↳ *clearing the search restores the full list* | |

</details>

<details open>
<summary>📄 <b>MetricSearch.spec.ts</b> (1 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/MetricSearch.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/MetricSearch.spec.ts)

### Metric Search - Clause Explosion Prevention

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric Search - Clause Explosion Prevention** - searching for a metric with a long multi-word name should not cause clause explosion | Searching for a metric with a long multi-word name should not cause clause explosion |
| | ↳ *Select Metric search index and search* | |
| | ↳ *Verify no error toast and results are shown* | |

</details>


---

<div id="feed"></div>

## Feed

<details open>
<summary>📄 <b>ActivityFeed.spec.ts</b> (17 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Tasks/ActivityFeed.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Tasks/ActivityFeed.spec.ts)

### Activity Feed - Home Page Widget

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity Feed - Home Page Widget** - should display activity feed widget on home page | Display activity feed widget on home page |
| 2 | **Activity Feed - Home Page Widget** - should show task in activity feed widget | Show task in activity feed widget |
| 3 | **Activity Feed - Home Page Widget** - should have clickable task links that navigate correctly | Have clickable task links that navigate correctly |

### Activity Feed - Filters

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity Feed - Filters** - All filter should show all activity | All filter should show all activity |
| 2 | **Activity Feed - Filters** - My Data filter should show only owned entity activity | My Data filter should show only owned entity activity |
| 3 | **Activity Feed - Filters** - Tasks filter should show only tasks | Tasks filter should show only tasks |
| 4 | **Activity Feed - Filters** - Activity Feed widget filters should switch between All Activity, My Data, and Following | Activity Feed widget filters should switch between All Activity, My Data, and Following |
| 5 | **Activity Feed - Filters** - assignee should see assigned tasks in Tasks filter | Assignee should see assigned tasks in Tasks filter |

### Activity Feed - Entity Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity Feed - Entity Page** - should display activity feed tab on entity page | Display activity feed tab on entity page |
| 2 | **Activity Feed - Entity Page** - activity feed tab should show task count badge | Activity feed tab should show task count badge |
| 3 | **Activity Feed - Entity Page** - clicking activity feed tab should show feed and tasks | Clicking activity feed tab should show feed and tasks |
| 4 | **Activity Feed - Entity Page** - should toggle between All and Tasks in entity activity feed | Toggle between All and Tasks in entity activity feed |
| 5 | **Activity Feed - Entity Page** - entity task filters should request open, closed, and mentions views | Entity task filters should request open, closed, and mentions views |
| 6 | **Activity Feed - Entity Page** - should show description updates in activity feed | Show description updates in activity feed |

### Activity Feed - Real-time Updates

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity Feed - Real-time Updates** - creating task should immediately appear in entity feed | Creating task should immediately appear in entity feed |
| 2 | **Activity Feed - Real-time Updates** - updating entity should create activity in feed | Updating entity should create activity in feed |

### Activity Feed - Following

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Activity Feed - Following** - following an entity should show its activity in Following filter | Following an entity should show its activity in Following filter |

</details>

<details open>
<summary>📄 <b>ActivityFeed.spec.ts</b> (10 tests, 12 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ActivityFeed.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ActivityFeed.spec.ts)

### FeedWidget on landing page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **FeedWidget on landing page** - renders widget wrapper and header with sort dropdown | Renders widget wrapper and header with sort dropdown |
| 2 | **FeedWidget on landing page** - clicking title navigates to explore page | Clicking title navigates to explore page |
| 3 | **FeedWidget on landing page** - feed body renders content or empty state | Feed body renders content or empty state |
| 4 | **FeedWidget on landing page** - changing filter triggers feed reload | Changing filter triggers feed reload |
| 5 | **FeedWidget on landing page** - footer shows view more link when applicable | Footer shows view more link when applicable |
| 6 | **FeedWidget on landing page** - feed cards render with proper structure when available | Feed cards render with proper structure when available |
| 7 | **FeedWidget on landing page** - emoji reactions can be added when feed messages exist | Emoji reactions can be added when feed messages exist |
| 8 | **FeedWidget on landing page** - thread drawer opens from reply count and allows posting a reply | Thread drawer opens from reply count and allows posting a reply |

### Mention notifications in Notification Box

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Mention notifications in Notification Box** - Mention notification shows correct user details in Notification box | Mention notification shows correct user details in Notification box |
| | ↳ *User1 mentions admin user in a reply* | |
| | ↳ *Admin user checks notification for correct user and timestamp* | |
| | ↳ *Update user display name and verify reaction tooltip* | |

### Mentions: Chinese character encoding in activity feed

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Mentions: Chinese character encoding in activity feed** - Should encode the chinese character while mentioning api endpoint | Encode the chinese character while mentioning api endpoint |

</details>

<details open>
<summary>📄 <b>ActivityFeedTabBadge.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ActivityFeedTabBadge.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ActivityFeedTabBadge.spec.ts)

### ActivityFeedTab — task filter badge and placeholder

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ActivityFeedTab — task filter badge and placeholder** - badge reflects openTaskCount in Open filter and closedTaskCount in Closed filter | Badge reflects openTaskCount in Open filter and closedTaskCount in Closed filter |
| 2 | **ActivityFeedTab — task filter badge and placeholder** - placeholder shows the correct message per filter state | Placeholder shows the correct message per filter state |

</details>


---

<div id="search"></div>

## Search

<details open>
<summary>📄 <b>AdvancedSearch.spec.ts</b> (131 tests, 182 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/AdvancedSearch.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/AdvancedSearch.spec.ts)

### Advanced Search

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Advanced Search** - Verify All conditions for Owners field | All conditions for Owners field |
| 2 | **Advanced Search** - Verify All conditions for Tags field | All conditions for Tags field |
| 3 | **Advanced Search** - Verify All conditions for Tier field | All conditions for Tier field |
| 4 | **Advanced Search** - Verify All conditions for Service field | All conditions for Service field |
| 5 | **Advanced Search** - Verify All conditions for Database field | All conditions for Database field |
| 6 | **Advanced Search** - Verify All conditions for Database Schema field | All conditions for Database Schema field |
| 7 | **Advanced Search** - Verify All conditions for Column field | All conditions for Column field |
| 8 | **Advanced Search** - Verify All conditions for Display Name field | All conditions for Display Name field |
| 9 | **Advanced Search** - Verify All conditions for Service Type field | All conditions for Service Type field |
| 10 | **Advanced Search** - Verify All conditions for Schema Field field | All conditions for Schema Field field |
| 11 | **Advanced Search** - Verify All conditions for Container Column field | All conditions for Container Column field |
| 12 | **Advanced Search** - Verify All conditions for Data Model Type field | All conditions for Data Model Type field |
| 13 | **Advanced Search** - Verify All conditions for Field field | All conditions for Field field |
| 14 | **Advanced Search** - Verify All conditions for Task field | All conditions for Task field |
| 15 | **Advanced Search** - Verify All conditions for Domains field | All conditions for Domains field |
| 16 | **Advanced Search** - Verify All conditions for Name field | All conditions for Name field |
| 17 | **Advanced Search** - Verify All conditions for Project field | All conditions for Project field |
| 18 | **Advanced Search** - Verify All conditions for Chart field | All conditions for Chart field |
| 19 | **Advanced Search** - Verify All conditions for Response Schema Field field | All conditions for Response Schema Field field |
| 20 | **Advanced Search** - Verify All conditions for Request Schema Field field | All conditions for Request Schema Field field |
| 21 | **Advanced Search** - Verify All conditions for Data Product field | All conditions for Data Product field |
| 22 | **Advanced Search** - Verify Rule functionality for field Owners with AND operator | Rule functionality for field Owners with AND operator |
| 23 | **Advanced Search** - Verify Group functionality for field Owners with AND operator | Group functionality for field Owners with AND operator |
| 24 | **Advanced Search** - Verify Rule functionality for field Tags with AND operator | Rule functionality for field Tags with AND operator |
| 25 | **Advanced Search** - Verify Group functionality for field Tags with AND operator | Group functionality for field Tags with AND operator |
| 26 | **Advanced Search** - Verify Rule functionality for field Tier with AND operator | Rule functionality for field Tier with AND operator |
| 27 | **Advanced Search** - Verify Group functionality for field Tier with AND operator | Group functionality for field Tier with AND operator |
| 28 | **Advanced Search** - Verify Rule functionality for field Service with AND operator | Rule functionality for field Service with AND operator |
| 29 | **Advanced Search** - Verify Group functionality for field Service with AND operator | Group functionality for field Service with AND operator |
| 30 | **Advanced Search** - Verify Rule functionality for field Database with AND operator | Rule functionality for field Database with AND operator |
| 31 | **Advanced Search** - Verify Group functionality for field Database with AND operator | Group functionality for field Database with AND operator |
| 32 | **Advanced Search** - Verify Rule functionality for field Database Schema with AND operator | Rule functionality for field Database Schema with AND operator |
| 33 | **Advanced Search** - Verify Group functionality for field Database Schema with AND operator | Group functionality for field Database Schema with AND operator |
| 34 | **Advanced Search** - Verify Rule functionality for field Column with AND operator | Rule functionality for field Column with AND operator |
| 35 | **Advanced Search** - Verify Group functionality for field Column with AND operator | Group functionality for field Column with AND operator |
| 36 | **Advanced Search** - Verify Rule functionality for field Display Name with AND operator | Rule functionality for field Display Name with AND operator |
| 37 | **Advanced Search** - Verify Group functionality for field Display Name with AND operator | Group functionality for field Display Name with AND operator |
| 38 | **Advanced Search** - Verify Rule functionality for field Service Type with AND operator | Rule functionality for field Service Type with AND operator |
| 39 | **Advanced Search** - Verify Group functionality for field Service Type with AND operator | Group functionality for field Service Type with AND operator |
| 40 | **Advanced Search** - Verify Rule functionality for field Schema Field with AND operator | Rule functionality for field Schema Field with AND operator |
| 41 | **Advanced Search** - Verify Group functionality for field Schema Field with AND operator | Group functionality for field Schema Field with AND operator |
| 42 | **Advanced Search** - Verify Rule functionality for field Container Column with AND operator | Rule functionality for field Container Column with AND operator |
| 43 | **Advanced Search** - Verify Group functionality for field Container Column with AND operator | Group functionality for field Container Column with AND operator |
| 44 | **Advanced Search** - Verify Rule functionality for field Data Model Type with AND operator | Rule functionality for field Data Model Type with AND operator |
| 45 | **Advanced Search** - Verify Group functionality for field Data Model Type with AND operator | Group functionality for field Data Model Type with AND operator |
| 46 | **Advanced Search** - Verify Rule functionality for field Field with AND operator | Rule functionality for field Field with AND operator |
| 47 | **Advanced Search** - Verify Group functionality for field Field with AND operator | Group functionality for field Field with AND operator |
| 48 | **Advanced Search** - Verify Rule functionality for field Task with AND operator | Rule functionality for field Task with AND operator |
| 49 | **Advanced Search** - Verify Group functionality for field Task with AND operator | Group functionality for field Task with AND operator |
| 50 | **Advanced Search** - Verify Rule functionality for field Domains with AND operator | Rule functionality for field Domains with AND operator |
| 51 | **Advanced Search** - Verify Group functionality for field Domains with AND operator | Group functionality for field Domains with AND operator |
| 52 | **Advanced Search** - Verify Rule functionality for field Name with AND operator | Rule functionality for field Name with AND operator |
| 53 | **Advanced Search** - Verify Group functionality for field Name with AND operator | Group functionality for field Name with AND operator |
| 54 | **Advanced Search** - Verify Rule functionality for field Project with AND operator | Rule functionality for field Project with AND operator |
| 55 | **Advanced Search** - Verify Group functionality for field Project with AND operator | Group functionality for field Project with AND operator |
| 56 | **Advanced Search** - Verify Rule functionality for field Chart with AND operator | Rule functionality for field Chart with AND operator |
| 57 | **Advanced Search** - Verify Group functionality for field Chart with AND operator | Group functionality for field Chart with AND operator |
| 58 | **Advanced Search** - Verify Rule functionality for field Response Schema Field with AND operator | Rule functionality for field Response Schema Field with AND operator |
| 59 | **Advanced Search** - Verify Group functionality for field Response Schema Field with AND operator | Group functionality for field Response Schema Field with AND operator |
| 60 | **Advanced Search** - Verify Rule functionality for field Request Schema Field with AND operator | Rule functionality for field Request Schema Field with AND operator |
| 61 | **Advanced Search** - Verify Group functionality for field Request Schema Field with AND operator | Group functionality for field Request Schema Field with AND operator |
| 62 | **Advanced Search** - Verify Rule functionality for field Data Product with AND operator | Rule functionality for field Data Product with AND operator |
| 63 | **Advanced Search** - Verify Group functionality for field Data Product with AND operator | Group functionality for field Data Product with AND operator |
| 64 | **Advanced Search** - Verify Rule functionality for field Owners with OR operator | Rule functionality for field Owners with OR operator |
| 65 | **Advanced Search** - Verify Group functionality for field Owners with OR operator | Group functionality for field Owners with OR operator |
| 66 | **Advanced Search** - Verify Rule functionality for field Tags with OR operator | Rule functionality for field Tags with OR operator |
| 67 | **Advanced Search** - Verify Group functionality for field Tags with OR operator | Group functionality for field Tags with OR operator |
| 68 | **Advanced Search** - Verify Rule functionality for field Tier with OR operator | Rule functionality for field Tier with OR operator |
| 69 | **Advanced Search** - Verify Group functionality for field Tier with OR operator | Group functionality for field Tier with OR operator |
| 70 | **Advanced Search** - Verify Rule functionality for field Service with OR operator | Rule functionality for field Service with OR operator |
| 71 | **Advanced Search** - Verify Group functionality for field Service with OR operator | Group functionality for field Service with OR operator |
| 72 | **Advanced Search** - Verify Rule functionality for field Database with OR operator | Rule functionality for field Database with OR operator |
| 73 | **Advanced Search** - Verify Group functionality for field Database with OR operator | Group functionality for field Database with OR operator |
| 74 | **Advanced Search** - Verify Rule functionality for field Database Schema with OR operator | Rule functionality for field Database Schema with OR operator |
| 75 | **Advanced Search** - Verify Group functionality for field Database Schema with OR operator | Group functionality for field Database Schema with OR operator |
| 76 | **Advanced Search** - Verify Rule functionality for field Column with OR operator | Rule functionality for field Column with OR operator |
| 77 | **Advanced Search** - Verify Group functionality for field Column with OR operator | Group functionality for field Column with OR operator |
| 78 | **Advanced Search** - Verify Rule functionality for field Display Name with OR operator | Rule functionality for field Display Name with OR operator |
| 79 | **Advanced Search** - Verify Group functionality for field Display Name with OR operator | Group functionality for field Display Name with OR operator |
| 80 | **Advanced Search** - Verify Rule functionality for field Service Type with OR operator | Rule functionality for field Service Type with OR operator |
| 81 | **Advanced Search** - Verify Group functionality for field Service Type with OR operator | Group functionality for field Service Type with OR operator |
| 82 | **Advanced Search** - Verify Rule functionality for field Schema Field with OR operator | Rule functionality for field Schema Field with OR operator |
| 83 | **Advanced Search** - Verify Group functionality for field Schema Field with OR operator | Group functionality for field Schema Field with OR operator |
| 84 | **Advanced Search** - Verify Rule functionality for field Container Column with OR operator | Rule functionality for field Container Column with OR operator |
| 85 | **Advanced Search** - Verify Group functionality for field Container Column with OR operator | Group functionality for field Container Column with OR operator |
| 86 | **Advanced Search** - Verify Rule functionality for field Data Model Type with OR operator | Rule functionality for field Data Model Type with OR operator |
| 87 | **Advanced Search** - Verify Group functionality for field Data Model Type with OR operator | Group functionality for field Data Model Type with OR operator |
| 88 | **Advanced Search** - Verify Rule functionality for field Field with OR operator | Rule functionality for field Field with OR operator |
| 89 | **Advanced Search** - Verify Group functionality for field Field with OR operator | Group functionality for field Field with OR operator |
| 90 | **Advanced Search** - Verify Rule functionality for field Task with OR operator | Rule functionality for field Task with OR operator |
| 91 | **Advanced Search** - Verify Group functionality for field Task with OR operator | Group functionality for field Task with OR operator |
| 92 | **Advanced Search** - Verify Rule functionality for field Domains with OR operator | Rule functionality for field Domains with OR operator |
| 93 | **Advanced Search** - Verify Group functionality for field Domains with OR operator | Group functionality for field Domains with OR operator |
| 94 | **Advanced Search** - Verify Rule functionality for field Name with OR operator | Rule functionality for field Name with OR operator |
| 95 | **Advanced Search** - Verify Group functionality for field Name with OR operator | Group functionality for field Name with OR operator |
| 96 | **Advanced Search** - Verify Rule functionality for field Project with OR operator | Rule functionality for field Project with OR operator |
| 97 | **Advanced Search** - Verify Group functionality for field Project with OR operator | Group functionality for field Project with OR operator |
| 98 | **Advanced Search** - Verify Rule functionality for field Chart with OR operator | Rule functionality for field Chart with OR operator |
| 99 | **Advanced Search** - Verify Group functionality for field Chart with OR operator | Group functionality for field Chart with OR operator |
| 100 | **Advanced Search** - Verify Rule functionality for field Response Schema Field with OR operator | Rule functionality for field Response Schema Field with OR operator |
| 101 | **Advanced Search** - Verify Group functionality for field Response Schema Field with OR operator | Group functionality for field Response Schema Field with OR operator |
| 102 | **Advanced Search** - Verify Rule functionality for field Request Schema Field with OR operator | Rule functionality for field Request Schema Field with OR operator |
| 103 | **Advanced Search** - Verify Group functionality for field Request Schema Field with OR operator | Group functionality for field Request Schema Field with OR operator |
| 104 | **Advanced Search** - Verify Rule functionality for field Data Product with OR operator | Rule functionality for field Data Product with OR operator |
| 105 | **Advanced Search** - Verify Group functionality for field Data Product with OR operator | Group functionality for field Data Product with OR operator |
| 106 | **Advanced Search** - Verify search with non existing value do not result in infinite search | Search with non existing value do not result in infinite search |

### Advanced Search - Entity Status Filter

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Advanced Search - Entity Status Filter** - All entity status options are visible in the Status dropdown | All entity status options are visible in the Status dropdown |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Select Status field and == operator* | |
| | ↳ *Open Status value dropdown and verify all hard-coded options appear* | |
| 2 | **Advanced Search - Entity Status Filter** - Filtering by status "==" shows matching entity and hides others across entity types | Filtering by status "==" shows matching entity and hides others across entity types |
| | ↳ *Apply Status == "${...}" AND Name == "${...}"* | |
| | ↳ *Filter chip shows the applied status* | |
| | ↳ *"${...}" (${...}) is visible* | |
| | ↳ *Entities with other statuses are not in results* | |
| 3 | **Advanced Search - Entity Status Filter** - Filtering by status "!=" excludes matched entity but shows all other entity types | Filtering by status "!=" excludes matched entity but shows all other entity types |
| | ↳ *Apply Status != "Approved" AND Name == approved entity name* | |
| | ↳ *Filter chip reflects the != condition* | |
| | ↳ *GlossaryTerm with Approved status is not visible* | |
| | ↳ *Draft and In Review entities appear when searched by their name and non-Approved status* | |

### Advanced Search – Description filter

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Advanced Search – Description filter** - Description Contains filter returns matching tables | Description Contains filter returns matching tables |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Description Contains "${...}" AND Service == service name* | |
| | ↳ *Filter chip reflects the description condition* | |
| | ↳ *Table card is visible in results* | |
| 2 | **Advanced Search – Description filter** - Not Contains – table is NOT visible when filtering by a word that IS in the description | Not Contains – table is NOT visible when filtering by a word that IS in the description |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Description Not Contains "${...}" AND Service == service name* | |
| | ↳ *Table card is NOT visible* | |
| 3 | **Advanced Search – Description filter** - Not Contains – table IS visible (word absent from description) | Not Contains – table IS visible (word absent from description) |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Description Not Contains "${...}" AND Service == service name* | |
| | ↳ *Table card IS visible* | |
| 4 | **Advanced Search – Description filter** - Is not null – table with a description is visible | Is not null – table with a description is visible |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Description Is not null AND Service == service name* | |
| | ↳ *Table card is visible* | |
| 5 | **Advanced Search – Description filter** - Is null – table with a description is NOT visible | Is null – table with a description is NOT visible |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Description Is null AND Service == service name* | |
| | ↳ *Table card is NOT visible* | |
| 6 | **Advanced Search – Description filter** - Description Status == Complete – table with description is visible | Description Status == Complete – table with description is visible |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Description Status == Complete AND Service == service name* | |
| | ↳ *Table card is visible* | |
| 7 | **Advanced Search – Description filter** - Description Status == Incomplete – table with description is NOT visible | Description Status == Incomplete – table with description is NOT visible |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Description Status == Incomplete AND Service == service name* | |
| | ↳ *Table card is NOT visible* | |

### Explore Search Count Visibility

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore Search Count Visibility** - Verify count shows with Advanced Search filter | Count shows with Advanced Search filter |
| | ↳ *Open Advanced Search* | |
| | ↳ *Apply Description Contains filter* | |
| | ↳ *Verify count is visible and matches the API total* | |
| | ↳ *Clear filters and verify count disappears* | |
| 2 | **Explore Search Count Visibility** - Verify count matches the API total for a quick filter | Count matches the API total for a quick filter |
| | ↳ *Apply the Table data-asset quick filter* | |
| | ↳ *Count badge shows the same total as the API* | |
| 3 | **Explore Search Count Visibility** - Verify the toolbar Clear All button is removed | The toolbar Clear All button is removed |
| | ↳ *Apply a quick filter* | |
| | ↳ *Only the chip Clear button exists, no toolbar Clear All* | |
| 4 | **Explore Search Count Visibility** - Verify browse mode has no count | Browse mode has no count |
| | ↳ *Verify no search and no filters are applied* | |
| | ↳ *Verify count is not visible* | |

### Advanced Search – Column Tag filter

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Advanced Search – Column Tag filter** - Column Tags == tag1 returns table1 and hides table2 | Column Tags == tag1 returns table1 and hides table2 |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags == tag1* | |
| | ↳ *Filter chip reflects the applied column tag* | |
| | ↳ *table1 (tagged with tag1) is visible* | |
| | ↳ *table2 (tagged with tag2) is NOT visible* | |
| 2 | **Advanced Search – Column Tag filter** - Column Tags == tag2 returns table2 and hides table1 | Column Tags == tag2 returns table2 and hides table1 |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags == tag2* | |
| | ↳ *Filter chip reflects the applied column tag* | |
| | ↳ *table2 (tagged with tag2) is visible* | |
| | ↳ *table1 (tagged with tag1) is NOT visible* | |
| 3 | **Advanced Search – Column Tag filter** - Column Tags != tag1 excludes table1 from results | Column Tags != tag1 excludes table1 from results |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags != tag1 AND Service == table1 service* | |
| | ↳ *table1 (excluded by != tag1) is NOT visible* | |
| 4 | **Advanced Search – Column Tag filter** - Column Tags Contains tag1 name returns table1 | Column Tags Contains tag1 name returns table1 |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags Contains tag1 name* | |
| | ↳ *table1 is visible in results* | |
| 5 | **Advanced Search – Column Tag filter** - Column Tags Not contains tag1 name excludes table1 | Column Tags Not contains tag1 name excludes table1 |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags Not contains tag1 AND Service == table1 service* | |
| | ↳ *table1 is NOT visible* | |
| 6 | **Advanced Search – Column Tag filter** - Column Tags Any in [tag1, tag2] returns both tables | Column Tags Any in [tag1, tag2] returns both tables |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags Any in [tag1, tag2]* | |
| | ↳ *table1 is visible* | |
| 7 | **Advanced Search – Column Tag filter** - Column Tags Not in [tag1] excludes table1 | Column Tags Not in [tag1] excludes table1 |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags Not in [tag1] AND Service == table1 service* | |
| | ↳ *table1 is NOT visible (excluded by Not in filter)* | |
| 8 | **Advanced Search – Column Tag filter** - Column Tags Is not null returns table with a column tag | Column Tags Is not null returns table with a column tag |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags Is not null AND Service == table1 service* | |
| | ↳ *table1 (has column tag) is visible* | |
| 9 | **Advanced Search – Column Tag filter** - Column Tags Is null excludes tables that have column tags | Column Tags Is null excludes tables that have column tags |
| | ↳ *Open advanced search dialog* | |
| | ↳ *Apply Column Tags Is null AND Service == table1 service* | |
| | ↳ *table1 (has column tag) is NOT visible* | |

### Custom property enum lazy load in Advanced Search

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Custom property enum lazy load in Advanced Search** - should append page-2 items and make them visible when Load more button is clicked | Append page-2 items and make them visible when Load more button is clicked |
| 2 | **Custom property enum lazy load in Advanced Search** - should find page-2 items via search without clicking Load more | Find page-2 items via search without clicking Load more |

</details>

<details open>
<summary>📄 <b>TableSearch.spec.ts</b> (11 tests, 13 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TableSearch.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TableSearch.spec.ts)

### Table Search

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Search** - Services page should have search functionality | Services page should have search functionality |
| 2 | **Table Search** - API Collection page should have search functionality | API Collection page should have search functionality |
| 3 | **Table Search** - Database Schema Tables tab should have search functionality | Database Schema Tables tab should have search functionality |
| 4 | **Table Search** - Data Models Table should have search functionality | Data Models Table should have search functionality |
| 5 | **Table Search** - Data Models Table should find data models by displayName | Data Models Table should find data models by displayName |
| 6 | **Table Search** - Data Models Table should find data models by mixed-case name | Data Models Table should find data models by mixed-case name |
| | ↳ *search with original mixed-case term* | |
| | ↳ *search with all-uppercase term* | |
| | ↳ *search with all-lowercase term* | |
| 7 | **Table Search** - Stored Procedure Table should have search functionality | Stored Procedure Table should have search functionality |
| 8 | **Table Search** - Topics Table should have search functionality | Topics Table should have search functionality |
| 9 | **Table Search** - Drives Service Directories Table should have search functionality | Drives Service Directories Table should have search functionality |
| 10 | **Table Search** - Drives Service Files Table should have search functionality | Drives Service Files Table should have search functionality |
| 11 | **Table Search** - Drives Service Spreadsheets Table should have search functionality | Drives Service Spreadsheets Table should have search functionality |

</details>

<details open>
<summary>📄 <b>SearchRelevance.spec.ts</b> (10 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Search/SearchRelevance.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Search/SearchRelevance.spec.ts)

### Search relevance sample data

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search relevance sample data** - ranks name and structural table matches before tier and usage description matches | Ranks name and structural table matches before tier and usage description matches |
| 2 | **Search relevance sample data** - ranks clear provider address intent above weak high-signal description matches with stopwords | Ranks clear provider address intent above weak high-signal description matches with stopwords |
| 3 | **Search relevance sample data** - ranks customer and customers identity matches before high-signal description matches | Ranks customer and customers identity matches before high-signal description matches |
| 4 | **Search relevance sample data** - ranks customer profile name and column matches before high-signal description matches | Ranks customer profile name and column matches before high-signal description matches |
| 5 | **Search relevance sample data** - finds provider address texas fixtures across searchable asset indexes | Finds provider address texas fixtures across searchable asset indexes |
| | ↳ *Find ${...}* | |
| 6 | **Search relevance sample data** - finds customer profiles fixtures across searchable asset indexes | Finds customer profiles fixtures across searchable asset indexes |
| | ↳ *Find ${...}* | |
| 7 | **Search relevance sample data** - shows readable ranking details for exact table matches | Shows readable ranking details for exact table matches |
| 8 | **Search relevance sample data** - shows configurable ranking stages in table search settings | Shows configurable ranking stages in table search settings |
| 9 | **Search relevance sample data** - toggles ranking details in search settings preview | Toggles ranking details in search settings preview |
| 10 | **Search relevance sample data** - returns ranking stage matched queries without explain | Returns ranking stage matched queries without explain |

</details>

<details open>
<summary>📄 <b>AdvancedSearchSuggestions.spec.ts</b> (9 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/AdvancedSearchSuggestions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/AdvancedSearchSuggestions.spec.ts)

### Advanced Search Suggestions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Advanced Search Suggestions** - Verify suggestions for Database field | Suggestions for Database field |
| 2 | **Advanced Search Suggestions** - Verify suggestions for Database Schema field | Suggestions for Database Schema field |
| 3 | **Advanced Search Suggestions** - Verify suggestions for API Collection field | Suggestions for API Collection field |
| 4 | **Advanced Search Suggestions** - Verify suggestions for Glossary field | Suggestions for Glossary field |
| 5 | **Advanced Search Suggestions** - Verify suggestions for Domains field | Suggestions for Domains field |
| 6 | **Advanced Search Suggestions** - Verify suggestions for Data Product field | Suggestions for Data Product field |
| 7 | **Advanced Search Suggestions** - Verify suggestions for Tags field | Suggestions for Tags field |
| 8 | **Advanced Search Suggestions** - Verify suggestions for Certification field | Suggestions for Certification field |
| 9 | **Advanced Search Suggestions** - Verify suggestions for Tier field | Suggestions for Tier field |

</details>

<details open>
<summary>📄 <b>SearchExport.spec.ts</b> (7 tests, 22 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchExport.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchExport.spec.ts)

### Search Export

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Export** - Export button opens scope modal with correct options | Export button opens scope modal with correct options |
| | ↳ *Export button is visible* | |
| | ↳ *Clicking Export opens scope modal with title and scope label* | |
| | ↳ *Modal shows tab-specific scope and All matching assets options* | |
| | ↳ *All matching assets is selected by default* | |
| | ↳ *Selecting the tab-scope card checks the visible radio* | |
| | ↳ *Cancel button closes the modal* | |
| 2 | **Search Export** - Search mode visible export downloads CSV with tab-specific row count | Search mode visible export downloads CSV with tab-specific row count |
| | ↳ *Read displayed count from Visible Results card* | |
| | ↳ *CSV row count matches the displayed tab count* | |
| 3 | **Search Export** - Search mode visible export count matches the first result tab count | Search mode visible export count matches the first result tab count |
| | ↳ *Read the count from the first left panel result tab* | |
| | ↳ *Read the visible results count from the export modal* | |
| | ↳ *Visible export count matches the first result tab count* | |
| 4 | **Search Export** - Filtered search visible export downloads CSV with the filtered record count | Filtered search visible export downloads CSV with the filtered record count |
| | ↳ *Apply Service filter from the Explore page* | |
| | ↳ *Read filtered count from the first left panel tab* | |
| | ↳ *Read filtered visible count from the export modal* | |
| | ↳ *Filtered page count matches the export modal count* | |
| | ↳ *CSV row count matches the filtered record count* | |
| 5 | **Search Export** - Browse mode visible export downloads CSV with current page row count | Browse mode visible export downloads CSV with current page row count |
| | ↳ *Read displayed count from Visible Results card* | |
| | ↳ *CSV row count matches the displayed page count* | |
| 6 | **Search Export** - Export is disabled when all matching assets exceed 200k | Export is disabled when all matching assets exceed 200k |
| | ↳ *Limit alert is shown in modal* | |
| | ↳ *Export button remains disabled* | |
| 7 | **Search Export** - Export queues a background job and downloads from the jobs tray | Export queues a background job and downloads from the jobs tray |
| | ↳ *Jobs tray surfaces the export job* | |
| | ↳ *Download from the tray serves the job result CSV* | |

</details>

<details open>
<summary>📄 <b>GlobalSearchSuggestions.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/GlobalSearchSuggestions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/GlobalSearchSuggestions.spec.ts)

### Global Search Column Suggestions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Global Search Column Suggestions** - Navigate to column from column suggestion | Navigate to column from column suggestion |

</details>

<details open>
<summary>📄 <b>SchemaSearch.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SchemaSearch.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SchemaSearch.spec.ts)

### Schema search

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Schema search** - Search schema in database page | Search schema in database page |

</details>

<details open>
<summary>📄 <b>SearchIndexNestedColumns.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchIndexNestedColumns.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchIndexNestedColumns.spec.ts)

### Search index - deeply nested oversized columns

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search index - deeply nested oversized columns** - oversized deeply nested column indexes and an in-limit column name is searchable | Oversized deeply nested column indexes and an in-limit column name is searchable |

</details>

<details open>
<summary>📄 <b>GlobalSearch.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/GlobalSearch.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/GlobalSearch.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | searching for longer description should work | Searching for longer description should work |

</details>

<details open>
<summary>📄 <b>SearchNightly.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Search/SearchNightly.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Search/SearchNightly.spec.ts)

### Search Nightly Smoke

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Search Nightly Smoke** - should load global search suggestions for sample data query | Load global search suggestions for sample data query |

</details>


---

<div id="data-assets"></div>

## Data Assets

<details open>
<summary>📄 <b>DataAssetRulesDisabled.spec.ts</b> (32 tests, 32 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataAssetRulesDisabled.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataAssetRulesDisabled.spec.ts)

### Data Asset Rules Disabled

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Asset Rules Disabled** - Verify the ApiEndpoint entity item action after rules disabled | The ApiEndpoint entity item action after rules disabled |
| 2 | **Data Asset Rules Disabled** - Verify the Table entity item action after rules disabled | The Table entity item action after rules disabled |
| 3 | **Data Asset Rules Disabled** - Verify the Store Procedure entity item action after rules disabled | The Store Procedure entity item action after rules disabled |
| 4 | **Data Asset Rules Disabled** - Verify the Dashboard entity item action after rules disabled | The Dashboard entity item action after rules disabled |
| 5 | **Data Asset Rules Disabled** - Verify the Pipeline entity item action after rules disabled | The Pipeline entity item action after rules disabled |
| 6 | **Data Asset Rules Disabled** - Verify the Topic entity item action after rules disabled | The Topic entity item action after rules disabled |
| 7 | **Data Asset Rules Disabled** - Verify the MlModel entity item action after rules disabled | The MlModel entity item action after rules disabled |
| 8 | **Data Asset Rules Disabled** - Verify the Container entity item action after rules disabled | The Container entity item action after rules disabled |
| 9 | **Data Asset Rules Disabled** - Verify the SearchIndex entity item action after rules disabled | The SearchIndex entity item action after rules disabled |
| 10 | **Data Asset Rules Disabled** - Verify the DashboardDataModel entity item action after rules disabled | The DashboardDataModel entity item action after rules disabled |
| 11 | **Data Asset Rules Disabled** - Verify the Metric entity item action after rules disabled | The Metric entity item action after rules disabled |
| 12 | **Data Asset Rules Disabled** - Verify the Chart entity item action after rules disabled | The Chart entity item action after rules disabled |
| 13 | **Data Asset Rules Disabled** - Verify the Directory entity item action after rules disabled | The Directory entity item action after rules disabled |
| 14 | **Data Asset Rules Disabled** - Verify the File entity item action after rules disabled | The File entity item action after rules disabled |
| 15 | **Data Asset Rules Disabled** - Verify the Spreadsheet entity item action after rules disabled | The Spreadsheet entity item action after rules disabled |
| 16 | **Data Asset Rules Disabled** - Verify the Worksheet entity item action after rules disabled | The Worksheet entity item action after rules disabled |
| 17 | **Data Asset Rules Disabled** - Verify the Api Service entity item action after rules disabled | The Api Service entity item action after rules disabled |
| 18 | **Data Asset Rules Disabled** - Verify the Api Collection entity item action after rules disabled | The Api Collection entity item action after rules disabled |
| 19 | **Data Asset Rules Disabled** - Verify the Database Service entity item action after rules disabled | The Database Service entity item action after rules disabled |
| 20 | **Data Asset Rules Disabled** - Verify the Dashboard Service entity item action after rules disabled | The Dashboard Service entity item action after rules disabled |
| 21 | **Data Asset Rules Disabled** - Verify the Messaging Service entity item action after rules disabled | The Messaging Service entity item action after rules disabled |
| 22 | **Data Asset Rules Disabled** - Verify the MlModel Service entity item action after rules disabled | The MlModel Service entity item action after rules disabled |
| 23 | **Data Asset Rules Disabled** - Verify the Pipeline Service entity item action after rules disabled | The Pipeline Service entity item action after rules disabled |
| 24 | **Data Asset Rules Disabled** - Verify the SearchIndex Service entity item action after rules disabled | The SearchIndex Service entity item action after rules disabled |
| 25 | **Data Asset Rules Disabled** - Verify the Storage Service entity item action after rules disabled | The Storage Service entity item action after rules disabled |
| 26 | **Data Asset Rules Disabled** - Verify the Database entity item action after rules disabled | The Database entity item action after rules disabled |
| 27 | **Data Asset Rules Disabled** - Verify the Database Schema entity item action after rules disabled | The Database Schema entity item action after rules disabled |
| 28 | **Data Asset Rules Disabled** - Verify the Drive Service entity item action after rules disabled | The Drive Service entity item action after rules disabled |

### Data Asset Rules Disabled Bulk Edit Actions

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Asset Rules Disabled Bulk Edit Actions** - Database service | Database service |
| | ↳ *Perform bulk edit action* | |
| 2 | **Data Asset Rules Disabled Bulk Edit Actions** - Database | Database |
| | ↳ *Perform bulk edit action* | |
| 3 | **Data Asset Rules Disabled Bulk Edit Actions** - Database Schema | Database Schema |
| | ↳ *Perform bulk edit action* | |

### GlossaryTerm Domain Entity Rules Disabled

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **GlossaryTerm Domain Entity Rules Disabled** - should allow multiple domain selection for glossary term when entity rules are disabled | Allow multiple domain selection for glossary term when entity rules are disabled |

</details>

<details open>
<summary>📄 <b>DataAssetRulesEnabled.spec.ts</b> (29 tests, 29 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/DataAssetRulesEnabled.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/DataAssetRulesEnabled.spec.ts)

### Data Asset Rules Enabled

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Asset Rules Enabled** - Verify the ApiEndpoint Entity Action items after rules is Enabled | The ApiEndpoint Entity Action items after rules is Enabled |
| 2 | **Data Asset Rules Enabled** - Verify the Table Entity Action items after rules is Enabled | The Table Entity Action items after rules is Enabled |
| 3 | **Data Asset Rules Enabled** - Verify the Store Procedure Entity Action items after rules is Enabled | The Store Procedure Entity Action items after rules is Enabled |
| 4 | **Data Asset Rules Enabled** - Verify the Dashboard Entity Action items after rules is Enabled | The Dashboard Entity Action items after rules is Enabled |
| 5 | **Data Asset Rules Enabled** - Verify the Pipeline Entity Action items after rules is Enabled | The Pipeline Entity Action items after rules is Enabled |
| 6 | **Data Asset Rules Enabled** - Verify the Topic Entity Action items after rules is Enabled | The Topic Entity Action items after rules is Enabled |
| 7 | **Data Asset Rules Enabled** - Verify the MlModel Entity Action items after rules is Enabled | The MlModel Entity Action items after rules is Enabled |
| 8 | **Data Asset Rules Enabled** - Verify the Container Entity Action items after rules is Enabled | The Container Entity Action items after rules is Enabled |
| 9 | **Data Asset Rules Enabled** - Verify the SearchIndex Entity Action items after rules is Enabled | The SearchIndex Entity Action items after rules is Enabled |
| 10 | **Data Asset Rules Enabled** - Verify the DashboardDataModel Entity Action items after rules is Enabled | The DashboardDataModel Entity Action items after rules is Enabled |
| 11 | **Data Asset Rules Enabled** - Verify the Metric Entity Action items after rules is Enabled | The Metric Entity Action items after rules is Enabled |
| 12 | **Data Asset Rules Enabled** - Verify the Chart Entity Action items after rules is Enabled | The Chart Entity Action items after rules is Enabled |
| 13 | **Data Asset Rules Enabled** - Verify the Directory Entity Action items after rules is Enabled | The Directory Entity Action items after rules is Enabled |
| 14 | **Data Asset Rules Enabled** - Verify the File Entity Action items after rules is Enabled | The File Entity Action items after rules is Enabled |
| 15 | **Data Asset Rules Enabled** - Verify the Spreadsheet Entity Action items after rules is Enabled | The Spreadsheet Entity Action items after rules is Enabled |
| 16 | **Data Asset Rules Enabled** - Verify the Worksheet Entity Action items after rules is Enabled | The Worksheet Entity Action items after rules is Enabled |
| 17 | **Data Asset Rules Enabled** - Verify the Api Service Entity Action items after rules is Enabled | The Api Service Entity Action items after rules is Enabled |
| 18 | **Data Asset Rules Enabled** - Verify the Api Collection Entity Action items after rules is Enabled | The Api Collection Entity Action items after rules is Enabled |
| 19 | **Data Asset Rules Enabled** - Verify the Database Service Entity Action items after rules is Enabled | The Database Service Entity Action items after rules is Enabled |
| 20 | **Data Asset Rules Enabled** - Verify the Dashboard Service Entity Action items after rules is Enabled | The Dashboard Service Entity Action items after rules is Enabled |
| 21 | **Data Asset Rules Enabled** - Verify the Messaging Service Entity Action items after rules is Enabled | The Messaging Service Entity Action items after rules is Enabled |
| 22 | **Data Asset Rules Enabled** - Verify the MlModel Service Entity Action items after rules is Enabled | The MlModel Service Entity Action items after rules is Enabled |
| 23 | **Data Asset Rules Enabled** - Verify the Pipeline Service Entity Action items after rules is Enabled | The Pipeline Service Entity Action items after rules is Enabled |
| 24 | **Data Asset Rules Enabled** - Verify the SearchIndex Service Entity Action items after rules is Enabled | The SearchIndex Service Entity Action items after rules is Enabled |
| 25 | **Data Asset Rules Enabled** - Verify the Storage Service Entity Action items after rules is Enabled | The Storage Service Entity Action items after rules is Enabled |
| 26 | **Data Asset Rules Enabled** - Verify the Database Entity Action items after rules is Enabled | The Database Entity Action items after rules is Enabled |
| 27 | **Data Asset Rules Enabled** - Verify the Database Schema Entity Action items after rules is Enabled | The Database Schema Entity Action items after rules is Enabled |
| 28 | **Data Asset Rules Enabled** - Verify the Drive Service Entity Action items after rules is Enabled | The Drive Service Entity Action items after rules is Enabled |

### GlossaryTerm Domain Entity Rules Enabled

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **GlossaryTerm Domain Entity Rules Enabled** - should enforce single domain selection for glossary term when entity rules are enabled | Enforce single domain selection for glossary term when entity rules are enabled |

</details>

<details open>
<summary>📄 <b>Table.spec.ts</b> (15 tests, 15 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Table.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Table.spec.ts)

### Table pagination sorting search scenarios 

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table pagination sorting search scenarios ** - Table pagination with sorting should works | Table pagination with sorting should works |
| 2 | **Table pagination sorting search scenarios ** - Table search with sorting should work | Table search with sorting should work |
| 3 | **Table pagination sorting search scenarios ** - Table filter with sorting should work | Table filter with sorting should work |
| 4 | **Table pagination sorting search scenarios ** - Table page should show schema tab with count | Table page should show schema tab with count |
| 5 | **Table pagination sorting search scenarios ** - should persist current page | Persist current page |
| 6 | **Table pagination sorting search scenarios ** - should persist page size | Persist page size |

### Table & Data Model columns table pagination

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table & Data Model columns table pagination** - expand collapse should only visible for nested columns | Expand collapse should only visible for nested columns |
| 2 | **Table & Data Model columns table pagination** - expand / collapse should not appear after updating nested fields table | Expand / collapse should not appear after updating nested fields table |

### Tags and glossary terms should be consistent for search 

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Tags and glossary terms should be consistent for search ** - Glossary term should be consistent for search | Glossary term should be consistent for search |
| 2 | **Tags and glossary terms should be consistent for search ** - Tags term should be consistent for search | Tags term should be consistent for search |

### Large Table Column Search & Copy Link

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Large Table Column Search & Copy Link** - Search for column, copy link, and verify side panel behavior | Search for column, copy link, and verify side panel behavior |

### dbt Tab Visibility for Seed Files

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **dbt Tab Visibility for Seed Files** - should show dbt tab if only path is present | Show dbt tab if only path is present |
| 2 | **dbt Tab Visibility for Seed Files** - should show dbt tab if only source project is present | Show dbt tab if only source project is present |

### Table source URL header button

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table source URL header button** - source URL button links to the configured source | Source URL button links to the configured source |

### Table open-task header stat

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table open-task header stat** - open-task stat shows the count and links to the Tasks tab | Open-task stat shows the count and links to the Tasks tab |

</details>

<details open>
<summary>📄 <b>Container.spec.ts</b> (12 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Container.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Container.spec.ts)

### Container entity specific tests 

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container entity specific tests ** - Container page should show Schema and Children count | Container page should show Schema and Children count |
| 2 | **Container entity specific tests ** - Container page children pagination | Container page children pagination |
| 3 | **Container entity specific tests ** - expand / collapse should not appear after updating nested fields for container | Expand / collapse should not appear after updating nested fields for container |
| 4 | **Container entity specific tests ** - Copy column link button should copy the column URL to clipboard | Copy column link button should copy the column URL to clipboard |
| 5 | **Container entity specific tests ** - Copy column link should have valid URL format | Copy column link should have valid URL format |

### Deeply nested container navigation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Deeply nested container navigation** - should correctly load, display breadcrumbs, and navigate deeply nested containers | Correctly load, display breadcrumbs, and navigate deeply nested containers |
| | ↳ *correct container loads for 5-part FQN (4 nesting levels)* | |
| | ↳ *breadcrumb shows all 4 ancestor levels at L4* | |
| | ↳ *clicking L3 breadcrumb link navigates to L3 and updates page* | |
| | ↳ *clicking L2 breadcrumb link navigates to L2 and updates page* | |
| 2 | **Deeply nested container navigation** - auto-collapses the breadcrumb into an overflow menu on a narrow viewport | Auto-collapses the breadcrumb into an overflow menu on a narrow viewport |
| | ↳ *first and current crumbs stay inline, middle ones collapse* | |
| | ↳ *overflow menu reveals the hidden ancestors* | |
| | ↳ *navigating from the overflow menu updates the page* | |

### Children tab search + Deleted toggle

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Children tab search + Deleted toggle** - search filters direct children only — sibling subtree never leaks | Search filters direct children only — sibling subtree never leaks |
| 2 | **Children tab search + Deleted toggle** - Deleted toggle reveals and hides soft-deleted children | Deleted toggle reveals and hides soft-deleted children |
| 3 | **Children tab search + Deleted toggle** - search + Deleted toggle compose to find soft-deleted children by name | Search + Deleted toggle compose to find soft-deleted children by name |

### Children tab Deleted toggle is scoped per-level

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Children tab Deleted toggle is scoped per-level** - grandparent Deleted toggle returns empty — deleted grandchild does not bubble up | Grandparent Deleted toggle returns empty — deleted grandchild does not bubble up |
| 2 | **Children tab Deleted toggle is scoped per-level** - parent Deleted toggle reveals the deleted grandchild — its actual direct parent | Parent Deleted toggle reveals the deleted grandchild — its actual direct parent |

</details>

<details open>
<summary>📄 <b>TableSorting.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TableSorting.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TableSorting.spec.ts)

### Table Sorting

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Sorting** - Services page should have sorting on name column | Services page should have sorting on name column |
| 2 | **Table Sorting** - Database Schema page should have sorting on name column | Database Schema page should have sorting on name column |
| 3 | **Table Sorting** - API Endpoint page should have sorting on name column | API Endpoint page should have sorting on name column |
| 4 | **Table Sorting** - should have sorting on name column | Have sorting on name column |
| 5 | **Table Sorting** - Database Schema Tables tab should have sorting on name column | Database Schema Tables tab should have sorting on name column |
| 6 | **Table Sorting** - should have sorting on name column | Have sorting on name column |
| 7 | **Table Sorting** - Data Models Table should have sorting on name column | Data Models Table should have sorting on name column |
| 8 | **Table Sorting** - Stored Procedure Table should have sorting on name column | Stored Procedure Table should have sorting on name column |
| 9 | **Table Sorting** - Topics Table should have sorting on name column | Topics Table should have sorting on name column |
| 10 | **Table Sorting** - Drives Service Files Table should have sorting on name column | Drives Service Files Table should have sorting on name column |
| 11 | **Table Sorting** - Drives Service Spreadsheets Table should have sorting on name column | Drives Service Spreadsheets Table should have sorting on name column |

</details>

<details open>
<summary>📄 <b>SampleDataTableOperations.spec.ts</b> (10 tests, 33 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SampleDataTableOperations.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SampleDataTableOperations.spec.ts)

### Sample Data Tab - Download and Delete Functionality

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Sample Data Tab - Download and Delete Functionality** - should display sample data tab with rows and columns | Display sample data tab with rows and columns |
| | ↳ *Navigate to sample data tab* | |
| | ↳ *Verify sample data table renders with data* | |
| | ↳ *Verify sample data rows are visible* | |
| 2 | **Sample Data Tab - Download and Delete Functionality** - should change row limit using the selector | Change row limit using the selector |
| | ↳ *Navigate to sample data tab* | |
| | ↳ *Change row limit to 10* | |
| | ↳ *Change row limit to 1000* | |
| | ↳ *Reset row limit back to 100* | |
| 3 | **Sample Data Tab - Download and Delete Functionality** - should show export and delete options in manage dropdown for admin | Show export and delete options in manage dropdown for admin |
| | ↳ *Navigate to sample data tab* | |
| | ↳ *Open manage button dropdown* | |
| | ↳ *Verify both export and delete options are present* | |
| | ↳ *Close the dropdown* | |
| 4 | **Sample Data Tab - Download and Delete Functionality** - should download sample data as CSV when export is clicked | Download sample data as CSV when export is clicked |
| | ↳ *Navigate to sample data tab* | |
| | ↳ *Click export and verify download triggered* | |
| 5 | **Sample Data Tab - Download and Delete Functionality** - should open delete confirmation modal | Open delete confirmation modal |
| | ↳ *Navigate to sample data tab* | |
| | ↳ *Open delete modal via manage dropdown* | |
| | ↳ *Verify confirm button is enabled* | |
| | ↳ *Close modal by clicking cancel* | |
| 6 | **Sample Data Tab - Download and Delete Functionality** - should delete sample data and show empty state after confirmation | Delete sample data and show empty state after confirmation |
| | ↳ *Navigate to sample data tab for table with data* | |
| | ↳ *Open delete modal via manage dropdown* | |
| | ↳ *Type DELETE and confirm deletion* | |
| | ↳ *Verify empty state is shown after deletion* | |
| 7 | **Sample Data Tab - Download and Delete Functionality** - should cancel deletion and preserve sample data | Cancel deletion and preserve sample data |
| | ↳ *Navigate to sample data tab* | |
| | ↳ *Open delete modal and cancel* | |
| | ↳ *Verify sample data is still visible after cancellation* | |
| 8 | **Sample Data Tab - Download and Delete Functionality** - should show empty state for table without sample data | Show empty state for table without sample data |
| | ↳ *Navigate to sample data tab for empty table* | |
| | ↳ *Verify empty placeholder is shown instead of data table* | |
| 9 | **Sample Data Tab - Download and Delete Functionality** - should show only export option for data consumer without edit permissions | Show only export option for data consumer without edit permissions |
| | ↳ *Navigate to sample data tab as data consumer* | |
| | ↳ *Open manage dropdown as data consumer* | |
| | ↳ *Verify export is visible but delete is hidden* | |
| 10 | **Sample Data Tab - Download and Delete Functionality** - should persist row limit selection after switching tabs and returning | Persist row limit selection after switching tabs and returning |
| | ↳ *Navigate to sample data tab* | |
| | ↳ *Change row limit to 10* | |
| | ↳ *Switch to Schema tab and back to Sample Data* | |
| | ↳ *Verify row limit defaults back on tab re-entry* | |

</details>

<details open>
<summary>📄 <b>ContextCenterDashboard.spec.ts</b> (9 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ContextCenterDashboard.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ContextCenterDashboard.spec.ts)

### Context Center - Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Context Center - Dashboard** - recently created article appears in the Articles pillar card recent list | Recently created article appears in the Articles pillar card recent list |
| 2 | **Context Center - Dashboard** - recently uploaded document appears in the Documents pillar card recent list | Recently uploaded document appears in the Documents pillar card recent list |
| 3 | **Context Center - Dashboard** - recently created memory appears in the Memories pillar card recent list | Recently created memory appears in the Memories pillar card recent list |
| 4 | **Context Center - Dashboard** - recently viewed article appears in the Recently Viewed widget after visiting it | Recently viewed article appears in the Recently Viewed widget after visiting it |
| 5 | **Context Center - Dashboard** - memory with highest usageCount appears at the top of the Most Cited Memories widget | Memory with highest usageCount appears at the top of the Most Cited Memories widget |
| 6 | **Context Center - Dashboard** - folders widget shows folder with file count and expanding reveals child file | Folders widget shows folder with file count and expanding reveals child file |
| 7 | **Context Center - Dashboard** - Upload File button opens the upload modal and uploaded file appears in the recent documents list | Upload File button opens the upload modal and uploaded file appears in the recent documents list |
| 8 | **Context Center - Dashboard** - Create > Quick Link creates a quick link that appears in the Articles pillar card recent list | Create > Quick Link creates a quick link that appears in the Articles pillar card recent list |
| 9 | **Context Center - Dashboard** - clicking each top summary card redirects to its corresponding list page | Clicking each top summary card redirects to its corresponding list page |
| | ↳ *Articles card redirects to /context-center/articles* | |
| | ↳ *Documents card redirects to /context-center/documents* | |
| | ↳ *Memories card redirects to /context-center/memories* | |

</details>

<details open>
<summary>📄 <b>DataAssetsWidget.spec.ts</b> (7 tests, 7 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/LandingPageWidgets/DataAssetsWidget.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/LandingPageWidgets/DataAssetsWidget.spec.ts)

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - Check Data Asset and Service Filtration | Data Asset and Service Filtration |

### Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard** - Check Data Asset and Service Filtration | Data Asset and Service Filtration |

### Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline** - Check Data Asset and Service Filtration | Data Asset and Service Filtration |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - Check Data Asset and Service Filtration | Data Asset and Service Filtration |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - Check Data Asset and Service Filtration | Data Asset and Service Filtration |

### MlModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlModel** - Check Data Asset and Service Filtration | Data Asset and Service Filtration |

### SearchIndex

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SearchIndex** - Check Data Asset and Service Filtration | Data Asset and Service Filtration |

</details>

<details open>
<summary>📄 <b>Dashboards.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Dashboards.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Dashboards.spec.ts)

### Dashboards

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboards** - should change the page size | Change the page size |

### Dashboard and Charts deleted toggle

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard and Charts deleted toggle** - should be able to toggle between deleted and non-deleted charts | Be able to toggle between deleted and non-deleted charts |

### Data Model

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Model** - expand / collapse should not appear after updating nested fields for dashboardDataModels | Expand / collapse should not appear after updating nested fields for dashboardDataModels |

### Data Model with special characters in name

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Model with special characters in name** - should display data model when service name contains dots | Display data model when service name contains dots |

</details>

<details open>
<summary>📄 <b>Topic.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/Topic.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/Topic.spec.ts)

### Topic entity specific tests 

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic entity specific tests ** - Topic page should show schema tab with count | Topic page should show schema tab with count |
| 2 | **Topic entity specific tests ** - Copy field link button should copy the field URL to clipboard | Copy field link button should copy the field URL to clipboard |
| 3 | **Topic entity specific tests ** - Copy field link should have valid URL format | Copy field link should have valid URL format |
| 4 | **Topic entity specific tests ** - Copy nested field link should include full hierarchical path | Copy nested field link should include full hierarchical path |

</details>

<details open>
<summary>📄 <b>SchemaTable.spec.ts</b> (4 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/SchemaTable.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/SchemaTable.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | schema table test | Schema table test |
| | ↳ *set owner* | |
| | ↳ *set the description* | |
| 2 | Copy column link button should copy the column URL to clipboard | Copy column link button should copy the column URL to clipboard |
| 3 | Copy column link should have valid URL format | Copy column link should have valid URL format |
| 4 | Copy nested column link should include full hierarchical path | Copy nested column link should include full hierarchical path |

</details>

<details open>
<summary>📄 <b>Container.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Container.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Container.spec.ts)

### Container | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **Container | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>Dashboard.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Dashboard.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Dashboard.spec.ts)

### Dashboard | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **Dashboard | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>Database.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Database.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Database.spec.ts)

### Database | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Database | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **Database | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>DatabaseSchema.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/DatabaseSchema.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/DatabaseSchema.spec.ts)

### DatabaseSchema | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **DatabaseSchema | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **DatabaseSchema | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>Pipeline.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Pipeline.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Pipeline.spec.ts)

### Pipeline | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **Pipeline | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>Topic.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Topic.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/Topic.spec.ts)

### Topic | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **Topic | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>PipelineValidation.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/PipelineValidation.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/PipelineValidation.spec.ts)

### Pipeline entity name validation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline entity name validation** - should reject pipeline creation when task name is empty | Reject pipeline creation when task name is empty |
| 2 | **Pipeline entity name validation** - should reject pipeline creation when task name contains reserved FQN characters | Reject pipeline creation when task name contains reserved FQN characters |

</details>

<details open>
<summary>📄 <b>SchemaDefinition.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SchemaDefinition.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SchemaDefinition.spec.ts)

### Schema definition (views)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Schema definition (views)** - Verify schema definition (views) of table entity | Schema definition (views) of table entity |

</details>

<details open>
<summary>📄 <b>TableConstraint.spec.ts</b> (1 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/TableConstraint.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/TableConstraint.spec.ts)

### Table Constraints

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table Constraints** - Table Constraint | Table Constraint |
| | ↳ *Add Constraints* | |
| | ↳ *Verify Constraints Data* | |
| | ↳ *Remove Constraints* | |

</details>

<details open>
<summary>📄 <b>PipelineExecution.spec.ts</b> (1 tests, 5 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/PipelineExecution.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/PipelineExecution.spec.ts)

### Pipeline Execution Tab

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline Execution Tab** - Execution tab should display start time, end time, and duration columns | Execution tab should display start time, end time, and duration columns |
| | ↳ *Navigate to pipeline entity page* | |
| | ↳ *Navigate to Executions tab* | |
| | ↳ *Verify ListView displays timing columns* | |
| | ↳ *Verify execution data rows are present* | |
| | ↳ *Verify duration is 10 minutes for both tasks* | |

</details>


---

<div id="curated-assets"></div>

## Curated Assets

<details open>
<summary>📄 <b>CuratedAssets.spec.ts</b> (23 tests, 23 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/CuratedAssets.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/CuratedAssets.spec.ts)

### Curated Assets Widget

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Curated Assets Widget** - Test Tables with display name filter | Tables with display name filter |
| 2 | **Curated Assets Widget** - Test Dashboards with display name filter | Dashboards with display name filter |
| 3 | **Curated Assets Widget** - Test Pipelines with display name filter | Pipelines with display name filter |
| 4 | **Curated Assets Widget** - Test Topics with display name filter | Topics with display name filter |
| 5 | **Curated Assets Widget** - Test ML Model with display name filter | ML Model with display name filter |
| 6 | **Curated Assets Widget** - Test Containers with display name filter | Containers with display name filter |
| 7 | **Curated Assets Widget** - Test Search Indexes with display name filter | Search Indexes with display name filter |
| 8 | **Curated Assets Widget** - Test Charts with display name filter | Charts with display name filter |
| 9 | **Curated Assets Widget** - Test Stored Procedures with display name filter | Stored Procedures with display name filter |
| 10 | **Curated Assets Widget** - Test Data Model with display name filter | Data Model with display name filter |
| 11 | **Curated Assets Widget** - Test Glossary Terms with display name filter | Glossary Terms with display name filter |
| 12 | **Curated Assets Widget** - Test Metrics with display name filter | Metrics with display name filter |
| 13 | **Curated Assets Widget** - Test Databases with display name filter | Databases with display name filter |
| 14 | **Curated Assets Widget** - Test Database Schemas with display name filter | Database Schemas with display name filter |
| 15 | **Curated Assets Widget** - Test API Collections with display name filter | API Collections with display name filter |
| 16 | **Curated Assets Widget** - Test API Endpoints with display name filter | API Endpoints with display name filter |
| 17 | **Curated Assets Widget** - Test Data Products with display name filter | Data Products with display name filter |
| 18 | **Curated Assets Widget** - Test Knowledge Pages with display name filter | Knowledge Pages with display name filter |
| 19 | **Curated Assets Widget** - Entity type "ALL" with basic filter | Entity type "ALL" with basic filter |
| 20 | **Curated Assets Widget** - Multiple entity types with OR conditions | Multiple entity types with OR conditions |
| 21 | **Curated Assets Widget** - Multiple entity types with AND conditions | Multiple entity types with AND conditions |
| 22 | **Curated Assets Widget** - Complex nested groups | Complex nested groups |
| 23 | **Curated Assets Widget** - Placeholder validation - widget not visible without configuration | Placeholder validation - widget not visible without configuration |

</details>


---

<div id="explore"></div>

## Explore

<details open>
<summary>📄 <b>ExplorePageRightPanel.spec.ts</b> (234 tests, 344 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ExplorePageRightPanel.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ExplorePageRightPanel.spec.ts)

### Right Panel Test Suite

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for table | Perform CRUD and Removal operations for table |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 2 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for dashboard | Perform CRUD and Removal operations for dashboard |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 3 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for pipeline | Perform CRUD and Removal operations for pipeline |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 4 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for topic | Perform CRUD and Removal operations for topic |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 5 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for database | Perform CRUD and Removal operations for database |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 6 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for databaseSchema | Perform CRUD and Removal operations for databaseSchema |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 7 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for dashboardDataModel | Perform CRUD and Removal operations for dashboardDataModel |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 8 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for mlmodel | Perform CRUD and Removal operations for mlmodel |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 9 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for container | Perform CRUD and Removal operations for container |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 10 | **Right Panel Test Suite** - Should perform CRUD and Removal operations for searchIndex | Perform CRUD and Removal operations for searchIndex |
| | ↳ *Navigate to entity* | |
| | ↳ *Update description* | |
| | ↳ *Update/edit tags* | |
| | ↳ *Update/edit tier* | |
| | ↳ *Update/edit glossary terms* | |
| | ↳ *Update owners* | |
| | ↳ *Update domain* | |
| | ↳ *Remove tag* | |
| | ↳ *Remove tier* | |
| | ↳ *Remove glossary term* | |
| | ↳ *Remove domain* | |
| | ↳ *Remove user owner* | |
| 11 | **Right Panel Test Suite** - Should display and verify schema fields for table | Display and verify schema fields for table |
| 12 | **Right Panel Test Suite** - Should display and verify schema fields for dashboard | Display and verify schema fields for dashboard |
| 13 | **Right Panel Test Suite** - Should display and verify schema fields for pipeline | Display and verify schema fields for pipeline |
| 14 | **Right Panel Test Suite** - Should display and verify schema fields for topic | Display and verify schema fields for topic |
| 15 | **Right Panel Test Suite** - Should display and verify schema fields for database | Display and verify schema fields for database |
| 16 | **Right Panel Test Suite** - Should display and verify schema fields for databaseSchema | Display and verify schema fields for databaseSchema |
| 17 | **Right Panel Test Suite** - Should display and verify schema fields for dashboardDataModel | Display and verify schema fields for dashboardDataModel |
| 18 | **Right Panel Test Suite** - Should display and verify schema fields for container | Display and verify schema fields for container |
| 19 | **Right Panel Test Suite** - Should display and verify schema fields for searchIndex | Display and verify schema fields for searchIndex |
| 20 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for table | Validates visible/hidden tabs and tab content for table |
| 21 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for dashboard | Validates visible/hidden tabs and tab content for dashboard |
| 22 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for pipeline | Validates visible/hidden tabs and tab content for pipeline |
| 23 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for topic | Validates visible/hidden tabs and tab content for topic |
| 24 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for database | Validates visible/hidden tabs and tab content for database |
| 25 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for databaseSchema | Validates visible/hidden tabs and tab content for databaseSchema |
| 26 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for dashboardDataModel | Validates visible/hidden tabs and tab content for dashboardDataModel |
| 27 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for mlmodel | Validates visible/hidden tabs and tab content for mlmodel |
| 28 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for container | Validates visible/hidden tabs and tab content for container |
| 29 | **Right Panel Test Suite** - validates visible/hidden tabs and tab content for searchIndex | Validates visible/hidden tabs and tab content for searchIndex |
| 30 | **Right Panel Test Suite** - Should navigate to lineage and test controls for table | Navigate to lineage and test controls for table |
| 31 | **Right Panel Test Suite** - Should handle lineage expansion buttons for table | Handle lineage expansion buttons for table |
| 32 | **Right Panel Test Suite** - Should navigate to lineage and test controls for dashboard | Navigate to lineage and test controls for dashboard |
| 33 | **Right Panel Test Suite** - Should handle lineage expansion buttons for dashboard | Handle lineage expansion buttons for dashboard |
| 34 | **Right Panel Test Suite** - Should navigate to lineage and test controls for pipeline | Navigate to lineage and test controls for pipeline |
| 35 | **Right Panel Test Suite** - Should handle lineage expansion buttons for pipeline | Handle lineage expansion buttons for pipeline |
| 36 | **Right Panel Test Suite** - Should navigate to lineage and test controls for topic | Navigate to lineage and test controls for topic |
| 37 | **Right Panel Test Suite** - Should handle lineage expansion buttons for topic | Handle lineage expansion buttons for topic |
| 38 | **Right Panel Test Suite** - Should navigate to lineage and test controls for dashboardDataModel | Navigate to lineage and test controls for dashboardDataModel |
| 39 | **Right Panel Test Suite** - Should handle lineage expansion buttons for dashboardDataModel | Handle lineage expansion buttons for dashboardDataModel |
| 40 | **Right Panel Test Suite** - Should navigate to lineage and test controls for mlmodel | Navigate to lineage and test controls for mlmodel |
| 41 | **Right Panel Test Suite** - Should handle lineage expansion buttons for mlmodel | Handle lineage expansion buttons for mlmodel |
| 42 | **Right Panel Test Suite** - Should navigate to lineage and test controls for container | Navigate to lineage and test controls for container |
| 43 | **Right Panel Test Suite** - Should handle lineage expansion buttons for container | Handle lineage expansion buttons for container |
| 44 | **Right Panel Test Suite** - Should navigate to lineage and test controls for searchIndex | Navigate to lineage and test controls for searchIndex |
| 45 | **Right Panel Test Suite** - Should handle lineage expansion buttons for searchIndex | Handle lineage expansion buttons for searchIndex |
| 46 | **Right Panel Test Suite** - Should show lineage connections created via API in the lineage tab | Show lineage connections created via API in the lineage tab |
| 47 | **Right Panel Test Suite** - Should navigate to data quality and verify tab structure for table | Navigate to data quality and verify tab structure for table |
| 48 | **Right Panel Test Suite** - Should display incidents tab for table | Display incidents tab for table |
| 49 | **Right Panel Test Suite** - Should verify empty state when no test cases for table | Empty state when no test cases for table |
| 50 | **Right Panel Test Suite** - Should display stat cards and filterable test case cards when runs exist | Display stat cards and filterable test case cards when runs exist |
| 51 | **Right Panel Test Suite** - Should search and filter test cases in Data Quality tab | Search and filter test cases in Data Quality tab |
| 52 | **Right Panel Test Suite** - Should show incidents tab content and verify incident details when a failed test case exists | Show incidents tab content and verify incident details when a failed test case exists |
| 53 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for table | Deleted user not visible in owner selection for table |
| 54 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for table | Deleted tag not visible in tag selection for table |
| 55 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for table | Deleted glossary term not visible in selection for table |
| 56 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for dashboard | Deleted user not visible in owner selection for dashboard |
| 57 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for dashboard | Deleted tag not visible in tag selection for dashboard |
| 58 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for dashboard | Deleted glossary term not visible in selection for dashboard |
| 59 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for pipeline | Deleted user not visible in owner selection for pipeline |
| 60 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for pipeline | Deleted tag not visible in tag selection for pipeline |
| 61 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for pipeline | Deleted glossary term not visible in selection for pipeline |
| 62 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for topic | Deleted user not visible in owner selection for topic |
| 63 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for topic | Deleted tag not visible in tag selection for topic |
| 64 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for topic | Deleted glossary term not visible in selection for topic |
| 65 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for database | Deleted user not visible in owner selection for database |
| 66 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for database | Deleted tag not visible in tag selection for database |
| 67 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for database | Deleted glossary term not visible in selection for database |
| 68 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for databaseSchema | Deleted user not visible in owner selection for databaseSchema |
| 69 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for databaseSchema | Deleted tag not visible in tag selection for databaseSchema |
| 70 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for databaseSchema | Deleted glossary term not visible in selection for databaseSchema |
| 71 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for dashboardDataModel | Deleted user not visible in owner selection for dashboardDataModel |
| 72 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for dashboardDataModel | Deleted tag not visible in tag selection for dashboardDataModel |
| 73 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for dashboardDataModel | Deleted glossary term not visible in selection for dashboardDataModel |
| 74 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for mlmodel | Deleted user not visible in owner selection for mlmodel |
| 75 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for mlmodel | Deleted tag not visible in tag selection for mlmodel |
| 76 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for mlmodel | Deleted glossary term not visible in selection for mlmodel |
| 77 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for container | Deleted user not visible in owner selection for container |
| 78 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for container | Deleted tag not visible in tag selection for container |
| 79 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for container | Deleted glossary term not visible in selection for container |
| 80 | **Right Panel Test Suite** - Should verify deleted user not visible in owner selection for searchIndex | Deleted user not visible in owner selection for searchIndex |
| 81 | **Right Panel Test Suite** - Should verify deleted tag not visible in tag selection for searchIndex | Deleted tag not visible in tag selection for searchIndex |
| 82 | **Right Panel Test Suite** - Should verify deleted glossary term not visible in selection for searchIndex | Deleted glossary term not visible in selection for searchIndex |
| 83 | **Right Panel Test Suite** - Should allow Data Steward to edit description for table | Allow Data Steward to edit description for table |
| 84 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for table | Allow Data Steward to edit owners for table |
| 85 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for table | Allow Data Steward to edit tags for table |
| 86 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for table | Allow Data Steward to edit glossary terms for table |
| 87 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for table | Allow Data Steward to edit tier for table |
| 88 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for table | Allow Data Steward to view all tabs for table |
| 89 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for table | NOT show restricted edit buttons for Data Steward for table |
| 90 | **Right Panel Test Suite** - Should allow Data Steward to edit description for dashboard | Allow Data Steward to edit description for dashboard |
| 91 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for dashboard | Allow Data Steward to edit owners for dashboard |
| 92 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for dashboard | Allow Data Steward to edit tags for dashboard |
| 93 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for dashboard | Allow Data Steward to edit glossary terms for dashboard |
| 94 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for dashboard | Allow Data Steward to edit tier for dashboard |
| 95 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for dashboard | Allow Data Steward to view all tabs for dashboard |
| 96 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for dashboard | NOT show restricted edit buttons for Data Steward for dashboard |
| 97 | **Right Panel Test Suite** - Should allow Data Steward to edit description for pipeline | Allow Data Steward to edit description for pipeline |
| 98 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for pipeline | Allow Data Steward to edit owners for pipeline |
| 99 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for pipeline | Allow Data Steward to edit tags for pipeline |
| 100 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for pipeline | Allow Data Steward to edit glossary terms for pipeline |
| 101 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for pipeline | Allow Data Steward to edit tier for pipeline |
| 102 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for pipeline | Allow Data Steward to view all tabs for pipeline |
| 103 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for pipeline | NOT show restricted edit buttons for Data Steward for pipeline |
| 104 | **Right Panel Test Suite** - Should allow Data Steward to edit description for topic | Allow Data Steward to edit description for topic |
| 105 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for topic | Allow Data Steward to edit owners for topic |
| 106 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for topic | Allow Data Steward to edit tags for topic |
| 107 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for topic | Allow Data Steward to edit glossary terms for topic |
| 108 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for topic | Allow Data Steward to edit tier for topic |
| 109 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for topic | Allow Data Steward to view all tabs for topic |
| 110 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for topic | NOT show restricted edit buttons for Data Steward for topic |
| 111 | **Right Panel Test Suite** - Should allow Data Steward to edit description for database | Allow Data Steward to edit description for database |
| 112 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for database | Allow Data Steward to edit owners for database |
| 113 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for database | Allow Data Steward to edit tags for database |
| 114 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for database | Allow Data Steward to edit glossary terms for database |
| 115 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for database | Allow Data Steward to edit tier for database |
| 116 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for database | Allow Data Steward to view all tabs for database |
| 117 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for database | NOT show restricted edit buttons for Data Steward for database |
| 118 | **Right Panel Test Suite** - Should allow Data Steward to edit description for databaseSchema | Allow Data Steward to edit description for databaseSchema |
| 119 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for databaseSchema | Allow Data Steward to edit owners for databaseSchema |
| 120 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for databaseSchema | Allow Data Steward to edit tags for databaseSchema |
| 121 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for databaseSchema | Allow Data Steward to edit glossary terms for databaseSchema |
| 122 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for databaseSchema | Allow Data Steward to edit tier for databaseSchema |
| 123 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for databaseSchema | Allow Data Steward to view all tabs for databaseSchema |
| 124 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for databaseSchema | NOT show restricted edit buttons for Data Steward for databaseSchema |
| 125 | **Right Panel Test Suite** - Should allow Data Steward to edit description for dashboardDataModel | Allow Data Steward to edit description for dashboardDataModel |
| 126 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for dashboardDataModel | Allow Data Steward to edit owners for dashboardDataModel |
| 127 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for dashboardDataModel | Allow Data Steward to edit tags for dashboardDataModel |
| 128 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for dashboardDataModel | Allow Data Steward to edit glossary terms for dashboardDataModel |
| 129 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for dashboardDataModel | Allow Data Steward to edit tier for dashboardDataModel |
| 130 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for dashboardDataModel | Allow Data Steward to view all tabs for dashboardDataModel |
| 131 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for dashboardDataModel | NOT show restricted edit buttons for Data Steward for dashboardDataModel |
| 132 | **Right Panel Test Suite** - Should allow Data Steward to edit description for mlmodel | Allow Data Steward to edit description for mlmodel |
| 133 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for mlmodel | Allow Data Steward to edit owners for mlmodel |
| 134 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for mlmodel | Allow Data Steward to edit tags for mlmodel |
| 135 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for mlmodel | Allow Data Steward to edit glossary terms for mlmodel |
| 136 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for mlmodel | Allow Data Steward to edit tier for mlmodel |
| 137 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for mlmodel | Allow Data Steward to view all tabs for mlmodel |
| 138 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for mlmodel | NOT show restricted edit buttons for Data Steward for mlmodel |
| 139 | **Right Panel Test Suite** - Should allow Data Steward to edit description for container | Allow Data Steward to edit description for container |
| 140 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for container | Allow Data Steward to edit owners for container |
| 141 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for container | Allow Data Steward to edit tags for container |
| 142 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for container | Allow Data Steward to edit glossary terms for container |
| 143 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for container | Allow Data Steward to edit tier for container |
| 144 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for container | Allow Data Steward to view all tabs for container |
| 145 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for container | NOT show restricted edit buttons for Data Steward for container |
| 146 | **Right Panel Test Suite** - Should allow Data Steward to edit description for searchIndex | Allow Data Steward to edit description for searchIndex |
| 147 | **Right Panel Test Suite** - Should allow Data Steward to edit owners for searchIndex | Allow Data Steward to edit owners for searchIndex |
| 148 | **Right Panel Test Suite** - Should allow Data Steward to edit tags for searchIndex | Allow Data Steward to edit tags for searchIndex |
| 149 | **Right Panel Test Suite** - Should allow Data Steward to edit glossary terms for searchIndex | Allow Data Steward to edit glossary terms for searchIndex |
| 150 | **Right Panel Test Suite** - Should allow Data Steward to edit tier for searchIndex | Allow Data Steward to edit tier for searchIndex |
| 151 | **Right Panel Test Suite** - Should allow Data Steward to view all tabs for searchIndex | Allow Data Steward to view all tabs for searchIndex |
| 152 | **Right Panel Test Suite** - Should NOT show restricted edit buttons for Data Steward for searchIndex | NOT show restricted edit buttons for Data Steward for searchIndex |
| 153 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for table | Allow Data Consumer to edit description for table |
| 154 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for table | Allow Data Consumer to edit tags for table |
| 155 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for table | Allow Data Consumer to edit glossary terms for table |
| 156 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for table | Allow Data Consumer to edit tier for table |
| 157 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for table | Allow Data Consumer to view all tabs for table |
| 158 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless table | Follow Data Consumer role policies for ownerless table |
| 159 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for dashboard | Allow Data Consumer to edit description for dashboard |
| 160 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for dashboard | Allow Data Consumer to edit tags for dashboard |
| 161 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for dashboard | Allow Data Consumer to edit glossary terms for dashboard |
| 162 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for dashboard | Allow Data Consumer to edit tier for dashboard |
| 163 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for dashboard | Allow Data Consumer to view all tabs for dashboard |
| 164 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless dashboard | Follow Data Consumer role policies for ownerless dashboard |
| 165 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for pipeline | Allow Data Consumer to edit description for pipeline |
| 166 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for pipeline | Allow Data Consumer to edit tags for pipeline |
| 167 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for pipeline | Allow Data Consumer to edit glossary terms for pipeline |
| 168 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for pipeline | Allow Data Consumer to edit tier for pipeline |
| 169 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for pipeline | Allow Data Consumer to view all tabs for pipeline |
| 170 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless pipeline | Follow Data Consumer role policies for ownerless pipeline |
| 171 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for topic | Allow Data Consumer to edit description for topic |
| 172 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for topic | Allow Data Consumer to edit tags for topic |
| 173 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for topic | Allow Data Consumer to edit glossary terms for topic |
| 174 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for topic | Allow Data Consumer to edit tier for topic |
| 175 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for topic | Allow Data Consumer to view all tabs for topic |
| 176 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless topic | Follow Data Consumer role policies for ownerless topic |
| 177 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for database | Allow Data Consumer to edit description for database |
| 178 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for database | Allow Data Consumer to edit tags for database |
| 179 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for database | Allow Data Consumer to edit glossary terms for database |
| 180 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for database | Allow Data Consumer to edit tier for database |
| 181 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for database | Allow Data Consumer to view all tabs for database |
| 182 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless database | Follow Data Consumer role policies for ownerless database |
| 183 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for databaseSchema | Allow Data Consumer to edit description for databaseSchema |
| 184 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for databaseSchema | Allow Data Consumer to edit tags for databaseSchema |
| 185 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for databaseSchema | Allow Data Consumer to edit glossary terms for databaseSchema |
| 186 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for databaseSchema | Allow Data Consumer to edit tier for databaseSchema |
| 187 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for databaseSchema | Allow Data Consumer to view all tabs for databaseSchema |
| 188 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless databaseSchema | Follow Data Consumer role policies for ownerless databaseSchema |
| 189 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for dashboardDataModel | Allow Data Consumer to edit description for dashboardDataModel |
| 190 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for dashboardDataModel | Allow Data Consumer to edit tags for dashboardDataModel |
| 191 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for dashboardDataModel | Allow Data Consumer to edit glossary terms for dashboardDataModel |
| 192 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for dashboardDataModel | Allow Data Consumer to edit tier for dashboardDataModel |
| 193 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for dashboardDataModel | Allow Data Consumer to view all tabs for dashboardDataModel |
| 194 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless dashboardDataModel | Follow Data Consumer role policies for ownerless dashboardDataModel |
| 195 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for mlmodel | Allow Data Consumer to edit description for mlmodel |
| 196 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for mlmodel | Allow Data Consumer to edit tags for mlmodel |
| 197 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for mlmodel | Allow Data Consumer to edit glossary terms for mlmodel |
| 198 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for mlmodel | Allow Data Consumer to edit tier for mlmodel |
| 199 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for mlmodel | Allow Data Consumer to view all tabs for mlmodel |
| 200 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless mlmodel | Follow Data Consumer role policies for ownerless mlmodel |
| 201 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for container | Allow Data Consumer to edit description for container |
| 202 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for container | Allow Data Consumer to edit tags for container |
| 203 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for container | Allow Data Consumer to edit glossary terms for container |
| 204 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for container | Allow Data Consumer to edit tier for container |
| 205 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for container | Allow Data Consumer to view all tabs for container |
| 206 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless container | Follow Data Consumer role policies for ownerless container |
| 207 | **Right Panel Test Suite** - Should allow Data Consumer to edit description for searchIndex | Allow Data Consumer to edit description for searchIndex |
| 208 | **Right Panel Test Suite** - Should allow Data Consumer to edit tags for searchIndex | Allow Data Consumer to edit tags for searchIndex |
| 209 | **Right Panel Test Suite** - Should allow Data Consumer to edit glossary terms for searchIndex | Allow Data Consumer to edit glossary terms for searchIndex |
| 210 | **Right Panel Test Suite** - Should allow Data Consumer to edit tier for searchIndex | Allow Data Consumer to edit tier for searchIndex |
| 211 | **Right Panel Test Suite** - Should allow Data Consumer to view all tabs for searchIndex | Allow Data Consumer to view all tabs for searchIndex |
| 212 | **Right Panel Test Suite** - Should follow Data Consumer role policies for ownerless searchIndex | Follow Data Consumer role policies for ownerless searchIndex |
| 213 | **Right Panel Test Suite** - Should NOT allow Data Consumer to edit owners when entity has owner | NOT allow Data Consumer to edit owners when entity has owner |
| 214 | **Right Panel Test Suite** - Should show appropriate message when no owners assigned | Show appropriate message when no owners assigned |
| 215 | **Right Panel Test Suite** - Should show appropriate message when no tags assigned | Show appropriate message when no tags assigned |
| 216 | **Right Panel Test Suite** - Should show appropriate message when no tier assigned | Show appropriate message when no tier assigned |
| 217 | **Right Panel Test Suite** - Should show appropriate message when no domain assigned | Show appropriate message when no domain assigned |
| 218 | **Right Panel Test Suite** - Should show appropriate message when no glossary terms assigned | Show appropriate message when no glossary terms assigned |
| 219 | **Right Panel Test Suite** - Should show lineage not found when no lineage exists | Show lineage not found when no lineage exists |
| 220 | **Right Panel Test Suite** - Should show no test cases message when data quality tab is empty | Show no test cases message when data quality tab is empty |
| 221 | **Right Panel Test Suite** - Should clear description for table | Clear description for table |
| 222 | **Right Panel Test Suite** - Should clear description for dashboard | Clear description for dashboard |
| 223 | **Right Panel Test Suite** - Should clear description for pipeline | Clear description for pipeline |
| 224 | **Right Panel Test Suite** - Should clear description for topic | Clear description for topic |
| 225 | **Right Panel Test Suite** - Should clear description for database | Clear description for database |
| 226 | **Right Panel Test Suite** - Should clear description for databaseSchema | Clear description for databaseSchema |
| 227 | **Right Panel Test Suite** - Should clear description for dashboardDataModel | Clear description for dashboardDataModel |
| 228 | **Right Panel Test Suite** - Should clear description for mlmodel | Clear description for mlmodel |
| 229 | **Right Panel Test Suite** - Should clear description for container | Clear description for container |
| 230 | **Right Panel Test Suite** - Should clear description for searchIndex | Clear description for searchIndex |
| 231 | **Right Panel Test Suite** - Should update panel content when switching between entities | Update panel content when switching between entities |
| 232 | **Right Panel Test Suite** - Should add multiple tags simultaneously | Add multiple tags simultaneously |
| 233 | **Right Panel Test Suite** - Data Quality tab should show permission placeholder for ViewBasic-only user in column detail panel | Data Quality tab should show permission placeholder for ViewBasic-only user in column detail panel |
| 234 | **Right Panel Test Suite** - Should not make forbidden API calls when ViewBasic-only user opens column detail panel | Not make forbidden API calls when ViewBasic-only user opens column detail panel |

</details>

<details open>
<summary>📄 <b>OntologyExplorer.spec.ts</b> (45 tests, 45 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorer.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorer.spec.ts)

### Ontology Explorer

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer** - should navigate to ontology explorer via sidebar and load page | Navigate to ontology explorer via sidebar and load page |
| 2 | **Ontology Explorer** - should display the header section with title | Display the header section with title |
| 3 | **Ontology Explorer** - should display filter toolbar with View Mode label | Display filter toolbar with View Mode label |
| 4 | **Ontology Explorer** - should display all graph control buttons | Display all graph control buttons |
| 5 | **Ontology Explorer** - should display search input in graph toolbar | Display search input in graph toolbar |
| 6 | **Ontology Explorer** - should display isolated nodes toggle | Display isolated nodes toggle |
| 7 | **Ontology Explorer** - should display settings button | Display settings button |
| 8 | **Ontology Explorer** - should display exploration mode tabs (Model and Data) | Display exploration mode tabs (Model and Data) |
| 9 | **Ontology Explorer** - should display view mode select with Overview, Hierarchy and Cross Glossary options | Display view mode select with Overview, Hierarchy and Cross Glossary options |
| 10 | **Ontology Explorer** - should display canvas element as graph container | Display canvas element as graph container |
| 11 | **Ontology Explorer** - should show loading state while graph data is being fetched | Show loading state while graph data is being fetched |
| 12 | **Ontology Explorer** - should hide loading state after data is loaded | Hide loading state after data is loaded |
| 13 | **Ontology Explorer** - should display stats in header after graph loads | Display stats in header after graph loads |
| 14 | **Ontology Explorer** - should not show empty state when glossary terms exist | Not show empty state when glossary terms exist |
| 15 | **Ontology Explorer** - should show empty state when active filter yields no visible nodes | Show empty state when active filter yields no visible nodes |
| 16 | **Ontology Explorer** - should show empty state when relation type filter removes all edges and no isolated nodes remain | Show empty state when relation type filter removes all edges and no isolated nodes remain |
| 17 | **Ontology Explorer** - should execute fit-view without errors | Execute fit-view without errors |
| 18 | **Ontology Explorer** - should execute zoom-in without errors | Execute zoom-in without errors |
| 19 | **Ontology Explorer** - should execute zoom-out without errors | Execute zoom-out without errors |
| 20 | **Ontology Explorer** - should disable refresh button while graph is loading | Disable refresh button while graph is loading |
| 21 | **Ontology Explorer** - should fire a glossaryTerms API request when refresh is clicked | Fire a glossaryTerms API request when refresh is clicked |
| 22 | **Ontology Explorer** - should fire glossaryTerms/assets/counts API when refresh is clicked in Data mode | Fire glossaryTerms/assets/counts API when refresh is clicked in Data mode |
| 23 | **Ontology Explorer** - should repopulate data-node-positions after fit-view | Repopulate data-node-positions after fit-view |
| 24 | **Ontology Explorer** - should accept a search query in the graph search input | Accept a search query in the graph search input |
| 25 | **Ontology Explorer** - should clear the search query | Clear the search query |
| 26 | **Ontology Explorer** - should clear the search query by emptying the input | Clear the search query by emptying the input |
| 27 | **Ontology Explorer** - should open settings panel when settings button is clicked | Open settings panel when settings button is clicked |
| 28 | **Ontology Explorer** - should close settings panel via close button | Close settings panel via close button |
| 29 | **Ontology Explorer** - should close settings panel when clicking outside | Close settings panel when clicking outside |
| 30 | **Ontology Explorer** - should display layout options in settings panel | Display layout options in settings panel |
| 31 | **Ontology Explorer** - should display edge labels toggle in settings panel | Display edge labels toggle in settings panel |
| 32 | **Ontology Explorer** - should toggle edge labels off and back on | Toggle edge labels off and back on |
| 33 | **Ontology Explorer** - should change layout to Circular and back to Hierarchical | Change layout to Circular and back to Hierarchical |
| 34 | **Ontology Explorer** - clicking a term node opens the entity summary panel without a permission error | Clicking a term node opens the entity summary panel without a permission error |
| 35 | **Ontology Explorer** - entity panel should display outgoing or incoming relations section for a connected term | Entity panel should display outgoing or incoming relations section for a connected term |
| 36 | **Ontology Explorer** - entity panel Relations tab should show the related term by name | Entity panel Relations tab should show the related term by name |
| 37 | **Ontology Explorer** - should show hierarchy empty state when no hierarchical relations | Show hierarchy empty state when no hierarchical relations |
| 38 | **Ontology Explorer** - should show only the matching node and its neighbours when a search query is entered | Show only the matching node and its neighbours when a search query is entered |
| 39 | **Ontology Explorer** - should restore all nodes when the search query is cleared | Restore all nodes when the search query is cleared |
| 40 | **Ontology Explorer** - should show empty graph state when the search matches nothing | Show empty graph state when the search matches nothing |
| 41 | **Ontology Explorer** - should recover from a no-match state when the search is cleared | Recover from a no-match state when the search is cleared |
| 42 | **Ontology Explorer** - should trigger PNG download when PNG option is clicked | Trigger PNG download when PNG option is clicked |
| 43 | **Ontology Explorer** - should trigger SVG download when SVG option is clicked | Trigger SVG download when SVG option is clicked |
| 44 | **Ontology Explorer** - should close entity summary panel when close button is clicked | Close entity summary panel when close button is clicked |
| 45 | **Ontology Explorer** - renders a distinct edge for each relation type between the same pair | Renders a distinct edge for each relation type between the same pair |

</details>

<details open>
<summary>📄 <b>OntologyExplorerFilters.spec.ts</b> (31 tests, 31 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorerFilters.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorerFilters.spec.ts)

### Ontology Explorer - Filters and Tabs

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer - Filters and Tabs** - should have Overview selected by default | Have Overview selected by default |
| 2 | **Ontology Explorer - Filters and Tabs** - should switch to Hierarchy view mode | Switch to Hierarchy view mode |
| 3 | **Ontology Explorer - Filters and Tabs** - should switch to Cross Glossary view mode | Switch to Cross Glossary view mode |
| 4 | **Ontology Explorer - Filters and Tabs** - should return to Overview from Hierarchy | Return to Overview from Hierarchy |
| 5 | **Ontology Explorer - Filters and Tabs** - should update selected option when view mode changes from Overview | Update selected option when view mode changes from Overview |
| 6 | **Ontology Explorer - Filters and Tabs** - should toggle isolated nodes off and back on | Toggle isolated nodes off and back on |
| 7 | **Ontology Explorer - Filters and Tabs** - should remove isolated nodes from stats when toggled off | Remove isolated nodes from stats when toggled off |
| 8 | **Ontology Explorer - Filters and Tabs** - should show and clear all filters | Show and clear all filters |
| 9 | **Ontology Explorer - Filters and Tabs** - should show clear all when both glossary and relation type filters are active | Show clear all when both glossary and relation type filters are active |
| 10 | **Ontology Explorer - Filters and Tabs** - should display Glossary filter label | Display Glossary filter label |
| 11 | **Ontology Explorer - Filters and Tabs** - should open glossary dropdown and show glossary options | Open glossary dropdown and show glossary options |
| 12 | **Ontology Explorer - Filters and Tabs** - should filter the graph to the selected glossary (stats match canvas data) | Filter the graph to the selected glossary (stats match canvas data) |
| 13 | **Ontology Explorer - Filters and Tabs** - should display Relationship Type filter label | Display Relationship Type filter label |
| 14 | **Ontology Explorer - Filters and Tabs** - should open relation type dropdown and show options | Open relation type dropdown and show options |
| 15 | **Ontology Explorer - Filters and Tabs** - should filter graph edges by relation type (stats match canvas data) | Filter graph edges by relation type (stats match canvas data) |
| 16 | **Ontology Explorer - Filters and Tabs** - should have Model mode selected by default | Have Model mode selected by default |
| 17 | **Ontology Explorer - Filters and Tabs** - should switch to Data exploration mode | Switch to Data exploration mode |
| 18 | **Ontology Explorer - Filters and Tabs** - should switch back to Model exploration mode | Switch back to Model exploration mode |
| 19 | **Ontology Explorer - Filters and Tabs** - should show graph stats after switching to Data mode | Show graph stats after switching to Data mode |
| 20 | **Ontology Explorer - Filters and Tabs** - should retain glossary filter when switching between Model and Data modes | Retain glossary filter when switching between Model and Data modes |
| 21 | **Ontology Explorer - Filters and Tabs** - should show terms from both glossaries when both are selected | Show terms from both glossaries when both are selected |
| 22 | **Ontology Explorer - Filters and Tabs** - should show only one glossary terms when one is deselected | Show only one glossary terms when one is deselected |
| 23 | **Ontology Explorer - Filters and Tabs** - should filter to only matching relation type when Synonym is selected | Filter to only matching relation type when Synonym is selected |
| 24 | **Ontology Explorer - Filters and Tabs** - should show relatedTo edge when Related To filter is selected | Show relatedTo edge when Related To filter is selected |
| 25 | **Ontology Explorer - Filters and Tabs** - should disable the view mode select when Data tab is active | Disable the view mode select when Data tab is active |
| 26 | **Ontology Explorer - Filters and Tabs** - should re-enable view mode select when switching back to Model tab | Re-enable view mode select when switching back to Model tab |
| 27 | **Ontology Explorer - Filters and Tabs** - should retain relation type filter after glossary filter is cleared and re-applied | Retain relation type filter after glossary filter is cleared and re-applied |
| 28 | **Ontology Explorer - Filters and Tabs** - should show 2 terms and 1 relation for the test glossary | Show 2 terms and 1 relation for the test glossary |
| 29 | **Ontology Explorer - Filters and Tabs** - should show 2 terms and 0 relations for glossary2 | Show 2 terms and 0 relations for glossary2 |
| 30 | **Ontology Explorer - Filters and Tabs** - should filter glossary options by name in the dropdown search | Filter glossary options by name in the dropdown search |
| 31 | **Ontology Explorer - Filters and Tabs** - should show no results when search does not match any glossary | Show no results when search does not match any glossary |

</details>

<details open>
<summary>📄 <b>ExploreSortOrderFilter.spec.ts</b> (17 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ExploreSortOrderFilter.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ExploreSortOrderFilter.spec.ts)

### Explore Sort Order Filter

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore Sort Order Filter** - Table | Table |
| 2 | **Explore Sort Order Filter** - Column | Column |
| 3 | **Explore Sort Order Filter** - Database | Database |
| 4 | **Explore Sort Order Filter** - Database Schema | Database Schema |
| 5 | **Explore Sort Order Filter** - Dashboard | Dashboard |
| 6 | **Explore Sort Order Filter** - Dashboard Data Model | Dashboard Data Model |
| 7 | **Explore Sort Order Filter** - Pipeline | Pipeline |
| 8 | **Explore Sort Order Filter** - Topic | Topic |
| 9 | **Explore Sort Order Filter** - ML Model | ML Model |
| 10 | **Explore Sort Order Filter** - Container | Container |
| 11 | **Explore Sort Order Filter** - Search Index | Search Index |
| 12 | **Explore Sort Order Filter** - API Endpoint | API Endpoint |
| 13 | **Explore Sort Order Filter** - API Collection | API Collection |
| 14 | **Explore Sort Order Filter** - Stored Procedure | Stored Procedure |
| 15 | **Explore Sort Order Filter** - Glossary Term | Glossary Term |
| 16 | **Explore Sort Order Filter** - Tags | Tags |
| 17 | **Explore Sort Order Filter** - Metrics | Metrics |

</details>

<details open>
<summary>📄 <b>OntologyExplorerE2E.spec.ts</b> (17 tests, 17 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorerE2E.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorerE2E.spec.ts)

### Ontology Explorer — E2E

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer — E2E** - stats show 3 terms and 6 relations | Stats show 3 terms and 6 relations |
| 2 | **Ontology Explorer — E2E** - canvas renders without empty or error state | Canvas renders without empty or error state |
| 3 | **Ontology Explorer — E2E** - all three term nodes have canvas positions | All three term nodes have canvas positions |
| 4 | **Ontology Explorer — E2E** - graph edges contain all four expected relation types | Graph edges contain all four expected relation types |
| 5 | **Ontology Explorer — E2E** - custom ONE_TO_MANY relation shows "1" at source and "M" at target | Custom ONE_TO_MANY relation shows "1" at source and "M" at target |
| 6 | **Ontology Explorer — E2E** - built-in relations show M:M cardinality in the cardinality map | Built-in relations show M:M cardinality in the cardinality map |
| 7 | **Ontology Explorer — E2E** - clicking a node opens the entity summary panel | Clicking a node opens the entity summary panel |
| 8 | **Ontology Explorer — E2E** - entity panel closes via the close button | Entity panel closes via the close button |
| 9 | **Ontology Explorer — E2E** - Hierarchy mode renders without empty state | Hierarchy mode renders without empty state |
| 10 | **Ontology Explorer — E2E** - switching back from Hierarchy to Overview restores stats | Switching back from Hierarchy to Overview restores stats |
| 11 | **Ontology Explorer — E2E** - Cross Glossary mode renders without errors | Cross Glossary mode renders without errors |
| 12 | **Ontology Explorer — E2E** - Data mode loads and view-mode select becomes disabled | Data mode loads and view-mode select becomes disabled |
| 13 | **Ontology Explorer — E2E** - returning to Model mode re-enables view-mode select | Returning to Model mode re-enables view-mode select |
| 14 | **Ontology Explorer — E2E** - searching for a term shows it and its neighbours | Searching for a term shows it and its neighbours |
| 15 | **Ontology Explorer — E2E** - searching for a non-existent term shows the empty state | Searching for a non-existent term shows the empty state |
| 16 | **Ontology Explorer — E2E** - toggling edge labels off and back on leaves the graph and cardinality map intact | Toggling edge labels off and back on leaves the graph and cardinality map intact |
| 17 | **Ontology Explorer — E2E** - PNG export triggers a file download | PNG export triggers a file download |

</details>

<details open>
<summary>📄 <b>ExploreTree.spec.ts</b> (14 tests, 23 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ExploreTree.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ExploreTree.spec.ts)

### Explore Tree scenarios

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore Tree scenarios** - Explore Tree | Explore Tree |
| | ↳ *Check the explore tree* | |
| | ↳ *Check the quick filters* | |
| | ↳ *Click on tree item and check quick filter* | |
| | ↳ *Click on tree item metrics and check quick filter* | |
| 2 | **Explore Tree scenarios** - Verify Tags navigation via Governance tree and breadcrumb renders page correctly | Tags navigation via Governance tree and breadcrumb renders page correctly |
| | ↳ *Expand Governance node in explore tree* | |
| | ↳ *Click on Tags under Governance* | |
| | ↳ *Click parent classification breadcrumb from a tag result* | |
| | ↳ *Verify full Tags page renders with left panel, table and headers* | |
| 3 | **Explore Tree scenarios** - Verify Database and Database Schema available in explore tree | Database and Database Schema available in explore tree |
| | ↳ *Verify first table database and schema* | |
| | ↳ *Verify second table database and schema* | |
| 4 | **Explore Tree scenarios** - Verify Database and Database schema after rename | Database and Database schema after rename |
| | ↳ *Visit explore page and verify existing values* | |
| | ↳ *Rename schema and database* | |
| | ↳ *Verify renamed values in explore page* | |

### Explore page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore page** - Check the listing of tags | The listing of tags |
| 2 | **Explore page** - Check listing of entities when index is dataAsset | Listing of entities when index is dataAsset |
| 3 | **Explore page** - Check listing of entities when index is all | Listing of entities when index is all |
| 4 | **Explore page** - Verify charts are visible in explore tree | Charts are visible in explore tree |
| 5 | **Explore page** - Copy field link button should copy the field URL to clipboard for SearchIndex | Copy field link button should copy the field URL to clipboard for SearchIndex |
| 6 | **Explore page** - Copy field link button should copy the field URL to clipboard for APIEndpoint | Copy field link button should copy the field URL to clipboard for APIEndpoint |
| 7 | **Explore page** - Copy field link should have valid URL format for SearchIndex | Copy field link should have valid URL format for SearchIndex |
| 8 | **Explore page** - Copy field link should have valid URL format for APIEndpoint | Copy field link should have valid URL format for APIEndpoint |
| 9 | **Explore page** - Verify columns are visible in explore tree hierarchy | Columns are visible in explore tree hierarchy |
| 10 | **Explore page** - Clicking Columns node filters search results to show only columns | Clicking Columns node filters search results to show only columns |

</details>

<details open>
<summary>📄 <b>OntologyExplorerInteractions.spec.ts</b> (13 tests, 13 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorerInteractions.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorerInteractions.spec.ts)

### Isolated nodes + relation filter combo

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Isolated nodes + relation filter combo** - relation filter with no matching edges shows no-relations state | Relation filter with no matching edges shows no-relations state |
| 2 | **Isolated nodes + relation filter combo** - isolated nodes OFF + unmatched relation filter shows no-relations, not empty state | Isolated nodes OFF + unmatched relation filter shows no-relations, not empty state |
| 3 | **Isolated nodes + relation filter combo** - removing the relation filter restores connected nodes | Removing the relation filter restores connected nodes |
| 4 | **Isolated nodes + relation filter combo** - re-enabling isolated nodes while relation filter is active keeps no-relations state | Re-enabling isolated nodes while relation filter is active keeps no-relations state |

### Cross-glossary term hydration

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Cross-glossary term hydration** - term from another glossary is hydrated in as a node | Term from another glossary is hydrated in as a node |
| 2 | **Cross-glossary term hydration** - cross-glossary edge is present in graph data | Cross-glossary edge is present in graph data |
| 3 | **Cross-glossary term hydration** - stats include the cross-glossary relation | Stats include the cross-glossary relation |

### Embedded scope (Relations Graph tab)

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Embedded scope (Relations Graph tab)** - ontology explorer is visible in the Relations Graph tab | Ontology explorer is visible in the Relations Graph tab |
| 2 | **Embedded scope (Relations Graph tab)** - global filter toolbar is hidden in term scope | Global filter toolbar is hidden in term scope |
| 3 | **Embedded scope (Relations Graph tab)** - zoom and fit-view controls are visible | Zoom and fit-view controls are visible |
| 4 | **Embedded scope (Relations Graph tab)** - only the term and its direct neighbours appear — unrelated term is absent | Only the term and its direct neighbours appear — unrelated term is absent |
| 5 | **Embedded scope (Relations Graph tab)** - edge between the term and its neighbour is present | Edge between the term and its neighbour is present |
| 6 | **Embedded scope (Relations Graph tab)** - clicking a neighbour node opens the entity panel | Clicking a neighbour node opens the entity panel |

</details>

<details open>
<summary>📄 <b>ExploreQuickFilters.spec.ts</b> (11 tests, 22 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ExploreQuickFilters.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ExploreQuickFilters.spec.ts)

### search dropdown quick filters - index readiness

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **search dropdown quick filters - index readiness** - search dropdown should work properly for quick filters | Search dropdown should work properly for quick filters |

### Tier filter - aggregation-based options

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Tier filter - aggregation-based options** - tier with assigned asset appears in dropdown, tier without asset does not | Tier with assigned asset appears in dropdown, tier without asset does not |
| | ↳ *Open Tier filter dropdown* | |
| | ↳ *Search for tier with asset — it is visible in dropdown* | |
| | ↳ *Search for tier without asset — it is not visible in dropdown* | |
| 2 | **Tier filter - aggregation-based options** - selecting a tier filter shows only assets tagged with that tier | Selecting a tier filter shows only assets tagged with that tier |
| | ↳ *Open Tier filter dropdown and select the tier* | |
| | ↳ *Apply filter and verify asset is visible in results* | |

### Filter persistence after bug fixes

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Filter persistence after bug fixes** - explore tree sidebar selection is not cleared when a top dropdown filter is applied | Explore tree sidebar selection is not cleared when a top dropdown filter is applied |
| | ↳ *Click on Databases in the explore tree to select it* | |
| | ↳ *Verify the Databases node is marked as selected* | |
| | ↳ *Apply Tag filter from top dropdown* | |
| | ↳ *Verify Databases node selection is still preserved after filter change* | |
| 2 | **Filter persistence after bug fixes** - sort order is preserved in URL when explore tree node is clicked after applying a top dropdown filter | Sort order is preserved in URL when explore tree node is clicked after applying a top dropdown filter |
| | ↳ *Toggle sort order to ascending* | |
| | ↳ *Apply Tag filter from top dropdown* | |
| | ↳ *Click on Databases in the explore tree* | |
| | ↳ *Verify sort order is preserved in the URL after tree node click* | |

### Metric search result highlight

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric search result highlight** - breadcrumb shows the entity category and display name header should have highlighted terms | Breadcrumb shows the entity category and display name header should have highlighted terms |
| | ↳ *Select Metric search index and search* | |
| | ↳ *Verify breadcrumb shows the Metrics category without HTML tags* | |
| | ↳ *Verify display name header has highlighted search terms* | |

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | should search for empty or null filters | Search for empty or null filters |
| 2 | should show correct count for tier filter options from aggregation | Show correct count for tier filter options from aggregation |
| 3 | should search for multiple values along with null filters | Search for multiple values along with null filters |
| 4 | should persist quick filter on global search | Persist quick filter on global search |
| 5 | Filter by column entity type shows only column results | Filter by column entity type shows only column results |

</details>

<details open>
<summary>📄 <b>OntologyExplorerCardinality.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorerCardinality.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorerCardinality.spec.ts)

### Ontology Explorer - Cardinality Labels

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer - Cardinality Labels** - ONE_TO_ONE relation type should have label "1" on both ends | ONE_TO_ONE relation type should have label "1" on both ends |
| 2 | **Ontology Explorer - Cardinality Labels** - ONE_TO_MANY relation type should have "1" at source and "M" at target | ONE_TO_MANY relation type should have "1" at source and "M" at target |
| 3 | **Ontology Explorer - Cardinality Labels** - MANY_TO_ONE relation type should have "M" at source and "1" at target | MANY_TO_ONE relation type should have "M" at source and "1" at target |
| 4 | **Ontology Explorer - Cardinality Labels** - MANY_TO_MANY relation type should have label "M" on both ends | MANY_TO_MANY relation type should have label "M" on both ends |
| 5 | **Ontology Explorer - Cardinality Labels** - **CUSTOM relation type with sourceMax=1 and no targetMax should produce "1"** → "M" | CUSTOM relation type with sourceMax=1 and no targetMax should produce "1" → "M" |
| 6 | **Ontology Explorer - Cardinality Labels** - built-in relation type shows M:M cardinality in the cardinality map | Built-in relation type shows M:M cardinality in the cardinality map |
| 7 | **Ontology Explorer - Cardinality Labels** - edges for cardinality-typed relations appear in the graph edge data | Edges for cardinality-typed relations appear in the graph edge data |
| 8 | **Ontology Explorer - Cardinality Labels** - graph renders without error when cardinality relation types are active | Graph renders without error when cardinality relation types are active |
| 9 | **Ontology Explorer - Cardinality Labels** - stats reflect the cardinality-typed edges in the relation count | Stats reflect the cardinality-typed edges in the relation count |
| 10 | **Ontology Explorer - Cardinality Labels** - cardinality map is populated when edge labels are on (default) | Cardinality map is populated when edge labels are on (default) |
| 11 | **Ontology Explorer - Cardinality Labels** - graph remains stable after toggling edge labels off and back on | Graph remains stable after toggling edge labels off and back on |

</details>

<details open>
<summary>📄 <b>OntologyExplorerIntegration.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorerIntegration.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorerIntegration.spec.ts)

### Relation Sync with OntologyExplorer

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Relation Sync with OntologyExplorer** - should reflect relation add and remove in the graph | Reflect relation add and remove in the graph |

### Ontology Explorer - Hierarchy View

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer - Hierarchy View** - should display terms with narrower relation in Hierarchy view | Display terms with narrower relation in Hierarchy view |

### Ontology Explorer - Relation Type Filter Prunes Nodes

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer - Relation Type Filter Prunes Nodes** - filtering by relatedTo should show only terms connected by that relation and hide others | Filtering by relatedTo should show only terms connected by that relation and hide others |
| 2 | **Ontology Explorer - Relation Type Filter Prunes Nodes** - filtering by synonym should show only terms connected by synonym and hide others | Filtering by synonym should show only terms connected by synonym and hide others |
| 3 | **Ontology Explorer - Relation Type Filter Prunes Nodes** - clearing relation type filter should restore all connected nodes | Clearing relation type filter should restore all connected nodes |

### Ontology Explorer - Cross Glossary Edges

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer - Cross Glossary Edges** - Cross Glossary view should show edges between terms from different glossaries | Cross Glossary view should show edges between terms from different glossaries |
| 2 | **Ontology Explorer - Cross Glossary Edges** - Cross Glossary view hides terms that only have same-glossary edges | Cross Glossary view hides terms that only have same-glossary edges |
| 3 | **Ontology Explorer - Cross Glossary Edges** - isolated nodes toggle is disabled when Cross Glossary view is active | Isolated nodes toggle is disabled when Cross Glossary view is active |

### Ontology Explorer - Data Mode Asset Spiral View

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer - Data Mode Asset Spiral View** - clicking asset count badge in data mode triggers asset search query | Clicking asset count badge in data mode triggers asset search query |

### Ontology Explorer - Data Mode Stats

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer - Data Mode Stats** - Data mode stats do not show Data Assets when no assets are tagged | Data mode stats do not show Data Assets when no assets are tagged |
| 2 | **Ontology Explorer - Data Mode Stats** - switching back from Data to Model mode restores stats | Switching back from Data to Model mode restores stats |

</details>

<details open>
<summary>📄 <b>ExploreBrowse.spec.ts</b> (11 tests, 15 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ExploreBrowse.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ExploreBrowse.spec.ts)

### Explore - data asset browsing

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore - data asset browsing** - drills the database hierarchy down to the Tables and Columns leaves with counts | Drills the database hierarchy down to the Tables and Columns leaves with counts |
| | ↳ *Both entity-type leaves render with count badges* | |
| 2 | **Explore - data asset browsing** - the entity-type leaf respects the Data Assets filter (Table hides Columns) | The entity-type leaf respects the Data Assets filter (Table hides Columns) |
| | ↳ *Selecting Table hides the Columns leaf* | |
| | ↳ *Clearing the Table filter brings the Columns leaf back* | |
| 3 | **Explore - data asset browsing** - a non-leaf node count reflects the active Data Assets filter | A non-leaf node count reflects the active Data Assets filter |
| 4 | **Explore - data asset browsing** - result-card breadcrumb collapses a deep path and expands on click | Result-card breadcrumb collapses a deep path and expands on click |
| 5 | **Explore - data asset browsing** - browsing the tree stacks removable QUERY chips and filters results | Browsing the tree stacks removable QUERY chips and filters results |
| | ↳ *Selecting a service in the tree adds browse chips* | |
| | ↳ *Removing the service-type chip clears the browse* | |
| 6 | **Explore - data asset browsing** - service type drill-down disables unrelated roots and query-panel Clear resets it | Service type drill-down disables unrelated roots and query-panel Clear resets it |
| | ↳ *Selecting a database service type narrows the browse tree directionally* | |
| | ↳ *Query-panel Clear restores the full browse estate* | |
| 7 | **Explore - data asset browsing** - drills a non-database hierarchy (Dashboards) down to the entity-type leaf | Drills a non-database hierarchy (Dashboards) down to the entity-type leaf |
| 8 | **Explore - data asset browsing** - selecting a schema keeps the drilled path expanded and highlights it | Selecting a schema keeps the drilled path expanded and highlights it |
| | ↳ *the drilled path stays expanded (no collapse)* | |
| | ↳ *the selected schema stays highlighted* | |
| 9 | **Explore - data asset browsing** - selecting the Tables leaf highlights the leaf, not its parent schema | Selecting the Tables leaf highlights the leaf, not its parent schema |

### Explore - governance browsing

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore - governance browsing** - Tags leaf under Governance filters the results | Tags leaf under Governance filters the results |
| 2 | **Explore - governance browsing** - Glossary leaf under Governance filters the results | Glossary leaf under Governance filters the results |

</details>

<details open>
<summary>📄 <b>OntologyExplorerRdf.spec.ts</b> (9 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorerRdf.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorerRdf.spec.ts)

### Ontology Explorer — RDF exports @ontology-rdf

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer — RDF exports @ontology-rdf** - Turtle (.ttl) option appears in the export menu when RDF is enabled | Turtle (.ttl) option appears in the export menu when RDF is enabled |
| 2 | **Ontology Explorer — RDF exports @ontology-rdf** - RDF/XML (.rdf) option appears in the export menu when RDF is enabled | RDF/XML (.rdf) option appears in the export menu when RDF is enabled |
| 3 | **Ontology Explorer — RDF exports @ontology-rdf** - Turtle export triggers a .ttl file download | Turtle export triggers a .ttl file download |
| 4 | **Ontology Explorer — RDF exports @ontology-rdf** - RDF/XML export triggers a .rdf file download | RDF/XML export triggers a .rdf file download |
| 5 | **Ontology Explorer — RDF exports @ontology-rdf** - Turtle and RDF/XML options are NOT shown when RDF is disabled | Turtle and RDF/XML options are NOT shown when RDF is disabled |

### Ontology Explorer — RDF graph data loading @ontology-rdf

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer — RDF graph data loading @ontology-rdf** - term Relations Graph requests /rdf/glossary/graph scoped to the selected term (glossaryTermId) when RDF is enabled | Term Relations Graph requests /rdf/glossary/graph scoped to the selected term (glossaryTermId) when RDF is enabled |
| 2 | **Ontology Explorer — RDF graph data loading @ontology-rdf** - glossary Relations Graph calls /rdf/glossary/graph when RDF is enabled and renders nodes from the response | Glossary Relations Graph calls /rdf/glossary/graph when RDF is enabled and renders nodes from the response |
| 3 | **Ontology Explorer — RDF graph data loading @ontology-rdf** - renders without crashing when /rdf/glossary/graph returns duplicate nodes and dangling edges | Renders without crashing when /rdf/glossary/graph returns duplicate nodes and dangling edges |
| 4 | **Ontology Explorer — RDF graph data loading @ontology-rdf** - graph falls back to database when RDF is enabled but /rdf/glossary/graph returns empty | Graph falls back to database when RDF is enabled but /rdf/glossary/graph returns empty |

</details>

<details open>
<summary>📄 <b>ExploreDiscovery.spec.ts</b> (9 tests, 9 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ExploreDiscovery.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ExploreDiscovery.spec.ts)

### Explore Assets Discovery

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore Assets Discovery** - Should not display deleted assets when showDeleted is not checked and deleted is not present in queryFilter | Not display deleted assets when showDeleted is not checked and deleted is not present in queryFilter |
| 2 | **Explore Assets Discovery** - Should display deleted assets when showDeleted is not checked but deleted is true in queryFilter | Display deleted assets when showDeleted is not checked but deleted is true in queryFilter |
| 3 | **Explore Assets Discovery** - Should not display deleted assets when showDeleted is not checked but deleted is false in queryFilter | Not display deleted assets when showDeleted is not checked but deleted is false in queryFilter |
| 4 | **Explore Assets Discovery** - Should display deleted assets when showDeleted is checked and deleted is not present in queryFilter | Display deleted assets when showDeleted is checked and deleted is not present in queryFilter |
| 5 | **Explore Assets Discovery** - Should display deleted assets when showDeleted is checked and deleted is true in queryFilter | Display deleted assets when showDeleted is checked and deleted is true in queryFilter |
| 6 | **Explore Assets Discovery** - Should not display deleted assets when showDeleted is checked but deleted is false in queryFilter | Not display deleted assets when showDeleted is checked but deleted is false in queryFilter |
| 7 | **Explore Assets Discovery** - Should not display soft deleted assets in search suggestions | Not display soft deleted assets in search suggestions |
| 8 | **Explore Assets Discovery** - Should not display domain and owner of deleted asset in suggestions when showDeleted is off | Not display domain and owner of deleted asset in suggestions when showDeleted is off |
| 9 | **Explore Assets Discovery** - Should display domain and owner of deleted asset in suggestions when showDeleted is on | Display domain and owner of deleted asset in suggestions when showDeleted is on |

</details>

<details open>
<summary>📄 <b>ExploreFilterComposition.spec.ts</b> (7 tests, 22 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ExploreFilterComposition.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ExploreFilterComposition.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | Tier1 OR Tier2 union shows assets with either tier across asset types | Tier1 OR Tier2 union shows assets with either tier across asset types |
| | ↳ *Query has ONE tier clause with both values ORed* | |
| | ↳ *Both tier chips stack in the QUERY bar* | |
| | ↳ *Assets with either tier are visible, untiered are not* | |
| 2 | removing one tier chip narrows the union to the remaining tier | Removing one tier chip narrows the union to the remaining tier |
| | ↳ *Remove the Tier1 chip from the QUERY bar* | |
| | ↳ *Only Tier2 assets remain visible* | |
| 3 | tier and tag filters AND across fields | Tier and tag filters AND across fields |
| | ↳ *Apply Tier1 filter* | |
| | ↳ *Apply PersonalData.Personal tag filter* | |
| | ↳ *Query has separate must clauses for tier and tag* | |
| | ↳ *Only assets matching BOTH filters are visible* | |
| 4 | asset-type union composes with tier union (AND across, OR within) | Asset-type union composes with tier union (AND across, OR within) |
| | ↳ *Select Table + Topic asset types* | |
| | ↳ *Tiered tables and topics are visible, tiered dashboard is filtered out by type* | |
| 5 | glossary term filter spans asset types and ANDs with tier | Glossary term filter spans asset types and ANDs with tier |
| | ↳ *Filter by the glossary term via the Tag facet* | |
| | ↳ *Term-tagged table and dashboard are visible, untagged table is not* | |
| | ↳ *Stack a Tier2 filter on top of the term* | |
| | ↳ *Term and tier AND across fields* | |
| 6 | domain filter spans asset types and ANDs with an asset-type filter | Domain filter spans asset types and ANDs with an asset-type filter |
| | ↳ *Filter by domain* | |
| | ↳ *Domain assets across types are visible, others are not* | |
| | ↳ *Narrow the domain to tables only* | |
| 7 | certification union shows assets certified with either level | Certification union shows assets certified with either level |
| | ↳ *Filter by the gold certification* | |
| | ↳ *Add the silver certification to the union* | |
| | ↳ *Query has ONE certification clause with both levels ORed* | |
| | ↳ *Assets certified with either level are visible, uncertified are not* | |

</details>

<details open>
<summary>📄 <b>ExploreUrlState.spec.ts</b> (7 tests, 14 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ExploreUrlState.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ExploreUrlState.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | a deep-linked filter URL restores chips and filtered results | A deep-linked filter URL restores chips and filtered results |
| | ↳ *Apply a Tier1 filter and capture the URL* | |
| | ↳ *Open the URL in a fresh navigation — state is restored* | |
| 2 | reloading the page preserves composed filters | Reloading the page preserves composed filters |
| 3 | a browse-location deep link highlights the tree and clears on chip removal | A browse-location deep link highlights the tree and clears on chip removal |
| | ↳ *Click a tree category — browsePath lands in the URL and highlights the node* | |
| | ↳ *Reopening the browse URL re-highlights the node* | |
| | ↳ *Removing the browse chip clears the tree highlight* | |
| 4 | selecting an asset type grays out and collapses incompatible categories | Selecting an asset type grays out and collapses incompatible categories |
| | ↳ *Databases category is expanded* | |
| | ↳ *Selecting Dashboard grays out and collapses Databases* | |
| 5 | an impossible filter combination shows the no-results placeholder and recovers on clear | An impossible filter combination shows the no-results placeholder and recovers on clear |
| | ↳ *Deep-link owner + an asset type the owner has none of* | |
| | ↳ *Clear All recovers the full estate* | |
| 6 | applying a filter from a deep page preserves pagination params | Applying a filter from a deep page preserves pagination params |
| | ↳ *Navigate to an explore page beyond the first* | |
| | ↳ *Selecting a tree category keeps current paging params* | |
| 7 | owner filter spans asset types and ANDs with an asset-type filter | Owner filter spans asset types and ANDs with an asset-type filter |
| | ↳ *Filter by owner* | |
| | ↳ *Add a Table type filter — owned table stays visible* | |

</details>

<details open>
<summary>📄 <b>ExploreResilience.spec.ts</b> (4 tests, 4 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/ExploreResilience.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/ExploreResilience.spec.ts)

### Explore - resilience and corner cases

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore - resilience and corner cases** - surfaces the index banner and stays usable when search returns an index error | Surfaces the index banner and stays usable when search returns an index error |
| 2 | **Explore - resilience and corner cases** - does not white-screen when the search request fails at the network level | Does not white-screen when the search request fails at the network level |
| 3 | **Explore - resilience and corner cases** - renders gracefully for a malformed browsePath URL parameter | Renders gracefully for a malformed browsePath URL parameter |
| 4 | **Explore - resilience and corner cases** - renders gracefully for a malformed quickFilter URL parameter | Renders gracefully for a malformed quickFilter URL parameter |

</details>

<details open>
<summary>📄 <b>ExploreQueryBar.spec.ts</b> (3 tests, 6 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/ExploreQueryBar.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/ExploreQueryBar.spec.ts)

### Standalone Tests

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | query bar is persistent and shows the browse placeholder when empty | Query bar is persistent and shows the browse placeholder when empty |
| 2 | filter survives a tree click and both stack as removable chips | Filter survives a tree click and both stack as removable chips |
| | ↳ *Apply Data Assets → Table filter* | |
| | ↳ *Click Databases in the tree — Type chip must survive* | |
| | ↳ *Removing the browse chip keeps the filter chip* | |
| | ↳ *Query-panel Clear empties the whole query* | |
| 3 | selecting an asset type grays out incompatible tree categories | Selecting an asset type grays out incompatible tree categories |

</details>

<details open>
<summary>📄 <b>OntologyExplorerIsolatedToggle.spec.ts</b> (3 tests, 3 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/OntologyExplorerIsolatedToggle.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/OntologyExplorerIsolatedToggle.spec.ts)

### Ontology Explorer — isolated nodes toggle

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Ontology Explorer — isolated nodes toggle** - isolated term is visible by default (showIsolatedNodes = true) | Isolated term is visible by default (showIsolatedNodes = true) |
| 2 | **Ontology Explorer — isolated nodes toggle** - toggling isolated nodes OFF hides the isolated term | Toggling isolated nodes OFF hides the isolated term |
| 3 | **Ontology Explorer — isolated nodes toggle** - toggling isolated nodes back ON restores the isolated term | Toggling isolated nodes back ON restores the isolated term |

</details>

<details open>
<summary>📄 <b>ExploreFilterSeparation.spec.ts</b> (2 tests, 2 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/SearchSeparation/ExploreFilterSeparation.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/SearchSeparation/ExploreFilterSeparation.spec.ts)

### Table | live + reindex filter separation

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table | live + reindex filter separation** - live indexing produces searchable separation for all four facets | Live indexing produces searchable separation for all four facets |
| 2 | **Table | live + reindex filter separation** - SearchIndexApp recreate reindex preserves searchable separation | SearchIndexApp recreate reindex preserves searchable separation |

</details>

<details open>
<summary>📄 <b>ExploreAggregationCountsMatching.spec.ts</b> (1 tests, 1 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Flow/ExploreAggregationCountsMatching.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Flow/ExploreAggregationCountsMatching.spec.ts)

### Explore Aggregation Counts Matching

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Explore Aggregation Counts Matching** - should verify left panel counts and tab search results for normal search | Left panel counts and tab search results for normal search |

</details>


---

<div id="home-page"></div>

## Home Page

<details open>
<summary>📄 <b>FollowingWidget.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/LandingPageWidgets/FollowingWidget.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/LandingPageWidgets/FollowingWidget.spec.ts)

### Table

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Table** - Check followed entity present in following widget | Followed entity present in following widget |

### Dashboard

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Dashboard** - Check followed entity present in following widget | Followed entity present in following widget |

### Pipeline

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Pipeline** - Check followed entity present in following widget | Followed entity present in following widget |

### Topic

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Topic** - Check followed entity present in following widget | Followed entity present in following widget |

### Container

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Container** - Check followed entity present in following widget | Followed entity present in following widget |

### MlModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **MlModel** - Check followed entity present in following widget | Followed entity present in following widget |

### SearchIndex

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **SearchIndex** - Check followed entity present in following widget | Followed entity present in following widget |

### ApiEndpoint

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **ApiEndpoint** - Check followed entity present in following widget | Followed entity present in following widget |

### DashboardDataModel

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **DashboardDataModel** - Check followed entity present in following widget | Followed entity present in following widget |

### Store Procedure

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Store Procedure** - Check followed entity present in following widget | Followed entity present in following widget |

### Metric

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Metric** - Check followed entity present in following widget | Followed entity present in following widget |

</details>

<details open>
<summary>📄 <b>RecentlyViewed.spec.ts</b> (11 tests, 11 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Features/RecentlyViewed.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Features/RecentlyViewed.spec.ts)

### Recently viewed data assets

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Recently viewed data assets** - Check ApiEndpoint in recently viewed | ApiEndpoint in recently viewed |
| 2 | **Recently viewed data assets** - Check Table in recently viewed | Table in recently viewed |
| 3 | **Recently viewed data assets** - Check Store Procedure in recently viewed | Store Procedure in recently viewed |
| 4 | **Recently viewed data assets** - Check Dashboard in recently viewed | Dashboard in recently viewed |
| 5 | **Recently viewed data assets** - Check Pipeline in recently viewed | Pipeline in recently viewed |
| 6 | **Recently viewed data assets** - Check Topic in recently viewed | Topic in recently viewed |
| 7 | **Recently viewed data assets** - Check MlModel in recently viewed | MlModel in recently viewed |
| 8 | **Recently viewed data assets** - Check Container in recently viewed | Container in recently viewed |
| 9 | **Recently viewed data assets** - Check SearchIndex in recently viewed | SearchIndex in recently viewed |
| 10 | **Recently viewed data assets** - Check DashboardDataModel in recently viewed | DashboardDataModel in recently viewed |
| 11 | **Recently viewed data assets** - Check Metric in recently viewed | Metric in recently viewed |

</details>


---

<div id="data-insights"></div>

## Data Insights

<details open>
<summary>📄 <b>DataInsight.spec.ts</b> (10 tests, 10 scenarios)</summary>

> Source: [`src/main/resources/ui/playwright/e2e/Pages/DataInsight.spec.ts`](https://github.com/open-metadata/OpenMetadata/blob/main/openmetadata-ui/src/main/resources/ui/playwright/e2e/Pages/DataInsight.spec.ts)

### Data Insight Page

| # | Test Case | Description |
|---|-----------|-------------|
| 1 | **Data Insight Page** - Create description and owner KPI | Create description and owner KPI |
| 2 | **Data Insight Page** - Verifying Data assets tab | Verifying Data assets tab |
| 3 | **Data Insight Page** - Verify metrics appear in description chart | Metrics appear in description chart |
| | ↳ *Verify metric entity type is visible* | |
| 4 | **Data Insight Page** - Verify metrics in chart API response | Metrics in chart API response |
| | ↳ *Capture and validate API response* | |
| 5 | **Data Insight Page** - Verify No owner and description redirection to explore page | No owner and description redirection to explore page |
| 6 | **Data Insight Page** - Verifying App analytics tab | Verifying App analytics tab |
| 7 | **Data Insight Page** - Verifying KPI tab | Verifying KPI tab |
| 8 | **Data Insight Page** - Update KPI | Update KPI |
| 9 | **Data Insight Page** - Verify KPI widget in Landing page | KPI widget in Landing page |
| 10 | **Data Insight Page** - Delete Kpi | Delete Kpi |

</details>


---

