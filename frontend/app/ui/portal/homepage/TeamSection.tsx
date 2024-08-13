export default function TeamSection() {
  return (
    <div className="pt-8 sm:pt-16">
      <div className="relative isolate">
        <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-2xl flex-col gap-16 bg-white/5 px-6 py-16 ring-1 ring-white/10 sm:rounded-3xl sm:p-8 lg:mx-0 lg:max-w-none lg:flex-row lg:items-center lg:py-20 xl:gap-x-20 xl:px-20">
            <div className="w-full flex-none lg:max-w-sm order-last lg:order-first">
              <img
                alt="team of computer science club"
                src="/images/team/executive-board-2024-2025-02.jpg"
                className="h-96 w-full rounded-2xl object-cover shadow-xl lg:aspect-square lg:h-auto"
              />
            </div>
            <div className="w-full flex-auto">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Meet our team</h2>
              <p className="mt-6 text-lg leading-8">
              Get to know the awesome group behind the Computer Science Club! We are a team of dedicated and passionate students, working together to make this club the best it can be.
              <br />
              <br />
              Beyond the Executive Board, we are always looking to expand our team with talented members who want to get involved. There are open roles such as Web Developer, Event Coordinator, Graphic Designer, Photographer, and more. If you are passionate about contributing to the BC tech community, we'd love to have you join us!
              </p>
              <div className="mt-10 flex">
                <a href="/team" className="text-sm font-semibold leading-6 text-indigo-400">
                  Meet the team <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-16 -z-10 flex transform-gpu justify-center overflow-hidden blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(73.6% 51.7%, 91.7% 11.8%, 100% 46.4%, 97.4% 82.2%, 92.5% 84.9%, 75.7% 64%, 55.3% 47.5%, 46.5% 49.4%, 45% 62.9%, 50.3% 87.2%, 21.3% 64.1%, 0.1% 100%, 5.4% 51.1%, 21.4% 63.9%, 58.9% 0.2%, 73.6% 51.7%)',
            }}
            className="aspect-[1318/752] w-[82.375rem] flex-none bg-gradient-to-r from-[#80caff] to-[#4f46e5] opacity-25"
          />
        </div>
      </div>
    </div>
  )
}
