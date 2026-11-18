# Design Document: SWIVEL Web Redesign (Approach B — Multi-Tab Editorial Application)

## Intent and Why
SWIVEL is a passive Wi-Fi and Bluetooth radio radar & detector app for Android. To showcase its capabilities, architecture, and evidence-based detector philosophy on the web, we are redesigning the web presentation into a high-end editorial web application modeled after 601 Inc. Tokyo film studio (`DESIGN.md`). 

Rather than a generic SaaS product dashboard, this web interface will treat radio frequency monitoring as a silent, cinematic screening room.

## Goals
1. **Faithful 601 Aesthetic Compliance:**
   - **Colors:** Projection Black (`#000000`), Darkroom Shadow (`#4f4d3c`), and Celluloid Cream (`#ece4b4`).
   - **Typography:** Clean sans-serif with tight letter-spacing (`-0.04em`), weight 400 throughout (no bold), large editorial numbers (42px, 230px, 280px).
   - **Structure:** 1px solid Celluloid Cream hairlines, 0px border-radius on containers/images, zero drop shadows or gradients, full-bleed cinematic layout.
2. **Interactive Multi-Tab Dashboard:**
   - **LIVE:** Radar scope visualization (amber Wi-Fi blips, blue Bluetooth blips) with live signal feed and RSSI distribution.
   - **CAMERAS:** Filtered list of detected camera hardware (Ring, Wyze, Hikvision, etc.) with evidence trails.
   - **TRACKERS:** AirTag, Tile, SmartTag detection with "separated tracker following you" alert state.
   - **PUBLIC SAFETY:** Graded High/Med/Low surveillance gear (Flock, Axon, Motorola, WatchGuard).
   - **ALERTS:** Chronological alert stream with confidence tiers (three beeps / one beep) and evidence breakdown.
   - **MORE:** Settings, capture mode toggles, Export simulator (CSV/KML/JSON), and Duress Clear All panic wipe.
3. **Responsive & Self-Contained:**
   - Built as a single-page HTML/CSS/JS application or modular files that run instantly without external backend dependencies, while fully interactive.

## Non-Goals
- Real-time physical hardware packet sniffing in the browser (browsers cannot access raw Wi-Fi/BLE promiscuous mode; the web app simulates a fully operational session based on real SWIVEL capture exports and telemetry).
- Cloud accounts or server-side databases (everything stays client-side, respecting SWIVEL's zero-cloud privacy ethos).

## Anti-Goals
- Generic SaaS card kits, rounded floating containers with soft shadows, warm cream #F4F1EA templates, or multi-color badge noise.

## Approaches Considered
- **Approach A:** Single-page vertical scrolling editorial reel. (Rejected by user choice).
- **Approach B:** Multi-tab editorial application interface mirroring SWIVEL's Android app tabs (`LIVE`, `CAMERAS`, `TRACKERS`, `PUBLIC SAFETY`, `ALERTS`, `MORE`) with 601 film studio styling. (Chosen).

## Key Components & Layout
- **Top Navigation:** Wordmark `SWIVEL` top-left in giant scale or 42px header, right nav with bullet glyphs (`ABOUT • RADAR • ARCHIVE`).
- **Tab Navigation Bar:** Thin hairline separator, 42px editorial tab switcher (`LIVE` / `CAMERAS` / `TRACKERS` / `PUBLIC SAFETY` / `ALERTS` / `MORE`).
- **Content Panes:** Full-bleed darkroom background (`#4f4d3c` / `#000000`), 1px hairline cards, exact CSS specifications matching `DESIGN.md`.
