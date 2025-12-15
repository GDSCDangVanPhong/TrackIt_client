export type Period = 'daily' | 'weekly' | 'monthly'

export interface Range {
  start: Date
  end: Date
}
export interface Stat {
  title: string
  icon: string
  value: number | string
  variation: number
  formatter?: (value: number) => string
}
export interface Mail {
  id: number
  unread?: boolean
  from: User
  subject: string
  body: string
  date: string
}