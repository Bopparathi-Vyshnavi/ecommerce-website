import Headersection from '../components/Headersection'
import Collectionsection from '../components/Collectionsection'
import Featuredsection from '../components/Featuredsection'
import Travelsection from '../components/Travelsection'
import Deliversection from '../components/Deliversection'
import Groupsection from '../components/Groupsection'
import Contactsection from '../components/Contactsection'

const Home = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Headersection />
        <Collectionsection />
        <Featuredsection />
        <Travelsection />
        <Deliversection />
      </div>
      <Groupsection />
      <Contactsection />
    </>
  )
}

export default Home
