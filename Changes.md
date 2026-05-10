# Changes

## Component responsibilities

- `DashboardLayout`: owns the page shell, outer background, and centered content container so `DashboardPage.jsx` stays focused on state and composition.
- `DashboardHeader`: renders the top navigation/header area for the dashboard.
- `StatsRow`: assembles the four dashboard metrics and translates page-level counts into stat card props.
- `AddTaskInput`: renders the add-task form and emits input/change actions.
- `TaskFilterBar`: renders filter buttons and the search input.
- `TaskList`: renders either the empty state or the list of task rows.
- `StatCard`: renders a generic metric card with a label, value, optional note, and optional progress bar.
- `TaskItem`: renders a single task row with its complete toggle, metadata, and delete action.

## Why each component lives where it does

- `src/components/dashboard/`
  - `DashboardLayout`, `DashboardHeader`, `StatsRow`, `AddTaskInput`, `TaskFilterBar`, and `TaskList` are specific to the dashboard page structure and copy.
  - These components know about dashboard sections, but they do not own dashboard state.
- `src/components/shared/`
  - `StatCard` is reusable anywhere the app needs a metric tile with a label and value.
  - `TaskItem` is reusable anywhere the app needs to render a single task row, including a future mobile dashboard or task-focused view.
  - Shared components do not know they are being used on the dashboard.

## Props and why they exist

- `DashboardLayout`
  - `header`: keeps the layout generic while allowing the page to compose its own header section.
  - `children`: accepts the dashboard body sections in order.
- `StatsRow`
  - `totalCount`, `completedCount`, `progressPercent`: the only derived values it needs to render all four cards.
- `AddTaskInput`
  - `newTask`: controlled input value.
  - `onNewTaskChange`: updates the input state in `DashboardPage`.
  - `onAddTask`: submits the new task from the page state owner.
- `TaskFilterBar`
  - `filter`: highlights the active filter button.
  - `searchQuery`: controlled search input value.
  - `onFilterChange`: updates the filter state in `DashboardPage`.
  - `onSearchChange`: updates the search query state in `DashboardPage`.
- `TaskList`
  - `tasks`: the already-filtered task collection to display.
  - `onToggleTask`: handles completion changes at the page level.
  - `onDeleteTask`: handles task deletion at the page level.
- `StatCard`
  - `label`, `value`: the core display data for every metric card.
  - `note`: optional supporting copy for cards that need it.
  - `valueColor`: lets the parent control emphasis without coupling the component to dashboard-specific meanings.
  - `progressPercent`: optional numeric value that turns on the progress bar variant.
- `TaskItem`
  - `task`: the row data it needs to render.
  - `onToggle`: row-level completion action.
  - `onDelete`: row-level delete action.

## What I would do differently if the app were 10x larger

- I would move repeated inline style objects into a dedicated styling system, either CSS modules or a design-token-driven component library, to make visual changes safer and more scalable.
- I would define task and dashboard view-model shapes in a shared type layer so prop contracts stay explicit across pages.
- I would add tests around filtering, task creation, and task row actions before reusing these pieces across multiple surfaces.
- I would likely split stateful task behavior into a page hook such as `useDashboardTasks` once the page logic grows beyond simple CRUD and filtering.

## Deployment URL

- https://giteshchaudhari681-art.github.io/focusforge-component-architecture/
