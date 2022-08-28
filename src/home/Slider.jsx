import { useContext } from "react";
import { Link } from "react-router-dom";

import { Swiper, SwiperSlide } from "swiper/react";
import { PostContext } from "../context/PostContext";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";

export const Slider = () => {
  const { postState } = useContext(PostContext);

  return (
    <>
      <Swiper
        spaceBetween={30}
        hashNavigation={{
          watchState: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="w-2/3 h-80 pt-5 mb-12 mySwiper "
      >
        {postState.map((post) => {
          if (post.slider === true) {
            return (
              <SwiperSlide data-hash="data1" key={post.id}>
                <Link to={`/post/${post.id}`}>
                  <div className="card w-full mx-auto h-full  align-text-bottom bg-base-100 shadow-xl image-full object-cover">
                    <figure className="w-full   mx-auto">
                      <img className="w-full " src={post.imagen} alt="" />
                    </figure>
                    <div className="card-body mt-9 w-full">
                      <h2 className="card-title mx-auto  pt-5 text-2xl text-center">
                        {post.titulo}
                      </h2>

                      <div className="card-actions justify-end"></div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            );
          }
        })}
      </Swiper>
    </>
  );
};
