import { Navigation } from "@/components/navbar/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Welcome to Green University of Bangladesh</h1>
          <p className="text-lg text-muted-foreground">Your gateway to excellence in education</p>
        </div>
      </main>
    </div>
  )
}
