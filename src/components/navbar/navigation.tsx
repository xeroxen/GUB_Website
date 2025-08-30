"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const megaMenuData = {
  "About Us": {
    sections: [
      {
        title: "General",
        links: [
          { name: "History", href: "https://green.edu.bd/history" },
          { name: "Vision & Mission", href: "https://green.edu.bd/vision-mission" },
          { name: "Awards and Achievements", href: "https://green.edu.bd/awards-achievements" },
          { name: "Ranking", href: "https://green.edu.bd/ranking" },
          { name: "Accreditation and Collaboration", href: "https://green.edu.bd/accreditation-collaboration" },
        ],
      },
      {
        title: "Activities",
        links: [
          { name: "News", href: "https://green.edu.bd/news" },
          { name: "Notice", href: "https://green.edu.bd/notice" },
          { name: "Campus Events", href: "https://green.edu.bd/campus-life-events" },
          { name: "Research Events", href: "https://green.edu.bd/research-events" },
          { name: "Upcoming Events", href: "https://green.edu.bd/upcoming-events" },
        ],
      },
      {
        title: "Plans and Schedules",
        links: [
          { name: "Seat Plans", href: "https://green.edu.bd/exam-seat-plans" },
          { name: "Official Forms", href: "https://green.edu.bd/forms" },
        ],
      },
      {
        title: "Faculty Members",
        links: [
          { name: "Business Administration", href: "https://green.edu.bd/faculty-member/dept-of-gbs" },
          { name: "Computer Science and Engineering", href: "https://green.edu.bd/faculty-member/dept-of-cse" },
          { name: "Software Engineering", href: "https://green.edu.bd/faculty-member/dept-of-swe" },
          { name: "Electrical and Electronic Engineering", href: "https://green.edu.bd/faculty-member/dept-of-eee" },
          { name: "English", href: "https://green.edu.bd/faculty-member/dept-of-eng" },
          { name: "Journalism and Media Communication", href: "https://green.edu.bd/faculty-member/dept-of-jmc" },
          { name: "Law", href: "https://green.edu.bd/faculty-member/dept-of-law" },
          { name: "Sociology and Anthropology", href: "https://green.edu.bd/faculty-member/dept-of-soc" },
          { name: "Textile Engineering", href: "https://green.edu.bd/faculty-member/dept-of-tex" },
        ],
      },
    ],
  },
  Admission: {
    sections: [
      {
        title: "Information",
        links: [
          { name: "Why Study at GUB?", href: "https://green.edu.bd/why-study-at-gub" },
          { name: "Frequently Asked Questions (FAQ)", href: "https://green.edu.bd/faq" },
          { name: "Undergraduate Programs", href: "https://green.edu.bd/admission-undergraduate-program" },
          { name: "Graduate Programs", href: "https://green.edu.bd/admission-graduate-program" },
          { name: "Life at GUB", href: "https://green.edu.bd/life-at-gub" },
          { name: "Office of Admission", href: "https://green.edu.bd/office-admission" },
          { name: "Admission Test Result", href: "https://green.edu.bd/admission-test-result" },
          { name: "Accomodation Facilities", href: "https://green.edu.bd/hostel" },
          { name: "Transport Facilities", href: "https://green.edu.bd/transportation" },
        ],
      },
      {
        title: "Guidelines",
        links: [
          { name: "Requirements for Local Students", href: "https://green.edu.bd/admission-req-local-students" },
          { name: "Requirements for International Students", href: "https://green.edu.bd/admission-req-inti-students" },
          { name: "Admission Flowchart", href: "https://green.edu.bd/admission-flowchart" },
          { name: "Online Admission Procedure", href: "https://green.edu.bd/online-admission-procedure" },
          { name: "Offline Admission Procedure", href: "https://green.edu.bd/offline-admission-procedure" },
          { name: "Apply Online Admission", href: "https://applyonline.green.edu.bd/Admission/Home.aspx" },
          { name: "Credit Transfer", href: "https://green.edu.bd/credit-transfer-guidelines" },
          { name: "Sample Admission Test Questions", href: "https://green.edu.bd/sample-admission-test-questions" },
        ],
      },
      {
        title: "Tuition Fees",
        links: [
          { name: "Tuition Fees for Local Students", href: "https://green.edu.bd/local-tuition-fee" },
          { name: "Tuition Fees for International Students", href: "https://green.edu.bd/international-tuition-fee" },
          { name: "Payment Procedure for all Students", href: "https://green.edu.bd/payment-procedure" },
        ],
      },
      {
        title: "Scholarship and Waiver",
        links: [
          { name: "Scholarship for Local Students", href: "https://green.edu.bd/local-scholarship" },
          { name: "Scholarship for International Students", href: "https://green.edu.bd/international-scholarship" },
        ],
      },
    ],
  },
  Academics: {
    sections: [
      {
        title: "Programs & Faculties",
        links: [
          { name: "Undergraduate Programs", href: "https://green.edu.bd/academic-undergraduate-program" },
          { name: "Graduate Programs", href: "https://green.edu.bd/academic-graduate-program" },
          {
            name: "Faculty of Arts and Social Sciences (FASS)",
            href: "https://green.edu.bd/faculty-of-arts-social-sciences",
          },
          { name: "Green Business School (GBS)", href: "https://green.edu.bd/faculty-of-business-studies" },
          { name: "Faculty of Law (FOL)", href: "https://green.edu.bd/faculty-of-law" },
          {
            name: "Faculty of Science and Engineering (FSE)",
            href: "https://green.edu.bd/faculty-of-science-engineering",
          },
        ],
      },
      {
        title: "Departments",
        links: [
          { name: "Artificial Intelligence & Data Science (ADS)", href: "https://ads.green.edu.bd/" },
          { name: "Business Administration (BA)", href: "http://bus.green.edu.bd/" },
          { name: "Computer Science and Engineering (CSE)", href: "http://cse.green.edu.bd/" },
          { name: "Software Engineering (SWE)", href: "http://swe.green.edu.bd/" },
          { name: "Electrical and Electronic Engineering (EEE)", href: "http://eee.green.edu.bd/" },
          { name: "English (ENG)", href: "http://eng.green.edu.bd/" },
          { name: "Journalism and Media Communication (JMC)", href: "http://jmc.green.edu.bd/" },
          { name: "Law (Law)", href: "http://law.green.edu.bd/" },
          { name: "Sociology and Anthropology (SOC)", href: "http://soc.green.edu.bd/" },
          { name: "Textile Engineering (TE)", href: "http://tex.green.edu.bd/" },
        ],
      },
      {
        title: "Centers",
        links: [
          { name: "Center for Career Development (CCD)", href: "http://ccd.green.edu.bd/" },
          { name: "Center for Language and Cultural Studies (CLCS)", href: "http://clcs.green.edu.bd/" },
          { name: "Center For Research Innovation and Transformation (CRIT)", href: "http://crit.green.edu.bd/" },
          { name: "Center for International Affairs (GCIA)", href: "http://gcia.green.edu.bd/" },
          { name: "Center of Excellence for Teaching And Learning (CETL)", href: "http://cetl.green.edu.bd/" },
        ],
      },
      {
        title: "Rules & Calendar",
        links: [
          { name: "Academic Rules and Regulation", href: "https://green.edu.bd/rules-regulation" },
          { name: "Transportation Rules", href: "https://green.edu.bd/transportation-rules" },
          { name: "Hostel", href: "https://green.edu.bd/hostel-rules" },
          { name: "Canteen Rules", href: "https://green.edu.bd/canteen-rules" },
          { name: "Academic Calender", href: "https://green.edu.bd/academic-calender" },
          { name: "Social Capital", href: "https://green.edu.bd/social-capital" },
        ],
      },
    ],
  },
  Administration: {
    sections: [
      {
        title: "Leadership",
        links: [
          { name: "Message of the BoT Chairman", href: "https://green.edu.bd/message-of-the-bot-chair" },
          { name: "Message of the Vice Chancellor", href: "https://green.edu.bd/message-of-the-vice-chancellor" },
          {
            name: "Message of the Pro Vice Chancellor",
            href: "https://green.edu.bd/message-of-the-pro-vice-chancellor",
          },
          { name: "Message of the Treasurer", href: "https://green.edu.bd/message-of-the-treasurer" },
          { name: "Message of the Registrar", href: "https://green.edu.bd/message-of-the-registrar" },
        ],
      },
      {
        title: "Management",
        links: [
          { name: "Board of Trustees", href: "https://green.edu.bd/boards-of-trustees" },
          { name: "Syndicate", href: "https://green.edu.bd/syndicate" },
          { name: "Academic Council", href: "https://green.edu.bd/academic-council" },
          { name: "Offices", href: "https://green.edu.bd/offices" },
          { name: "Office of the Vice Chancellor", href: "https://green.edu.bd/office-of-vice-chancellor" },
          { name: "Office of the Pro Vice Chancellor", href: "https://green.edu.bd/office-of-pro-vice-chancellor" },
          { name: "Office of the Treasurer", href: "https://green.edu.bd/office-of-treasurer" },
        ],
      },
      {
        title: "Administrative Offices",
        links: [
          { name: "Office of the Registrar", href: "https://green.edu.bd/office-of-registrar" },
          { name: "Office of the Exam Controller", href: "https://green.edu.bd/office-of-exam-controller" },
          { name: "Office of the Admission", href: "https://green.edu.bd/office-of-admission" },
          { name: "Office of the Accounts", href: "https://green.edu.bd/office-of-accounts" },
          { name: "Office of the GCITS", href: "https://green.edu.bd/office-of-gcits" },
          { name: "Office of the Proctor", href: "https://green.edu.bd/office-of-proctor" },
          { name: "Office of the Library", href: "https://green.edu.bd/office-of-library" },
          { name: "Coordination Office", href: "https://green.edu.bd/office-of-coordination" },
          { name: "Office of the Public Relation", href: "https://green.edu.bd/office-of-public-relation" },
        ],
      },
      {
        title: "Support Services",
        links: [
          { name: "Office of the Student Affairs", href: "https://green.edu.bd/office-of-student-affair" },
          { name: "Medical Center", href: "https://green.edu.bd/medical-center" },
          { name: "Office of Logistics", href: "https://green.edu.bd/office-of-logistics" },
          { name: "Others Office", href: "https://green.edu.bd/others-office" },
          {
            name: "Committee of Sexual Harassment Complaint",
            href: "https://green.edu.bd/committee-of-sexual-harassment-complaint",
          },
        ],
      },
    ],
  },
  Research: {
    sections: [
      {
        title: "Research Information",
        links: [
          { name: "Research Activities", href: "https://green.edu.bd/research-activities" },
          { name: "Research Area", href: "https://green.edu.bd/research-areas" },
          { name: "Research Policy", href: "https://green.edu.bd/research-policy" },
          { name: "Center for Research, Innovation and Transformation (CRIT)", href: "https://crit.green.edu.bd" },
        ],
      },
      {
        title: "STI Conferences",
        links: [
          { name: "5th STI- 2023", href: "https://sti.green.edu.bd/" },
          { name: "4th STI- 2022", href: "https://fse.green.edu.bd/sti-2022/" },
          { name: "3rd STI- 2021", href: "https://fse.green.edu.bd/sti-2021/" },
          { name: "2nd STI- 2020", href: "https://fse.green.edu.bd/sti-2020/" },
          { name: "1st STI- 2019", href: "https://fse.green.edu.bd/sti-2019/" },
        ],
      },
      {
        title: "ITD & Space Law Conferences",
        links: [
          { name: "3rd ITD-2024", href: "https://itd.green.edu.bd/" },
          { name: "2nd ITD-2022", href: "https://archive-site.green.edu.bd/itd-2022/" },
          { name: "1st ITD-2021", href: "https://archive-site.green.edu.bd/itd-2021/" },
          {
            name: "International Conference Commercial Exploitation of Outer Space through Satellites",
            href: "https://law.green.edu.bd/2nd-Space-Law-Conference/",
          },
        ],
      },
      {
        title: "Journals",
        links: [
          {
            name: "Review of Science and Engineering",
            href: "https://green.edu.bd/journal-review-of-science-and-engineering",
          },
          { name: "Review of Social Sciences", href: "https://green.edu.bd/journal-review-of-social-sciences" },
          {
            name: "Journal of Green Business School",
            href: "https://green.edu.bd/journal-journal-of-green-business-school",
          },
        ],
      },
    ],
  },
  "Campus Life": {
    sections: [
      {
        title: "Overview & Career",
        links: [
          { name: "Floor Plan", href: "https://green.edu.bd/floor-plan" },
          { name: "Campus Map", href: "https://green.edu.bd/campus-map" },
          { name: "Guided Tour", href: "https://green.edu.bd/guided-tour" },
          { name: "Community Engagements", href: "https://green.edu.bd/community-engagement" },
          { name: "Center for Career Development", href: "http://ccd.green.edu.bd/" },
          { name: "Current Circular", href: "http://career.green.edu.bd/current-circular/" },
        ],
      },
      {
        title: "Facilities",
        links: [
          { name: "Transportation", href: "https://green.edu.bd/transportation" },
          { name: "Hostel", href: "https://green.edu.bd/hostel" },
          { name: "Medical", href: "https://green.edu.bd/medical" },
          { name: "Library", href: "https://library.green.edu.bd" },
          { name: "IT Service", href: "https://green.edu.bd/office-of-gcits" },
          { name: "Labs", href: "https://green.edu.bd/labs" },
          { name: "Certificate and Transcript", href: "https://green.edu.bd/certificate-transcript" },
        ],
      },
      {
        title: "Departmental Clubs",
        links: [
          { name: "Business Club", href: "https://green.edu.bd/club/business-club" },
          { name: "Computer Club", href: "https://green.edu.bd/club/computer-club" },
          { name: "EEE Club", href: "https://green.edu.bd/club/eee-club" },
          { name: "English Club", href: "https://green.edu.bd/club/english-club" },
          { name: "Law Club", href: "https://green.edu.bd/club/law-club" },
          { name: "Textile Club", href: "https://green.edu.bd/club/textile-club" },
          { name: "Students", href: "https://green.edu.bd/students" },
          { name: "Prospective Students", href: "https://green.edu.bd/prospective-students" },
          { name: "Faculty & Staff", href: "https://green.edu.bd/faculty-staff" },
          { name: "Visitor", href: "https://green.edu.bd/visitor" },
          { name: "Alumni", href: "https://green.edu.bd/alumnii" },
        ],
      },
      {
        title: "Central Clubs",
        links: [
          { name: "Debating Club", href: "https://green.edu.bd/club/debating-club" },
          { name: "Eco-Warrior Club", href: "https://green.edu.bd/club/eco-warrior-club" },
          { name: "Green Theater", href: "https://green.edu.bd/club/green-theater" },
          { name: "Photography Club", href: "https://green.edu.bd/club/photography-club" },
          { name: "Reading Society", href: "https://green.edu.bd/club/reading-society" },
          { name: "Cultural Club", href: "https://green.edu.bd/club/cultural-club" },
          { name: "Sports Club", href: "https://green.edu.bd/club/sports-club" },
          { name: "Robotics Club", href: "https://green.edu.bd/club/robotics-club" },
          { name: "Leo Club", href: "https://green.edu.bd/club/leo-club" },
          { name: "Social Bonding Club", href: "https://green.edu.bd/club/social-bonding-club" },
        ],
      },
    ],
  },
  "Quick Link": {
    sections: [
      {
        title: "Activities",
        links: [
          { name: "News", href: "https://green.edu.bd/news" },
          { name: "Notice", href: "https://green.edu.bd/notice" },
          { name: "Campus Events", href: "https://green.edu.bd/campus-life-events" },
          { name: "Research Events", href: "https://green.edu.bd/research-events" },
          { name: "Upcoming Events", href: "https://green.edu.bd/upcoming-events" },
        ],
      },
      {
        title: "Students",
        links: [
          { name: "Student Portal", href: "https://studentportal.green.edu.bd/" },
          { name: "Certificate Portal", href: "https://certificate.green.edu.bd/" },
          { name: "Convocation Portal", href: "https://convocation.green.edu.bd/" },
          { name: "Microsoft Teams", href: "https://login.microsoft.com/" },
        ],
      },
      {
        title: "Faculty and Admin",
        links: [
          { name: "GUMS", href: "https://gums.green.edu.bd/" },
          { name: "Microsoft Teams", href: "https://login.microsoft.com/" },
          { name: "Attendance", href: "http://172.16.9.5/attendance/login.aspx" },
          { name: "Space GUB", href: "https://space.green.edu.bd/" },
          { name: "Green eHelpDesk", href: "https://helpdesk.green.edu.bd/" },
          { name: "GUB eFile", href: "https://efile.green.edu.bd" },
          { name: "Eduroam GUB", href: "https://eduroam.green.edu.bd/" },
        ],
      },
      {
        title: "Library",
        links: [
          { name: "E-Library", href: "https://elibrary.green.edu.bd/" },
          { name: "OPAC-Library Login", href: "https://opac.green.edu.bd/" },
          { name: "Turnitin", href: "https://www.turnitin.com/login_page.asp?err=3400&lang=en_us" },
        ],
      },
    ],
  },
}

