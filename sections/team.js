import Link from 'next/link'
import Image from 'next/image'
import PlaceholderImage from '../components/placeholders/placeholderImage'
import Section from '../components/section/section'
import SectionHeading from '../components/section/sectionHeading'
import SectionContent from '../components/section/sectionContent'
import styles from './team.module.css'

const TeamCardInfo = [
  {
    name: 'Matthew Chan',
    role: 'CEO',
    bio: [
      'Formerly a Solutions Engineer at Plotly, Matthew spent 2 years developing Dash applications and consulting to Fortune 500’s in industries ranging from Oil and Gas to Finance to Tech. While at the company, he led 5-figure workshops to high-value clients across the U.S. and Germany. Matthew also contributed to Plotly’s Dash Bio and Dash Enterprise.',
      'He is currently wrapping up his BASc. in Electrical Engineering at The University of British Columbia.',
    ],
    icons: {
      email: 'mailto:matthew@zyphr.ca',
      github: 'https://github.com/mtwichan',
      linkedin: 'https://www.linkedin.com/in/matthewichan/',
    },
    image: '/images/team/matt.jpg',
  },
  {
    name: 'Adam Kulidjian',
    role: 'CTO',
    bio: [
      "As Plotly's former lead and #2 highest contributor to Plotly's Python Library, Adam contributed many key features to the library including gantt charts, sploms, and county choropleths. He served as the core contributor of the Plotly Python library for 3 years, pushing the total downloads to over 3 million.",
      'Adam holds a B.Sc. in Mathematics from McGill University. In his spare time, he likes to play jazz piano and draw short animations.',
    ],
    icons: {
      email: 'mailto:adam@zyphr.ca',
      github: 'https://github.com/Kully',
      linkedin: 'https://www.linkedin.com/in/adam-kulidjian-59309467/',
    },
    image: '/images/team/adam.jpg',
  },
]

function displayTeamCard(TeamCard, i) {
  let image = null
  if (TeamCard.image) {
    image = <Image src={TeamCard.image} width="100%" height="100%" layout="responsive" objectFit="cover" />
  } else {
    image = <PlaceholderImage />
  }

  let bio = null
  if (Array.isArray(TeamCard.bio)) {
    bio = TeamCard.bio.map((bioPara, i) => (
      <p key={i} className={styles.cardContentBioPara}>
        {bioPara}
      </p>
    ))
  } else {
    bio = <p>{TeamCard.bio}</p>
  }

  let icons = []
  if (TeamCard.icons.github) {
    icons.push(
      <div style={{ paddingRight: '1em' }} key={1}>
        <Link href={TeamCard.icons.github}>
          <a>GitHub</a>
        </Link>
      </div>,
    )
  }
  if (TeamCard.icons.linkedin) {
    icons.push(
      <div key={2}>
        <Link href={TeamCard.icons.linkedin}>
          <a>LinkedIn</a>
        </Link>
      </div>,
    )
  }

  return (
    <div className={styles.card} key={i}>
      <div className={styles.cardImage}>{image}</div>
      <div className={styles.cardContent}>
        <div>
          <h5 className={styles.cardContentName}>{TeamCard.name}</h5>
          <h6 className={styles.cardContentRole}>{TeamCard.role}</h6>
        </div>
        {bio}
        <div className={styles.cardContentIcons}>{icons}</div>
      </div>
    </div>
  )
}

const Team = () => (
  <Section id="team">
    <div className="row no-gutters">
      <div className="col-lg-4 col-md-12 col-sm-12 pr-lg-5 p-0">
        <SectionHeading>Team</SectionHeading>
        <SectionContent>
          <p>Meet the humans behind the sparkle sparkle.</p>
        </SectionContent>
      </div>
      <div className="col-lg-8 col-md-12 col-sm-12 p-0">
        <div className={styles.cardList}>{TeamCardInfo.map((TeamCard, i) => displayTeamCard(TeamCard, i))}</div>
      </div>
    </div>
  </Section>
)

export default Team
