import Link from 'next/link'


function Home () {
  return (
    <>
      {/* Bad Practice */}
      <a href="/login">Bad Login</a>
      <br/>
      {/* Good Practice */}
      <Link href="/login">Good Login</Link>
    </>
  )
}


export default Home