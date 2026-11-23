import { FlaskConical, Search, Calendar, Clock, ClipboardCheck, UserCheck, ArrowRight, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import { Container, Badge, Button, Card } from '../components/ui/index'
import { useForm } from '../hooks/index'

const labTests = [
  { id: 1, name: 'Complete Blood Count (CBC)', duration: '30 min', prep: 'No fasting required', processing: 'Same day' },
  { id: 2, name: 'Blood Sugar (Fasting & PP)', duration: '15 min', prep: '8-12 hours fasting required', processing: 'Same day' },
  { id: 3, name: 'Lipid Profile (Cholesterol)', duration: '20 min', prep: '10-12 hours overnight fasting', processing: 'Same day' },
  { id: 4, name: 'Thyroid Profile (T3, T4, TSH)', duration: '20 min', prep: 'Morning sample preferred', processing: 'Next day' },
  { id: 5, name: 'Liver Function Test (LFT)', duration: '20 min', prep: 'No special fasting needed', processing: 'Same day' },
  { id: 6, name: 'Kidney Function Test (KFT / RFT)', duration: '20 min', prep: 'Stay hydrated before sample', processing: 'Same day' },
  { id: 7, name: 'Urine Routine & Microscopy', duration: '15 min', prep: 'Early morning midstream sample', processing: 'Same day' },
  { id: 8, name: 'Digital 12-Lead ECG', duration: '15 min', prep: 'Rest 5 minutes prior to test', processing: 'Immediate' },
  { id: 9, name: 'Digital X-Ray (Chest / Bone)', duration: '20 min', prep: 'Remove metallic jewellery', processing: 'Same day' },
  { id: 10, name: 'High-Resolution Ultrasound Scan', duration: '30 min', prep: 'Requires full bladder (drink water)', processing: 'Same day' },
]

export default function LabDiagnosticsPage() {
  const [step, setStep] = useState(1)
  const [selectedTest, setSelectedTest] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const { values, handleChange, isSubmitted, setIsSubmitted } = useForm({
    patientName: '',
    phone: '',
    email: '',
    notes: '',
  })

  const filteredTests = labTests.filter((t) =>
    t.name.toLowerCase().includes(searchQuery.toLowerCase())
  )

  const slots = [
    '08:00 AM', '08:30 AM', '09:00 AM', '09:30 AM',
    '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM',
    '04:00 PM', '04:30 PM',
  ]

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitted(true)
  }

  const stepLabels = ['Select Test', 'Instructions', 'Pick Date', 'Time Slot', 'Confirmation']
  const stepIcons = [Search, ClipboardCheck, Calendar, Clock, UserCheck]

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-hero py-12 sm:py-16 md:py-20">
        <Container>
          <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
            <Badge variant="primary" className="mb-3">
              <FlaskConical className="w-3.5 h-3.5 text-[#007C88]" />
              <span>Diagnostic Center</span>
            </Badge>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#173C4B] leading-tight text-center">
              Book Lab Tests with <br />
              <span className="text-[#007C88]">Real-Time Diagnostic Slots</span>
            </h1>
            <p className="mt-4 text-[#4A6568] text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mx-auto text-justify text-justify-center">
              Select your investigation, review pre-test instructions, choose your date and slot, then confirm your test seamlessly.
            </p>
          </div>
        </Container>
      </section>

      {/* Progress Steps Header */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-16 md:top-20 z-30 shadow-2xs">
        <Container>
          <div className="flex items-center justify-between max-w-3xl mx-auto">
            {stepLabels.map((label, i) => {
              const Icon = stepIcons[i]
              const isActive = step === i + 1
              const isDone = step > i + 1
              return (
                <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
                  <div
                    className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#007C88] text-white shadow-sm'
                        : isDone
                        ? 'bg-[#E6F5F6] text-[#007C88]'
                        : 'bg-gray-100 text-gray-400'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <span
                    className={`text-[0.6rem] sm:text-xs font-bold ${
                      isActive ? 'text-[#007C88]' : 'text-gray-400'
                    } text-center truncate max-w-full px-0.5`}
                  >
                    {label}
                  </span>
                </div>
              )
            })}
          </div>
        </Container>
      </section>

      {/* Content Area */}
      <section className="py-12 sm:py-16 md:py-20 bg-[#F9FBFC]">
        <Container>
          <div className="max-w-3xl mx-auto">
            {isSubmitted ? (
              <Card className="text-center py-10 sm:py-14">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full bg-[#EDF8F2] text-[#4B9B75] flex items-center justify-center mb-4 shadow-xs">
                  <ShieldCheck className="w-10 h-10" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#173C4B] mb-2">
                  Lab Test Slot Booked!
                </h2>
                <p className="text-sm text-[#4A6568] mb-1">
                  Patient: <strong>{values.patientName}</strong> · Phone: <strong>{values.phone}</strong>
                </p>
                <p className="text-sm text-[#4A6568] mb-6">
                  Test: <strong>{selectedTest?.name}</strong> on <strong>{selectedDate}</strong> ({selectedSlot})
                </p>
                <button
                  onClick={() => {
                    setStep(1)
                    setSelectedTest(null)
                    setIsSubmitted(false)
                  }}
                  className="btn-teal px-7 py-3.5 rounded-full font-bold text-sm"
                >
                  Book Another Test
                </button>
              </Card>
            ) : (
              <>
                {/* Step 1: Test Selection */}
                {step === 1 && (
                  <Card>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#173C4B] mb-1">
                      Step 1: Select Your Diagnostic Test
                    </h2>
                    <p className="text-xs text-[#6B8A8D] mb-4">
                      Choose from routine checkups, pathology, or advanced imaging:
                    </p>

                    <div className="relative mb-4">
                      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search test name (e.g. CBC, Sugar, Thyroid, ECG)..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 text-[#173C4B]"
                      />
                    </div>

                    <div className="space-y-2 max-h-96 overflow-y-auto pr-1">
                      {filteredTests.map((test) => (
                        <button
                          key={test.id}
                          onClick={() => {
                            setSelectedTest(test)
                            setStep(2)
                          }}
                          className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all hover:border-[#007C88] hover:bg-[#E6F5F6]/40 flex items-center justify-between ${
                            selectedTest?.id === test.id
                              ? 'border-[#007C88] bg-[#E6F5F6]'
                              : 'border-gray-200 bg-white'
                          }`}
                        >
                          <div>
                            <h3 className="text-sm font-extrabold text-[#173C4B]">
                              {test.name}
                            </h3>
                            <p className="text-xs text-[#6B8A8D] mt-0.5">
                              Duration: {test.duration} · Processing: {test.processing}
                            </p>
                          </div>
                          <span className="text-xs font-bold text-[#007C88] bg-white px-3 py-1 rounded-full border border-gray-200 shrink-0 ml-2">
                            Select →
                          </span>
                        </button>
                      ))}
                    </div>
                  </Card>
                )}

                {/* Step 2: Test Details */}
                {step === 2 && selectedTest && (
                  <Card>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#173C4B] mb-2">
                      Step 2: Review Test Instructions
                    </h2>
                    <h3 className="text-base font-bold text-[#007C88] mb-4">
                      {selectedTest.name}
                    </h3>

                    <div className="space-y-3.5">
                      <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-100">
                        <span className="block text-xs font-bold uppercase text-amber-700 mb-1">
                          Preparation Requirements
                        </span>
                        <p className="text-sm text-[#173C4B] font-medium">
                          {selectedTest.prep}
                        </p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                        <div className="p-4 rounded-xl bg-[#F9FBFC] border border-gray-100">
                          <span className="block text-xs font-bold uppercase text-[#6B8A8D] mb-1">
                            Sample Collection Time
                          </span>
                          <p className="text-sm font-extrabold text-[#173C4B]">
                            {selectedTest.duration}
                          </p>
                        </div>
                        <div className="p-4 rounded-xl bg-[#F9FBFC] border border-gray-100">
                          <span className="block text-xs font-bold uppercase text-[#6B8A8D] mb-1">
                            Report Delivery
                          </span>
                          <p className="text-sm font-extrabold text-[#173C4B]">
                            {selectedTest.processing}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => setStep(1)}
                        className="px-5 py-3 rounded-full border border-gray-200 text-sm font-bold text-[#4A6568] hover:bg-gray-100"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(3)}
                        className="btn-teal px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2"
                      >
                        <span>Choose Preferred Date</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </Card>
                )}

                {/* Step 3: Select Date */}
                {step === 3 && (
                  <Card>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#173C4B] mb-1">
                      Step 3: Select Test Date
                    </h2>
                    <p className="text-xs text-[#6B8A8D] mb-4">
                      Tests are conducted 7 days a week from 07:30 AM onwards:
                    </p>

                    <input
                      type="date"
                      value={selectedDate}
                      onChange={(e) => setSelectedDate(e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full p-4 rounded-xl border border-gray-200 text-sm sm:text-base font-medium focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 text-[#173C4B]"
                    />

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => setStep(2)}
                        className="px-5 py-3 rounded-full border border-gray-200 text-sm font-bold text-[#4A6568] hover:bg-gray-100"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(4)}
                        disabled={!selectedDate}
                        className="btn-teal px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 disabled:opacity-40"
                      >
                        <span>Pick Time Slot</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </Card>
                )}

                {/* Step 4: Lab Slots */}
                {step === 4 && (
                  <Card>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#173C4B] mb-1">
                      Step 4: Select 30-Minute Time Slot
                    </h2>
                    <p className="text-xs text-[#6B8A8D] mb-4">
                      Available lab sample collection slots on {selectedDate}:
                    </p>

                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-2 sm:gap-2.5">
                      {slots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedSlot(slot)}
                          className={`py-3 px-2 rounded-xl text-xs font-bold transition-all border ${
                            selectedSlot === slot
                              ? 'bg-[#007C88] text-white border-[#007C88] shadow-sm'
                              : 'bg-white text-[#173C4B] border-gray-200 hover:border-[#007C88]'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>

                    <div className="mt-6 flex gap-3">
                      <button
                        onClick={() => setStep(3)}
                        className="px-5 py-3 rounded-full border border-gray-200 text-sm font-bold text-[#4A6568] hover:bg-gray-100"
                      >
                        Back
                      </button>
                      <button
                        onClick={() => setStep(5)}
                        disabled={!selectedSlot}
                        className="btn-teal px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 disabled:opacity-40"
                      >
                        <span>Enter Patient Details</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>
                    </div>
                  </Card>
                )}

                {/* Step 5: Patient Details */}
                {step === 5 && (
                  <Card>
                    <h2 className="text-lg sm:text-xl font-extrabold text-[#173C4B] mb-4">
                      Step 5: Patient Information
                    </h2>

                    {/* Booking Summary Box */}
                    <div className="p-4 rounded-xl bg-[#E6F5F6] border border-[#B3E1E4] mb-5">
                      <h4 className="text-xs font-bold uppercase text-[#007C88] mb-1">
                        Investigation Summary
                      </h4>
                      <div className="text-xs sm:text-sm text-[#173C4B] space-y-0.5">
                        <p><strong>Test:</strong> {selectedTest?.name}</p>
                        <p><strong>Scheduled:</strong> {selectedDate} at {selectedSlot}</p>
                      </div>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-[#173C4B] mb-1 uppercase tracking-wider">
                          Patient Name *
                        </label>
                        <input
                          name="patientName"
                          value={values.patientName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 text-[#173C4B]"
                          placeholder="Full name of patient"
                        />
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-[#173C4B] mb-1 uppercase tracking-wider">
                            Phone Number *
                          </label>
                          <input
                            name="phone"
                            type="tel"
                            value={values.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 text-[#173C4B]"
                            placeholder="e.g. 9876543210"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-[#173C4B] mb-1 uppercase tracking-wider">
                            Email (for e-reports)
                          </label>
                          <input
                            name="email"
                            type="email"
                            value={values.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 text-[#173C4B]"
                            placeholder="e.g. patient@gmail.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-[#173C4B] mb-1 uppercase tracking-wider">
                          Special Medical Notes / Doctor Prescription Reference
                        </label>
                        <textarea
                          name="notes"
                          value={values.notes}
                          onChange={handleChange}
                          rows="2"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#007C88] focus:ring-2 focus:ring-[#007C88]/20 text-[#173C4B] resize-none"
                          placeholder="Any specific instructions or doctor's advice..."
                        />
                      </div>

                      <div className="mt-6 flex flex-col sm:flex-row gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(4)}
                          className="px-5 py-3 rounded-full border border-gray-200 text-sm font-bold text-[#4A6568] hover:bg-gray-100"
                        >
                          Back
                        </button>
                        <button
                          type="submit"
                          className="btn-purple flex-1 py-3.5 rounded-full font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-95"
                        >
                          <FlaskConical className="w-5 h-5 text-white" />
                          <span className="text-white font-bold">Confirm Lab Test Booking</span>
                        </button>
                      </div>
                    </form>
                  </Card>
                )}
              </>
            )}
          </div>
        </Container>
      </section>
    </>
  )
}
