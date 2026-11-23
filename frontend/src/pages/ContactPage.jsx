import { Phone, Mail, MapPin, Clock, MessageCircle, Send, ShieldCheck, ExternalLink } from 'lucide-react'
import { Container, Badge, Card } from '../components/ui/index'
import { HOSPITAL } from '../data/constants'
import { useForm } from '../hooks/index'

export default function ContactPage() {
  const { values, handleChange, isSubmitted, setIsSubmitted } = useForm({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge variant="primary" className="mb-3">
              <MessageCircle className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Contact Desk</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              Get in Touch with <br />
              <span className="text-[#007C88]">Malik Life Care Hospital</span>
            </h1>
            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              We are here to assist with general enquiries, specialist consultations, lab test bookings, and 24/7 medical emergencies in Krishnagiri.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Contact Section */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F9FBFC]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Info Column (Span 6) */}
            <div className="lg:col-span-6 space-y-4">
              <h2 className="text-2xl font-extrabold text-[#173C4B] mb-2">
                Hospital Contact Channels
              </h2>
              <p className="text-sm text-[#4A6568] mb-6">
                Our central reception desk coordinates consultations across all 11 speciality departments.
              </p>

              {/* Emergency Banner */}
              <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-red-50 border border-red-100">
                <div className="w-11 h-11 rounded-xl bg-red-100 text-red-600 flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-red-700">
                    24/7 Priority Emergency Support
                  </h3>
                  <p className="text-xs text-red-600/90 mt-0.5">
                    Ambulance service, trauma care, and duty doctors available 24 hours.
                  </p>
                  <a
                    href={`tel:${HOSPITAL.phone}`}
                    className="inline-block mt-2 font-black text-base text-red-700 underline"
                  >
                    Call: {HOSPITAL.phone}
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F6] text-[#007C88] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#173C4B]">
                    Hospital Phone
                  </h3>
                  <p className="text-xs text-[#6B8A8D] mt-0.5">
                    Appointments, reception, and patient care coordination
                  </p>
                  <a
                    href={`tel:${HOSPITAL.phone}`}
                    className="inline-block mt-1 font-extrabold text-sm text-[#007C88] hover:text-[#07545B]"
                  >
                    {HOSPITAL.phone}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#E6F5F6] text-[#007C88] flex items-center justify-center shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#173C4B]">
                    Email Enquiries
                  </h3>
                  <p className="text-xs text-[#6B8A8D] mt-0.5">
                    General communications and administrative desk
                  </p>
                  <a
                    href={`mailto:${HOSPITAL.email}`}
                    className="inline-block mt-1 font-bold text-sm text-[#007C88] hover:text-[#07545B]"
                  >
                    {HOSPITAL.email}
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-gray-100 shadow-2xs">
                <div className="w-11 h-11 rounded-xl bg-[#EDF8F2] text-[#4B9B75] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#173C4B]">
                    Campus Address
                  </h3>
                  <p className="text-xs text-[#4A6568] mt-0.5 leading-relaxed">
                    {HOSPITAL.address}
                  </p>
                  <a
                    href={HOSPITAL.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#007C88] mt-2 hover:underline"
                  >
                    <span>Open in Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form Column (Span 6) */}
            <div className="lg:col-span-6">
              <Card>
                {isSubmitted ? (
                  <div className="text-center py-10 sm:py-14">
                    <div className="w-16 h-16 rounded-full bg-[#EDF8F2] text-[#4B9B75] flex items-center justify-center mx-auto mb-4">
                      <ShieldCheck className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-[#173C4B] mb-2">
                      Message Received!
                    </h3>
                    <p className="text-sm text-[#4A6568] mb-6">
                      Thank you for contacting Malik Life Care Hospital. Our support desk will reach out to you within a few hours.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-teal px-6 py-3 rounded-full text-sm font-bold"
                    >
                      Send Another Enquiry
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-extrabold text-[#173C4B] mb-1">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#6B8A8D] mb-6">
                      Please submit your message and our team will get in touch with you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-[#173C4B] mb-1.5 uppercase tracking-wider">
                          Your Full Name *
                        </label>
                        <input
                          name="fullName"
                          value={values.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 transition-all text-[#173C4B]"
                          placeholder="e.g. Priya Rajan"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#173C4B] mb-1.5 uppercase tracking-wider">
                            Phone Number *
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 transition-all text-[#173C4B]"
                            placeholder="e.g. 9944825586"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#173C4B] mb-1.5 uppercase tracking-wider">
                            Email Address *
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 transition-all text-[#173C4B]"
                            placeholder="e.g. patient@gmail.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#173C4B] mb-1.5 uppercase tracking-wider">
                          Message / Enquiry *
                        </label>
                        <textarea
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          required
                          rows="4"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 transition-all text-[#173C4B] resize-none"
                          placeholder="How can our hospital team assist you?"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-teal w-full py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                      >
                        <Send className="w-4 h-4 text-white" />
                        <span className="text-white font-bold">Send Message</span>
                      </button>
                    </form>
                  </>
                )}
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </>
  )
}
