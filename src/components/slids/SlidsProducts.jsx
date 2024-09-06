import React from 'react'
import { ContainerSlid } from './slidsProducts'

export default function SlidsProducts() {
  return (
    <>
			<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
				<div class="carousel-inner">
					<ContainerSlid>
						<div className="carousel-item active">
							<img src="/banne/Bannertop.gif" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="/banne2/b2.gif" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="/banne2/b3.gif" className="d-block w-100" alt="img"/>
						</div>
						<div className="carousel-item">
							<img src="/banne2/b4.gif" className="d-block w-100" alt="img"/>
						</div>
					</ContainerSlid>
				</div>
			</div>
    </>
  )
}
