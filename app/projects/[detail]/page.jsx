'use client';
import Link from 'next/link';
import Carousel from './carousel';
import projectData from '../dataProject';
import Wrapper from '@/app/components/wrapper';

function DetailProject({ params }) {
  const data = projectData.find((e) => e.url === params.detail);
  return (
    <section
      className="bg-crema  min-h-screen  max-h-[100%]"
      key="/projects/[detail]"
    >
      <Wrapper>
        <div
          key={'/detail'}
          className="flex flex-col items-center justify-center h-screen  bg-background text-letra overflow-y-auto overflow-x-hidden"
        >
          <div className="w-9/12 xxl:w-11/12 mx-auto border-[1px] border-letra rounded-md ">
            <div className="grid sm:grid-cols-[40%_60%] grid-cols-1 gap-4 p-4 ">
              <div>
                <img
                  className="w-fit h-fit object-cover"
                  src={data?.image[0].src}
                  alt="altimage"
                />
                <Link href="/projects">
                  <button className="p-2 w-full mt-4 hover:scale-105 duration-300 text-xl bg-letra text-magenta rounded-md">
                    Volver
                  </button>
                </Link>
              </div>
              <div className="flex flex-col xxl:justify-center justify-center xxl:gap-0 gap-6">
                <h1 className=" text-letra text-5xl font-medium">
                  {data.title}
                </h1>
                <p className=" py-6 text-letra text-2xl font-normal">
                  {data.description}
                </p>

                <div className="flex gap-4 flex-wrap items-center">
                  {data.tech.map((element, index) => (
                    <div
                      className="flex gap-2 items-center hover:scale-105 duration-300 cursor-pointer"
                      key={index}
                    >
                      <element.tech />
                      <p className="text-xl font-semibold">{element.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="border-t-[1px]  border-letra border-opacity-[80%] outline-none my-[30px] p-6 ">
              <Carousel data={data.image}></Carousel>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default DetailProject;