const quickLinks = [
  { name: "News", href: "https://green.edu.bd/news" },
  { name: "Notice", href: "https://green.edu.bd/notice" },
  { name: "Exam Seat Plan", href: "https://green.edu.bd/exam-seat-plans" },
  { name: "Students", href: "https://green.edu.bd/students" },
  { name: "Prospective Student", href: "https://green.edu.bd/prospective-students" },
  { name: "Faculty & Staff", href: "https://green.edu.bd/faculty-staff" },
  { name: "Library", href: "https://library.green.edu.bd" },
  { name: "NAT Test", href: "https://nat-test.green.edu.bd/" },
]

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="https://green.edu.bd" className="flex items-center space-x-2">
            <Image
              src="/logo/GUBLogo.svg"
              alt="Green University of Bangladesh"
              width={70}
              height={70}
              className="h-16 w-auto"
            />
          </Link>

          {/* Apply Now Button with Dropdown */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative group">
              <Button
                className="bg-[#038c25] hover:bg-[#027a20] text-white rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
                asChild
              >
                <Link href="https://applyonline.green.edu.bd/Admission/Home.aspx">Apply Now</Link>
              </Button>
              <div className="absolute right-0 top-full mt-2 w-48 rounded-lg bg-white shadow-lg border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                <div className="py-2">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#038c25] transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList className="space-x-1">
                {Object.entries(megaMenuData).map(([menuName, menuData]) => (
                  <NavigationMenuItem key={menuName}>
                    <NavigationMenuTrigger className="h-10 px-4 py-2 text-sm font-medium text-gray-700 hover:text-[#038c25] hover:bg-gray-50 rounded-lg transition-all duration-200 data-[state=open]:bg-gray-50 data-[state=open]:text-[#038c25]">
                      {menuName}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-[800px] lg:w-[900px]">
                      <div className="grid gap-6 p-6 md:grid-cols-2 lg:grid-cols-4">
                        {menuData.sections.map((section) => (
                          <div key={section.title} className="space-y-3">
                            <h4 className="text-sm font-semibold text-[#038c25] border-b border-gray-200 pb-2">
                              {section.title}
                            </h4>
                            <ul className="space-y-2">
                              {section.links.map((link) => (
                                <li key={link.name}>
                                  <NavigationMenuLink asChild>
                                    <Link
                                      href={link.href}
                                      className="block text-sm text-gray-600 hover:text-[#038c25] hover:bg-gray-50 rounded-md px-2 py-1 transition-all duration-150"
                                    >
                                      {link.name}
                                    </Link>
                                  </NavigationMenuLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        ))}
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="h-10 w-10">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px] overflow-y-auto fixed inset-0 z-50">
                <div className="flex items-center justify-between pb-4 border-b">
                  <Image
                    src="/logo/GUBLogo.svg"
                    alt="Green University of Bangladesh"
                    width={50}
                    height={50}
                    className="h-12 w-auto"
                  />
                  <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="h-8 w-8">
                    <X className="h-4 w-4" />
                  </Button>
                </div>

                <div className="mt-6 space-y-4 pb-6">
                  <Button
                    className="w-full bg-[#038c25] hover:bg-[#027a20] text-white rounded-lg py-3 text-sm font-medium"
                    asChild
                  >
                    <Link href="https://applyonline.green.edu.bd/Admission/Home.aspx">Apply Now</Link>
                  </Button>

                  {Object.entries(megaMenuData).map(([menuName, menuData]) => (
                    <div key={menuName} className="space-y-2">
                      <h3 className="text-lg font-semibold text-[#038c25] border-b border-gray-200 pb-2">{menuName}</h3>
                      {menuData.sections.map((section) => (
                        <div key={section.title} className="ml-4 space-y-2">
                          <h4 className="text-sm font-medium text-gray-700">{section.title}</h4>
                          <ul className="ml-4 space-y-1">
                            {section.links.map((link) => (
                              <li key={link.name}>
                                <Link
                                  href={link.href}
                                  className="block text-sm text-gray-600 hover:text-[#038c25] py-1 transition-colors duration-150"
                                  onClick={() => setIsMobileMenuOpen(false)}
                                >
                                  {link.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  )
}
