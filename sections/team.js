import Link from 'next/link'

const TeamInfo = [
  {
    name: "Matthew Chan",
    role: "CEO",
    bio: "",
    icon: {
      email: "mailto:matthew@zyphr.ca",
      github: "https://github.com/mtwichan",
      linkedin: "https://www.linkedin.com/in/matthewichan/",
    },
    img: "/images/team/matt.jpg",
  },
  {
    name: "Adam Kulidjian",
    role: "CTO",
    bio: "",
    icon: {
      email: "mailto:adam@zyphr.ca",
      github: "https://github.com/Kully",
      linkedin: "https://www.linkedin.com/in/adam-kulidjian-59309467/",
    },
    img: "/images/team/adam.jpg",
  },
  {
    name: "Aanika Rahman",
    role: "Software Developer",
    bio: "",
    icon: {
      email: "mailto:aanika@zyphr.ca",
      github: "https://github.com/ohaanika",
      linkedin: "https://www.linkedin.com/in/aanikarahman/",
    },
    img: "/images/team/aanika.jpg",
  },
]

const Team = () => (
  <section id="team">
    <div>
      <h3>Team</h3>
      <p>
        Placeholder section.
      </p>
    </div>
  </section>
)

export default Team
