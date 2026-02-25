// ── Persona config ───────────────────────────────────────────
export const PERSONA_CONFIG: Record<string, {
  name: string
  role: string
  color: string
  photo?: string
}> = {
  Alexis:   { name: 'Alexis Favre',     role: 'Cofounder & CTO',  color: '#0a66c2', photo: '/images/photo_alexis.jpeg' },
  Brittany: { name: 'Brittany Garrett',  role: 'Ops Manager',      color: '#7c3aed', photo: '/images/photo_brittany.jpeg' },
  Carter:   { name: 'Carter Supple',     role: 'Technical Sales',  color: '#059669', photo: '/images/photo_carter.jpeg' },
  Nacho:    { name: 'Nacho Malpartida',  role: 'Head of GTM',      color: '#d97706', photo: '/images/photo_nacho.jpeg' },
  Ruben:    { name: 'Ruben Burdin',      role: 'Founder',          color: '#dc2626', photo: '/images/photo_ruben.jpeg' },
}

export const PERSONA_KEYS = Object.keys(PERSONA_CONFIG)

// ── Types ────────────────────────────────────────────────────
export interface PersonaStats {
  impressions: number
  followers: number
}

export interface WeekEntry {
  week: string // Sunday date: YYYY-MM-DD
  personas: Record<string, PersonaStats>
}

// ── Weekly data ──────────────────────────────────────────────
// Add a new entry every Sunday afternoon (Bolivia time, UTC-4).
// Post impressions = number on LinkedIn sidebar
// Followers = total follower count from profile
//
// To add a new week: copy the last block, change the date,
// update each persona's numbers.

export const WEEKLY_DATA: WeekEntry[] = [
  {
    week: '2026-02-23',
    personas: {
      Alexis:   { impressions: 26247, followers: 9802 },
      Brittany: { impressions: 6,     followers: 1050 },
      Carter:   { impressions: 44094, followers: 781 },
      Nacho:    { impressions: 4710,  followers: 3192 },
      Ruben:    { impressions: 96699, followers: 16772 },
    },
  },
  // ↓ Paste next week here ↓
  // {
  //   week: '2026-03-01',
  //   personas: {
  //     Alexis:   { impressions: 0, followers: 0 },
  //     Brittany: { impressions: 0, followers: 0 },
  //     Carter:   { impressions: 0, followers: 0 },
  //     Nacho:    { impressions: 0, followers: 0 },
  //     Ruben:    { impressions: 0, followers: 0 },
  //   },
  // },
]
