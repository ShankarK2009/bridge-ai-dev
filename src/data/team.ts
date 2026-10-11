export interface Member {
  name: string;
  role: string;
  /** Base path without the size suffix. */
  photo: string;
  /** Source photos smaller than the display size ship one size only. */
  smallSource?: boolean;
}

export interface TeamGroup {
  title: string;
  members: Member[];
}

export const TEAM: TeamGroup[] = [
  {
    title: 'Co-Founders',
    members: [
      { name: 'Vivan Wali', role: 'Co-Founder', photo: '/images/team/vivan', smallSource: true },
      { name: 'Akshaj Chava', role: 'Co-Founder', photo: '/images/team/akshaj', smallSource: true },
      { name: 'Isamu Hamai', role: 'Co-Founder', photo: '/images/team/isamu', smallSource: true },
    ],
  },
  {
    title: 'Co-Presidents',
    members: [
      { name: 'Aditya Ratnawat', role: 'Co-President', photo: '/images/team/aditya' },
      { name: 'Anuj Subramanian', role: 'Co-President', photo: '/images/team/anuj' },
    ],
  },
  {
    title: 'Vice Presidents',
    members: [
      { name: 'Tanish Potluri', role: 'VP of Policy and Outreach', photo: '/images/team/tanish' },
      { name: 'Rohan Movva', role: 'Vice President', photo: '/images/team/rohan' },
      { name: 'Aaryn Titus', role: 'Vice President', photo: '/images/team/aaryn' },
    ],
  },
  {
    title: 'Directors',
    members: [
      { name: 'Shankar Krishnamurthy', role: 'Director of Technology', photo: '/images/team/shankar' },
      { name: 'Natalee Freeman', role: 'Co-Director of Social Media', photo: '/images/team/natalee' },
      { name: 'Vishnu llapakurthi', role: 'Co-Director of Social Media', photo: '/images/team/vishnu' },
      { name: 'Aditi Sahoo', role: 'Co-Director of Social Media', photo: '/images/team/aditi' },
    ],
  },
];
