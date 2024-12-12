"use client"

import { useState, useEffect, SetStateAction, JSXElementConstructor, Key, ReactElement, ReactNode, ReactPortal } from "react"
import Link from "next/link"
import Image from "next/image"
import { Calendar, ChevronDown, Clock, Download, Edit, FileText, MapPin, MessageSquare, Plus, Search, Send, DollarSign, Users, Book, Briefcase, Camera, Film, Mic, Star, ThumbsUp } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import React, { ComponentProps } from 'react';

interface TabsListProps extends ComponentProps<'div'> {
  className?: string;
}

export default function Component() {
  const [currentPage, setCurrentPage] = useState("home")
  const [activeProfileTab, setActiveProfileTab] = useState("about")
  const [profileData, setProfileData] = useState({
    about: "Passionate performer with a love for the stage and screen. Trained in method acting and contemporary dance.",
    sizeCard: {
      height: "5'8\"",
      weight: "130 lbs",
      chest: "34\"",
      waist: "28\"",
      hips: "36\"",
      shoeSize: "8",
      hairColor: "Brown",
      eyeColor: "Green",
    },
    credits: [
      { production: "Hamlet", role: "Ophelia", venue: "Shakespeare Theater" },
      { production: "Chicago", role: "Roxie Hart", venue: "Broadway Theater" },
      { production: "Law & Order: SVU", role: "Guest Star", venue: "NBC" },
    ],
    headshot: "/placeholder.svg?height=300&width=300",
    resume: "/placeholder-resume.pdf",
    media: [
      { type: "video", url: "/placeholder-video.mp4", title: "Acting Reel" },
      { type: "video", url: "/placeholder-video.mp4", title: "Dance Reel" },
      { type: "audio", url: "/placeholder-audio.mp3", title: "Vocal Demo" },
    ],
    appearance: {
      ethnicity: "Caucasian",
      age: "25-35",
      gender: "Female",
    },
    preferences: {
      willingToTravel: true,
      preferredRoles: ["Lead", "Supporting"],
      preferredGenres: ["Musical Theater", "Drama", "Comedy"],
    },
  })

  const [auditions, setAuditions] = useState([
    {
      id: 1,
      title: "Broadway Musical Lead",
      payRate: "$1,500/week",
      description: "Seeking a strong singer and dancer for the lead role in an upcoming Broadway musical. Must have excellent vocal range and be proficient in various dance styles.",
      submissionDue: "2024-06-01",
      auditionDate: "2024-06-15",
      demographic: "Female, 25-35",
      location: "New York, NY",
    },
    {
      id: 2,
      title: "TV Commercial",
      payRate: "$500/day",
      description: "Looking for actors with comedic timing for a national fast food commercial. No lines, but must be comfortable with physical comedy.",
      submissionDue: "2024-05-20",
      auditionDate: "2024-05-30",
      demographic: "All ethnicities, 18-40",
      location: "Los Angeles, CA",
    },
    {
      id: 3,
      title: "Shakespeare in the Park",
      payRate: "$1,000/week",
      description: "Casting multiple roles for our summer Shakespeare in the Park production. Looking for actors with classical training and outdoor performance experience.",
      submissionDue: "2024-04-15",
      auditionDate: "2024-04-30",
      demographic: "All genders, 20-60",
      location: "Central Park, New York, NY",
    },
  ])

  const [resources, setResources] = useState([
    {
      id: 1,
      title: "Acting Techniques Workshop",
      type: "Workshop",
      description: "Learn advanced acting techniques from industry professionals.",
      date: "2024-07-15",
      location: "Online",
      price: "$199",
    },
    {
      id: 2,
      title: "Audition Preparation Guide",
      type: "E-Book",
      description: "Comprehensive guide to nailing your next audition.",
      author: "Jane Smith",
      price: "$24.99",
    },
    {
      id: 3,
      title: "Voice Training for Actors",
      type: "Course",
      description: "6-week online course to improve your vocal range and projection.",
      startDate: "2024-08-01",
      duration: "6 weeks",
      price: "$299",
    },
    {
      id: 4,
      title: "Networking Event for Performers",
      type: "Event",
      description: "Meet and greet with casting directors, agents, and fellow performers.",
      date: "2024-09-10",
      location: "Los Angeles Convention Center",
      price: "$50",
    },
  ])

  useEffect(() => {
    const storedPage = localStorage.getItem("currentPage")
    if (storedPage) {
      setCurrentPage(storedPage)
    }
  }, [])

  const updateCurrentPage = (page: SetStateAction<string>) => {
    const newPage = typeof page === "function" ? page(currentPage) : page;
    setCurrentPage(newPage)
    localStorage.setItem("currentPage", newPage);
  }

  const updateActiveProfileTab = (tab: SetStateAction<string>) => {
    setActiveProfileTab(tab)
  }

  const Header = () => (
    <header className="flex h-16 items-center border-b px-4 lg:px-6 bg-burgundy text-white">
      <Link className="flex items-center gap-2 font-semibold" href="#" onClick={() => updateCurrentPage("home")}>
        <span className="text-xl">🎭 BookedNBusy</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          className={`text-sm font-medium ${currentPage === "auditions" ? "underline" : ""}`}
          href="#"
          onClick={() => updateCurrentPage("auditions")}
        >
          Auditions
        </Link>
        <Link
          className={`text-sm font-medium ${currentPage === "resources" ? "underline" : ""}`}
          href="#"
          onClick={() => updateCurrentPage("resources")}
        >
          Resources
        </Link>
        <Link
          className={`text-sm font-medium ${currentPage === "profile" ? "underline" : ""}`}
          href="#"
          onClick={() => updateCurrentPage("profile")}
        >
          Profile
        </Link>
        <Link
          className={`text-sm font-medium ${currentPage === "chat" ? "underline" : ""}`}
          href="#"
          onClick={() => updateCurrentPage("chat")}
        >
          Chat Room
        </Link>
        <Link
          className={`text-sm font-medium ${currentPage === "signin" ? "underline" : ""}`}
          href="#"
          onClick={() => updateCurrentPage("signin")}
        >
          Sign In
        </Link>
      </nav>
    </header>
  )

  const Footer = () => (
    <footer className="bg-emerald-900 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">BookedNBusy</h3>
            <p className="text-sm">Your one-stop platform for performers.</p>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Quick Links</h4>
            <ul className="text-sm">
              <li><Link href="#" className="hover:underline" onClick={() => updateCurrentPage("home")}>Home</Link></li>
              <li><Link href="#" className="hover:underline" onClick={() => updateCurrentPage("auditions")}>Auditions</Link></li>
              <li><Link href="#" className="hover:underline" onClick={() => updateCurrentPage("resources")}>Resources</Link></li>
              <li><Link href="#" className="hover:underline" onClick={() => updateCurrentPage("profile")}>Profile</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-6 md:mb-0">
            <h4 className="text-md font-semibold mb-2">Contact Us</h4>
            <p className="text-sm">Email: info@bookednbusy.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-md font-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white hover:text-gray-300">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-6">
          <p className="text-center text-sm">© 2024 BookedNBusy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )

  const ProfilePage = () => {
    const [isEditing, setIsEditing] = useState(false)
    const [editedProfileData, setEditedProfileData] = useState(profileData)

    const handleEdit = () => {
      setIsEditing(true)
    }

    const handleSave = () => {
      setProfileData(editedProfileData)
      setIsEditing(false)
    }

    const handleCancel = () => {
      setEditedProfileData(profileData)
      setIsEditing(false)
    }

    const handleInputChange = <T extends keyof typeof editedProfileData>(
      section: T, 
      field: keyof typeof editedProfileData[T] | null, 
      value: | any
    ) => {
      setEditedProfileData((prev) => ({
        ...prev,
        [section]: field && typeof prev[section] === 'object'
        ? {...prev[section], [field]: value}
        : value,
      }))
    }

    return (
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h1 className="mb-8 text-4xl font-bold">Your Profile</h1>
            <div className="grid gap-6 lg:grid-cols-[1fr_3fr]">
              <Card className="bg-emerald-50">
                <CardContent className="flex flex-col items-center p-6">
                  <Avatar className="h-32 w-32">
                    <AvatarImage alt="Profile Picture" src={profileData.headshot} />
                    <AvatarFallback>PP</AvatarFallback>
                  </Avatar>
                  <h2 className="mt-4 text-2xl font-bold">Jane Doe</h2>
                  <p className="text-sm text-gray-500">Actor / Singer / Dancer</p>
                  {!isEditing ? (
                    <Button className="mt-4 bg-burgundy text-white" onClick={handleEdit}>
                      <Edit className="mr-2 h-4 w-4" />
                      Edit Profile
                    </Button>
                  ) : (
                    <div className="mt-4 space-x-2">
                      <Button className="bg-burgundy text-white" onClick={handleSave}>Save</Button>
                      <Button className="bg-emerald-700 text-white" onClick={handleCancel}>Cancel</Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card className="bg-emerald-50">
                <CardContent className="p-6">
                  <Tabs value={activeProfileTab} onValueChange={setActiveProfileTab}>
                    <TabsList className="grid w-full grid-cols-4">
                      <TabsTrigger value="about">About</TabsTrigger>
                      <TabsTrigger value="sizeCard">Size Card</TabsTrigger>
                      <TabsTrigger value="credits">Credits</TabsTrigger>
                      <TabsTrigger value="media">Media</TabsTrigger>
                    </TabsList>
                    <TabsContent value="about">
                      <div className="mt-6 space-y-4">
                        <h3 className="text-lg font-semibold">About Me</h3>
                        {isEditing ? (
                          <Textarea
                            value={editedProfileData.about}
                            onChange={(e) => handleInputChange('about', null, e.target.value)}
                          />
                        ) : (
                          <p>{profileData.about}</p>
                        )}
                        <h3 className="text-lg font-semibold">Appearance</h3>
                        {isEditing ? (
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(editedProfileData.appearance).map(([key, value]) => (
                              <div key={key}>
                                <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                                <Input
                                  id={key}
                                  value={value}
                                  onChange={(e) => 
                                    handleInputChange('appearance', key as keyof typeof editedProfileData.appearance, e.target.value)}
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(profileData.appearance).map(([key, value]) => (
                              <p key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</p>
                            ))}
                          </div>
                        )}
                        <h3 className="text-lg font-semibold">Preferences</h3>
                        {isEditing ? (
                          <div className="space-y-2">
                            <div>
                              <Label htmlFor="willingToTravel">Willing to Travel</Label>
                              <Select
                                value={editedProfileData.preferences.willingToTravel.toString()}
                                onValueChange={(value) => handleInputChange('preferences', 'willingToTravel', value === 'true')}
                              >
                                <SelectTrigger>
                                  <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="true">Yes</SelectItem>
                                  <SelectItem value="false">No</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            <div>
                              <Label htmlFor="preferredRoles">Preferred Roles</Label>
                              <Input
                                id="preferredRoles"
                                value={editedProfileData.preferences.preferredRoles.join(', ')}
                                onChange={(e) => handleInputChange('preferences', 'preferredRoles', e.target.value.split(', '))}
                              />
                            </div>
                            <div>
                              <Label htmlFor="preferredGenres">Preferred Genres</Label>
                              <Input
                                id="preferredGenres"
                                value={editedProfileData.preferences.preferredGenres.join(', ')}
                                onChange={(e) => handleInputChange('preferences', 'preferredGenres', e.target.value.split(', '))}
                              />
                            </div>
                          </div>
                        ) : (
                          <>
                            <p>Willing to Travel: {profileData.preferences.willingToTravel ? 'Yes' : 'No'}</p>
                            <p>Preferred Roles: {profileData.preferences.preferredRoles.join(', ')}</p>
                            <p>Preferred Genres: {profileData.preferences.preferredGenres.join(', ')}</p>
                          </>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="sizeCard">
                      <div className="mt-6 space-y-4">
                        <h3 className="text-lg font-semibold">Size Card</h3>
                        {isEditing ? (
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(editedProfileData.sizeCard).map(([key, value]) => (
                              <div key={key}>
                                <Label htmlFor={key}>{key.charAt(0).toUpperCase() + key.slice(1)}</Label>
                                <Input
                                  id={key}
                                  value={value}
                                  onChange={(e) => 
                                    handleInputChange('appearance', key as keyof typeof editedProfileData.appearance, e.target.value)}
                                />
                              </div>
                            ))}
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-4">
                            {Object.entries(profileData.sizeCard).map(([key, value]) => (
                              <p key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value}</p>
                            ))}
                          </div>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="credits">
                      <div className="mt-6 space-y-4">
                        <h3 className="text-lg font-semibold">Credits</h3>
                        {isEditing ? (
                          <div className="space-y-4">
                            {editedProfileData.credits.map((credit, index) => (
                              <div key={index} className="grid grid-cols-3 gap-2">
                                <Input
                                  value={credit.production}
                                  onChange={(e) => {
                                    const newCredits = [...editedProfileData.credits]
                                    newCredits[index].production = e.target.value
                                    handleInputChange('credits', null, newCredits)
                                  }}
                                  placeholder="Production"
                                />
                                <Input
                                  value={credit.role}
                                  onChange={(e) => {
                                    const newCredits = [...editedProfileData.credits]
                                    newCredits[index].role = e.target.value
                                    handleInputChange('credits', null, newCredits)
                                  }}
                                  placeholder="Role"
                                />
                                <Input
                                  value={credit.venue}
                                  onChange={(e) => {
                                    const newCredits = [...editedProfileData.credits]
                                    newCredits[index].venue = e.target.value
                                    handleInputChange('credits', null, newCredits)
                                  }}
                                  placeholder="Venue"
                                />
                              </div>
                            ))}
                            <Button
                              className="bg-burgundy text-white"
                              onClick={() => {
                                const newCredits = [...editedProfileData.credits, { production: '', role: '', venue: '' }]
                                handleInputChange('credits', null, newCredits)
                              }}
                            >
                              Add Credit
                            </Button>
                          </div>
                        ) : (
                          <ul className="list-disc pl-5">
                            {profileData.credits.map((credit, index) => (
                              <li key={`${credit.production}-${index}`}>
                                <strong>{credit.production}</strong> - {credit.role} ({credit.venue})
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    </TabsContent>
                    <TabsContent value="media">
                      <div className="mt-6 space-y-4">
                        <h3 className="text-lg font-semibold">Media</h3>
                        {isEditing ? (
                          <div className="space-y-4">
                            {editedProfileData.media.map((item, index) => (
                              <div key={index} className="grid grid-cols-3 gap-2">
                                <Select
                                  value={item.type}
                                  onValueChange={(value) => {
                                    const newMedia = [...editedProfileData.media]
                                    newMedia[index].type = value
                                    handleInputChange('media', null, newMedia)
                                  }}
                                >
                                  <SelectTrigger>
                                    <SelectValue />
                                  </SelectTrigger>
                                  <SelectContent>
                                    <SelectItem value="video">Video</SelectItem>
                                    <SelectItem value="audio">Audio</SelectItem>
                                  </SelectContent>
                                </Select>
                                <Input
                                  value={item.title}
                                  onChange={(e) => {
                                    const newMedia = [...editedProfileData.media]
                                    newMedia[index].title = e.target.value
                                    handleInputChange('media', null, newMedia)
                                  }}
                                  placeholder="Title"
                                />
                                <Input
                                  value={item.url}
                                  onChange={(e) => {
                                    const newMedia = [...editedProfileData.media]
                                    newMedia[index].url = e.target.value
                                    handleInputChange('media', null, newMedia)
                                  }}
                                  placeholder="URL"
                                />
                              </div>
                            ))}
                            <Button
                              className="bg-burgundy text-white"
                              onClick={() => {
                                const newMedia = [...editedProfileData.media, { type: 'video', title: '', url: '' }]
                                handleInputChange('media', null, newMedia)
                              }}
                            >
                              Add Media
                            </Button>
                          </div>
                        ) : (
                          <div className="grid grid-cols-2 gap-4">
                            {profileData.media.map((item, index) => (
                              <Card key={index} className="bg-white">
                                <CardHeader>
                                  <CardTitle>{item.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                  {item.type === 'video' ? (
                                    <video controls src={item.url} className="w-full" />
                                  ) : (
                                    <audio controls src={item.url} className="w-full" />
                                  )}
                                </CardContent>
                              </Card>
                            ))}
                          </div>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    )
  }

  const AuditionsPage = () => (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <h1 className="mb-8 text-4xl font-bold text-burgundy">Find Auditions</h1>
          <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <Input className="flex-grow" placeholder="Search auditions..." type="search" />
            <Select>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="theater">Theater</SelectItem>
                <SelectItem value="film">Film</SelectItem>
                <SelectItem value="tv">TV</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </Select>
            <Button type="submit" className="bg-burgundy text-white">Search</Button>
            <Button type="submit" className="bg-burgundy text-white">Search</Button>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {auditions.map((audition) => (
              <Card key={audition.id} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-burgundy">{audition.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">{audition.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center text-sm">
                      <DollarSign className="mr-2 h-4 w-4 text-emerald-700" />
                      <span className="font-semibold">Pay Rate:</span>
                      <span className="ml-2">{audition.payRate}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-emerald-700" />
                      <span className="font-semibold">Submission Due:</span>
                      <span className="ml-2">{audition.submissionDue}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Clock className="mr-2 h-4 w-4 text-emerald-700" />
                      <span className="font-semibold">Audition Date:</span>
                      <span className="ml-2">{audition.auditionDate}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users className="mr-2 h-4 w-4 text-emerald-700" />
                      <span className="font-semibold">Demographic:</span>
                      <span className="ml-2">{audition.demographic}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-emerald-700" />
                      <span className="font-semibold">Location:</span>
                      <span className="ml-2">{audition.location}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-burgundy text-white">Apply Now</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )

  const HomePage = () => (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-burgundy">
                Welcome to BookedNBusy
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Your one-stop platform for finding auditions, managing your career, and connecting with industry professionals.
              </p>
            </div>
            <div className="space-x-4">
              <Button 
                onClick={() => updateCurrentPage("auditions")} 
                className="bg-burgundy text-white boreder border-transparent"
              >
                Find Auditions
              </Button>
              <Button 
                onClick={() => updateCurrentPage("signin")} 
                className="border-burgundy text-burgundy"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="mb-12 text-3xl font-bold text-center text-burgundy">Why Choose BookedNBusy?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center text-burgundy">
                  <Search className="mr-2 h-4 w-4" />
                  Find Opportunities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Access a wide range of auditions and job listings tailored to your skills and preferences.</p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center text-burgundy">
                  <Users className="mr-2 h-4 w-4" />
                  Network with Professionals
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Connect with casting directors, agents, and fellow performers to expand your industry network.</p>
              </CardContent>
            </Card>
            <Card className="bg-emerald-50">
              <CardHeader>
                <CardTitle className="flex items-center text-burgundy">
                  <Star className="mr-2 h-4 w-4" />
                  Showcase Your Talent
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>Create a comprehensive profile to highlight your skills, experience, and media to potential employers.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <Image
              src="/placeholder.svg?height=400&width=800"
              width={800}
              height={400}
              alt="BookedNBusy Dashboard"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
            />
            <div className="flex flex-col justify-center space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-burgundy">Manage Your Career with Ease</h2>
              <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our intuitive platform provides all the tools you need to take control of your performing career. From tracking auditions to managing your portfolio, we've got you covered.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button 
                  onClick={() => updateCurrentPage("profile")} 
                  className="bg-burgundy text-white px-4 py-2 rounded"
                >
                  Create Your Profile
                </Button>
                <Button
                  onClick={() => updateCurrentPage("resources")}
                  className="border border-burgundy text-burgund bg-transparent px-4 py-2 rounded"
                >
                    Explore Resources
                  </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )

  const ResourcesPage = () => (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <h1 className="mb-8 text-4xl font-bold text-burgundy">Resources for Performers</h1>
          <p className="mb-8 text-lg text-gray-500">Enhance your skills and stay informed with our curated resources for performers.</p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {resources.map((resource) => (
              <Card key={resource.id} className="bg-white">
                <CardHeader>
                  <CardTitle className="text-burgundy">{resource.title}</CardTitle>
                  <CardDescription>{resource.type}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-500 mb-4">{resource.description}</p>
                  <div className="space-y-2">
                    {resource.date && (
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-emerald-700" />
                        <span className="font-semibold">Date:</span>
                        <span className="ml-2">{resource.date}</span>
                      </div>
                    )}
                    {resource.location && (
                      <div className="flex items-center text-sm">
                        <MapPin className="mr-2 h-4 w-4 text-emerald-700" />
                        <span className="font-semibold">Location:</span>
                        <span className="ml-2">{resource.location}</span>
                      </div>
                    )}
                    {resource.author && (
                      <div className="flex items-center text-sm">
                        <Users className="mr-2 h-4 w-4 text-emerald-700" />
                        <span className="font-semibold">Author:</span>
                        <span className="ml-2">{resource.author}</span>
                      </div>
                    )}
                    {resource.duration && (
                      <div className="flex items-center text-sm">
                        <Clock className="mr-2 h-4 w-4 text-emerald-700" />
                        <span className="font-semibold">Duration:</span>
                        <span className="ml-2">{resource.duration}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <DollarSign className="mr-2 h-4 w-4 text-emerald-700" />
                      <span className="font-semibold">Price:</span>
                      <span className="ml-2">{resource.price}</span>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="bg-burgundy text-white">Learn More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  )

  const SignInPage = () => (
    <main className="flex-1">
      <section className="w-full py-12 md:py-24 lg:py-32 bg-emerald-50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-burgundy">
                Sign In to BookedNBusy
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Access your account to manage your profile, apply for auditions, and connect with industry professionals.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-4">
              <form className="space-y-4">
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <Button className="w-full bg-burgundy text-white" type="submit">Sign In</Button>
              </form>
              <div className="text-sm text-gray-500">
                Don't have an account? <Link href="#" className="underline text-burgundy">Sign up</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
  const ChatRoomPage = () => {
    interface Message {
      id: number;
      author: string;
      content: string;
    }
  
    interface Thread {
      id: number;
      title: string;
      messages: Message[];
    }
  
    const [threads, setThreads] = useState<Thread[]>([
      {
        id: 1,
        title: "General Discussion",
        messages: [
          { id: 1, author: "User 1", content: "Hello, everyone!" },
          { id: 2, author: "User 2", content: "Hi there!" },
        ],
      },
    ]);
  
    const [activeThread, setActiveThread] = useState<Thread | null>(null);
    const [newThreadTitle, setNewThreadTitle] = useState("");
    const [newMessage, setNewMessage] = useState("");
  
    const handleCreateThread = (e: React.FormEvent) => {
      e.preventDefault();
      if (newThreadTitle.trim()) {
        const newThread: Thread = {
          id: threads.length + 1,
          title: newThreadTitle,
          messages: [],
        };
        setThreads([...threads, newThread]);
        setNewThreadTitle("");
      }
    };
  
    const handleSendMessage = (e: React.FormEvent) => {
      e.preventDefault();
      if (newMessage.trim() && activeThread) {
        const updatedThreads = threads.map((thread) =>
          thread.id === activeThread.id
            ? {
                ...thread,
                messages: [
                  ...thread.messages,
                  { id: thread.messages.length + 1, author: "You", content: newMessage },
                ],
              }
            : thread
        );
        setThreads(updatedThreads);
        setNewMessage("");
      }
    };
  
    return (
      <main className="flex-1 p-4 bg-emerald-50">
        <h1 className="text-3xl font-bold mb-6 text-burgundy">Chat Room</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h2 className="text-lg font-bold mb-4">Threads</h2>
            <form onSubmit={handleCreateThread} className="mb-4">
              <input
                type="text"
                placeholder="New thread title"
                value={newThreadTitle}
                onChange={(e) => setNewThreadTitle(e.target.value)}
                className="input-class"
              />
              <button type="submit" className="button-class">Create</button>
            </form>
            <ul>
              {threads.map((thread) => (
                <li key={thread.id} onClick={() => setActiveThread(thread)}>
                  {thread.title}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-4">{activeThread ? activeThread.title : "Select a thread"}</h2>
            <ul>
              {activeThread?.messages.map((msg) => (
                <li key={msg.id}>
                  <strong>{msg.author}:</strong> {msg.content}
                </li>
              ))}
            </ul>
            {activeThread && (
              <form onSubmit={handleSendMessage}>
                <input
                  type="text"
                  placeholder="Type your message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="input-class"
                />
                <button type="submit" className="button-class">Send</button>
              </form>
            )}
          </div>
        </div>
      </main>
    );
  };
  
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {currentPage === "home" && <HomePage />}
      {currentPage === "auditions" && <AuditionsPage />}
      {currentPage === "resources" && <ResourcesPage />}
      {currentPage === "profile" && <ProfilePage />}
      {currentPage === "signin" && <SignInPage />}
      {currentPage === "chat" && <ChatRoomPage />}
      <Footer />
    </div>
  )
}