# Hi, I'm Yi Wang

**AI Agent Engineer · Full-Stack Developer** — CS @ York University · Toronto, Canada

[![Portfolio](https://img.shields.io/badge/Portfolio-yiw.me-6366f1?style=flat-square&logo=google-chrome&logoColor=white)](https://www.yiw.me)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-yiwang2025-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/yiwang2025/)
[![CCA-F](https://img.shields.io/badge/Anthropic_CCA--F-Certified-d4a574?style=flat-square&logo=anthropic&logoColor=white)](https://verify.skilljar.com/c/55dac5dsnruv)
[![Adventure X 2026](https://img.shields.io/badge/Adventure_X_2026-🏆_Track_1st-e63946?style=flat-square)](https://gallery.adventure-x.org/users/cmpaohzs4000302ky3zdmd1k3)

I turn AI agents from demos into **production-grade systems** — multi-agent orchestration, tool contracts, guardrails, observability, and cost governance, shipped end-to-end.

---

## 💼 Experience

**PharmaLegacy** — AI Application Developer (FDE) · *2026.05 – 2026.08*
> Multi-agent report automation for preclinical drug research (CRO) — LangGraph pipeline: data ingestion → stats → integrity gates → charting → writing → human review → GLP-compliant export.

- Hours of manual report work **converged to human review only**; every model action wrapped in Pydantic ToolContracts with typed input / output / error
- **Zero-tolerance numeric hallucination**: all figures computed by rule engine with trace binding, fail-closed integrity gates between stages — every number in the report is auditable
- Full observability: unified audit log + Arize Phoenix tracing, every deliverable reproducible step-by-step for GLP compliance

**Morphace** (Toronto AI Skincare Startup, 7-person, all-English) — AI Agent Developer Intern · *2026.02 – 2026.04*
> Sole owner of backend & AI agent module: data ingestion → skin scoring → agent reasoning → cache → CDN delivery.

- LangGraph state machine (Planner → Tool → LLM → Guardrail → Fallback) with 5 deterministic MCP tools; dual-layer guardrails cut non-compliant output from **~15% → <2%**
- Input-hash caching: **60–70% hit rate, <50 ms** cached responses (was 2–4 s)
- Shipped community backend from 0→1 (cursor pagination, push-pull feed, <1 s live notifications) + full CI/CD + Prometheus — **zero P0 incidents**

---

## 🏅 Highlights

- 🏆 **Adventure X 2026 — Track 1st Prize**: [Possibility](https://gallery.adventure-x.org/users/cmpaohzs4000302ky3zdmd1k3), AI decision companion — solo build, **6 days, 189 commits**, concept → shipped product
- 📜 **[Anthropic Claude Certified Architect — Foundations (CCA-F)](https://verify.skilljar.com/c/55dac5dsnruv)**
- 🔧 **Merged PR in [OpenClaw](https://github.com/openclaw/openclaw) (385k★)** — [PR #2143](https://github.com/openclaw/openclaw/pull/2143): fixed model failover retrying cooled-down OAuth channels (worst case ~1 h user-facing stall → **instant recovery**)

---

## 🚀 Featured Projects

### Core Products

<table>
  <tr>
    <td width="33%" valign="top">
      <h4>1) SREDSimplify</h4>
      <a href="https://sredsimplify.com/">
        <img src="./assets/projects/sredsimplify.png" alt="SREDSimplify live preview" />
      </a>
      <p>
        <strong>SR&amp;ED claim console</strong> with evidence ingestion, structured pre-checks, and audit-friendly T661 drafting workflow for founders and reviewers.
      </p>
      <p>
        <a href="https://sredsimplify.com/" aria-label="SREDSimplify Website">
          <img src="https://cdn.simpleicons.org/googlechrome" alt="Website" height="18" />
        </a>
      </p>
    </td>
    <td width="33%" valign="top">
      <h4>2) Ai DIY Docs</h4>
      <a href="https://docs.yiw.me/">
        <img src="./assets/projects/aidiy-docs.png" alt="Ai DIY docs live preview" />
      </a>
      <p>
        <strong>Engineering knowledge base</strong> covering CS core, AI agents, backend/frontend, and DevOps — built as a production-ready documentation platform.
      </p>
      <p>
        <a href="https://docs.yiw.me/" aria-label="Ai DIY Docs Website">
          <img src="https://cdn.simpleicons.org/googlechrome" alt="Website" height="18" />
        </a>
        <a href="https://github.com/YiWang24/AiDIY" aria-label="Ai DIY Docs Repository">
          <img src="https://cdn.simpleicons.org/github" alt="GitHub Repository" height="18" />
        </a>
      </p>
    </td>
    <td width="33%" valign="top">
      <h4>3) Openbot</h4>
      <p>
        <strong>Self-hosted GitHub maintenance bot</strong> — issue triage, bug reproduction, auto-fix, code review, Q&amp;A. Bounded workflows + regression eval: <strong>~10% fix pass improvement, token cost ~2M → ~70k per task</strong>.
      </p>
      <p>
        <a href="https://github.com/YiAgent/openbot" aria-label="Openbot Repository">
          <img src="https://cdn.simpleicons.org/github" alt="GitHub Repository" height="18" />
        </a>
      </p>
    </td>
  </tr>
</table>

### Hackathon Products

<table>
  <tr>
    <td valign="top">
      <h4>🏆 Possibility — <i>Adventure X 2026 Track 1st Prize</i></h4>
      <p>
        <strong>AI decision companion</strong> for young professionals navigating career transitions. A 3-stage funnel: streaming AI chat surfaces emotional context &amp; decision signals → structured matching with 3 real human experiences across different outcomes with rationale → paid conversion. Built solo in 6 days (189 commits) from concept to shipped product.
      </p>
      <p>
        <a href="https://gallery.adventure-x.org/users/cmpaohzs4000302ky3zdmd1k3" aria-label="Adventure X Gallery">
          <img src="https://cdn.simpleicons.org/googlechrome" alt="Gallery" height="18" />
        </a>
        <a href="https://github.com/YiWang24/possibility" aria-label="Possibility Repository">
          <img src="https://cdn.simpleicons.org/github" alt="GitHub Repository" height="18" />
        </a>
      </p>
    </td>
  </tr>
  <tr>
    <td width="33%" valign="top">
      <h4>FitLogic</h4>
      <a href="https://fitlogic.vercel.app/">
        <img src="./assets/projects/fitlogic.png" alt="FitLogic live preview" />
      </a>
      <p>
        <strong>AI fitness coaching experience</strong> focused on adaptive training + nutrition logic, progress analytics, and coach-assisted personalization.
      </p>
      <p>
        <a href="https://fitlogic.vercel.app/" aria-label="FitLogic Website">
          <img src="https://cdn.simpleicons.org/googlechrome" alt="Website" height="18" />
        </a>
      </p>
    </td>
    <td width="33%" valign="top">
      <h4>SmartDiet Copilot</h4>
      <a href="https://dietcopilot.vercel.app/">
        <img src="./assets/projects/dietcopilot.png" alt="SmartDiet Copilot live preview" />
      </a>
      <p>
        <strong>Agentic AI dietitian</strong> that combines receipt/fridge/meal perception with goal-aware planning to reduce waste and deliver actionable meal decisions.
      </p>
      <p>
        <a href="https://dietcopilot.vercel.app/" aria-label="SmartDiet Copilot Website">
          <img src="https://cdn.simpleicons.org/googlechrome" alt="Website" height="18" />
        </a>
        <a href="https://github.com/YiWang24/SmartDiet-Copilot" aria-label="SmartDiet Copilot Repository">
          <img src="https://cdn.simpleicons.org/github" alt="GitHub Repository" height="18" />
        </a>
      </p>
    </td>
    <td width="33%" valign="top">
      <h4>SplitBase</h4>
      <a href="https://split.yiw.me/">
        <img src="./assets/projects/splitbase.png" alt="SplitBase live preview" />
      </a>
      <p>
        <strong>Base Pay bill-splitting app</strong> for group settlements with USDC, real-time status tracking, share links/QR flows, and optional NFT receipts.
      </p>
      <p>
        <a href="https://split.yiw.me/" aria-label="SplitBase Website">
          <img src="https://cdn.simpleicons.org/googlechrome" alt="Website" height="18" />
        </a>
        <a href="https://github.com/YiWang24/SplitBase" aria-label="SplitBase Repository">
          <img src="https://cdn.simpleicons.org/github" alt="GitHub Repository" height="18" />
        </a>
      </p>
    </td>
  </tr>
</table>

---

## 🛠 Tech Stack

| | |
|---|---|
| **Agent / LLM** | LangGraph · LangChain · RAG · MCP · Structured Output &amp; Guardrails · Agent Eval &amp; Cost Control |
| **Languages** | Python · TypeScript / JavaScript · Java · Swift · SQL |
| **Backend &amp; Frontend** | FastAPI · Spring Boot · Next.js / React · SwiftUI · PostgreSQL / pgvector · Redis · Celery |
| **DevOps / Cloud** | Docker · GitHub Actions · AWS · Vercel · Linux |

---

## 📊 GitHub Stats

<p align="center">
  <img src="https://github-readme-stats-myl.vercel.app/api?username=YiWang24&show_icons=true&theme=default&hide_border=true&include_all_commits=true&bg_color=ffffff&title_color=6366f1&text_color=1f2937&icon_color=6366f1" alt="GitHub Stats" height="170" />
  <img src="https://github-readme-stats-myl.vercel.app/api/top-langs/?username=YiWang24&layout=compact&theme=default&hide_border=true&langs_count=8&bg_color=ffffff&title_color=6366f1&text_color=1f2937" alt="Top Languages" height="170" />
</p>

---

<p align="center">
  <i>Turning AI agents into production systems with measurable outcomes.</i>
</p>
