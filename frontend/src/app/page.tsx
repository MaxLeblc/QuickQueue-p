import Image from "next/image"
import Link from "next/link"

export default function Home() {

  return (
    <div>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between px-4 my-8 font-raleway font-medium text-lg">
          <div className="flex items-center gap-3">
            <Image
              src="/QQ_logo.png"
              width={60}
              height={60}
              alt="quickqueue"
            />
            <h1 className="mr-auto font-extrabold text-3xl">QuickQueue</h1>
          </div>
          <div className="flex items-center gap-7 justify-center">
            <Link href="/pricing" className="mr-14">Pricing</Link>
            <Link href="/about">How It Works</Link>
          </div>
          <div className="flex px-3 py-2 w-fit justify-around gap-10 max-sm:gap-5 items-center max-sm:hidden">
            <Link href="/auth" className="bg-custom-amber justify-between p-3 px-5 font-bold text-black rounded-lg hover:scale-105 transition-all ease-in-out">Quick Start</Link>
          </div>
        </div>
        <div className="flex flex-col justify-center  mx-auto px-8 py-8">
          <h2 className="font-bold text-4xl">Create Waitlist</h2>
          <h2 className="font-bold text-4xl text-custom-amber mb-6">Very Quickely</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus eius nihil veniam, ipsam sit amet culpa ut modi id pariatur animi fugiat, aperiam architecto, tempora quos eaque. Enim, animi harum.</p>
        </div>
      </div>
    </div>
  )
}
