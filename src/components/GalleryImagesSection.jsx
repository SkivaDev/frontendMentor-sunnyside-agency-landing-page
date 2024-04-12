import React from 'react'

const GalleryImagesSection = () => {
  return (
    <section>
        <div className='grid grid-cols-2 grid-rows-2 md:grid-cols-4 md:grid-rows-1'>
          <picture>
            <source media="(min-width:40.625rem)" srcset="./images/desktop/image-gallery-milkbottles.jpg"/>
            <img src="./images/mobile/image-gallery-milkbottles.jpg" alt="milkbottles image"  />
          </picture>
          <picture>
            <source media="(min-width:40.625rem)" srcset="./images/desktop/image-gallery-orange.jpg"/>
            <img src="./images/mobile/image-gallery-orange.jpg" alt="orange image"  />
          </picture>
          <picture>
            <source media="(min-width:40.625rem)" srcset="./images/desktop/image-gallery-cone.jpg"/>
            <img src="./images/mobile/image-gallery-cone.jpg" alt="cone image"  />
          </picture>
          <picture>
            <source media="(min-width:40.625rem)" srcset="./images/desktop/image-gallery-sugarcubes.jpg"/>
            <img src="./images/mobile/image-gallery-sugar-cubes.jpg" alt="sugarcubes image"  />
          </picture>
        </div>
    </section>
  )
}

export default GalleryImagesSection