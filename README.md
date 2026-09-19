# Transport & Fleet Safety Operations Manual (MCP-Powered Knowledge Base)

An automated, AI-accessible compliance and safety operations knowledge base built with **Sanity Studio** and integrated directly into **VS Code** via the **Model Context Protocol (MCP)**. This system allows fleet managers and developers to execute real-time, cross-document compliance queries and safety syntheses instantly.

---

## 🛠️ The Tech Stack
* **Headless CMS & Database:** Sanity Studio (Project Dataset: `dyxta77n`)[cite: 1]
* **Schema Definition:** Custom `complianceDocument.ts` schema structured for multi-category compliance records.
* **AI Integration:** Local Model Context Protocol (MCP) bridge connecting the database directly to the local AI assistant.
* **Development Environment:** VS Code with integrated AI assistant extension[cite: 1].

---

## 📚 The Knowledge Base
The system houses six comprehensive, version-controlled core safety records covering administrative and operational categories:

1. **Pre-Trip Inspection Standard** (Equipment Maintenance / Fleet) — 36-point walkaround requirements, defect reporting workflows, and safety validation thresholds.
2. **Emergency Spill and Hazardous Materials Response Protocol** (Hazard Response) — Spill kit deployment, containment hierarchy, and immediate reporting triggers.
3. **Severe Weather and Low-Visibility Driving Guidelines** (Fleet Safety) — Visibility thresholds (<50m), speed adjustment rules, and mandatory route suspension criteria.
4. **Post-Accident and Incident Investigation Standard Procedure** (Hazard Response) — On-scene safety rules, emergency notification checklists, and photographic evidence logging.
5. **Hours of Service (HOS) and Driver Fatigue Management Policy** (Driver Protocols / Fleet) — 4.5-hour driving limits, mandatory rest breaks, electronic logging device (ELD) mandates, and non-compliance penalties.
6. **Cargo Securement and Weight Distribution Standard** (Equipment Maintenance) — Working Load Limit (WLL) requirements, tie-down inspections, and mid-route check intervals (every 200 km).

---

## ⚡ Core Capabilities & Automated Querying
By bridging Sanity Studio with the local AI assistant via MCP, the system transitions static safety manuals into an interactive, intelligent agent. Key capabilities include:

* **Cross-Document Synthesis:** Instantly pulls and cross-references policies across separate administrative and operational documents (e.g., comparing Hours of Service penalties with Driver Medical Fitness requirements).
* **Unified Checklist Generation:** Combines standalone maintenance records (such as pre-trip walkarounds and cargo securement rules) into unified, chronological timelines for dispatchers.
* **Real-Time Regulatory Checks:** Queries live dataset records to answer complex compliance scenarios instantly without manual document searching.