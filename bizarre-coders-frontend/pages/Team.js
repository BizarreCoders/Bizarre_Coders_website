/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const people = [
  {
    name: "Aryan Sharma",
    role: "Web3 Developer",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1581964383013720064/Ae8N6OT9_400x400.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },

  {
    name: "Agrim Sharma",
    role: "Web3 Developer",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1680581167152766976/Qd-I7IwH_400x400.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Kamal Nayan",
    role: "Competitive Programmer",
    imageUrl:
      "https://pbs.twimg.com/profile_images/1689258076505796608/Nfw0ChmW_400x400.jpg",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Mehak",
    role: "Competitive Programmer",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQEacowKlm_tHw/profile-displayphoto-shrink_400_400/0/1693029196516?e=1701302400&v=beta&t=fChe4GhnAg2MAwh6FANyuu1KxJuVIGwHyd0LoUTlqD4",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Simar",
    role: "Competitive Programmer",
    imageUrl:
      "https://media.licdn.com/dms/image/C4E03AQG8hOqxHa6XUQ/profile-displayphoto-shrink_800_800/0/1659033679631?e=1701302400&v=beta&t=xZLpdvLh9cKKPazMUvyfJ-Dn8yH9VbdMFUvbZCFeOgQ",
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Suraj",
    role: "Competitive Programmer",
    imageUrl:
      "https://media.licdn.com/dms/image/D4D03AQHaHSjkdrcEXw/profile-displayphoto-shrink_800_800/0/1685732362477?e=1701302400&v=beta&t=D7wqftbAB3ncRouYuQTE7SXzsww1hZvYYtpRewRiyr0",
    twitterUrl: "#",
    linkedinUrl: "#",
  },

  // More people...
];

export default function Example() {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl py-12 px-6 lg:px-8 lg:py-24">
        <div className="space-y-12">
          <div className="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
            <h2 className="text-4xl text-red-500 font-bold tracking-tight sm:text-4xl">
              Our Core Team Members
            </h2>
            <p className="text-xl text-gray-500"></p>
          </div>
          <ul
            role="list"
            className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8"
          >
            {people.map((person) => (
              <li key={person.name}>
                <div className="space-y-4 ">
                  <div className="aspect-w-3 aspect-h-2">
                    <img
                      className="rounded-lg object-cover shadow-lg hover:scale-110 hover:shadow-none hover:saturate-150"
                      src={person.imageUrl}
                      alt=""
                    />
                  </div>

                  <div className="space-y-2">
                    <div className="space-y-1 text-lg font-medium leading-6">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a
                          href={person.twitterUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">Twitter</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          href={person.linkedinUrl}
                          className="text-gray-400 hover:text-gray-500"
                        >
                          <span className="sr-only">LinkedIn</span>
                          <svg
                            className="h-5 w-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
