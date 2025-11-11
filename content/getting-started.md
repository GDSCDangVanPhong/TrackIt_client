# Introduction

> TrackIt is a modern, all-in-one task and project management platform designed to help individuals and teams organize, track, and achieve their goals efficiently.


## What can it help me ?
> TrackIt allows you to create projects, assign tasks, set priorities, and visualize progress using flexible views such as list, board, calendar, and timeline. Its intuitive interface and collaboration tools make managing complex projects simple and transparent.

## Who made this?
> Frankly, this is just a hobby project made by a College student in Hanoi University, no backed up by fancy big corps, so you can have it by your own.
 ```bash
git clone: https://github.com/GDSCDangVanPhong/TrackIt_client.git
````

>Or just give me a star if you like this

[To my GitHub](https://github.com/GDSCDangVanPhong)


# Getting Started

## Sign Up and Log In

1. Go to [TrackIt](/) or open the TrackIt app.
2. Click Sign Up and enter your email or use a Google/Apple account.
3. Confirm your email and log in.
4. Once logged in, you will land on your `Dashboard`, where you can see all your tasks, projects, and notifications.


## Create Your First Workspace
>TrackIt organizes tasks into Workspaces. Each workspace can represent a team, department, or personal projects.
1. Click Create Workspace on your Dashboard.

2. Enter a Workspace Name (e.g., Marketing Team, Personal Tasks).

3. Invite team members by entering their email addresses. You can skip this step and invite members later.

4. Customize your workspace by adding a logo and color theme.


## Add Projects

>Projects help you structure your work inside a workspace.
1. Open your workspace.

2. Click New Project.

3. Name your project (e.g., “Website Redesign”) and add an optional description.

4. Select a Project Template or start from scratch. TrackIt offers templates for:
   - Marketing Campaigns  
   - Product Development  
   - Personal Productivity  
   - Agile/Scrum Projects

```vue
<template>
  <UEmpty title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

## Create Tasks

>Tasks are the heart of TrackIt. You can create, assign, and track tasks easily.

1. Open a project.

2. Click New Task.

3. Enter a task name and description.

4. Assign the task to yourself or team members.

5. Set a due date and priority level (Low, Medium, High, Urgent).

6. Add tags or checklists to break down subtasks.

```vue
<template>
  <UEmpty icon="i-lucide-file" title="No projects found" description="It looks like you haven't added any projects. Create one to get started." />
</template>
```

## Views & Organization

>TrackIt offers flexible views to manage your projects:
- List View – See tasks in a simple list.

- Board View – Kanban-style board for drag-and-drop workflow.

- Calendar View – Visualize tasks by due dates.

- Timeline/Gantt View – Track project schedules.
>Switch views anytime using the `View menu` at the top of your project.
```vue
<template>
  <UEmpty variant="naked" icon="i-lucide-bell" title="No notifications" description="You're all caught up. New notifications will appear here." />
</template>
```

