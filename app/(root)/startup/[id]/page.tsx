import React from 'react'

const page =async ({params} : {params : Promise<{id : string}>}) => {

    const id = (await params).id

  return (


    <>
        this is startup number : {id}
    </>
  )
}

export default page