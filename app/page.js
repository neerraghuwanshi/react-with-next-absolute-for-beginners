import SuperHero from '../components/SuperHero'


function Home () {
  return (
    <div>
      <SuperHero 
        name='Iron Man'
      />
      <SuperHero 
        name='Bat Man'
      />
    </div>
  )
}


export default Home