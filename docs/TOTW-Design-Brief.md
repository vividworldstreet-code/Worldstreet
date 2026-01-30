# WorldStreet — Trader of the Week (TOTW)

## Frontend Design Brief

---

## 1. Overview

The **Trader of the Week (TOTW)** feature is a competitive, leaderboard-driven page designed to spotlight high-performing traders on WorldStreet, reward disciplined trading behavior, and drive sustained platform engagement.

This is a **recurring weekly competition** that is transparent, aspirational, and socially shareable.

---

## 2. Objectives (Why this exists)

- Incentivize active trading volume and consistency
- Create public recognition for traders (status + prestige)
- Build community competition without encouraging reckless risk
- Provide a clear growth loop: **trade → rank → win → repeat**

---

## 3. Competition Summary (Content Block)

> This should appear at the top of the page as a hero or intro section.

### Title
**Trader of the Week**

### Description (editable copy area)
> Trader of the Week rewards the most active and disciplined traders on WorldStreet. Every week, traders compete based on verified trading activity. The top-ranked traders win cash, gadgets, and tools built for the next generation of global traders.

---

## 4. Prizes Section

> Design as a visual card grid or stacked highlights.

### Weekly Rewards

| Prize | Description |
|-------|-------------|
| 🏆 **Grand Prize** | $5,000 cash |
| 📱 **Premium gadgets** | iPhones |
| 💻 **Trading tools** | Laptops & accessories |
| 🎧 **Trader lifestyle gear** | Headphones, smart tools, productivity gadgets |

> Exact prize distribution logic can be abstracted at UI level (e.g. "Top 10 win") to allow backend flexibility.

---

## 5. How to Participate (Instructional Block)

> This must be simple, scannable, and unambiguous.

### Steps

1. Trade any supported market on WorldStreet
2. Minimum trade size: **0.1 lot**
3. Every eligible trade increases your leaderboard score
4. Rankings update in **near real-time**
5. Winners are announced **weekly**

### Include

- A **"Start Trading"** CTA button
- Optional FAQ / info tooltip for eligibility rules

---

## 6. Leaderboard (Core UI Component)

### Mandatory Data Fields (Per Trader Row)

Each leaderboard row should display:

| Field | Description |
|-------|-------------|
| **Rank** | 1, 2, 3… |
| **Trader Username** | Display name |
| **Country** | Flag + country name |
| **Asset / Market Traded** | e.g. XAUUSD, BTCUSD, NAS100, EURUSD |
| **Total Volume Traded** | Lots |
| **Status Indicator** | Active / In-Progress / Finalized (week ended) |

---

## 7. Recommended Enhancements (Industry Standard)

> To future-proof the design, include placeholders or support for:

| Feature | Description |
|---------|-------------|
| 🔄 **Live / Auto Refresh Indicator** | Shows data is updating |
| ⏱ **Countdown Timer** | "Time left this week" |
| 🧭 **Filters** | By asset class (Forex, Crypto, Indices, Commodities), By country |
| 📊 **Sorting** | Volume (default), Alphabetical (username) |
| 🏅 **Top 3 Highlight Treatment** | Larger cards or gold/silver/bronze accents |
| 👤 **"Your Position" Sticky Row** | Shows logged-in user's rank even if off-screen |

---

## 8. States to Design For

Frontend should clearly account for:

| State | Behavior |
|-------|----------|
| **Logged-out user** | View leaderboard but CTA prompts login |
| **Logged-in but not participating** | Show eligibility reminder |
| **Active participant** | Highlight user row |
| **Empty state** | Early week / no qualifying trades yet |
| **End-of-week locked state** | Rankings frozen, winners highlighted |

---

## 9. Visual & UX Direction

- Clean, competitive, **fintech-grade UI**
- Feels aspirational, **not casino-like**
- Clear hierarchy: **Rank → Trader → Volume**
- Mobile-responsive leaderboard (horizontal scroll acceptable)
- Design should support **shareability**
  - Screenshot-friendly rows
  - Optional "Share Rank" CTA (future)

---

## 10. Non-Negotiables

- ✅ Data must feel **credible and real-time**
- ✅ No clutter or over-gamification
- ✅ Leaderboard must be **readable at a glance**
- ✅ Copy should remain **editable via CMS**

---

## 11. Deliverables Expected

- [ ] Desktop + mobile designs
- [ ] Leaderboard component system
- [ ] Empty / loading / active states
- [ ] Clear handoff specs for engineering

---

## 12. Out of Scope (v1)

- ❌ Social sharing
- ❌ Historical leaderboard archives
- ❌ Public profiles
- ❌ Commenting or reactions

---

## 13. Tooltips & Microcopy for FAQs (Production-Ready)

### 13.1 Ranking Tooltip

**"How is ranking calculated?"**

> Rankings are based on total eligible trading volume (lots) completed during the competition week. Profit or loss does not affect your rank.

---

### 13.2 Eligibility Tooltip

**"Who can participate?"**

> Any verified WorldStreet trader who places trades of at least 0.1 lot during the active competition period.

---

### 13.3 Volume Tooltip

**"What counts as volume?"**

> Only completed and verified trades placed within this week are counted. Canceled or reversed trades are excluded.

---

### 13.4 Tie-Breaker Tooltip

**"What happens in a tie?"**

> Ties are resolved by number of trades, then by who reached the volume first.

---

### 13.5 Countdown Tooltip

**"Why does time matter?"**

> Rankings lock when the competition ends. Final positions determine the winners.

---

### 13.6 Compliance Tooltip

**"Fair play notice"**

> Trades flagged for manipulation or policy violations may be removed from the leaderboard.
