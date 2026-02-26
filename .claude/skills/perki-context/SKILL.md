---
name: perki-context
description: Load full PERKi product context — vision, design decisions, IA, brand tone, and vocabulary. Use at the start of any PERKi work session.
allowed-tools: Read
---

# PERKi — Product Context for Claude

## What it is
PERKi is a calm memory system for subscription perks and benefits users already pay for but forget to use. It captures, stores, and resurfaces benefits from bank accounts, insurance, mobile plans, memberships, and employer subscriptions — without urgency, promotion, or noise. The tagline is "Never forget what you already have."

## What it is NOT (critical)
- Not a coupon finder or deals app
- Not a loyalty points tracker
- Not an affiliate marketplace
- Not a wallet or payment tool
- Not a social or sharing product
- Never completes transactions — always links out to the partner

## Team & Tools
- Designer/Developer: Ben (Pangaea Creative)
- Product strategy: David Jolly
- Branding: Zoë, David M, Carlo
- Design tool: Figma
- Target platform: iOS mobile app (MVP)
- AI layer: Claude API (screenshot parsing, voice input, email parsing)

## Core Vocabulary
- **Perk**: an ongoing benefit unlocked by an existing membership or subscription (always there, often forgotten)
- **Partner**: the company that provides the perk (e.g. Barclays, Vitality, AA)
- **Voucher**: stored value bought for someone to spend — not what PERKi tracks
- **Coupon**: retailer-offered, time-bound, campaign-based — not what PERKi tracks

## Navigation & IA
Two-tab structure:
- **Home tab**: surfaces "worth noticing" perks (max 4 cards) + saved items. Not a feed. Not infinite scroll.
- **Perks tab**: organised by Partner (source-first, not category-first). Each partner opens to its perk list.

Separate search/retrieval path: browse by context (coffee, travel, lunch, etc.) with filter chips. No ranking by commercial logic.

## Key Design Decisions (don't revisit without reason)
- **4-card max on Home** — prevents feed-like experience
- **No countdown timers** — replaced with static dates. Urgency language is off-brand.
- **No nudges or notification push** — silence is a feature. Notifications only if user explicitly opts in.
- **Source-first IA** — perks grouped by Partner, not category. Matches mental model "I have this because I pay for that."
- **Single value metric** — "Value used this year" card only. No dashboards, no gamification.
- **Perks persist** — they survive subscription renewal and app updates. Not ephemeral.
- **Archive, don't delete** — users hide perks they won't use (e.g. female-only perks), not delete them.
- **PERKi never completes transactions** — always deep-links to partner app or web.

## Perk Capture Methods (MVP)
1. Screenshot (AI extracts perk details)
2. Voice note (transcribed + parsed)
3. Forward email (parsed on arrival)
4. Manual entry (plain language, low friction)

Onboarding tone: "placing something somewhere safe" — not joining a product.

## Aesthetic & Design Principles
Reference: **1Password** (calm, trusted vault) — NOT Monzo, NOT reward apps.

- **80%** Everyday interactions: simple, minimal, muted palette, generous whitespace, typography-led
- **15%** Rich moments: first perk added, success states, milestones — warm, brief, not gamified
- **5%** Information-dense views: perk detail, terms, archive list — functional, neutral

Never: neon colours, confetti loops, streaks, urgency banners, "Don't miss out" copy.

## Brand Character
- Respectful of people, not extractive of attention
- Principled and self-restraining
- Quietly confident, not performative
- Human, grounded, occasionally wry
- On the user's side, not the system's

## Tone of Voice Rules
- Short sentences, neutral verbs
- No aspiration language ("unlock your potential", "maximise your life")
- No urgency language ("expires soon", "act now", "don't miss")
- Copy passes the "delete test": would this message be useful if the user deleted the app?
- Empty states and onboarding: reassuring, never pushy

## Monetisation
- Free tier: up to 5 perks
- One-time payment: £5 for unlimited perks
- No subscription, no ads, no affiliate revenue

## Current Phase
Wireframes complete for: onboarding, perk capture (all 3 input methods), home screen, perks tab, perk detail.
Now moving into: visual design, component building, dev epic creation with Jolly, brand expression with creative team.

## Links
- Figma: https://www.figma.com/design/PdX3vLYtlYjTXiwSCh4f72/PERKI
- FigJam: [add FigJam URL here]
- Staging/prototype: [add when available]
