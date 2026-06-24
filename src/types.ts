export interface NavItem {
  label: string;
  href: string;
}

export interface MeetupSchedule {
  title: string;
  location: string;
  time: string;
  date: string;
  badges: string[];
}

export interface ProblemItem {
  number: string;
  title: string;
}

export interface ValuePropCard {
  title: string;
  description: string;
  badge: string;
  iconName: 'coffee' | 'laptop';
}

export interface ActivityCard {
  title: string;
  description: string;
  badge: string;
  icon: 'coffee' | 'users' | 'handshake';
  colorAccent: string;
}

export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  avatarBg: string;
}

export interface JoinFormData {
  name: string;
  profession: string;
  contact: string;
}
