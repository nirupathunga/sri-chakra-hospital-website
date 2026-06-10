/**
 * Sri Chakra Hospital Portal State & Interfaces
 */

export interface SpecialityItem {
  id: string;
  iconName: 'Activity' | 'Heart' | 'Stethoscope' | 'Eye' | 'ShieldAlert' | 'Award' | 'User';
  titleEn: string;
  titleTa: string;
  descEn: string;
  descTa: string;
}

export interface StatItem {
  id: string;
  value: string;
  labelEn: string;
  labelTa: string;
}

export interface DoctorListItem {
  id: string;
  nameEn: string;
  nameTa: string;
  roleEn: string;
  roleTa: string;
  degreeEn: string;
  degreeTa: string;
  expEn: string;
  expTa: string;
  avatarUrl?: string;
  specialityId: string;
}

export interface TestimonialItem {
  id: string;
  nameEn: string;
  nameTa: string;
  locationEn: string;
  locationTa: string;
  treatmentEn: string;
  treatmentTa: string;
  textEn: string;
  textTa: string;
  stars: number;
}

export interface BlogPostItem {
  id: string;
  titleEn: string;
  titleTa: string;
  date: string;
  excerptEn: string;
  excerptTa: string;
  categoryEn: string;
  categoryTa: string;
}

export interface WhyChooseUsItem {
  id: string;
  titleEn: string;
  titleTa: string;
  descEn: string;
  descTa: string;
  iconName: 'Award' | 'Shield' | 'Activity' | 'Heart' | 'Check' | 'ThumbsUp';
}
