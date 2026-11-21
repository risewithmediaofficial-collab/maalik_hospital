import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import DepartmentsPage from './pages/DepartmentsPage'
import DepartmentDetailPage from './pages/DepartmentDetailPage'
import DoctorsPage from './pages/DoctorsPage'
import FacilitiesPage from './pages/FacilitiesPage'
import LabDiagnosticsPage from './pages/LabDiagnosticsPage'
import BlogPage from './pages/BlogPage'
import GalleryPage from './pages/GalleryPage'
import ContactPage from './pages/ContactPage'
import TestimonialsPage from './pages/TestimonialsPage'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="departments" element={<DepartmentsPage />} />
        <Route path="departments/:slug" element={<DepartmentDetailPage />} />
        <Route path="doctors" element={<DoctorsPage />} />
        <Route path="facilities" element={<FacilitiesPage />} />
        <Route path="lab-diagnostics" element={<LabDiagnosticsPage />} />
        <Route path="testimonials" element={<TestimonialsPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="gallery" element={<GalleryPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
    </Routes>
  )
}
