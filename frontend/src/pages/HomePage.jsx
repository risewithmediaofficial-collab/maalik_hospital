import {
  HeroSection,
  QuickActionsBar,
  AboutSection,
  DepartmentsSection,
  DoctorsSection,
  FacilitiesSection,
  WhyChooseSection,
  FounderSection,
  TestimonialsSection,
  DiagnosticsSection,
  BlogSection,
  LocationSection,
} from '../components/sections/index'

export default function HomePage() {
  return (
    <>
      {/* 01. Hero with Family & Hospital Visual */}
      <HeroSection />

      {/* 02. Floating Quick Actions Bar (5 Pills) */}
      <QuickActionsBar />

      {/* 03. About Us: Care that Earns Lasting Trust + 3 Vertical Stats */}
      <AboutSection />

      {/* 04. Our Specialities: Comprehensive Care Across 11 Departments */}
      <DepartmentsSection />

      {/* 05. Our Doctors: Dr. Ismail Malik & Dr. Z. Thasleem */}
      <DoctorsSection />

      {/* 06. Our Facilities: Operation Theatre, NICU, Private Room, Ward */}
      <FacilitiesSection />

      {/* 07. Value Band: 4 Care Pillars (Teal to Plum Gradient) */}
      <WhyChooseSection />

      {/* 08. Founder Philosophy: Every Patient is Family */}
      <FounderSection />

      {/* 09. Verified Patient Testimonials */}
      <TestimonialsSection />

      {/* 10. Lab & Diagnostics 5-Step Booking Flow */}
      <DiagnosticsSection />

      {/* 11. Health Blog & Patient Guides */}
      <BlogSection />

      {/* 12. Location, Map & 24/7 Emergency Support */}
      <LocationSection />
    </>
  )
}
