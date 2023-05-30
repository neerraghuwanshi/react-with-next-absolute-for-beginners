import SuperHero from '@/components/SuperHero'
import ThinkPositive from '@/components/ThinkPositive'


function Home () {
  return (
    <div>
      {/* <SuperHero 
        name='Iron Man'
      />
      <SuperHero 
        name='Bat Man'
      /> */}
      <ThinkPositive />
    </div>
  )
}


export default Home

// PascalCase -> OnClickHandler
// camelCase  -> onClickHandler
// snake_case -> on_click_handler
// kebab-case -> on-click-handler