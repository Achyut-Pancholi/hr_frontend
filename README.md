# KadelLabs HR Recruiter Platform - Frontend Mockups

A modern, minimal, and premium SaaS HR Recruiter Platform designed for KadelLabs. This repository contains high-fidelity, showcase-ready static mockups, styling guidelines, and interactive mock databases.

## Modules Implemented

1. **Resume Ingestion & Parsing** (`index.html`, `app.js`)
   * Drag-and-drop or browse local PDF files.
   * Progress loader bar triggers that simulate AI parsing.
   * Premium two-column detailed candidate profile overlays displaying technical skills capsule badges, parsed work experience timeline, and academic background details.

2. **Video Bot Screening** (`video-screening.html`, `video-screening.js`)
   * Sourcing form to dispatch bot screening invites (cascading Department, Role, and Candidate selectors).
   * Searchable results index showcasing candidate screening progress.
   * AI-generated performance dashboards showing transcripts, communication scores, and candidate details.

3. **Hiring Reports & Analytics** (`reports.html`, `reports.js`)
   * Dynamic top KPI overview row (Total Candidates, Screening Statuses, and average scores).
   * Flexible List View (table) or Grid View (card panels) toggle modes.
   * Live filter columns, keyword search, URL query parameter syncing, and skeleton loaders.

4. **Departments & Roles** (`departments.html`, `departments.js`)
   * Overview dashboard displaying departmental counts, active roles, and open positions.
   * Custom popup-first management modals to update departments and nested role titles.
   * Modern, spacious ATS directory table layout.

## Design System

* **Typography**: Inter (primary font), JetBrains Mono (monospaced codes).
* **Color Scheme**: Dark Navy (`#1C2B4A` sidebar & titles), Forest Green (`#2A7C4F` active state & highlights), Warm White (`#F4F3EF` page bg).
* **Radii & Spacings**: 12px cards, 10px inputs, 999px pills, 70px table row spacing, and micro-transitions.

## Running Locally

1. Open your terminal in this directory.
2. Initialize a local web server (e.g., using `npx http-server`):
   ```bash
   npx http-server -p 8080
   ```
3. Open `http://127.0.0.1:8080/index.html` in your web browser.
