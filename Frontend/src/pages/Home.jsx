"use client"
import ItemList from "../components/ItemList"
import LostLinkSVG from "../components/LostLinkSvg"

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="bg-gray-800 shadow-lg p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Welcome to LostLink</h1>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Recent Lost & Found Items</h2>
          <ItemList />
        </section>
      </main>
    </div>
  )
}

export default Home

