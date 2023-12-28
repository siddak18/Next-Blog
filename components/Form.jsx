import React from 'react'

const Form = ({type,post,setpost,submitting,hadlesubmit}) => {
  return (
    <div className='w-full flex flex-col items-center'>
        <form  onSubmit={hadlesubmit} className='mt-10 w-full max-w-2xl  flex flex-col gap-7 glassmorphism'>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Blog content
          </span>
          <textarea
            value={post.content}
            onChange={(e) => setpost({ ...post, content: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_textarea resize-none '
          />
        </label>
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your Blog tags
          </span>
          <input
            value={post.tags}
            onChange={(e) => setpost({ ...post, tags: e.target.value })}
            placeholder='Write your post here'
            required
            className='form_input resize-none '
          />
        </label>
        <button type='submit' className='rounded-full border w-max border-black  py-1.5 px-5 text-black transition-all hover:bg-black hover:text-white text-center text-sm font-inter flex items-center justify-center'>
            create
        </button>
        </form>
    </div>
  )
}

export default Form