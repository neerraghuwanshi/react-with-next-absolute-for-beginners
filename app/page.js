import SuperHero from '@/components/SuperHero'


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

// PascalCase -> OnClickHandler
// camelCase  -> onClickHandler
// snake_case -> on_click_handler
// kebab-case -> on-click-handler