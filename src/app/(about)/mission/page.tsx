import React from 'react'

function AboutUs() {
  return (
    <div className="w-screen h-screen ">
      <div className="h-full w-full bg-[url('/jedsdlogo.png')] bg-contain bg-center bg-no-repeat opacity-25">

      </div>
      <section className=" absolute top-0 left-0 w-full h-full ">
    <div className="py-24 size-full bg-white/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            <div className="lg:text-center">
                
                <p className="font-heading mt-2 text-3xl leading-8 font-semibold tracking-tight text-gray-900 md:text-5xl">
                    We know tech, we know finance. We are fintech experts.
                </p>
                <p className="mt-4 max-w-2xl text-lg text-gray-500 lg:mx-auto">
                    We know how to handle taxation for all the
                    countried we operate in. We care for our customers and help them manage cashflows.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, obcaecati sunt! Officiis alias reiciendis nisi quod nam sint dolore, optio, dolor eum soluta tempora vero provident? A ex nihil quibusdam!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel, obcaecati sunt! Officiis alias reiciendis nisi quod nam sint dolore, optio, dolor eum soluta tempora vero provident? A ex nihil quibusdam!
                </p>
            </div>

            <div className="mt-10">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503163/api-settings.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful API</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500">
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/503138/webpack.svg" />
                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Easy to integrate
                                SDK
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/511771/dashboard-671.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Low Transaction Cost
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary-500 text-white">
                                <img src="https://www.svgrepo.com/show/76267/free-commercial-label.svg" />

                            </div>
                            <p className="font-heading ml-16 text-lg leading-6 font-bold text-gray-700">Powerful Dashboard
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-base text-gray-500"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
    </div>
  )
}

export default AboutUs