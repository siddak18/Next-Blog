import Feeed from '@components/Feeed'
import '../Styles/globals.css'

const Home = () => {
  return (
    <section className='flex flex-col w-full items-center mt-20'>
        <h1 className='text-4xl font-extrabold text-slate-600'>Blog app</h1>
        <p className='w-2/3 text-center mt-2 text-slate-400'>Embark on a journey of discovery with Blog App , a platform dedicated to bringing you a diverse range of compelling content. Whether you're a tech enthusiast, a life explorer, or someone seeking inspiration, our blog has something for everyone.</p>
        <Feeed></Feeed>
    </section>
  )
}

export default Home