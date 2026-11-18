# SWIVEL Web Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build the SWIVEL Web Redesign (Approach B) as a multi-tab editorial dashboard.

**Architecture:** A static, single-page application simulator that provides an interactive, editorial interface for the SWIVEL project. It relies on CSS custom properties for `DESIGN.md` token management to ensure strict aesthetic fidelity.

**Tech Stack:** HTML5, CSS3, Vanilla JavaScript.

**Spec:** `docs/superpowers/specs/2026-11-19-swivel-web-redesign-design.md`

## Global Constraints
- Colors: Projection Black (`#000000`), Darkroom Shadow (`#4f4d3c`), Celluloid Cream (`#ece4b4`).
- Typography: Weight 400 only; sizes 42px, 230px, 280px; letter-spacing -0.04em.
- Layout: 1px solid Celluloid Cream hairlines; 0px border-radius; full-bleed; no shadows; no gradients.
- Privacy: All logic strictly client-side; zero external dependencies.

## Review Focus
1. **Color fidelity:** Are non-cream colors introduced? (Must stay within the 3 allowed colors).
2. **Typographic scale:** Is the -0.04em letter-spacing strictly applied to display/labels?
3. **Chrome/Chrome-decor:** Are drop shadows, blurs, or gradients accidentally present? (Must be strictly forbidden).
4. **Interactive state:** Does the "Duress Clear All" panic wipe immediately reset the state and remove UI elements?
5. **Responsiveness:** Does the layout break or introduce scrollbars in a non-cinematic way on small screens?

---

### Task 1: Scaffolding & Design Tokens

**Files:**
- Create: `index.html`
- Create: `css/tokens.css`
- Create: `css/layout.css`

**Interfaces:**
- Produces: CSS custom properties (`--projection-black`, `--darkroom-shadow`, `--celluloid-cream`), global typography settings, and the base darkroom background.

- [ ] **Step 1: Create `css/tokens.css` with 601 design system variables**

Define variables for the allowed palette and typography.

- [ ] **Step 2: Create base layout in `index.html` & `css/layout.css`**

Set up the full-bleed Projection Black background (`#000000`).

- [ ] **Step 3: Run verification to check background and fonts**

Verify background color and font-family rendering matches the design constraints.

- [ ] **Step 4: Commit**

```bash
git add index.html css/tokens.css css/layout.css
git commit -m "feat: setup design tokens and base layout"
```

### Task 2: Navigation & Tab System

**Files:**
- Modify: `index.html`
- Modify: `css/layout.css`
- Create: `js/navigation.js`

**Interfaces:**
- Consumes: Palette and typography variables from Task 1.
- Produces: Tab-switching logic, header wordmark rendering.

- [ ] **Step 1: Implement header wordmark and right-aligned nav**

Use the bullet glyph (`•`) as a separator for `ABOUT • RADAR • ARCHIVE`.

- [ ] **Step 2: Implement tab bar with 1px hairline separator**

Create the 42px editorial tab system.

- [ ] **Step 3: Implement tab switching logic in `js/navigation.js`**

Clicking a tab reveals the corresponding content pane.

- [ ] **Step 4: Commit**

```bash
git add index.html css/layout.css js/navigation.js
git commit -m "feat: add navigation and tab system"
```

### Task 3: Interactive Components (Radar & Lists)

**Files:**
- Create: `js/components/radar.js`
- Create: `js/components/lists.js`
- Modify: `index.html`

**Interfaces:**
- Consumes: Navigation state from Task 2.
- Produces: Radar visualization, detector list display.

- [ ] **Step 1: Create interactive Radar component simulator**

Display amber/blue signals with signal-strength distribution.

- [ ] **Step 2: Create List components for CAMERAS/TRACKERS/PUBLIC SAFETY**

List items must have hairline borders, 0px radius.

- [ ] **Step 3: Verify list component styling against spec**

- [ ] **Step 4: Commit**

```bash
git add js/components/radar.js js/components/lists.js index.html
git commit -m "feat: add radar and detector lists"
```

### Task 4: Detail View, Export, and Duress

**Files:**
- Create: `js/components/details.js`
- Modify: `js/navigation.js`
- Modify: `index.html`

**Interfaces:**
- Consumes: Selected detector items.
- Produces: Detail pane, export simulation, duress wipe.

- [ ] **Step 1: Implement detail pane for individual detections**

- [ ] **Step 2: Implement EXPORT simulation (trigger share sheet)**

- [ ] **Step 3: Implement DURESS · CLEAR ALL logic**

- [ ] **Step 4: Commit**

```bash
git add js/components/details.js js/navigation.js index.html
git commit -m "feat: add detail view, export, and duress wipe"
```
