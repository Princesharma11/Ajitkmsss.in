export type StaffCategory = 'security' | 'horticulture' | 'sanitation' | 'support' | 'library';

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  mobile: string;
  photo?: string;
  category: StaffCategory;
  initials: string;
}

export const STAFF_CATEGORIES: Record<StaffCategory, { label: string; color: string; icon: string }> = {
  security:    { label: 'Security',       color: '#8B0000', icon: '🛡️' },
  horticulture:{ label: 'Horticulture',   color: '#2d6a2d', icon: '🌿' },
  sanitation:  { label: 'Sanitation',     color: '#1a4a7a', icon: '🧹' },
  support:     { label: 'Support Staff',  color: '#7a4a00', icon: '💧' },
  library:     { label: 'Library',        color: '#4a1a7a', icon: '📚' },
};

export const STAFF: StaffMember[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'Night Guard',
    mobile: '8292948049',
    photo: '/images/staff/rajesh-kumar.jpg',
    category: 'security',
    initials: 'RK',
  },
  {
    id: 2,
    name: 'Arvind Kumar',
    role: 'Gardener',
    mobile: '6264404881',
    photo: '/images/staff/arvind-kumar.jpg',
    category: 'horticulture',
    initials: 'AK',
  },
  {
    id: 3,
    name: 'Dharmendra Kumar',
    role: 'Night Guard',
    mobile: '8757114404',
    photo: '/images/staff/dharmendra-kumar-guard.jpg',
    category: 'security',
    initials: 'DK',
  },
  {
    id: 4,
    name: 'Sohan Kumar',
    role: 'Sweeper',
    mobile: '8950419985',
    photo: '/images/staff/sohan-kumar.jpg',
    category: 'sanitation',
    initials: 'SK',
  },
  {
    id: 5,
    name: 'Arti Kumari',
    role: 'Water Woman',
    mobile: '8873659317',
    photo: '/images/staff/arti-kumari.jpg',
    category: 'support',
    initials: 'AK',
  },
  {
    id: 6,
    name: 'Prabhat Kumar Varma',
    role: 'Office Peon & Electrician',
    mobile: '7991133799',
    photo: '/images/staff/prabhat-kumar-varma.jpg',
    category: 'support',
    initials: 'PV',
  },
  {
    id: 7,
    name: 'Ramratan Choudhary',
    role: 'Sweeper',
    mobile: '9135745031',
    photo: '/images/staff/ramratan-choudhary.jpg',
    category: 'sanitation',
    initials: 'RC',
  },
  {
    id: 8,
    name: 'Krishna Kumar',
    role: 'Peon',
    mobile: '8709132940',
    photo: '/images/staff/krishna-kumar.jpg',
    category: 'support',
    initials: 'KK',
  },
  {
    id: 9,
    name: 'Chandreshwar Singh',
    role: 'Librarian Assistant',
    mobile: '9661622107',
    photo: '/images/staff/chandreshwar-singh.jpg',
    category: 'library',
    initials: 'CS',
  },
  {
    id: 10,
    name: 'Avdhesh Kumar Mahto',
    role: 'Librarian',
    mobile: '9113324198',
    photo: '/images/staff/avdhesh-kumar-mahto.jpg',
    category: 'library',
    initials: 'AM',
  },
];
