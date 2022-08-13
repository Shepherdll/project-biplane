import React from 'react'
import Searchbar from './Searchbar'
import PlaneImage from './PlaneImage'

export default function StatHead() {
  return (
    <section id="projects" class="section projects">
            <div class="projects__grid">
                <Searchbar planeTitle={"Plane 1"}/>
                <PlaneImage PlaneImage={"https://wiki.warthunder.com/images/thumb/2/2b/GarageImage_P-36C.jpg/1200px-GarageImage_P-36C.jpg"}/>
            </div>
            <div class="projects__grid">
                <Searchbar planeTitle={"Plane 2"}/>
                <PlaneImage PlaneImage={"https://wiki.warthunder.com/images/thumb/0/01/GarageImage_F-14A_Early.jpg/1200px-GarageImage_F-14A_Early.jpg"}/>
            </div>
        </section>
  )
}
